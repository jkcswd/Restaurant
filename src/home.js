import { nodeClassCreate } from "./utilities";

const homeLoad = () => {
    //Function to load the home page of website dynamically onto DOM with initial layout.
    //create innerHTML for nodes that need it.
    const aboutHtml =  '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac erat dolor.\
                         Etiam aliquet, leo id sollicitudin sodales, arcu ligula\
                        vehicula orci, sit amet suscipit neque augue nec erat. Ut aliquam nunc vel tristique\
                         lobortis.Nunc ornare erat felis, ut vehicula est dapibus sed.\
                         Cras metus nisi, hendrerit vitae ante eget, consectetur ultricies ante. </p>';
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