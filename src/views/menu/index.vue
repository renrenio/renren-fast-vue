<template>
  <div class="mod-menu">
    <el-form :inline="true" :model="dataForm">
      <el-form-item>
        <el-button type="primary" @click="addOrUpdateHandle()">新增</el-button>
      </el-form-item>
    </el-form>
    <tree-table
      :columns="treeTableColumns"
      :data="dataList"
      highlight-current-row
      border
      style="width: 100%;">
      <el-table-column
        prop="name"
        header-align="center"
        align="center"
        label="菜单名称">
      </el-table-column>
      <el-table-column
        prop="parentName"
        header-align="center"
        align="center"
        label="上级菜单">
      </el-table-column>
      <el-table-column
        prop="icon"
        header-align="center"
        align="center"
        label="图标">
      </el-table-column>
      <el-table-column
        prop="type"
        header-align="center"
        align="center"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="orderNum"
        header-align="center"
        align="center"
        label="排序号">
      </el-table-column>
      <el-table-column
        prop="url"
        header-align="center"
        align="center"
        label="菜单URL">
      </el-table-column>
      <el-table-column
        prop="perms"
        header-align="center"
        align="center"
        label="授权标识">
      </el-table-column>
      <el-table-column
        fixed="right"
        header-align="center"
        align="center"
        width="200"
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="addOrUpdateHandle(scope.row.userId)">修改</el-button>
          <el-button type="text" size="small" @click="deleteHandle(scope.row.userId)">删除</el-button>
        </template>
      </el-table-column>
    </tree-table>
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
            <el-checkbox v-for="role in roleList" :key="role.roleId" :label="role.roleId">{{ role.roleName }}</el-checkbox>
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
  import TreeTable from '@/components/tree-table'
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
        dataForm: {
          userName: ''
        },
        treeTableColumns: [
          {
            text: 'ID',
            value: 'menuId'
          }
        ],
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        dataListSelections: [],
        roleList: [],
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
    components: {
      TreeTable
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
      // 多选
      selectionChangeHandle (val) {
        this.dataListSelections = val
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
