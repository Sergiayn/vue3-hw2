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
  created() {
    axios.defaults.baseURL = this.baseUrl
  },
  data() {
    return {
      activeLoader: false,
      baseUrl: 'https://jsonplaceholder.typicode.com',
      comments: []
    }
  },
  methods: {
    async loadComments() {
      this.activeLoader = true
      const response = await axios.get('comments?_limit=42')

      this.comments = response.data
      this.activeLoader = false
    }
  }
}
</script>
