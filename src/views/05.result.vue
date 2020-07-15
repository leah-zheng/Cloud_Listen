<template>
  <div class="result-container">
    <div class="title-wrap">
      <h2 class="title">{{$route.query.data}}</h2>
      <span class="sub-title">找到{{result}}个结果</span>
    </div>
    <el-tabs v-model="activeIndex">
      <el-tab-pane label="歌曲" name="songs">
        <table class="el-table">
          <thead>
            <th></th>
            <th>音乐标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th>时长</th>
          </thead>
          <tbody>
            <tr class="el-table__row" v-for="(item,index) in songList" :key="index" @dblclick="playmusic(item.id)">
              <td>{{index+1}}</td>
              <td>
                <div class="song-wrap">
                  <div class="name-wrap">
                    <span>{{item.album.name}}</span>
                    <span class="iconfont icon-mv" v-if="item.mvid!=0" @click="toMv(item.mvid,item.artists[0].id)"></span>
                  </div>
                  <span v-if="item.alias.length!=0">{{item.alias[0]}}</span>
                </div>
              </td>
              <td>{{item.artists[0].name}}</td>
              <td>{{item.album.name}}</td>
              <td>{{item.duration}}</td>
            </tr>

          </tbody>
        </table>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="lists">
        <div class="items">
          <div class="item" v-for="(item,index) in playlists" :key="index" @click="toPlaylists(item.id)">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">{{item.playCount}}</span>
              </div>
              <img :src="item.coverImgUrl" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">{{item.name}}</p>
          </div>
         
        </div>
      </el-tab-pane>
      <el-tab-pane label="MV" name="mv">
        <div class="items mv">
          <div class="item" v-for="(item,index) in mvlist" :key="index" @click="toMv(item.id,item.artists[0].id)">
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'result',
  data() {
    return {
      activeIndex: 'songs',
      // 歌曲列表
      songList:[],
      // 歌曲时长
      songtime:'',
      // 结果总数
      result:'',
      //搜索歌单列表
      playlists:[],
      //搜索歌单播放次数
      count:0,
      //搜索mv列表
      mvlist:[]
    };
  },
  methods:{
    // 获取音乐数据
    getmusic() {
      axios({
      url:'https://autumnfish.cn/search',
      method:'get',
      params:{
        keywords:this.$route.query.data,
        limit:10,
        type:1
      }
    }).then(res=>{
      console.log(res);
      this.songList = res.data.result.songs;
      // 设置时间格式
      for (let i = 0; i < this.songList.length; i++) {
        let time = this.songList[i].duration;
        let min = parseInt(time/1000/60);
        let sec = parseInt(time/1000%60);
        if(min < 10) {
          min = '0' + min;
        }
        if(sec < 10) {
          sec = '0' + sec;
        }
        this.songList[i].duration = min +':'+ sec;
      };
      // 搜索结果数量
      this.result = res.data.result.songCount;
    })
    },
    // 双击播放音乐
    playmusic(id) {
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
    //点击歌单跳转到歌单页面
    toPlaylists(id) {
      this.$router.push(`/playlist?id=${id}`);
    },
    //跳转到mv页面
    toMv(id,aid) {
      this.$router.push(`/mv?id=${id}&aid=${aid}`);
      this.$parent.musicUrl=""
    }
  },
  created() {
    this.getmusic();
  },
  watch:{
    
    activeIndex() {
      // songs 歌曲
      // lists 歌单
      // mv
      let type = 1;
      let limit = 10;
      switch (this.activeIndex) {
        case 'songs':
          type = 1;
          break;
        case 'lists':
          type = 1000;
          break;
        case 'mv':
          type = 1004;
          limit = 8;
          break;
      
        default:
          break;
      }

        axios({
          url:'https://autumnfish.cn/search',
          method:'get',
          params:{
            keywords:this.$route.query.data,
            limit,
            type//type:type
          }
        }).then(res=>{
          console.log(res);
          //获取歌曲
          if(type == 1) {
            this.songList = res.data.result.songs;
            this.result = res.data.result.songCount;
            // 设置时间格式
            for (let i = 0; i < this.songList.length; i++) {
              let time = this.songList[i].duration;
              let min = parseInt(time/1000/60);
              let sec = parseInt(time/1000%60);
              if(min < 10) {
                min = '0' + min;
              }
              if(sec < 10) {
                sec = '0' + sec;
              }
              this.songList[i].duration = min +':'+ sec;
            }
          } //获取歌单
          else if (type == 1000) {
            this.playlists = res.data.result.playlists;
            this.result = res.data.result.playlistCount;
            //设置播放次数
            for (let i = 0; i < this.playlists.length; i++) {
              if(this.playlists[i].playCount > 100000) {
                this.playlists[i].playCount = parseInt(this.playlists[i].playCount / 10000)+'万';
                console.log(this.playlists[i].playCount);
              }
            }
          } //获取mv
          else if (type == 1004) {
            this.mvlist = res.data.result.mvs;
            this.result = res.data.result.mvCount;
            
            for (let i = 0; i < this.mvlist.length; i++) {
              //设置时间
              let min = parseInt(this.mvlist[i].duration/1000/60);
              let sec = parseInt(this.mvlist[i].duration/1000%60);
              if(min < 10) {
                min = '0' + min;
              }
              if(sec < 10) {
                sec = '0' + sec;
              }
              this.mvlist[i].duration = min + ':' + sec;
              //设置播放次数
              if(this.mvlist[i].playCount > 100000) {
                this.mvlist[i].playCount = parseInt(this.mvlist[i].playCount/10000)+'万';
              }
            }
          }
        })
      }
    },
    
}
</script>

<style >

</style>
