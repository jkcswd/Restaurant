const nodeClassCreate = (classlist, targetNode, html, ...args) => {
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

    if (args){
        //unlimited paramenters at the end of function to add multiple classes to objects.
        [...args].forEach(arg => div.classList.add(arg));
    }
}

const initLoad = () => {
    //function to load the general layout of webapp

    const headerHtml = '<div><h1>Italian Japanese Fusion Restaurant</h1></div>\
                        <div>イタリア料理と和食</div>';
    const footerHtml = 'Created by James Spencer';
    const homeTabHtml = '<button>Home</button>'
    const menuTabHtml = '<button>Menu</button>'
    const contactTabHtml = '<button>Contact</button>'

    document.body.innerHTML = '' //clear all nodes from DOM.
    nodeClassCreate('page', 'body');
    nodeClassCreate('header', '.page', headerHtml);
    nodeClassCreate('main', '.page');
    nodeClassCreate('tabs', '.main');
    nodeClassCreate('footer', '.page', footerHtml);
    nodeClassCreate('content', '.main');
    nodeClassCreate('tab', '.tabs', homeTabHtml, 'home',);
    nodeClassCreate('tab', '.tabs', menuTabHtml, 'menu');
    nodeClassCreate('tab', '.tabs',contactTabHtml, 'contact');
}

export {nodeClassCreate, initLoad};