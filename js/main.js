const btn = document.getElementById('switch')

btn.addEventListener('click', ()=>{
    btn.classList.toggle('active');
    document.body.classList.toggle('dark');
})

window.addEventListener('load', ()=>{
    document.getElementById('loader').classList.toggle('out')
})