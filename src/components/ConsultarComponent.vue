<template>
  <h4>Componente consultar</h4>

<table class="table" >
  <thead>
    <tr>
      
      <th scope="col">Email</th>
      <th scope="col">Teléfono</th>
      <th scope="col">Curso</th>
      <th scope="col">Aceptar</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="registro in registros" :key="registro.email">
    
      <td>{{ registro.email }}</td>
      <td>{{ registro.tlf }}</td>
      <td>{{ registro.curso }}</td>
      <td>{{ registro.acepto }}</td>
    </tr>

  </tbody>
</table>



</template>

<script>
import DataService from "../services/DataServices";
export default {
  setup() {},
  data() {
    return {
      registros: [],
    };
  },
  methods: {
    onDataChange(items) {
      let _registros = [];
      items.forEach((item) => {
        let data = item.data();
        _registros.push({
          email: data.email,
          tlf: data.tlf,
          curso: data.curso,
          acepto: data.acepto,
        });
      });
      this.registros = _registros;
      console.log(this.registros);
    },
  },
  mounted() {
    DataService.getAll().onSnapshot(this.onDataChange);
  },
};
</script>