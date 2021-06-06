<template>
  <v-app class="blue">
    <Navbar />
    
    <v-main class="">
      <!-- component matched by the route will render here -->
      <router-view></router-view>

    </v-main>
      
    
  
    <div>
      <Footer />
    </div>  
      
    
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: { Navbar , Footer},
  data: () => ({
    //
  }),
};
</script>

<style>
*{
  font-family: 'Nunito Sans', sans-serif;
}
</style>