const key = "74676c077f48d496208005c33abc62e6"

document.addEventListener("keypress", function(e){
    if (e.key === "Enter") {

        const btn = document.querySelector(".btn-search")

        btn.click()
    }
})

function updatescreen(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em: " + dados.name
    document.querySelector(".temp").innerHTML = "Faz: " + Math.floor (dados.main.temp)  + "ºC Em " + (dados.name)
    document.querySelector(".txt-prev").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".previsao").src= `https://openweathermap.org/img/wn/${ dados.weather[0].icon}.png`
}

async function searchCity(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    updatescreen(dados)
}

function search() {
    const cidade = document.querySelector(".input-search").value

    searchCity(cidade)
}