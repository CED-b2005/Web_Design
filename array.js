const pN = document.getElementById("productName")
const pQ = document.getElementById("productQuanlity")
const pP = document.getElementById("productPrice")

const noti1 = document.getElementById("noti1")
const noti2 = document.getElementById("noti2")
const noti3 = document.getElementById("noti3")

const add_buttom = document.getElementById("add")

const body_tab = document.getElementById("body-table");

let list = [
    [],
    [],
    [],
    [],
    [],
];

let className = ["no", "product", "quality", "price", "total"];

function printNoti(object1, object2) {
    if (object1.value == "") {
        object2.innerHTML = "empty"
    } else {
        object2.innerHTML = null;
    }
}

function noti(object1, object2) {
    object1.addEventListener("mouseover", function() {
        printNoti(object1, object2)

        object1.addEventListener("mouseout", function() {
            printNoti(object1, object2)
        })

        object1.addEventListener("input", function() {
            printNoti(object1, object2)
        })
    })
}

function edit(object) {
    object.addEventListener("input", function() {
        if (object.value < 0) {
            object.value = 0;
        }
    })
}

function makeEmpty() {
    pQ.value = null;
    pN.value = null;
    pP.value = null;

    noti1.innerHTML = null;
    noti2.innerHTML = null;
    noti3.innerHTML = null;
}


function printTable() {
    var createTr = document.createElement("tr")
    body_tab.appendChild(createTr)
    var i = list[0].length - 1;
    for (j = 0; j < className.length; j++) {
        var createTd = document.createElement('td');
        createTr.appendChild(createTd);
        createTd.className = className[j];
        createTd.textContent = list[j][i]
    }
}

noti(pN, noti1)
noti(pQ, noti2)
edit(pQ)
noti(pP, noti3)
edit(pP)

function add() {
    if ((pN.value != "" && pN.value != null) && (pQ.value >= 0 && pQ.value != "") && (pP.value >= 0 && pP.value != "")) {
        list[0].push(list[0].length + 1)
        list[1].push(pN.value);
        list[2].push(pQ.value);
        list[3].push(pP.value);
        list[4].push(pQ.value * pP.value);
        makeEmpty();
        printTable();
    } else {
        console.log("Have empty");
    }
}