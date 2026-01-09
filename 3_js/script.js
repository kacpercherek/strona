        function pokazPietro(idPietra) { // gdy klikam jakis przycisk na stronie, tu mi wychwytuje jaki to przycisk, i pokazuje to co ma pokzac
            
            document.getElementById('widok-start').style.display = 'none'; //ukrywa start

            
            document.getElementById('widok-parter').style.display = 'none';
            document.getElementById('widok-pietro1').style.display = 'none'; //zabezpieczenie, zanim funkcja pokaze nowe pietro, to ukrywa wszystkie mozliwe

            
            document.getElementById(idPietra).style.display = 'block'; //pokazuje wybrane pietro
        }

        function wrocDoStartu() { // jak to klikam to wraca mnie do startu z widoku parteru lub pietra
    
    const pietra = document.getElementsByClassName('widok-pietra'); //uzywam const, bo tu mi sie nie bedzie nic zmieniac, tym przyciskiem za kazdym razem wracam do startu
    for (let i = 0; i < pietra.length; i++) {
        pietra[i].style.display = 'none'; //petla, ktora liczy pietra
    }

    document.getElementById('widok-start').style.display = 'block'; // pokazuje start
}

function generujPietro(danePietra, kontenerId){
    const kontener = document.getElementById(kontenerId);
    kontener.innerHTML = ' '; //czyszcze stare

    danePietra.forEach((sala) => {                      //sala jako przycisk na mapce
        const divSala = document.createElement('div');
        divSala.className = 'sala';
        divSala.innerHTML = `<h3>${sala.nazwa}</h3><small>Kliknij, aby wyświetlić sprzęt</small>`;

        const divLista = document.createElement('div');         //ukryty sprzet na danej sali
        divLista.className = 'lista-sprzetu';
        divLista.id = `Lista-${sala.id}`;
        divLista.innerHTML = `<h4>Sprzęt w sali: ${sala.nazwa}</h4>`;

        sala.sprzet.forEach(sprzet => {          //przyciski do sprzetu
            const btn = document.createElement('button');
            btn.className = 'btn-sprzet';
            btn.innerText = sprzet.nazwa;

            btn.onclick = () => pokazModal(sprzet);   //klikniecie otwiera modal
            divLista.appendChild(btn);
    });
  
divSala.onclick = () => {
    if (divLista.style.display === 'block') {    //jak klikne w sale to odkrywa lub zakrywa liste sprzetu 
        divLista.style.display = 'none';
    } else {
        document.querySelectorAll('.lista-sprzetu').forEach(el => el.style.display = 'none');  //ukrycie innych, otwartych list
        divLista.style.display = 'block';
    }
};

kontener.appendChild(divSala);     //dodane mapy
kontener.appendChild(divLista);
    });
}

function pokazModal(sprzet) {
    document.getElementById('modal-tytul').innerText = sprzet.nazwa;   //otwieram okno
    document.getElementById('modal-opis').innerText = sprzet.opis;
    document.getElementById('modal-img').src = sprzet.zdjecie;

    document.getElementById('modal-sprzet').style.display = 'block';
}

function zamknijModal() {
    document.getElementById('modal-sprzet').style.display = 'none';  //zamykam okno 
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-sprzet');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}