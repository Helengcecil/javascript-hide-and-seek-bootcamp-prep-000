function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  const first = document.getElementById('grand-node');
    var next = first.children;
    var deepest = false;
    while (!deepest) {
      if (next[0].children.length > 0) {
        next = next[0].children;
      } else {
        deepest = true;
      }
    }
  return next[0];
}
