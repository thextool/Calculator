function calc() {
    var screen = document.getElementById('screen')
    var button = document.getElementsByClassName('buttons')[0]
    button.addEventListener('click', function(event) {
        if(event.target.id == "clear") {
            screen.innerText = ""
        } else if (event.target.id =='equals'){
            if (eval(screen.innerText) == "Infinity") {
                screen.innerText = 'Error'
            } else {screen.innerText = eval(screen.innerText)}
        } else {screen.innerText += event.target.firstChild.data}
    })
}
calc()