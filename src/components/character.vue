<template>
  <section >
   
    <char-list :heroes= "heroes"/>
    
  </section>
</template>

<script>
import Api from '../../api.js'
import axios from 'axios'
import charList from './char-list'


export default {
    name: "character",
    components:{
        charList
    },
    props:{
     offsetpage:{
       type:Number,
       required:true
       }
     },
    data(){
    return {
      heroes: [],
      //offsetPage: 100,
      user: {
          name: "",
          favorites: []
      }
    }
  },
  
  methods: {
    
    onSubmit(){
      // On créé une instance de l'api pour pouvoir envoyer des requêtes en ajax au serveur
      let api = new Api
      // On envoie le user dans l'api
      api.setUser(this.user).then((response) => {
        // Puis, lorsque le serveur à répondu, on affiche la page pour voter
        // au passage, on récupère l'id du favorite que l'api nous à retourné dans l'objet response
      })
    },
    // la méthode add() est appelée lorsqu'on clique sur le bouton "add"
    add(favName){
      // on ajoute une string vide dans le tableau options, ce qui ajoutera un input dans notre formulaire
      this.user.favorites.push({name: favName})
    }
  },
  beforeCreate(){
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=100&ts=1&apikey=1dd5baf920531080880f77255c1e33ba&hash=30b59c16ad14684ac31590616ac80001`).then((response) =>  {
          this.heroes = response.data.data.results;
          console.log(response.data.data.results)
        })
    }
}
</script>

<style>

</style>