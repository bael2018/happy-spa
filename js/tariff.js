// form-plan-handling

const plan = document.querySelector('.plan')
const planInputs = document.querySelectorAll('.plan label input')

const [...inputs] = planInputs

plan.addEventListener('click' , () => {
    inputs.forEach(item => {
        const active = item.parentElement.getAttribute('id')
        if(item.checked){
            item.parentElement.classList.add(`plan-${active}-active`)
        }else{
            item.parentElement.classList.remove(`plan-${active}-active`)
        }
    })
})

const modal = document.querySelector('.modal')

// modal opender

const tariffHandler = (text) => {
    modal.classList.add('modal-visible')

    inputs.forEach(item => {
        const active = item.parentElement.getAttribute('id')

        if(active === text){
            item.checked = true
            item.parentElement.classList.add(`plan-${active}-active`)
        }else{
            item.parentElement.classList.remove(`plan-${active}-active`)
        }
    })
}

// modal closer

document.body.addEventListener('click' , e => {
    if(e.target.id === 'modal'){
        modal.classList.remove('modal-visible')
    }
})

// form-handling

function formHandler(e){
    e.preventDefault();
    console.log(e);
}