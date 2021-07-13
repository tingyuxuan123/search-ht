<template>
  <div class='Topics'>
    <!-- <h2>操作</h2> -->
    <el-row :gutter="10">
      <el-col :span="16">
        <el-input tyle="text" v-model="searchValue" placeholder="请输入要搜索的内容"></el-input>
      </el-col>
      <el-col :span="3">
        <el-select v-model="currentTopicType" placeholder="请选择题型">
          <el-option :value="item" :key="item" v-for="item in TopicType">{{item}}</el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-select v-model="currentSubjec" placeholder="请选择科目">
          <el-option :value="item.SubjectName" :key="item._id" v-for="item in subjectList">{{item.SubjectName}}</el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-button icon="el-icon-search" type="primary" @click="Search">搜索</el-button>
      </el-col>
    </el-row>
  <div class="contain" v-show="selectList.length>0">
        <h2 class="title"><span>题目列表</span></h2>
    <el-row class="header">
      <el-col :span="2"><span>序号</span></el-col>
      <el-col :span="10"><span>题目</span></el-col>
      <el-col :span="5" v-show="currentTopicType==='选择题'"><span>选项</span></el-col>
      <el-col :span="3"><span>答案</span></el-col>
      <el-col :span="4"><span>编辑</span></el-col>
    </el-row>

    <el-row class="content" v-for="(item,index) in selectList" :key="item._id"> 
      <el-col :span="2"><span>{{index+1}}</span></el-col>
      <el-col :span="10"><span>{{item.Question}}</span></el-col>
      <el-col :span="5" v-show="currentTopicType==='选择题'">
        <ul class="choose">
          <li>A.{{item.ChoiseA}}</li>
          <li>B.{{item.ChoiseB}}</li>
          <li>C.{{item.ChoiseC}}</li>
          <li>D.{{item.ChoiseD}}</li>
        </ul>
      </el-col>
      <el-col :span="3"><span>{{item.Answer}}</span></el-col>
      <el-col :span="4"> 
        <el-button type="primary" size="small" >修改</el-button>
        <el-button type="danger" size="small" >删除</el-button> 
      </el-col>
    </el-row>
  </div>



  </div>
</template>
<script>
export default {
  name: '',
  props: {},
  components: {},
  data() {
    return {
      TopicType:["选择题","判断题","填空题"],
      currentTopicType:"",
      subjectList:[],
      currentSubjec:"",
      searchValue:"",
      selectList:[],// 获取选择列表  
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
    async selectFind() { //寻找选择题
    let where={Question:this.searchValue}
    this.currentTopicType && (where["TopicType"]=this.currentTopicType)
    this.currentSubjec && (where["SubjectName"]=this.currentSubjec)
    let res=await this.$api.selectFind(where)
     this.selectList=res.result
     console.log(res.result);
    },
    async RightOrWrongFind() {
    let where={Question:this.searchValue}
    this.currentTopicType && (where["TopicType"]=this.currentTopicType)
    this.currentSubjec && (where["SubjectName"]=this.currentSubjec)
    let res=await this.$api.RightOrWrongFind(where)
     this.selectList=res.result
    },
    async FillingFind() {
    let where={Question:this.searchValue}
    this.currentTopicType && (where["TopicType"]=this.currentTopicType)
    this.currentSubjec && (where["SubjectName"]=this.currentSubjec)
    let res=await this.$api.FillingFind(where)
     this.selectList=res.result
    },
    Search(){

      if(this.currentTopicType){
        if(this.currentTopicType==="选择题"){
          this.selectFind()
        }else if(this.currentTopicType==="判断题"){
          this.RightOrWrongFind()
        }else{
          this.FillingFind()
        }
      }else{
        
      }
      // this.selectFind()
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


.title{
  span{
    font-weight: 400;
    font-size: 18px;
    border-bottom: 3px solid #409eff;
  }
}
.contain{
  height: calc(100% - 50px);
}
.header{
  text-align: center;
  background-color: #E0E0E0;
  line-height: 46px;
}
.content{
  text-align: center;
  padding: 5px;

  &:nth-child(even){
    background-color: #fafafa;
  }

    &:hover{
    background-color: #e0e0e0;

  }

  .choose{
    margin: 0px;
    padding: 0px;
    list-style: none;
  line-height: 24px;
  }
}
</style>