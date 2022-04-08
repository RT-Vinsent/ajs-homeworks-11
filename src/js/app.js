/* eslint-disable no-console */
import Team from './modules/team';
import TeamGenerator from './modules/teamGenerator';

const alex = {
  name: 'ALex',
  type: 'Zombie',
  attack: 40,
  defence: 10,
  health: 100,
  level: 1,
};

const vova = {
  name: 'Vova',
  type: 'Magician',
  attack: 10,
  defence: 40,
  health: 100,
  level: 1,
};

const dima = {
  name: 'Dima',
  type: 'Daemon',
  attack: 10,
  defence: 40,
  health: 100,
  level: 1,
};

// Символы & итераторы
console.log('\n Символы & итераторы \n');
const teamOne = new Team();
console.log('Команда teamOne создана');

teamOne.addAll(alex, vova, dima);
console.log('В команду teamOne добавлены: ALex, Vova и Dima');

for (const person of teamOne) {
  console.log(person);
}

const teamTwo = new Team();
console.log('Команда teamTwo создана');

teamTwo.addAll(alex, dima);
console.log('В команду teamTwo добавлены: ALex и Dima');

console.log(teamTwo.next());
console.log('первый из teamTwo');

console.log(teamTwo.next());
console.log('следующий из teamTwo');

console.log(teamTwo.next());
console.log('следующий из teamTwo');

// Символы и генераторы
console.log('\n Символы и генераторы \n');
const teamThree = new TeamGenerator();
console.log('Команда teamThree создана');

teamThree.addAll(alex, dima);
console.log('В команду teamThree добавлены: ALex и Dima');

for (const person of teamThree) {
  console.log(person);
}

const teamFour = new TeamGenerator();
console.log('Команда teamFour создана');

teamFour.addAll(alex, vova);
console.log('В команду teamFour добавлены: ALex и Vova');

const gen = teamFour[Symbol.iterator]();
console.log('генератор teamFour сохранён для запуска метода next()');

console.log(gen.next());
console.log('первый из teamFour');

console.log(gen.next());
console.log('следующий из teamFour');

console.log(gen.next());
console.log('следующий из teamFour');
