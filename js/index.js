const projectsLink = document.querySelector('header a[href="#projects"]');

projectsLink.addEventListener("click", scrollToProjectsSection);

function scrollToProjectsSection(event) {
    event.preventDefault();

    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
        const offsetTop = projectsSection.offsetTop;
        const headerHeight = document.querySelector("header").offsetHeight;
        const smoothScrollOptions = {
            behavior: "smooth",
            block: "start",
            inline: "start",
        };

        window.scrollTo({
            top: offsetTop - headerHeight,
            ...smoothScrollOptions,
        });
    }
}
const contactSelect = document.getElementById("contactSelect");
const contactSelectFooter = document.getElementById("contactSelectFooter");

contactSelect.addEventListener("change", handleContactOption);
contactSelectFooter.addEventListener("change", handleContactOption);

function handleContactOption(event) {
    const selectedOption = event.target.value;
    if (selectedOption === "email") {
        window.location.href = "mailto:azbelekaterina@gmail.com";
    } else if (selectedOption === "call") {
        window.location.href = "tel:+14162780743"; 
    }
    
    event.target.selectedIndex = 0;
}




