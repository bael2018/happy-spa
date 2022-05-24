// form-plan-handling

const planInputs = document.querySelectorAll('.plan label input')
const plan = document.querySelector('.plan')

let pickedPlan = ''

const [...inputs] = planInputs

plan.addEventListener('click' , () => {
    inputs.forEach(item => {
        const active = item.parentElement.getAttribute('id')
        if(item.checked){
            item.parentElement.classList.add(`plan-${active}-active`)
            pickedPlan = active
        }else{
            item.parentElement.classList.remove(`plan-${active}-active`)
        }
    })
})

const modal = document.querySelector('.modal')

// modal-opender

const tariffHandler = (text) => {
    modal.classList.add('modal-visible')
    document.body.style.overflow = 'hidden'

    inputs.forEach(item => {
        const active = item.parentElement.getAttribute('id')

        if(active === text){
            item.checked = true
            item.parentElement.classList.add(`plan-${active}-active`)
            pickedPlan = active
        }else{
            item.parentElement.classList.remove(`plan-${active}-active`)
        }
    })
}

// modal-closer

const modalCloser = () => {
    modal.classList.remove('modal-visible')
    document.body.style.overflow = 'auto'
}

document.querySelector('.modal-closer').addEventListener('click' , modalCloser)

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

    if(!pickedSocials.length){
        invalidSocialText.classList.add('invalid-socials')
    }else{
        invalidSocialText.classList.remove('invalid-socials')
    }
}

// form-handling

const userName = document.querySelector('#userName')
const userEmail = document.querySelector('#userEmail')
const loader = document.querySelector('.isLoading')
const invalidSocialText = document.querySelector('.socials p')

// form-validator

const validate = (inputValue, input) => {
    let isValid = false
    if (!inputValue || (inputValue && inputValue.length < 3)) {
        input.classList.add('invalid_input');
        input.nextElementSibling.classList.add('invalid_text')
        input.nextElementSibling.textContent = inputValue && inputValue.length < 3
            ? 'should be more then 3 symbols'
            : 'this field is reqiured*';
        input.nextElementSibling.style.display = 'block'
        isValid = false
    }
    else {
        input.classList.remove('invalid_input')
        input.nextElementSibling.style.display = 'none'
        isValid = true
    }
    return isValid
}

// form-input's value handling while changing

userName.addEventListener('input' , e => {
    const inputValue = e.target.value
    validate(inputValue, userName)
})

userEmail.addEventListener('input' , e => {
    const inputValue = e.target.value
    validate(inputValue, userEmail)
})

// form-input button to submit form

document.querySelector('.modal-btn').addEventListener('click' , e => {
    e.preventDefault()

    const isValidName = validate(userName.value, userName)
    const isValidEmail = validate(userEmail.value, userEmail)

    if(isValidEmail && isValidName && pickedSocials.length){
        loader.style.display = 'flex'
        const data = {
            userName: userName.value,
            userEmail: userEmail.value,
            userPlan: pickedPlan,
            userPickedApp: pickedSocials
        }
        setTimeout(() => {
            loader.style.display = 'none'
            modalCloser()
            console.log(data);
        }, 2000);
    }else if (pickedSocials.length === 0){
        invalidSocialText.classList.add('invalid-socials')
    }
})