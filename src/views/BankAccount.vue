<template>
  <div class="about">
    <h1 id="page-title">Bank account</h1>
    {{ $route.params.id }}


    <div class="row">
        <Item v-for="product in products" 
        :key="product.id"
        :item="product"/>
      </div>
    </div>  



</template>



<script>
    // @ is an alias to /src
    import Item from "@/Item.vue"	
    export default {
    name: 'Home',
    computed: {
        banks() {
        // return this.$store.state.;
        // return this.$store.state.products;
        }
    },
    components: {
        Item
    }
    }
</script>

<style scoped src="../../public/css/BankAccount.css">
/* @import '../assets/css/startpage.css'; */
</style>


