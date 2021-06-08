<template>
    <div class="home">
        <h1 class="all-text mt-4 font-weight-regular">Browse our top Categories</h1>


            <v-row justify="center" class="mt-4">
                <v-col>
                    <v-row justify="center">
                        <router-link :to="{name: 'companiesList' , params: {id:'60bf31881f20ac0017c7e3ac'}}"> 
                            <img height="120" class="" src="../assets/computers.jpg">
                        </router-link>
                    </v-row>
                </v-col>
                <v-col>
                     <v-row justify="center">
                        <router-link :to="{name: 'companiesList' , params: {id:'60bf32a81f20ac0017c7e3ad'}}"> 
                            <img height="120" class="" src="../assets/home.jpg">
                        </router-link>
                    </v-row>
                </v-col>
                <v-col>
                     <v-row justify="center">
                      <router-link :to="{name: 'companiesList' , params: {id:'60bf31881f20ac0017c7e3ac'}}">    
                        <img height="120" class="" src="../assets/events.jpg">
                      </router-link>
                    </v-row>
                </v-col>
                <v-col>
                     <v-row justify="center">
                        <router-link :to="{name: 'companiesList' , params: {id:'60bf331d1f20ac0017c7e3ae'}}"> 
                            <img height="120" class="" src="../assets/security.jpg">
                        </router-link>
                    </v-row>
                </v-col>
                <v-col>
                     <v-row justify="center">
                        <router-link :to="{name: 'companiesList' , params: {id:'60bf334d1f20ac0017c7e3af'}}">  
                            <img height="120" class="" src="../assets/transport.jpg">
                        </router-link>
                    </v-row>
                </v-col>
                <v-col>
                     <v-row justify="center">
                        <router-link :to="{name: 'companiesList' , params: {id:'60bf31881f20ac0017c7e3ac'}}">  
                            <img height="120" class="" src="../assets/more.jpg">
                        </router-link>
                    </v-row>
                </v-col>
            </v-row>
            <br>
            <br>
        </div>   
</template>

<style>
.home {
  background: #3c434d;
}
.all-text {
     color: #3c434d;
     font-size: 1.7em;
}
</style>