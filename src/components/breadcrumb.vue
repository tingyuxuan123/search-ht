<template>
  <div class='breadcrumb'>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in levelList" :key="item.title" :to="{path:item.path}"><span class="title">{{item.title}}</span></el-breadcrumb-item>
        
      </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: '',
  props: {},
  components: {},
  data() {
    return {
        levelList:[]
    };
  },
  computed: {},
  watch: {
      $route(){
          this.getMatched()
      }
  },
  methods: {
      getMatched(){
        this.levelList=this.$route.matched.map((item)=>{
            return {
                path:item.path,
                title:item.meta.title
            }
        })
      
      }
  },
  created() {},
  mounted() {
      this.getMatched()
  },
  beforeDestroy() {}
};
</script>
<style lang='scss' scoped>

.el-breadcrumb-item{
    cursor: pointer;
}

.title{
    color: #fff;
}
</style>