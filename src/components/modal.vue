<template>
    <div>
        <b-modal id="modal1" class="container-modal"  v-model="modalShow" hide-footer :title="hero.name">
            <div class="portrait-details" :style="{ backgroundImage:`url(${hero.thumbnail.path}.${hero.thumbnail.extension})`}">    
                </div>
            <div class="d-block text-center">
                <div>

                </div>
                <p>{{hero.description}}</p>
                <p> Appear in : {{hero.comics.available}} comics</p>
                <div v-for="(item,index) in hero.comics.items.slice(0, 3)" :key="index" >
                    <p>{{item.name}}</p>
                </div>
            </div>
        </b-modal><a href="#">
        <h3  @click="modalShow = !modalShow" >{{hero.name}}</h3> </a>
        <i @click="favoriteChar(hero.name)" class="fas fa-star"></i>
    </div>
  
</template>

<script>
export default {
  name: "modal",
   props: {
        hero: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            modalShow: false
        }
    },
    methods:{
         favoriteChar(name) {
            this.$emit('favoriteChar',name)
        }
       
       
        
    }
};
</script>

<style>

h3:hover {
    color: red;
}

.portrait-details {
    width: 200px;
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
}
.container-modal {
    display: flex;
    justify-content: center;
    color: black;
}
.modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
