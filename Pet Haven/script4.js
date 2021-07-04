const buttons = document.querySelectorAll('.btn.btn-outline-secondary');
const cards = document.querySelectorAll('.item');

buttons.forEach(function(button){
    button.addEventListener('click' ,function(){
        const btnClicked =  button.innerHTML.toLowerCase();
        cards.forEach(function(card){
            if (btnClicked == 'all') {
                card.style.display = 'block';
            } else if (card.classList.contains(btnClicked)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        })
        
    })
})

const searchBar = document.querySelector('.form-control.mr-2');
searchBar.addEventListener('keyup', function(event){
    var userInput = event.target.value.toLowerCase().trim();
    cards.forEach(function(card){
        if (card.textContent.toLowerCase().trim().includes(userInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })
})

