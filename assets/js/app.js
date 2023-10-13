// hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__list-wrapper");
const bars = hamburger.querySelectorAll(".bar");

hamburger.addEventListener("mouseenter", () => {
    bars[1].style.width = "25px";
    bars[2].style.width = "25px";
});

hamburger.addEventListener("mouseleave", () => {
    if (!hamburger.classList.contains("active")) {
        bars[1].style.width = "20px";
        bars[2].style.width = "15px";
    }
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    if (hamburger.classList.contains("active")) {
        bars[1].style.width = "25px";
        bars[2].style.width = "25px";
        document.documentElement.style.overflow = "hidden";
    } else {
        bars[1].style.width = "20px";
        bars[2].style.width = "15px";
        document.documentElement.style.overflow = "auto";
    }
});

document.querySelectorAll(".menu__item").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.documentElement.style.overflow = "auto";
        navMenu.blur();
    })
);

// console
const log = (text) => {
    const styles = [
        'font-weight: bold',
        'font-size: 50px',
        'color: red',
        'text-shadow: 3px 3px 0 rgb(217,31,38), 6px 6px 0 rgb(226,91,14), 9px 9px 0 rgb(245,221,8), 12px 12px 0 rgb(5,148,68), 15px 15px 0 rgb(2,135,206), 18px 18px 0 rgb(4,77,145), 21px 21px 0 rgb(42,21,113)'
    ];

    console.log(`%c ${text}`, styles.join(';'));
};

for (let i = 0; i < 100; i++) {
    log('Please help me');
    log('Call 911!!');
    log('Strangers locked me in a room and forced me to drink alcohol');
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
}