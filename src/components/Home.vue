<template>
    <div>

<div id="example-3">
  <!--<button @click="show = !show">
    Toggle render
  </button>-->
  <transition
    appear
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOutUp"
  >
    <p class='pageTitle' v-if="show">Welcome to my portfolio!</p>
  </transition>
</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    mounted() {
        var vm = this;
        vm.show = true;
    }
}
</script>

<style scoped>
    @import "../../node_modules/animate.css/animate.css";
</style>