<template>
    <section >
      <div class="maclass"  v-if="heroes.length !== 0" >           
        <b-card 
                :img-src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
                tag="article"
                class="mb-2 recadr"  v-for=" hero of heroes" :key="hero.id">
            
            <modal  :hero= "hero"/>
            
  </b-card>
 </div>
    <div v-else >
      <Loader></Loader>
    </div>
    </section>
</template>

<script>
import modal from './modal'
import Loader from "./loader.vue"

export default {
    name: "char-list",
    props: {
        heroes: {
            type: Array,
            required: true
        }
    },
    components: {
        modal,
         Loader
    },
    data(){
        return {
            modalShow: false
        }
    },
    methods:{

    }
}
</script>

<style>
.maclass{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.recadr{
width: 300px;
}
.card-img {
        height: 218px;
}
</style>
