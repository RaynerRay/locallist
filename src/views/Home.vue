<template>
  <div class="body">
    <div class="d-none d-md-block">
      <p>.</p>
    </div>
  <v-card
    class="mx-auto"
    max-width="500"
    height="400"
    color="#0987eb"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        
        <p class="home-text text-center white--text font-weight-bold mt-8">
            Find Trusted Local Businesses & Service Providers
        </p>
      </v-list-item-content>

    </v-list-item>
    <v-card-actions>
      
      <v-card width="480" height="55" >

 
                <v-text-field
                    placeholder=" search for a service, eg: Photography"
                    v-model="search"
                    outlined
                    @blur="searchResultsVisible = false"
                    @focus="searchResultsVisible = true"
                    >
                </v-text-field>
                   
                </v-card>
       </v-card-actions>
       
        
       <!--Search Result--> 
      <v-row class="mt-0" justify="center" style="position:absolute; z-index:999; width:100%">   
      <v-card
        class="justify-center"
        max-width="350"
        max-height="350"
        tile
        v-if="search.length > 0 && searchResultsVisible "
        @mousedown.prevent="searchResultsVisible = true"
      >
      <v-list-item-group
            v-model="selectedCategory"
            color="primary"
          >
        <v-list rounded>
          
            <v-list-item
              v-for="category in filteredNames"
              :key="category.id"
            >
              <v-list-item-content>
                <router-link :to="{name: 'companiesList' , params: {id:category._id}}">
                  <v-list-item-title>{{category.name}}</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-list-item-group>
      </v-card>
      </v-row>
      
    <div class="">
          <v-btn to="about" width="233" class="ml-2 mt-2 white--text searchbtns" color="#53abf1">
            <v-icon class="white--text mr-2">mdi-home-modern</v-icon>
            About
          </v-btn>
        
        
          <v-btn  to="join" width="233" class="ml-3 mt-2 white--text searchbtns" color="#53abf1">
            <v-icon class="white--text mr-2">mdi-merge</v-icon>
            Join As Pro
          </v-btn>

         <v-btn to="advertise" width="233" class="ml-2 mt-2 white--text searchbtns" color="#53abf1">
           <v-icon class="white--text mr-2">mdi-application</v-icon>
            Advertise
          </v-btn>

          <v-btn to="faq" width="233" class="ml-3 mt-2 white--text searchbtns" color="#53abf1">
          <v-icon class="white--text mr-2">mdi-help-circle</v-icon>
            FAQ
          </v-btn>
      </div>
      
     

      <v-row justify="center">
      <v-btn
        color="#f00a36"
        x-large
        width="300"
        class="my-1 mt-4 white--text"
        >
        <v-icon class="white--text mr-2">mdi-magnify</v-icon>
        Search 
      </v-btn>
      </v-row>
      
  </v-card>

    <!------------------------------------------- -->
   
    <!--<p>Locally helps you to handpick the best rated service pros for any work you want done.</p>-->
   
    
  <div>
    <PopularServices /> 
    
  </div>
  
  <v-container>
    <TopCategories />
  </v-container>

  <div >
    <JoinAd />
  </div>

 
    
  </div>
</template>

<script>
import { mapState } from "vuex";
import TopCategories from "@/components/TopCategories";
import PopularServices from "@/components/PopularServices";
import JoinAd from "@/components/JoinAd";

export default {
  name: "App",
  components: {TopCategories, PopularServices , JoinAd},

  data: () => ({
    search: '',
    selectedCategory: undefined,
    searchResultsVisible: false
  }),

  methods: {},
  
  mounted() {
    this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadCompanies");
  },
  computed: {
    ...mapState(["categories", "companies"]),
    //filter categories
    filteredNames: function() {
      return this.categories.filter((category) => {
        return category.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
    },
};
</script>

<style>
*{
  font-family: 'Nunito Sans', sans-serif;
}
.body {
  background-image: url("../assets/cars.png");
}
.home {
  background-color: #ffffff;
}
.topCategories {
  background-color: #f7f7f7;
}
.home-text {
  color: #3c434d;
    font-size: 1.7em;
  }

  @media (min-width: 201px) and (max-width: 280px) {
  .v-btn:not(.v-btn--round).v-size--default {
    max-width: 128px;
  }
  .v-btn:not(.v-btn--round).v-size--x-large{
    max-width: 200px;
  }
  }

  @media (min-width: 281px) and (max-width: 320px) {
  .v-btn:not(.v-btn--round).v-size--default {
    max-width: 140px;
  }
  
  }
  @media (min-width: 321px) and (max-width: 360px) {
  .v-btn:not(.v-btn--round).v-size--default {
    max-width: 165px;
  }
  }
  @media (min-width: 361px) and (max-width: 375px) {
  .v-btn:not(.v-btn--round).v-size--default {
    max-width: 170px;
   }
  }
  @media (min-width: 376px) and (max-width: 414px) {
  .v-btn:not(.v-btn--round).v-size--default {
    max-width: 190px;
   }
  }
</style>