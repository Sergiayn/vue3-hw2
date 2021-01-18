<template>
  <p>{{fieldVal}}</p>
</template>

<script>
export default {
  name: "ComponentText",
  props: {
    fieldVal:{
      type: String,
      required: true
    }
  }
}
</script>
