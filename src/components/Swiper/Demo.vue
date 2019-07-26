<template>
  <div>
    <swiper :swiper-config="config">
      <template slot="banners">
        <div
          v-for="(item, index) in imgList"
          :key="index"
          class="swiper-slide"
        >
          <img :src="item">
        </div>
      </template>
      <template slot="pagination">
        <div class="swiper-pagination"></div>
      </template>
      <template slot="navigation">
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </template>
    </swiper>
  </div>
</template>

<script>
import swiper from './Swiper.vue'
const imgList = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560754742995&di=2c224e7c44a985b07c680ff1e6919a0c&imgtype=0&src=http%3A%2F%2Fwww.pptbz.com%2Fd%2Ffile%2Fp%2F201708%2F958e6e15cfd8d50845916bb972efd4c0.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560754742995&di=ae6307c1219a63badb349bf79d1b76fb&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201504%2F01%2F215711qy06lahl2y0yy62a.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560754742994&di=1ec5df5f681db4b2f4b918d1687007ca&imgtype=0&src=http%3A%2F%2Fs02.ourgame.com.cn%2Fg1%2FM00%2F49%2F81%2FwKgCyVkmG-XcYDfCAAWZDmh1d7I159.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560754742994&di=d40c74336972107189eda1bafd8d8b50&imgtype=0&src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F170823%2F4-1FR3094538.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560754742994&di=7a1739c72935c5f3ca3a7bcdc68a6b51&imgtype=0&src=http%3A%2F%2Fb1-q.mafengwo.net%2Fs10%2FM00%2F57%2F4D%2FwKgBZ1obeteAdweoAA6dklfQeDQ39.jpeg'
]
export default {
  components: {
    swiper
  },
  data () {
    return {
      imgList,
      config: {}
    }
  },
  created () {
    setTimeout(this.init, 2000)
  },
  methods: {
    init () {
      this.config = {
        el: '.swiper-container',
        options: {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>

<style lang="stylus" scoped>
  html, body {
    width 100vw
    height 100vh
    overflow hidden
  }
</style>
