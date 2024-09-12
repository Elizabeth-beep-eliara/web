/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
  
 $(document).on("ready",inicio);
 function inicio() {
     $("#boton1").on("click", function(){
          var cantidad = parseInt($('#numero').val());
            var m = 1;
            var mu = 2;
            var mul = 3;
            var mult = 4;
            var multi = 5;
            var multip = 6;
            var multipl = 7;
            var multipli = 8;
            var multiplic = 9;
            var multiplica = 10;
            var multiplicad = 11;
            var multiplicado = 12;
            
            var tabla = $('#multiplication-table tbody');
            if (isNaN(cantidad) || cantidad < 1) {
                    alert('Por favor, introduce un número válido. Introdusca un numero a partir del 1 , Gracias');
                    return;
                }
            for (var i = 1; i <= cantidad; i++) {
                var r = m * i;
                var re = mu * i;
                var res = mul * i;
                var resu = mult * i;
                var resul = multi * i;
                var result = multip * i;
                var resulta = multipl * i;
                var resultad = multipli * i;
                var resultado = multiplic * i;
                var resultados = multiplica * i;
                var resultadosu = multiplicad * i;
                var resultadosun = multiplicado * i;
                
                
                var fila = $('<tr></tr>');
                
                fila.append('<td>' + m + ' x ' + i + ' = '+ r +'</td>');
                fila.append('<td>' + mu+ ' x ' + i + ' = '+ re +'</td>');
                fila.append('<td>' + mul + ' x ' + i + ' = '+ res +'</td>');
                fila.append('<td>' + mult + ' x ' + i + ' = '+ resu +'</td>');
                fila.append('<td>' + multi + ' x ' + i + ' = '+ resul +'</td>');
                fila.append('<td>' + multip + ' x ' + i + ' = '+ result +'</td>');
                fila.append('<td>' + multipl + ' x ' + i + ' = '+ resulta +'</td>');
                fila.append('<td>' + multipli + ' x ' + i + ' = '+ resultad +'</td>');
                fila.append('<td>' + multiplic + ' x ' + i + ' = '+ resultado +'</td>');
                fila.append('<td>' + multiplica + ' x ' + i + ' = '+ resultados +'</td>');
                fila.append('<td>' + multiplicad + ' x ' + i + ' = '+ resultadosu +'</td>');
                fila.append('<td>' + multiplicado + ' x ' + i + ' = '+ resultadosun +'</td>');
                
                
                tabla.append(fila);
            }
        });
        $("#boton2").on("click",function(){
            $('#multiplication-table tbody').empty();
        });
    }

