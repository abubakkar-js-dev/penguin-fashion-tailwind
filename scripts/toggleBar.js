let mobile_icon = document.getElementById('mobile-icon');
let mobile_menu = document.getElementById('mobile-menu');

mobile_icon.addEventListener('click',()=>{
    mobile_menu.classList.toggle('hidden');
})