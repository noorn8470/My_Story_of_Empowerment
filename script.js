// Corrected constants (proper naming convention and removed unnecessary array description)
const Box_A = "BAQ.png";
const Box_B = "SerenaW.png";
const Box_C = "MR.png";
const Box_D = "MC.png"; 
const Box_E = "BJK.png"; 
const Box_F = "KS.png"; 

// Corrected course array to use proper titles and dynamic image URLs
let courses = [
    { title: "Bilqis Abdul-Qaadir", description: "As the first Muslim woman to play Division I college basketball without wearing a hijab, Bilqis Abdul-Qaadir shattered stereotypes and paved the way for greater representation and acceptance of Muslim women in sports.", imageURL: Box_A },
    { title: "Serena Williams", description: " Serena Williams' unparalleled dominance on the tennis court, combined with her unwavering advocacy for gender equality and social justice, has made her a powerful symbol of female empowerment and inspiration for athletes around the world.", imageURL: Box_B },
    { title: "Megan Rapinoe", description: " Megan Rapinoe's outspoken leadership on the U.S. Women's National Soccer Team, her fight for equal pay, and her staunch support for LGBTQ+ and athlete wage equality have cemented her status as a trailblazing champion for women's rights in sports and beyond.", imageURL: Box_C },
    { title: "Mary Kom", description: "Against all odds, Mary Kom, a six-time world champion and Olympic medalist in boxing, has defied gender norms and become a revered icon of women's empowerment in India, inspiring a new generation of female athletes to pursue their dreams.", imageURL: Box_D },
    { title: "Billie Jean King", description: "Billie Jean King's historic victory over Bobby Riggs in the 'Battle of the Sexes' tennis match was a watershed moment for the women's liberation movement, solidifying her legacy as a pioneering advocate for gender equality in sports and society.", imageURL: Box_E },
    { title: "Kathrine Switzer", description: "Kathrine Switzer's determination to run the Boston Marathon in 1967, despite having her bib number forcibly removed by an official, shattered the longstanding myth that women were incapable of running long distances, paving the way for the inclusion of women in the sport.", imageURL: Box_F }
];

// Function to add cards to the page
function showCards() {
    const cardContainer = document.getElementById("card-container");
    const templateCard = document.querySelector(".card");

    // Ensure all previous content is cleared before adding new cards
    cardContainer.innerHTML = "";

    courses.forEach(course => {
        const card = templateCard.cloneNode(true);
        card.style.display = "block"; // Make card visible
        editCardContent(card, course.title, course.description, course.imageURL);
        cardContainer.appendChild(card);
    });
}

// Function to update the content of a card
function editCardContent(card, title, description, imageURL) {
    card.querySelector("h2").textContent = title;
    card.querySelector("img").src = imageURL;
    card.querySelector("img").alt = title + " Poster";
    card.querySelector("li").textContent = description; // Simplified to select the first <li>
}

// Event listener for DOMContentLoaded to ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", showCards);
