let menus = document.getElementById("nav").getElementsByClassName("menu");
for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}