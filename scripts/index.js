var mySwitchTF = false;

const mySwitch=document.querySelector('#mySwitcher')

mySwitch.addEventListener('click', e => {

    if(e.target.id == 'mySwitcher' && mySwitcher.textContent == 'OFF'){
        mySwitcher.innerText = 'ON';
        Red.style['background-color'] = 'red';
        mySwitchTF = true;
    }
    else if(e.target.id == 'mySwitcher' && mySwitcher.textContent == 'ON'){
        mySwitcher.innerText = 'OFF';
        Red.style['background-color'] = 'white';
        Yellow.style['background-color'] = 'white';
        Green.style['background-color'] = 'white';
        mySwitchTF = false;
    }
});

// Red Light
mySwitch.addEventListener('click', e => {
    if(e.target.id == 'Red' && mySwitchTF == true) {
        Red.style['background-color'] = 'red';
        Yellow.style['background-color'] = 'white';
        Green.style['background-color'] = 'white';
    }else{
        alert('ERROR!');
    }
});
// Yellow Light
mySwitch.addEventListener('click', e => {
    if(e.target.id == 'Yellow' && mySwitchTF == true) {
        Red.style['background-color'] = 'white';
        Yellow.style['background-color'] = 'yellow';
        Green.style['background-color'] = 'white';
    }else{
        alert('ERROR!');
    }
});
// Green Light
mySwitch.addEventListener('click', e => {
    if(e.target.id == 'Green' && mySwitchTF == true) {
        Red.style['background-color'] = 'white';
        Yellow.style['background-color'] = 'white';
        Green.style['background-color'] = 'green';
    }else{
        alert('ERROR!');
    }
});