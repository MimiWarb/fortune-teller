let fortune1 = "A surprise opportunity will appear when you least expect it. 🔮";
let fortune2 = "A bug you feared will turn out to be a missing semicolon. 🐛";
let fortune3 = "Great things are coming. But first, have a coffee. ☕";
let fortune4 = "Your next big idea is only one console.log() away. 🚀";
let fortune5 = "Today the universe is running in your favour. No errors detected! 🌈";

let min = 1;
let max = 5;

let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

let fortune = "";

if(randomNumber === 1){
    fortune = fortune1;
    console.log(fortune);
}else if(randomNumber === 2){
    fortune = fortune2;
    console.log(fortune);
}else if(randomNumber === 3){
    fortune = fortune3;
    console.log(fortune);
}else if(randomNumber === 4){
    fortune = fortune4;
    console.log(fortune);
}else{
    fortune = fortune5;
    console.log(fortune);
}
