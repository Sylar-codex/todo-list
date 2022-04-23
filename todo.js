
var ul = document.getElementById('list')
var li;

var addbutton = document.getElementById('add')
addbutton.addEventListener('click', additem)

function additem() {
    var input = document.getElementById('input');
    var item = input.value
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

    if (item === '') {
        return false
        // let p = document.createElement('p')
        // let textn = document.createTextNode('Enter todo')
        // p.appendChild(textn)
    } else {
        li = document.createElement('li')
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')

        var label = document.createElement('label')
        label.setAttribute('for', 'item')

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        setTimeout(() => {
            li.className = 'visuals';
        }, 2)


        input.value = ''

    }
}

let removebutton = document.getElementById('remove')
removebutton.addEventListener('click', removeitem)

function removeitem() {
    li = ul.children

    for (index = 0; index < li.length; index++) {
        const element = li[index]
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}

