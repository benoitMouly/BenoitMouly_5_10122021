class Checker {
    constructor(photographer) {
        this._photographer = photographer
        this.name = document.querySelector('#name-content')
        this.surname = document.querySelector('#surname-content')
        this.email = document.querySelector(' #email-content')
        this.message= document.querySelector('#message-content')
        this.confirmedMsg = document.querySelector('.send-valid')
        this.textControl = document.querySelectorAll('.form-elt')
    }


        checkit(e){
            if(this.testnames() && this.testemail() && this.testemsg()){ // SI tout est true on envoi les données
                this.confirmedMsg.style.display = "block"; // Le message de confirmation est ajouté


                this.informationsSend = document.querySelectorAll('.form-elt')
                for(let i = 0 ; i < this.informationsSend.length; i++){
                    console.log(this.informationsSend[i].name + ' : ' + this.informationsSend[i].value)
                }

                return true;
            }
            else{
                e.preventDefault(); // Sinon, on envoi pas les données
                console.log('soucis')
            }
        }

        testnames(){
            this.prenomError = document.getElementById('name-error');
            this.nomError = document.getElementById('surname-error');
            this.formNameFill = document.getElementById("name-content").value;
            this.formLastNameFill = document.getElementById("surname-content").value;
            this.regName = /^[a-zA-Z ,.'-]+$/

            this.nameResult = this.regName.test(this.formNameFill);
            this.lastNameResult = this.regName.test(this.formLastNameFill);
            this.nameLength = this.formNameFill.length;
            this.lastLength = this.formLastNameFill.length;

              // ✧ Le champ est vide ✧

            if(this.nameResult == false){

                this.name.style.borderColor = "red";
                this.prenomError.style.display = "block"; // on affiche l'erreur (comme il y'a un false, le formulaire n'est pas envoyé)

                return false;
            }

            if(this.lastNameResult == false){

                this.surname.style.borderColor = "red";
                this.nomError.style.display = "block";

                return false; 
            }

            // ✧ Le champ n'a pas suffisamment de lettres  ✧

            if(this.nameLength < 2){
                this.name.style.borderColor = "red";
                this.prenomError.style.display = "block";
                return false;
            }
            else if(this.lastLength < 2){
                this.surname.style.borderColor = "red";
                this.nomError.style.display = "block";
                return false;
            }

            else if(this.nameResult == true && this.lastNameResult == false){
                this.name.style.borderColor = "white";
                this.prenomError.style.display = "none";
            }
            else if(this.lastNameResult == true && this.nameResult == false){
                this.surname.style.borderColor = "white";
                this.nomError.style.display = "none";
            }

            else{
                this.name.style.borderColor = "white";
                this.prenomError.style.display = "none";
                this.surname.style.borderColor = "white";
                this.nomError.style.display = "none";
                console.log('prenom nom OK')
                return true;
            }
        }

        testemail(){
            this.emailError = document.getElementById('email-error');
            this.formEmailFill = document.getElementById("email-content").value;
            console.log(this.formEmailFill)
            this.formEmailPattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
            this.emailResult = this.formEmailPattern.test(this.formEmailFill);

        // ✧ Le champ est vide ✧

            if(this.emailResult == false){

                this.emailError.style.display = "block";
                console.log('email PROBLEME')
                return false;
            }

        else{
        this.emailError.style.display = "none";
        console.log('email OK')

        return true;
        }
    }

    testemsg(){
        this.messageError = document.getElementById('message-error')
        this.formMessageFill = document.getElementById("message-content").value;
        this.messageLength = this.formMessageFill.length;
        console.log(this.formMessageFill)
        if(this.messageLength < 2){
            this.message.style.borderColor = "red";
            this.messageError.style.display = "block";
            console.log('message PROBLEME')
            return false;
        } 
        else{
            this.message.style.borderColor = "white";
            this.messageError.style.display = "none";
            this.message.style.borderColor = "white";
            console.log('message OK')
            return true;
        }
    }

}
