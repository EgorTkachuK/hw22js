
console.log("owo")


let button = document.querySelector("#1234")

button.addEventListener("click" , (event) => {
if (event.target.tagname === "button") {

    button.computedStyleMap.backgroundColor = "blue"
}
})