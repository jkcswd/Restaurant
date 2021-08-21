import { node } from "webpack";

const nodeClassCreate = (classlist, targetNode, html) => {
    // Utility function to allow creation,appention to a DOM node, and adding a class
    const div = document.createElement('div');
    div.classList.add(classlist);

    if (targetNode === 'body') {
        document.body.appendChild(div);
    }else {
        const target = document.querySelector(targetNode);
        target.appendChild(div)
    }
    if (html) {
        div.innerHTML += html;
    }
}

const initLoad = () => {
    //function to load the general layout of webapp

    const headerHtml = '<div><h1>Italian Japanese Fusion Restaurant</h1></div>\
                        <div>イタリア料理と和食</div>';
    const footerHtml = 'Created by James Spencer';

    nodeClassCreate('page', 'body');
    nodeClassCreate('header', '.page', headerHtml);
    nodeClassCreate('tabs', '.page');
    nodeClassCreate('main', '.page');
    nodeClassCreate('footer', '.page', footerHtml);
    nodeClassCreate('content', '.main');

}

export {nodeClassCreate, initLoad};