<template>
  <div class="container">
    <h1>All Registered Bank Accounts</h1>
    <div class="bank-account">
      <div v-for="account in accounts" :key="account.id">
        <div class="account">
          <h2>Accountnumber: {{ account.accountNumber }}</h2>
          <p>Name: {{ account.name }}</p>
          <p>Amount: {{ account.amount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from "@/Item.vue";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      accounts: [],
      name: null,
      accountnumber: null,
      amount: null,
    };
  },
  methods: {
    getBankAccounts() {
      fetch("http://localhost:8000/api/bankaccounts")
        .then((response) => response.json())
        .then((data) => (this.accounts = data));
    },
    addBankAccounts(event) {
      axios.post("http://localhost:8000/api/bankaccounts", {
        name: name,
        accountNumber: accountnumber,
        amount: amount,
      });
    },
  },
  beforeMount() {
    this.getBankAccounts();
  },
};
</script>

<style scoped src="../../public/css/BankAccounts.css">
/* @import '../assets/css/startpage.css'; */
</style>
