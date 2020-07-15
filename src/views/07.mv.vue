<template>
  <div class="mv-container">
    <div class="mv-wrap">
      <h3 class="title">mv详情</h3>
      <!-- mv -->
      <div class="video-wrap">
        <video
          controls
          autoplay
          :src="mvpath"
        ></video>
      </div>
      <!-- mv信息 -->
      <div class="info-wrap">
        <div class="singer-info">
          <div class="avatar-wrap">
            <img :src="artistPic" alt="" />
          </div>
          <span class="name">{{mvcontent.artistName}}</span>
        </div>
        <div class="mv-info">
          <h2 class="title">{{mvcontent.name}}</h2>
          <span class="date">发布：{{mvcontent.publishTime}}</span>
          <span class="number">播放：{{mvcontent.playCount}}次</span>
          <p class="desc">
            {{mvcontent.desc}}
          </p>
        </div>
      </div>
      <!-- 精彩评论 -->
      <div class="comment-wrap">
        <p class="title">精彩评论</p>
        <div class="comments-wrap">
          <div class="item" v-for="(item,index) in hotComment" :key="index">
            <div class="icon-wrap">
              <img :src="item.user.avatarUrl" alt="" />
            </div>
            <div class="content-wrap">
              <div class="content">
                <span class="name">{{item.user.nickname}}：</span>
                <span class="comment">{{item.content}}</span>
              </div>
              <div class="re-content" v-if="item.beReplied.length!=0">
                <span class="name">{{item.beReplied[0].user.nickname}}：</span>
                <span class="comment">{{item.beReplied[0].content}}</span>
              </div>
              <div class="date">{{item.time}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 最新评论 -->
      <div class="comment-wrap">
        <p class="title">最新评论<span class="number">({{total}})</span></p>
        <div class="comments-wrap">
          <div class="item" v-for="(item,index) in comment" :key="index">
            <div class="icon-wrap">
              <img :src="item.user.avatarUrl" alt="" />
            </div>
            <div class="content-wrap">
              <div class="content">
                <span class="name">{{item.user.nickname}}：</span>
                <span class="comment">{{item.content}}</span>
              </div>
              <div class="re-content" v-if="item.beReplied.length!=0">
                <span class="name">{{item.beReplied[0].user.nickname}}：</span>
                <span class="comment">{{item.beReplied[0].content}}</span>
              </div>
              <div class="date">{{item.time}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 分页器 -->
      <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        :page-size="5"
        :limit="limit"
      >
      </el-pagination>
    </div>
    <div class="mv-recommend">
      <h3 class="title">相关推荐</h3>
      <div class="mvs">
        <div class="items">
          <div class="item" v-for="(item,index) in aboutmv" :key="index" @click="getMvid(item.id,item.artistId)">
            <div class="img-wrap">
              <img :src="item.cover" alt="" />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">{{item.playCount}}</div>
              </div>
              <span class="time">{{item.duration}}</span>
            </div>
            <div class="info-wrap">
              <div class="name">{{item.name}}</div>
              <div class="singer">{{item.artistName}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'mv',
  data() {
    return {
      // 总条数
      total: 20,
      // 页码
      page: 1,
      // 页容量
      limit: 10,
      //mv地址
      mvpath:'',
      //相关mv
      aboutmv:[],
      //mv信息
      mvcontent:[],
      //歌手图片
      artistPic:'',
      //热门评论
      hotComment:[],
      // 最新评论
      comment:[],
      
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.page = val;
      axios({
      url:'https://autumnfish.cn/comment/mv',
      method:'get',
      params:{
        id:this.$route.query.id,
        limit:10,
        offset:(this.page-1)*10
      }
    }).then(res=>{
      console.log(res);
      this.hotComment = res.data.hotComments;
      this.comment = res.data.comments;
    })
    },
    getMvid(id,aid) {
      this.$router.push(`/mv?id=${id}&aid=${aid}`)
    },
    
  },
  created(){
    //获取mv地址
    axios({
      url:'https://autumnfish.cn/mv/url',
      method:'get',
      params:{
        id:this.$route.query.id
      }
    }).then(res=>{
      // console.log(res);
      this.mvpath = res.data.data.url
    }),
    //相关mv
    axios({
      url:'https://autumnfish.cn/simi/mv',
      method:'get',
      params:{
        mvid:this.$route.query.id
      }
    }).then(res=>{
      console.log("相关mv",res);
      this.aboutmv = res.data.mvs

      for (let i = 0; i < this.aboutmv.length; i++) {
          if (this.aboutmv[i].playCount>100000) {
            this.aboutmv[i].playCount = parseInt(this.aboutmv[i].playCount/10000)+'万'
          } 

          let min = parseInt(this.aboutmv[i].duration/1000/60);
          let sec = parseInt(this.aboutmv[i].duration/1000%60);
          if(min < 10) {
            min = '0' + min
          };
          if(sec < 10) {
            sec = '0' + sec
          }
          this.aboutmv[i].duration = min + ':' + sec;
      }
    }),
    //mv信息
    axios({
      url:'https://autumnfish.cn/mv/detail',
      method:'get',
      params:{
        mvid:this.$route.query.id
      }
    }).then(res=>{
      console.log(res);
      this.mvcontent = res.data.data;
      
    }),
    //歌手信息
    axios({
      url:'https://autumnfish.cn/artists',
      method:'get',
      params:{
        id:this.$route.query.aid
      }
    }).then(res=>{
      // console.log(res);
      this.artistPic = res.data.artist.img1v1Url;
    }),
    //mv评论
    axios({
      url:'https://autumnfish.cn/comment/mv',
      method:'get',
      params:{
        id:this.$route.query.id,
        limit:10,
        offset:0
      }
    }).then(res=>{
      console.log(res);
      this.hotComment = res.data.hotComments;
      this.comment = res.data.comments;
      this.total = res.data.total;
    })
  },
  watch:{
     '$route' (to, from) {   
             this.$router.go(0);
             
      }
  }
  
};
</script>

<style></style>
