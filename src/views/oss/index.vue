<template>
  <div class="mod-oss">
    <el-form :inline="true" :model="dataForm">
      <el-form-item>
        <el-button type="primary" @click="configHandle()">云存储配置</el-button>
        <el-button type="primary" @click="uploadHandle()">上传文件</el-button>
        <el-button type="danger" @click="deleteHandle()" :disabled="dataListSelections.length <= 0">批量删除</el-button>
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
        width="80"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="url"
        header-align="center"
        align="center"
        label="URL地址">
      </el-table-column>
      <el-table-column
        prop="createDate"
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
          <el-button type="text" size="small" @click="deleteHandle(scope.row.id)">删除</el-button>
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
    <!-- 弹窗, 云存储配置 -->
    <el-dialog
      title="云存储配置"
      :close-on-click-modal="false"
      :visible.sync="configDialogVisible">
      <el-form :model="configForm" :rules="configRule" ref="configForm" label-width="120px">
        <el-form-item size="mini" label="存储类型">
          <el-radio-group v-model="configForm.type">
            <el-radio :label="1">七牛</el-radio>
            <el-radio :label="2">阿里云</el-radio>
            <el-radio :label="3">腾讯云</el-radio>
          </el-radio-group>
        </el-form-item>
        <template v-if="configForm.type === 1">
          <el-form-item size="mini">
            <a href="http://www.renren.io/open/qiniu.html" target="_blank">免费申请(七牛)10GB储存空间</a>
          </el-form-item>
          <el-form-item label="域名">
            <el-input v-model="configForm.qiniuDomain" placeholder="七牛绑定的域名"></el-input>
          </el-form-item>
          <el-form-item label="路径前缀">
            <el-input v-model="configForm.qiniuPrefix" placeholder="不设置默认为空"></el-input>
          </el-form-item>
          <el-form-item label="AccessKey">
            <el-input v-model="configForm.qiniuAccessKey" placeholder="七牛AccessKey"></el-input>
          </el-form-item>
          <el-form-item label="SecretKey">
            <el-input v-model="configForm.qiniuSecretKey" placeholder="七牛SecretKey"></el-input>
          </el-form-item>
          <el-form-item label="空间名">
            <el-input v-model="configForm.qiniuBucketName" placeholder="七牛存储空间名"></el-input>
          </el-form-item>
        </template>
        <template v-else-if="configForm.type === 2">
          <el-form-item label="域名">
            <el-input v-model="configForm.aliyunDomain" placeholder="阿里云绑定的域名"></el-input>
          </el-form-item>
          <el-form-item label="路径前缀">
            <el-input v-model="configForm.aliyunPrefix" placeholder="不设置默认为空"></el-input>
          </el-form-item>
          <el-form-item label="EndPoint">
            <el-input v-model="configForm.aliyunEndPoint" placeholder="阿里云EndPoint"></el-input>
          </el-form-item>
          <el-form-item label="AccessKeyId">
            <el-input v-model="configForm.aliyunAccessKeyId" placeholder="阿里云AccessKeyId"></el-input>
          </el-form-item>
          <el-form-item label="AccessKeySecret">
            <el-input v-model="configForm.aliyunAccessKeySecret" placeholder="阿里云AccessKeySecret"></el-input>
          </el-form-item>
          <el-form-item label="BucketName">
            <el-input v-model="configForm.aliyunBucketName" placeholder="阿里云BucketName"></el-input>
          </el-form-item>
        </template>
        <template v-else-if="configForm.type === 3">
          <el-form-item label="域名">
            <el-input v-model="configForm.qcloudDomain" placeholder="腾讯云绑定的域名"></el-input>
          </el-form-item>
          <el-form-item label="路径前缀">
            <el-input v-model="configForm.qcloudPrefix" placeholder="不设置默认为空"></el-input>
          </el-form-item>
          <el-form-item label="AppId">
            <el-input v-model="configForm.qcloudAppId" placeholder="腾讯云AppId"></el-input>
          </el-form-item>
          <el-form-item label="SecretId">
            <el-input v-model="configForm.qcloudSecretId" placeholder="腾讯云SecretId"></el-input>
          </el-form-item>
          <el-form-item label="SecretKey">
            <el-input v-model="configForm.qcloudSecretKey" placeholder="腾讯云SecretKey"></el-input>
          </el-form-item>
          <el-form-item label="BucketName">
            <el-input v-model="configForm.qcloudBucketName" placeholder="腾讯云BucketName"></el-input>
          </el-form-item>
          <el-form-item label="Bucket所属地区">
            <el-input v-model="configForm.qcloudRegion" placeholder="如：sh（可选值 ，华南：gz 华北：tj 华东：sh）"></el-input>
          </el-form-item>
        </template>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="configDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="configFormSubmit()">确定</el-button>
      </span>
    </el-dialog>
    <!-- 弹窗, 上传文件 -->
    <el-dialog
      title="上传文件"
      :close-on-click-modal="false"
      @close="uploadDialogCloseHandle"
      :visible.sync="uploadDialogVisible">
      <el-upload
        drag
        :action="uploadUrl"
        :before-upload="uploadBeforeUploadHandle"
        :on-success="uploadSuccessHandle"
        multiple
        :file-list="uploadFileList"
        style="text-align: center;">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只支持jpg、png、gif格式的图片！</div>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script>
  import API from '@/api'
  export default {
    data () {
      return {
        dataForm: {},
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        dataListSelections: [],
        configDialogVisible: false,
        configForm: {},
        configRule: {},
        uploadDialogVisible: false,
        uploadUrl: '',
        uploadNum: 0,
        uploadSuccessNum: 0,
        uploadFileList: []
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
          limit: this.pageSize
        }
        API.oss.list(params).then(({data}) => {
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
      // 云存储配置
      configHandle () {
        this.configDialogVisible = true
        API.oss.config().then(({data}) => {
          this.configForm = data && data.code === 0 ? data.config : []
        })
      },
      // 云存储配置, 提交
      configFormSubmit () {
        this.$refs['configForm'].validate((valid) => {
          if (valid) {
            API.oss.addConfig(this.configForm).then(({data}) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.configDialogVisible = false
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      },
      // 上传文件
      uploadHandle () {
        this.uploadUrl = API.oss.upload(this.$cookie.get('token'))
        this.uploadDialogVisible = true
      },
      // 图片上传之前
      uploadBeforeUploadHandle (file) {
        if (file.type !== 'image/jpg' && file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
          this.$message.error('只支持jpg、png、gif格式的图片！')
          return false
        }
        this.uploadNum++
      },
      // 图片上传成功
      uploadSuccessHandle (response, file, fileList) {
        this.uploadFileList = fileList
        this.uploadSuccessNum++
        if (response && response.code === 0) {
          if (this.uploadNum === this.uploadSuccessNum) {
            this.$confirm('操作成功, 是否继续操作?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).catch(() => {
              this.uploadDialogVisible = false
            })
          }
        } else {
          this.$message.error(response.msg)
        }
      },
      // 图片上传, 弹窗关闭
      uploadDialogCloseHandle () {
        this.uploadFileList = []
        this.getDataList()
      },
      // 删除
      deleteHandle (id) {
        var ids = id ? [id] : this.dataListSelections.map(item => {
          return item.id
        })
        this.$confirm(`确定对[id=${ids.join(',')}]进行[${id ? '删除' : '批量删除'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          API.oss.del(ids).then(({data}) => {
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
      }
    }
  }
</script>
