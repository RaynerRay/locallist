<template>
    <div class="joinAsPro">
        <v-row justify="center" class="mt-4 ml-2 text--center">
            <h2 class="heading mt-4 font-weight-bold">
                Do you have a service & want new customers?
            </h2>
        </v-row>

    <v-container>
        <v-row justify="center" class="mt-4  text--center">
            <h3 class="small-hd font-weight-thin">Add your Service to our platform & join as a Pro</h3>
        </v-row>

        <v-row justify="center" class="mt-4 mx-2">
            <v-btn
            to="join"
            color="#f00a36"
            x-large
            class="my-1 mt-4 white--text"
            >
                Join As A Pro
            </v-btn>
        </v-row>
    </v-container>
                <br>
                <br>
        </div>   
</template>

<style>
.joinAsPro {
    background-color: #f7f7f7;
}
.heading {
     color: #3c434d;
     font-size: 2.2em;
}
.small-hd{
    color: #3c434d;
     font-size: 1.5em;
}

@media (min-width: 201px) and (max-width: 280px) {
  .heading {
     color: #3c434d;
     font-size: 0.8em;
  }
  .small-hd{
    color: #3c434d;
     font-size: 0.6em;
  }
  }

  @media (min-width: 281px) and (max-width: 360px) {
   .heading {
     color: #3c434d;
     font-size: 1.0em;
  }
  .small-hd{
    color: #3c434d;
     font-size: 0.8em;
  }
  }

  @media (min-width: 361px) and (max-width: 414px) {
   .heading {
     color: #3c434d;
     font-size: 1.2em;
  }
  .small-hd{
    color: #3c434d;
     font-size: 1.0em;
  }
  }
</style>