var index = 0;

function changeColors(){
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
    document.body.style.background = colors[index++];

    if(index >= colors.length){
        index = 0;
    }
}