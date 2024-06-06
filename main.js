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


    // Start your code here
    // You may move this JS to another file if you wish
    // Part 1
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
        const third = () => { fourth(); };
        const fourth = () => { console.trace(); };
        first();
    })

    //Part 2
    try {
        console.log(document.getElementById('nope').innerHTML);

    } catch (err) {
        console.error(err);
    }

    //Part 3
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = "ValidationError"
        }
    }

    function validateAge(age) {
        if (age < 18) {
            throw new ValidationError("Too Young!");
        } else if (age > 65) {
            throw new ValidationError("Too Old!");
        } else {
            return age;
        }
    }

    try {
        let ages = [20, 16, 23, 67];
        ages.forEach((age) => {
            console.log(validateAge(age));
        })
    } catch (err) {
        if (err instanceof ValidationError) {
            console.error("Invalid age: " + err.message);
        }
    }

    //Part 5
    document.getElementById('global_error').addEventListener('click', () => {
        try {
            errorfunction();
        } catch (err) {
            console.error(err);
        }
    })
        
}