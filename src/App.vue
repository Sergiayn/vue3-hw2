<template>
  <div class="container column">
    <FormCard :typesOfRecord="typesOfRecord" @addItem="addItem"/>
    <div class="card card-w70">
      <template v-if="records.length">
        <component v-for="record in records"
                   :is="record.activeType"
                   :fieldVal="record.field"
                   :key="record"
        ></component>
      </template>
      <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
    </div>
  </div>

  <div class="container">
    <CommentCard/>
  </div>
</template>

<script>
import CommentCard from "@/components/CommentCard"
import FormCard from "@/components/FormCard"
import ComponentAvatar from "@/components/ComponentAvatar";
import ComponentEmail from "@/components/ComponentEmail";
import ComponentSubTitle from "@/components/ComponentSubTitle";
import ComponentText from "@/components/ComponentText";
import ComponentTitle from "@/components/ComponentTitle";

export default {
  components: {
    CommentCard,
    FormCard,
    ComponentAvatar,
    ComponentEmail,
    ComponentSubTitle,
    ComponentText,
    ComponentTitle
  },
  data() {
    return {
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
    addItem(data){
      this.records.push(data)
    }
  }
}
</script>
