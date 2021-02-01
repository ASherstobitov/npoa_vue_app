<template>
  <div id="popup">
      <div @click="closeHandler" id="close">x</div>
      <p>{{backend_data.text}}</p>
      <input v-model="update" />
      <Slider @update="sliderUpdateHandler" v-bind:position="num" />
      <button @click="btnClearClickHandler">Сбросить</button>
      <button @click="btnSaveClickHandler">Сохранить</button>   
  </div>
</template>

<script>
import Slider from './Slider';

export default {
    name: 'Popup',
    components: {
        Slider
    },
    data() {
        return {
            update: '',
        }
    },
    computed: {
        num: {
            get: function () {
                return this.update_data.num;
            },

            set: function (value) {
                this.update_data.num = value;
            }
        },
        backend_data() {
            return this.$store.state.backend_data;
        },
        update_data() {
            return this.$store.state.update_data;
            console.log(this.$store.state.backend_data.num)
        }
    },
    methods: {
        btnClearClickHandler() {
            this.update = '';
            console.log(this.num, this.$store.state.backend_data.num)
            this.num =  this.$store.state.backend_data.num;
        },
        btnSaveClickHandler() {
            this.$store.dispatch('save', {text: this.update, num: this.update_data.num});
            this.text = this.$store.state.backend_data.text
        },
        sliderUpdateHandler(num) {
            this.num = num;
        },
        closeHandler() {
            this.$emit('close');
        }
    }
}
</script>

<style>
    #popup{
        padding: 50px;
        position: fixed;
        width: 800px;
        height: 500px;
        background: white;
        border: 1px solid #2583C1;
        border-radius: 6px;
        box-shadow: 5px 5px 10px #555;
        top: 100px;
        left: calc(50%  - 400px);
    }
    #close{
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        font-family: Arial;
    }
</style>