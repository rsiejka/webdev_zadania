const numberButtons = document.querySelectorAll('[data-number]');

var x = 0;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.disabled = true;
        x = x+1;
        
        if(x % 2 == 0 ){
            button.textContent="X"
        }else{
            button.textContent="O"
        }

        if(numberButtons[0].textContent == numberButtons[1].textContent && numberButtons[1].textContent == numberButtons[2].textContent || 
            numberButtons[3].textContent == numberButtons[4].textContent && numberButtons[4].textContent == numberButtons[5].textContent || 
            numberButtons[3].textContent == numberButtons[4].textContent && numberButtons[4].textContent == numberButtons[5].textContent || 
            numberButtons[0].textContent == numberButtons[3].textContent && numberButtons[3].textContent == numberButtons[6].textContent || 
            numberButtons[1].textContent == numberButtons[4].textContent && numberButtons[4].textContent == numberButtons[7].textContent || 
            numberButtons[2].textContent == numberButtons[5].textContent && numberButtons[5].textContent == numberButtons[8].textContent || 
            numberButtons[6].textContent == numberButtons[4].textContent && numberButtons[4].textContent == numberButtons[2].textContent || 
            numberButtons[0].textContent == numberButtons[4].textContent && numberButtons[4].textContent == numberButtons[8].textContent){
                if(x % 2 == 0 ){
                    alert("X wygrywa!")
                }else{
                    alert("O wygrywa!")
                }

                if(numberButtons[0].disabled==false){numberButtons[0].textContent=" "; numberButtons[0].disabled=true;}
                if(numberButtons[1].disabled==false){numberButtons[1].textContent=" "; numberButtons[1].disabled=true;}
                if(numberButtons[2].disabled==false){numberButtons[2].textContent=" "; numberButtons[2].disabled=true;}
                if(numberButtons[3].disabled==false){numberButtons[3].textContent=" "; numberButtons[3].disabled=true;}
                if(numberButtons[4].disabled==false){numberButtons[4].textContent=" "; numberButtons[4].disabled=true;}
                if(numberButtons[5].disabled==false){numberButtons[5].textContent=" "; numberButtons[5].disabled=true;}
                if(numberButtons[6].disabled==false){numberButtons[6].textContent=" "; numberButtons[6].disabled=true;}
                if(numberButtons[7].disabled==false){numberButtons[7].textContent=" "; numberButtons[7].disabled=true;}
                if(numberButtons[8].disabled==false){numberButtons[8].textContent=" "; numberButtons[8].disabled=true;}

        }
    })
  })

