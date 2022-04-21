<template>
  <div class="BankAccount">
    <h1 id="page-title">Bank Account</h1>

    <div id="content-container">
      <div class="bank-account">
        <div class="image-container">
          <img :src="bank($route.params.id).image" />
        </div>
        <div class="bank-account-info">
          <p class="balance">Balance: €{{ bank($route.params.id).balance }}</p>
          <p class="owner">{{ bank($route.params.id).owner }}</p>
          <p class="number">{{ bank($route.params.id).number }}</p>
        </div>
      </div>

      <div id="access-container">
        <div class="dropdown">
          <input type="text" placeholder="Search" v-on:input="search">
        </div>
      </div>

        <!-- <div class="bank-account-user">Laurens Wissels</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import * as bankAccount from "../../public/scripts/bankAccount.js";
bankAccount = require("../../public/scripts/bankAccount.js");

export default {
  name: "BankAccount",
  computed: {
    products() {
      return this.$store.state.banks;
    },
  },
  methods: {
    bank(id) {
      return this.$store.getters.getBank(id - 1);
    },
    users(accountId,userPattern){
      return this.$store.getters.getUsersOfAccount(accountId,userPattern)
    },
    search() {
      console.log("whiii")
    }


  }
};
</script>

<style scoped src="../../public/css/BankAccount.css">
/* @import '../assets/css/startpage.css'; */
</style>
