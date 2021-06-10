<template>
<div class="review">
  
    <v-card
      color="teal lighten-3"
      dark
    >
     <v-row
      justify="center"
      align="center"
    >
      <p class=" mb-2 mt-2" >Used this service before? write a review</p>
    </v-row>
    </v-card>
    <v-container class="mb-5" >
        <v-card
            class="mx-auto"
            max-width="1200"
            outlined
          >
          <v-container class="mb-5">
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            >
            <v-row>
                <v-col cols="12" sm="12" md="6">
                    <v-rating
                    v-model="rating"
                    :length="length"
                    color="green"
                    background-color="grey lighten-1"
                    >
                    </v-rating>
                </v-col> 
                <v-col cols="12" sm="12" md="6">
                    
                        <span class="caption text-uppercase">Your Rating:</span>
                        <span class="font-weight-bold">
                            {{ rating }} out of 5
                        </span>
                    
                </v-col>

             </v-row>

            <v-row>
                <v-col cols="12" sm="12" md="6">
                <v-text-field
                v-model="name"
                    label="Your Name"
                    outlined
                    :rules="nameRules"
                ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="6">
                    <v-text-field
                    v-model="email"
                        label="Your 
                        Email"
                        outlined
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-col cols="12">
            <v-textarea
              v-model="comment"
              
              color="blue"
              outlined
            >
              <template v-slot:label>
                <div>
                  Comment
                </div>
              </template>
            </v-textarea>
          </v-col>
           
          <v-row
            justify="center"
          >
            <v-btn color="#f00a36" class="white--text" @click="addToApi()">
              Submit
            </v-btn>
          </v-row>
            </v-form>
          </v-container>
        </v-card>  
   </v-container>     
</div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
      length: 5,
      rating: undefined,
      comment: "",

      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Required",
        v => (v && v.length <= 20) || "Name must be less than 20 characters",
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },

  mounted() {
    this.$store.dispatch("loadCompanies");
  },
  computed: {
    ...mapState(["companies"]),
  },
  methods: {
    addToApi() {
      axios
        .post("https://znupit.herokuapp.com/comment", {
          name: this.name,
          email: this.email,
          comments: this.comment,
          rating: this.rating,

          companies: [this.id],
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
        this.$router.push({
            path : `/companydetail/${this.id}` 
          })
         
    },
  },
};
</script>

<style>
.review {
  background-color: #f7f7f7;
}
</style>
