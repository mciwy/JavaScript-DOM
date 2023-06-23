function rnd(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let table = document.querySelector('#table');

const arr = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

fillTable(table, arr);

function fillTable(table, arr) {
    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < arr[i].length; j++) {
            let td = document.createElement('td');
            arr[i][j] = rnd(0, 99);
            td.innerHTML = arr[i][j];
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}

[...document.querySelectorAll('td')].forEach((s, i) => {
    if (Number(s.innerHTML) >= 50 && Number(s.innerHTML) !== isNaN) {
        s.style.backgroundColor = 'yellow';
    }
});
