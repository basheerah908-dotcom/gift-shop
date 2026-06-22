function openLogin(){
document.getElementById(
"loginPopup"
).style.display = "flex";
}

function closeLogin(){
document.getElementById(
"loginPopup"
).style.display = "none";
}

/* Search Feature */

const searchInput =
document.getElementById(
"searchInput"
);

searchInput.addEventListener(
"keyup",
function(){

let filter =
searchInput.value
.toLowerCase();

let products =
document.querySelectorAll(
".product-card"
);

products.forEach(item => {

let productName =
item.querySelector("h3")
.innerText
.toLowerCase();

if(productName.includes(filter)){

item.style.display =
"block";

}else{

item.style.display =
"none";

}

});

});

/* Add To Cart */

/* Real Add To Cart */

let cart =
document.querySelector(
".cart span"
);

let cartItems =
JSON.parse(
localStorage.getItem("cartItems")
) || [];

cart.innerHTML =
"Cart (" +
cartItems.length +
")";

document.querySelectorAll(
".product-card button"
).forEach(button => {

button.onclick =
function(){

let product =
this.parentElement;

let name =
product.getAttribute(
"data-name"
);

let price =
product.getAttribute(
"data-price"
);

let image =
product.querySelector("img").src;

cartItems.push({
name:name,
price:price,
image:image
});

localStorage.setItem(
"cartItems",
JSON.stringify(cartItems)
);

cart.innerHTML =
"Cart (" +
cartItems.length +
")";

alert(
name +
" Added 💗"
);

};

});


/* Search Placeholder */

const placeholders = [
"Search Birthday Gifts 🎂",
"Search Wallet Gifts 💝",
"Search Surprise Box 🎁",
"Search Photo Frame 🖼"
];

let i = 0;

setInterval(() => {

document.getElementById(
"searchInput"
).placeholder =
placeholders[i];

i++;

if(i >=
placeholders.length){
i = 0;
}

},2000);

/* Product Image Click */

document.querySelectorAll(
".product-card img"
).forEach(image => {

image.onclick =
function(){

window.open(
this.src,
"_blank"
);

};

});

/* Loading Screen */

window.onload =
function(){

setTimeout(() => {

document.getElementById(
"loader"
).style.display =
"none";

},3000);

}

/* Login Signup */

let signup = false;

function toggleForm(){

let title =
document.querySelector(
".login-box h2"
);

let button =
document.querySelector(
".login-box button"
);

let toggle =
document.getElementById(
"toggleText"
);

if(!signup){

title.innerHTML =
"Sign Up";

button.innerHTML =
"Create Account";

toggle.innerHTML =
`Already have account?
<span onclick="toggleForm()">
Login
</span>`;

signup = true;

}else{

title.innerHTML =
"Login";

button.innerHTML =
"Login";

toggle.innerHTML =
`Don't have account?
<span onclick="toggleForm()">
Sign Up
</span>`;

signup = false;

}

}

/* Auto Slider */

const slides = [
"images/gift1.jpg.jpeg",
"images/gift2.jpg.jpeg",
"images/gift3.jpg.jpeg",
"images/gift4.jpg.jpeg",
"images/gift5.jpg.jpeg",
"images/gift6.jpg.jpeg",
"images/gift7.jpg.jpeg"
];

let slideIndex = 0;

setInterval(() => {

slideIndex++;

if(slideIndex >=
slides.length){

slideIndex = 0;

}

document.getElementById(
"slideImage"
).src =
slides[slideIndex];

},2500);

/* Product Popup */


document.querySelectorAll(
".product-card img"
).forEach(image => {

image.onclick =
function(){

document.getElementById(
"imagePopup"
).style.display =
"flex";

document.getElementById(
"popupImg"
).src =
this.src;

};

});

function closeImage(){

document.getElementById(
"imagePopup"
).style.display =
"none";

}

/* Dark Mode Toggle */

document.getElementById(
"darkModeBtn"
).onclick = function(){

document.body.classList.toggle(
"dark-mode"
);

}

/* Demo OTP */

let generatedOTP = "";

function sendOTP(){

generatedOTP =
Math.floor(
1000 + Math.random() * 9000
);

alert(
"Your OTP is: " +
generatedOTP
);

document.getElementById(
"otpInput"
).style.display =
"block";

let enteredOTP =
prompt(
"Enter OTP"
);

if(
enteredOTP ==
generatedOTP
){

alert(
"Login Success 💗"
);

}else{

alert(
"Wrong OTP ❌"
);

}

}

/* Show Username After Login */

function loginUser(){

let username =
document.querySelector(
'.login-box input[type="text"]'
).value;

if(username == ""){
alert("Enter Username");
return;
}

document.getElementById(
"userName"
).innerHTML =
"👤 " + username;

closeLogin();

}

/* Login button click */

document.querySelectorAll(
'.login-box button'
)[1].onclick =
loginUser;

function filterProduct(category){

let products =
document.querySelectorAll(
".product-card"
);

products.forEach(product => {

if(
category == "all"
){

product.style.display =
"block";

}else if(
product.getAttribute(
"data-category"
) == category
){

product.style.display =
"block";

}else{

product.style.display =
"none";

}

});

}   

/* Add Customer Review */

function addReview(){

let name =
document.getElementById(
"customerName"
).value;

let review =
document.getElementById(
"customerReview"
).value;

if(name == "" || review == ""){
alert(
"Please fill all fields 😅"
);
return;
}

let reviewBox =
document.querySelector(
".review-box"
);

reviewBox.innerHTML +=
`
<div class="review-card">

<h3>⭐⭐⭐⭐⭐</h3>

<p>
"${review}"
</p>

<b>- ${name}</b>

</div>
`;

document.getElementById(
"customerName"
).value = "";

document.getElementById(
"customerReview"
).value = "";

alert(
"Review Added 💗"
);

}



/* Auto Banner Slider */

const bannerImages = [

"images/gift1.jpg.jpeg",

"images/gift2.jpg.jpeg",

"images/gift3.jpg.jpeg",

"images/gift4.jpg.jpeg",

"images/gift5.png.jpeg",

"images/gift6.jpg.jpeg"

];

let bannerIndex = 0;

setInterval(() => {

bannerIndex++;

if(
bannerIndex >=
bannerImages.length
){
bannerIndex = 0;
}

document.getElementById(
"mainBanner"
).src =
bannerImages[
bannerIndex
];

},3000);



