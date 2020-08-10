let cssPath = "web-styles.css";
if (navigator.platform === "iPhone" ||
    navigator.platform === "Android" ||
    navigator.platform === "Blackberry")
    cssPath = "mobile-styles.css";

const styleReference = document.createElement("link");
styleReference.setAttribute("rel", "stylesheet");
styleReference.setAttribute("type", "text/css");
styleReference.setAttribute("href", cssPath);

document.getElementsByTagName("head")[0].appendChild(styleReference)
