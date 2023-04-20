const mid = document.querySelector("#mid");
const midText = document.querySelector("#mid-text");

let percent = 0;

midText.innerHTML = `업데이트 작업 중 ${percent}% <br>컴퓨터를 끄지 마십시오.` 

let number = 10000;

function loading(){
    let x = Math.random(); //랜덤값 생성
    let time = x * number;
    if (percent != 100){
        setTimeout(() => {
            percent += 1;
            midText.innerHTML = `업데이트 작업 중 ${percent}% <br>컴퓨터를 끄지 마십시오.` 
            loading();
        }, time);
    }
    else {
        setTimeout(() => {
            document.body.style.backgroundColor = '#000'
            document.body.style.cursor = 'none'
            document.body.style.overflow = 'hidden'
            document.body.innerHTML = ` `;
        }, number * x + 1000);
    }
};

mid.addEventListener("load", setTimeout(() => {
    number = prompt('100 에서 100000000 까지의 숫자를 입력하세요.\n숫자가 커질수록 당신의 농땡이 시간이 길어집니다.', 10000)
    if (number < 100) {
        number = 100
    };
    if (number > 100000000) {
        number = 100000000
    };
    loading()

}, 1000));