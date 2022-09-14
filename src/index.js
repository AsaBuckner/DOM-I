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
const allLinks = document.querySelectorAll("header nav a")

allLinks.forEach((a) => a.className = "italic")

navItem1.textContent = siteContent["nav"]["nav-item-1"]
navItem2.textContent = siteContent["nav"]["nav-item-2"]
navItem3.textContent = siteContent["nav"]["nav-item-3"]
navItem4.textContent = siteContent["nav"]["nav-item-4"]
navItem5.textContent = siteContent["nav"]["nav-item-5"]
navItem6.textContent = siteContent["nav"]["nav-item-6"]



// --------------------------------------------------------------------------------//


const logoImg = document.querySelector("#logo-img")

logoImg.src = siteContent["images"]["logo-img"]




// --------------------------------------------------------------------------------//

const cta = document.querySelector(".cta")
const ctaTitle = document.querySelector("h1")
const ctaButton = document.querySelector(".cta button")

ctaTitle.textContent = siteContent["cta"]["h1"]
ctaButton.textContent = siteContent["cta"]["button"]


//---------------------------------------------------------------------------------//

const ctaImg = document.querySelector("img#cta-img")

ctaImg.src = siteContent["images"]["cta-img"]


//--------------------------------------------------------------------------------//


const topCont = document.querySelector(".main-content .top-content")



const featTitle = topCont.querySelector("div:nth-of-type(1) h4")
const featCont = topCont.querySelector("div:nth-of-type(1) p")

const aboutTitle = topCont.querySelector("div:nth-of-type(2) h4")
const aboutCont = topCont.querySelector("div:nth-of-type(2) p")



featTitle.textContent  = siteContent["main-content"]["features-h4"]
featCont.textContent   = siteContent["main-content"]["features-content"]

aboutTitle.textContent = siteContent["main-content"]["about-h4"]
aboutCont.textContent  = siteContent["main-content"]["about-content"]



//-----------------------------------------------------------------------------------//


const middleImg = document.querySelector("img#middle-img")

middleImg.src =  siteContent["images"]["accent-img"]


//-----------------------------------------------------------------------------------//

const botCont = document.querySelector(".main-content .bottom-content")


const ServsTitle = botCont.querySelector("div.text-content:nth-of-type(1) h4")
const ServsCont = botCont.querySelector("div:nth-of-type(1) p")

const prodTitle = botCont.querySelector("div.text-content:nth-of-type(2) h4")
const prodCont = botCont.querySelector("div.text-content:nth-of-type(2) p")

const visionTitle = botCont.querySelector("div.text-content:nth-of-type(3) h4")
const visionCont = botCont.querySelector("div.text-content:nth-of-type(3) p")



ServsTitle.textContent = siteContent["main-content"]["services-h4"]
ServsCont.textContent  = siteContent["main-content"]["services-content"]

prodTitle.textContent  = siteContent["main-content"]["product-h4"]
prodCont.textContent   = siteContent["main-content"]["product-content"]

visionTitle.textContent = siteContent["main-content"]["vision-h4"]
visionCont.textContent = siteContent["main-content"]["vision-content"]


//-----------------------------------------------------------------------------------//

const contactSec =  document.querySelector("section.contact")

const contactTitle = contactSec.querySelector("h4")

const Addy = contactSec.querySelector("p:nth-of-type(1)")
const phone = contactSec.querySelector("p:nth-of-type(2)")
const email = contactSec.querySelector("p:nth-of-type(3)")


Addy.textContent = siteContent["contact"]["address"]
contactTitle.textContent = siteContent["contact"]["contact-h4"]
phone.textContent = siteContent["contact"]["phone"]
email.textContent = siteContent["contact"]["email"]

//-----------------------------------------------------------------------------------//

const footer = document.querySelector("footer a")

footer.textContent = siteContent["footer"]["copyright"]
footer.className = "bold"