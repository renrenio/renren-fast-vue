<template>
  <el-dialog
    :title="'配置重庆时时彩'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()"
             label-width="120px" size="small" inline="true">
      <!--<el-form-item label="开始时间" prop="playTimeStart" >-->
      <!--<el-input v-model="dataForm.playTimeStart" placeholder="游戏开始时间,如:09:00"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="结束时间" prop="playTimeEnd">-->
      <!--<el-input v-model="dataForm.playTimeEnd" placeholder="游戏结束时间,如:23:00"></el-input>-->
      <!--</el-form-item>-->
      <el-form-item label="投注最小值" prop="playMinNum">
        <el-input v-model="dataForm.playMinNum"></el-input>
      </el-form-item>
      <el-form-item label="投注最大值" prop="playMaxNum">
        <el-input v-model="dataForm.playMaxNum"></el-input>
      </el-form-item>
      <el-form-item label="单双赔率" prop="singleDoubleOdds">
        <el-input v-model="dataForm.singleDoubleOdds"></el-input>
      </el-form-item>
      <el-form-item label="大小赔率" prop="bigSmallOdds">
        <el-input v-model="dataForm.bigSmallOdds"></el-input>
      </el-form-item>
      <el-form-item label="龙虎赔率" prop="dragonTigerOdds">
        <el-input v-model="dataForm.dragonTigerOdds"></el-input>
      </el-form-item>
      <el-form-item label="特码赔率" prop="codeOdds">
        <el-input v-model="dataForm.codeOdds"></el-input>
      </el-form-item>
      <el-form-item label="总单双赔率" prop="sumSingleDoubleOdds">
        <el-input v-model="dataForm.sumSingleDoubleOdds"></el-input>
      </el-form-item>
      <el-form-item label="总大小赔率" prop="sumBigSmallOdds">
        <el-input v-model="dataForm.sumBigSmallOdds"></el-input>
      </el-form-item>
      <el-form-item label="总合赔率" prop="sumOdds">
        <el-input v-model="dataForm.sumOdds"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>

</template>


<script type="es6">
  import API from '@/api'

  export default {
    data() {
      return {
        visible: false,
        dataForm: {
          tid: ""
        },
        dataRule: {
          // playTimeStart: [
          //   {required: true, message: '开始时间不能为空', trigger: 'blur'}
          // ],
          // playTimeEnd: [
          //   {required: true, message: '结束时间不能为空', trigger: 'blur'}
          // ],
          playMinNum: [
            {required: true, message: '投注最小值不能为空', trigger: 'blur'}
          ],
          playMaxNum: [
            {required: true, message: '投注最大值不能为空', trigger: 'blur'}
          ],
          singleDoubleOdds: [
            {required: true, message: '单双赔率不能为空', trigger: 'blur'}
          ],
          bigSmallOdds: [
            {required: true, message: '大小赔率不能为空', trigger: 'blur'}
          ],
          dragonTigerOdds: [
            {required: true, message: '龙虎赔率不能为空', trigger: 'blur'}
          ],
          codeOdds: [
            {required: true, message: '特码赔率不能为空', trigger: 'blur'}
          ],
          sumSingleDoubleOdds: [
            {required: true, message: '总单双赔率不能为空', trigger: 'blur'}
          ],
          sumBigSmallOdds: [
            {required: true, message: '总大小赔率不能为空', trigger: 'blur'}
          ],
          sumOdds: [
            {required: true, message: '总合赔率不能为空', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      init(tid) {
        this.dataForm.tid = tid
        this.visible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.tid) {
            API.cqssc.info(this.dataForm.tid).then(({data}) => {
              if (data && data.code === 0) {
                if (data.cqsscConfig.tid) {
                  this.dataForm = data.cqsscConfig
                }
              }
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            var params = this.dataForm
            API.cqssc.save(params).then(({data}) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                    this.$emit('refreshDataList')
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }

    }
  }
</script>
