<script lang="ts">
    import { mapActions, mapState } from 'vuex';

    export default {
        computed: {
            ...mapState(['products']),
        },
        methods: {
            ...mapActions(['fetchProduct']),
        },
        mounted() {
            this.fetchProduct();
        },
    }
</script>

<template>
    <div class="box-product">
        <div class="image" v-for="item in listProduct" :key="item.id">
            {{ item.image }}
        </div>  
        <div class="desc">

        </div>
    </div>
</template>

<style scoped>
.box-product {
    height: 768px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 2rem 0;
    border-radius: 1rem;
    padding: 1rem;
}

.image {
    width: 20%;
}

.desc {
    width: 80%;
}
</style>