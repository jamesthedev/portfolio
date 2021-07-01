<template>
  <div id="homePage" class="appPage">
    <transition
      appear
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <div>
        <p id="appTitle" v-if="show">Welcome to my portfolio!</p>
        <p id="homesubhead">My name is James Bell. I am a .NET developer with a passion for coding, learning, and self-improvement.</p>
      </div>
    </transition>

      <div id="btnArea">
        <b-button 
          class="homePageBtns" 
          @click="toggleTimeline()" 
          variant="outline-success"
          id="timelineBtn"
        >
          {{timelineTxt}}      
        </b-button>    

        <b-button 
          class="homePageBtns" 
          variant="outline-success"
          @click="showResume()"
        >
          See My Resume
        </b-button>
      </div>

    <transition
      appear
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutLeft"
    >
      <div v-if="showTimeline == true" id="timelineArea">
        <vue-timeline-update
          :date="new Date(2021, 4)"
          title="April 2021"
          description="Promoted to lead software developer at Delaware Nation Industries"
          category="Work Experience"
          color="blue"
          icon="code"
          key="8"
          thumbnail="coding.png"
          theme="dark"
        />

        <vue-timeline-update
          :date="new Date(2020, 11)"
          title="December 2020"
          description="Earned my certificate of mastery in web development from Oklahoma City Community College"
          category="Certification"
          color="green"
          icon="code"
          key="7"
          thumbnail="college.jpg"
        />

        <vue-timeline-update
          :date="new Date(2020, 4)"
          title="May 2020"
          description="Graduated summa cum laude from American Military University with a BS in IT; concentration on software development"
          category="Education"
          color="orange"
          icon="code"
          key="6"
          thumbnail="college.jpg"
        />

        <vue-timeline-update
          :date="new Date(2019, 4)"
          title="May 2019"
          description="Hired by Delaware Nation Industries to work on Tinker Air Force base as a full-stack .NET developer"
          category="Work Experience"
          color="blue"
          icon="code"
          key="5"
          thumbnail="coding.png"
        />

        <vue-timeline-update
          :date="new Date(2019, 1)"
          title="February 2019"
          description="Earned my CompTIA Security+ certification. I passed on the first try!"
          category="Certification"
          color="green"
          icon="code"
          key="4"
          thumbnail="security.png"
        />

        <vue-timeline-update
          :date="new Date(2018, 11)"
          title="December 2018"
          description="Hired by Rome Research Corp. to work on Tinker Air Force base as a client system support technician"
          category="Work Experience"
          color="blue"
          icon="code"
          key="3"
          thumbnail="IT.png"
        />
        
        <vue-timeline-update
          :date="new Date(2018, 11)"
          title="December 2018"
          description="Graduated from Oklahoma City Community College with an associate in applied science in Computer Science; computer programming minor"
          category="Education"
          color="orange"
          icon="code"
          key="2" 
          thumbnail="college.jpg"         
        />

        <vue-timeline-update
          :date="new Date(2015, 11)"
          title="December 2015"
          description="Enlisted in the Army National Guard as a network cable systems installer/maintainer"
          category="Work Experience"
          color="turquoise"
          icon="code"
          key="1"
          thumbnail="army.png"
        />    
        <b-button 
          class="homePageBtns" 
          id="scrollBtn"
          @click="scrollToTop()" 
          variant="outline-success"
        >
        Scroll to top
        </b-button>
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
        vm.timelineTxt = "Hide my timeline 😞";

        //wait for timeline to appear before scrolling, otherwise the scrolling isn't smooth
        vm.$nextTick(() => {
          this.$SmoothScroll(document.getElementById("timelineBtn"), 600);
        });
      }

      else {
        vm.timelineTxt = "View a timeline of my IT experience"
      }
    },
    showResume() {
      //href on the resume button was messing up flexbox for some reason. couldn't figure it out, so i'm just going to do the same thing in js.
      window.open("resume.pdf", "_blank");
    },
    scrollToTop() {
      this.$SmoothScroll(0);
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
  font-size: 1.2em;
}

#homePageBtnForm {
  justify-content: center;
  margin: 3% 0% 3% 0%;
}

.homePageBtns {
  margin: 0% 1% 1% 1%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}

.gb-vue-timeline-update__title {
  color: black;
}

.gb-vue-timeline-update__description {
  color: #212529 !important;  
}

.gb-vue-timeline-update {
  padding: 3px 0px 0px 4px;
}

#timelineArea .gb-vue-timeline-update{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", 
    Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", 
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
}

.gb-vue-timeline-update__thumbnail {
  width: 100px;
  height: 100px;
  box-shadow: none !important;
  border: none !important;
}

#btnArea {
  margin: 10% 0% 10% 0%;
}

#appTitle {
  text-align: center;
  font-size: 3em;
  margin-top: 20px;
}

html {
  scroll-behavior: smooth;
}

#scrollBtn {
  margin-top: 4%;
  margin-bottom: 4%;
}

@media (max-width: 720px) {
  #appTitle {
    font-size: 2.5em;    
  }

  #homesubhead {
    font-size: 1.1em;
  }
  
  #timelineBtn {
    margin-bottom: 7%;
  }

  #scrollBtn {
    margin-bottom: 15%;
  }

  .appPage {
    margin-left: 1%;
    margin-right: 1%;
  }
}
</style>
