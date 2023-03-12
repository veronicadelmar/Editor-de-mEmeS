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
// Background
$("#background").addEventListener("input", () =>{
    $("figure").style.backgroundColor = $("#background").value
    $("#bg__img__hex").innerText = ($("#background").value).toUpperCase()
    $("#background").style.backgroundColor = $("#background").value
})
// Background selector
$(".bg__select").addEventListener("change", () =>{
    if ($("#image__meme").style.backgroundBlendMode = "unset"){
        $("#image__meme").style.backgroundBlendMode = $(".bg").value
    }
})



// _________ ASIDE - Text panel
// text top
$("#text__top").addEventListener("input", ()=>{
    $(".text__top").innerText = $("#text__top").value
})
// text top - disappear 
$("#cb__text__top").addEventListener("change", ()=>{
    $(".text__top").style.color = $("#background").value
    $(".text__top").style.backgroundColor = $("#background").value
    if (!$("#cb__text__top").checked){
        $(".text__top").style.color = $("#color__text").value
        $(".text__top").style.backgroundColor = $("#bg__font").value
    }
})
// text bottom
$("#text__bottom").addEventListener("input", ()=>{
    $(".text__bottom").innerText = $("#text__bottom").value
})
// text bottom - disappear
$("#cb__text__bottom").addEventListener("input", ()=>{
    $(".text__bottom").style.backgroundColor = $("#background").value
})


// /* Unified EVENT - text top AND text - color and backgroundColor
$("#color__text").addEventListener("input", () =>{
    $(".text__editor").style.color = $("#color__text").value
    // $(".text__bottom").style.color = $("#color__text").value
    $("#color__text__hex").innerText = ($("#color__text").value).toUpperCase()
    $("#color__text").style.backgroundColor = $("#color__text").value
})
$("#bg__font").addEventListener("input", () =>{
    $(".text__top").style.backgroundColor = $("#bg__font").value
    $(".text__bottom").style.backgroundColor = $("#bg__font").value
    $("#bg__font__hex").innerText = ($("#bg__font").value).toUpperCase()
    $("#bg__font").style.backgroundColor = $("#bg__font").value
})


