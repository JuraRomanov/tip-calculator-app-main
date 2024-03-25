




const offButton =  (buttons) => { 
    buttons.forEach(button => {
        button.classList.remove("btn__tip--active") ; 

    });
}

const checkValue = (input) => { 
    if(Number(input.value) > 0) {
        input.classList.remove('splitter__input--error')
        input.parentNode.querySelector('.error__message').classList.add('error__message--hidden')
        return  Number(input.value) ; 
    } 
    else { 
        input.classList.add('splitter__input--error')
        input.parentNode.querySelector('.error__message').classList.remove('error__message--hidden')
        return -1
    }
}

const calcTip = (billInput , personInput , currentTip) => { 
    
    bill = checkValue(billInput) 
    persons  =  checkValue(personInput)  

    if (!bill || !persons || currentTip<0){ 
        return false ; 
    }
    
    const tipAmoun = document.getElementById('tip__amount') ;
    const tipTotal = document.getElementById('tip__total') ;
    let tip = bill * (currentTip/100) ; 
  
    tipAmoun.innerText = `$${(tip/persons).toFixed(2)}`;
    tipTotal.innerText = `$${tip.toFixed(2)}`;



}

document.addEventListener("DOMContentLoaded" , () => { 
    let currentTip = 0;
    const buttonsTip = document.querySelectorAll('.btn__tip') ;  
    const buttonReset = document.querySelector('.btn__reset')  ;
    const billInput  = document.getElementById("input--bill") ; 
    const personInput  = document.getElementById("input--persons") ; 
    const customInupt  = document.getElementById("input--custom") ; 

    
    
    // значение из кнопки
    buttonsTip.forEach(button => {
            button.addEventListener('click' , () => { 
                offButton(buttonsTip) ; 
                button.classList.add('btn__tip--active'); 
                customInupt.value = "" ; 
                currentTip = (Number((button.innerHTML).slice(0,-1))) ; 
            })
    });


    customInupt.addEventListener('change' , (e) => { 
        offButton(buttonsTip) ; 
        currentTip = e.target.value  ; 
        
    })
    
    buttonReset.addEventListener('click'  , () => calcTip(billInput,personInput,currentTip)) ; 

}) 

