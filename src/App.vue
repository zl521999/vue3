<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-if="$route.meta.isShowFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">

  import {reqAddress} from "./api"
  import FooterGuide from "./components/FooterGuide/FooterGuide"
  export default {
    name:"App",
    data () {
      return {
        msg:"App Component"
      }
    },
    components: {

      FooterGuide

    },

    async mounted () {
      //从后台获取数据到state中--vuex
      this.$store.dispatch("getAddress")
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
