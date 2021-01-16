<template>
  <h1>{{fieldVal}}</h1>
</template>

<script>
export default {
  name: "ComponentTitle",
  props: {
    fieldVal:{
      type: String,
      required: true
    }}
}
</script>
