<template>
  <li>
    <input
      v-item-focus="itemEditable"
      type="text"
      :value="itemName"
      @input="$emit('update:itemName', $event.target.value)"
      @blur="handleInputBlur"
      @keyup.enter="handleInputKeyupEnter"
      @keyup.esc="handleInputKeyupEsc"
    />
  </li>
</template>

<script>
export default {
  directives: {
    'item-focus': (el, binding) => {
      if (binding.value) el.focus()
    }
  },
  setup(props, { emit }) {
    function handleInputBlur() {
      emit('handle-input-blur');
    }
    function handleInputKeyupEnter() {
      emit('handle-input-keyup-enter');
    }
    function handleInputKeyupEsc() {
      emit('handle-input-keyup-esc');
    }
    return {
      handleInputKeyupEsc,
      handleInputBlur,
      handleInputKeyupEnter
    }
  }
}
</script>