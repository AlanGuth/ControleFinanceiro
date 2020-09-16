class ano {
     descricao
     listaMes = []
}

insereAno = function(valor, listames){  
   var ano1 = new ano()
   ano1.descricao = valor;
   ano1.listaMes = listames;
alert('Cadastro realizado, Ano: '+ano1.descricao + ', Meses monitorados: ' + ano1.listaMes)
}