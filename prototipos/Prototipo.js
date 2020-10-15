var controleEntradas = new function(){
   this.elemento = document.getElementById('entradasLista');
   this.entradaLista = ['Salario','Vale alimentação'];

   this.contador = function(data){
      var elemento = hyper 
      document.getElementById("contadorEntradas");
      var name = 'entrada';
      if (data) {
         if (data > 1) {
          name = 'Entradas';
         }
         elemento.innerHTML = data + ' ' + name ;
        } else {
         elemento.innerHTML = 'Sem ' + name;
        }
   };
   this.coletaEntradas = function() {
      var data = '';
      if(this.entradaLista.length>0){
         for(i=0;i<this.entradaLista.length;i++){
            data +='<tr>';
            data += '<td>' + this.entradaLista[i] + '</td>';
            data += '<tr>';
           }
      }
      this.contador(this.entradaLista.length);
      return this.elemento.innerHTML = data;
   };

}
controleEntradas.coletaEntradas();