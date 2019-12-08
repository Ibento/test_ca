<template>
    <div class="[ container ]">
        <div class="[ row ]">
            <div class="[ col-sm-12 ]">
                <h1>Contact us</h1>
            </div> 
            <div class="[ contact-form ]">
                <div class="[ __summary ] [ --text-red ]" v-if="$v.form.$error">
                    Form has errors, please enter correct information
                </div>
                <div class="[ __summary ]" v-if="$data.form.submitted">
                    Thank you for contacting us. We will be in touch shortly.
                </div>
                <form @submit.prevent="submit" v-if="$data.form.submitted === false">
      
                        <label for="firstName" class="font-bold text-grey [ --bold ]">First name </label>
                        <div :class="{ 'hasError': $v.form.firstName.$error }">
                            <input type="text" class="input" id="firstName" v-model="form.firstName">
                            <div class="error" v-if="!$v.form.firstName.required && $v.form.errors">First name is required.</div>
                        </div>


                        <label for="lastName" class="font-bold text-grey [ --bold ]">Last name </label>
                        <div :class="{ 'hasError': $v.form.lastName.$error }">
                            <input type="text" class="input" id="lastName" v-model="form.lastName">
                            <div class="error" v-if="!$v.form.lastName.required && $v.form.errors">Last name is required.</div>
                        </div>

                        <label for="email" class="font-bold text-grey [ --bold ]">Email </label>
                        <div :class="{ 'hasError': $v.form.email.$error }">
                            <input type="email" id="email" class="input" v-model="form.email">
                            <div class="error" v-if="!$v.form.email.required && $v.form.errors">Email is required.</div>
                            <div class="error" v-if="!$v.form.email.email && $v.form.errors">Email must be in correct format.</div>
                        </div>

                        <label for="phone" class="font-bold text-grey [ --bold ]">Phone </label>
                        <div :class="{ 'hasError': $v.form.phone.$error }">
                            <input type="text" id="phone" class="input" v-model="form.phone">
                            <div class="error" v-if="!$v.form.phone.phoneValid && $v.form.errors">Phone number must be in correct format (xxx xxx xxxx).</div>
                        </div>

             
                    <div class="text-right">
                        <button type="submit" class="button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>



<script>

    import { required, email, minLength } from "vuelidate/lib/validators";

    const isPhone = (value) => {
        if (/^[1-9]\d{2} \d{3} \d{4}$/.test(value) ||
            /^[1-9]\d{2}.\d{3}.\d{4}$/.test(value) ||
            /^[1-9]\d{2}-\d{3}-\d{4}$/.test(value) ) {
            return true;
        } 
        else {
            return false;
        }
    }
    export default {
        name: 'ContactPage',
        data() {
            return {
                form: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    submitted: false,
                    errors: false
                }
            };
        },
        validations: {
            form: {
                firstName: { required },
                lastName: { required },
                email: { required, email },
                phone: {
                    phoneValid:isPhone
                },
            }
        },
        methods: {
            submit(event) {
                this.$v.form.$touch();
                if(this.$v.form.$error) {
                    this.$v.form.errors = true;
                    return
                } else {
                    this.$data.form.submitted = true;
                    console.log('Form submitted')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    .contact-form  {
        margin: 30px auto;
        text-align: left;
        width: 30vw;

    

        .__summary {
            margin-bottom: 10px;
            width: 100%;
            &.--text-red {
                color: red;
            }
        }
        .input {
            background-color: #f7f7f7;
            border: 1px solid rgb(199, 199, 199);
            padding: 0.3rem 0.5rem;
            border-radius: 2px;
            margin: 0px auto 0px auto;
            width: 100%;
            .hasError & {
                border-color: red;
            }
        }

        .hasError {
        color: red;
        }

        label {
            margin-top: 20px;
            &.--bold {
                font-weight: bold;
            }
        }

        .button {
            background: #17a2b8;
            padding: 0.5rem 1rem;
            margin-top: 20px;
            color: white;
            text-transform: uppercase;
            font-weight: bold;
            letter-spacing: 3px;
            border-radius: 2px;
            transition: 0.3s;
            width: 100%;
            &:hover {
                background: #2ed6f1;
            }
        }
    }
  


</style>