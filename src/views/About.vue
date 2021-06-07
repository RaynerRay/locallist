<template>
  <div class="about">
    <div class="about mt-10 mb-10">
      <v-container >
        <h1 class="text-center display-1 about-heading mt-4 ">
          <span class="red--text">LOCAL</span>LIST <h1 class="text-center display-1 font-weight-light">is a
          marketplace, that helps you quickly find and hire <br> trusted local service professionals</h1>
      </h1>
      <br>
      </v-container>
    </div>

    <div class="paragraph-two about mt-10 mb-10">
        <v-row >
          <v-col cols="12" sm="8">
            <h1 class="text-center display-1 mt-10 mb-6 ml-6">
              We're building a trusted marketplace
            </h1>
            
            <v-row justify="center">
            <v-card class="text-center" max-width="600" flat color="#f7f7f7">
              <p class="text-center subtitle-1 ml-6">
                After you join as a professional on our platform, 
                we need you to verify your profile by checking your ID and proof of address. 
                This is to ensure trust and safety for customers.
              </p>
            </v-card>
            </v-row>
          </v-col>
        <v-col cols="12" sm="2">
          <v-row justify="center">
            <v-img class="mb-10 mt-10" src="../assets/verified.png" max-width="150" ></v-img>
          </v-row>
                 
        </v-col>
        </v-row>
      </div>

      <div class="paragraph-three">
        <v-container>
        <h2 class="text-center display-1 about-heading  font-weight-normal mt-10 mb-2">
          <span class="red--text">An</span> amazing app to promote your services that you provide.
        </h2>

        <p class="text-center title">More Customers, Faster Growth</p>
        <p class="text-center subtitle-1">Whether you're just starting a new business or looking for extra work,<br>
            we'll help you get more customers.
        </p>
        <v-row justify="center" class="mt-4 mx-2">
            <v-btn
            to="join"
            color="#f00a36"
            large
            class="my-1 mt-4 mb-10 white--text"
            >
                Join As A Pro
            </v-btn>
        </v-row>
        </v-container >
      </div>

      

  </div>
</template>

<style scoped>
*{
  font-family: 'Nunito Sans', sans-serif;
  }
.about-heading {
  color: #3c434d;
}
.paragraph-two{
  background-color: #f7f7f7;
}
</style>