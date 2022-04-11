<template>
  <div class="my-profile" v-if="profile">
    <div class="image-holder">
      <img
        v-if="profile.avatar || imageToUpload"
        :src="profile.avatar ? 'http://taskapi.digitalsliven.com' + profile.avatar : imageToUpload"
      >
      <img v-else src="@/assets/profile-image.png">
      <input type="file" @change="addFile($event)" accept="image/*">
    </div>
    <div class="form-holder">
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
        requestSuccess: false,
        imageToUpload: null
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
      addFile(event) {
        const file = event.target.files[0];

        const pattern = /image-*/;
        if (!file.type.match(pattern)) {
          alert('Invalid format');
          return;
        }

        const reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
      },
      _handleReaderLoaded(e) {
        const reader = e.target;
        this.imageToUpload = reader.result;

        const dataToSend = {
          name: this.profile.name,
          email: this.profile.email,
          avatar: this.imageToUpload
        }

        this.editProfile(dataToSend);
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
  .my-profile {
    display: flex;
  }

  .image-holder {
    margin-top: 50px;
    padding-right: 50px;
  }

  .image-holder img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

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