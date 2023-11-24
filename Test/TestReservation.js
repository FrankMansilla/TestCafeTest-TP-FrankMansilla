import { Selector, t } from 'testcafe';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Room from '../pages/room';
import Reservation from '../pages/Reservation';
import { users } from '../users'; 


fixture`Reservation`.page`http://localhost:3002/login`;

const loginp = new Login();
const homep = new Home();
const roomReserve = new Room();
const ReserveButton = new Reservation();

users.forEach((user) => {
  test(`Reservar con usuario: ${user.email}`, async (t) => {
    await loginp.login(user.email, user.password);
    await t.wait(5000);
    await t.expect(homep.welcomeMessage.exists).ok();
    await t.wait(2000);
    await homep.clickReserveButton();
    await t.wait(2000);
    await roomReserve.ClickReservationRoom();
    await t.wait(3000);
    await ReserveButton.ClickReservation();
    await t.wait(5000);
    await ReserveButton.DateEndWrong();
    await t.wait(5000);
    await ReserveButton.ClickReservation();
  });
});


