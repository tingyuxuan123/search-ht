<template>
  <el-container>

    <el-aside >
      <h2 v-show="!isCollapse">搜题后台</h2>
      <el-menu
        default-active="1-1"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        router
      >
        
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-menu"></i>
            <span>题库管理</span>
          </template>
          <el-menu-item index="/topics">
            <i class="el-icon-reading"></i>
            题库
          </el-menu-item>
          <el-menu-item index="/addTopic">
            <i class="el-icon-edit"></i>
            添加试题
          </el-menu-item>
          <el-menu-item index="/check">
            <i class="el-icon-s-check"></i>
            试题审核
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="/subject"> <i class="el-icon-s-management"></i> <span slot="title">科目管理</span> </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>

      <el-header> 
        <span class="select">
          <i class="el-icon-s-fold" @click="isCollapse=!isCollapse" v-if="!isCollapse"></i>
          <i class="el-icon-s-unfold" @click="isCollapse=!isCollapse" v-else></i>
        </span>

      <breadcrumb></breadcrumb>

      </el-header>


      <el-container>

        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </el-container>
</template>
<script>

import breadcrumb from '../../components/breadcrumb.vue'

export default {
  name: "",
  props: {},
  components: {
    breadcrumb
  },
  data() {
    return {
      isCollapse:true  // 控制导航栏是否展开
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
};
</script>
<style lang='scss' scoped>

 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

.el-header {
  display: flex;
  align-items: center;
  background-color: #545c64;
  color: #333;
  height: 60px;
  line-height: 60px;
  font-size: 18px;

}

.el-aside {
  background-color: #545c64;
  width: auto !important;
  h2{
    padding: 0px;
    line-height: 60px;
    margin: 0px;
    text-align: center;
    color: #fff;
    font-size: 24px;
  }
}

.el-main {
  // background-color: #e9eef3;
  // color: #333;
  height: calc(100vh - 60px);
  padding: 10px;

}

.el-container {
  /* height: calc(100vh); */
  height: 100vh;
  /* min-width: 1000px;
  min-height: 600px; */

}

.select{
  &>i{
    font-size: 24px;
     vertical-align: middle;
     color: #fff;
  }
  margin-right: 10px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>