let api_key = "8d78d996455e9ebccfadbe81718e273c"
let url = "https://api.openweathermap.org/data/2.5/weather"
let urlIcon = `https://openweathermap.org/img/wn/iconCode@2x.png`

document.getElementById("botonBusqueda").addEventListener("click", () => {
    const ciudad = document.getElementById("ciudadEntrada").value
    if (ciudad) {
        fetchDatosCLima(ciudad);
    }

})
function fetchDatosCLima(ciudad) {
    fetch(`${url}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById("datosClima")
    divDatosClima.innerHTML = ""

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement("p")
    temperaturaInfo.textContent = temperatura

    const humedadInfo = document.createElement("p")
    humedadInfo.textContent = humedad

    const iconInfo = document.createElement("img")
    iconInfo.src = urlIcon.replace("iconCode", icono)

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = descripcion

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconInfo)
}


