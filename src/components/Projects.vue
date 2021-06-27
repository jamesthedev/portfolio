<template>
    <div class="appPage">
        <p class='pageTitle'>Here's a list of projects I've worked on during my own time. Feel free to check out the code on my Github.</p>
        <div id="projectArea">
            <ProjectItem 
                v-for="(item, index) in projectList" 
                class="projects"
                :key="index"
                :title="item.title"
                :descriptionList="item.description"
                :appLink="item.appLink"
                :gitHubLink="item.gitHubLink"
            />  
        </div>     
    </div>
</template>

<script>
import ProjectItem from './ProjectItem.vue';

export default { 
    name: 'Projects',
    components: { ProjectItem },
    data () {
        return {
            projectList: [
                {
                    title: "This Portfolio", 
                    description: [
                        "Vue.js + BootstrapVue",
                        "Plenty of custom CSS and CSS grid (especially on this page)",
                        "Still a work in progress"
                        //"Very responsive" //NOT YET               
                    ], 
                    gitHubLink: "https://github.com/jamesthedev/portfolio"
                },
                {
                    title: "60/120", 
                    description: [
                        "Fitness app for Fitbit devices",
                        "> 40 ratings; 70% are 5 stars",
                        "I have managed and updated this app for nearly a year. Several users have reached out to me with questions and feature requests. I have been very responsive and quick to fix bugs.",
                        "The Fitbit SDK uses a custom version of CSS/HTML/Javascript"                
                    ], 
                    appLink: "https://gallery.fitbit.com/details/446adbb9-9530-4bee-8372-7d1bc600d271",
                    gitHubLink: "https://github.com/jamesthedev/60-120"
                },
                {
                    title: "File Creator",
                    description: [
                        "A tool I made in college to quickly create files with a user-provided filename, extension, and file path",
                        "I recently went back to this project and made several improvements to it.",
                        "Very helpful tool as a developer when I need to quickly make a bunch of files for a project."
                    ],
                    gitHubLink: "https://github.com/jamesthedev/File-Creator"
                }
            ]
        }
    }
}
</script>

<style scoped>
    .projects {
        margin: 10px; 
        border-radius: 6px;
        box-shadow: 0px 2px 10px rgb(159, 151, 124);
        transition: transform .2s;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto 35px;
    }

    .projects:hover {
       transform: scale(1.009);
    }

    #projectArea {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  
    }
</style>