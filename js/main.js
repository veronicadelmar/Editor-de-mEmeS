// Universal selector
const $ = (selector) => document.querySelector(selector)
const num = 5

// getAttribute, setAttribute, removeAttribute
// _________ HEADER _________
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
// BTN - Image and Text
// _________ ASIDE - Image panel - appear ________
$("#btn__img").addEventListener("click", () =>{
    $(".image__panel").classList.remove("hidden")
    if ($(".image__panel").style.display = "block"){
        $(".text__panel").style.display = "none"
    }
})
// Image panel - disappear
$(".btn__image__panel--close").addEventListener("click", () =>{
    $(".image__panel").classList.add("hidden")
    $(".image__panel").style.display = "none"
})
// _________ ASIDE - Text panel - appear ________
$("#btn__text").addEventListener("click", () =>{
    $(".text__panel").classList.remove("hidden")
    if ($(".text__panel").style.display = "block"){
        $(".image__panel").style.display = "none"
    }
})
// Text panel - disappear
$(".btn__text__panel--close").addEventListener("click", () =>{
    $(".text__panel").classList.add("hidden")
    $(".text__panel").style.display = "none"
})
// _________ MAIN _________
// IMAGEN URL
$("#url__image").addEventListener("input", () =>{
    $("#image__meme").src = $("#url__image").value
    $("#image__meme").style.width = "100%" 
    $("#image__meme").style.height = "100%"
})
// _________ ASIDE - Image panel
// Background image
$("#btn__bgimagen").addEventListener("input", () =>{
    $("figure").style.backgroundColor = $("#btn__bgimagen").value
    $("#bgimagen__span").innerText = ($("#btn__bgimagen").value).toUpperCase()
    $("#btn__bgimagen").style.backgroundColor = $("#btn__bgimagen").value
})
// Background selector   TERMINAR




// _________ ASIDE - Text panel
// text top
$("#input__text__top").addEventListener("input", ()=>{
    $(".top__text").innerText = $("#input__text__top").value
})
// text top - disappear     MEJORAR
$("#check__text__top").addEventListener("change", ()=>{
    $(".top__text").style.color = $("#btn__bgimagen").value
    $(".top__text").style.backgroundColor = $("#btn__bgimagen").value
    if (!$("#check__text__top").checked){
        $(".top__text").style.color = $("#color__text").value
        $(".top__text").style.backgroundColor = $("#bg__font").value
    }
})
// text bottom
$("#input__text__bottom").addEventListener("input", ()=>{
    $(".bottom__text").innerText = $("#input__text__bottom").value
})
// text bottom - disappear    MEJORAR
$("#check__text__bottom").addEventListener("change", ()=>{
    $(".bottom__text").style.color = $("#btn__bgimagen").value
    $(".bottom__text").style.backgroundColor = $("#btn__bgimagen").value
    if (!$("#check__text__bottom").checked){
        $(".bottom__text").style.color = $("#color__text").value
        $(".bottom__text").style.backgroundColor = $("#bg__font").value
    }
})


// Unified EVENT - text top AND text - color and backgroundColor
$("#color__text").addEventListener("input", () =>{
    $(".top__text").style.color = $("#color__text").value
    $(".bottom__text").style.color = $("#color__text").value
    $("#color__text__span").innerText = ($("#color__text").value).toUpperCase()
    $("#color__text").style.backgroundColor = $("#color__text").value
})
$("#bg__font").addEventListener("input", () =>{
    $(".top__text").style.backgroundColor = $("#bg__font").value
    $(".bottom__text").style.backgroundColor = $("#bg__font").value
    $("#bg__font__span").innerText = ($("#bg__font").value).toUpperCase()
    $("#bg__font").style.backgroundColor = $("#bg__font").value
})

// Checkbox hidden background text MEJORAR
$("#check__text__bg").addEventListener("change", () =>{
    $(".top__text").style.backgroundColor = $("#btn__bgimagen").value
    $(".bottom__text").style.backgroundColor = $("#btn__bgimagen").value
    $(".top__text").style.color = $("#btn__bgimagen").value
    $(".bottom__text").style.color = $("#btn__bgimagen").value
    if (!$("#check__text__bg").checked){
        $(".top__text").style.backgroundColor = $("#bg__font").value
        $(".bottom__text").style.backgroundColor = $("#bg__font").value
        $(".top__text").style.color = $("#color__text").value
        $(".bottom__text").style.color = $("#color__text").value
    }
})

