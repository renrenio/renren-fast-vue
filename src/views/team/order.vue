<template>
  <el-dialog
    title="投注订单列表"
    :close-on-click-modal="false"
    :visible.sync="visible"
    width="80%">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-form-item>
        <el-input v-model="dataForm.happyId" placeholder="环聊ID" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="dataList"
      border
      v-loading="dataListLoading"
      height="460"
      style="width: 100%;">
      <el-table-column
        prop="id"
        header-align="center"
        align="center"
        width="100"
        label="订单编号">
      </el-table-column>
      <el-table-column
        prop="happyId"
        header-align="center"
        align="center"
        width="100"
        label="欢聊id">
      </el-table-column>
      <el-table-column
        prop="id"
        header-align="center"
        align="center"
        label="游戏名称">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.lotteryType == '1' " size="small">北京pk10</el-tag>
          <el-tag v-if="scope.row.lotteryType == '2' " size="small">时时彩</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="period"
        header-align="center"
        align="center"
        label="投注期号">
      </el-table-column>
      <el-table-column
        prop="content"
        header-align="center"
        align="center"
        label="投注内容">
      </el-table-column>
      <el-table-column
        prop="amount"
        header-align="center"
        align="center"
        label="投注金额">
      </el-table-column>
      <el-table-column
        prop="openCode"
        header-align="center"
        align="center"
        label="开奖号码">
      </el-table-column>
      <el-table-column
        prop="status"
        header-align="center"
        align="center"
        label="订单状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === 0" size="small">待确认</el-tag>
          <el-tag v-if="scope.row.status === 1" size="small">待开奖</el-tag>
          <el-tag v-if="scope.row.status === 2" size="small" type="success">已开奖</el-tag>
          <el-tag v-if="scope.row.status === 3" size="small" type="danger">已取消</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="createTime"
        header-align="center"
        align="center"
        label="投注时间">
      </el-table-column>
      <el-table-column
        prop="isWin"
        header-align="center"
        align="center"
        label="是否中奖">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.isWin === 0" size="small" type="danger" >未中奖</el-tag>
          <el-tag v-if="scope.row.isWin === 1" size="small" type="success">中奖</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="awardAmount"
        header-align="center"
        align="center"
        label="中奖金额">
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
  </el-dialog>
</template>

<script>
  import API from '@/api'
  export default {
    data () {
      return {
        visible: false,
        dataForm: {
          happyId: ''
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false
      }
    },
    methods: {
      init (tid) {
        this.visible = true
        this.getDataList(tid)
      },
      // 获取数据列表
      getDataList (tid) {
        this.dataListLoading = true
        var params = {
          page: this.pageIndex,
          limit: this.pageSize,
          tid: tid,
          happyId: this.happyId
        }
        API.order.list(params).then(({data}) => {
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
      }
    }
  }
</script>
