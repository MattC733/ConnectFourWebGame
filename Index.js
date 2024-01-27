var x = 5
var y = 1
var chosenbtn = document.getElementById('r' + 6 + 'c' + 5)
var btnValue = parseInt(document.getElementById('r' + 6 + 'c' + 5).title)
var turns = true
var popUpVisual = true
var btnSelected = false
var greenWins = false
var redWins = false
var P1Wins = 0
var P2Wins = 0
var resetting = false

chosenbtn.style.boxShadow = ' 0px 0px 0px 5px #E3F2FD inset'

document.onkeydown = checkKey;

function checkKey(e) {
    btnSelected = false

    if (resetting == true) {
        return;
    }

    if (popUpVisual == true) {
        document.getElementById('tutorial').style.display = 'none'
        popUpVisual = false
        return
    }

    if ((chosenbtn.title == '1') || (chosenbtn.title == '-1')) {
        btnSelected = true
    }

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

    if ((e.keyCode == '40') && (turns == true) && (btnSelected == false)) {
        // down arrow
        // green
        chosenbtn.style.background = '#40F99B'
        chosenbtn.style.boxShadow = ' 0px 0px 0px 5px #40F99B inset'
        chosenbtn.title = '1'
        y = parseInt((chosenbtn.id).charAt(1))
        turns = false
        CheckWin();
    }
    else if ((e.keyCode == '40') && (turns == false) && (btnSelected == false)) {
        // down arrow
        // red
        chosenbtn.style.background = '#9F4A54'
        chosenbtn.style.boxShadow = ' 0px 0px 0px 5px #9F4A54 inset'
        chosenbtn.title = '-1'
        y = parseInt((chosenbtn.id).charAt(1))
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
            btnSelected = true
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

        if (winCounter == 4) {
            greenWins = true
            resetting = true
            setTimeout(() => { Restart(); }, 1000)
            return;
        }
        else if (winCounter == -4) {
            redWins = true
            resetting = true
            setTimeout(() => { Restart(); }, 1000)
            return;
        }

        i--
    }


    i = 9
    winCounter = 0
    while (i > 0) {
        btnValue = parseInt(document.getElementById('r' + y + 'c' + i).title)

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

        if (winCounter == 4) {
            greenWins = true
            resetting = true
            setTimeout(() => { Restart(); }, 1000)
            return;
        }
        else if (winCounter == -4) {
            redWins = true
            resetting = true
            setTimeout(() => { Restart(); }, 1000)
            return;
        }

        i--
    }

    let c = true
    vert = y
    hori = x
    while (c == true) {

        if ((vert == 1)) {
            c = false
        }
        else if ((hori == 1)) {
            c = false
        }

        if (c == true) {
            hori--
            vert--
        }

    }

    c = true
    winCounter = 0
    while (c == true) {

        if ((vert == 6)) {
            c = false
        }
        else if ((hori == 9)) {
            c = false
        }

        btnValue = parseInt(document.getElementById('r' + vert + 'c' + hori).title)

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

        if (winCounter == 4) {
            greenWins = true
            resetting = true
            setTimeout(() => { Restart(); }, 1000)
            return;
        }
        else if (winCounter == -4) {
            redWins = true
            resetting = true
            setTimeout(() => { Restart(); }, 1000)
            return;
        }

        hori++
        vert++
    }

    c = true
    vert = y
    hori = x
    while (c == true) {
        console.log('r' + vert + 'c' + hori)

        if ((vert == 6)) {
            c = false
        }
        else if ((hori == 1)) {
            c = false
        }

        if (c == true) {
            hori--
            vert++
        }

    }

    c = true
    winCounter = 0
    while (c == true) {
        console.log('r' + vert + 'c' + hori)

        if ((vert == 1)) {
            c = false
        }
        else if ((hori == 9)) {
            c = false
        }

        btnValue = parseInt(document.getElementById('r' + vert + 'c' + hori).title)

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

        if (winCounter == 4) {
            greenWins = true
            resetting = true
            setTimeout(() => { Restart(); }, 1000)
            return;

        }
        else if (winCounter == -4) {
            redWins = true
            resetting = true
            setTimeout(() => { Restart(); }, 1000)
            return;
        }

        hori++
        vert--
    }
}

function Restart() {

    document.querySelectorAll('.EmptySquare')
    console.log(document.querySelectorAll('.EmptySquare'))
    let i = 0
    while (i < 54) {
        document.querySelectorAll('.EmptySquare')[i].style.background = '#61707D'
        document.querySelectorAll('.EmptySquare')[i].style.boxShadow = ' 0px 0px 0px 5px #61707D inset'
        document.querySelectorAll('.EmptySquare')[i].title = '0'
        i++
    }

    if (greenWins == true) {
        document.getElementById('P1Score').innerHTML = P1Wins + 1
        P1Wins++
    }

    if (redWins == true) {
        document.getElementById('P2Score').innerHTML = P2Wins + 1
        P2Wins++
    }

    x = 5
    y = 1
    chosenbtn = document.getElementById('r' + 6 + 'c' + 5)
    btnValue = parseInt(document.getElementById('r' + 6 + 'c' + 5).title)
    turns = true
    btnSelected = false
    greenWins = false
    redWins = false
    chosenbtn.style.boxShadow = ' 0px 0px 0px 5px #E3F2FD inset'
    resetting = false
}