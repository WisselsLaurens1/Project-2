<template>
  <div class="portal">
    <h1>Bank portal</h1>
    <div class="bank-account">
        <h2>
            Name: KBC
        </h2>
        <p>
            Balance: €4000
        </p>
    </div>
  </div>




</template>


<script>

// @ is an alias to /src
import Item from "@/Item.vue"	
export default {
  name: 'Home',
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  components: {
    Item
  }
}
</script>

