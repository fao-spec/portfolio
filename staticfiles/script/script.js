
// let menu = document.getElementById("menu-bar")

// function toggleNav(){
//     let nav = document.querySelector('nav')
//     if (nav.style.display == 'flex'){
//         nav.style.display = "none"
//     }
//     else{
//         nav.style.display = "flex"
//     }
// }

// menu.addEventListener('click', toggleNav)

let hambuger = document.querySelector(".hambuger");
let xoxo = document.querySelector(".x")
let main = document.querySelector(".main");
let mainClicked = document.querySelector(".main-clicked")
let main2 = document.querySelector(".main2")
let main3 = document.querySelector(".main3");
let home = document.querySelector(".home");
let mainHome = document.querySelector(".main-agba");
let mainProjects = document.querySelector(".projects-main");
let projectsClicked = document.querySelector("#btn-click");
let contactClicked = document.querySelector("#btn-contact");
let projectFooter = document.querySelector("#btn-click2");
let aboutFooter = document.querySelector("#btn-click3");
let contactFooter = document.querySelector("#btn-click4");
let lastM3 = document.querySelector(".lastM3")
let nameC = document.querySelector(".name");
let work = document.querySelector(".work");
let project = document.querySelector(".project");
let projectWord = document.querySelector(".project-word");
let aboutMe = document.querySelector(".aboutMe");
let aboutWord = document.querySelector(".about-word");
let contactMe = document.querySelector(".contactMe");
let contactWord = document.querySelector(".contact-word");
let middleAbout = document.querySelector(".middle-about")
let topM2 = document.querySelector(".topM2");
let botttomM2 = document.querySelector(".bottomM2");
let middleContact = document.querySelector(".middle-contact");
let projectOnly = document.querySelector(".project-only")
let projectOnly2 = document.querySelector(".project-only2")
let projectHambuger = document.querySelector(".project-hambuger");
let aboutHambuger = document.querySelector(".about-hambuger");
let contactHambuger = document.querySelector(".contact-hambuger");

document.addEventListener("DOMContentLoaded", function() {
    const messages = JSON.parse('{{ messages|escapejs }}');
    messages.forEach(message => {
        alert(message);
    });
});

function toggle() {
    if (main.style.display == "block") {
        mainClicked.style.display = "block";
        main.style.display = "none";
        main2.style.display ="none";
        main3.style.display ="none";
    } else {
        mainClicked.style.display = "block";
        main.style.display = 'none';
        main2.style.display ="none";
        main3.style.display ="none";
    }
    return;
}
hambuger.addEventListener("click", toggle);

function toggleClicked() {
    if (main.style.display == "none") {
        main.style.display = "block";
        mainClicked.style.display = "none";
        main2.style.display ="block";
        main3.style.display ="flex";
    } else if(project.style.display == "none") {
        project.style.display = "none"
        projectWord.style.display = "none"
        aboutMe.style.display = "none"
        aboutWord.style.display = "none"
        projectOnly.style.display = "none"
        projectOnly2.style.display = "none"
        projectsClicked.style.display = "grid"
        projectsClicked.style.width = "100%"
        nameC.style.display = "block"
        work.style.display = "block"
        contactClicked.style.display = "block"
        contactClicked.style.width = "100%"
        lastM3.style.display = "grid"
        middleAbout.style.display = "none";
        botttomM2.style.display = "grid";
        middleContact.style.display = "none";
        contactMe.style.display = "none";
        contactWord.style.display = "none";
    }else if(aboutMe.style.display == "none"){
        nameC.style.display = "none";
        work.style.display = "none";
        project.style.display = "none";
        projectWord.style.display = "none";
        mainClicked.style.display = "none";
        main.style.display = "block";
        aboutMe.style.display = "block";
        aboutWord.style.display = "block";
        middleAbout.style.display = "block"
        middleContact.style.display = "none"
        contactMe.style.display = "none";
        contactWord.style.display = "none";
        contactClicked.style.display = "block"
        // console.log("hi")
    }
    return;
}
xoxo.addEventListener("click", toggleClicked)

