<template>
  <div class="avatar">
    <img :src="fieldVal" alt="img">
  </div>
</template>

<script>
export default {
  name: "ComponentAvatar",
  props: {
    fieldVal:{
      type: String,
      required: true
    }}
}
</script>

<style scoped>
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