<template>
  <div class="scription">
    <h1 id="page-title">SUBSCRIPTION TYPES</h1>

    <div id="subscription-container">
      <router-link to="/subscription/type/1">      
        <div class="subscription-premium">
            <div class="image-container">
              <img class="subscription-logo"  src="../assets/premium.jpg" alt="" srcset="">
            </div>
            <div class="subscription-info-premium">
            <h3>PREMIUM PACKAGE</h3>
              <p class="advantages">
                  Advantages: </p>
              <p class="price">
                  Price/month: €14,99
              </p>
            </div>
        </div>
      </router-link>
      <router-link to="/subscription/type/2">      
        <div class="subscription-basic">
            <div class="image-container">
              <img class="subscription-logo"  src="../assets/basic.jpeg" alt="" srcset="">
            </div>
          <div class="subscription-info-basic">
          <h3 class="basic">BASIC PACKAGE</h3>
            <p class="advantages">
            Advantages: </p>
            <p class="price">
                Price: €4,99
            </p>
          </div>
        </div>
      </router-link>
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

<style scoped src="../../public/css/Subscription.css">
/* @import '../assets/css/startpage.css'; */
</style>

