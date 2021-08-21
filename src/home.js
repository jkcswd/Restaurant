const homeLoad = () => {
    //Function to load the home page of website dynamically onto a empty DOM
    //sub function to allow creation,appention to a DOM node, and adding a class
    const nodeClassCreate = (classlist, targetNode, html) => {
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

    //create innerHTML for nodes that need it.
    const headerHtml = '<div><h1>Italian Japanese Fusion Restaurant</h1></div>\
                        <div>イタリア料理と和食</div>';
    const footerHtml = 'Created by James Spencer';
    const aboutHtml =  '<p>This is a fake restaurant located in the heart of Fake city UK.\
                        It serves a variety of Japanese-Italian fusion dishes such as\
                        Japanese curry linguine and Miso soup risoto </p>';
    const openingHtml = '<h2>Opening Times</h2><p>Monday: Closed</p>\
                        <p>Tuesday: 12:00-23:00</p><p>Wednesday: 12:00-23:00</p>\
                        <p>Thursday: 12:00-23:00</p><p>Friday: 12:00-23:00</p>\
                        <p>Saturday: 12:00-23:00</p><p>Sunday: 12:00-23:00</p>';
    const locationHtml = '<h2>Location</h2><p>123 Fake Street</p><p>Fake City</p><p>FA1 2KE</p>'

    //create all elements used with classes and innerHtml and attach to DOM in correct order.
    const page = nodeClassCreate('page', 'body');
    const header = nodeClassCreate('header', '.page', headerHtml);
    const main = nodeClassCreate('main', '.page');
    const footer = nodeClassCreate('footer', '.page', footerHtml);
    const content = nodeClassCreate('content', '.main');
    const about = nodeClassCreate('content-box', '.content', aboutHtml);
    const opening = nodeClassCreate('content-box', '.content', openingHtml );
    const location = nodeClassCreate('content-box', '.content', locationHtml);    
}


export default homeLoad