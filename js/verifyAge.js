export default function isOfLegalAge(field) {
    const birthDate = new Date(field.value)
    if (!validAge(birthDate)) {
        field.setCustomValidity('Você deve ser maior que 18 anos para se cadastrar.')
    } else {
        field.setCustomValidity('')
    }
}

function validAge(date) {
    const currentDate = new Date()
    const dateOver18 = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate())

    return currentDate >= dateOver18
}