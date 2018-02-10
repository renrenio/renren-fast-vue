<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
      <el-form-item label="类型" prop="type">
        <el-radio-group v-model="dataForm.type">
          <el-radio :label="0">目录</el-radio>
          <el-radio :label="1">菜单</el-radio>
          <el-radio :label="2">按钮</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="菜单名称" prop="name">
        <el-input v-model="dataForm.name" placeholder="菜单名称或按钮名称"></el-input>
      </el-form-item>
      <el-form-item label="上级菜单" prop="parentName">
        <el-popover
          ref="menuListPopover"
          placement="bottom-end"
          trigger="click">
          <el-tree
            :data="menuList"
            :props="menuListTreeProps"
            node-key="menuId"
            ref="menuListTree"
            @current-change="menuListTreeCurrentChangeHandle"
            :default-expand-all="true"
            :highlight-current="true"
            :expand-on-click-node="false">
          </el-tree>
        </el-popover>
        <el-input v-model="dataForm.parentName" v-popover:menuListPopover :readonly="true" placeholder="点击选择上级菜单" class="menu-list__input"></el-input>
      </el-form-item>
      <el-form-item v-if="dataForm.type === 1" label="菜单URL" prop="url">
        <el-input v-model="dataForm.url" placeholder="菜单URL"></el-input>
      </el-form-item>
      <el-form-item v-if="dataForm.type !== 0" label="授权标识" prop="perms">
        <el-input v-model="dataForm.perms" placeholder="多个用逗号分隔, 如: user:list,user:create"></el-input>
      </el-form-item>
      <el-form-item v-if="dataForm.type !== 2" label="排序号" prop="orderNum">
        <el-input-number v-model="dataForm.orderNum" controls-position="right" :min="0" label="排序号"></el-input-number>
      </el-form-item>
      <el-form-item v-if="dataForm.type !== 2" label="菜单图标" prop="icon">
        <el-row>
          <el-col :span="22">
            <el-input v-model="dataForm.icon" placeholder="菜单图标"></el-input>
          </el-col>
          <el-col :span="2" class="icon-tips">
            <el-tooltip placement="top" effect="light">
              <div slot="content">
                <span>获取图标: </span><br/>
                1. 暂时兼容旧版引入使用 <a href="//fontawesome.io/icons/" target="_blank">fontawesome</a><br/>
                2. 之后统一全站修改使用 <a href="//github.com/daxiongYang/renren-fast-vue/blob/master/src/iconfont/index.js" target="_blank">iconfont</a>
              </div>
              <i class="el-icon-warning"></i>
            </el-tooltip>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import API from '@/api'
  import { treeDataTranslate } from '@/utils'
  export default {
    data () {
      var validateUrl = (rule, value, callback) => {
        if (this.dataForm.type === 1 && !/\S/.test(value)) {
          callback(new Error('菜单URL不能为空'))
        } else {
          callback()
        }
      }
      return {
        visible: false,
        dataForm: {
          id: 0,
          type: 1,
          name: '',
          parentId: 0,
          parentName: '',
          url: '',
          perms: '',
          orderNum: 0,
          icon: ''
        },
        dataRule: {
          name: [
            { required: true, message: '菜单名称不能为空', trigger: 'blur' }
          ],
          parentName: [
            { required: true, message: '上级菜单不能为空', trigger: 'change' }
          ],
          url: [
            { validator: validateUrl, trigger: 'blur' }
          ]
        },
        menuList: [],
        menuListTreeProps: {
          label: 'name',
          children: 'children'
        }
      }
    },
    methods: {
      init (id) {
        this.dataForm.id = id || 0
        API.menu.select().then(({data}) => {
          this.menuList = treeDataTranslate(data.menuList, 'menuId')
        }).then(() => {
          this.visible = true
          this.$nextTick(() => {
            this.$refs['dataForm'].resetFields()
          })
        }).then(() => {
          if (!this.dataForm.id) {
            // 新增
            this.menuListTreeSetCurrentNode()
          } else {
            // 修改
            API.menu.info(this.dataForm.id).then(({data}) => {
              this.dataForm.id = data.menu.menuId
              this.dataForm.type = data.menu.type
              this.dataForm.name = data.menu.name
              this.dataForm.parentId = data.menu.parentId
              this.dataForm.url = data.menu.url
              this.dataForm.perms = data.menu.perms
              this.dataForm.orderNum = data.menu.orderNum
              this.dataForm.icon = data.menu.icon
              this.menuListTreeSetCurrentNode()
            })
          }
        })
      },
      // 菜单树选中
      menuListTreeCurrentChangeHandle (data, node) {
        this.dataForm.parentId = data.menuId
        this.dataForm.parentName = data.name
      },
      // 菜单树设置当前选中节点
      menuListTreeSetCurrentNode () {
        this.$refs.menuListTree.setCurrentKey(this.dataForm.parentId)
        this.dataForm.parentName = (this.$refs.menuListTree.getCurrentNode() || {})['name']
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            var params = {
              'menuId': this.dataForm.id || undefined,
              'type': this.dataForm.type,
              'name': this.dataForm.name,
              'parentId': this.dataForm.parentId,
              'url': this.dataForm.url,
              'perms': this.dataForm.perms,
              'orderNum': this.dataForm.orderNum,
              'icon': this.dataForm.icon
            }
            var tick = !this.dataForm.id ? API.menu.add(params) : API.menu.update(params)
            tick.then(({data}) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                    this.$emit('refreshDataList')
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .mod-menu {
    .menu-list__input {
       > .el-input__inner {
        cursor: pointer;
      }
    }
    .icon-tips {
      font-size: 18px;
      text-align: center;
      color: #e6a23c;
      cursor: pointer;
    }
  }
</style>
