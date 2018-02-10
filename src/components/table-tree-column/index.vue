<template>
  <el-table-column :prop="prop" v-bind="$attrs">
    <template slot-scope="scope">
      <span v-if="hasChild(scope.row)" @click.prevent="expandedHandle(scope.$index, scope.row)">
        <span :style="{ 'padding-left': paddingLeft(scope.row) }">
          <i :class="icon(scope.row)"></i>
          <i :class="floderIcon(scope.row)" style="padding-right: 7px;"></i>
        </span>
        <span>{{scope.row[prop]}}</span>
      </span>
      <span v-if="!hasChild(scope.row)">
        <span :style="{ 'padding-left': paddingLeft(scope.row) }">
          <i :class="fileIcon" style="padding-right: 7px; padding-left:18px;"></i>
        </span>
        <span>{{scope.row[prop]}}</span>
      </span>
    </template>
  </el-table-column>
</template>

<script>
  export default {
    name: 'table-tree-column',
    data () {
      return { loading: false }
    },
    props: {
      prop: {
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
      }
    },
    created () {
      console.log(this.$attrs)
    },
    methods: {
      floderIcon (row) {
        return row._expanded ? this.folderIcon + '-open' : this.folderIcon
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
        return (parseInt(row[this.levelKey]) * 14) + 'px'
      },
      icon (row) {
        return row._expanded ? 'el-icon-caret-bottom' : 'el-icon-caret-right'
      },
      expandedHandle (index, row) {
        var data = JSON.parse(JSON.stringify(this.$parent.store.states.data))
        data[index]._expanded = !data[index]._expanded
        console.log(data)
        if (data[index]._expanded) {
          data = data.splice(0, index + 1).concat(row[this.childKey]).concat(data)
          this.$parent.store.commit('setData', data)
        } else {
          var id = row[this.treeKey]
          var result = []
          var removeIds = this.descendantsIds(id, data, this.parentKey, this.treeKey)
          data.forEach(item => {
            if (removeIds.indexOf(item[this.treeKey]) === -1) {
              result.push(item)
            }
          })
          data = result
          this.$parent.store.commit('setData', data)
        }
      },
      descendantsIds (id, data, parentKey, treeKey) {
        var result = []
        var compare = [id]
        var length = -1
        // if (compare.length !== -1) {
        //   data.forEach(item => {
        //     if (compare.indexOf(item[parentKey]) > -1 && compare.indexOf(item[treeKey]) === -1) {
        //       result.push(item[treeKey])
        //       compare.push(item[treeKey])
        //     }
        //   })
        // }
        while (length !== compare.length) {
          length = compare.length
          console.log(length)
          data.forEach(item => {
            if (compare.indexOf(item[parentKey]) > -1 && compare.indexOf(item[treeKey]) === -1) {
              result.push(item[treeKey])
              compare.push(item[treeKey])
            }
          })
        }
        return result
      }
    }
  }
</script>
