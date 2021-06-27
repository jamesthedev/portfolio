<template>
    <div class="projectItem">
        <div class="itemTitle">
            {{title}}
            <hr class="titleDivider">
        </div>

        <div class="descriptionArea">
            <ul>
                <li v-for="(item, index) in descriptionList" :key="index">{{item}}</li>                
            </ul>
        </div>   

        <div class="linkArea">
            <span v-if="appLink">
                <b-link :href="appLink" target="_blank" class="projectLinks">App Link</b-link> |
            </span>
            
            <b-link :href="gitHubLink" target="_blank" class="projectLinks">Github Link</b-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectItem',
    props: ['title', 'descriptionList', 'appLink', 'gitHubLink']
}
</script>

<style scoped>
    .linkArea, .itemTitle {
        text-align: center;
        margin: 4px;  
    }

    .linkArea {
        background-color: rgb(235, 226, 226);   
        align-self: bottom;
        margin: 0;   
        padding-top: 5px;     
        border-radius: 0px 0px 6px 6px;
    }

    .itemTitle {
        font-size: 2em;
    }

    hr {
        margin: 0;
    }

    .descriptionArea {
        width: 90%;
    }

    .titleDivider {
        width: 80%;
        margin: 0px auto 10px auto;
    }
</style>