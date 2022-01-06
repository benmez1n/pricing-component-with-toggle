const switcher = document.querySelector(".switcher")
const prices = Array.from(document.querySelectorAll(".price"))
switcher.onclick = () => {
    switcher.classList.toggle("monthly")
    switcher.classList.toggle("annualy")
    prices.forEach(element => {
        element.classList.contains("hidden") ? element.classList.remove("hidden") : element.classList.add("hidden")
    })
}