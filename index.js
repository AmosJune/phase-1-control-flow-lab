function scuberGreetingForFeet(ride){
  // Write your code here!
  if(ride <= 400){
    return 'This one is on me!'
  }
  else if(1999 < ride && ride < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return 'No can do.'
  }
}
scuberGreetingForFeet();
scuberGreetingForFeet();
scuberGreetingForFeet();

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(generous){
  // Write your code here!
  switch(generous){
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you."
      break;
    default:
        return "Bye."
        break;
  }

}