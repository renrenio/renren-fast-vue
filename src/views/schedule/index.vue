<template>
  <div class="mod-schedule">
    <el-form :inline="true" :model="dataForm">
      <el-form-item>
        <el-input v-model="dataForm.beanName" placeholder="bean名称" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
        <el-button v-if="isAuth('sys:schedule:save')" type="primary" @click="addOrUpdateHandle()">新增</el-button>
        <el-button v-if="isAuth('sys:schedule:delete')" type="danger" @click="deleteHandle()" :disabled="dataListSelections.length <= 0">批量删除</el-button>
        <el-button v-if="isAuth('sys:schedule:pause')" type="danger" @click="pauseHandle()" :disabled="dataListSelections.length <= 0">批量暂停</el-button>
        <el-button v-if="isAuth('sys:schedule:resume')" type="danger" @click="resumeHandle()" :disabled="dataListSelections.length <= 0">批量恢复</el-button>
        <el-button v-if="isAuth('sys:schedule:run')" type="danger" @click="runHandle()" :disabled="dataListSelections.length <= 0">批量立即执行</el-button>
        <el-button v-if="isAuth('sys:schedule:log')" type="success" @click="logDialogVisible = true">日志列表</el-button>
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
        prop="jobId"
        header-align="center"
        align="center"
        width="80"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="beanName"
        header-align="center"
        align="center"
        label="bean名称">
      </el-table-column>
      <el-table-column
        prop="methodName"
        header-align="center"
        align="center"
        label="方法名称">
      </el-table-column>
      <el-table-column
        prop="params"
        header-align="center"
        align="center"
        label="参数">
      </el-table-column>
      <el-table-column
        prop="cronExpression"
        header-align="center"
        align="center"
        label="cron表达式">
      </el-table-column>
      <el-table-column
        prop="remark"
        header-align="center"
        align="center"
        label="备注">
      </el-table-column>
      <el-table-column
        prop="status"
        header-align="center"
        align="center"
        label="状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === 0" size="small">正常</el-tag>
          <el-tag v-else size="small" type="danger">暂停</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        header-align="center"
        align="center"
        width="200"
        label="操作">
        <template slot-scope="scope">
          <el-button v-if="isAuth('sys:schedule:update')" type="text" size="small" @click="addOrUpdateHandle(scope.row.jobId)">修改</el-button>
          <el-button v-if="isAuth('sys:schedule:delete')" type="text" size="small" @click="deleteHandle(scope.row.jobId)">删除</el-button>
          <el-button v-if="isAuth('sys:schedule:pause')" type="text" size="small" @click="pauseHandle(scope.row.jobId)">暂停</el-button>
          <el-button v-if="isAuth('sys:schedule:resume')" type="text" size="small" @click="resumeHandle(scope.row.jobId)">恢复</el-button>
          <el-button v-if="isAuth('sys:schedule:run')" type="text" size="small" @click="runHandle(scope.row.jobId)">立即执行</el-button>
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
      :title="!addOrUpdateForm.jobId ? '新增' : '修改'"
      :close-on-click-modal="false"
      :visible.sync="addOrUpdateDialogVisible">
      <el-form :model="addOrUpdateForm" :rules="addOrUpdateRule" ref="addOrUpdateForm" label-width="100px">
        <el-form-item label="bean名称" prop="beanName">
          <el-input v-model="addOrUpdateForm.beanName" placeholder="spring bean名称, 如: testTask"></el-input>
        </el-form-item>
        <el-form-item label="方法名称" prop="methodName">
          <el-input v-model="addOrUpdateForm.methodName" placeholder="方法名称"></el-input>
        </el-form-item>
        <el-form-item label="参数" prop="params">
          <el-input v-model="addOrUpdateForm.params" placeholder="参数"></el-input>
        </el-form-item>
        <el-form-item label="cron表达式" prop="cronExpression">
          <el-input v-model="addOrUpdateForm.cronExpression" placeholder="如: 0 0 12 * * ?"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="addOrUpdateForm.remark" placeholder="备注"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addOrUpdateDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addOrUpdateFormSubmit()">确定</el-button>
      </span>
    </el-dialog>
    <!-- 弹窗, 日志列表 -->
    <el-dialog
      title="日志列表"
      :close-on-click-modal="false"
      :visible.sync="logDialogVisible"
      width="75%">
      <log></log>
    </el-dialog>
  </div>
