<template>
  <div class="mod-menu">
    <el-form :inline="true" :model="dataForm">
      <el-form-item>
        <el-button type="primary" @click="addOrUpdateHandle()">新增</el-button>
      </el-form-item>
    </el-form>
    <el-tree
      :data="dataList"
      :props="dataListTreeProps"
      :highlight-current="true"
      node-key="menuId"
      :default-expand-all="true"
      :expand-on-click-node="false"
      @mouseleave.native="dataListTreeActiveNodeId = 0"
      :render-content="dataListTreeRenderContent">
    </el-tree>
    <!-- 弹窗, 新增 / 修改 -->
    <el-dialog
      :title="!addOrUpdateForm.userId ? '新增' : '修改'"
      :close-on-click-modal="false"
      :visible.sync="addOrUpdateDialogVisible">
      <el-form :model="addOrUpdateForm" :rules="addOrUpdateRule" ref="addOrUpdateForm" label-width="80px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="addOrUpdateForm.userName" placeholder="登录帐号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :class="{ 'is-required': !addOrUpdateForm.userId }">
          <el-input v-model="addOrUpdateForm.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="comfirmPassword" :class="{ 'is-required': !addOrUpdateForm.userId }">
          <el-input v-model="addOrUpdateForm.comfirmPassword" type="password" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addOrUpdateForm.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="addOrUpdateForm.mobile" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="角色" size="mini" prop="roleIdList">
          <el-checkbox-group v-model="addOrUpdateForm.roleIdList">
            <!-- <el-checkbox v-for="role in roleList" :key="role.roleId" :label="role.roleId">{{ role.roleName }}</el-checkbox> -->
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="状态" size="mini" prop="status">
          <el-radio-group v-model="addOrUpdateForm.status">
            <el-radio :label="0">禁用</el-radio>
            <el-radio :label="1">正常</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addOrUpdateDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addOrUpdateFormSubmit()">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import API from '@/api'
  import { treeDataTranslate } from '@/utils'
  import { isEmail, isMobile } from '@/utils/validate'
  export default {
    data () {
      var validatePassword = (rule, value, callback) => {
        if (!this.addOrUpdateForm.userId && !/\S/.test(value)) {
          callback(new Error('密码不能为空'))
        } else {
          callback()
        }
      }
      var validateComfirmPassword = (rule, value, callback) => {
        if (!this.addOrUpdateForm.userId && !/\S/.test(value)) {
          callback(new Error('确认密码不能为空'))
        } else if (this.addOrUpdateForm.password !== value) {
          callback(new Error('确认密码与密码输入不一致'))
        } else {
          callback()
        }
      }
      var validateEmail = (rule, value, callback) => {
        if (!isEmail(value)) {
          callback(new Error('邮箱格式错误'))
        } else {
          callback()
        }
      }
      var validateMobile = (rule, value, callback) => {
        if (!isMobile(value)) {
          callback(new Error('手机号格式错误'))
        } else {
          callback()
        }
      }
      return {
        dataForm: {},
        dataListTreeProps: {
          label: 'name',
          children: 'children'
        },
        dataListTreeHandlebarVisible: false,
        dataListTreeActiveNodeId: 0,
        dataList: [],
        addOrUpdateDialogVisible: false,
        addOrUpdateForm: {
          userId: 0,
          userName: '',
          password: '',
          comfirmPassword: '',
          email: '',
          mobile: '',
          roleIdList: [],
          status: 1
        },
        addOrUpdateRule: {
          userName: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          comfirmPassword: [
            { validator: validateComfirmPassword, trigger: 'blur' }
          ],
          email: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { validator: validateEmail, trigger: 'blur' }
          ],
          mobile: [
            { required: true, message: '手机号不能为空', trigger: 'blur' },
            { validator: validateMobile, trigger: 'blur' }
          ]
        }
      }
    },
    activated () {
      this.getDataList()
    },
    methods: {
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        API.menu.list().then(({data}) => {
          this.dataList = treeDataTranslate(data, 'menuId', 'parentId') || []
          this.dataListLoading = false
        })
      },
      // 树形数据列表, 呈现内容
      dataListTreeRenderContent (h, { node, data, store }) {
        return (
          <div on-mouseenter={ () => this.dataListTreeMouseenterHandle(node) } class="tree-handlebar">
            <span>{ data.menuId + '. ' + node.label }</span>
            {
              this.dataListTreeActiveNodeId === node.id
              ? <span class="tree-handlebar__btns">
                <el-button type="text" on-click={ () => this.append(data) }>修改</el-button>
                <el-button type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
              </span>
              : ''
            }
          </div>
        )
      },
      // 树形数据列表, 数据进入处理
      dataListTreeMouseenterHandle (node) {
        this.dataListTreeActiveNodeId = node.id
      },
      // 新增 / 修改
      addOrUpdateHandle (id) {
        this.addOrUpdateForm.userId = id || 0
        API.role.listByUser().then(({data}) => {
          this.roleList = data && data.code === 0 ? data.list : []
        }).then(() => {
          this.addOrUpdateDialogVisible = true
          this.$nextTick(() => {
            this.$refs['addOrUpdateForm'].resetFields()
          })
        }).then(() => {
          if (this.addOrUpdateForm.userId) {
            API.user.info(this.addOrUpdateForm.userId).then(({data}) => {
              if (data && data.code === 0) {
                this.addOrUpdateForm.userName = data.user.username
                this.addOrUpdateForm.email = data.user.email
                this.addOrUpdateForm.mobile = data.user.mobile
                this.addOrUpdateForm.roleIdList = data.user.roleIdList
                this.addOrUpdateForm.status = data.user.status
              }
            })
          }
        })
      },
      // 新增 / 修改, 提交
      addOrUpdateFormSubmit () {
        this.$refs['addOrUpdateForm'].validate((valid) => {
          if (valid) {
            var params = {
              'userId': this.addOrUpdateForm.userId || undefined,
              'username': this.addOrUpdateForm.userName,
              'password': this.addOrUpdateForm.password,
              'email': this.addOrUpdateForm.email,
              'mobile': this.addOrUpdateForm.mobile,
              'status': this.addOrUpdateForm.status,
              'roleIdList': this.addOrUpdateForm.roleIdList
            }
            var tick = this.addOrUpdateForm.userId ? API.user.update(params) : API.user.add(params)
            tick.then(({data}) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.addOrUpdateDialogVisible = false
                    this.getDataList()
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      },
      // 删除
      deleteHandle (id) {
        var userIds = id ? [id] : this.dataListSelections.map(item => {
          return item.userId
        })
        this.$confirm(`确定对[id=${userIds.join(',')}]进行[${id ? '删除' : '批量删除'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          API.user.del(userIds).then(({data}) => {
            if (data && data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: () => {
                  this.getDataList()
                }
              })
            } else {
              this.$message.error(data.msg)
            }
          })
        })
      }
    }
  }
</script>

<style lang="scss">
  .mod-menu {
    .tree-handlebar {
      width: 100%;
    }
    .tree-handlebar__btns {
      margin-left: 15px;
      > .el-button {
        padding: 0;
        font-size: 12px;
      }
    }
  }
</style>

