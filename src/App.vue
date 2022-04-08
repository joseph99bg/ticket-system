<template>
  <div id="app">
    <!-- <Sidebar v-if="currentRoute != 'Login' && currentRoute != 'Register'"/> -->
    <div class="content">
      <router-link to="/">Register</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/my-profile">My Profile</router-link>
      <router-link to="/tickets">Tickets</router-link>
      <router-link to="/categories">Categories</router-link>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'

  export default {
    components: {
      Sidebar
    },
    computed: {
      currentRoute() {
        return this.$route.name;
      }
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    font-family: 'Calibri';
  }
  body {
    margin: 0;
  }

  #app {
    display: flex;
    min-height: 100vh;
  }

  a {
    margin: 0 10px;
  }

  .popup {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .popup-box {
    background: white;
    border-radius: 10px;
    min-width: 100px;
    min-height: 100px;
    padding: 20px;
  }

  .popup-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .popup-header h4 {
    margin: 0;
  }
</style>
