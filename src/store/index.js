import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    isLoaded: false,
    main_img: '',
    backend_data: {
      text: '',
      num: 0
    },

    update_data: {
      text: '',
      num: 0
    }
  },
  mutations: {
    updateData(state, data) {
      console.log(data)
      state.isLoaded = true;
      state.backend_data = data;
      state.update_data = Object.assign({}, data);
      if(data.image) {
        state.main_img = data.image
      }
    }
  },
  actions: {
    save({commit}, data){
      return new Promise((resolve) => {
        axios.put('http://localhost:8081/api/image', data)
          .then((responce) => {
            console.log(responce.status)
            if(responce.status == 200) {
              commit('updateData', data);
              resolve(data)
            }
          })
      })
    },

    load({commit}){
      return new Promise((resolve) => {
        axios.get('http://localhost:8081/api/image')
          .then((responce) => {
            console.log(responce)
            if(responce.status == 200) {
              commit('updateData', responce.data);
              resolve(responce.data)
            }
          })
      })
    }
  },
  modules: {
  }
})
