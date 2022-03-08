<template>

  <form @submit.prevent="guardar">
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
        v-model="registro.email"
      />
      <div id="emailHelp" class="form-text">Contactaremos por correo.</div>
    </div>
    <div class="mb-3">
      <label for="tlf" class="form-label">Teléfono</label>
      <input
        type="tel"
        class="form-control"
        id="tlf"
        pattern="[0-9]{9}"
        v-model="registro.tlf"
      />
    </div>
    <div class="mb-3">
      <label for="comentarios" class="form-label">Comentarios</label>
      <input
        type="textarea"
        class="form-control"
        id="comentarios"
        v-model="registro.comentarios"
      />
    </div>
    <label for="">Elige una categoria : </label>
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="registro.curso"
    >
      
      <option value="estudiante">estudiante</option>
      <option value="profesor">profesor</option>
      <option value="desarrollador">desarrollador</option>
      <option value="parado">parado</option>
    </select>
    <div class="mb-3 form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="exampleCheck1"
        v-model="registro.acepto"
      />
      <label class="form-check-label" for="exampleCheck1"
        >Acepto
        <a
          target="blank"
          href="https://www.aepd.es/es/politica-de-privacidad-y-aviso-legal"
          >politica de privacidad</a
        >
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Registro</button>
  </form>
</template>

<script>
import DataService from "../services/DataServices";
export default {
  data() {
    return {
      registro: {
        email: "",
        tlf: "",
        curso: "",
        comentarios: "",
        acepto: false,
      },
    };
  },
  methods: {
    guardar() {
      var data = {
        email: this.registro.email,
        tlf: this.registro.tlf,
        curso: this.registro.curso,
        comentarios: this.registro.comentarios,
        acepto: this.registro.acepto,
      };
      DataService.create(data).then(() => {
        alert("registro guardado");
      });
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