const body = document.querySelector('body');
body.style.backgroundColor = "hsl(217, 54%, 11%)";
body.style.margin = "0";
body.style.padding = "0";
body.style.boxSizing = "border-box";


const wrapper = document.createElement("div");
wrapper.id = "wrapper";
document.body.appendChild(wrapper);
wrapper.style.maxWidth = "1440px";
wrapper.style.height = "100vh"; 
wrapper.style.margin = "0 auto";
wrapper.style.display = "flex";
wrapper.style.flexWrap = "wrap";
wrapper.style.gap = "20px";
wrapper.style.alignContent = "space-around";
wrapper.style.justifyContent = "space-around";



const card = document.createElement("div");
card.className = "card";
wrapper.appendChild(card);
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.minWidth = "348px";
card.style.height = "590px";
card.style.borderRadius = "10px";



const container = document.createElement("div");
container.className = "container";
card.appendChild(container);
container.style.width = "300px";
container.style.margin = "25px auto";
container.style.fontFamily = "Outfit, sans-serif";
container.style.color = "hsl(215, 51%, 70%)";

const img = document.createElement("img");
container.appendChild(img);
img.src = "images/image-equilibrium.jpg";
img.style.width = "300px";
img.style.borderRadius = "10px";

const title = document.createElement("h3");
container.appendChild(title);
title.innerText = "Equilibrium #3429";
title.style.color = "hsl(0, 0%, 100%)";
title.style.fontWeight = "600";
title.style.fontSize = "22px";

const subtitle = document.createElement("p");
container.appendChild(subtitle);
subtitle.innerText = "Our Equilibrium collection promotes balance and calm.";
subtitle.style.color = "hsl(215, 51%, 70%)";
subtitle.style.fontSize = "18px";





const divBlock = document.createElement("div");
divBlock.className = "divBlock";
container.appendChild(divBlock);
divBlock.style.color = "hsl(0, 0%, 100%)";
divBlock.style.display = "flex";
divBlock.style.justifyContent = "space-between";
divBlock.style.paddingTop = "6px";
divBlock.style.paddingBottom = "25px";
divBlock.style.borderBottom = "2px solid hsl(215, 32%, 27%)";



const divPrice = document.createElement("div");
divPrice.className = "divBlock";
divBlock.appendChild(divPrice);
divPrice.style.display = "flex";
divPrice.style.alignItems = "center";

const priceIcon = document.createElement("img");
priceIcon.className = "priceIcon";
divPrice.appendChild(priceIcon);
priceIcon.src = "images/icon-ethereum.svg";

const spanPrice = document.createElement("span");
spanPrice.className = "spanPrice";
divPrice.appendChild(spanPrice);
spanPrice.innerText = "0.041 ETH";
spanPrice.style.marginLeft = "8px";
spanPrice.style.color = "hsl(178, 100%, 50%)";


// divDate
const divDate = document.createElement("div");
divDate.className = "divBlock";
divBlock.appendChild(divDate);
divDate.style.display = "flex";
divDate.style.alignContent = "center";

const imgIcon = document.createElement("img");
imgIcon.className = "imgIcon";
divDate.appendChild(imgIcon);
imgIcon.src = "images/icon-clock.svg";

const spanText = document.createElement("span");
spanText.className = "spanText";
divDate.appendChild(spanText);
spanText.innerText = "3 days left";
spanText.style.marginLeft = "8px";
spanText.style.color = "hsl(215, 51%, 70%)";


// Footer 
const footer = document.createElement("div");
footer.className = "footer";
container.appendChild(footer);
footer.style.display = "flex";
footer.style.alignItems = "center";
footer.style.paddingTop = "15px";

const avatar = document.createElement("img");
avatar.className = "footer";
footer.appendChild(avatar);
avatar.src = "images/image-avatar.png";
avatar.style.width = "35px";

const footerSpan = document.createElement("span");
footerSpan.className = "footerSpan";
footer.appendChild(footerSpan);
footerSpan.innerText = "Creation of";
footerSpan.style.paddingLeft = "15px";

const footerLink = document.createElement("a");
footerLink.className = "footerLink";
footer.appendChild(footerLink);
footerLink.innerText = "Jules Wyvern";
footerLink.href = "https://github.com/MyrzaiymAskarova";
footerLink.target = "_blank";
footerLink.style.paddingLeft = "10px";
footerLink.style.textDecoration = "none";
footerLink.target = "_blank";
footerLink.style.color = "white";


alert("Я оцениваю свою работу на 90 баллов");

