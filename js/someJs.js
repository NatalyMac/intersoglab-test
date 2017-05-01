/**
 * Created by natali on 01.05.17.
 */
function init() {
    var clickHeaders = document.getElementsByClassName("toggleHeader");
    for ( var i = 0; i < clickHeaders.length; i++ ) {
       clickHeaders[i].onclick = toggleItem;
    }

    var clickBorderedItems = document.getElementsByClassName("toggleModal");
    for ( i = 0; i < clickBorderedItems.length; i++ ) {
        clickBorderedItems[i].onclick = showModalDetail;
    }
}

function toggleItem() {
    var itemClass = this.parentNode.className;
    var item = this.parentNode;

    if (itemClass == "detailsItem hide"){
        removeClass(item, "hide")
    } else {
        addClass(item, "hide")
    }
}

function addClass(item, nameClass){
    if (item.classList) {
        item.classList.add(nameClass)
    }
}

function removeClass(item, nameClass){
    if (item.classList) {
        item.classList.remove(nameClass)
    }
}

function createText(text, parent){
    var fr = document.createElement('p');
    fr.innerHTML = text;
    parent.appendChild(fr);
}

function chooseText(keyWord, parent){
    switch (keyWord) {
        case 'python':
            createText("Django", parent);
            break;
        case 'php':
            createText("Yii2, Laravel", parent);
            break;
        case 'js':
            createText("BackBone, Marionette, Meteor, ReactJs", parent);
            break;
        case "html":
            createText("Bootstrap", parent);
            break;
    }
}

function clearModal(parent){
    var itemsToClear = parent.getElementsByTagName('p');
    for (var i=0; i<itemsToClear.length; i++){
        parent.removeChild(itemsToClear[i]);
    }
}

function showModal() {
    var darkLayer = document.createElement('div');
    addClass(darkLayer, "shadow");
    document.body.appendChild(darkLayer);

    var modalWin = document.getElementById('modalWin');
    modalWin.style.display = 'block';

    var closeBtn = document.getElementById('closeBtn');
    closeBtn.onclick = function () {
        darkLayer.parentNode.removeChild(darkLayer);
        modalWin.style.display = 'none';
        return false;
    };
    return modalWin;
}


function showModalDetail(){
    var itemClass = this.className;
    itemClass = itemClass.split(' ');
    itemClass = itemClass[itemClass.length-1];
    var modalWin = showModal();
    clearModal(modalWin);
    chooseText(itemClass, modalWin);

}