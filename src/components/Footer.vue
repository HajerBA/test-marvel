<template>

  <section>
    <div>
       <b-pagination-nav   align="center"
                          :link-gen="linkGen"
                          :page-gen="pageGen"
                          :number-of-pages="links.length"
                          v-model="currentPage"  /> 
    
       
    </div>
    
  </section>
</template>

<script>
import axios from "axios";

export default {
  
  name: "Footer",
  computed: {
    pageLink () {
      return this.linkGen(this.currentPage)
    }
  },
   
 
  data() {
    return {
       
      currentPage: 1,
      links: ['#1', '#2', '#3', '#4']
        }
  },
  methods:{
       linkGen (pageNum) {
      return this.links[pageNum - 1]
    },
    pageGen (pageNum) {
      return this.links[pageNum - 1].slice(1)
    }
  }
}


</script>

<style>
h4 {
  color: salmon;
}
</style>