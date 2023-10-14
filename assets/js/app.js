// music
const playMusic = (volume) => {
    const audio = document.getElementById("music");
    audio.volume = volume;
    audio.play();
    hidePopup();
};

const openPageWithoutMusic = () => {
    hidePopup();
};

const hidePopup = () => {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
};

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const volumeSlider = document.getElementById("volumeSlider");

yesButton.addEventListener("click", () => {
    const volume = volumeSlider.value / 100;
    playMusic(volume);
});

noButton.addEventListener("click", openPageWithoutMusic);

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

// print text
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Dev is Drinking - The Cryptocurrency Club"];
const typingDelay = 100;
const textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex][charIndex];
        charIndex++;
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1500);
});

// console
const log = (text) => {
    const styles = [
        "font-weight: bold",
        "font-size: 50px",
        "color: red",
        "text-shadow: 3px 3px 0 rgb(217,31,38), 6px 6px 0 rgb(226,91,14), 9px 9px 0 rgb(245,221,8), 12px 12px 0 rgb(5,148,68), 15px 15px 0 rgb(2,135,206), 18px 18px 0 rgb(4,77,145), 21px 21px 0 rgb(42,21,113)",
    ];

    console.log(`%c ${text}`, styles.join(";"));
};

for (let i = 0; i < 100; i++) {
    log("Please help me");
    log("Call 911!!");
    log("Strangers locked me in a room and forced me to drink alcohol");
    console.log(
        "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
    );
}

// tokenomics
const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".programing-stats .details ul");

const chartData = {
    labels: [
        "Team",
        "Exchange Listing",
        "Strategic Partners & Advisors",
        "Staking",
        "Company reserves",
        "Marketing",
        "Private Round",
        "Hero Exlusive Presale",
        "TGLP",
    ],
    data: [10, 20, 12, 20, 15, 3, 5, 10, 5],
};

new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: chartData.labels,
        datasets: [
            {
                data: chartData.data,
            },
        ],
    },
    options: {
        borderWidth: 8,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});

const populateUl = () => {
    chartData.labels.forEach((l, i) => {
        let li = document.createElement("li");
        li.innerHTML = `${l}: <span class="percentage">${chartData.data[i]}%</span>`;
        ul.appendChild(li);
    });
};

populateUl();
