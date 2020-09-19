var burgermenu = false;

function burgerMenu(x) {
    if (burgermenu == false) {
        $(" .information__header__text").addClass("off");
        $(" .communication").addClass("off");
        $(" nav.header__nav").removeClass("off");
        $(" .up__header__block").addClass("justify-content");
        burgermenu = true;
    }
    else {
        $(" .information__header__text").removeClass("off");
        $(" .communication").removeClass("off");
        $(" nav.header__nav").addClass("off");
        $(" .up__header__block").removeClass("justify-content");
        burgermenu = false;
    }
}