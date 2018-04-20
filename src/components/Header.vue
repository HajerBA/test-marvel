<template>
 <section>
       
  <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

     <b-collapse is-nav id="nav_collapse">

    <img src="../assets/marvel.png" style=" width: 100px;height: 90px;"  alt="marvel">

    
    <b-navbar-nav class="ml-auto">

    <b-nav-item @click="showModal">About</b-nav-item>
      <b-nav-item-dropdown text="Help" right>
           <b-dropdown-item  v-b-modal.modal2>Guide</b-dropdown-item>
      </b-nav-item-dropdown>

      
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
 <!-- Modal Component for About -->
   <b-modal ref="myModalRef" hide-footer title="Marvel Application">
      <div class="d-block text-center">
        <h4>  From the Marvel API https://developer.marvel.com/, display a list of 20 characters from the hundredth. 
          Each item in the list must have the name of the character and its image and a click on its name must display the detail of the character with the following information: name / description / image / the number of comics where the character appears / the titles of the 3 first comics where the character appears</h4>
      </div>
     
    </b-modal>
     <!-- Modal Component for Guide-->
   <b-modal id="modal2" size="lg" hide-footer title="Description">
      <div class="d-block">
        <article id="pdf">
            <div>
              <object data="guideApp.pdf" type="application/pdf" internalinstanceid="3" width="408" height="500">Mode d'échec 
              </object>
            </div>
        </article>
      </div>
    </b-modal>
 </section>
</template>

<script>
export default {
  name: "Header",

   methods: {
    showModal () {
      this.$refs.myModalRef.show()
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    }
  }
};
</script>