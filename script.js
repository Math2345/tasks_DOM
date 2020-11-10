(() => {

    // task1
    function parseTemplate (parent, data) {
        const elements = [...parent.children];
        const keys = Object.keys(data);
        const values = Object.values(data);

        const isSameAttrAndKeys = (attributes, keys) => attributes.every((attr,index) => attr === keys[index])
        const fillArrAttr = elements => elements.map( elements => elements.dataset.field);

        if (elements.length === keys.length) {
             const attributes = fillArrAttr(elements);

             if (isSameAttrAndKeys(attributes, keys)) {
                elements.forEach( (elem, i) => {
                    elem.textContent = values[i];
                })
             } else {
                 throw "Ошибка: Названия ключей объекта и атрибутов не совпадают";
             }
        } else {
            throw "Ошибка: в объекте или в узле количество элементов не совпадают";
        }
    }

    // task2
    function nestedListFunc(list, parent) {
        const ul = document.createElement('ul');

        parent.appendChild(ul);

        for (let i = 0; i < list.length; i++) {
            const li = document.createElement('li');
            li.textContent = list[i];
            ul.appendChild(li);

            if (Array.isArray(list[i + 1])) return nestedListFunc(list[i + 1], li);
        }

        return;
    }


    // parseTemplate(document.getElementById('item1'),
    // {
    //     title: 'Hello world',
    //     description: 'The first program',
    // })
    // const nestedList = ["Item", ["Item2", ["Item3"]]];
    // nestedListFunc(nestedList, document.body);
})();