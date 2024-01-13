<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Atributo } from '@/atributo/models/AtributoModel.ts'

const emit = defineEmits(['update'])
const props = defineProps({
  atributo: Atributo,
  modelValue: Number
})

const id = props.label?.toLowerCase()
const focused = ref(false)
const atributoInput = ref(props.atributo.valor)

function focusInput(e: any) {
  if (e.target.id !== 'modificadorInput')
    atributoInput.value.focus()
}

onMounted(() => {
  document.addEventListener('click', (e: any) => {
    focused.value = e.target.id === id || e.target.id === id + '-input'
  })
})
</script>

<template>
  <div class="py-5">
    <div :class="{
      'input atributo-container': true,
      'focused': focused
    }" @click="focusInput" :id="id">
      <label>{{ props.atributo.nome }}</label>
      <input class="border-none" ref="atributoInput" :id="id + '-input'" placeholder="atributo" v-mask="'##'"
        @input="emit('update', $event.target.value)" />
      <input id="modificadorInput" class="atributo-valor-container" placeholder="mod" readonly :value="props.atributo.modificador" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.atributo-container {
  width: 100px;
  position: relative;
  height: 100px;
  display: flex;
  justify-content: center;

  label {
    position: absolute;
    font-size: 13px;
    top: -10px;
    left: center;
    background-color: white;
    padding: 0 5px;
    z-index: 99;
    font-weight: 500;
  }

  input {
    max-width: 50px;
    text-align: center;
  }

  .atributo-valor-container {
    position: absolute;
    top: 70px;
    left: center;
    border: solid 1px hsl(0, 0%, 71%);
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

}

.atributo-valor-container:focus,
.focused,
.focused:hover {
  outline: none;
  border-color: hsl(229, 53%, 53%);
  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);
}
</style>