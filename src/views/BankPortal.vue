<template>
  <div class="portal">
    <h1 id="page-title">Bank portal</h1>

    <div id="bank-accounts-container">
      <div id="add-button-container">
        <img  id="add-button" src="../assets/add-button.png" alt="" srcset="">
      </div>

      <div id="bank-accounts" v-for="account in bankAccounts" :key="account.id">
        <router-link :to="{ name: 'bank-account', params: { id: account.id }}">
          <div class="bank-account">
              <div class="image-container">
                <img :src="account.image" >
              </div>
              <div class="bank-account-info">
                <p class="balance">Balance: {{account.balance}}</p>
                <p class="owner">
                    {{account.number}}
                </p>
                <p class="owner">
                    Owner: {{account.owner}}
                </p>
              </div>
          </div>
        </router-link>
      </div>
      

    </div>
  </div>

</template>


<script>

export default {
  name: 'BankPortal',
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

}


</script>

<style scoped src="../../public/css/BankPortal.css">
/* @import '../assets/css/startpage.css'; */
</style>


