let moviePrice = 0;
let selectedMovie = "";

const seats = document.querySelectorAll(".seat");
const totalPrice = document.getElementById("totalPrice");
const seatCount = document.getElementById("seatCount");
const selectedMovieText =
document.getElementById("selectedMovie");

let selectedSeats = [];

/* Disable Past Dates */

const datePicker =
document.getElementById("datePicker");

let today = new Date();

let yyyy = today.getFullYear();
let mm = String(today.getMonth() + 1)
.padStart(2, "0");

let dd = String(today.getDate())
.padStart(2, "0");

let currentDate =
`${yyyy}-${mm}-${dd}`;

datePicker.min = currentDate;


/* Movie Selection */

function selectMovie(card,movie,price)
{
let allCards =
document.querySelectorAll(".movie-card");

allCards.forEach(item=>{
item.classList.remove("selected");
});

card.classList.add("selected");

selectedMovie = movie;
moviePrice = price;

selectedMovieText.innerHTML =
`🎬 Selected Movie:
<b>${movie}</b>
| ₹${price} per seat`;

updateTotal();
}


/* Seat Selection */

seats.forEach(seat=>{

seat.addEventListener("click",()=>{

if(selectedMovie === "")
{
alert(
"Please select a movie first!"
);

return;
}

seat.classList.toggle("selected");

let seatName =
seat.innerText;

if(
seat.classList.contains("selected")
)
{
selectedSeats.push(seatName);
}
else
{
selectedSeats =
selectedSeats.filter(
item => item !== seatName
);
}

updateTotal();

});

});


/* Total Calculation */

function updateTotal()
{
seatCount.innerText =
selectedSeats.length;

totalPrice.innerText =
selectedSeats.length *
moviePrice;
}


/* Booking Button */

document
.getElementById("bookBtn")
.addEventListener("click",()=>{

if(selectedMovie === "")
{
alert(
"Please select a movie first!"
);
return;
}

if(datePicker.value === "")
{
alert(
"Please select a date!"
);
return;
}

let showTime =
document
.getElementById("showTime")
.value;

if(showTime === "")
{
alert(
"Please select a show time!"
);
return;
}

if(selectedSeats.length === 0)
{
alert(
"Please select seats!"
);
return;
}

let cinema =
document
.getElementById("cinema")
.value;

let total =
selectedSeats.length *
moviePrice;

alert(

"🎟 BOOKING CONFIRMED\n\n"

+

"Movie : "
+ selectedMovie +

"\n\nCinema : "
+ cinema +

"\n\nDate : "
+ datePicker.value +

"\n\nShow : "
+ showTime +

"\n\nSeats : "
+ selectedSeats.join(", ")

+

"\n\nTotal Amount : ₹"
+ total

+

"\n\nEnjoy Your Movie 🍿"

);

});


/* Optional Screen Effect */

console.log(
"Movie Booking Website Loaded Successfully"
);