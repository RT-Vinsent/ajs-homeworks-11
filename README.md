# `РЕШЕНО, всё в одном репозитории`, что бы не тратить ресурс appveyor.

[![Build status](https://ci.appveyor.com/api/projects/status/62v98sr3hng3ufa8?svg=true)](https://ci.appveyor.com/project/RT-Vinsent/ajs-homeworks-11)

### Модуль team.js и team.test.js скопировал из [Дз №8](https://github.com/RT-Vinsent/ajs-homeworks-8) и соответственно доработал.
### Первая задача, модули:
* team.js - модуль для первой задачи;
* team.test.js - тестирование первой задачи;
### Вторая задача, модули:
* teamGenerator.js - модуль для второй задачи;
* teamGenerator.test.js - тестирование второй задачи;
### Третья задача, модули:
* canIterate.js - модуль для третьей задачи;
* canIterate.test.js - тестирование третьей задачи;


# Домашнее задание к лекции «Символы, итераторы, генераторы»

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: код должен проходить ESLint без ошибок.

**Важно**: на задачи данного раздела писать авто-тесты не нужно.

**Важно**: решения должны быть построены на базе [шаблона Webpack](https://github.com/RT-Vinsent/ajs-homeworks/tree/ajs8/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваши GitHub-проекты.

---

## Описание

В этом задании предполагается, что все персонажи содержат следующий набор полей:
```javascript
const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}
```

## Символы & итераторы

### Легенда

Для поддержки логики необходимо сделать объекты класса `Team`(команда, в которой хранятся персонажи противника на текущий раунд) итерируемыми. При итерации они должны выдавать персонажей.

### Описание

Реализуйте итератор в классе `Team`, который по одному выдаёт персонажей (объекты типа `Person`).

---

## Символы и генераторы

### Легенда

Реализовывать итераторы не так уж здорово, правда? Давайте посмотрим, как нам могут помочь генераторы при переборе.

### Описание

Используйте следующую заготовку для организации перебора класса `Team`:
```javascript
class Team {
  ...
  *[Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
  }

}
```

---

## Генераторы (задача со звёздочкой)

**Важно**: данная задача не является обязательной 

### Легенда

Как вы знаете, объекты, позволяющие организовать итерирование, содержат метод с "именем" `Symbol.iterator`. Напишите функцию `canIterate`, которая определяет, соответствует ли объект протоколу итерирования, возвращая, соответственно, `true`/`false`.

Примеры использования:
```javascript
canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate("Netology"); // true
```
