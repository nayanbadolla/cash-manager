var billAmt=document.querySelector('#billAmt')
var cashGiven=document.querySelector('#cashGiven')
var calcBtn=document.querySelector('#calcBtn')
var display=document.querySelector('.display')
var value=document.querySelectorAll('.noNotes')
var valueMobile=document.querySelectorAll('.noNotes-mobile')

var amount, cash, noNotes

cashGiven.disabled=true

billAmt.addEventListener('input', function (e) {
    amount=e.target.value
    if (amount>0) {
        cashGiven.disabled=false
    }
    else {
        cashGiven.disabled=true
    }
})

cashGiven.addEventListener('input', function (e) {
    cash=e.target.value
})

calcBtn.addEventListener('click', function () {
    display.innerHTML=""
    var notes=[2000,500,100,50,20,10,5,1]
    var balance=cash-amount
    for (var i=0;i<notes.length;i++) {
        value[i].innerText=""
    }

    if (cash<amount) {
        // alert("Insufficient Cash given.")
        var result=document.createElement('h3')
        result.textContent="Insufficient Cash given."
        display.appendChild(result)
    }
    
    else if (cash===amount) {
        // alert("Exact Cash Given. Zero balance.")
        var result=document.createElement('h3')
        result.textContent="Exact Cash Given. Zero balance."
        display.appendChild(result)
    }
    
    else {
        for (var i=0;i<notes.length;i++) {
            noNotes=Math.trunc(balance/notes[i])
            balance=balance%notes[i]
            value[i].innerText=noNotes
            valueMobile[i].innerText=noNotes
        }
        // notes.forEach(function(note) {
            // if (balance!==0) {
            //     noNotes=Math.floor(balance/note)
            //     balance=balance-noNotes*note
            //     // some more appropriate code
            //     if (numberOfNotes === 0) {
                //         return '';
            //     } else {
                //         display answer directly, no table 
                // }
            // }
        // }) 
    }
})