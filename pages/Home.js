import { Selector, t } from 'testcafe';

export default class Home {
    constructor() {
        this.welcomeMessage = Selector('h1').withText('Hotel California');
        this.reserveButton = Selector('#link');
    }
    async getWelcomeMessage() {
        return this.welcomeMessage.innerText;
    }
    async clickReserveButton() {
        await t.click(this.reserveButton);
    }
}