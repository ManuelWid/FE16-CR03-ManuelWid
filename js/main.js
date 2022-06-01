// the js tasks couldnt be more cryptic.. i dont know what they mean as they contradict each other.
// also i asked "what does the js tasks mean? for example:
// 'Create another three(3) variables: fest_day1, fest_day2 and fest_day3.
// You should randomly pick three different combinations from bands playing on 
// the same day at different times and sum them together into these variables.'
// does that mean to concatenate 3 strings or to get the prices for the bands and sum them in each variable?"
// and the answer was "Hi Manuel those variable will store the sum of the prices for each festival day"
// which doesnt make much sense either regarding the following tasks..

const band1 = "Sax tonight?";
const band2 = "Misty Gorilla";
const band3 = "The Chip";
const band4 = "Sax tonight?";
const band5 = "Misty Gorilla";
const band6 = "The Chip";
const band7 = "Sax tonight?";
const band8 = "Misty Gorilla";
const band9 = "The Chip";
const band_price1 = 100;
const band_price2 = 120;
const band_price3 = 110;
const band_price4 = 100;
const band_price5 = 120;
const band_price6 = 110;
const band_price7 = 100;
const band_price8 = 120;
const band_price9 = 110;

let fest_day1 = band1 + ", " + band4 + ", " + band7;
let fest_day2 = band2 + ", " + band5 + ", " + band8;
let fest_day3 = band3 + ", " + band6 + ", " + band9;
let fest_day1_price = band_price1 + band_price4 + band_price7;
let fest_day2_price = band_price2 + band_price5 + band_price8;
let fest_day3_price = band_price3 + band_price6 + band_price9;
let fest_total_price = fest_day1_price + fest_day2_price + fest_day3_price;

console.log(`On the first day of the festival, I was lucky to watch ${fest_day1}.`);
console.log(`Then I watched the bands ${fest_day2} on the second day and it cost me ${fest_day2_price}€ in total that day.`);
console.log(`I was a bit tired on the third day but it was so much worth it to watch the bands ${fest_day3} and I spent ${fest_total_price}€ for the three days of the festival.`);
console.log(`If I had booked the concert with enough time in advance, it would have cost me a total of ${fest_total_price*0.7}€ and I would have saved ${fest_total_price*0.3}€.`);
console.log("--------------------");
console.log("");


// better solution 

console.log("using a single array to hold everything and manually loop through each entry");
console.log("--------------------");

// each array represents a day and the content each stage
// arr[day][stage][band/price]
const arr = [
    [["Sax tonight?", 100], ["Sax tonight?", 100], ["Sax tonight?", 100]],
    [["Misty Gorilla", 120], ["Misty Gorilla", 120], ["Misty Gorilla", 120]],
    [["The Chip", 110], ["The Chip", 110], ["The Chip", 110]]
];
let day = [];
let price = 0;
let total = 0;

// instead of doing a for loop for each day you could also loop the whole array and do something for each day
// added the solution at the bottom
arr[0].forEach(function(e){
    day.push(e[0]);
    total += e[1];
});
console.log(`On the first day of the festival, I was lucky to watch ${day}.`);

day = [];
arr[1].forEach(function(e){
    day.push(e[0]);
    price += e[1];
});
total += price;
console.log(`Then I watched the bands ${day} on the second day and it cost me ${price}€ in total that day.`);

day = [];
arr[2].forEach(function(e){
    day.push(e[0]);
    total += e[1];
});
console.log(`I was a bit tired on the third day but it was so much worth it to watch the bands ${day} and I spent ${total}€ for the three days of the festival.`);

console.log(`If I had booked the concert with enough time in advance, it would have cost me a total of ${total*0.7}€ and I would have saved ${total*0.3}€.`);
console.log("--------------------");
console.log("");


// another solution
console.log("looping through the entire arr array");
console.log("--------------------");

day = [];
price = 0;
total = 0;

arr.forEach(function(date, index){
    date.forEach(function(e){
        day.push(e[0]);
        price += e[1];
        total += e[1];
    });
    switch(index){
        case 0:
            console.log(`On the first day of the festival, I was lucky to watch ${day}.`);
            break;
        case 1:
            console.log(`Then I watched the bands ${day} on the second day and it cost me ${price}€ in total that day.`);
            break;
        case 2:
            console.log(`I was a bit tired on the third day but it was so much worth it to watch the bands ${day} and I spent ${total}€ for the three days of the festival.`);
            break;
        default:
            console.log("something went wrong");
    }
    day = [];
    price = 0;
});

console.log(`If I had booked the concert with enough time in advance, it would have cost me a total of ${total*0.7}€ and I would have saved ${total*0.3}€.`);