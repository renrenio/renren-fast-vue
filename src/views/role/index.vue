<template>
  <div class="mod-role">
    <el-form :inline="true" :model="dataForm">
      <el-form-item>
        <el-input v-model="dataForm.roleName" placeholder="角色名称" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
        <el-button v-if="isAuth('sys:role:save')" type="primary" @click="addOrUpdateHandle()">新增</el-button>
        <el-button v-if="isAuth('sys:role:delete')" type="danger" @click="deleteHandle()" :disabled="dataListSelections.length <= 0">批量删除</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="dataList"
      border
      v-loading="dataListLoading"
      @selection-change="selectionChangeHandle"
      style="width: 100%;">
      <el-table-column
        type="selection"
        header-align="center"
        align="center"
        width="50">
      </el-table-column>
      <el-table-column
        prop="roleId"
        header-align="center"
        align="center"
        width="80"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="roleName"
        header-align="center"
        align="center"
        label="角色名称">
      </el-table-column>
      <el-table-column
        prop="remark"
        header-align="center"
        align="center"
        label="备注">
      </el-table-column>
      <el-table-column
        prop="createTime"
        header-align="center"
        align="center"
        width="180"
        label="创建时间">
      </el-table-column>
      <el-table-column
        fixed="right"
        header-align="center"
        align="center"
        width="200"
        label="操作">
        <template slot-scope="scope">
          <el-button v-if="isAuth('sys:role:update')" type="text" size="small" @click="addOrUpdateHandle(scope.row.roleId)">修改</el-button>
          <el-button v-if="isAuth('sys:role:delete')" type="text" size="small" @click="deleteHandle(scope.row.roleId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
    <!-- 弹窗, 新增 / 修改 -->
    <el-dialog
      :title="!addOrUpdateForm.roleId ? '新增' : '修改'"
      :close-on-click-modal="false"
      :visible.sync="addOrUpdateDialogVisible">
      <el-form :model="addOrUpdateForm" :rules="addOrUpdateRule" ref="addOrUpdateForm" label-width="80px">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="addOrUpdateForm.roleName" placeholder="角色名称"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="addOrUpdateForm.remark" placeholder="备注"></el-input>
        </el-form-item>
        <el-form-item size="mini" label="授权">
          <el-tree
            :data="menuList"
            :props="menuListTreeProps"
            node-key="menuId"
            ref="menuListTree"
            :default-expand-all="true"
            show-checkbox>
          </el-tree>
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
  export default {
    data () {
      return {
        dataForm: {
          roleName: ''
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        dataListSelections: [],
        menuList: [],
        menuListTreeProps: {
          label: 'name',
          children: 'children'
        },
        addOrUpdateDialogVisible: false,
        addOrUpdateForm: {
          roleId: 0,
          roleName: '',
          remark: ''
        },
        addOrUpdateRule: {
          roleName: [
            { required: true, message: '角色名称不能为空', trigger: 'blur' }
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
        var params = {
          page: this.pageIndex,
          limit: this.pageSize,
          roleName: this.dataForm.roleName
        }
        API.role.list(params).then(({data}) => {
          if (data && data.code === 0) {
            this.dataList = data.page.list
            this.totalPage = data.page.totalCount
          } else {
            this.dataList = []
            this.totalPage = 0
          }
          this.dataListLoading = false
        })
      },
      // 每页数
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
        this.getDataList()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getDataList()
      },
      // 多选
      selectionChangeHandle (val) {
        this.dataListSelections = val
      },
      // 新增 / 修改
      addOrUpdateHandle (id) {
        this.addOrUpdateForm.roleId = id || 0
        API.menu.list().then(({data}) => {
          this.menuList = treeDataTranslate(data, 'menuId')
        }).then(() => {
          this.addOrUpdateDialogVisible = true
          this.$nextTick(() => {
            this.$refs['addOrUpdateForm'].resetFields()
          })
        }).then(() => {
          if (this.addOrUpdateForm.roleId) {
            API.role.info(this.addOrUpdateForm.roleId).then(({data}) => {
              if (data && data.code === 0) {
                this.addOrUpdateForm.roleName = data.role.roleName
                this.addOrUpdateForm.remark = data.role.remark
                this.$refs.menuListTree.setCheckedKeys(data.role.menuIdList)
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
              'roleId': this.addOrUpdateForm.roleId || undefined,
              'roleName': this.addOrUpdateForm.roleName,
              'remark': this.addOrUpdateForm.remark,
              'menuIdList': this.$refs.menuListTree.getCheckedKeys()
            }
            var tick = this.addOrUpdateForm.roleId ? API.role.update(params) : API.role.add(params)
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
        var roleIds = id ? [id] : this.dataListSelections.map(item => {
          return item.roleId
        })
        this.$confirm(`确定对[id=${roleIds.join(',')}]进行[${id ? '删除' : '批量删除'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          API.role.del(roleIds).then(({data}) => {
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
