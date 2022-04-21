import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

var url;
const headers = { Accept: "application/json" };
const products = require('./products.json');



export default new Vuex.Store({
  state: {
    products: products,
    banks: require('./banks.json'),
    inCart: [],
    user: {
      isAuthenticated: false,
      name: "",
      email: "",
      idToken: "",
      accessToken: "",
      partner: false
    },
    endpoints: {
      login: "http://localhost:3000/login",
      products: "http://localhost:8000/products",
      partnercheck: "http://localhost:8000/check",
      bankaccounts: "http://localhost:8000/api/bankaccounts/overview",
      subscriptions: "http://localhost:8000/api/subscriptions/overview"
    },
   },
   getters: {
    products: state => state.products,
    inCart: state => state.inCart,
    bankaccounts: state => state.bankaccounts,
    subscriptions: state => state.subscriptions,
   },
   mutations: { //synchronous
     setProducts(state, payload) {
       state.products = payload;
     },
     addToCart(state, payload) { 
      console.log(payload);
      state.inCart.push(payload);
     },
     removeFromCart(state, item) { 
       state.inCart.splice(item, 1); 
     },
     logout(state) {
      state.user.isAuthenticated = false;
      state.user.name = "";
      state.user.email ="";
      state.user.idToken ="";
      state.user.accessToken = "";
      state.user.partner = "";
     },
     login(state, payload) {
      state.user.isAuthenticated = true;
      state.user.name = payload.name;
      state.user.email =payload.email;
      state.user.idToken =payload.idToken;
      state.user.accessToken =payload.accessToken;
     },
     SET_PARTNER(state, partner) { 
      state.user.partner = partner;
     },
     setUrls(state) {
       state.endpoints.login = process.env.VUE_APP_AUTH_URL;
       state.endpoints.products = process.env.VUE_APP_PRODUCTS_URL;
       state.endpoints.bankaccounts = process.env.VUE_APP_BANKACCOUNTS_URL;
       state.endpoints.subscriptions = process.env.VUE_APP_SUBSCRIPTIONS_URL;
       urlproducts = state.endpoints.products;
       urlbankaccounts = state.endpoints.bankaccounts;
       urlsubscriptions = state.endpoints.subscriptions;
       console.log(process.env);
     }
   },
   actions: { //asynchronous
    async checkPartner({ state, commit }) {
      let accessToken = state.user.accessToken;
      console.log("checking partner access", state.endpoints.partnercheck);
      const AuthStr = 'Bearer '.concat(accessToken);
      const AuthHeader = { 'Authorization': AuthStr};
      console.log("AuthToken=",AuthHeader);
      let response = await fetch(state.endpoints.partnercheck, { 
        method: 'GET',
        headers: {
          'Authorization': AuthStr }
        });
      console.log("partneraccess",response);
      if (response.ok) {
        commit('SET_PARTNER', true);
        console.log("TRUE");
      } else {
        commit('SET_PARTNER', false);
        console.log("FALSE");
      }
    },
     async getProducts(state) {
       const products = await fetch(urlproducts, { headers });
       const prods = await products.json();
       state.commit("setProducts", prods);
       console.log(prods);
     },
     async getBankAccounts(state) {
      const bankaccounts = await fetch(urlbankaccounts, { headers });
      const accounts = await bankaccounts.json();
      state.commit("setBankAccounts", accounts);
      console.log(accounts);
    },
    async getSubscriptions(state) {
      const subscriptions = await fetch(urlsubscriptions, { headers });
      const Subs = await subscriptions.json();
      state.commit("setBankSubscriptions", Subs);
      console.log(Subs);
    }
   },
   registerProduct({ state }, obj) {
    let productsurl = state.endpoints.products;
    console.log(productsurl);
    let accessToken = state.user.accessToken;
    const AuthStr = 'Bearer '.concat(accessToken);
    console.log(AuthStr);
    console.log(obj);
    axios(productsurl, { 
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'Authorization': AuthStr
        },
        credentials: 'include',
        data: obj
    })
    .then(response => {
      console.log('Response:', response);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  },
  modules: {
  }
})
