let titulo = document.querySelector('.titulo')
titulo.textContent = 'Alterando o título'

let pacientes = document.querySelectorAll(".paciente")

for (i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]

  let tdPeso = paciente.querySelector(".info-peso")
  let tdAltura = paciente.querySelector(".info-altura")
  let tdImc = paciente.querySelector(".info-imc")
  let peso = tdPeso.textContent
  let altura = tdAltura.textContent

  let imc = peso / (altura * altura)

  let checkPeso = true
  let checkAltura = true

  if (peso < 0 || peso >= 500) {
    console.log("Peso inválido")
    checkPeso = false
    tdImc.textContent = "Peso inválido!"
  }
  if (altura < 0 || altura >= 3) {
    console.log("Altura Inválida")
    checkAltura = false
    tdImc.textContent = "Altura Inválida"
  }
  if (checkAltura && checkPeso) {
    tdImc.textContent = imc.toFixed(2)
  }
}


