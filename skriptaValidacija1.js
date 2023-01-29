// Reference
const form = document.getElementById('formi'); 
const user = document.getElementById('ime_id');
const prez = document.getElementById('prezime_id');
const email = document.getElementById('imejl_id');
const phone = document.getElementById('tel_id');
const card = document.getElementById('karte_id');






form.addEventListener('submit', e => {
    e.preventDefault();

    validacija();

});


const postaviGresku = (element, poruka) => {
    const kontrola = element.parentElement;
    const prikazGreske = kontrola.querySelector('.greska');

    prikazGreske.innerText = poruka;
    kontrola.classList.add('greska');
    kontrola.classList.remove('uspeh');
}


const postaviUspeh = element => {
    const kontrola = element.parentElement;
    const prikazGreske = kontrola.querySelector('.greska');
    prikazGreske.innerText = '';
    kontrola.classList.add('uspeh');
    kontrola.classList.remove('greska');
};

const telValidacija = phone => {
    const re1 = /^\+3816[0-9]{1}\/[0-9]{2}-[0-9]{2}-[0-9]{3}$/;
    return re1.test(String(phone));
}

const mejlValidacija = email => {
    const re2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re2.test(String(email));
}

const validacija = () => {
    const userV = user.value.trim();
    const prezV = prez.value.trim();
    const emailV = email.value.trim();
    const phoneV = phone.value.trim();
    const cardV = card.value.trim();
  


    if(userV === '') {
        postaviGresku(user, 'Unesite vaše ime!');
    }
    else {
        postaviUspeh(user);
    }

    if(prezV === '') {
        postaviGresku(prez, 'Unesite vaše prezime!');
    }
    else {
        postaviUspeh(prez);
    }

    
    if(emailV === '') {
        postaviGresku(email, 'Unesite vaš email!');
    }
    else if(!mejlValidacija(emailV)) {
        postaviGresku(email, 'Pratite dat šablon: dusan@example.com')
    }
    else {
        postaviUspeh(email);
    }

    
    if(phoneV === '') {
        postaviGresku(phone, 'Unesite vaš broj telefona');
    }
    else if(!telValidacija(phoneV)) {
        postaviGresku(phone, "Pratite dat šablon: +38160/12-34-567");
    }
    else {
        postaviUspeh(phone);
    }

    if(cardV === '') {
        postaviGresku(card, 'Izaberite broj karata!');
    }
    else {
        postaviUspeh(card);
    }
};


