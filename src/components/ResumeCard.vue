<template>
  <div class="container column">
    <FormCard :typesOfRecord="typesOfRecord" @addItem="addItem"/>
    <div class="card card-w70">
      <ul v-if="records.length" class="component-list">
        <li v-for="record in records" :key="record">
          <component :is="record.activeType" :fieldVal="record.field" :itemName="record.name" @deleteItem="deleteItem"></component>
        </li>
      </ul>
      <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import FormCard from "@/components/FormCard"
import ComponentAvatar from "@/components/ComponentAvatar";
import ComponentEmail from "@/components/ComponentEmail";
import ComponentSubTitle from "@/components/ComponentSubTitle";
import ComponentText from "@/components/ComponentText";
import ComponentTitle from "@/components/ComponentTitle";

export default {
  name: "ResumeCard",
  components: {
    FormCard,
    ComponentAvatar,
    ComponentEmail,
    ComponentSubTitle,
    ComponentText,
    ComponentTitle
  },
  mounted() {
    axios.defaults.baseURL = this.baseUrl
    this.loadRecords()
  },
  data() {
    return {
      baseUrl: process.env.VUE_APP_RESUME_BASE_URL,
      records: [],
      typesOfRecord: {
        ComponentTitle:     'Заголовок',
        ComponentSubTitle:  'Подзаголовок',
        ComponentAvatar:    'Аватар',
        ComponentText:      'Текст',
        ComponentEmail:     'Email',
      }
    }
  },
  methods: {
    async addItem(data){
      try {
        const response = await axios
            .post('records.json',data)
            .catch(() => {throw new Error('Error in file ResumeCard in method addItem')})

        if(response.data) {
          data.name = response.data.name
        }
      } catch (e) {console.warn(e.message)}

      this.records.push(data)
    },
    async loadRecords(){
      try {
        const response = await axios
            .get('records.json')
            .catch(() => {throw new Error('Error in file ResumeCard in method loadRecords')})

        if(response.data) {
          this.records = []
          for (const [key, value] of Object.entries(response.data)) {
            value.name = key
            this.records.push(value)
          }
        }
      } catch (e) {console.warn(e.message)}
    },
    async deleteItem(data) {
      let removeIndex = -1
      const isEqualItem = (element) => element.name === data;
      this.records.findIndex(isEqualItem)
      this.records.splice(removeIndex, 1);
      try {
        await axios
            .delete(`records/${data}.json`)
            .catch(() => {throw new Error('Error in file ResumeCard in method deleteItem')})
      } catch (e) {console.warn(e.message)}

    }

  }
}

</script>
