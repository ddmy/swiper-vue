<template>
  <div class="swiper-main">
    <div
      class="swiper-container"
    >
      <div class="swiper-wrapper">
        <slot name="banners"></slot>
      </div>
      <slot name="navigation"></slot>
      <slot name="pagination"></slot>
    </div>
    <div class="swiper-other">
      <slot name="other"></slot>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
export default {
  name: 'SwiperBanner',
  props: {
    swiperConfig: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      // 初始化的swiper的实例
      swiperBanner: {}
    }
  },
  watch: {
    swiperConfig (val) {
      this.$nextTick(this.initSwiper)
    }
  },
  mounted () {
    this.initSwiper()
  },
  methods: {
    initSwiper () {
      if (this.swiperBanner.destroy && typeof this.swiperBanner.destroy === 'function') {
        this.swiperBanner.destroy()
      }
      this.swiperBanner = new Swiper(this.$el.querySelector('.swiper-container'), this.swiperConfig)
      this.$emit('init', this.swiperBanner)
    }
  }
}
</script>

<style lang="stylus">
  .swiper-main {
    width 100%
    position relative
    .swiper-container {
      width 100%
      height 100%
    }
    .swiper-other {
      width 100%
      height 100%
      position absolute
      top 0
      left 0
    }
  }
  .swiper-wrapper {
    display flex
    align-items center
    width 100%
  }
  .swiper-slide {
    width 100%
    text-align center
    font-size 18px
    background #fff
    display flex
    justify-content center
    align-items center
    & > img {
      display block
      width 100%
    }
  }
</style>
