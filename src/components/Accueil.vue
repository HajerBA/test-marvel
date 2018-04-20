<template>

  <section>
      
      <Header></Header>
      
   <character :ofsetpage= "$route.params.page"> </character>
           
  </section>
</template>

<script>
import Header from "./Header.vue";
import character from "./character.vue";



export default {
  name: "Accueil",
  components: {
    Header,
    character,
   
   
  },

  data() {
    return {
      page:1,
     heroes: []
    }
  },
  beforeCreate() {
    
  
    
  },
  methods: {
  
  }
}
</script>

<style>

.maclass {
    margin: 50px;
    padding: 2px;
   
}
</style>
