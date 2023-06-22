// Create snake water & Gun game in javascript the game should ask you to enter S,W or G the computer should able to randomly generate S ,W anf=d G  and  declare win or loss using alert Use alert , prompt and confirm whereever required!
  
let user=(prompt("Enter S , W or G"))
let cpuI =Math.floor(Math.random()*3);
let cpu =["S","W","G"][cpuI]

const match =(cpu,user)=>{
  if(cpu === user){
    return "THE MATCH IS TIE" ;
    }
else if(cpu==="S" && user==="W"){
  return "cpu";
}
    else if(cpu==="S" && user==="G"){
  return "user";
}
  else if(cpu==="G" && user==="W"){
  return "user";
} 
    else if(cpu==="G" && user==="S"){
  return "cpu";
}
  else if(cpu==="W" && user==="S"){
  return "user";
} 
   else if(cpu==="W" && user==="G"){
  return "cpu";
} 
   }
let result=match(cpu,user)
document.write(`CPU:${cpu} <br>and USER:${user}<br>The winner is: ${result.toUpperCase()}`)