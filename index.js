function scuberGreetingForFeet(someValue) {
  let price;

  if (someValue <= 400) {
    price = "This one is on me!"; 
  } else if (someValue <= 2000) {
    price = 'That will be twenty bucks.'; 
  } else if (someValue <= 2500) {
    price = 'I will gladly take your thirty bucks.';
  } else {
    return "No can do.";
  }

  return price;
}

  function ternaryCheckCity(city) {
    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  }


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}