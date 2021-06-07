burger = document.querySelector('.burger')
html_resp = document.querySelector('.html-resp')


burger.addEventListener('click', ()=>{
    html_resp.classList.toggle('html_side_bar_resp')
})