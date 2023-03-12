// Universal selector
const $ = (selector) => document.querySelector(selector)
const num = 5

// getAttribute, setAttribute, removeAttribute
// Dark button - Mode change
$("#btn__dark").addEventListener("click", () =>{
    const current__dark = $("body").getAttribute("data-theme")
    if ("#btn__dark"){
        $("#btn__light").classList.remove("hidden")
        $("#btn__dark").classList.add("hidden")
        $("body").setAttribute("data-theme", "light__theme")
    }else if ("#btn__light") {
        $("#btn__light").classList.add("hidden")
        $("#btn__dark").classList.remove("hidden")
        $("body").removeAttribute("data-theme", "light__theme")
    }
})
// Light button - Mode change
$("#btn__light").addEventListener("click", () =>{
    const current__light = $("body").getAttribute("data-theme")
    if ("#btn__light"){
        $("#btn__dark").classList.remove("hidden")
        $("#btn__light").classList.add("hidden")
        $("body").removeAttribute("data-theme", "light__theme")
    }else if ("#btn__light") {
        $("#btn__dark").classList.add("hidden")
        $("#btn__light").classList.remove("hidden")
        $("body").setAttribute("data-theme", "light__theme")
    }
})
// _________ ASIDE - Image panel - appear ________
$("#btn__img").addEventListener("click", () =>{
    $(".image__panel").classList.remove("hidden")
})
// Image panel - disappear
$(".btn__imagen__panel--close").addEventListener("click", () =>{
    $(".image__panel").classList.add("hidden")
})
// _________ ASIDE - Text panel - appear ________
$("#btn__text").addEventListener("click", () =>{
    $(".text__panel").classList.remove("hidden")
})
// Text panel - disappear
$(".btn__text__panel--close").addEventListener("click", () =>{
    $(".text__panel").classList.add("hidden")
})
