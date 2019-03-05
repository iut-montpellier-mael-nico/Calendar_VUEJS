<template>
  <div id="app">
    <div id="nav"><router-link to="/">Accueil</router-link> |

        <b-button v-b-modal.modalConnect>Se connecter </b-button> |
        <b-button v-b-modal.modalPrevent>S'enregistrer </b-button>
    </div>



    <div>
      <!-- Modal Component -->
      <b-modal
        id="modalConnect"
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
      <b-modal
        id="modalRegister"
        ref="modal"
        title="S'enregistrer'"
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
  </div>
</template>

<script>
export default {
  name: "navBar",
  data: function() {
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
      this.names.push(this.name + " " + this.password);
      this.clear();
      this.$nextTick(() => {
        // Wrapped in $nextTick to ensure DOM is rendered before closing
        this.$refs.modal.hide();
      });
    }
  }
};
</script>

<style scoped></style>
