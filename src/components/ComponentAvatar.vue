<template>
  <button class=" btn-del" @click.prevent="this.$emit('deleteItem', this.itemName)">
    <img src="https://img.icons8.com/plasticine/344/filled-trash.png" alt="delete item">
  </button>
  <div class="avatar">
    <img :src="fieldVal" alt="img">
  </div>
</template>

<script>
export default {
  name: "ComponentAvatar",
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

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>