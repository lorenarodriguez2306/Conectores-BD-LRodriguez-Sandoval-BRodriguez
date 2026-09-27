function obtenerProductos() {
    fetch('/extraer')
        .then(respuesta => respuesta.json())
        .then(productos => {
            const lista = document.getElementById('lista-productos');
            lista.innerHTML = '';
            
            if (productos.length === 0) {
                lista.innerHTML = '<li>No hay productos en la base de datos</li>';
                return;
            }

            productos.forEach(prod => {
                const li = document.createElement('li');
                li.innerHTML = `<strong> ${prod.id} ${prod.nombre}</strong><br>
                                <small>Categoría: ${prod.categoria} | Precio: $${prod.precio}</small>`;
                lista.appendChild(li);
            });
        })
        .catch(error => console.error('Error al extraer productos:', error));
}