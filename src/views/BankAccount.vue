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
        <h4>Manage access</h4>

        <div id="menu-container">
          <!-- <div class="dropdown">
            <input id="search-pattern" type="text" placeholder="Search" v-on:input="search">
            <div id="search-results"></div>
          </div> -->

          <div class="dropdown">
            <div id="myDropdown" class="dropdown-content">
              <input
                type="text"
                placeholder="Search.."
                id="myInput"
                autocomplete="false"
                v-on:keyup="filterFunction()"
                v-on:focus="toggleSearchResults()"
                v-on:blur="toggleSearchResults()"
              />
              <div id="search-results">
                <a href="#about">About</a>
                <a href="#base">Base</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
                <a href="#custom">Custom</a>
                <a href="#support">Support</a>
                <a href="#tools">Tools</a>
              </div>
            </div>
          </div>

          <div id="users">
            <div
              class="user"
              v-for="user in getPermittedUsers($route.params.id)"
              :key="user.id"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png"
                alt=""
                class="check"
              />
              <h5>
                {{ user.firstName }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BankAccount",
  computed: {
    products() {
      return this.$store.state.banks;
    },
  },
  methods: {
    bank(id) {
      return this.$store.getters.getBank(id);
    },
    users(accountId, userPattern) {
      return this.$store.getters.getUsersOfAccount(accountId, userPattern);
    },
    search() {
      console.log(this.users(1, "Laurens"));

      let accountId = 1;
      let searchPattern = document.getElementById("search-pattern").value;

      let users = this.$store.getters.getUsersOfAccount(
        accountId,
        searchPattern
      );

      users.forEach((user) => {
        let newDiv = document.createElement("div");
        let newContent = document.createTextNode(user.firstName);
        newDiv.appendChild(newContent);
        document.getElementById("search-results").appendChild(newDiv);
      });
    },
    getSearchPattern() {
      let result = document.getElementById("search-pattern");
      if (result == null) {
        return "";
      }

      return result.value;
    },
    getPermittedUsers(accountId) {
      return this.$store.getters.getPermittedUsers(accountId);
    },
    filterFunction() {
      console.log("whiiii")
      let input = document.getElementById("myInput");
      let filter = input.value.toUpperCase();
      let div = document.getElementById("myDropdown");
      let a = div.getElementsByTagName("a");
      for (let i = 0; i < a.length; i++) {
        let txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }



    },
    toggleSearchResults(){

      console.log(document.getElementById("myInput").value.length == 0)
      if(document.getElementById("myInput").value.length == 0){
        document.getElementById("search-results").style.display = "none"
      }
      if(document.getElementById("search-results").style.display == "none"){
        document.getElementById("search-results").style.display = "block"
      }else{
        document.getElementById("search-results").style.display = "none"
      }

    }
  },
};
</script>

<style scoped src="../../public/css/BankAccount.css">
/* @import '../assets/css/startpage.css'; */
</style>
