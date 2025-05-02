function gestionarFacturas() {
    let facturacionTotal = 0;
    let cantidadArticulo1 = 0;
    let facturasMasDe600 = 0;
  
    for (let i = 1; i <= 5; i++) {
        console.log(`Factura ${i}:`);
        
        let codigoArticulo = prompt("Introduce el código del artículo:");
        
        let cantidadLitros = parseFloat(prompt("Introduce la cantidad de litros vendidos:"));
            
        let precioPorLitro = parseFloat(prompt("Introduce el precio por litro:"));
                
        let totalFactura = cantidadLitros * precioPorLitro;
        
        facturacionTotal += totalFactura;
        
        if (codigoArticulo === "1") {
            cantidadArticulo1 += cantidadLitros;
        }
        
        if (totalFactura > 600) {
            facturasMasDe600++;
        }
    }
    
    console.log(`\nFacturación total: $${facturacionTotal.toFixed(2)}`);
    console.log(`Cantidad de litros vendidos del artículo 1: ${cantidadArticulo1}`);
    console.log(`Número de facturas superiores a 600: ${facturasMasDe600}`);
}

gestionarFacturas();
