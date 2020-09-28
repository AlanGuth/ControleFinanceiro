class ano {
    descricao
    listaMes = []
}
   var arraymes= [];
arrayDeCheckboxTrue = function(mes){
  arraymes.push(mes); 
}

insereAno = function(valor){  
  var ano1 = new ano()
  ano1.descricao = valor;
  ano1.listaMes = arraymes;
alert('Cadastro realizado, Ano: '+ano1.descricao + ', Meses monitorados: ' + ano1.listaMes)
}