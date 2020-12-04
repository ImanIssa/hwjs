const datarray=require('./hw.json');

//EX1
function E1(){
 for(let j=0 ; j<datarray.length ; j++) {

const y =datarray[j].topping;
for(let i=0 ; i<y.length ; i++){

 console.log(y[i].type);
}
}}
E1();

//EX2
function E2(){
 for(let j=0 ; j<datarray.length ; j++) {
 const y =datarray[j].batters.batter;

for(let i=0 ; i<y.length ; i++){
 console.log(y[i].type);

}
}
}
E2();

//EX3+EX4
function E3(){
 var sum = 0;
  var av =3;
for(let j=0 ; j<datarray.length ; j++) {
 var sum =sum+datarray[j].ppu;}
  
 var avg = sum/av;
 console.log(sum);
 console.log(avg);}
 E3();

 //EX5
 for(let j=0 ; j<datarray.length ; j++) {
console.log(datarray[j].id);
const t =datarray[j].batters.batter;
for(let i=0 ; i<t.length ; i++){
  console.log(t[i].id);
  const e =datarray[j].topping;
     for(let m=0 ; m<e.length ; m++){
 console.log(e[m].id);

  }}}
  


