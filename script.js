
const arraySpesa = ["Latte", "Uova", "Pollo", "Verdura", "Biscotti", "Cereali", "Acqua", "Thè", "Carta igienica", "Detersivi"];
const listaSpesa = document.getElementById("lista");
let i = 0;

while(i < arraySpesa.length){
    listaSpesa.innerHTML += `<li>${arraySpesa[i]}</li>`
    i++
}