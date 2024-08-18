import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import userStore from '@/store/user-store';

const store = new Vuex.Store({
    modules: {
        user: userStore,
    },
});

export default store;
