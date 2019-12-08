<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/">Magic the Gathering</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/">Home</b-nav-item>
                <b-nav-item href="/about">About the game</b-nav-item>
                <b-nav-item href="/contact">Contact us</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav v-if="isLoggedIn" class="ml-auto">
                <b-nav-item href="/logout">Log out</b-nav-item>
            </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            isLoggedIn: false
        }
    },
    beforeMount: function () {
        if (!sessionStorage.getItem('sessionID')) {
            this.isLoggedIn = false;
        }
        else {
            this.isLoggedIn =  true;
        } 
    }
}
</script>

<style lang="scss">
    .b-navbar-nav {
        .pull-right {
            float: right;
        }
    }
</style>