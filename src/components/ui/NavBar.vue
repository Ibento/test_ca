<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/">Card Game</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/">Home</b-nav-item>
                <b-nav-item href="/about">About us</b-nav-item>
                <b-nav-item href="/contact">Contact us</b-nav-item>
            </b-navbar-nav>


            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>