<template>
  <h3>Iniciar Sesión:</h3>
<p>Rellena los campos para acceder a la tabla de contactos.</p>

  <form @submit.prevent="logear">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="usuario.email"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="usuario.password"
      />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import firebase from "firebase"
export default {
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    logear() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
        .then(()=>{console.log("login ok")})
        .then(()=>{this.$router.replace({ name: "consultar" })});
    },
  },
  setup() {},
};
</script>

<style scoped>
form {
  width: 40%;
  margin: 0 auto;
}
</style>