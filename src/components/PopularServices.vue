<template>
    <div class="popularServices">
        <v-container >
        <h1 class="all-text mt-2 font-weight-regular">Popular services nationwide</h1>
           <v-row class="mt-6">
            <v-col>
            <v-row justify="center">
            <router-link :to="{name: 'companiesList' , params: {id:'60bf2c2c1f20ac0017c7e3aa'}}">
                <v-card
                class="mx-auto"
                max-width="250"
                 >
                    <v-img
                    src="../assets/domestic-helper.jpg"
                    height="150px"
                    ></v-img>

                    <v-row justify="center" >
                        
                        <v-card-title>
                        House Helpers
                        </v-card-title>
                      
                    </v-row>
                </v-card>
                </router-link>
            </v-row>
            </v-col>
            
            <v-col>
            <v-row justify="center">
            <router-link :to="{name: 'companiesList' , params: {id:'60bf2c631f20ac0017c7e3ab'}}">
                <v-card
                class="mx-auto"
                max-width="250"
                 >
                    <v-img
                    src="../assets/catering.jpg"
                    height="150px"
                    ></v-img>

                    <v-row justify="center">
                    
                        <v-card-title>
                            Catering
                        </v-card-title>
                    
                    </v-row>
                </v-card>
            </router-link>
            </v-row>
            </v-col>
            
            <v-col>
            <v-row justify="center">
             <router-link :to="{name: 'companiesList' , params: {id:'5f3eaba97b18e225b4c769fc'}}">   
                <v-card
                class="mx-auto"
                max-width="250"
                 >
                    <v-img
                    src="../assets/photography.jpg"
                    height="150px"
                    ></v-img>

                    <v-row justify="center">
                    
                        <v-card-title>
                        Photography
                        </v-card-title>
                    
                    </v-row>
                </v-card>
            </router-link>
            </v-row>
            </v-col>
            
            <v-col>
            <v-row justify="center">
            <router-link :to="{name: 'companiesList' , params: {id:'5f3eabe07b18e225b4c769fd'}}">    
               <v-card
                class="mx-auto"
                max-width="250"
                 >
                    <v-img
                    src="../assets/venues.jpg"
                    height="150px"
                    ></v-img>

                    <v-row justify="center">
                     
                        <v-card-title>
                        Wedding Venues
                        </v-card-title>
                     
                    </v-row>
                </v-card>
            </router-link>    
            </v-row>
            </v-col>
                
            </v-row>
        </v-container>
        <br>
    <br>
        </div>   
</template>




<style>
.popularServices {
  background-color: #f7f7f7;
}
.all-text {
     color: #3c434d;
     font-size: 1.7em;
}
a{
  text-decoration: none
}
</style>