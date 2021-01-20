export const formValidator = (value, params) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let errors = []
    let result = {}

    if(value.length < 4) {
        errors.push({
            title:'Поле должно содержать минимум 4 символа',
            type: 'danger'
        });
    }
    if(params.activeType === 'ComponentEmail' && !regexEmail.test(value)){
        errors.push({
            title:'Укажите корректный адрес электронной почты.',
            type: 'warning'
        });
    }
    result.errors = errors
    result.status = !errors.length
    return result
}