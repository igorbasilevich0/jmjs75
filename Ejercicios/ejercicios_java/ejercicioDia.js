let diasemana = prompt("Introduce del día de la semana : ");
diasemana=diasemana.toUpperCase();
 console.log(diasemana);
let result="";
const dia=document.getElementById("diasemana");

switch(diasemana){
    case "LUNES":
        result= "Día de la setmana : 1";  

break;

    case "MARTES":

result= "Día de la setmana : 2";
break;
    case "MIERCOLES":

result="Día de la setmana : 3";
break;
    case "JUEVES":
result="Día de la setmana : 4";
break;
    case "VIERNES":
result="Día de la setmana : 5";
break;
    case "SABADO":
result = "Dia de la setmana : 6";
break;
    case "DOMINGO":
result = "Dia de la setmana : 7";
break;
default:
alert("Se ha acabado");
};

dia.innerHTML=result;
