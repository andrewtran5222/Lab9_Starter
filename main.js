window.addEventListener('DOMContentLoaded', init);

function init() {
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    // Step 1
    document.getElementById('consoleLog').addEventListener('click', () => {
        console.log('Hello World');
    })

    document.getElementById('consoleError').addEventListener('click', () => {
        console.error('Error');
    })

    document.getElementById('consoleCount').addEventListener('click', () => {
        console.count();
    })

    document.getElementById('consoleWarn').addEventListener('click', () => {
        console.warn('Warning');
    })

    document.getElementById('consoleAssert').addEventListener('click', () => {
        console.assert(2 + 2 === 5, "Statement is inequivalent");
    })

    document.getElementById('consoleClear').addEventListener('click', () => {
        console.clear();
    })

    document.getElementById('consoleDir').addEventListener('click', () => {
        console.dir(document.body);
    })

    document.getElementById('consoleDirxml').addEventListener('click', () => {
        console.dirxml(document.body);
    })

    document.getElementById('consoleGroupStart').addEventListener('click', () => {
        console.group('Group Start');
    })

    document.getElementById('consoleGroupEnd').addEventListener('click', () => {
        console.groupEnd();
    })

    document.getElementById('consoleTable').addEventListener('click', () => {
        console.table([
            {first: 'w', second: 'x'}, 
            {first: 'y', second: 'z'}
        ]);
    })

    document.getElementById('startTimer').addEventListener('click', () => {
        console.time();
    })

    document.getElementById('endTimer').addEventListener('click', () => {
        console.timeEnd();
    })

    document.getElementById('consoleTrace').addEventListener('click', () => {
        const first = () => { second(); };
        const second = () => { third(); };
        const third = () => { console.trace() };
        first();
    })

    // Step 3
    try {
        let doesntExist = document.querySelector("misspelledQuery");
    } catch (e) {
        console.error(e);
    }

    // Step 4
    class CustomError extends Error {
        constructor(message) {
            super(message);
            this.name = "CustomError"
        }
    }

    function checkPositive(num) {
        if (num < 0) 
        {
            throw new CustomError("Number is not Positive");
        }
        else 
        {
            return num;
        }
    }

    try {
        console.log(checkPositive(1));
        console.log(checkPositive(-1));
    } catch (e) {
        if (e instanceof CustomError)
        {
            throw new CustomError();
        }
    }

    // Step 5
    document.getElementById('triggerGlobal').addEventListener('click', () => {
        try {
            globalError();
        } catch (e) {
            console.error(e);
        }
    })
        
}