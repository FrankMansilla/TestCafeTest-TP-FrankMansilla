import { Selector, t } from 'testcafe';

export default class Reservation {

    constructor() {
        this.ReserveButton = Selector('button').withText('Reservar');
        this.DateEndWrong = Selector('button').withAttribute('aria-label', '30 de octubre de 2023')
        //this.calendarComponent = Selector('.react-calendar')
        //this.CalendarDay = this.calendarComponent.find('.react-calendar__month-view__days').withAttribute('data-date', '2023-10-30');
        //this.DateEndWrong = this.CalendarDay.find('.react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--neighboringMonth').withAttribute('aria-label', '30 de octubre de 2023');
    }
    async ClickReservation() {
        await t.click(this.ReserveButton);
    }
    async DateEndWrong(){
        await t.click(this.DateEndWrong)
    }
   
}