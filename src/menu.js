import { nodeClassCreate } from "./utilities";

const menuLoad = () => {
    const aHtml = 'Item A';
    const bHtml = 'Item B';
    const cHtml = 'Item C';
    const dHtml = 'Item D';
    const eHtml = 'Item E';

    nodeClassCreate('content-box','.content', aHtml);
    nodeClassCreate('content-box','.content', bHtml);
    nodeClassCreate('content-box','.content', cHtml);
    nodeClassCreate('content-box','.content', dHtml);
    nodeClassCreate('content-box','.content', eHtml);

    const content = document.querySelector('.content');

    content.style.marginBottom = '300px'
}


export default menuLoad