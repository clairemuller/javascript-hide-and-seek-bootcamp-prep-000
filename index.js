
function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.querySelector('#nested .target');
}


function deepestChild() {
  let node = document.querySelector('#grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}


function increaseRankBy(n) {
  let rankLists = document.querySelectorAll('.ranked-list');
  
  for (let i = 0; i < rankLists.length; i++) {
    let children = rankLists[i].children;
    
    for (let j = 0; j < children[j].length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }

}