// function homeClick() {
//     main.style.display = "block";
//     mainClicked.style.display = "none";
//     main2.style.display ="block";
//     main3.style.display ="flex";
//     nameC.style.display = "block";
//     work.style.display = "block";
//     project.style.display = "none";
//     projectWord.style.display = "none";
//     aboutMe.style.display = "none";
//     aboutWord.style.display = "none";
//     projectOnly.style.display = "none";
//     projectOnly2.style.display = "none"
//     projectsClicked.style.display = "grid";
//     projectsClicked.style.width = "100%";
//     contactClicked.style.width = "100%";
//     lastM3.style.display = "grid";
//     topM2.style.display = "block";
//     middleAbout.style.display = "none";
//     botttomM2.style.display = "grid";
//     middleContact.style.display = "none";
//     contactMe.style.display = "none";
//     contactWord.style.display = "none";
//     contactClicked.style.display = "grid";
// }
// home.addEventListener("click", homeClick);

// function projectClick() {
//     nameC.style.display = "none";
//     work.style.display = "none";
//     project.style.display = "block";
//     projectWord.style.display = "block";
//     topM2.style.display = "none";
//     projectOnly.style.display = "grid";
//     projectOnly2.style.display = "grid"
//     projectsClicked.style.display = "none";
//     lastM3.style.display = "block";
//     contactClicked.style.width = "100%";
//     mainClicked.style.display = "none";
//     main.style.display = "block";
//     main2.style.display ="block";
//     main3.style.display ="flex";
//     aboutMe.style.display = "none";
//     aboutWord.style.display = "none";
//     middleAbout.style.display = "none";
//     botttomM2.style.display = "grid";
//     middleContact.style.display = "none";
//     contactMe.style.display = "none";
//     contactWord.style.display = "none";
//     contactClicked.style.display = "grid";
// }
// projectsClicked.addEventListener("click", projectClick);
// projectHambuger.addEventListener("click", projectClick);
// projectFooter.addEventListener("click", projectClick)

// function aboutClick() {
//     nameC.style.display = "none";
//     work.style.display = "none";
//     project.style.display = "none";
//     projectWord.style.display = "none";
//     mainClicked.style.display = "none";
//     main.style.display = "block";
//     aboutMe.style.display = "block";
//     aboutWord.style.display = "block";
//     topM2.style.display = "none";
//     projectsClicked.style.display = "grid";
//     projectsClicked.style.width = "100%";
//     main2.style.display ="block";
//     main3.style.display ="flex";
//     botttomM2.style.display = "none";
//     lastM3.style.display = "block";
//     projectsClicked.style.display = "none";
//     middleAbout.style.display = "block";
//     contactClicked.style.width = "100%";
//     middleContact.style.display = "none";
//     contactMe.style.display = "none";
//     contactWord.style.display = "none";
//     contactClicked.style.display = "grid";
// }
// aboutHambuger.addEventListener("click", aboutClick);
// aboutFooter.addEventListener("click", aboutClick);

// function contactClick() {
//     nameC.style.display = "none";
//     work.style.display = "none";
//     project.style.display = "none";
//     projectWord.style.display = "none";
//     mainClicked.style.display = "none";
//     main.style.display = "block";
//     aboutMe.style.display = "none";
//     aboutWord.style.display = "none";
//     contactMe.style.display = "block";
//     contactWord.style.display = "block";
//     topM2.style.display = "none";
//     main2.style.display ="block";
//     main3.style.display ="flex";
//     botttomM2.style.display = "none";
//     lastM3.style.display = "block";
//     projectsClicked.style.display = "none";
//     middleAbout.style.display = "none";
//     contactClicked.style.display = "none";
//     middleContact.style.display = "block";
// }
// contactHambuger.addEventListener("click", contactClick);
// contactFooter.addEventListener("click", contactClick);
// contactClicked.addEventListener("click", contactClick);