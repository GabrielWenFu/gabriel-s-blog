<template>
  <div class="gabriel-list-content">
    <ul>
      <li v-for='(item, index) in listData' :key='index'>
        <div>
          {{item.name}}
        </div>
      </li>
    </ul>
  </div>
</template>
<script type='ecmascript-6'>
import { data } from 'common/data/Knowledge-base-list.js'
export default {
  data () {
    return {
      listData: data
    }
  }
}
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.gabriel-list-content
  ul
    li
      font-size: 0.16rem
      padding: 0.08rem 0.15rem
      background-color: #d1e3db
      div
        border: 0.01rem solid #f3f9f1
        padding: 0.06rem 0.08rem
        border-radius: 0.08rem
        box-shadow: 0 0 0.04rem #ffa631
</style>
