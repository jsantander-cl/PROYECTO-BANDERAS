let banderas = document.querySelector("#banderas")

async function traerBanderas(){
    try {
        let response = await fetch("./data.json")
        let data = await response.json()
        return data
    } catch (error) {
        console.error("ups",error)
    }
}

let dataBanderas = await traerBanderas()

console.log(dataBanderas[0].name)

function mostrarPaises(grupoDePaises) {
for (let i = 0; i < dataBanderas.length; i++) {
    banderas.innerHTML += `<div class="max-w-75 md:max-w-72 bg-white dark:bg-[#2b3743] rounded-md overflow-hidden ">
        <img src=${grupoDePaises[i].flag} alt="" class="w-100 aspect-3/2 object-fill "> 
        <div class="px-6 py-10 h-3/5">
            <p class="text-xl font-bold mb-4">${grupoDePaises[i].name}</p>
            
            >Population: </span>${grupoDePaises[i].population}</p>
            <p><span class="font-semibold">Region: </span>${grupoDePaises[i].region}</p>
            <p><span class="font-semibold">Capital </span>: ${grupoDePaises[i].capital}</p>
        </div>
    </div>`
}
}

let paisesDeAfrica = dataBanderas.filter(pais=>pais.region === "Africa")
let paisesDeAsia = dataBanderas.filter(pais=>pais.region === "Asia")

let filtroRegion = document.querySelector("#filtroRegion")
let filtroInput = document.querySelector("#filtroInput")
filtroRegion.addEventListener("change", filtrarPaises)
filtroInput.addEventListener("input", filtrarPaises)

function filtrarPaises() {
    let region = filtroRegion.value
    let contenidoInput = filtroInput.value.toLowerCase()

    let paisesFiltrados = dataBanderas

    if (region !== "todas") {
        paisesFiltrados = paisesFiltrados.filter(pais => pais.region === region)
    }

    paisesFiltrados = paisesFiltrados.filter(pais => pais.name.toLowerCase().includes(contenidoInput))

    banderas.innerHTML = ""
    mostrarPaises(paisesFiltrados)
}

filtrarPaises()





