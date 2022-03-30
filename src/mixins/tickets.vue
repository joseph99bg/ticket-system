<script>
  import axios from 'axios'
  import authStore from '@/store/auth.js'

  if (authStore.userToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authStore.userToken}`;
  }

  export default {
    methods: {
      getTickets() {
        return new Promise((resolve, reject) => {
          axios('http://taskapi.digitalsliven.com/api/tickets', {
            method: 'GET'
          })
            .then(res => {
              resolve(res);
            })
            .catch(err => {
              reject(err);
            })
        })
      }
    }
  }
</script>