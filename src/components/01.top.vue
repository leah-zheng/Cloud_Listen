<template>
  <div class="top-container">
    <div class="left-box">
      <div class="icon-wrapper">
        <span class="iconfont icon-home" @click="toHome()"></span>
        <span class="iconfont icon-sami-select" ></span>
        <span class="iconfont icon-full-screen"></span>
      </div>
      <div class="history-wrapper">
        <span class="iconfont icon-arrow-lift" @click="goback()"></span>
        <span class="iconfont icon-arrow-right" @click="goforward()"></span>
      </div>
    </div>
    <div class="right-box">
      <div class="el-input el-input--small el-input--prefix">
        <input
          type="text"
          autocomplete="off"
          placeholder="搜索"
          class="el-input__inner"
          v-model="inputval"
          @keyup.enter="toResult"
        />
        <span class="el-input__prefix">
          <i class="el-input__icon el-icon-search"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'top',
    data() {
      return {
        inputval:''
      }
    },
    methods:{
      toResult() {
        
        // 跳转到result 转递数据
        if(this.inputval == '') {
          this.$message.warning('请输入搜索内容')
        } else {
          this.$router.push('/result?data='+this.inputval)
        }
        
      },
      toHome() {
        this.$router.push('/');
      },
      goback() {
        this.$router.back(1);
      },
      goforward() {
        this.$router.forward(1)
      }
      
    },
    watch: {
      '$route' (to, from) {   
             this.$router.go(0);
             
      }
    },
  }
</script>

<style scoped></style>
