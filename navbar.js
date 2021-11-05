let menuList = [
    {
        subMenuList: [],
        href: './timer',
        itemName: 'Timer'
    },
    {
        subMenuList: [],
        href: './stopwatch',
        itemName: 'Stopwatch'
    },
    {
        subMenuList: [],
        href: './ip',
        itemName: 'My IP'
    },
    {
        subMenuList: [],
        href: './linguist',
        itemName: 'Linguist'
    }
]


window.addEventListener('load', () => {
    
    const menuItemBox = document.querySelector('#navbar-menu-box');
    console.log(Object.keys(menuList));
    menuList.forEach(element=>{
        let menu = document.createElement('div');
        menu.setAttribute('class', 'menu');
        let menuItemName = document.createElement('a');
        menuItemName.setAttribute('href', element.href);
        menuItemName.innerText = element.itemName;
        let btn = document.createElement('button');
        let img = document.createElement('img');
        img.setAttribute('src', './expand.svg');
        btn.appendChild(img);
        let subMenu = document.createElement('div');
        subMenu.setAttribute('class', 'submenu');
        element.subMenuList.forEach(ele=>{
            let subMenuItemName = document.createElement('a');
            subMenuItemName.setAttribute('href', element.href);
            subMenuItemName.innerText = ele;
            subMenu.appendChild(subMenuItemName);
        })
        menu.appendChild(menuItemName);
        menu.appendChild(btn);
        menu.appendChild(subMenu);
        menuItemBox.appendChild(menu);
    })


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
})