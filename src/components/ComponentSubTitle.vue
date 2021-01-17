<template>
  <button class=" btn-del" @click.prevent="this.$emit('deleteItem', this.itemName)">
    <img src="https://img.icons8.com/plasticine/344/filled-trash.png" alt="delete item">
  </button>
  <h2>{{fieldVal}}</h2>
</template>

<script>
export default {
  name: "ComponentSubTitle",
  emits: {
    deleteItem : {
      type: String,
      required: true
    }
  },
  props: {
    fieldVal:{
      type: String,
      required: true
    },
    itemName:{
      type: String,
      required: true
    }
  }
}
</script>
