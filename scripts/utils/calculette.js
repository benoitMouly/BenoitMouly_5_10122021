class Calculette {
    constructor(medias) {
        this.medias = medias
        this.total = document.querySelector('.total-likes')
        this.numbersBrut = document.querySelectorAll('.number-like')
        this.likesint = 0;
        this.total.innerHTML = this.addition()
        this.hearts = document.querySelectorAll('.heart-iterate');
        this.hearts = this.heartEvent()
        this.symbols = document.querySelector('.fa-heart')
    }


    static init(){ 
        new Calculette()
    }

    
    addition(){
            
            // console.log(this.numbersBrut)
            this.numbers = []; // Instanciation du tableau
            this.numbersBrut.forEach(span => {
                this.likesint = parseInt(span.innerHTML) // On parse la span
                this.numbers.push(this.likesint)
            })
            // console.log(this.numbers)
            this.calcul = this.calculMethod(this.numbers);
            this.total.innerHTML = this.calcul
        }
    
    calculMethod(e){
        return e.reduce((total, like) => total + like, 0);
    }

    heartEvent() {
        this.addition()
        // console.log(this.hearts)
    
        this.hearts.forEach(heart => {
        heart.addEventListener('click', (e) => {
            const like = heart.parentElement.querySelector('.number-like');
            console.log(like)
            if (heart.classList.contains('has-vote')) {
                like.innerHTML = parseInt(like.innerHTML) -1;
                heart.classList.remove('has-vote');
                heart.classList.add('far')
                heart.classList.remove('fas')
            } else {
                like.innerHTML = parseInt(like.innerHTML) +1;
                heart.classList.add('has-vote');
                heart.classList.remove('far')
                heart.classList.add('fas')
            }
            this.addition()
        })
        //
        heart.addEventListener('keyup', (e) => {

            if (e.keyCode === 13) {
            const like = heart.parentElement.querySelector('.number-like');
            console.log(like)
            if (heart.classList.contains('has-vote')) {
                like.innerHTML = parseInt(like.innerHTML) -1;
                heart.classList.remove('has-vote');
                heart.classList.add('far')
                heart.classList.remove('fas')
            } else {
                like.innerHTML = parseInt(like.innerHTML) +1;
                heart.classList.add('has-vote');
                heart.classList.remove('far')
                heart.classList.add('fas')
            }
            this.addition()
        }
        })


        //

        
        })

    }
    

}
