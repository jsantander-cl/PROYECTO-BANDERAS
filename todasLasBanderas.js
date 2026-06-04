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

for (let i = 0; i < dataBanderas.length; i++) {
    banderas.innerHTML += `<div class="max-w-75 md:max-w-72 bg-white dark:bg-[#2b3743] rounded-md overflow-hidden ">
        <img src=${dataBanderas[i].flag} alt="" class="w-100 aspect-3/2 object-fill "> 
        <div class="px-6 py-10 h-3/5">
            <p class="text-xl font-bold mb-4">${dataBanderas[i].name}</p>
            <p><span class="font-semibold"
            >Population: </span>${dataBanderas[i].population}</p>
            <p><span class="font-semibold">Region: </span>${dataBanderas[i].region}</p>
            <p><span class="font-semibold">Capital </span>: ${dataBanderas[i].capital}</p>
        </div>
    </div>`
}





