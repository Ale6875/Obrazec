function generateRandomID() {
    const adjectives = ["Cool", "Fast", "Silent", "Brave", "Mighty"];
    const nouns = ["Warrior", "Gamer", "Hunter", "Wizard", "Ninja"];
    const numbers = Math.floor(Math.random() * 9999) + 1;
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective}${randomNoun}${numbers}`;
}

function displayRandomIDs() {
    const namDivs = document.querySelectorAll("#nam div");
    namDivs.forEach(div => {
        div.textContent = generateRandomID();
        
        div.onclick = function() {
            document.getElementById('onlineid').value = div.textContent;
        };
    });
}

function refreshNames() {
    const ranDivs = document.querySelectorAll(".ran");
    ranDivs.forEach(div => {
        div.textContent = generateRandomID();
    });
}

document.addEventListener("DOMContentLoaded", displayRandomIDs);