const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

const nav = document.querySelector("nav")
const navItem1 = document.querySelector("nav a:nth-of-type(1)")
const navItem2 = document.querySelector("nav a:nth-of-type(2)")
const navItem3 = document.querySelector("nav a:nth-of-type(3)")
const navItem4 = document.querySelector("nav a:nth-of-type(4)")
const navItem5 = document.querySelector("nav a:nth-of-type(5)")
const navItem6 = document.querySelector("nav a:nth-of-type(6)")

navItem1.textContent = siteContent["nav"]["nav-item-1"]
navItem2.textContent = siteContent["nav"]["nav-item-2"]
navItem3.textContent = siteContent["nav"]["nav-item-3"]
navItem4.textContent = siteContent["nav"]["nav-item-4"]
navItem5.textContent = siteContent["nav"]["nav-item-5"]
navItem6.textContent = siteContent["nav"]["nav-item-6"]



// --------------------------------------------------------------------------------//


const logoImg = document.querySelector("#logo-img")

logoImg.src = "http://localhost:9000/img/logo.png"




// --------------------------------------------------------------------------------//

const cta = document.querySelector(".cta")
const ctaTitle = document.querySelector("h1")
const ctaButton = document.querySelector(".cta button")

ctaTitle.textContent = "DOM Is Awesome"
ctaButton.textContent = "Get Started"


//---------------------------------------------------------------------------------//

const ctaImg = document.querySelector("#cta-img")

ctaImg.setAttribute("src", "http://localhost:9000/img/cta.png")



//---------------------------------------------------------------------------------//


const mainCont = document.querySelector(".main-content")

const featTitle = mainCont.querySelector("h4:nth-of-type(1)")
const featCont = mainCont.querySelector("p:nth-of-type(1)")

const aboutTitle = mainCont.querySelector(".main-content p:nth-of-type(1)")
const aboutCont = mainCont.querySelector(".main-content p:nth-of-type(1)")

const ServsTitle = mainCont.querySelector(".main-content h4:nth-of-type(3)")
const ServsCont = mainCont.querySelector(".main-content p:nth-of-type(3)")

const prodTitle = mainCont.querySelector(".main-content  h4:nth-of-type(4)")
const prodCont = mainCont.querySelector(".main-content  p:nth-of-type(4)")

const visionTitle = mainCont.querySelector("  h4:nth-of-type(5)")
const visionCont = mainCont.querySelector("  p:nth-of-type(5)")


featTitle.textContent = "Features"
featCont.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  
aboutTitle.textContent = "About"
aboutCont.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  
ServsTitle.textContent = "Services"
ServsCont.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  
prodTitle.textContent = "Product"
prodCont.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  
visionTitle.textContent = "Vision"
visionCont.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."



//-----------------------------------------------------------------------------------//




const middleImg = document.querySelector("#middle-img")

middleImg.src="http://localhost:9000/img/accent.png"










