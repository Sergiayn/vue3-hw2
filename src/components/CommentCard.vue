<template>
  <p>
    <button class="btn primary" @click.prevent="loadComments">Загрузить комментарии</button>
  </p>
  <div class="card" v-if="comments.length">
    <h2>Комментарии</h2>
    <ul class="list">
      <li class="list-item" v-for="comment in comments" :key="comment.id">
        <div>
          <h3>{{comment.name}}</h3>
          <p><strong>{{comment.email}}</strong></p>
          <small>{{comment.body}}</small>
        </div>
      </li>
    </ul>
  </div>
  <div class="loader" v-if="activeLoader"></div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CommentCard',
  data() {
    return {
      activeLoader: false,
      baseUrl: process.env.VUE_APP_COMMENT_BASE_URL,
      comments: []
    }
  },
  methods: {
    async loadComments() {
      this.activeLoader = true

      try {
        const response = await axios
            .get(this.baseUrl + 'comments?_limit=42')
            .catch(() => {throw new Error('Error in file CommentCard in method loadComments')})
        this.comments = response.data
      } catch (e) {console.warn(e.message)}

      this.activeLoader = false
    }
  }
}
</script>
