import { nodeClassCreate } from "./utilities";

const menuLoad = () => {
    const curryHtml = 'Japanese beef curry linguine';
    const misoHtml = 'Miso Risoto'
    const sukitagHtml = 'Sukiyaki Tagliatelle'
    const yakipizzaHtml = 'Yakiniku Pizza'
    const matchaHtml = 'Matcha Gelato'

    nodeClassCreate('content-box','.content', curryHtml)
    nodeClassCreate('content-box','.content', misoHtml)
    nodeClassCreate('content-box','.content', sukitagHtml)
    nodeClassCreate('content-box','.content', yakipizzaHtml)
    nodeClassCreate('content-box','.content', matchaHtml)
}


export default menuLoad