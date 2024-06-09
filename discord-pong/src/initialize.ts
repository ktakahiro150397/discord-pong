export function initializeApp() {
    // Add resize event listener
    window.addEventListener("resize", onResize)


    // Set initial size
    onResize()
}

function onResize() {
    var width = window.innerWidth
    var height = width * (9 / 16)

    if (height > window.innerHeight) {
        height = window.innerHeight
        width = height * (16 / 9)
    }
    
    var appDiv = document.getElementById("app")
    appDiv!.style.width = `${width}px`
    appDiv!.style.height = `${height}px`
}