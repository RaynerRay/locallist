<template>
<div> 
  <SearchBar />
  
  <v-card class="companiesList" color="#f7f7f7">
    <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card color="white" class="my-2" max-width="400" max-height="150" outlined>

           <v-overflow-btn
            v-model="selectedLocation"
            class="my-2 ml-5"
            :items="places"
            item-value="text"
            label="Select A Location "
          ></v-overflow-btn>

        </v-card>
      </v-col>
      <v-col cols="12" sm="8">
        
        
         <div v-for="relevant in relevantCompanies" :key="relevant.id" class="">  
           
                <v-card
                    class="mx-auto my-2"
                    max-width="700"
                    flat
                 >
                    <v-list-item three-line>
                        <v-list-item-content>
                                <v-row>
                                  <v-col cols="12" sm="1" class="mb-0 mr-2 d-none d-md-block">
                                    <v-list-item-avatar tile
                                      size="40"
                                      color="grey"
                                    >
                                    </v-list-item-avatar>
                                  </v-col>

                                  <v-col cols="12" sm="4" >
                                    <router-link :to="{name: 'company-detail' , params: {id:relevant._id}}">
                                      <v-list-item-title class="headline xs-6 mb-1 black--text font-weight-light">{{ relevant.name }}</v-list-item-title>
                                    </router-link>
                                    <div class="overline orange--text">{{relevant.location}}</div>
                                  </v-col>
                                </v-row>
                                
                                
                               
                                <h4 class="font-weight-light mt-0">
                                  {{ relevant.summary }}
                                </h4>
                         </v-list-item-content>
              <v-list-item-avatar
                tile
                size="30"
                color="#00AB66"
                
              >
              <v-icon class="white--text">mdi-check</v-icon>
              </v-list-item-avatar>
                        
                                    
                                
                        </v-list-item>

                        <v-card-actions>
                        <p class="my-1"><v-icon class="ml-1">mdi-phone</v-icon> {{ relevant.contact }}</p>
                        <v-spacer></v-spacer>
                        
                        <v-btn text color="deep-blue accent3" outlined><span><v-icon>mdi-arrow-right</v-icon></span>View More</v-btn>
                        
                        </v-card-actions>
                </v-card>
              </div>
          </v-col>
        </v-row>
    </v-container>
</v-card>
</div>
</template>

<script>
import { mapState } from "vuex";
import SearchBar from "@/components/SearchBar";

export default {
components: { SearchBar},
  data() {
    return {
      id: this.$route.params.id,
      model: null,
      selectedLocation: undefined,
      places: [{ text: "Harare" }, { text: "Bulawayo" }, { text: "Mutare" },
      { text: "Gweru" }, { text: "Masvingo" }, { text: "Victoria Falls" }, { text: "Beitbridge" }],
    };
  },
  mounted() {
    this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadCompanies");
  },
  methods: {
    selectedLoc(i) {
      this.selectedLocation = i
    },
    noLoc() {
      this.selectedLocation = undefined
    }
  },

  computed: {
    ...mapState(["categories", "companies"]),

    companyDetail() {
      return this.companies.find(company => company._id == this.id);
    },
    relevantCompanies() {
      if(this.selectedLocation !== undefined ) {
        return this.companies.filter(company => {
        return company.categories.includes(this.id) && company.location.toLowerCase().includes(this.selectedLocation.toLowerCase());
      })
      }
      else{
        return this.companies.filter(company => {
        return company.categories.includes(this.id);
      })
      }
    },
    
  },
};
</script>

<style>
.detail {
  background-color: #f7f7f7;
}
.companiesList {
  background-color: #a39d9d
}
</style>
