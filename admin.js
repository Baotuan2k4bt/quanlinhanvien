const menuLi = document.querySelectorAll('.admin-sidebar-content > ul >li >a')
for (let index = 0; index < menuLi.length; index++) {
    menuLi[index].addEventListener('click', (e) => {
        e.preventDefault();
        menuLi[index].parentNode.querySelector('ul').classList.toggle('active');
//       console.log(menuLi[index].parentNode.querySelector('ul'))
        document.querySelector('.admin-sidebar-content > ul').querySelector('li.active').classList.remove('active');
        menuLi[index].parentNode.classList.add('active');
    });
}
function toggleMenu() {
    let navigation = document.querySelector('.admin-sidebar');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
}

