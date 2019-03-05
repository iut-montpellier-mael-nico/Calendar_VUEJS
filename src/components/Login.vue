<template>
  <div>
    <b-button v-b-modal.modalPrevent>Launch demo modal</b-button>

    <!-- Main UI -->
    <div class="mt-3 mb-3">
      Submitted Names:
      <ul>
        <li v-for="n in names">{{ n }}</li>
      </ul>
    </div>

    <!-- Modal Component -->
    <b-modal
      id="modalPrevent"
      ref="modal"
      title="Se connecter"
      @ok="handleOk"
      @shown="clear"
    >
      <form @submit.stop.prevent="handleSubmit">
        <b-form-input
          type="text"
          placeholder="Entrez votre identifiant "
          v-model="name"
        />
        <b-form-input
          type="password"
          placeholder="Entrez votre mot de passe"
          v-model="password"
        />
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Login",
    data: function () {
        return {
            name: "",
            password: "",
            names: []
        };
    },
  methods: {
    clear() {
      this.name = "";
      this.password = "";
    },
    handleOk(evt) {
      // Prevent modal from closing
      evt.preventDefault();
      if (!this.name) {
        alert("Please enter your name");
      } else {
        this.handleSubmit();
      }
    },
    handleSubmit() {
      this.names.push(this.name + " "+this.password);
      this.clear();
      this.$nextTick(() => {
        // Wrapped in $nextTick to ensure DOM is rendered before closing
        this.$refs.modal.hide();
      });
    }
  }
};
</script>
