<template>
  <a :href="'mailto:' + fieldVal">{{fieldVal}}</a>
</template>

<script>
export default {
  name: "ComponentEmail",
  props: {
    fieldVal:{
      type: String,
      required: true
    }
  }
}
</script>
