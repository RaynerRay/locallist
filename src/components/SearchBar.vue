<template>
  <v-card
    class="ma-0 pa-0"
    max-height="170"
    outlined
    color="#0987eb"
  >
  <v-container class="mr-16 ">
    <v-row>
                <v-col cols="12" sm="6">
                   
                <v-card max-height="44">    
                <v-text-field
                    class=" white--text ml-2"
                    placeholder=" eg:Photographers"
                    v-model="search"
                    color="white"
                    >
                </v-text-field>
                </v-card>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-row justify="center">
                <v-btn
                    color="#f00a36"
                    large
                    class="my-1 white--text"
                    >
                    Search 
                </v-btn>
                  </v-row>
                </v-col>
    </v-row>
  </v-container>
  </v-card>
</template>



<style>
.search-bar{
    background-color: white;
}
</style>