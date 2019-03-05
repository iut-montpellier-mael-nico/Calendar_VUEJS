<template>
  <div>
    <router-link to="/event/add">Ajouter un event</router-link>
      <router-link to="/event/add">Supprimer un event</router-link>
    <full-calendar :events="events" />
  </div>
</template>

<script>
import FullCalendar from "vue-fullcalendar";
export default {
  name: "Calendar",
  //props: ['events'],
  components: {
    FullCalendar
  },
  data() {
    return {
      events: [
        {
          title: "event1",
          start: "2018-07-09",
          cssClass: "blue",
          YOUR_DATA: {}
        },
        {
          title: "event2",
          start: "2018-07-10",
          end: "2018-07-13",
          cssClass: ["orange"]
        }
      ]
    };
  }
};
</script>

<style scoped>
.red {
  background: rgb(235, 77, 77) !important;
  color: whitesmoke !important;
}
.blue {
  background: rgb(59, 59, 163) !important;
  color: whitesmoke !important;
}
.orange {
  background: orange !important;
  color: white !important;
}
.green {
  background: rgb(49, 155, 49) !important;
  color: white !important;
}
.blue,
.orange,
.red,
.green {
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
}
.event-item {
  padding: 2px 0 2px 4px !important;
}
</style>
