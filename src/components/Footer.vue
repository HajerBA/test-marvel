<template>

  <section>
    <div>
       <b-pagination-nav   align="center"
                          :link-gen="linkGen"
                          :page-gen="pageGen"
                          :number-of-pages="links.length"
                          v-model="currentPage" /> 
    
        <!-- <input @click="previous()" type="button" name="previous" value="previous" >
        <input @click="next()" type="button" name="previous" value="next" > -->
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
       //offsetPage: 100,
      currentPage: 120,
      links: ['#120', '#121', '#122', '#123']
        }
  },
  methods:{
  //  previous(){
  //       this.offsetPage += 20;
  //       return axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=${this.offsetPage}&ts=1&apikey=1dd5baf920531080880f77255c1e33ba&hash=30b59c16ad14684ac31590616ac80001`).then((response) =>  {
  //         this.heroes = response.data.data.results;
  //       })    
  //   },
  //   next(){
  //       this.offsetPage -= 20
  //      return  axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=${this.offsetPage}&ts=1&apikey=1dd5baf920531080880f77255c1e33ba&hash=30b59c16ad14684ac31590616ac80001`).then((response) =>  {
  //         this.heroes = response.data.data.results;
  //       }) 
  //   },
     linkGen (pageNum) {
      return this.links[pageNum - 1]
    },
    pageGen (pageNum) {
      return this.links[pageNum - 1].slice(1)
    },
    onsubmit(){
      this.$emit('pageChange');
    }
  }
}


</script>

<style>
h4 {
  color: salmon;
}
</style>