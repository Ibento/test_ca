<template>
    <div class="[ container ] [ homepage ]">
        <div class="[ row ]">
            <div class="[ col-sm-12 ]">
                <form class="relative">
                    <input type="text" name="search" id="search" placeholder="Search by name...">
                    <button @click="searchCards(searchInput)" type="button">Search <i class="fa fa-search" aria-hidden="true"></i></button>
                </form>
            </div>
        </div>
        <div class="[ row ]">
            <div v-for="item in cards" class="[ col-sm-4 ]">
                <CardItem :cardData="item" :key="item.name" />
            </div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios';
    import CardItem from './card/CardItem.vue'
    import offlineCards from '../constants/cards.json'

    export default {
        name: 'HomePage',
        components: {
            CardItem
        },
        data() {
            return{
                cards: offlineCards
            }
        },
        methods: {
            async getJSON(){
                const app = this;
                return await axios
                    .get('https://api.magicthegathering.io/v1/cards')
                    .then( response => response.data)
                    .catch((error) => console.log(error))

                },
                searchCards(query) {
                    this.cards = this.cards;
                }
        },
        async mounted() {
           let magicthegathering = await this.getJSON();
           this.cards = magicthegathering.cards;
        }
    }
</script>
