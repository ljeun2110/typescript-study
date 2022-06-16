import {Player} from "./Player";
import {Agent} from "./Agent";

// console.log('hello typescript');
//
// import {Person} from "./Person";
//
// const kris: Person = new Person('Kris', 'Programmer');
// kris.print();
// const callback: Function = function () {
//   console.log("I'm callback.");
// }
// const kris: Person = new Person('Kris', 'Programmer');
// kris.print();
//
// kris.foo('first', 'second');
//
// const callee = kris.callee('kris', callback);
// console.log(callee());


const player: Player = new Player('jieun', 'FA', 0, new Agent());

player.introduce();
player.join('bigin', 3);
player.introduce();
player.extendContract(3);
player.introduce();
player.leave();
player.introduce();