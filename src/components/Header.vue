<template>
 <section>
       
  <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

     <b-collapse is-nav id="nav_collapse">

    <img src="../assets/marvel.png" style=" width: 100px;height: 90px;"  alt="marvel">

    
    <b-navbar-nav class="ml-auto">

    <b-nav-item @click="showModal">About</b-nav-item>
      <b-nav-item-dropdown text="Help" right>
           <b-dropdown-item href="#">Guide</b-dropdown-item>
      </b-nav-item-dropdown>

      
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
 <!-- Modal Component -->
   <b-modal ref="myModalRef" hide-footer title="Marvel Application">
      <div class="d-block text-center">
        <h3>This is the list of 20 characters from the 100th!</h3>
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