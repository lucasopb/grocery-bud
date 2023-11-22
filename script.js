result = document.getElementById('res')

document.getElementById('btn').addEventListener('click', (ev) => {
    productName = document.getElementById('product').value
    divShow = document.createElement('div')
    deleteBtn = document.createElement('button')
    editBtn = document.createElement('button')

    divShow.id = 'name-' + productName
    divShow.innerText = `${productName}`
    divShow.classList.add('clearOpc')

    deleteBtn.classList.add('material-symbols-outlined')
    deleteBtn.innerText = 'delete'
    deleteBtn.style.border = 'none'
    deleteBtn.style.color = 'red'
    deleteBtn.style.cursor = 'pointer'
    deleteBtn.addEventListener('click', (ev) => {
        toRemove = ev.currentTarget.parentNode
        result.removeChild(toRemove)
    })

    editBtn.classList.add('material-symbols-outlined')
    editBtn.innerText = 'edit'
    editBtn.style.border = 'none'
    editBtn.style.color = 'green'
    editBtn.style.cursor = 'pointer'
    editBtn.style.marginLeft = '115px'
    editBtn.addEventListener('click', (ev) => {
        toEdit = ev.currentTarget.parentNode
        const newText = prompt('Enter new text:', toEdit.innerText);
        if (newText !== null) {
            toEdit.innerText = newText;
        }

    })

    divShow.append(editBtn, deleteBtn)
    result.append(divShow)
    document.getElementById('product').value = ''
})

let test = 1
let aux

document.getElementById('clear').addEventListener('click', () => {
    let elements = document.getElementsByClassName('clearOpc')
    let elementsArray = Array.from(elements)
    elementsArray.forEach((current) => {
        result.removeChild(current)
        console.log(elementsArray)
    })
})