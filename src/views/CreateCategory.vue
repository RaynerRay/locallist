<template>
    <div class="create">
        <v-form v-model="valid">
            <v-container>
            <v-row align="center" justify="center">
                
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="First name"
                    required
                ></v-text-field>
            </v-row>
             

                

            <v-btn @click="addToApi()" color="blue">
              Submit
            </v-btn>
            </v-container>
            
        </v-form>
    </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      valid: false,
      name: "",
      nameRules: [v => !!v || "required"],
      
    };
  },
  mounted() {
    this.$store.dispatch("loadCategories");
  },
  computed: {
    ...mapState(["categories", "companies"]),
  },
  methods: {
    addToApi() {
      axios
        .post("https://znupit.herokuapp.com/category", {
          name: this.name,
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>
