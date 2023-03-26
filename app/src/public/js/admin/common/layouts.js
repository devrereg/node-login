class Layout {
    navigation;
    menuButton;

    constructor() {
        this.navigation = document.getElementById("nav");
        this.menuButton = document.getElementById("menuBtn");
    }
}

init();

function init() {
    const layout = new Layout();
    initEventListener(layout)
}

function initEventListener(layout) {
    layout.menuButton.addEventListener("click", () => toggleNavigation(layout.navigation));
}

function toggleNavigation(target) {
    if (target.classList.contains("open")) {
        target.classList.remove("open")
    } else {
        target.classList.add("open")
    }
}

function goToProfile() {
    window.href = "/admin/profile"
}