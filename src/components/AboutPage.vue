<template>
    <div class="[ container ]">
        <div class="[ row ]">
            <div class="[ col-sm-12 ]">
                <h2>About</h2>
            </div>
            <div class="[ col-sm-12 ]">
                <div class="[ about ]">
                    <b-card v-b-toggle.collapse-1 variant="primary">
                        <span class="[ --title ]">DEFEAT YOUR OPPONENT </span>
                        <font-awesome-icon icon="chevron-down" class="[ --icon ][ __pull-right ]" />
                    </b-card>
                    <b-collapse id="collapse-1" class="mt-2">
                        <b-card >
                           <p class="[ --card-text ]">
                                Each player starts the game with 20 life. Knock your opponent down to 0 life, and you win. The most common way to do this is to summon creatures and attack with them.
                                <br><br>    
                                Creature cards are the most important part of many Magic decks. They’re really easy to spot—just look at the lower right of a card. If you see a pair of numbers separated by a slash, you’ve got a creature card. Once it’s on the battlefield, a creature continues to attack and defend for you until your opponent can find a way to take it out.
                                <br><br>
                                Most games become a race to see who can deal the most damage first. Summoning the best creatures will help you win that race every time. Check out the section on casting creature spells.
                            </p>
                       
                        </b-card>
                    </b-collapse>
                </div>
            </div>
 
        </div>
    </div>
</template>

<script>

    export default {
        name: 'AboutPage',
    }
</script>

<style lang="scss" scoped>
    div.about {
        .--title {
            margin: auto;
        }
        .--icon.__pull-right {
                float:right;
        }
        .--card-text {
            text-align: left;
        }
    }

</style>