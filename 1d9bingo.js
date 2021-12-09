/* 

to do 

1) Create a big board
2) create the 76 childrens
3)program a button to random from 1 to 76
4) create a listener so that the cell get highlight

would be nice

- Make sure to always select a new number (eg. avoid getting the number 10 multiple times).

- Create a user board with 24 randomized numbers that highlights as the main board does.

- Let the user choose how many user boards he's willing to play with and generate them before starting to play.
*/
// find the parent for the cells//



const createCells = function () {
    let boardContainerNode = document.querySelector(".board-container")

    //get the cells//
    let cellsInBoard = 76

    for (let cellsNumber = 1; cellsNumber <= cellsInBoard; cellsNumber++) {
        let newCellNode = document.createElement("div")
        newCellNode.innerText = cellsNumber
        newCellNode.classList.add("cell")
        boardContainerNode.appendChild(newCellNode)
    }
}
createCells()

/* take cell using queryselectorall