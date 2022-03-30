<template>
  <div class="tickets">
    Tickets
  </div>
</template>

<script>
  import ticketsMixin from '@/mixins/tickets'

  export default {
    name: 'Tickets',
    mixins: [ticketsMixin],
    methods: {
      getTicketsHandler() {
        this.getTickets();
      }
    },
    mounted() {
      this.getTicketsHandler();
    }
  }
</script>

<style scoped>

</style>