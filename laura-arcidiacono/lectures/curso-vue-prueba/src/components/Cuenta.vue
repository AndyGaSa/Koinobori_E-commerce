<template>
  <h2>Tipo de cuenta: {{cuenta}} </h2>
  <h2>Saldo: {{saldo}}</h2>
  <h2>Cuenta {{estado ? 'Activa' : 'Desactivada'}} </h2>
  <div v-for="(servicio, index) in servicios" :key="index" >
      {{index + 1}} - {{ servicio }}
  </div>
  <AccionSaldo 
  texto="Aumentar Saldo" 
  @accion="aumentarSaldo"
  />
  <AccionSaldo 
  texto="Disminuir Saldo" 
  @accion="disminuirSaldo"
  :desactivar="desactivar"
  />
</template>

<script>
import AccionSaldo from './AccionSaldo.vue';
export default {
    components: {
        AccionSaldo
    },
    data() {
        return {
            saldo: 1000,
            cuenta: 'Visa',
            estado: true,
            servicios: ['Giro', 'Abono', 'Transferencia'],
            desactivar: false
        }
    },
    methods: {
        aumentarSaldo() {
            this.saldo = this.saldo + 100
            this.desactivar = false
        },
        disminuirSaldo() {
            if (this.saldo === 0) {
                this.desactivar = true;
                alert('No hay saldo')
                return
            }
            this.saldo = this.saldo - 100
        },

    },

}
</script>

<style>

</style>