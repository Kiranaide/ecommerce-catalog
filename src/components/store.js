import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
    },
    actions: {
        async fetchProduct(context) {
            const res = await fetch('https://fakestoreapi.com/products/');
            const finalRes = await res.json();
            context.commit('setProducts', finalRes);
        },
    },
    getters: {
        getProductById: (state) => (id) => {
            return state.products.find(products => products.id == id);
        },
    },
});