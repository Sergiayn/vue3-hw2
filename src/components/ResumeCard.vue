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
      baseUrl: 'https://vue3-21-default-rtdb.europe-west1.firebasedatabase.app',
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
      const response = await axios.post('records.json',data)
      if(response.data) {
        data.name = response.data.name
      }
      this.records.push(data)
    },
    async loadRecords(){
      const response = await axios.get('records.json')

      if(response.data) {
        this.records = []
        for (const [key, value] of Object.entries(response.data)) {
          value.name = key
          this.records.push(value)
        }
      }
    },
    async deleteItem(data) {
      let removeIndex = -1
      this.records.filter((item,idx) => {if(data === item.name) {removeIndex = idx}})
      this.records.splice(removeIndex, 1);
      await axios.delete(`records/${data}.json`)
    }

  }
}

</script>
