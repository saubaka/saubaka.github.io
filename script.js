const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
let isSidebarOpen = false;
menuButton.addEventListener('click', function() {
    if (isSidebarOpen) {
        sidebar.style.left = '-250px';
        menuButton.style.left = '15px';
        mainContent.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0';
        menuButton.style.left = '265px'; 
        mainContent.style.marginLeft = '250px';
    }
    isSidebarOpen = !isSidebarOpen;
});