function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < lis.length; i++) {
    let m = parseInt(lis[i]);
    lis[i].innerHTML = (m + n).toString();
  }
}

function deepestChild() {
  let current = document.getElementById('grand-node');
  let next = current.querySelector('div');
  while (next) {
    current = next;
    next = current.querySelector('div');
  }
  return current;
  
  /*let current = document.getElementById('grand-node');
  let going = true;
  let next = [];
  while (next.length > 1) {
    const lid = current.querySelectorAll('div');
    for (let i = 0; i < lid.length; i++) {
      next.push(lid[i]);
    }
    current = next[0];
    next.shift();
    going = false;
    if (next.length > 0) {
      current = next[0];
      next = next.slice(1)
    } else {
      going = false;
    }
  }
  //current = current.querySelectorAll('div');
  return current;*/
}