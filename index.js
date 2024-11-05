function result() {

const criptoName = document.getElementById("criptoName").value
const invested = parseFloat(document.getElementById('invested').value)
const percentage = parseFloat(document.getElementById('percentage').value)


if (isNaN(invested) || isNaN(percentage)) {
    alert("Por favor, insira valores válidos para o investimento e porcentagem!")
    return
}

const profitLoss = invested * (percentage / 100)

if (profitLoss > 0) {
    alert(`Parabéns! Você está com $${profitLoss.toFixed(2)} de lucro no ativo ${criptoName}`)
    window.open('https://www.youtube.com/watch?v=Bgqk6t9Be1Q&ab_channel=K3VINITTY')
} else {
    alert(`Vish! Você está com $${profitLoss.toFixed(2)} de perda no ativo ${criptoName}`)
    window.open('https://www.youtube.com/shorts/oWeAMhXjMg4')
}
}