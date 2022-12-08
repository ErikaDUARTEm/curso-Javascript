// Listas, arrays o arreglos
const lista = [1, "hola", true, undefined, null];
const lista1= new Array("chao");
const lista2 = new Array(5);
const lista4 = new Date("20 november 1988");
console.log(lista4);
lista2[0] = "hola"
const lista3 = [lista, lista1, lista2];
console.log(lista);
console.log(lista1);
console.log(lista2); 
console.log(lista3);
//fechas
const date = new Date();
console.log(date);
const dia = date.getDate();
const mes = date.getMonth() + 1;
const año = date.getFullYear();
console.log(dia,mes,año);
