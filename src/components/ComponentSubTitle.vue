<template>
  <h2>{{fieldVal}}</h2>
</template>

<script>
export default {
  name: "ComponentSubTitle",
  props: {
    fieldVal:{
      type: String,
      required: true
    }
  }
}
</script>
