<template>
  <div class="mod-user">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-form-item>
        <el-input v-model="dataForm.rechargeNo" placeholder="单号" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
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
        prop="rechargeNo"
        header-align="center"
        align="center"
        width="180"
        label="单号">
      </el-table-column>
      <el-table-column
        prop="amount"
        header-align="center"
        align="center"
        label="金额">
        <template scope="scope">
          {{ scope.row.amount | filterPrice }}
        </template>
      </el-table-column>

      <el-table-column
        prop="happyId"
        header-align="center"
        align="center"
        label="会员id">
      </el-table-column>

      <el-table-column
        prop="teamName"
        header-align="center"
        align="center"
        label="群名称">
      </el-table-column>
      <el-table-column
        prop="createTime"
        header-align="center"
        align="center"
        width="180"
        label="创建时间">
      </el-table-column>

      <el-table-column
        prop="id"
        header-align="center"
        align="center"
        label="状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === 1" size="small" type="danger">待审核</el-tag>
          <el-tag v-if="scope.row.status === 2" size="small">审核通过</el-tag>
          <el-tag v-if="scope.row.status === 3" size="small" type="danger">审核未通过</el-tag>
        </template>
      </el-table-column>



      <el-table-column
        fixed="right"
        header-align="center"
        align="center"
        width="150"
        label="操作">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status === 1" type="text" size="small" @click="approve(scope.row.id,scope.row.tid,2)">审核通过</el-button>
          <el-button v-if="scope.row.status === 1" type="text" size="small" @click="approve(scope.row.id,scope.row.tid,3)">审核拒绝</el-button>
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
  </div>
</template>

<script>
  import API from '@/api'

  export default {
    data () {
      return {
        dataForm: {
          rechargeNo: ''
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        dataListSelections: [],
        addOrUpdateVisible: false
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
          rechargeNo: this.dataForm.rechargeNo
        }
        API.recharge.list(params).then(({data}) => {
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

      // 审核
      approve (id, tid, type) {
        this.$confirm(`确定进行审核操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var params = {
            rechargeId: id,
            tid: tid,
            type: type
          }
          API.recharge.approve(params).then(({data}) => {
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
      }
    }
  }
</script>
