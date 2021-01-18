<template>
  <ResumeCard/>
  <div class="container"><CommentCard/></div>
</template>

<script>
import CommentCard from "@/components/CommentCard"
import ResumeCard from "@/components/ResumeCard";

export default {
  components: {CommentCard, ResumeCard}
}
</script>
