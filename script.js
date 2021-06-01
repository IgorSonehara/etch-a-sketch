window.addEventListener("load", startGrid); // chama a funcão startGrid (que carrega o grid padrão 16 x 16) quando a pagina é carregada
btn.addEventListener("click", newGrid); // chama a função newGrid (que cria um novo grid no tamanho desejado) quando o botão "Change size" é acionado

const container = document.querySelector('.container');

function newGrid() {
    let newSize = prompt("Enter new size (1-100)");
    if (newSize > 100 || newSize < 1) {
        alert("Enter a number from 1-100 range");
    } else {
        clearGrid();
        container.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`; // fr é uma unidade do grid
        container.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
        createGrid(newSize);
    }
}

function startGrid() {
    createGrid(16);
    container.style.gridTemplateColumns = "repeat(16, 1fr)";
    container.style.gridTemplateRows = "repeat(16, 1fr)";
}

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const content = document.createElement('div');
        content.classList.add('square');
        //content.id = i;
        //content.textContent = i;
        content.addEventListener("mouseover", changeColor);
        container.appendChild(content);
        //console.log(i);
    }
}

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
  }

function changeColor(e) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    //e.getElementById(e.target.id).style.backgroundColor = "#" + randomColor;
    e.target.style.backgroundColor = "#" + randomColor;
}