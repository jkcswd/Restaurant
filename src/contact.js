import { nodeClassCreate } from "./utilities";

const contactLoad = () => {
    const contactHtml = '<p>Please contact us in the following ways:</p><p>Email:fake@fakemail.com</p><p>Phone:01234 5678</p>';

    nodeClassCreate('content-box','.content',contactHtml);
}

export default contactLoad;