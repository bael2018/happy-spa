// form-plan-handling

const planInputs = document.querySelectorAll('.plan label input')
const plan = document.querySelector('.plan')

let tarif = ''

const [...inputs] = planInputs

plan.addEventListener('click' , () => {
    inputs.forEach(item => {
        const active = item.parentElement.getAttribute('id')
        if(item.checked){
            item.parentElement.classList.add(`plan-${active}-active`)
            tarif = active
        }else{
            item.parentElement.classList.remove(`plan-${active}-active`)
        }
    })
})

const modal = document.querySelector('.modal')

// modal-opender

const tariffHandler = (text) => {
    modal.classList.add('modal-visible')

    inputs.forEach(item => {
        const active = item.parentElement.getAttribute('id')

        if(active === text){
            item.checked = true
            item.parentElement.classList.add(`plan-${active}-active`)
            tarif = active
        }else{
            item.parentElement.classList.remove(`plan-${active}-active`)
        }
    })
}

// modal-closer

document.body.addEventListener('click' , e => {
    if(e.target.id === 'modal'){
        modal.classList.remove('modal-visible')
    }
})

// modal-socials handler

const socials = document.querySelectorAll('.socials input')
let pickedSocials = []

function socialsHandler(){
    const socialsArr = [...socials];

    socialsArr.forEach(input => {   
        if(input.checked){
            const socialText = input.parentElement.lastChild
            const arr = pickedSocials.find(item => item === socialText.textContent.trim())
            if(!arr){
                pickedSocials.push(socialText.textContent.trim())
            }
        }else{
            const socialText = input.parentElement.lastChild
            pickedSocials = pickedSocials.filter(item => item !== socialText.textContent.trim())
        }
    })
}

// form-handling

const userName = document.querySelector('#userName')
const userEmail = document.querySelector('#userEmail')
const loader = document.querySelector('.isLoading')

document.querySelector('.modal-btn').addEventListener('click' , e => {
    e.preventDefault()

    let isValid = false

    if(userName.value && userName.value.length < 3){
        userName.classList.add('invalid_input')
        userName.nextElementSibling.classList.add('invalid_text')
        userName.nextElementSibling.textContent = 'should be more then 3 symbols'
    }else if(!userName.value){
        userName.classList.add('invalid_input')
        userName.nextElementSibling.classList.add('invalid_text')
        userName.nextElementSibling.textContent = 'this field is reqiured*'
    }else{
        isValid = true
        userName.classList.remove('invalid_input')
        userName.nextElementSibling.style.display = 'none'
    }

    if(userEmail.value && userEmail.value.length < 3){
        userEmail.classList.add('invalid_input')
        userEmail.nextElementSibling.classList.add('invalid_text')
        userEmail.nextElementSibling.textContent = 'should be more then 3 symbols'
    }else if(!userEmail.value){
        userEmail.classList.add('invalid_input')
        userEmail.nextElementSibling.classList.add('invalid_text')
        userEmail.nextElementSibling.textContent = 'this field is reqiured*'
    }else{
        isValid = true
        userEmail.classList.remove('invalid_input')
        userEmail.nextElementSibling.style.display = 'none'
    }

    if(isValid && pickedSocials.length){
        loader.style.display = 'flex'
        const data = {
            userName: userName.value,
            userEmail: userEmail.value,
            userPlan: tarif,
            userPickedApp: pickedSocials
        }
        console.log(data);
        setTimeout(() => {
            loader.style.display = 'none'
        }, 2000);
    }else{
        alert('Pick one app')
    }
})