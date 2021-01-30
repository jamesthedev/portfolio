<template>
    <div class="projectItem">
        <div class="itemTitle">
            {{title}}
            <hr>
        </div>

        <div>
            <ul>
                <li v-for="(item, index) in descriptionList" :key="index">{{item}}</li>                
            </ul>
        </div>   

        <div class="linkArea">
            <hr>
            <span v-if="appLink">
                <b-link :href="appLink" target="_blank">App Link</b-link> |        
            </span>
            
            <b-link :href="gitHubLink" target="_blank">Github Link</b-link>
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
        align-self: bottom;
    }

    .itemTitle {
        font-size: 2em;
    }

    hr {
        margin: 0;
    }
</style>