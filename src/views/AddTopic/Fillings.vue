<template>
  <div class='Fillings'>
    <el-row :gutter="10">
      <el-col :span="18">
        <el-input tyle="text" v-model="Question" placeholder="请输入要添加的题目"></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="currentSubjec" placeholder="请选择科目">
          <el-option :value="item.SubjectName" :key="item._id" v-for="item in subjectList">{{item.SubjectName}}</el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-button icon="el-icon-edit" type="primary" @click="AddTopic">添加</el-button>
      </el-col>
    </el-row>


    <el-row>
      <el-col :span="18">
        <el-input type="text" v-model="Answer" placeholder="答案"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18">
        <el-input type="textarea" :rows="4" v-model="desc" placeholder="解析"></el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    subjectList:{
      type:Array,
      required:true
    }
  },
  components: {},
  data() {
    return {
      Question: "",
      Answer: "",
      desc: "",
      currentSubjec:"",
      Show:true
    };
  },
  computed: {},
  watch: {},
  methods: {
   async AddTopic() {
      try {
        let {
          Question,
          Answer,
          desc,
          currentSubjec,
          Show,
        } = this;
      
        if (
          Question &&
          Answer &&
          currentSubjec
        ) {
          let res = await this.$api.FillingAdd({
            Question,
            Answer,
            desc,
            SubjectName: currentSubjec,
            Show,
          });

          if (res.code === 200) {
  
            this.$message({
              type: "success",
              message: res.message,
            });
          } else {
            this.$message({
              type: "warning",
              message: res.message,
            });
          }
          this.Question=""
          this.Answer=""
          this.desc=""

      
        }else{
          this.$message({
              type: "warning",
              message:"除了解析其他值不能为空",
            });
        
        }
      } catch (err) {}
    }
  },
  created() {},
  mounted() {

  },
  beforeDestroy() {}
};
</script>
<style lang='scss' scoped>
.el-row + .el-row {
  margin-top: 10px;
}
</style>