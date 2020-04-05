import Vuex from "vuex";
import Vue from "vue";
import VuexPersist from "vuex-persist";
import axios from "axios";
import { mFirebaseStorage } from "../firebase/firebase-service";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "coderFlows",
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    data: {}
  },
  getters: {
    getUserData(state) {
      return state.data;
    }
  },

  mutations: {
    setUserdata(state, userData) {
      state.data = userData;
    }
  },

  actions: {
    async fetchUserData(context) {
      const storageRef = mFirebaseStorage.ref();
      const objectRef = storageRef.child("MOCK_DATA.json");

      let url = await objectRef.getDownloadURL();
      let response = await axios.get(url);
      context.commit("setUserdata", response.data);
    }
  },

  plugins: [vuexPersist.plugin]
});
