
let userInput = document.getElementById("date")
let result = document.getElementById("result")
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge(){
let yourdob = new Date(userInput.value);
let y1 = yourdob.getFullYear(); 
let m1 = yourdob.getMonth() +1; //bcz it starts from index 0 
let d1 = yourdob.getDate(); 

let today = new Date()

let y2 = today.getFullYear();
let m2 = today.getMonth() +1;
let d2 = today.getDate();

let y3,m3,d3;

y3 = y2 - y1;

if(m2 >= m1){
    m3 = m2 -m1
}else{
    y3--;
    m3 = 12 + m2 - m1
}
if(d2 >= d1){
    d3 = d2 -d1; 
}else{
    m3--;
    d3 = 31 + d2 - d1;
}
if(m3 < 0){
    m3 = 11;
    y3--;
}
result.innerHTML = `"Your age is: <span> ${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days"`;

}