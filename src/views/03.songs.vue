<template>
  <div class="songs-container">
    <div class="tab-bar">
      <span class="item" @click='tag=0' :class="{active:tag==0}">全部</span>
      <span class="item" @click='tag=7' :class="{active:tag==7}">华语</span>
      <span class="item" @click='tag=96' :class="{active:tag==96}">欧美</span>
      <span class="item" @click='tag=8' :class="{active:tag==8}">日本</span>
      <span class="item" @click='tag=16' :class="{active:tag==16}">韩国</span>
    </div>
    <!-- 底部的table -->
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
        <tr class="el-table__row" v-for="(item,index) in playlist" :key="index" >
          <td>{{index+1}}</td>
          <td>
            <div class="img-wrap">
              <img :src="item.album.picUrl" alt="" />
              <span class="iconfont icon-play" @click="getmusic(item.id)"></span>
            </div>
          </td>
          <td>
            <div class="song-wrap">
              <div class="name-wrap">
                <span>{{item.name}}</span>
                <span class="iconfont icon-mv" v-if="item.mvid!=0" @click="toMv(item.mvid)"></span>
              </div>
              <span>{{item.album.name}}</span>
            </div>
          </td>
          <td>{{item.album.artists["0"].name}}</td>
          <td>{{item.album.name}}</td>
          <td>{{item.duration}}</td>
          
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'songs',
  data() {
    return {
      playlist:[],
      tag:0,
      
    };
  },

  created(){
    this.getlist();
    
  },
  watch:{
    tag() {
      this.getlist()
    }
  },
  methods:{
    //获取列表数据
    getlist() {
      axios({
      url:'https://autumnfish.cn/top/song',
      method:'get',
      params:{
        type:this.tag,
        
      } 
      }).then(res=>{
        console.log(res);
        this.playlist = res.data.data
        for(let i = 0; i < this.playlist.length; i++) {
          let time = this.playlist[i].duration / 1000;
          let min = parseInt(time/60);
          if (min < 10) {
            min = '0' + min;
          }
          let sec = parseInt(time % 60) ;
          if (sec < 10) {
            sec = '0' + sec;
          }
          this.playlist[i].duration = min+':'+sec
        }
        
      })
    },
    //点击播放音乐
    getmusic(id) {
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
    //查看mv
    toMv(id) {
      this.$router.push(`/mv?id=${id}`);
      this.$parent.musicUrl = '';
    }
  },
  
};
</script>

<style >

</style>
