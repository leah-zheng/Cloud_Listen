<template>
  <div class="playlist-container">
    <div class="top-wrap">
      <div class="img-wrap">
        <img :src="listContent.coverImgUrl" alt="" />
      </div>
      <div class="info-wrap">
        <p class="title">{{listContent.name}}</p>
        <div class="author-wrap">
          <img class="avatar" :src="listContent.creator.avatarUrl" alt="" />
          <span class="name">{{listContent.creator.nickname}}</span>
          <span class="time">{{listContent.createTime}} 创建</span>
        </div>
        <div class="play-wrap">
          <span class="iconfont icon-circle-play"></span>
          <span class="text">播放全部</span>
        </div>
        <div class="tag-wrap">
          <span class="title" v-if='listContent.tags.length!=0'>标签:</span>
          <ul>
            <li v-for="(item,index) in listContent.tags" :key="index">{{item}}</li>
           
          </ul>
        </div>
        <div class="desc-wrap">
          <span class="title">简介:</span>
          <span class="desc"
            >{{listContent.description}}</span
          >
        </div>
      </div>
    </div>
    <el-tabs v-model="activeIndex">
      <el-tab-pane label="歌曲列表" name="1">
        <table class="el-table playlit-table">
          <thead>
            <th></th>
            <th></th>
            <th>音乐标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th>时长</th>
          </thead>
          <tbody>
            <tr class="el-table__row" v-for="(item,index) in listContent.tracks" :key="index" @click="getUrl(item.id)">
              <td>{{index+1}}</td>
              <td>
                <div class="img-wrap">
                  <img :src="item.al.picUrl" alt="" />
                  <span class="iconfont icon-play"></span>
                </div>
              </td>
              <td>
                <div class="song-wrap">
                  <div class="name-wrap">
                    <span>{{item.name}}</span>
                    <span class="iconfont icon-mv"></span>
                  </div>
                </div>
              </td>
              <td>{{ item.ar[0].name }}</td>
              <td>{{ item.al.name }}</td>
              <td>{{ item.dt }}</td>
            </tr>
           
          </tbody>
        </table>
      </el-tab-pane>
      <el-tab-pane label="评论" name="2">
        <!-- 精彩评论 -->
        <div class="comment-wrap" >
          <p class="title">精彩评论<span class="number">({{hotComments.length}})</span></p>
          <div class="comments-wrap">
            <div class="item" v-for="(item,index) in hotComments" :key="index">
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
                <div class="date">2020-02-12 17:26:11</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 最新评论 -->
        <div class="comment-wrap">
          <p class="title">最新评论<span class="number">({{total}})</span></p>
          <div class="comments-wrap">
            <div class="item" v-for="(item,index) in comments" :key="index">
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
                <div class="date">2020-02-12 17:26:11</div>
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
        >
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'playlist',
  data() {
    return {
      activeIndex: '1',
      // 总条数
      total: 0,
      // 页码
      page: 1,
      // 歌单介绍
      listContent:{
        creator:{},
        tags:[]
      },
      // 热门评论
      hotComments:[],
      //最新评论
      comments:[]
      
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.page = val,
      //重新获取最新评论
      axios({
      url:"https://autumnfish.cn/comment/playlist",
      method:'get',
      params:{
        id:this.$route.query.id,
        limit:10,
        offset:(this.page-1)*10
      }
    }).then(res=>{
      // console.log(res);
      this.comments = res.data.comments;
      this.total = res.data.total;
    })
    },
    // 播放歌曲
    getUrl(id) {
      axios({
      url:'https://autumnfish.cn/song/url',
      method:'get',
      params:{
        id
      }
    }).then(res=>{
      console.log(res);
      let url = res.data.data[0].url;
      if (!url) {
        this.$message.error('该资源为VIP专享，暂不支持播放 ！')
      } else {
        this.$parent.musicUrl = url;
      // 设置给父组件的播放地址
      }
    })
    }
    },
  
  created() {
    //获取歌曲列表
    axios({
      url:'https://autumnfish.cn/playlist/detail',
      method:'get',
      params:{
        id:this.$route.query.id
      }
    }).then(res=>{
      console.log(res);
      //获取歌单的详情介绍
      this.listContent = res.data.playlist;
      
      
      for (let i = 0; i < this.listContent.tracks.length; i++) {
        
        let min = parseInt(this.listContent.tracks[i].dt/1000/60);
        let sec = parseInt(this.listContent.tracks[i].dt/1000%60);
        if (min < 10) {
          min = '0' + min
        }
        if (sec < 10) {
          sec = '0' + sec
        }
        this.listContent.tracks[i].dt = min + ':' + sec;
      }
      
    }),
    //获取热门评论
    axios({
      url:'https://autumnfish.cn/comment/hot',
      method:'get',
      params:{
        id:this.$route.query.id,
        type:2
      }
    }).then(res=>{
      // console.log(res);
      this.hotComments = res.data.hotComments;
    })
    //获取最新评论
    axios({
      url:"https://autumnfish.cn/comment/playlist",
      method:'get',
      params:{
        id:this.$route.query.id,
        limit:10,
        offset:(this.page-1)*10
      }
    }).then(res=>{
      // console.log(res);
      this.comments = res.data.comments;
      this.total = res.data.total;
    })
  }
}
</script>

<style >

</style>
