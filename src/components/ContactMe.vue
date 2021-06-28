<template>
    <div>
        <p class='pageTitle'>Send me an email so we can get in touch!</p>

        <form id="frmEmail" method="post" enctype="text/plain" disabled>
            Your Name:<br>
                <b-form-input 
                    v-model="name" 
                    :state="validateInput(1)" 
                    :disabled="busy"
                ></b-form-input>
            Your Email Address:<br>
                <b-form-input 
                    maxlength="320" 
                    id="emailInput" 
                    v-model="userEmail" 
                    :state="validateInput(2)" 
                    :disabled="busy"
                ></b-form-input>
            Message:<br>
                <b-form-textarea
                    v-model="message"
                    id="textarea"
                    size="md"
                    rows="6"
                    max-rows="6"
                    no-resize
                    :state="validateInput(3)"
                    maxlength="2000"
                    :disabled="busy"
                ></b-form-textarea> 
            <b-button v-if="!busy" class="emailBtns" @click="submitEmail" size="md" variant="success">
                Send
            </b-button>
            <b-button v-else class="emailBtns" variant="success" disabled >
                <b-spinner small></b-spinner>
                Sending...
            </b-button>
        </form>
        <p id="lnkGitHub">Or, <a href="https://github.com/jamesthedev" target="_blank">check out my GitHub</a></p>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
emailjs.init("user_YfqCXYpBa1LMQNOGY3Li6");

export default {
    name: "ContactMe",
    data: () => {
        return {
            name: null,
            message: null,
            userEmail: null,
            formState: {
                name: null,
                userEmail: null,
                message: null
            },
            busy: false
        }
    },
    methods: {
        //uses email.js API to send an email to me
        submitEmail() {
            var vm = this;

            //validate form first; display error if missing or invalid fields
            var valid = vm.validateForm(); 

            if (!valid) {
                vm.$bvToast.toast('Please fill out all fields and enter a valid email address.', 
                {
                    noAutoHide: true,
                    title: 'Error',
                    variant: 'danger',
                    solid: true,
                    toaster: 'b-toaster-top-center'
                });

                return;
            }

            //build email object and send it
            var emailData = {
                from_name: vm.name,
                from_email: vm.userEmail,
                message: vm.message                
            }

            vm.busy = true;

            emailjs.send('service_sh2r9io', 'template_de03mrp', emailData)
                .then(
                    (response) => {
                        if (response.status === 200) {
                            vm.$bvToast.toast("I got your email! I CC'd the email you provided, so you should be seeing it"
                                + " in your inbox shortly. The sender address will be james_the_dev@outlook.com. You might need to check your spam folder."
                                + " Thank you for taking the time to visit my portfolio!",
                            {
                                title: 'Thank you!',
                                variant: 'success',
                                solid: true,
                                toaster: 'b-toaster-top-center',
                                autoHideDelay: 15000
                            });

                            vm.clearForm();
                        }

                        else {
                            vm.$bvToast.toast("I'm sorry, there was an unexpected error sending this email. If you keep having issues," 
                                + " feel free to email me directly at james_the_dev@outlook.com.", 
                            {
                                title: 'Email error',
                                variant: 'danger',
                                solid: true,
                                toaster: 'b-toaster-top-center',
                                autoHideDelay: 5000
                            });
                            console.error(response);
                        }

                        vm.busy = false;
                    },
                    (error) => {
                        vm.$bvToast.toast("I'm sorry, there was an unexpected error sending this email. If you keep having issues," 
                            + " feel free to email me directly at james_the_dev@outlook.com.", 
                        {
                            title: 'Email error',
                            variant: 'danger',
                            solid: true,
                            toaster: 'b-toaster-top-center',
                            autoHideDelay: 5000
                        });
                        console.error(error);

                        vm.busy = false;
                    }
                );                          
        },
        /*
            This function is weird. I wanted the form state to be null when the fields were empty, so there is no red exclamation ponit when the user first loads the page.
            BUT, I want empty fields to have a state of false (invalid) if the user tries to submit the form with any fields empty. If they do that, I want the state to return 
            to null as soon as they do enter text in the boxes. So the logic is a bit weird but it gets the job done. validateForm() also plays a major role in 
            acheiving this.
        */
        validateInput(opt) { //opt 1 = name, opt 2 = email, opt 3 = message
            var vm = this;

            switch(opt) {
                case 1: 
                    if (vm.formState.name === null) return null;
                    else if (!vm.name) {
                        return false;
                    }
                    else {
                        vm.formState.name = null;
                        return null;
                    }                
                case 2: 
                    if (vm.formState.userEmail === null) return null;
                    else if (!vm.validateEmail()) {
                        return false;
                    }
                    else {
                        vm.formState.userEmail = null;
                        return null;
                    }                
                case 3: 
                    if (vm.formState.message === null) return null;
                    else if (!vm.message) {
                        return false;
                    }
                    else {
                        vm.formState.message = null;
                        console.log("here3")
                        return null;
                    }
            }
        },
        validateEmail() {
            return /\S+@\S+\.\S+/.test(this.userEmail);
        },
        validateForm() {
            var vm = this;

            //validate fields
            var valid = true;

            if (!vm.name) {
                valid = false;
                vm.formState.name = false;
            }

            if (!vm.validateEmail()) {
                valid = false;
                vm.formState.userEmail = false;
            }

            if (!vm.message) {
                valid = false;
                vm.formState.message = false;
            }

            return valid;
        },
        clearForm() {
            var vm = this;
            vm.name = vm.message = vm.userEmail = vm.formState.name = vm.formState.userEmail = vm.formState.message = null;     
        }
    }
}
</script>
<style scoped>
    #lnkGitHub {
        margin: 1% 0% 0% 25%;
    }

    #frmEmail {
        margin-right: 25%;
        margin-left: 25%;
        padding: 2%;
        border-radius: 15px;
        box-shadow: 0px 0px 8px rgb(159, 151, 124);    
    }

    .emailBtns {
        margin-top: 2%;
    }

    input {
        margin-bottom: 2%;
    }

    @media screen and (max-width: 750px) {
        #frmEmail, #lnkGitHub {
            margin: 3%;
        }
    }

    #spinnerArea label {
        color: green;
        margin-top: 0;
    }

    #emailLoadingIndicator {
        margin-top: 5px;
    }
</style>