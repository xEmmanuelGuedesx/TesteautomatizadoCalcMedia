// function calculo() {
//     var nota1 = +document.getElementById('n1').value;
//     var nota2 = +document.getElementById('n2').value;
//     var nota3 = +document.getElementById('n3').value;
    
//     var resultado = parseFloat((nota1 + nota2 + nota3) / 3);
    
//     document.getElementById('media').setAttribute("value", resultado);
     
    
    
// }


var nota1 = 10;
var nota2 = 9;
var nota3 = 7;
var media = (nota1 + nota2 + nota3) /3;

describe("Obtendo Valores", () =>{

it("Nota 1",()=>{

    expect(nota1).toBe(10)

}) ;   

it("Nota 2",()=>{

    expect(nota2).toBe(9)

});    

it("Nota 3",()=>{

    expect(nota3).toBe(7)

}) ;   

it("Media das Notas",()=>{

    expect(media).toBe(8.666666666666666)

});    

});




