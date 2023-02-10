let id = 0;
function appendElements(place,element) {
    place.appendChild(element);
}
function createElements(type,place,id) { 
    const newElement = document.createElement(String(type))
    newElement.id = id 
    appendElements(place,newElement)
}
createElements('div',document.body,'main')
let main = document.querySelector('#main');
createElements('div',main,'buttonHolder');
let btnHolder = document.querySelector('#buttonHolder');
createElements('button',btnHolder,'btnSize');
let btnSize = document.querySelector('#btnSize');
btnSize.innerText = 'Change Grid Size';
createElements('div',main,'container');
btnSize.addEventListener("click",()=> {
    let size = prompt("Enter size of a grid");
    makeRows(size,size);
})

const container = document.getElementById('container');
function changeColor() { 
    this.style.backgroundColor = "yellow";
}
function makeRows(rows,cols) { 
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols',cols);
    for (c = 0;c <(rows*cols);c++) { 
        let cell = document.createElement("div");
        cell.id = c;
        cell.style.height = ".1px";
        cell.style.width = ".1px";
        cell.onmouseover = changeColor;
        container.appendChild(cell).className = "grid-item";
    };

};


