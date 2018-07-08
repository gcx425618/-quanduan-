<template>
    <div  class="login-wrap">
        <el-form class="login-from" :label-position="top" label-width="80px" :model="formData">
            <h2>用户</h2>
            <el-form-item @click="handlelogin" label="登录">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item  type="password" label="密码">
                <el-input v-model="formData.password"></el-input>
            </el-form-item>
            <el-button class="login-btn" type="primary">登录</el-button>
        </el-form>
    </div>
</template>

<script>
    export default ({
        data() {
            return {
                formData:{
                    name:'',
                    password:''
                }
            };
        }
    })

</script>

<style>
    .login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrap .login-from {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}

.login-wrap .login-from .login-btn {
  width: 100%;
}
</style>
