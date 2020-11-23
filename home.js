sidebar_opened = false

function change_sidebar() {
    document.getElementById("sidenav-button").classList.toggle("sidenav-opened")
    if (sidebar_opened) {
        document.getElementById("sidebar").style.removeProperty('width');
        sidebar_opened = false
    }
    else {
        document.getElementById("sidebar").style.width = "300px";
        sidebar_opened = true
    }
}