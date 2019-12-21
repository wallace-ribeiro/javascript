<template>
  <div>
    <h3>HOSPITAIS</h3>
    <div v-for="hospital in hospitais">
       
      <div>
        <hr>
           <div>Nome: {{hospital.nome}}</div>
           <div><img v-bind:src="hospital.imagem" /></div>
           <div>Descrição: {{hospital.descricao}}</div>
           <div>Endreço: {{hospital.endereco}}</div>
        </hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hospitais',
  computed: {
      hospitais() {
        return this.$store.getters.getHospitais
      }
  },
  mounted() {
    this.$store.dispatch('loadHospitais')
  }
}
</script>