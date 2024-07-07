export default function isACpf (field) {
    const cpf = field.value.replace(/\.|-/g, "")
    if (verifyRepeatedNumbers(cpf) || validFirstNumber(cpf) || validSecondNumber(cpf)) {
        field.setCustomValidity('O CPF não é válido')
    } 
}

function verifyRepeatedNumbers (cpf) {
    const numbersRepeateds = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ]

    return numbersRepeateds.includes(cpf)
}

function validFirstNumber(cpf) {
    let sum = 0;
    let multiplier = 10;

    for (let length = 0; length < 9; length++) {
        sum += parseInt(cpf[length]) * multiplier; // Convertendo para número inteiro
        multiplier--;
    }

    sum = (sum * 10) % 11;

    if (sum == 10 || sum == 11) {
        sum = 0;
    }

    return sum !== parseInt(cpf[9]); // Convertendo para número inteiro
}

function validSecondNumber(cpf) {
    let sum = 0;
    let multiplier = 11;

    for (let length = 0; length < 10; length++) {
        sum += parseInt(cpf[length]) * multiplier; // Convertendo para número inteiro
        multiplier--;
    }

    sum = (sum * 10) % 11;

    if (sum == 10 || sum == 11) {
        sum = 0;
    }

    return sum !== parseInt(cpf[10]); // Convertendo para número inteiro
}