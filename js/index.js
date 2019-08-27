const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM <br> Is <br> Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Setting the Navigation
let navLink = document.getElementsByTagName('a');
for (var i = 0; i < navLink.length; i++) {
    navLink[i].innerHTML = siteContent["nav"]["nav-item-" + (i + 1)];
    navLink[i].style.color = "green";
}

//Setting the CTA
let ctaHeader = document.getElementsByTagName('h1');
ctaHeader[0].innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.getElementsByTagName("button");
ctaButton[0].innerHTML = siteContent["cta"]["button"];

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);


// Setting the Main Content
// Top  Content
let mainContentH4 = document.getElementsByTagName("h4");
let mainContentText = document.getElementsByTagName("p");

// Feature
mainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
mainContentText[0].textContent = siteContent["main-content"]["features-content"];

// About
mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
mainContentText[1].textContent = siteContent["main-content"]["about-content"];

// Middle Content
let middleContent = document.getElementById("middle-img");
middleContent.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// Bottom Content
// Service
mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
mainContentText[2].textContent = siteContent["main-content"]["services-content"];

// Product
mainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
mainContentText[3].textContent = siteContent["main-content"]["product-content"];

// Vision
mainContentH4[4].textContent = siteContent["main-content"]["vision-h4"];
mainContentText[4].textContent = siteContent["main-content"]["vision-content"];


mainContentH4[5].textContent = siteContent["contact"]["contact-h4"];
mainContentText[5].textContent = siteContent["contact"]["address"];
mainContentText[6].textContent = siteContent["contact"]["phone"];
mainContentText[7].textContent = siteContent["contact"]["email"];
mainContentText[8].textContent = siteContent["footer"]["copyright"];