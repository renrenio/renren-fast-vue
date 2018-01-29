<template>
  <div class="mod-dept">
    <tree-table
      :columns="treeTableColumns"
      :data="datList"
      border
      style="margin-top: 10px;">
    </tree-table>
  </div>
</template>

<script>
  import API from '@/api'
  import TreeTable from '@/components/tree-table'
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
        datList: []
      }
    },
    components: {
      TreeTable
    },
    created () {
      this.getDeptList()
    },
    methods: {
      // 获取部门列表
      getDeptList () {
        API.menu.list().then(({data}) => {
          this.datList = this.dataTranslate(data || [], 'menuId', 'parentId')
        })
      },
      // 数据转换
      dataTranslate (data, sign, parentSign) {
        for (var i = 0; i < data.length; i++) {
          for (var j = 0; j < data.length; j++) {
            if (data[i][parentSign] === data[j][sign]) {
              data[j]['children'] = data[j]['children'] || []
              data[j]['children'].push(data[i])
              data.splice(i, 1)
              i--
              break
            }
          }
        }
        return data
      }
    }
  }
</script>
