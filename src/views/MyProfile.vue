<template>
  <div class="my-profile">
    <form @submit.prevent="editProfileHandler()" v-if="profile">
      <div class="field">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="profile.name">
      </div>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="profile.email">
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="profile.password">
      </div>
      <div class="field">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="profile.phone">
      </div>
      <button>Update profile</button>
      <div class="success-message" v-if="requestSuccess">
        Your profile has been updated successfully!
      </div>
    </form>
    <button @click="logoutHandler()">Logout</button>
  </div>
</template>

<script>
  import userMixin from '@/mixins/user'
  import authMixin from '@/mixins/auth'

  export default {
    name: 'MyProfile',
    mixins: [userMixin, authMixin],
    data() {
      return {
        profile: null,
        requestSuccess: false
      }
    },
    methods: {
      getProfileHandler() {
        this.getProfile()
          .then(res => {
            this.profile = res.data.user;
          })
      },
      editProfileHandler() {
        let dataToSend = {
          ...this.profile,
          workspace_id: 199,
          workspace_language: 'bg'
        }

        this.editProfile(dataToSend)
          .then(() => {
            this.requestSuccess = true;
            setTimeout(() => {
              this.requestSuccess = false;
            }, 5000);
          })
      },
      logoutHandler() {
        this.logout();
      }
    },
    mounted() {
      this.getProfileHandler();
    }
  }
</script>

<style scoped>
  form {
    width: 800px;
    margin: 50px auto;
  }

  .field {
    width: 100%;
    margin-bottom: 20px;
  }

  .field label {
    display: block;
    font-size: 18px;
    margin-bottom: 5px;
  }

  .field input {
    width: 100%;
    font-size: 18px;
    padding: 5px 10px;
  }

  .field-error {
    border-radius: 8px;
    border: 1px solid red;
    background: rgb(255, 235, 235);
    color: red;
    padding: 5px 10px;
    font-size: 18px;
    margin-top: 5px;
    text-align: center;
  }

  button {
    font-size: 25px;
  }

  .success-message {
    border-radius: 8px;
    border: 1px solid rgb(0, 155, 0);
    color: rgb(0, 155, 0);
    background: rgb(223, 255, 223);
    padding: 10px;
    margin: 10px 0;
  }
</style>