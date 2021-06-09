<template>
    <div class="filters">
          
    <v-divider></v-divider>

          <v-overflow-btn
            v-model="selectedLocation"
            class=""
            :items="Location"
            label="Select A Location "
            item-text="name"
            item-value="_id"
            target="#dropdown-example"
          ></v-overflow-btn>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    model: null,
    selectedCategory: undefined,
    selectedLocation: undefined,
  }),
  components: {},
  methods: {},
  mounted() {
    this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadCompanies");
  },
  computed: {
    ...mapState(["categories", "companies"]),
  
    relevantCompanies() {
      return this.companies.filter(company => {
        return company.categories.includes(this.selectedCategory);
      });
    },
  },
};
</script>

<style>

</style>