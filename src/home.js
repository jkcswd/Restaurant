import { nodeClassCreate } from "./utilities";

const homeLoad = () => {
    //Function to load the home page of website dynamically onto DOM with initial layout.
    //create innerHTML for nodes that need it.
    const aboutHtml =  '<p>This is a fake restaurant located in the heart of Fake city UK.\
                        It serves a variety of Japanese-Italian fusion dishes such as\
                        Japanese curry linguine and Miso soup risoto </p>';
    const openingHtml = '<h2>Opening Times</h2><p>Monday: Closed</p>\
                        <p>Tuesday: 12:00-23:00</p><p>Wednesday: 12:00-23:00</p>\
                        <p>Thursday: 12:00-23:00</p><p>Friday: 12:00-23:00</p>\
                        <p>Saturday: 12:00-23:00</p><p>Sunday: 12:00-23:00</p>';
    const locationHtml = '<h2>Location</h2><p>123 Fake Street</p><p>Fake City</p><p>FA1 2KE</p>'

    //create all elements used with classes and innerHtml and attach to DOM in correct order.
    nodeClassCreate('content-box', '.content', aboutHtml);
    nodeClassCreate('content-box', '.content', openingHtml );
    nodeClassCreate('content-box', '.content', locationHtml);    
}


export default homeLoad;