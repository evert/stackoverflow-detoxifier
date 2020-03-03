document.addEventListener('ready', main());


function main() {
  
  hideABunch(
    document.getElementsByClassName('js-vote-down-btn')
  );
  hideABunch(
    document.getElementsByClassName('close-question-link')
  );

  for(const voteElem of document.getElementsByClassName('js-vote-count')) {
    const newElem = voteElem.cloneNode(true);
    voteElem.parentNode.replaceChild(newElem, voteElem);
  }

}

function hideABunch(elems) {

  for(const item of elems) {
    hide(item);
  }

}

function hide(elem) {

  elem.style.display = 'none';

}

