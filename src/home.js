const divCreate = () => {
    //as this would be used a lot I created a function for sticking to DRY principles.
     return document.createElement('div');
}

const homeLoad = () => {
    const page = document.querySelector('#page');
    const header = divCreate().classList.add('header');
    const main = divCreate().classList.add('main');
    const footer = divCreate().classList.add('footer');
    const content = divCreate().classList.add('content');
    const about = divCreate().classList.add('content-box about');
    const opening = divCreate().classList.add('content-box opening');
    const location = divCreate().classList.add('content-box location');
}