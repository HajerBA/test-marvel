<template>

  <section>
      
      <Header></Header>
      <ListChar :offsetpage= "page"></ListChar>
      <Footer @pageChange></Footer>
      

     
  </section>
</template>

<script>
import Header from "./Header.vue";
import ListChar from "./character.vue";
import Footer from "./Footer.vue";


export default {
  name: "Accueil",
  components: {
    Header,
    ListChar,
    Footer
   
  },

  data: function() {
    return {
     page:100
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
