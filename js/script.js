function get(id){
    return document.querySelector(id);
}
function getAll(id){
    return document.querySelectorAll(id)
}

let tom = new Human('Tom', 'Holland', 'male', 21, 200, 'assets/images/tom.jpg');

let photo = get('#photo')
let photoWrap = get('.photo-wrapper')
let methods = get('.methods-wrapper')
let switchBtn = get('.switch-btn').addEventListener('click', switchStyle)
let doingWrap = get('.doing-wrapper')
generatePage(tom)

setInterval(() => {
    tom.calories -= 200;
    generatePage(tom)
}, 60000);

function generatePage(obj){
    methods.innerHTML = ''
    photo.src = tom.photo
    methods.insertAdjacentHTML('afterbegin', `
        <div class='info-wrapper'>
            <p class=''>My name is ${obj.fullName()}</p>
            <p >I'am ${obj.age} years old</p>
            <p >My callories: ${obj.calories}</p>
        </div>
        <div class='method-btn-wrapper'>
            <button class='methods-btn'>Sleep</button>
            <button class='methods-btn'>Eat</button>
            <button class='methods-btn'>Fly</button>
            <button class='methods-btn'>Fight</button>
            <button class='methods-btn'>Web</button>
        </div>
    `)

    let btns = getAll('button')
    btns.forEach(elem => {elem.addEventListener('click', doSomeThings)})
}

function doSomeThings(e){
    if(e.target.innerHTML == 'Sleep'){
        tom.sleepFor()
    }else if(e.target.innerHTML == 'Eat'){
        tom.feed()
    }else if(e.target.innerHTML == 'Fly'){
        tom.fly()
    }else if(e.target.innerHTML == 'Fight'){
        tom.fightWithEvil()
    }else if(e.target.innerHTML == 'Web'){
        tom.web()
    }
}

isSwithed = false;
function switchStyle(){
    if(isSwithed){
        tom = new Human('Tom', 'Holland', 'male', 21, 200, 'assets/images/tom.jpg');
    }else{
        tom = new SuperHero(200, 100, 'Spider', 'Man', 'spider', 21, 200, 'assets/images/tom-hero.jpg')
    }

    if(isSwithed){
        isSwithed = false
    }else{
        isSwithed = true
    }
    generatePage(tom)
    return tom
}
