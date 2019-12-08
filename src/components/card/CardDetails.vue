<template>
    <div class="[ container ][ card-details ]">
        <div class="[ row ]" v-for="data in myCard" :key="data.id">
            <div class="[ col-sm-3 ][ __image ]">
                <img v-if="data.imageUrl" :src="data.imageUrl">
                <img v-else src="../../assets/noimage.jpg" alt="No Image">
    
            </div>
            <div class="[ col-sm-9 ][ __info ]">
                <h2 v-if="data.name">{{data.name}}</h2>
                <div v-if="data.text"><b>About:</b> {{data.text}}</div>
                <div v-if="data.rarity"><b>Rarity:</b> {{data.rarity}}</div>
                <div v-if="data.colors"><b>Colors:</b> 
                    <ul v-for="color in data.colors" :key="color" class="[ __colors ]">
                        <li>{{color}}</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>

<script>    
    import axios from 'axios';
    import offlineCards from '../../constants/cards.json'
        
    export default {
        name: 'CardDetails',
        props: ['id'],
        data() {
            return{
                mtg: offlineCards
            }
        },
        methods: {
            async getJSON(){
                const app = this;
                return await axios
                    .get('https://api.magicthegathering.io/v1/cards')
                    .then( response => response.data)
                    .catch((error) => console.log(error))

                }
        },
        async mounted() {
            this.mtg.cards = await this.getJSON();

        },
        computed: {
            myCard: function () {
                const app = this;
                return app.mtg.filter(card => card.id === this.cardID);
            },
            cardID: function() {
                return this.$route.params.id;
            }
        }

    }
</script>
<style lang="scss">
    .card-details {
        margin: 20px auto;
        .__image {
            img {
                width: 100%;
            }
        }
        .__info {
            text-align: left;
            
        }
        .__colors {
            display: inline-block;
        }
    }
    

</style>