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

export {nodeClassCreate};