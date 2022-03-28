<script>
  import axios from 'axios'

  export default {
    methods: {
      register(data) {
        return new Promise((resolve, reject) => {
          axios('http://taskapi.digitalsliven.com/api/register', {
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