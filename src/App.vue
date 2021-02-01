<template>
  <div v-if="isLoaded" class="wrapper">
    <img :src="`data:image/jpeg;base64, ${main_img}`" />
    <br />
    <button @click="btnClickHandler" >Настройки</button>
    <template v-if="isPopupOpened">
      <Popup @close="isPopupOpened = !isPopupOpened" />
    </template>
  </div>

  <div v-else class="wrapper">..
    <h3>Loading...</h3>
  </div>
</template>

<script>
import Popup from './components/Popup';

export default {
  name: 'App',
  components: {
    Popup
  },
  data(){
    return {
      isPopupOpened: false
    }
  },
  methods: {
    btnClickHandler() {
      //console.log(this.main_img)
      this.isPopupOpened = !this.isPopupOpened;
    }
  },
  computed: {
    main_img() {
      return this.$store.state.main_img;
    },

    isLoaded() {
      return this.$store.state.isLoaded
    }
  }, 
  mounted() {
    this.$store.dispatch('load');
  }
}
</script>

<style>
  .wrapper{
    width: 100%;
    text-align: center;
  }
  button{
    margin: 20px;
    width: 200px;
    height: 60px;
    color: #2583C1;
    background-color: white;
    border: 1px solid #2583C1;
    border-radius: 6px;
  }

  button:hover {
    background-color: #2583C1;
    color: white;
  }
</style>
