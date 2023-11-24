import { Selector, t } from 'testcafe';

export default class Room {

    constructor() {
        this.roomReserveButton = Selector('button').withText('Reservar');
    }
    async ClickReservationRoom() {
        await t.click(this.roomReserveButton);
    }
   
}