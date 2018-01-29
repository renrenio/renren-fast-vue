<template>
  <header class="site-topbar">
    <div class="site-topbar__header">
      <h1 class="site-logo">
        <a class="site-logo__lg" href="/">Vue-cli-basic</a>
        <a class="site-logo__mini" href="/">Vue</a>
      </h1>
    </div>
    <div class="site-topbar__body clearfix">
      <el-menu
        class="site-topbar__menu"
        mode="horizontal">
        <el-menu-item class="site-topbar__switch" index="1" @click="switchSidebarCollapse()">
          <icon-svg name="zhedie"></icon-svg>
        </el-menu-item>
      </el-menu>
      <el-menu
        class="site-topbar__menu site-topbar__menu--right"
        mode="horizontal">
        <el-menu-item class="site-topbar__avatar" index="2">
          <el-dropdown placement="bottom" :hide-on-click="false">
            <span class="el-dropdown-link">
              <img src="~@/assets/img/avatar.png" :alt="$store.state.user.userName">
              {{ $store.state.user.userName }}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="updatePasswordHandle()">修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="logoutHandle()">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 弹窗, 修改密码 -->
    <el-dialog
      title="修改密码"
      :visible.sync="updatePasswordDialogVisible"
      width="550px"
      :append-to-body="true">
      <el-form :model="updatePasswordForm" :rules="updatePasswordRule" ref="updatePasswordForm" label-width="80px">
        <el-form-item label="账号">
          <span>{{ $store.state.user.userName }}</span>
        </el-form-item>
        <el-form-item label="原密码" prop="password">
          <el-input type="password" v-model="updatePasswordForm.password"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input type="password" v-model="updatePasswordForm.newPassword"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input type="password" v-model="updatePasswordForm.confirmPassword"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="updatePasswordDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="updatePasswordFormSubmit()">确定</el-button>
      </span>
    </el-dialog>
  </header>
</template>

<script>
  import API from '@/api'
  import { mapMutations } from 'vuex'
  export default {
    data () {
      var validateConfirmPassword = (rule, value, callback) => {
        if (this.updatePasswordForm.newPassword !== value) {
          callback(new Error('确认密码与新密码不一致'))
        } else {
          callback()
        }
      }
      return {
        updatePasswordDialogVisible: false,
        updatePasswordForm: {
          password: '',
          newPassword: '',
          confirmPassword: ''
        },
        updatePasswordRule: {
          password: [
            { required: true, message: '原密码不能为空', trigger: 'blur' }
          ],
          newPassword: [
            { required: true, message: '新密码不能为空', trigger: 'blur' }
          ],
          confirmPassword: [
            { required: true, message: '确认密码不能为空', trigger: 'blur' },
            { validator: validateConfirmPassword, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      // 切换侧边栏, 水平折叠收起状态
      switchSidebarCollapse () {
        this.SWITCH_SIDEBAR_COLLAPSE({ collapse: !this.$store.state.sidebarCollapse })
      },
      // 修改密码
      updatePasswordHandle () {
        this.updatePasswordDialogVisible = true
        this.$nextTick(() => {
          this.$refs['updatePasswordForm'].resetFields()
        })
      },
      // 修改密码, 提交
      updatePasswordFormSubmit () {
        this.$refs['updatePasswordForm'].validate((valid) => {
          if (valid) {
            var params = {
              'password': this.updatePasswordForm.password,
              'newPassword': this.updatePasswordForm.newPassword
            }
            API.user.updatePassword(params).then(({data}) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.updatePasswordDialogVisible = false
                    this.$nextTick(() => {
                      this.$cookie.delete('token')
                      this.$router.replace({ name: 'login' })
                    })
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      },
      // 退出
      logoutHandle () {
        API.common.logout().then(({data}) => {
          if (data && data.code === 0) {
            this.$cookie.delete('token')
            this.$router.replace({ name: 'login' })
          }
        })
      },
      ...mapMutations(['SWITCH_SIDEBAR_COLLAPSE'])
    }
  }
</script>

<style lang="scss">
  .site-topbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    height: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .08);
    background-color: #3e8ef7;
  }
  .site-topbar__header {
    float: left;
    width: 230px;
    height: 50px;
  }
  .site-logo {
    display: table-cell;
    vertical-align: middle;
    width: 230px;
    height: 50px;
    margin: 0;
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    
    &__lg,
    &__mini {
      color: #fff;
      &:focus,
      &:hover {
        color: #fff;
        text-decoration: none;
      }
    }
    &__mini {
      display: none;
    }
  }
  .site-topbar__switch {
    font-size: 18px;
    border-bottom: none !important;
  }
  .site-topbar__avatar {
    border-bottom: none !important;

    .el-dropdown-link {
      > img {
        width: 36px;
        height: auto;
        margin-right: 5px;
        border-radius: 100%;
      }
    }
  }
  .site-topbar__body {
    position: relative;
    margin-left: 230px;
    padding-right: 15px;
    background-color: #fff;
  }
  .site-topbar__menu {
    float: left;
    background-color: transparent;
    border-bottom: 0;

    &--right {
      float: right;
    }

    .el-menu-item,
    .el-submenu .el-submenu__title {
      height: 50px;
      line-height: 50px;
    }
    .el-submenu > .el-menu {
      top: 55px;
    }
  }
</style>
