const addBtn = document.getElementById('addBtn')


addBtn.addEventListener('click', () => {
    const input = document.getElementById('input')
    if (input.value === '') {
        alert("empty input, enter your task")
    } else {
        const divMain = document.getElementById('todo-list')
        const divItemToAdd = document.createElement('div')
        const deleteBtn = document.createElement('button')
        divItemToAdd.classList.add('todo-item')
        divItemToAdd.textContent = input.value
        deleteBtn.textContent = 'x'
        const chbox = document.createElement('input')
        chbox.type = 'checkbox'
        chbox.addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
                divItemToAdd.style.textDecoration = "line-through"
            } else {
                divItemToAdd.style.textDecoration = "none"
            }
          })


        divItemToAdd.append(deleteBtn)
        divMain.prepend(divItemToAdd)
        divItemToAdd.prepend(chbox)
        input.value = ''
        

        deleteBtn.addEventListener('click', (ev) => {
            ev.target.parentElement.remove()
           
        })
    }
})






