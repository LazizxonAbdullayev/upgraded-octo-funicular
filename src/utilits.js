let elSelector = function (selector, parent = document) {
    return parent.querySelector(selector);
}

let createEl = element => document.createElement(element);

elCheckInput.addEventListener('click', onCheck = () => {
    if(elCheckInput.checked){
        elSpan.className = 'text-decoration-line-through';
    }else(elSpan.className = 'text-decoration-none');
});