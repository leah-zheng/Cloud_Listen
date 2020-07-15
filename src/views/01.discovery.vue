<template>
  <div class="discovery-container">
    <!-- 轮播图 -->
    <el-carousel class="" :interval="4000" type="card">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <img :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐歌单 -->
    <div class="recommend">
      <h3 class="title">
        推荐歌单
      </h3>
      <div class="items" >
        <div class="item" v-for="(item,index) in command" :key="index" @click="toPlaylist(item.id)">
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{item.copywriter}}</span>
            </div>
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play" ></span>
          </div>
          <p class="name">{{item.name}}</p>
        </div>
        
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="news">
      <h3 class="title">
        最新音乐
      </h3>
      <div class="items">
        <div class="item" v-for="(item,index) in newsong" :key="index">
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play" @click="getUrl(item.id)"></span>
          </div>
          <div class="song-wrap">
            <div class="song-name">{{item.name}}</div>
            <div class="singer">{{item.song.artists[0].name}}</div>
          </div>
        </div>
       
      </div>
    </div>
    <!-- 推荐MV -->
    <div class="mvs">
      <h3 class="title">推荐MV</h3>
      <div class="items">
        <div class="item" v-for="(item,index) in newmv" :key="index" @click="toMv(item.id)">
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">{{item.playCount}}</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">{{item.name}}</div>
            <div class="singer">{{item.artistName}}</div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'discovery',
  data() {
    return {
      banners:[],
      command:[],
      newsong:[],
      newmv:[],
      id:[]
    }
  },
  
  created() {
    // 轮播图
    axios({
      url:'https://autumnfish.cn/banner',
      method:'get',
      params:{}
      }).then(res=>{
      this.banners = res.data.banners
    })
    
    // 推荐歌单
    axios({
      url:'https://autumnfish.cn/personalized',
      method:'get',
      params:{
        limit:10
      }
      }).then(res=>{
        this.command = res.data.result
        // console.log('推荐',res);
        
    })

    // 最新音乐
    axios({
      url:'https://autumnfish.cn/personalized/newsong',
      method:'get',
      params:{}
    }).then(res=>{
      console.log(res);
      this.newsong = res.data.result
    })

    // 推荐MV
    axios({
      url:'https://autumnfish.cn/personalized/mv',
      method:'get',
      params:{}
    }).then(res=>{
      this.newmv = res.data.result
    })

  },

  methods:{
       // 播放歌曲
    getUrl(id) {
      axios({
      url:'https://autumnfish.cn/song/url',
      method:'get',
      params:{
        id
      }
    }).then(res=>{
      let url = res.data.data[0].url;
      if (!url) {
        this.$message.error('该资源为VIP专享，暂不支持播放 ！')
      } else {
        this.$parent.musicUrl = url;
      // 设置给父组件的播放地址
      }
    })
    
    },
    //跳转到歌单页面
    toPlaylist(id) {
      this.$router.push(`/playlist?id=${id}`)
    },
    //跳转到mv页面
    toMv(id) {
      this.$router.push(`/mv?id=${id}`)
    }
  },
};
</script>

<style >

</style>
