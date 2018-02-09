<template>
  <el-table-column :prop="prop" :label="label" :width="width">
    <template slot-scope="scope">
      <span v-if="hasChild(scope.row)" @click.prevent="doexpanded(scope.$index,scope.row)" >
        <span :style="{paddingLeft : paddingLeft(scope.row)}">
          <i :class="icon(scope.row)"></i>
          <i :class="floderIcon(scope.row)" style="padding-right: 7px;"></i>
        </span>
        <span>{{scope.row[prop]}}</span>
      </span>
      <span v-if="!hasChild(scope.row)">
        <span :style="{paddingLeft : paddingLeft(scope.row)}">
          <i :class="fileIcon" style="padding-right: 7px;padding-left:18px"></i>
        </span>
        <span>{{scope.row[prop]}}</span>
      </span>
    </template>
  </el-table-column>
</template>
<script>
  import util from './util'
  export default {
    name: 'el-table-tree-column',
    props: {
      prop: {
        type: String
      },
      label: {
        type: String
      },
      width: {
        type: String
      },
      treeKey: {
        type: String,
        default: 'id'
      },
      childNumKey: {
        type: String,
        default: 'child_num'
      },
      parentKey: {
        type: String,
        default: 'parentId'
      },
      levelKey: {
        type: String,
        default: 'depth'
      },
      childKey: {
        type: String,
        default: 'children'
      },
      fileIcon: {
        type: String,
        default: 'el-icon-file'
      },
      folderIcon: {
        type: String,
        default: 'el-icon-folder'
      },
      remote: {
        type: Function,
        default: null
      }
    },
    computed: {
      owner () {
        let parent = this.$parent
        while (parent && !parent.tableId) {
          parent = parent.$parent
        }
        return parent
      }
    },
    data () {
      return { loading: false }
    },
    methods: {
      floderIcon (row) {
        var expanded = row.$extra && row.$extra.expanded
        return expanded ? this.folderIcon + '-open' : this.folderIcon
      },
      hasChild (row) {
        if (row[this.childNumKey] !== undefined) {
          return row[this.childNumKey] > 0 || false
        } else if (row[this.childKey] !== undefined) {
          return row[this.childKey].length > 0 || false
        } else {
          return false
        }
      },
      paddingLeft (row) {
        return parseInt(row[this.levelKey]) * 14 + 'px'
      },
      icon (row) {
        if (row.$extra && row.$extra.loading === true) return 'el-icon-loading'
        return row.$extra && row.$extra.expanded ? 'el-icon-caret-bottom' : 'el-icon-caret-right'
      },
      doexpanded (index, row) {
        var vm = this
        // var data = JSON.parse(JSON.stringify(this.owner.store.states._data))
        var data = this.owner.store.states._data
        debugger
        if (data[index].$extra === undefined) {
          data[index].$extra = { expanded: true }
        } else {
          data[index].$extra.expanded = !data[index].$extra.expanded
        }
        if (data[index].$extra.expanded) {
          if (this.remote != null) {
            var hash = util.hash()
            data[index].$extra.expanded = false
            data[index].$extra.hash = hash
            data[index].$extra.loading = true
            vm.owner.store.commit('setData', data)
            this.remote(row, function (result) {
              let list = vm.owner.store.states._data
              let _index = util.index(hash, list)
              list[_index].$extra = {
                loading: false,
                expanded: (result && result.length > 0) || false
              }
              if (result && result.length > 0) {
                var prefix = list.slice(0, _index + 1)
                var i = 0
                while (i < _index + 1) {
                  list.shift()
                  i++
                }
                list = prefix.concat(result).concat(list)
              } else {
                list[_index][vm.childNumKey] = 0
              }
              vm.owner.store.commit('setData', list)
            })
          } else {
            var prefix = data.slice(0, index + 1)
            var i = 0
            while (i < index + 1) {
              data.shift()
              i++
            }
            data = prefix.concat(row[vm.childKey]).concat(data)
            this.owner.store.commit('setData', data)
          }
        } else {
          var id = row[vm.treeKey]
          var result = []
          var removeIds = util.descendantsIds(
            id,
            data,
            this.parentKey,
            this.treeKey
          )
          data.forEach(function (item) {
            if (util.indexOf(item[vm.treeKey], removeIds) === -1) {
              result.push(item)
            }
          })
          data = result
          this.owner.store.commit('setData', data)
        }
      }
    }
  }
</script>
