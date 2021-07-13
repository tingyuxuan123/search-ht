<template>
  <div class='AddTopic'>
    <el-tabs v-model="activeName" type="card" >
    <el-tab-pane label="选择题" name="first">
      <single-sels :subjectList=subjectList></single-sels>
    </el-tab-pane>
    <el-tab-pane label="判断题" name="second">
      <right-or-wrongs :subjectList=subjectList></right-or-wrongs>
    </el-tab-pane>
    <el-tab-pane label="填空题" name="third">
      <fillings :subjectList=subjectList></fillings>
    </el-tab-pane>
  </el-tabs>   
  </div>
</template>
<script>
import RightOrWrongs from './RightOrWrongs.vue';
import Fillings from './Fillings.vue'
import SingleSels from './SingleSels.vue';
export default {
  name: '',
  props: {},
  components: {
    Fillings,
    SingleSels,
    RightOrWrongs,
    SingleSels
  },
  data() {
    return {
      activeName:"first",
      subjectList:[]
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getSubject() { // 获取科目
     try{
       let result=await this.$api.subjectFind(this.subject)
      //  console.log(result);
      if(result.code===200){
        this.subjectList=result.result
      }
     }catch(err){

     }
    },
  },
  created() {},
  mounted() {
    this.getSubject()
  
  },
  beforeDestroy() {}
};
</script>
<style lang='scss' scoped>
</style>