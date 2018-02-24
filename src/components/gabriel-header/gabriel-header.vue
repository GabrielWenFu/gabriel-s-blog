<template>
  <div class='gabriel-header'>
    <div class="gabriel-header-menu" @click="showMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="gabriel-header-title">
      {{title}}
    </div>
    <div class="gabriel-header-logo">
      <img :src='Logo' alt="头像" >
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import Logo from 'common/img/logo.jpeg'
export default {
  props: {
    title: {
      type: String,
      default: 'Gabriel'
    }
  },
  data () {
    return {
      Logo
    }
  },
  methods: {
    showMenu () {
      this.$emit('showMenu', 'gabriel')
    }
  }
}
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
</style>
