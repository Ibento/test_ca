<template>
    <div class="[ row ] [ login ]">
        <div class="[ col-sm-4 ]"></div>
        <div class="[ col-sm-4 ]">
            <div>
                <h4 class="[ __message ]">
                    {{ message }}
                </h4>
                <form>
                    <input type="text" placeholder="Username" v-model="username" class="[ form-control ]">
                    <div class="[ error ]" v-if="showUsernameError">Please enter a correct username</div>
                    <br />
                    <input type="password" placeholder="Password" v-model="password" class="[ form-control ]">
                    <div class="[ error ]" v-if="showPasswordError">Please enter a correct password</div>
                    <br />
                    <button type="button" v-on:click="login" class="btn btn-default [ __submit ]">Submit</button>
                    
                </form>
            </div>
        </div>
        <div class="[ col-sm-4 ]"></div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    props: ['message','showUsernameError','inputUsernameError','showPasswordError','inputPasswordError'],
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login: function () {
            const app = this;
            app.$emit('clicked', this.username, this.password);
        }
    }
}
</script>
<style lang="scss">
    .login {
        .__message {
            margin: 50px auto;
            width: 
            50%;
        }
        .form-control {
            width: 50%;
            margin: auto;
        }
        .__submit {
            background-color: #17a2b8;
            color: #fff;
        }
        .error {
            color: red;
        }

        .error-border {
            color: red;
        }
    }

</style>