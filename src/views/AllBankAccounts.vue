<template>
  <div class="container">
    <h1>All Registered Bank Accounts</h1>
    <div class="bank-account">
      <div v-for="account in accounts" :key="account.id">
        <div class="account">
          <h2>{{ account.accountNumber }}</h2>
          <p>{{ account.name }}</p>
          <p>{{ account.amount }}</p>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="name">Name:</label>
      <input v-model="name" placeholder="name" />
    </div>
    <div class="form-group">
      <label for="accountnumber">Accountnumber:</label>
      <input v-model="accountnumber" placeholder="accountnumber" />
    </div>
    <div class="form-group">
      <label for="amount">Amount:</label>
      <input v-model="amount" placeholder="amount" />
    </div>
    <button v-on:click="addBankAccounts">Add Bank Account</button>
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
