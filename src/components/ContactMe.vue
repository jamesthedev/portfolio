<template>
    <div>
        <p class='pageTitle'>Send me an email so we can get in touch!</p>

        <form id="frmEmail" body="TEST" subject="TESTSU" method="post" enctype="text/plain">
        Your Name:<br>
        <b-form-input v-model="name"></b-form-input>
        Message:<br>
            <b-form-textarea
                v-model="message"
                id="textarea"
                size="md"
                rows="6"
                max-rows="6"
                no-resize
            ></b-form-textarea> 
            <b-button id="btnSend" @click="submitEmail" size="md" variant="success">Send</b-button>
            <b-tooltip target="btnSend" triggers="hover" placement="bottom">
                This will open your email client to send the email from your email address.
            </b-tooltip>
        </form>
        <p id="lnkGitHub">Or, <a href="https://github.com/jamesthedev" target="_blank">check out my GitHub</a></p>
    </div>
</template>
<script>
export default {
    name: "ContactMe",
    data: () => {
        return {
            name: null,
            message: null,
        }
    },
    methods: {
        //adds name as subject and message as body (if they exist) to form action ; opens email client
        submitEmail() {
            var vm = this;
            
            var action = "mailto:james989@outlook.com";
            action += "?subject=" + (vm.name != null ? encodeURIComponent(vm.name) : "");
            action += "&body=" + (vm.message != null ? encodeURIComponent(vm.message) : "");

            var form = document.getElementById("frmEmail");
            form.action = action;

            form.submit();
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

    #btnSend {
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
</style>