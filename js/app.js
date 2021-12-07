function doOnDocumentLoaded () {
    const cards = document.querySelectorAll('.card__container');
    cards.forEach( card => card.onmouseover = () => {  
        const id = card.id;
        const backview = document.querySelector(`#bw-${id}`);
        const frontview = document.querySelector(`#fw-${id}`);
        //console.log(backview);
        backview.classList.remove('hidden');
        backview.classList.add('show');
        frontview.classList.add('hidden');
     } );
     cards.forEach( card => card.onmouseout = () => {
        const id = card.id;
        const backview = document.querySelector(`#bw-${id}`);
        const frontview = document.querySelector(`#fw-${id}`);        
        backview.classList.add('hidden');
        frontview.classList.remove('hidden');
     });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', doOnDocumentLoaded);
} else {
    doOnDocumentLoaded();
}