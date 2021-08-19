const divCreate = (classList) => {
    //as this would be used a lot I created a function for sticking to DRY principles.
     return document.createElement('div').classList.add(classList);
}

const homeLoad = () => {
    //create all elements used with classes.
    const page = document.querySelector('#page');
    const header = divCreate('header');
    const main = divCreate('main');
    const footer = divCreate('footer');
    const content = divCreate('content');
    const about = divCreate('content-box about');
    const opening = divCreate('content-box opening');
    const location = divCreate('content-box location');

    // Append text to elements

    //append elements to the page
}


export default {homeLoad};