let horas=prompt('Ingrese horas extras');
let categorías=prompt('Ingrese la categoría');
let salario=prompt('Ingrese el salario');
let precio;
horas= parseInt(horas);
categorías=parseInt(categorías);
salario=parseInt(salario);


switch (categorías) {
  case 1:
    precio=38;
    break;
  case 2:
    precio=50;
    break;
  case 3:
    precio=30;
    break;
  case 4:
    precio=0;
    break;

}

if (horas > 30){
   salario = salario + (30 * precio);
}

else {
    salario = salario + (horas * precio);
}
console.log(salario);