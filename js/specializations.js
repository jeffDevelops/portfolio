let mongo, mongoWheelhouse;
let express, expressWheelhouse;
let react, reactWheelhouse;
let node, nodeWheelhouse;

document.addEventListener('DOMContentLoaded', () => {
  mongo = document.getElementById('mongo');
  mongoWheelhouse = document.getElementById('mongo_wheelhouse');
  
  express = document.getElementById('express');
  expressWheelhouse = document.getElementById('express_wheelhouse');

  react = document.getElementById('react');
  reactWheelhouse = document.getElementById('react_wheelhouse');

  node = document.getElementById('node');
  nodeWheelhouse = document.getElementById('node_wheelhouse');

  mongo.addEventListener('mouseover', displayMongoText);
  express.addEventListener('mouseover', displayExpressText);
  react.addEventListener('mouseover', displayReactText);
  node.addEventListener('mouseover', displayNodeText);

  // Init Mongo descriptive text
  UIkit.scrollspy(mongo, () => displayMongoText());
});

function displayMongoText() {
  if (window.innerWidth < 900) mongoWheelhouse.style.display = 'block';
  dismissExpressText();
  dismissReactText();
  dismissNodeText();
  mongo.classList.add('isFlipped');
  mongoWheelhouse.style.display = 'block';
  mongoWheelhouse.classList.add('revealed');
  mongo.removeEventListener('mouseover', displayMongoText);
}

function displayExpressText() {
  if (window.innerWidth < 900) expressWheelhouse.style.display = 'block';
  dismissMongoText();
  dismissReactText();
  dismissNodeText();
  express.classList.add('isFlipped');
  expressWheelhouse.style.display = 'block';
  expressWheelhouse.classList.add('revealed');
  express.removeEventListener('mouseover', displayExpressText);
}

function displayReactText() {
  if (window.innerWidth < 900) reactWheelhouse.style.display = 'block';
  dismissMongoText();
  dismissExpressText();
  dismissNodeText();
  react.classList.add('isFlipped');
  reactWheelhouse.style.display = 'block';
  reactWheelhouse.classList.add('revealed');
  react.removeEventListener('mouseover', displayReactText);
}

function displayNodeText() {
  if (window.innerWidth < 900) nodeWheelhouse.style.display = 'block';
  dismissMongoText();
  dismissExpressText();
  dismissReactText();
  node.classList.add('isFlipped');
  nodeWheelhouse.style.display = 'block';
  nodeWheelhouse.classList.add('revealed');
  node.removeEventListener('mouseover', displayNodeText);
}

function dismissMongoText() {
  if (window.innerWidth < 900) mongoWheelhouse.style.display = 'none';
  mongo.classList.remove('isFlipped');
  mongoWheelhouse.classList.remove('revealed');
  mongo.removeEventListener('mouseout', dismissMongoText);
  mongo.addEventListener('mouseover', displayMongoText);
}

function dismissExpressText() {
  if (window.innerWidth < 900) expressWheelhouse.style.display = 'none';
  express.classList.remove('isFlipped');
  expressWheelhouse.classList.remove('revealed');
  express.removeEventListener('mouseout', dismissExpressText);
  express.addEventListener('mouseover', displayExpressText);
}

function dismissReactText() {
  if (window.innerWidth < 900) reactWheelhouse.style.display = 'none';
  react.classList.remove('isFlipped');
  reactWheelhouse.classList.remove('revealed');
  react.removeEventListener('mouseout', dismissReactText);
  react.addEventListener('mouseover', displayReactText);
}

function dismissNodeText() {
  if (window.innerWidth < 900) nodeWheelhouse.style.display = 'none';
  node.classList.remove('isFlipped');
  nodeWheelhouse.classList.remove('revealed');
  node.removeEventListener('mouseout', dismissNodeText);
  node.addEventListener('mouseover', displayNodeText);
}

// Helpers
const debounce = (func, delay) => {
  let inDebounce
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  }
}