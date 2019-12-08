<template>
    <Login
        v-bind:showUsernameError="showUsernameError"
        v-bind:inputUsernameError="inputUsernameError"
        v-bind:showPasswordError="showPasswordError"
        v-bind:inputPasswordError="inputPasswordError"
        v-bind:message="message"
        @clicked="onClickChild"
    ></Login>
</template>


<script>
    import Login from './Login.vue'

    export default {
        name: 'HomePage',
        components: {
            Login
        },
        data() {
        return {
            message: 'Please enter username and password',
            showUsernameError: false,
            inputUsernameError: false,
            showPasswordError: false,
            inputPasswordError: false
        }
        },
        methods: {
            onClickChild(username, password) {
                if (username !== localStorage.getItem('username') || password != localStorage.getItem('password')) {
                    if (username !== localStorage.getItem('username'))
                    {
                        this.message = "Please enter correct username";
                        this.showUsernameError = true;
                        this.inputUsernameError = true;
                    } else {
                        this.showUsernameError = false;
                        this.inputUsernameError = false;
                    }
                    if (password !== localStorage.getItem('password'))
                    {
                        this.message = "Please enter correct password";
                        this.showPasswordError = true;
                        this.inputPasswordError = true;
                    } else {
                        this.showPasswordError = false;
                        this.inputPasswordError = false;
                    }
                } else {
                    const sessionID = '1341232123';
                    sessionStorage.setItem('sessionID', sessionID);
                    this.$router.push({ name: 'Cards' });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search {
        margin: 40px auto 20px auto;
        font-size: 1.2rem;

        .--search-input {
            padding: 5px 10px;
            color: rgba(0,0,0,.7);
            border: 1px solid rgba(0,0,0,.12);
            background: white;

            &:focus {
                outline: none;
            }
            &::-webkit-input-placeholder {
                font-size: 12px;
                color: rgba(0,0,0,.50);
                font-weight: 100;
            }
        }
  
        
    }
</style>

      