<template>
  <div class="login-wrapper">
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="100px"
      class="demo-dynamic"
    >
      <el-form-item
        prop="name"
        label="账号"
      >
        <el-input v-model="dynamicValidateForm.name"></el-input>
      </el-form-item>
      <el-form-item
        prop="password"
        label="密码"
      >
        <el-input v-model="dynamicValidateForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import {login} from '@/api/user'
import { mapActions } from 'vuex'
import { constants } from 'crypto';

export default {
  data() {
    return {
      dynamicValidateForm: {
          name:null,
          password:null,
      }
    };
  },
  methods: {
    ...mapActions('user',[
      'login',
    ]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        this.login()
        .then(data=> {
          this.$router.push({ path: '/',})
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login-wrapper{
    width:50%;
    margin:50px auto;
}
</style>
