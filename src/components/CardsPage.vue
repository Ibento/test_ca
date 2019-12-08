<template>
    <div class="[ container ] [ homepage ]">
        <div class="[ row ]">
            <div class="[ col-sm-12 ]">
                <h1>Magic the Gathering Cards</h1>
                <form class="[ search ]">
                    <input type="text" name="searchinput" class="__inputbox" id="search" v-model="search" placeholder="Search by name...">
                </form>
            </div>
        </div>
        <div class="[ row ]">
            <div v-for="item in filteredList" class="[ col-sm-4 ]">
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
        name: 'CardComponent',
        components: {
            CardItem
        },
        data() {
            return{
                cards: offlineCards,
                search: ''
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
                    this.cards = this.cards.filter(card => card.id === 'ee19938c-4007-58f1-8904-fae28007b422');
                }
        },
        async mounted() {
           let magicthegathering = await this.getJSON();
           this.cards = magicthegathering.cards;
        },
        computed: {
            filteredList() {
                const app = this;
                return app.cards.filter(card => {
                    return card.name.toLowerCase().includes(app.search.toLowerCase());
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search {
        margin: 40px 150px 20px 150px;
        font-size: 1.2rem;

        .__inputbox {
            padding: 5px 10px;
   
            color: rgba(0,0,0,.7);
            border: 1px solid rgba(0,0,0,.12);
            background: white;
            width: 500px;

            &:focus {
                outline: none;
            }
            &::-webkit-input-placeholder {
                font-size: 20px;
                color: rgba(0,0,0,.50);
                font-weight: 100;
            }
        }
  
        
    }
</style>

      