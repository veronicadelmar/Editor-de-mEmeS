// Universal selector
const $=(selector) => document.querySelector(selector)
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
    if ("#btn__img"){
        $(".image__panel").classList.remove("hidden")
        $("header").classList.add("hidden")
        $("main").classList.add("hidden")
    }
})
// Image panel - disappear
$(".btn__imagen__panel--close").addEventListener("click", () =>{
    if (".btn__imagen__panel--close"){
        $(".image__panel").classList.add("hidden")
        $("header").classList.remove("hidden")
        $("main").classList.remove("hidden")
    }
})
// _________ ASIDE - Text panel - appear ________
$("#btn__text").addEventListener("click", () =>{
    if ("#btn__text"){
        $(".text__panel").classList.remove("hidden")
        $("header").classList.add("hidden")
        $("main").classList.add("hidden")
        
    }
})
// Text panel - disappear
$(".btn__text__panel--close").addEventListener("click", () =>{
    if (".btn__text__panel--close"){
        $(".text__panel").classList.add("hidden")
        $("header").classList.remove("hidden")
        $("main").classList.remove("hidden")
    }
})