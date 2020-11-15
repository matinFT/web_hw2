sidebar_opened = false

function change_sidebar() {
    document.getElementById("sidenav-button").classList.toggle("sidenav-opened")
    if (sidebar_opened) {
        document.getElementById("sidebar").style.width = "0px";
        sidebar_opened = false
    }
    else {
        document.getElementById("sidebar").style.width = "250px";
        sidebar_opened = true
    }
}