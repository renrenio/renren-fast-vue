<template>
  <div class="mod-demo-ueditor">
    <el-alert
      title="提示："
      type="warning"
      :closable="false">
      <div slot-scope="description">
        <p class="el-alert__description">1. 此Demo只提供UEditor官方使用文档，入门部署和体验功能。具体使用请参考：http://fex.baidu.com/ueditor/</p>
        <p class="el-alert__description">2. 浏览器控制台报错“请求后台配置项http错误，上传功能将不能正常使用！”，此错需要后台提供上传接口方法（赋值给serverUrl属性）</p>
      </div>
    </el-alert>

    <script :id="ueId" class="ueditor-box" type="text/plain" style="width: 100%; height: 260px;">hello world!</script>
    
    <!-- 获取内容 -->
    <p><el-button @click="getContent()">获得内容</el-button></p>
    <el-dialog
      title="内容"
      :visible.sync="dialogVisible"
      :append-to-body="true">
      {{ ueContent }}
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import ueditor from 'ueditor'
  export default {
    data () {
      return {
        ue: null,
        ueId: `J_ueditorBox_${new Date().getTime()}`,
        ueContent: '',
        dialogVisible: false
      }
    },
    mounted () {
      this.ue = ueditor.getEditor(this.ueId, {
        // serverUrl: '', // 服务器统一请求接口路径
        zIndex: 3000
      })
    },
    methods: {
      getContent () {
        this.dialogVisible = true
        this.ue.ready(() => {
          this.ueContent = this.ue.getContent()
        })
      }
    }
  }
</script>

<style lang="scss">
  .mod-demo-ueditor {
    position: relative;
    z-index: 510;
    > .el-alert {
      margin-bottom: 10px;
    }
  }
</style>
