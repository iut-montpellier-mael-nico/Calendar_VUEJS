<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="input-holder">
        <input
          type="text"
          placeholder="Nom de l'évènement"
          v-model="event.title"
        />
      </div>
      <div class="input-holder">
        <date-picker :placeholder="'Date de début'" v-model="event.start" />
      </div>
      <div class="input-holder">
        <date-picker :placeholder="'Date de fin'" v-model="event.end" />
      </div>
      <div class="input-holder">
        <textarea
          placeholder="Description de l'évènement"
          rows="4"
          v-model="event.description"
        ></textarea>
      </div>
      <div class="input-holder">
        <button type="submit">Valider</button>
      </div>
    </form>
  </div>
</template>

<script>
import DatePicker from "vuejs-datepicker";
import format from "date-fns/format";
import { addUnEvent } from "../../helpers/apiHelper";

export default {
  name: "EventForm",
  data() {
    return {
      event: {
        title: "",
        start: "",
        end: "",
        description: ""
      }
    };
  },
  methods: {
    handleSubmit: async function() {
      const dateDebut = format(this.event.start, "DD-MM-YYYY");
      const dateFin = format(this.event.end, "DD-MM-YYYY");
      const event = {
        ...this.event,
        start: dateDebut,
        end: dateFin
      };
      addUnEvent(
        1,
        this.event.title,
        this.event.start,
        this.event.end,
        this.event.description,
        1
      );
      console.log(event);
      this.resetValues();
    },
    resetValues() {
      this.event = {
        title: "",
        start: "",
        end: "",
        description: ""
      };
    }
  },
  components: {
    DatePicker
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}

.input-holder {
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
}

.vdp-datepicker {
  width: 100%;
}

.vdp-datepicker > div > input {
  width: 77%;
}

.input-holder > button {
  justify-self: center;
  padding: 12px 25px;
  border-radius: 0;
  text-transform: uppercase;
  font-weight: 600;
  background: orangered;
  color: white;
  border: none;
  font-size: 14px;
  letter-spacing: -0.1px;
  cursor: pointer;
}

input,
textarea {
  padding: 12px 15px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 0;
  width: 70%;
  opacity: 0.8;
  font-size: 15px;
  font-weight: normal;
}

input:focus,
textarea:focus,
button:focus {
  border: 2px solid orangered;
  outline: none;
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.2);
}
</style>
