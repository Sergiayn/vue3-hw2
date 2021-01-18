<template>
  <form class="card card-w30">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="activeType" @change="checkForm">
        <option name="typeOfRecord"
            v-for="(item, ids) in typesOfRecord"
            :value="ids"
            :key="ids"
        >
          {{item}}
        </option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" name="value" rows="3" v-model.trim="field" @input="checkForm"></textarea>
    </div>

    <div class="alert"
         v-for="error in errors"
         :key="error"
         :class="error.type"
    >
      {{error.title}}
    </div>

    <button class="btn primary" :disabled="disableButton" @click.prevent="addItem">
      Добавить
    </button>
  </form>
</template>

<script>
export default {
  name: 'FormCard',
  mounted() {
    this.resetActiveType()
  },
  emits: {addItem: {type: Object,require: true}},
  props: {
    typesOfRecord: {
      type: Object,
      default: function () {return {componentTitle: 'Заголовок'}}
    }
  },
  data() {
    return {
      activeType: null,
      disableButton: true,
      field: '',
      regexEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      errors: [],
    }
  },
  methods: {
    addItem(){
      if(this.checkForm()) {
        const data = {activeType: this.activeType, field:this.field}
        this.$emit('addItem', data)
        this.resetActiveType()
        this.disableButton = true
        this.errors.push({
          title:'Данные успешно добавлены',
          type: 'primary'
        });
        setTimeout(() => {
          this.errors = []
        }, 3000)
      }
    },
    checkForm() {
      this.errors = []

      if(this.field.length < 4) {
        this.errors.push({
          title:'Поле должно содержать минимум 4 символа',
          type: 'danger'
        });
      }
      if(this.activeType === 'ComponentEmail' && !this.regexEmail.test(this.field)){
        this.errors.push({
          title:'Укажите корректный адрес электронной почты.',
          type: 'warning'
        });
      }

      if (this.errors.length) {
        this.disableButton = true
        return false
      } else {
        this.disableButton = false
        return true
      }
    },
    resetActiveType() {
      const index = Object.keys(this.typesOfRecord)[0]
      if(index) {
        this.activeType = index
      }
      this.field = ''
    }
  }
}
</script>
