<template>
  <div id="app">
    <div id="nav"><router-link to="/">Accueil</router-link> |

        <b-button v-b-modal.modalConnect>Se connecter </b-button> |
        <b-button v-b-modal.modalRegister>S'enregistrer </b-button>
    </div>



    <div>
      <!-- Fenetre Modale -->
      <b-modal
        id="modalConnect"
        ref="modal"
        title="Se connecter"
        @ok="validationLoginUser"
        @shown="clear"
      >
        <form @submit.stop.prevent="handleSubmit">
          <b-form-input
            type="text"
            placeholder="Entrez votre identifiant "
            v-model="email"
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
        @ok="validationCreateUser"
        @shown="clear"
      >
        <form @submit.stop.prevent="handleSubmit">
          <b-form-input
            type="text"
            placeholder="Entrez votre identifiant "
            v-model="email"
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
import {seConnecter, createUser} from "../../helpers/apiHelper.js";
export default {
  name: "navBar",
  data: function() {
    return {
      email: "",
      password: "",
      names: []
    };
  },
  methods: {
    clear() {
      this.email = "";
      this.password = "";
    },
    handleOkConnectUser(evt) {
      // Prevent modal from closing
      evt.preventDefault();
      if (!this.email || !this.password) {
        alert("Veuillez remplir tous les champs");
      } else {
        this.validationLoginUser();
      }
    },
    handleOkRegisterUser(evt) {
      // Prevent modal from closing
      evt.preventDefault();
      if (!this.email || !this.password) {
        alert("Veuillez remplir tous les champs");
      } else {
        this.validationCreateUser();
      }
    },
    validationCreateUser() {
      createUser(1, this.email, this.password)
      this.clear();
      this.$nextTick(() => {
        // Wrapped in $nextTick to ensure DOM is rendered before closing
        this.$refs.modal.hide();
      });
    },
    validationLoginUser() {
      seConnecter(this.email, this.password)
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
