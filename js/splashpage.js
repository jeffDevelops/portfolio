const possibleGreetings = [
  'I leverage code to do good things.',
  'Nothing brings me more joy than when there\'s JSON in the console.',
  'I live for the "Aha!" moment.',
  'I\'ve been known to laugh out loud at error messages.'
];
let alreadyDisplayedGreetings = [];
let establishedGreetingOrderIndex = 0;

// DOM Nodes (assigned values in DOMContentLoaded)
let greetingNode;
let greetingContainerNode;

document.addEventListener('DOMContentLoaded', () => {
  greetingNode = document.querySelector('#dynamic_greeting');
  greetingContainerNode = document.querySelector('#dynamic_greeting_container');

  greetingNode.classList.add('uk-animation-slide-right-medium');
  greetingNode.textContent = possibleGreetings[0];
  alreadyDisplayedGreetings.push(0);

  const greetingInterval = setInterval(replaceGreeting, 6000);
});


function replaceGreeting() {
  greetingContainerNode.removeChild(greetingNode);

  if (alreadyDisplayedGreetings.length === possibleGreetings.length) { // An order to display greetings has been established randomly for the entire possibleGreetings array
    displayMessageInEstablishedOrder();
  } else { // still establishing message order
    const currentGreetingIndex = Number(possibleGreetings.indexOf(greetingNode.textContent));
    alreadyDisplayedGreetings.push(currentGreetingIndex);
    const newGreetingIndex = getNewGreetingIndex(currentGreetingIndex);
    greetingContainerNode.appendChild(greetingNode);
    greetingNode.classList.add('uk-animation-slide-right-medium');
    greetingNode.textContent = possibleGreetings[newGreetingIndex];
  }
}

function getNewGreetingIndex(currentGreetingIndex) {
  const newIndex = generateRandomGreetingIndex(possibleGreetings);  

  if (alreadyDisplayedGreetings.includes(newIndex)) {
    return getNewGreetingIndex(currentGreetingIndex); // Never display a greeting again until they've all been displayed
  } else {
    return newIndex;
  }
}

function generateRandomGreetingIndex(greetingArray) {
  const randomIndex = Math.floor(Math.random() * (greetingArray.length)); // allows more greeting to be added in the future
  return randomIndex;
}

function displayMessageInEstablishedOrder() {
  greetingContainerNode.appendChild(greetingNode);
  greetingNode.classList.add('uk-animation-slide-right-medium');
  greetingNode.textContent = possibleGreetings[establishedGreetingOrderIndex];

  // increment the index at which to access possibleGreetings, go back to beginning of queue, if end of array is reached
  if (establishedGreetingOrderIndex === possibleGreetings.length - 1) {
    establishedGreetingOrderIndex = 0;
  } else {
    establishedGreetingOrderIndex++;
  }
}