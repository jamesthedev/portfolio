<template>
  <div>
    <div>
      <transition
        appear
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
      >
        <p class="pageTitle" v-if="show">Welcome to my portfolio!</p>
      </transition>

      <vue-timeline-update
        :date="new Date('2015')"
        title="December 2015"
        description="Enlisted in the Army National Guard as a network cable systems installer/maintainer"
        thumbnail="../assets/college.jpg"
        icon="code"
        color="turquoise"
      />
      <vue-timeline-update
        :date="new Date('2019')"
        title="December 2018"
        description="Graduated from OCCC with an AAS in Computer Science"
        thumbnail="college.jpg"
        icon="code"
        color="black"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    var vm = this;
    vm.show = true;
  },
};
</script>

<style scoped>
@import "../../node_modules/animate.css/animate.css";

.gb-vue-timeline-update--dark {
  color: black;
}

.gb-vue-timeline-update__right {
  background-image: url("../assets/college.png") !important;
}
</style>
