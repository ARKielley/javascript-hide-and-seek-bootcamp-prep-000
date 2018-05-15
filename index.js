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
}