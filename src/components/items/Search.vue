<template>
   <div class="input-group md-form form-sm form-1 pl-0  pb-2 pt-2">
                <button @click="parseSearchString" class="btn btn-outline-secondary" type="button">
                  <i class="fas fa-search"></i>
                </button>
                  <input aria-label="Search"
                  v-model="searchString"
          @keydown.13.prevent="parseSearchString"
          type="text"
          class="form-control my-0 py-1"
          placeholder="Search...">
              </div>
</template>

<script>
export default {
  name: 'Search',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
