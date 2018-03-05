<template>
  <div>
    <GabrielHeader @showMenu='showmenu' title='知识库'></GabrielHeader>
    <GabrielMenu ref='GabrielMenu'></GabrielMenu>
    <GabrielList></GabrielList>
  </div>
</template>
<script type='text/ecmascript-6'>
import GabrielHeader from 'components/gabriel-header/gabriel-header.vue'
import GabrielMenu from 'components/gabriel-menu/gabriel-menu.vue'
import GabrielList from 'components/gabriel-list/gabriel-list.vue'

export default {
  components: {
    GabrielHeader,
    GabrielMenu,
    GabrielList
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
