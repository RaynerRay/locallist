<template>
 <div>
    <v-app-bar
      color="white"
      flat
      dark
    >
      <v-btn to="/" icon class="ml-2 navText">
        <ul><li><v-img src="../assets/logo.png" class="ml-4 mt-2"></v-img></li></ul>
      </v-btn>

      <v-spacer></v-spacer>

      
      
      <v-btn to="faq" icon class="mx-4 navText">
        <ul><li>FAQ  <span class="red--text">|</span>  </li></ul>
      </v-btn>
      

      <v-btn to="join" icon class=" ml-6 navText">
        <ul><li>Join as a Pro</li></ul>
      </v-btn>
      <v-btn icon class="navText">
        <ul><li></li></ul>
      </v-btn>
    </v-app-bar>
    <v-divider></v-divider>
  </div>
</template>


<script>
export default {
  data() {
    return {
     
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
};
</script>

<style>
  ul li {
    list-style-type: none;
    color: black;
}

</style>
