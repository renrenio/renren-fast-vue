<template>
  <div class="mod-dept">
    <tree-table
      :columns="treeTableColumns"
      :data="dataList"
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
        <template slot-scope="scope">
          <i :class="['fa-lg', scope.row.icon]"></i>
        </template>
      </el-table-column>
      <el-table-column
        prop="type"
        header-align="center"
        align="center"
        label="类型">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.type === 0" size="small">目录</el-tag>
          <el-tag v-else-if="scope.row.type === 1" size="small" type="success">菜单</el-tag>
          <el-tag v-else-if="scope.row.type === 2" size="small" type="info">按钮</el-tag>
        </template>
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
        width="150"
        :show-overflow-tooltip="true"
        label="菜单URL">
      </el-table-column>
      <el-table-column
        prop="perms"
        header-align="center"
        align="center"
        width="150"
        :show-overflow-tooltip="true"
        label="授权标识">
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        width="200"
        label="操作">
        <template slot-scope="scope">
          <el-button v-if="isAuth('sys:user:update')" type="text" size="small" @click="addOrUpdateHandle(scope.row.menuId)">修改</el-button>
          <el-button v-if="isAuth('sys:user:delete')" type="text" size="small" @click="deleteHandle(scope.row.menuId)">删除</el-button>
        </template>
      </el-table-column>
    </tree-table>
    <!-- <el-table :data="treeData" border max-height="250">
      <el-table-column
        prop="parentName"
        header-align="center"
        align="center"
        label="上级菜单">
      </el-table-column>
      <table-tree-column 
        file-icon="icon icon-file" 
        folder-icon="icon icon-folder" 
        prop="value" label="名称" width="220">
      </table-tree-column>
      <el-table-column
        prop="icon"
        header-align="center"
        align="center"
        label="图标">
        <template slot-scope="scope">
          <i :class="['fa-lg', scope.row.icon]"></i>
        </template>
      </el-table-column>
  </el-table> -->
    <el-table :data="dataList" border max-height="400">
      <el-table-column prop="id" label="id" width="180"></el-table-column>
      <table-tree-column 
        file-icon="icon icon-file" 
        folder-icon="icon icon-folder" 
        prop="label" label="MenuName" width="320">
      </table-tree-column>
      <el-table-column prop="description" label="Description" :show-overflow-tooltip="true" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import TreeTable from '@/components/tree-table'
  import TableTreeColumn from '@/components/table-tree-column/index.vue'
  import Data from './data.js'
  import API from '@/api'
  import { treeDataTranslate } from '@/utils'
  export default {
    data () {
      return {
        treeTableColumns: [
          {
            text: '名称',
            value: 'name',
            width: 200
          }
        ],
        dataList: [],
        treeData: []
      }
    },
    components: {
      TreeTable,
      TableTreeColumn
    },
    created () {
      this.treeData = Data
      console.log(this.treeData)
      this.getDataList()
    },
    methods: {
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        API.menu.list().then(({data}) => {
          this.dataList = treeDataTranslate(data, 'menuId')
          this.dataListLoading = false
        })
      }
    }
  }
</script>
