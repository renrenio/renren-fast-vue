<template>
  <el-dialog
    :title="!dataForm.tid ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form  :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()"
             label-width="80px" size="small">
      <el-form-item label="开始时间" prop="playTimeStart" >
        <el-input v-model="dataForm.playTimeStart" placeholder="游戏开始时间,如:09:00"></el-input>
      </el-form-item>
      <el-form-item label="结束时间" prop="playTimeEnd">
        <el-input v-model="dataForm.playTimeEnd" placeholder="游戏结束时间,如:23:00"></el-input>
      </el-form-item>
      <el-form-item label="投注最小值" prop="playMinNum">
        <el-input v-model="dataForm.playMinNum" autosize="true"></el-input>
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
      <el-form-item label="冠亚和单赔率" prop="champAndSecondSingleOdds">
        <el-input v-model="dataForm.champAndSecondSingleOdds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和双赔率" prop="champAndSecondDoubleOdds">
        <el-input v-model="dataForm.champAndSecondDoubleOdds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和大赔率" prop="champAndSecondBigOdds">
        <el-input v-model="dataForm.champAndSecondBigOdds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和小赔率" prop="champAndSecondSmallOdds">
        <el-input v-model="dataForm.champAndSecondSmallOdds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和3赔率" prop="champAndSecondValue3Odds">
        <el-input v-model="dataForm.champAndSecondValue3Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和4赔率" prop="champAndSecondValue4Odds">
        <el-input v-model="dataForm.champAndSecondValue4Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和5赔率" prop="champAndSecondValue5Odds">
        <el-input v-model="dataForm.champAndSecondValue5Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和6赔率" prop="champAndSecondValue6Odds">
        <el-input v-model="dataForm.champAndSecondValue6Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和7赔率" prop="champAndSecondValue7Odds">
        <el-input v-model="dataForm.champAndSecondValue7Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和8赔率" prop="champAndSecondValue8Odds">
        <el-input v-model="dataForm.champAndSecondValue8Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和9赔率" prop="champAndSecondValue9Odds">
        <el-input v-model="dataForm.champAndSecondValue9Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和10赔率" prop="champAndSecondValue10Odds">
        <el-input v-model="dataForm.champAndSecondValue10Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和11赔率" prop="champAndSecondValue11Odds">
        <el-input v-model="dataForm.champAndSecondValue11Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和12赔率" prop="champAndSecondValue12Odds">
        <el-input v-model="dataForm.champAndSecondValue12Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和13赔率" prop="champAndSecondValue13Odds">
        <el-input v-model="dataForm.champAndSecondValue13Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和14赔率" prop="champAndSecondValue14Odds">
        <el-input v-model="dataForm.champAndSecondValue14Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和15赔率" prop="champAndSecondValue15Odds">
        <el-input v-model="dataForm.champAndSecondValue15Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和16赔率" prop="champAndSecondValue16Odds">
        <el-input v-model="dataForm.champAndSecondValue16Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和17赔率" prop="champAndSecondValue17Odds">
        <el-input v-model="dataForm.champAndSecondValue17Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和18赔率" prop="champAndSecondValue18Odds">
        <el-input v-model="dataForm.champAndSecondValue18Odds"></el-input>
      </el-form-item>
      <el-form-item label="冠亚和19赔率" prop="champAndSecondValue19Odds">
        <el-input v-model="dataForm.champAndSecondValue19Odds"></el-input>
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
          playTimeStart: [
            {required: true, message: '开始时间不能为空', trigger: 'blur'}
          ],
          playTimeEnd: [
            {required: true, message: '结束时间不能为空', trigger: 'blur'}
          ],
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
            {required: true, message: '投注最小值不能为空', trigger: 'blur'}
          ],
          codeOdds: [
            {required: true, message: '特码赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondSingleOdds: [
            {required: true, message: '冠亚和单赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue3Odds: [
            {required: true, message: '冠亚和3赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue4Odds: [
            {required: true, message: '冠亚和4赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue5Odds: [
            {required: true, message: '冠亚和5赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue6Odds: [
            {required: true, message: '冠亚和6赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue7Odds: [
            {required: true, message: '冠亚和7赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue8Odds: [
            {required: true, message: '冠亚和8赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue9Odds: [
            {required: true, message: '冠亚和9赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue10Odds: [
            {required: true, message: '冠亚和10赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue11Odds: [
            {required: true, message: '冠亚和11赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue12Odds: [
            {required: true, message: '冠亚和12赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue13Odds: [
            {required: true, message: '冠亚和13赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue14Odds: [
            {required: true, message: '冠亚和14赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue15Odds: [
            {required: true, message: '冠亚和15赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue16Odds: [
            {required: true, message: '冠亚和16赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue17Odds: [
            {required: true, message: '冠亚和17赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue18Odds: [
            {required: true, message: '冠亚和18赔率不能为空', trigger: 'blur'}
          ],
          champAndSecondValue19Odds: [
            {required: true, message: '冠亚和19赔率不能为空', trigger: 'blur'}
          ]
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
            API.pk10.info(this.dataForm.tid).then(({data}) => {
              if (data && data.code === 0) {
                if(data.pk10Config.tid){
                  this.dataForm = data.pk10Config
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
            API.pk10.save(params).then(({data}) => {
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
