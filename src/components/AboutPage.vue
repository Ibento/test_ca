<template>
    <div class="[ container ]">
        <div class="[ row ]">
            <div class="[ col-sm-12 ]">
                <h1>About the game</h1>
            </div>
            <div class="[ col-sm-12 ]">
                <div class="[ about ]">
                    <b-btn v-b-toggle.collapse-1 variant="primary" class="[ --toggle-button ]">
                        <span class="[ --title ][ __pull-left ]">DEFEAT YOUR OPPONENT </span>
                        <span class="when-opened">
                            <font-awesome-icon icon="chevron-down" class="[ --icon ][ __pull-right ]" aria-hidden="true" />
                        </span>
                        <span class="when-closed">
                            <font-awesome-icon  icon="chevron-left" class="[ --icon ][ __pull-right ]" aria-hidden="true" />
                        </span>
                    </b-btn>
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
        name: 'AboutPage'
    }
</script>

<style lang="scss" scoped>

    div.about {
        width: 40vw;
        margin: 20px auto;

        .--toggle-button {
            background-color: #17a2b8 !important;
            width: 40vw;
            border-color: #cccccc;
            -webkit-box-shadow: none;
            box-shadow: none;
            padding: 10px 20px;
            cursor: pointer;

            .--title.__pull-left {
                margin: auto;
                float:left;            
            }
            .--icon.__pull-right {
                float:right;
                margin: 5px auto;
            }
        }
        .--card-text {
            text-align: left;
    
        }
        .collapsed > .when-opened, :not(.collapsed) > .when-closed {
            display: none;
        }
    }



</style>