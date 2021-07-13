<template>
  <div class='subject'>
    <h3 class="title">添加</h3>
    <el-row :gutter="20">
      <el-col :span="20">
        <el-input type="text" v-model="subject"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="addSubject">添加科目</el-button>
      </el-col>
    </el-row>

    <h3 class="title">科目列表</h3>

    <el-row class="header">
      <el-col :span="2"><span>序号</span></el-col>
      <el-col :span="16"><span>科目</span></el-col>
      <el-col :span="6"><span>编辑</span></el-col>
    </el-row>

    <el-row class="content" v-for="(item,index) in subjectList" :key="item._id"> 
      <el-col :span="2"><span>{{index+1}}</span></el-col>
      <el-col :span="16"><span>{{item.SubjectName}}</span></el-col>
      <el-col :span="6"> 
        <el-button type="primary" size="small" @click="updataClick(item._id)">修改</el-button>
        <el-button type="danger" size="small" @click="deleteSubject(item._id)">删除</el-button> 
      </el-col>
    </el-row>

    

  </div>
</template>
<script>
export default {
  name: '',
  props: {},
  components: {},
  data() {
    return {
      subject:"",
      subjectList:[]
    };
  },
  computed: {},
  watch: {},
  methods: {
   async getSubject() { // 获取科目
     try{
       let result=await this.$api.subjectFind(this.subject)
       console.log(result);
      if(result.code===200){
        this.subjectList=result.result
      }
     }catch(err){

     }
    },
    async addSubject(){
      try{
        let exp=/\W{2,}/
        
        if(!exp.test(this.subject)){
          this.$message({
            type:"warning",
            message:"输入不合法"
          })
          return
        }

        let res=await this.$api.subjectAdd({SubjectName:this.subject})
        if(res.code===200){
         this.getSubject()
         this.$message({
           type:"success",
           message:res.message
         })
        }else{
          this.$message({
            type:"warning",
            message:res.message
          })
        }
      }catch(err){
        
      }

    },
    async updataSubject(_id,SubjectName){
      try{
        let res=await this.$api.subjectUpdata({_id},{SubjectName})
        if(res.code===200){
           this.getSubject()
           this.$message({
            type:"success",
            message:res.message
         })
        }else{
          this.$message({
            type:"warning",
            message:res.message
         })
        }
      }catch(err){
        
      }
    },
    async deleteSubject(_id){
      try{  
        let res=await this.$api.subjectDelete({_id})
        if(res.code===200){
           this.getSubject()
           this.$message({
            type:"success",
            message:res.message
         })
        }else{
          this.$message({
            type:"warning",
            message:res.message
         })
        }
      }catch(err){
        
      }
    },
    updataClick(_id){
        this.$prompt('请输入科目名称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /\W{2,}/,
          inputErrorMessage: '长度不能小于2'
        }).then(({ value }) => {
          this.updataSubject(_id,value)
        }).catch(() => {
          
  
        });
    }
  },
  created() {},
  mounted() {
     this.getSubject()
  },
  beforeDestroy() {}
};
</script>
<style lang='scss' scoped>


.header{
  text-align: center;
  background-color: #E0E0E0;
  line-height: 46px;
}
.content{
  text-align: center;
  line-height: 46px;
  &:nth-child(even){
    background-color: #fafafa;
  }

    &:hover{
    background-color: #e0e0e0;

  }
}

</style>