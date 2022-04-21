<template>
  <div id="app">
    <NavHeader />
    <router-view/>
  </div>
</template>
	
<script>
import NavHeader from "@/NavHeader.vue"
export default {
  components: {
    NavHeader
  },
  mounted(){
    console.log("test")
    this.$store.commit("setUrls");
    this.$store.dispatch("getProducts");
  }
}
</script>

