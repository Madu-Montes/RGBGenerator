let outputs = document.getElementById("outputs");
let button = document.getElementById("output");

function colors() {
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    
    outputs.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
    document.getElementById("output").innerHTML = 'rgb(' + red  +  ',' + green + ',' + blue + ')';

    button.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
    document.getElementById("button").innerHTML = 'rgb(' + red  +  ',' + green + ',' + blue + ')';
}

function copyToClipboard(){
    navigator.clipboard.writeText(document.getElementById("output").innerHTML).then(() => {
        alert('copiado')
    })
}

