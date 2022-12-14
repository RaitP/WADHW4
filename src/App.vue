<template>
  <main-header></main-header>
  <router-view />
  <main-footer></main-footer>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
  import MainFooter from './components/MainFooter.vue';
  export default {
    name: 'App',
    components: {MainHeader, MainFooter},
    methods: {

    },
    computed: {

    }
  }
</script>

<style>
body{ 
  min-height:100vh; 
  margin:0; 
  background-color: rgb(233, 233, 233);
  position:relative;
}

footer {
  position: absolute;
}

#app {
  min-height: 100%;
}
</style>
