<template>
  <section >
   
    <char-list :heroes="heroes"/>
    <Footer></Footer>
  </section>
</template>

<script>
import Api from '../../api.js'
import axios from 'axios'
import charList from './char-list'
import Footer from "./Footer.vue";

export default {
  name: "character",
  components:{
      charList,
       Footer
  },
  props:{
    ofsetpage:{
      type:Number,
      required:true
    
    }
  },
   watch: { 
      	ofsetpage: function next(newVal, oldVal) { 
          this.newVal=newVal*20;
        return axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=${this.newVal}&ts=1&apikey=1dd5baf920531080880f77255c1e33ba&hash=30b59c16ad14684ac31590616ac80001`).then((response) =>  {
          this.heroes = response.data.data.results;
        })  
        }

   },
  data(){
    return {
      heroes: [],
      user: {
          name: "",
          favorites: []
      }
    }
  },
  
  methods: {
    
   
  },    
  beforeCreate(){
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=100&ts=1&apikey=1dd5baf920531080880f77255c1e33ba&hash=30b59c16ad14684ac31590616ac80001`).then((response) =>  {
          this.heroes = response.data.data.results;
         
        })
    },
      
}
</script>

<style>

</style>