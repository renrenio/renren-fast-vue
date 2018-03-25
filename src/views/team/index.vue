<template>
  <div class="mod-user">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-form-item>
        <el-input v-model="dataForm.name" placeholder="群名称" clearable></el-input>
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
        prop="id"
        header-align="center"
        align="center"
        width="100"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="name"
        header-align="center"
        align="center"
        label="群名称">s
      </el-table-column>
      <el-table-column
        prop="status"
        header-align="center"
        align="center"
        label="是否开启">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === 1" size="small" type="danger">未开启</el-tag>
          <el-tag v-else size="small" type="success">已开启</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        header-align="center"
        align="center"
        label="是否绑定机器人">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.isBindRobot === 1" size="small" type="danger">未绑定</el-tag>
          <el-tag v-else size="small" type="success">已绑定</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="lotteryType"
        header-align="center"
        align="center"
        label="游戏类型">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.lotteryType == '1' " size="small">pk赛车</el-tag>
          <el-tag v-else size="small">重庆时时彩</el-tag>
        </template>
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
          <el-button v-if="scope.row.isBindRobot === 1" type="text" size="small" @click="bindRobot(scope.row.id)">
            绑定机器人
          </el-button>
          <el-button v-if="scope.row.lotteryType == '1' " type="text" size="small"
                     @click="gameConfigHandle(scope.row.id , 1)">pk10配置
          </el-button>
          <el-button v-if="scope.row.lotteryType == '2' " type="text" size="small"
                     @click="gameConfigHandle(scope.row.id , 2)">时时彩配置
          </el-button>
          <el-button v-if="scope.row.status === 1" type="text" size="small" @click="updateGame(scope.row.id,2,'')">
            开启游戏
          </el-button>
          <el-button v-if="scope.row.status === 2" type="text" size="small" @click="updateGame(scope.row.id,1,'')">
            关闭游戏
          </el-button>
          <el-button v-if="scope.row.lotteryType == '1' " type="text" size="small"
                     @click="updateGame(scope.row.id,'',2)">
            切换至时时彩
          </el-button>
          <el-button v-if="scope.row.lotteryType == '2' " type="text" size="small"
                     @click="updateGame(scope.row.id,'',1)">
            切换至pk10
          </el-button>
          <el-button type="text" size="small" @click="orderHandle(scope.row.id)">
            投注列表
          </el-button>
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
    <pk10Config v-if="pk10ConfigVisible" ref="pk10Config" @refreshDataList="getDataList"></pk10Config>
    <cqsscConfig v-if="cqsscConfigVisible" ref="cqsscConfig" @refreshDataList="getDataList"></cqsscConfig>
    <!-- 弹窗, 日志列表 -->
    <order v-if="orderVisible" ref="order" @refreshDataList="getDataList"></order>
  </div>
</template>

<script type="text/javascript">
  import API from '@/api'
  import pk10Config from './pk10Config'
  import cqsscConfig from './cqsscConfig'
  import order from './order'

  export default {
    data () {
      return {
        dataForm: {
          teamName: ''
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        dataListSelections: [],
        addOrUpdateVisible: false,
        pk10ConfigVisible: false,
        cqsscConfigVisible: false,
        orderVisible: false
      }
    },
    components: {
      pk10Config,
      cqsscConfig,
      order
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
          username: this.dataForm.userName
        }
        API.team.list(params).then(({data}) => {
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
      // 游戏配置
      gameConfigHandle (id, lotteryType) {
        if (lotteryType === 1) {
          this.pk10ConfigVisible = true
          this.$nextTick(() => {
            this.$refs.pk10Config.init(id)
          })
        } else {
          this.cqsscConfigVisible = true
          this.$nextTick(() => {
            this.$refs.cqsscConfig.init(id)
          })
        }
      },
      bindRobot (tid) {
        this.$confirm(`确定绑定机器人?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var params = {
            'tid': tid
          }
          API.team.bindRobot(params).then(({data}) => {
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

      // 修改游戏
      updateGame (tid, status, lotteryType) {
        this.$confirm(`确定更改游戏`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var params = {
            'tid': tid,
            'status': status,
            'lotteryType': lotteryType
          }
          API.team.updateGame(params).then(({data}) => {
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
      // 订单列表
      orderHandle (tid) {
        this.orderVisible = true
        this.$nextTick(() => {
          this.$refs.order.init(tid)
        })
      }
    }
  }
</script>
