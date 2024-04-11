<div style = "font-family: 'Open Sans', sans-serif; font-size: 16px">

# ModulePotentiometer

<div style = "color: #555">
    <p align="center">
    <img src="./res/logo.png" width="400" title="hover text">
    </p>
</div>

## Лицензия

<div style = "color: #555">
В разработке
</div>

## Описание
<div style = "color: #555">

Модуль предназначен для работы с аналоговым сервоприводом в рамках фреймворка EcoLight. Разработан в соответствии с нотацией архитектуры датчиков и является потомком класса [ClassSensor](https://github.com/Konkery/ModuleSensorArchitecture/blob/main/README.md). Количество каналов - 1. 

</div>

## Конструктор
<div style = "color: #555">

Конструктор принимает данные из конфига.
```json
"12": {
    "pins": ["A3"],
    "name": "Potentiometer",
    "article": "",
    "type": "sensor",
    "channelNames": ["position"],
    "typeInSignal": "analog",
    "typeOutSignal": "digital",
    "quantityChannel": 1,
    "busTypes": [],
    "manufacturingData": {}
}
```
</div>

### Поля
<div style = "color: #555">

- <mark style="background-color: lightblue">_Interval</mark> - поле для хранения ссылки на интервал опроса датчика.
</div>

### Методы
<div style = "color: #555">

- <mark style="background-color: lightblue">Start()</mark> - запускает циклический опрос измерительного канала датчика;
- <mark style="background-color: lightblue">Stop()</mark> - прекращает считывание значений с заданного канала;
</div>

### Возвращаемые данные
<div style = "color: #555">
Датчик предоставляет данные об позиции, в которой находится потенциометр. По-умолчанию датчик возвращает число от 0 до 1.
Для градуировния показаний с рекомендуется скалировать их к желаемому к диапазону `pot_ch.DataRefine.SetTransformFunc(k, b)`; 
При k=1, b=0 показания приводятся к диапазону  [0, 100] (с сохранением дробной части);
При `k=1` и `b=0` выводятся изначальные показания потенциометра в диапазоне [0, 1].
</div>

### Примеры
<div style = "color: #555">
Пример программы для вывода данных раз в одну секунду:

```js
//Создание объекта класса
let pot = SensorManager.CreateDevice('12')[0];
// Меняем диапазон на [0, 10]
pot.DataRefine.SetTransformFunc(10, 0);
// Запускаем опрос 
pot.Start();

// Выводим в консоль значение если оно существенно обновилось
let val = 0;
let interval = setInterval(() => {
  if (Math.round(pot.Value) !== val) {
    val = Math.round(pot.Value);
    console.log(`potentiometer value is ${val}`);
  }
}, 50);
// Теперь постепенно меняем положение потенциометра
```
Результат выполнения:
<div align='left'>
    <img src='./res/example-1.png'>
</div>

</div>

### Зависимости
<div style = "color: #555">

</div>

</div>