</template>

<script>
  import API from '@/api'
  import Log from './log'
  export default {
    data () {
      return {
        dataForm: {
          beanName: ''
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        dataListSelections: [],
        addOrUpdateDialogVisible: false,
        addOrUpdateForm: {
          jobId: 0,
          beanName: '',
          methodName: '',
          params: '',
          cronExpression: '',
          remark: '',
          status: 0
        },
        addOrUpdateRule: {
          beanName: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          methodName: [
            { required: true, message: '方法名称不能为空', trigger: 'blur' }
          ],
          cronExpression: [
            { required: true, message: 'cron表达式不能为空', trigger: 'blur' }
          ]
        },
        logDialogVisible: false
      }
    },
    components: {
      Log
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
          beanName: this.dataForm.beanName
        }
        API.schedule.list(params).then(({data}) => {
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
        this.addOrUpdateForm.jobId = id || 0
        this.addOrUpdateDialogVisible = true
        this.$nextTick(() => {
          this.$refs['addOrUpdateForm'].resetFields()
          if (this.addOrUpdateForm.jobId) {
            API.schedule.info(this.addOrUpdateForm.jobId).then(({data}) => {
              if (data && data.code === 0) {
                this.addOrUpdateForm.beanName = data.schedule.beanName
                this.addOrUpdateForm.methodName = data.schedule.methodName
                this.addOrUpdateForm.params = data.schedule.params
                this.addOrUpdateForm.cronExpression = data.schedule.cronExpression
                this.addOrUpdateForm.remark = data.schedule.remark
                this.addOrUpdateForm.status = data.schedule.status
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
              'jobId': this.addOrUpdateForm.jobId || undefined,
              'beanName': this.addOrUpdateForm.beanName,
              'methodName': this.addOrUpdateForm.methodName,
              'params': this.addOrUpdateForm.params,
              'cronExpression': this.addOrUpdateForm.cronExpression,
              'remark': this.addOrUpdateForm.remark,
              'status': this.addOrUpdateForm.jobId ? this.addOrUpdateForm.status : undefined
            }
            var tick = this.addOrUpdateForm.jobId ? API.schedule.update(params) : API.schedule.add(params)
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
        var jobIds = id ? [id] : this.dataListSelections.map(item => {
          return item.jobId
        })
        this.$confirm(`确定对[id=${jobIds.join(',')}]进行[${id ? '删除' : '批量删除'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          API.schedule.del(jobIds).then(({data}) => {
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
      },
      // 暂停
      pauseHandle (id) {
        var jobIds = id ? [id] : this.dataListSelections.map(item => {
          return item.jobId
        })
        this.$confirm(`确定对[id=${jobIds.join(',')}]进行[${id ? '暂停' : '批量暂停'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          API.schedule.pause(jobIds).then(({data}) => {
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
      },
      // 恢复
      resumeHandle (id) {
        var jobIds = id ? [id] : this.dataListSelections.map(item => {
          return item.jobId
        })
        this.$confirm(`确定对[id=${jobIds.join(',')}]进行[${id ? '恢复' : '批量恢复'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          API.schedule.resume(jobIds).then(({data}) => {
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
      },
      // 立即执行
      runHandle (id) {
        var jobIds = id ? [id] : this.dataListSelections.map(item => {
          return item.jobId
        })
        this.$confirm(`确定对[id=${jobIds.join(',')}]进行[${id ? '立即执行' : '批量立即执行'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          API.schedule.run(jobIds).then(({data}) => {
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
