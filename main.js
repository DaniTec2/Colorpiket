const color = document.querySelector("#color")
// console.log(color)

// 

color.addEventListener("input", ()=>{
    exit.innerHTML = (color.value)
    salida.style.background = color.value
    salida.style.color = "#FFF"
})