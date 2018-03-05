<template>
  <div>
    <GabrielHeader @showMenu='showmenu' title='娱乐'></GabrielHeader>
    <GabrielMenu ref='GabrielMenu'></GabrielMenu>
  </div>
</template>
<script type='text/ecmascript-6'>
import GabrielHeader from 'components/gabriel-header/gabriel-header.vue'
import GabrielMenu from 'components/gabriel-menu/gabriel-menu.vue'

export default {
  components: {
    GabrielHeader,
    GabrielMenu
  },
  data () {
    return {}
  },
  methods: {
    showmenu () {
      this.$refs.GabrielMenu.show()
    }
  }
}
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
</style>
