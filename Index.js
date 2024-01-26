var x = 5
var y = 1
var chosenbtn = document.getElementById('r' + 6 + 'c' + 5)
var btnValue = parseInt(document.getElementById('r' + 6 + 'c' + 5).title)
var turns = true

console.log(btnValue)

chosenbtn.style.boxShadow = ' 0px 0px 0px 5px #E3F2FD inset'

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    let btn = document.getElementById("selector")

    if (btnValue == 0) {
        chosenbtn.style.boxShadow = ' 0px 0px 0px 5px #61707D inset'
    }


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

    if ((e.keyCode == '40') && (turns == true)) {
        // down arrow
        // green
        chosenbtn.style.background = '#40F99B'
        chosenbtn.style.boxShadow = ' 0px 0px 0px 5px #40F99B inset'
        chosenbtn.title = '1'
        y = parseInt((chosenbtn.id).charAt(1))
        console.log(y)
        turns = false
        CheckWin();
    }
    else if ((e.keyCode == '40') && (turns == false)) {
        // down arrow
        // red
        chosenbtn.style.background = '#9F4A54'
        chosenbtn.style.boxShadow = ' 0px 0px 0px 5px #9F4A54 inset'
        chosenbtn.title = '-1'
        y = parseInt((chosenbtn.id).charAt(1))
        console.log(y)
        turns = true
        CheckWin();
    }

    SelectedBtn();

}

function SelectedBtn() {

    if (turns == true) {
        document.getElementById('TurnLabel').innerHTML = 'P1'
        document.getElementById('TurnLabel').style.color = '#40F99B'
    }
    else if (turns == false) {
        document.getElementById('TurnLabel').innerHTML = 'P2'
        document.getElementById('TurnLabel').style.color = '#9F4A54'
    }

    let i = 6
    while (i > 0) {
        chosenbtn = document.getElementById('r' + i + 'c' + x)
        btnValue = document.getElementById('r' + i + 'c' + x).title

        if (btnValue == 0) {
            chosenbtn.style.boxShadow = ' 0px 0px 0px 5px #E3F2FD inset'
            return;
        }
        i--
    }
}

function CheckWin() {
    let i = 6
    winCounter = 0
    while (i > 0) {
        btnValue = parseInt(document.getElementById('r' + i + 'c' + x).title)
        console.log(btnValue)

        if ((btnValue == -1) && (winCounter <= 0)) {
            winCounter--
        }
        else if ((btnValue == -1) && (winCounter > 0)) {
            winCounter = -1
        }

        if ((btnValue == 1) && (winCounter >= 0)) {
            winCounter++
        }
        else if ((btnValue == 1) && (winCounter < 0)) {
            winCounter = 1
        }

        i--
    }

    console.log('WinCounter = ' + winCounter)

    if (winCounter == 4) {
        console.log('Green Wins')
    }
    else if (winCounter == -4) {
        console.log('Red Wins')
    }

    i = 9
    winCounter = 0
    while (i > 0) {
        btnValue = parseInt(document.getElementById('r' + y + 'c' + i).title)
        console.log(btnValue)

        if ((btnValue == -1) && (winCounter <= 0)) {
            winCounter--
        }
        else if ((btnValue == -1) && (winCounter > 0)) {
            winCounter = -1
        }

        if ((btnValue == 1) && (winCounter >= 0)) {
            winCounter++
        }
        else if ((btnValue == 1) && (winCounter < 0)) {
            winCounter = 1
        }

        i--
    }

    console.log('WinCounter = ' + winCounter)

    if (winCounter == 4) {
        console.log('Green Wins')
    }
    else if (winCounter == -4) {
        console.log('Red Wins')
    }


}