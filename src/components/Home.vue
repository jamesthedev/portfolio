<template>
  <div id="homePage">
    <transition
      appear
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <div>
        <p class="pageTitle" v-if="show">Welcome to my portfolio!</p>
        <p id="homesubhead">My name is James Bell. I am a .NET developer with a passion for coding, learning, and self-improvement.</p>
      </div>
    </transition>

    <b-form inline id="homePageBtnForm">
      <b-button 
        class="homePageBtns" 
        @click="toggleTimeline()" 
        variant="outline-success"
      >
        {{timelineTxt}}
      </b-button>
      <b-button 
        class="homePageBtns" 
        variant="outline-success"
        href="resume.pdf"
        target="_blank"
      >
        See My Resume
      </b-button>
    </b-form>

    <transition
      appear
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutLeft"
    >
      <div v-if="showTimeline == true" id="timelineArea">
        <vue-timeline-update
          :date="new Date('2020')"
          title="April 2020"
          description="Promoted to lead software developer at Delaware Nation Industries"
          category="Work Experience"
          color="blue"
          icon="code"
          key="5"
          thumbnail="coding.png"
          theme="dark"
        />

        <vue-timeline-update
          :date="new Date('2020')"
          title="December 2020"
          description="Earned my certificate of mastery in web development from Oklahoma City Community College"
          category="Certification"
          color="green"
          icon="code"
          key="7"
          thumbnail="college.jpg"
        />

        <vue-timeline-update
          :date="new Date('2020')"
          title="May 2020"
          description="Graduated summa cum laude from American Military University with a BS in IT; concentration on software development"
          category="Education"
          color="orange"
          icon="code"
          key="6"
          thumbnail="college.jpg"
        />

        <vue-timeline-update
          :date="new Date('2019')"
          title="May 2019"
          description="Hired by Delaware Nation Industries to work on Tinker Air Force base as a full-stack .NET developer"
          category="Work Experience"
          color="blue"
          icon="code"
          key="5"
          thumbnail="coding.png"

        />

        <vue-timeline-update
          :date="new Date('2019')"
          title="February 2019"
          description="Earned my CompTIA Security+ certification. I passed on the first try!"
          category="Certification"
          color="green"
          icon="code"
          key="4"
          thumbnail="security.png"
        />

        <vue-timeline-update
          :date="new Date('2018')"
          title="December 2018"
          description="Hired by Rome Research Corp. to work on Tinker Air Force base as a client system support technician"
          category="Work Experience"
          color="blue"
          icon="code"
          key="3"
          thumbnail="IT.png"
        />
        
        <vue-timeline-update
          :date="new Date('2018')"
          title="December 2018"
          description="Graduated from Oklahoma City Community College with an associate in applied science in Computer Science; computer programming minor"
          category="Education"
          color="orange"
          icon="code"
          key="2" 
          thumbnail="college.jpg"         
        />

        <vue-timeline-update
          :date="new Date('2015')"
          title="December 2015"
          description="Enlisted in the Army National Guard as a network cable systems installer/maintainer"
          category="Work Experience"
          color="turquoise"
          icon="code"
          key="1"
          thumbnail="army.png"
        />
      </div> 
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      showTimeline: false,
      timelineTxt: "View a timeline of my IT experience"
    };
  },
  methods: {
    toggleTimeline() {
      var vm = this;
      vm.showTimeline = !vm.showTimeline;

      if (vm.showTimeline == true) {
        vm.timelineTxt = "Hide my timeline 😞"
      }

      else {
        vm.timelineTxt = "View a timeline of my IT experience"
      }
    }
  },
  mounted() {
    var vm = this;
    vm.show = true;
  },
};
</script>

<style>
@import "../../node_modules/animate.css/animate.css";

#homesubhead {
  text-align: center;
}

#homePageBtnForm {
  justify-content: center;
  margin: 3% 0% 3% 0%;
}

.homePageBtns {
  margin: 0% 1% 1% 1%;
}

.gb-vue-timeline-update__title {
  color: black;
}

.gb-vue-timeline-update__description {
  color: #212529 !important;  
}

.gb-vue-timeline-update__bullet {
  margin-top: 2px !important;
}

#timelineArea .gb-vue-timeline-update{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", 
    Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", 
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
  margin-left: 15%;
  margin-right: 15%;
}

.gb-vue-timeline-update__thumbnail {
  width: 100px;
  height: 100px;
  box-shadow: none !important;
  border: none !important;
}

</style>
