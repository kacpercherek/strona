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