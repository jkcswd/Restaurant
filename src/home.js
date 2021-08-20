const homeLoad = () => {
    //Function to load the home page of website dynamically onto a empty DOM
    //sub function to allow creation,appention to a DOM node, and adding a class
    const nodeClassCreate = (classlist, targetNode) => {
        const div = document.createElement('div');
        div.classList.add(classlist);

        if (targetNode === 'body') {
            document.body.appendChild(div);
        }else {
            const target = document.querySelector(targetNode);
            target.appendChild(div)
        }
    }

    //create all elements used with classes and attach to DOM in correct order.
    const page = nodeClassCreate('page', 'body');
    const header = nodeClassCreate('header', '.page');
    const main = nodeClassCreate('main', '.page');
    const footer = nodeClassCreate('footer', '.page');
    const content = nodeClassCreate('content', '.main');
    const about = nodeClassCreate('content-box', '.content');
    const opening = nodeClassCreate('content-box', '.content');
    const location = nodeClassCreate('content-box', '.content');

    // Append text to elements
    
}


export default homeLoad