<template>
    <div>
        <div class="editProfileContainer">
            <NavBarStandard />
            <div class="editFields">
                <div class="promptMessages">
                    <header class="firstNamePrompt">First Name:</header>
                    <header class="lastNamePrompt">Last Name:</header>
                    <header class="descriptionPrompt">Description:</header>
                </div>
                <div class="changeFields">
                    <input type="text" placeholder="..."/>
                    <input class="lastNameInput" type="text" placeholder="..."/>
                    <textarea class="descriptionInput" rows="5" cols="50" maxlength="200"
                        placeholder="This is a short description about yourself."></textarea>
                </div>
            </div>
            <div class="submissionFields">
                <button class="cancelButton">Cancel</button>
                <button class="submitButton">Submit</button>
            </div>
            <div class="background">
            </div>
        </div>
    </div>
</template>

<script>
    import NavBarStandard from '../components/NavBarStandard.vue'

    export default {
        name: 'editprofile',
        components: {
            NavBarStandard
        },
        data: function() {
            return {

            }
        }
    }
</script>

<style scoped>
    input {
        width: 80%;
        height: 30px;
        padding-left: 20px;
        padding-right: 20px;
        background: #000000;
        color: #FFFFFF;
        border: 1px solid #D34084;
        border-radius: 5px;
        font-size: 15px;
    }
    textarea {
        resize: none;
        padding-left: 20px;
        padding-right: 20px;
        width: 80%;
        background: #000000;
        color: #FFFFFF;
        border: 1px solid #D34084;
        border-radius: 5px;
        font-size: 15px;
    }
    textarea:focus {
        outline: none;
    }

    .editProfileContainer {
    }
    .editFields {
        display: flex;
        width: 600px;
        margin: 0 auto;
        margin-top: 200px;
        height: 400px;
        color: #FFFFFF;
        font-size: 20px;
    }
    .promptMessages {
        flex-grow: 1;
    }
    .changeFields {
        flex-grow: 2;
        text-align: center;
    }
    .firstNamePrompt {

    }
    .lastNamePrompt {
        margin-top: 67px;
    }
    .descriptionPrompt {
        margin-top: 68px;
    }
    .lastNameInput {
        margin-top: 50px;
    }
    .descriptionInput {
        margin-top: 50px;
    }
    .background {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: #0C1012;
    }
</style>
