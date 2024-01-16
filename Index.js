var x = 5
var chosenbtn = document.getElementById('r' + 6 + 'c' + 5)
var btnValue = document.getElementById('r' + 6 + 'c' + 5).tabIndex

console.log(btnValue)

chosenbtn.style.boxShadow = ' 0px 0px 0px 5px #E3F2FD inset'

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    let btn = document.getElementById("selector")

    chosenbtn.style.boxShadow = ' 0px 0px 0px 5px #61707D inset'


    if (e.keyCode == '40') {
        // down arrow
    }
    else if ((e.keyCode == '37') && (x > 1)) {
        // left arrow
        x = x - 1
        btn.style.gridColumn = x

    }
    else if ((e.keyCode == '39') && (x < 9)) {
        // right arrow
        x = x + 1
        btn.style.gridColumn = x

    }

    SelectedBtn();

    if (e.keyCode == '40') {
        // down arrow
        chosenbtn.style.background = '#40F99B'
        chosenbtn.style.boxShadow = ' 0px 0px 0px 5px #40F99B inset'
        btnValue = btnValue + 1
        console.log(btnValue)
    }

    SelectedBtn();

}

function SelectedBtn() {
    let i = 6
    while (i > 0) {
        chosenbtn = document.getElementById('r' + i + 'c' + x)
        btnValue = document.getElementById('r' + i + 'c' + x).tabIndex
        console.log('r' + i + 'c' + x)
        console.log(chosenbtn)

        if (btnValue == 0) {
            chosenbtn.style.boxShadow = ' 0px 0px 0px 5px #E3F2FD inset'
            return;
        }
        i--
    }
}