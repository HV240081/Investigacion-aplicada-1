const autos = {
    etron: {
        nombre: "Audi E-tron GT",
        descripcion: "El Audi E-tron GT es un automóvil eléctrico de lujo con un diseño aerodinámico y tecnología de vanguardia.",
        año: 2021,
        precio: "70,000 USD",
        historia: "El Audi E-tron GT fue presentado en 2021 como una respuesta al creciente interés en vehículos eléctricos. Con un diseño inspirado en el Audi A7 y la tecnología del Porsche Taycan, el E-tron GT ofrece un rendimiento impresionante con una autonomía de hasta 250 millas.",
        imagen: "./img/etron.jpg"
    },
    rs7: {
        nombre: "Audi RS7",
        descripcion: "El Audi RS7 es un deportivo de alto rendimiento con un motor V8 biturbo que ofrece una experiencia de conducción emocionante.",
        año: 2023,
        precio: "115,000 USD",
        historia: "El Audi RS7 se lanzó por primera vez en 2013, combinando el lujo y la practicidad de un wagon con la potencia de un deportivo. La versión 2023 presenta mejoras en el rendimiento y la tecnología, consolidando su lugar como uno de los deportivos más versátiles del mercado.",
        imagen: "./img/rs71.jpg"
    },
    rs6: {
        nombre: "Audi RS6",
        descripcion: "El Audi RS6 combina la versatilidad de un wagon con el rendimiento de un deportivo, perfecto para quienes buscan practicidad sin sacrificar la emoción.",
        año: 2022,
        precio: "110,000 USD",
        historia: "El Audi RS6 Avant ha sido un modelo icónico desde su lanzamiento en 2002. La versión 2022 presenta un motor V8 biturbo, mejorando aún más su desempeño. Es conocido por su capacidad para combinar espacio con una aceleración impresionante, siendo un favorito entre los entusiastas de los autos.",
        imagen: "./img/rs61.jpg"
    },
    r8: {
        nombre: "Audi R8",
        descripcion: "El Audi R8 es un superdeportivo con un motor V10, conocido por su impresionante aceleración y manejo preciso.",
        año: 2024,
        precio: "200,000 USD",
        historia: "El Audi R8 debutó en 2006 como el primer superdeportivo de la marca. La última versión, presentada en 2024, mantiene la esencia de su predecesor pero con mejoras en el motor y la tecnología. Es famoso por su motor V10 y su diseño distintivo que ha capturado la atención de los entusiastas de los autos deportivos.",
        imagen: "./img/r81.jpg"
    }
};

function mostrarInfo(modelo) {
    const auto = autos[modelo];
    const infoModelo = document.getElementById('infoModelo');
    // Calcula el nuevo ancho aumentando el 35% sobre el valor base de 300px
    const nuevoAncho = 300 * 1.80; 
    infoModelo.innerHTML = `
        <div class="card" style="max-width: ${nuevoAncho}px; margin: auto;">
            <img src="${auto.imagen}" class="card-img-top" alt="${auto.nombre}" style="width: 100%; height: auto; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">${auto.nombre}</h5>
                <p class="card-text">${auto.descripcion}</p>
                <p><strong>Año:</strong> ${auto.año}</p>
                <p><strong>Precio:</strong> ${auto.precio}</p>
                <p><strong>Historia:</strong> ${auto.historia}</p>
            </div>
        </div>
    `;
}
