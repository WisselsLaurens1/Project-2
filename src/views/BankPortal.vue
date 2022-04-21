<template>
  <div class="portal">
    <h1 id="page-title">Bank portal</h1>

    <div id="bank-accounts-container">
      <div id="add-button-container">
        <img  id="add-button" src="../assets/add-button.png" alt="" srcset="">
      </div>

      <router-link to="/bank-account/account/1">      
        <div class="bank-account">
            <div class="image-container">
              <img class="bank-logo"  src="../assets/kbc-logo.png" alt="" srcset="">
            </div>
            <div class="bank-account-info">
              <p class="balance">Balance: €4201</p>
              <p class="owner">
                  Owner: Laurens Wissels
              </p>
            </div>
        </div>
      </router-link>
      <router-link to="/bank-account/account/2">      
        <div class="bank-account">
            <div class="image-container">
              <img class="bank-logo"  src="../assets/ing-logo.png" alt="" srcset="">
            </div>
          <div class="bank-account-info">
            <p class="balance">Balance: €201</p>
            <p class="owner">
                Owner: Obim
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
  methods: {
    getImage(url) {
      console.log(url)
      return require(url)
    }
  },
  computed: {
    bankAccounts() {
      return this.$store.state.banks;
    },




  },
  components: {
    Item
  }
}


</script>

<style scoped src="../../public/css/BankPortal.css">
/* @import '../assets/css/startpage.css'; */
</style>


