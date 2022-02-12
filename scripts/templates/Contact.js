class PhotographerContact {
    constructor(photographer) {
        this._photographer = photographer
        this.element = this.createContact()
        this.onKeyUp = this.onKeyUp.bind(this)
        document.body.appendChild(this.element)
        document.addEventListener('keyup', this.onKeyUp)
    }


    static init(photographer){ // Il faut passer le paramètre photographer ici
        // il est lié à notre tableau photographersData de app.js qui lui fait passer le paramètre

        const btn = document.getElementById('contact_button')
        // console.log(btn)
        btn.addEventListener('click',  e =>{
                e.preventDefault()
                new PhotographerContact(photographer) // et ici
            })
        }

        
    getInfo(e){
        const Check = new Checker()
        Check.checkit(e)
        e.preventDefault(); // Sinon, on envoi pas les données
        
    }

    updateName(){
        const updateCheckName = new Checker()
        updateCheckName.testnames()
    }
    updateEmail(){
        const updateCheckEmail = new Checker()
        updateCheckEmail.testemail()
    }
    updateMessage(){
        const updateCheckMsg = new Checker()
        updateCheckMsg.testemsg()
    }

    onKeyUp(e){
        if(e.key === 'Escape'){
            this.close(e)
        }
    }

    close (e){
        e.preventDefault() // annule le comportement par défaut de notre élément
        const mainWrapper = document.getElementById('main')
        mainWrapper.setAttribute('aria-hidden', 'false')
        mainWrapper.style.display='block'
        this.element.parentElement.removeChild(this.element)
        document.removeEventListener('keyup', this.onKeyUp)

    }

    createContact(){
        const contact = document.createElement('div')
        const mainWrapper = document.getElementById('main')
        mainWrapper.setAttribute('aria-hidden', 'true')
        mainWrapper.style.display='none'
        contact.classList.add('modal');
        contact.setAttribute('id', 'contact_modal');
        contact.setAttribute('name', 'Contact me ${this._photographer.name}')

        contact.innerHTML = `
            <div class="modal modal-element">
                <header>
                    <h1>Contactez-moi<br/>
                    <span class="form-name">${this._photographer.name}</span></h1>
                    <button class="btn-closeit" name="Close dialog" role="button"><img src="assets/icons/close.svg" class="close"/></button>
                </header>
            <form>
                <div>
                        <label id="name">Prénom</label>
                        <input type="text" required aria-required="true" name="First name" labelledby="name" id="name-content" class="form-elt"/>
                        <p id="name-error" class="error">Veuillez vérifier votre prenom</p>
                        <label id="surname">Nom</label>
                        <input type="text" required aria-required="true" name="Last name" labelledby="surname" id="surname-content" class="form-elt"/>
                        <p id="surname-error" class="error">Veuillez vérifier votre nom</p>
                        <label id="email">Email</label>
                        <input type="text" required aria-required="true" name="Email" labelledby="email" id="email-content" class="form-elt" placeholder="nom@gmail.com"/>
                        <p id="email-error" class="error">Veuillez vérifier votre email</p>
                        <label id="message">Votre message</label>
                        <input type="text" minlength="2" required aria-required="true" name="Your message" labelledby="message" id="message-content" class="form-elt"/>
                        <p id="message-error" class="error">Veuillez vérifier votre message</p>
                </div>
            <button id="button-submit" class="contact-button contact-send" name="Send">Envoyer</button>
            <p class="send-valid">Message envoyé !</p>
            </form>
        </div>
        `
        contact.querySelector('.btn-closeit').addEventListener('click', this.close.bind(this))
        contact.querySelector('.contact-send').addEventListener('click', this.getInfo.bind(this))
        contact.querySelector('#name-content').addEventListener("change", this.updateName.bind(this));
        contact.querySelector('#surname-content').addEventListener("change", this.updateName.bind(this));
        contact.querySelector('#email-content').addEventListener("change", this.updateEmail.bind(this));
        contact.querySelector('#message-content').addEventListener("change", this.updateMessage.bind(this));

        return contact
    }
}
