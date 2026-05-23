let res = document.querySelector('.res');
let nums = document.querySelector('.nums');
let right = document.querySelector('.right');

nums.addEventListener('click', (e) => {
    let click = e.target.closest('.num');

    res.textContent += click.textContent;
});
console.log(res.textContent)

right.addEventListener('drag', (e) => {
    e.preventDefault();
    return;
})
right.addEventListener('click', e => {
    try{
 e.preventDefault();
    var n = res.textContent.trim().split(' ');
    console.log(n.length);
    let click = e.target.closest('.am');
    if (n.length == 3 && click.innerHTML !== 'CA') {

        if (res.textContent == 'NaN') {
            res.textContent = 'there was a error';
        }
        if (click.innerHTML == '=' || click.textContent == '+/-') {
            if (n[1] == '+') {
                res.textContent = Number(n[0]) + Number(n[2]);
            }
            else if (n[1] == '-') {
                res.textContent = Number(n[0]) - Number(n[2]);
            }
            else if (n[1] == '×') {
                res.textContent = Number(n[0]) * Number(n[2]);
            }
            else if (n[1] == '÷') {
                res.textContent = Number(n[0]) / Number(n[2]);
            }
            else if (n[1] == '√') {
                res.textContent = Math.sqrt(Number(n[0]));
            }
        }
        else {
            if (n[1] == '+') {
                res.textContent = Number(n[0]) + Number(n[2]) + ' ' + click.textContent + ' ';
            }
            else if (n[1] == '-') {
                res.textContent = Number(n[0]) - Number(n[2]) + ' ' + click.textContent + ' ';
            }
            else if (n[1] == '×') {
                res.textContent = Number(n[0]) * Number(n[2]) + ' ' + click.textContent + ' ';
            }
            else if (n[1] == '÷') {
                res.textContent = Number(n[0]) / Number(n[2]) + ' ' + click.textContent + ' ';
            }
            else if (n[1] == '√') {
                res.textContent = Math.sqrt(Number(n[0])) + ' ' + click.textContent + ' ';
            }

        }
    }

    else if (n.length == 2 && click.textContent !== 'CA') {
        if (click.textContent !== '=') {
            let a = res.textContent.replace(n[1], click.textContent);
            res.textContent = a;
        }
        else if (click.textContent == '=') {
            if (n[1] == '√') {
                res.textContent = Math.sqrt(Number(n[0]));
            }
            else {
                return;
            }
        }

    }
    else if (n.length == 1 && click.textContent == '=') {
        return;
    }
    else if (click.textContent == 'CA') {
        if (res.textContent.length == 0) {
            return;
        }
        n = [];
        res.textContent = '';
    }

    else if (click.textContent == '+/-' && click.textContent !== 'CA') {
        if (res.textContent.length == 0) {
            return;
        }
        if (res.textContent.includes('-')) {
            let a = res.textContent.replace('-', '');
            res.textContent = a;
        }
        else {
            res.textContent = `-${res.textContent}`;
        }
    }

    else if (res.textContent.length == 0) {
        return;
    }
    else {
        res.textContent += ' ' + click.textContent + ' ';

    }
    }catch{
        console.log('hello')
    }

})
