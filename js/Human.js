class Human{
    constructor(firstName, lastName, gender, age, calories, img){
        this.name = firstName;
        this.surname = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
        this.photo = img
    }
    fullName(){
        return `${this.name} ${this.surname}`
    }

    sleepFor(){
        if(this.name == 'Tom'){
            this.photo = 'assets/images/tom-sleeping.jpg'
            generatePage(tom)
            let sleepTimer = prompt('How much time you wonna sleep? (in milisecond)')

            doingWrap.insertAdjacentHTML('beforeend', `
                <h1 class='doing'>I'am sleeping for ${sleepTimer[0]} second</h1>
            `)

            setTimeout(()=>{
                this.photo = 'assets/images/tom.jpg'
                generatePage(tom)
                doingWrap.innerHTML = ''
            }, Number(sleepTimer))

        }else if(this.name == 'Spider'){
            this.photo = 'assets/images/tom-hero-sleeping.jpg'
            generatePage(tom)
            let sleepTimer = prompt('How much time you wonna sleep? (in milisecond)')

            doingWrap.insertAdjacentHTML('beforeend', `
                <h1 class='doing'>I'am sleeping for ${sleepTimer[0]} second</h1>
            `)

            setTimeout(()=>{
                this.photo = 'assets/images/tom-hero.jpg'
                generatePage(tom)
                doingWrap.innerHTML = ''
            }, Number(sleepTimer))
        }
    }

    feed(){
        if(this.name == 'Tom'){
            if(this.calories >= 500){
                doingWrap.insertAdjacentHTML('beforeend', `
                <h1 class='doing'>I'am NOT hungry!</h1>
                `)
                setTimeout(() => {
                    doingWrap.innerHTML = ''
                }, 5000);
            }else{
                this.photo = 'assets/images/tom-eating.jpg'
                generatePage(tom)

                doingWrap.insertAdjacentHTML('beforeend', `
                <h1 class='doing'>I'am eating)))</h1>
                `)

                setTimeout(()=>{
                    this.photo = 'assets/images/tom.jpg'
                    this.calories += 200;
                    generatePage(tom)
                    doingWrap.innerHTML = ''
                }, 5000)
            }
            
        }else if(this.name == 'Spider'){
            if(this.calories < 500){
                this.photo = 'assets/images/tom-hero-eating.jpg'

                doingWrap.insertAdjacentHTML('beforeend', `
                <h1 class='doing'>I'am eating)))</h1>
                `)

                generatePage(tom)
                    setTimeout(()=>{
                        this.photo = 'assets/images/tom-hero.jpg'
                        this.calories += 200;
                        generatePage(tom)
                        doingWrap.innerHTML = ''
                    }, 5000)
            }else{
                doingWrap.insertAdjacentHTML('beforeend', `
                <h1 class='doing'>I'am NOT hungry!</h1>
                `)
                setTimeout(() => {
                    doingWrap.innerHTML = ''
                }, 5000);
            }
        }
    }
}


class SuperHero extends Human{
    constructor(str, speed, firstName, lastName, gender, age, calories, img){
        super(firstName, lastName, gender, age, calories, img)

        this.strenght = str;
        this.speed = speed;
    }

    fly(){
        if(this.name == 'Spider'){
            this.photo = 'assets/images/tom-hero-fly.jpg'
            generatePage(tom)

            doingWrap.insertAdjacentHTML('beforeend', `
                <h1 class='doing'>I'am flying WOW!!!</h1>
                `)

            setTimeout(()=> {
                this.photo = 'assets/images/tom-hero.jpg'
                doingWrap.innerHTML = ''
                generatePage(tom)
            }, 5000)

        }else{
            doingWrap.insertAdjacentHTML('beforeend', `
                <h1 class='doing'>I'am NOT a hero!</h1>
                `)
            setTimeout(() => {
                doingWrap.innerHTML = ''
            }, 5000);
        }
    }

    fightWithEvil(){
        if(this.name == 'Spider'){
            this.photo = 'assets/images/hero-fight.jpg'
            generatePage(tom)

            doingWrap.insertAdjacentHTML('beforeend', `
                <h1 class='doing'>Khhhh-chh... Bang-g-g-g... Evil is defeated!</h1>
                `)

            setTimeout(() => {
                this.photo = 'assets/images/tom-hero.jpg'
                this.calories -= 100;
                doingWrap.innerHTML = ''
                generatePage(tom)
            }, 5000)

        }else{
            doingWrap.insertAdjacentHTML('beforeend', `
                <h1 class='doing'>I'am NOT a hero!</h1>
            `)
            setTimeout(() => {
                doingWrap.innerHTML = ''
            }, 5000);
        }
        
    }

    web(){
        doingWrap.innerHTML = ''
        if(this.name == 'Spider'){
            this.photo = 'assets/images/tom-hero-web.png'
            generatePage(tom)

            doingWrap.insertAdjacentHTML('beforeend', `
                <h1 class='doing'>DONT LOOK AT ME!</h1>
            `);
            
            photoWrap.insertAdjacentHTML('beforeend', `<div class='spider-web'><img src="assets/images/spider-web.png" class='spider-web-image'></div>`)

            let child = get('.spider-web')
            setTimeout(() => {
                this.photo = 'assets/images/tom-hero.jpg'
                photoWrap.removeChild(child)
                doingWrap.innerHTML = ''
                generatePage(tom)
            }, 5000)
        }else{
            doingWrap.insertAdjacentHTML('beforeend', `
                <h1 class='doing'>I'am NOT a hero!</h1>
            `)
            setTimeout(() => {
                doingWrap.innerHTML = ''
            }, 5000);
        }
    }

}
