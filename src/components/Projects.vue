<template>
    <div>
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
                        "Plenty of custom CSS and CSS grid (especially on this page)"                
                    ], 
                    gitHubLink: "https://github.com/jamesthedev/60-120"
                },
                {
                    title: "60/120", 
                    description: [
                        "Fitness app for Fitbit devices",
                        "> 40 ratings, 74% are 5 stars",
                        "I have managed and updated this app for nearly a year. Several users have reached out to me with questions and feature requests. I have been very responsive and quick to fix bugs.",
                        "One user who emailed me actually offered me contract work because he was so impressed with my work and consistent app improvements.",
                        "The Fitbit SDK uses a custom version of CSS/HTML/Javascript"
                
                    ], 
                    appLink: "https://gallery.fitbit.com/details/446adbb9-9530-4bee-8372-7d1bc600d271",
                    gitHubLink: "https://github.com/jamesthedev/60-120"
                }
            ]
        }
    }
}
</script>

<style scoped>
    .projects {
        border-radius: 15px;
        margin: 10px; 
        box-shadow: 0px 0px 8px rgb(159, 151, 124);
        transition: transform .2s;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto 35px;
    }

    .projects:hover {
       transform: scale(1.05);
    }

    #projectArea {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  
    }
</style>