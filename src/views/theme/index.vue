<template>
  <el-form>
    <h2>布局设置</h2>
    <el-form-item label="导航条类型">
      <el-radio-group v-model="type">
        <el-radio label="default" border>default</el-radio>
        <el-radio label="inverse" border>inverse</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="侧边栏皮肤">
      <el-radio-group v-model="skin">
        <el-radio label="light" border>light</el-radio>
        <el-radio label="dark" border>dark</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    computed: {
      type: {
        get () {
          return this.$store.state.navbarLayoutType
        },
        set (val) {
          this.SET_NAVBAR_LAYOUT_TYPE({ type: val })
        }
      },
      skin: {
        get () {
          return this.$store.state.sidebarLayoutSkin
        },
        set (val) {
          this.SET_SIDEBAR_LAYOUT_SKIN({ skin: val })
        }
      }
    },
    methods: {
      ...mapMutations(['SET_NAVBAR_LAYOUT_TYPE', 'SET_SIDEBAR_LAYOUT_SKIN'])
    }
  }
</script>

