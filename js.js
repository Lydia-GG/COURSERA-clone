
let toggleBtn = document.getElementById('toggle-Btn');
let sidebarMenu = document.getElementById('sidebar-Menu');
let closeBtn = document.getElementById('close-btn');

//open sidebar menu
toggleBtn.addEventListener('click', () => {
  sidebarMenu.classList.toggle('active')
})

//close sidebar menu
closeBtn.addEventListener('click', () => {
  sidebarMenu.classList.remove('active')
})
