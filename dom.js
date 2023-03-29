let a = 0;
let b = 0;
let res = 0;
let action = '+';
let prev_action = '';
let line = '';

const btns = document.querySelectorAll('button');
const res_line = document.querySelector('.result');

Array.from(btns).forEach((btn) => {
  btn.addEventListener('click', getCount);
});

const actions = ['+', '-', 'x', '/', '='];
const arr = [];

function getCount(e) {
  if (actions.includes(e.currentTarget.innerText)) {
    prev_action = action;
    action = e.currentTarget.innerText;
    console.log(`current action: ${action} \nprev action: ${prev_action}`);

    switch (prev_action) {
      case '+':
        a = sum(a, b);
        b = 0;
        res_line.innerText = a;
        break;
      case '-':
        a = diff(a, b);
        b = 0;
        res_line.innerText = a;
        break;
      case 'x':
        a = mult(a, b);
        b = 0;
        res_line.innerText = a;
        break;
      case '/':
        a = divide(a, b);
        b = 0;
        res_line.innerText = a;
        break;
      case '=':
        result();
        break;
    }
  } else if (e.currentTarget.innerText === '±') {
    if (b !== 0) {
      b = b * -1;
      res_line.innerText = b;
    } else {
      a = a * -1;
      res_line.innerText = a;
    }
  } else if (e.currentTarget.innerText === '%') {
    if (b !== 0) {
      a = percent(b);
      b = 0;
      res_line.innerText = a;
    } else {
      a = percent(a);
      res_line.innerText = a;
    }
  } else if (e.currentTarget.innerText === 'C') {
    clear();
  } else {
    b ? (b = b + e.currentTarget.innerText) : (b = e.currentTarget.innerText);
    res_line.innerText = b;
    console.log(b);
  }
}

function sum(a, b) {
  res = +a + +b;
  return res;
}

function diff(a, b) {
  res = +a - +b;
  return res;
}

function mult(a, b) {
  res = +a * +b;
  return res;
}

function divide(a, b) {
  res = +a / +b;
  return res;
}
function percent(b) {
  res = +b / 100;
  return res;
}

function clear() {
  a = 0;
  b = 0;
  res = 0;
  action = '+';
  prev_action = '';
  line = '';
  line = res;
  res_line.innerHTML = line;
}

function result() {
  switch (prev_action) {
    case '+':
      a = sum(a, b);
      b = 0;
      res_line.innerText = a;
      break;
    case '-':
      a = diff(a, b);
      b = 0;
      res_line.innerText = a;
      break;
  }
}
