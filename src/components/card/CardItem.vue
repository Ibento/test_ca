<template>
    <div class="[ card-container ]">
        <h4>{{cardData.name}}</h4>
        <img v-if="cardData.imageUrl" :src="cardData.imageUrl">
        <img v-else src="../../assets/noimage.jpg" alt="No Image">
        <button class="btn btn-success" @click="gotoCard(cardData.id)">Read More</button>
    </div>
</template>

<script>

    export default {
        name: 'CardItem',
        props: {
            cardData: Object
        },
        data() {
            return {}
        },
        methods: {
            gotoCard(id) {
                this.$router.push({name:'CardDetails', params: {id : id}});
            }
        }
    }
</script>

<style lang="scss">
    .card-container {
        border: solid 1px lightgrey;
        border-top: 10px solid #7DE87E;
        margin-top: 30px;
        margin-left: 5px;
        padding: 15px;
    }

    .card-container:hover {
        cursor: pointer;

    }
    .btn {
        margin: 20px;
        background-color: #17a2b8;
        color: #fff;
        border: none;
        font-size: 0.9rem;

    }
    .btn-success:hover {
        background-color: #7DE87E;
        color: #17a2b8;
    }
    img {
        width: 100%;
    }
    
    
</style>