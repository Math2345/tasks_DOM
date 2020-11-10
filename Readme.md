* **Создать функцию, которая будет принимать HTML элемент и объект**.

Требуется обойти все дочерние ноды HTML элемента и у тех элементов, у которых есть атрибут data-field выставить textContent из соответствующего свойства объекта.

В случае, если в объекте нет нужного свойства - выбросить ошибку,
если в объекте есть свойство, которое не используется в HTML - игнорировать

Пример:

HTML
```
<div id=”item1”>
  <h3 data-field=”title”>Some title</h3>
  <p data-field=”description”></p>
</div>
```

JS
```
parseTemplate(
  document.getElementById(‘item1’),
  {
    title: ‘Hello world’,
    description: ‘The first program’,
  }
);
```
HTML должен измениться на 

```
<div id=”item1”>
  <h3 data-field=”title”>Hello world</h3>
  <p data-field=”description”>The first programm</p>
</div>
```


* **Реализовать функцию для отображения на экране вложенных массивов.**

Элементом массива может являться либо строка, либо массив, в случае строки нужно показать этот элемент на как элемент списка, в случае массива - создать новый вложенный список, например: для данных

```
const nestedList = ["Item", ["Item2", ["Item3"]]];
```
Должна получиться такая структура html на выходе:  

```
    <ul>
      <li>
     Item1
     <ul>
        <li>
          Item2
           <ul>
              <li>Item3</li>
           </ul>
        </li>
     </ul>
      </li>
    </ul>
```