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
          axios(`${process.env.VUE_APP_API_URL}/api/tickets`, {
            method: 'GET'
          })
            .then(res => {
              resolve(res);
            })
            .catch(err => {
              reject(err);
            })
        })
      },
      changeTicketStatus(taskId, data) {
        return new Promise((resolve, reject) => {
          axios(`${process.env.VUE_APP_API_URL}/api/tickets/complete/${taskId}`, {
            method: 'POST',
            data: data
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