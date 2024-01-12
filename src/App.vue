<script setup lang="ts">
import AtributoCmp from '@/atributo/components/AtributoCmp.vue'
import { Atributo } from '@/atributo/models/AtributoModel'

const atributos = [
  new Atributo({ nome: 'Força' }),
  new Atributo({ nome: 'Destreza' }),
  new Atributo({ nome: 'Constituição' }),
  new Atributo({ nome: 'Inteligência' }),
  new Atributo({ nome: 'Sabedoria' }),
  new Atributo({ nome: 'Carisma' }),
]

function definirAtributo(valor: number, atributo: Atributo) {
  atributo.valor = valor
  atributo.obterModificador()
}
</script>

<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <AtributoCmp v-for="atributo, i in  atributos " :key="i" :atributo="atributo"
        @update="(valor: number) => definirAtributo(valor, atributo)" />
    </div>
  </div>
</template>

<style scoped></style>
