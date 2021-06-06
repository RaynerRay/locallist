<template>
    <div class="popularServices">
        <v-container >
        <h1 class="all-text mt-2 font-weight-regular">Popular services nationwide</h1>
           <v-row class="mt-6">
            <v-col>
            <v-row justify="center">
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
            </v-row>
            </v-col>
            
            <v-col>
            <v-row justify="center">
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
                        Event Catering
                        </v-card-title>
                    </v-row>
                </v-card>
            </v-row>
            </v-col>
            
            <v-col>
            <v-row justify="center">
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
            </v-row>
            </v-col>
            
            <v-col>
            <v-row justify="center">
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
</style>