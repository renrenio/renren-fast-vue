<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 14px;
    line-height: 1.15;
    color: #333;
    background-color: #f0f0f0;
  }
  a {
    color: #337ab7;
    text-decoration: none;
    &:focus,
    &:hover {
      color: #23527c;
      text-decoration: underline;
    }
  }
  img {
    vertical-align: middle;
  }
  * {
    outline: 0;
  }
  .clearfix:before,
  .clearfix:after {
    content: " ";
    display: table;
  }
  .clearfix:after {
    clear: both;
  }

  /* animation */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
