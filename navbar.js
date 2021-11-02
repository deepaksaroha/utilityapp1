window.onload = () => {

    const breadIcon = document.getElementById('menu-icon');
    let displayNavbar = false;
    const navbar = document.getElementById('navbar-menu-box');
    breadIcon.addEventListener('click', ()=>{
        if(displayNavbar === false){
            displayNavbar = true;
            navbar.style.display = 'block';
        }else{
            displayNavbar = false;
            navbar.style.display = 'none';
        }
    })

    const expandBtn = document.querySelectorAll('.menu>button');
    expandBtn.forEach(ele => {
        ele.addEventListener('click', (e)=>{
            const subMenu = ele.nextElementSibling;
            if(subMenu.style.display == 'block'){
                subMenu.style.display = 'none';
            }else{
                subMenu.style.display = 'block';
            }            
        })
    })
}