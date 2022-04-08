<template>
  <div class="tickets">
    <h1>Tickets</h1>
    <div class="tickets-list">
      <div
        v-for="ticket in tickets"
        :key="ticket.id"
        class="ticket"
      >
        <button @click="completeTaskHandler(ticket)">
          <font-awesome-icon v-if="ticket.status == 0" icon="fa-solid fa-check" />
          <font-awesome-icon v-else icon="fa-solid fa-times" />
          <span v-if="ticket.status == 0">
            Complete
          </span>
          <span v-else>
            Incomplete
          </span>
        </button>
        <span class="status">
          {{ticket.status | statusFormat}}
        </span>
        <span class="ticket-name">
          {{ticket.description}}
        </span>
        <span class="ticket-date">
          {{ticket.created_at | formatDate}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import ticketsMixin from '@/mixins/tickets'

  export default {
    name: 'Tickets',
    mixins: [ticketsMixin],
    data() {
      return {
        tickets: null
      }
    },
    methods: {
      getTicketsHandler() {
        this.getTickets()
          .then(res => {
            this.tickets = res.data.tickets;
          })
      },
      completeTaskHandler(ticket) {
        let dataToSend = {};

        if (ticket.status == 0) {
          dataToSend.status = 1;
        } else {
          dataToSend.status = 0;
        }

        this.changeTicketStatus(ticket.id, dataToSend)
          .then(() => {
            this.getTicketsHandler();
          })
      }
    },
    filters: {
      statusFormat(status) {
        if (status == 0) {
          return 'Incompleted';
        } else {
          return 'Completed';
        }
      }
    },
    mounted() {
      this.getTicketsHandler();
    }
  }
</script>

<style scoped>

</style>