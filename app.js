const card = Array.from(document.getElementsByClassName('card'))
const radioFirstPlayer = document.getElementById('radioFirstPlayer')
const optionOneFirstPlayer = document.getElementById('optionOneFirstPlayer')
const optionElevenFirstPlayer = document.getElementById('optionElevenFirstPlayer')
const firstPlayerPoint = document.getElementById('firstPlayerPoint')
const SecondPlayerPoint = document.getElementById('SecondPlayerPoint')
const first = document.getElementById('first')
const second = document.getElementById('second')
const finishFirstPayerGame = document.getElementById('finishFirstPayerGame')
const finishSecondPlayerGame = document.getElementById('finishSecondPlayerGame')
const display = document.getElementById('display')
const newGame = document.getElementById('newGame')
let randomImage
let firstPlayerResult = 0
let secondPlayerResult = 0
let addCount = 1
let count = 0
let isFin  = false

let array = [
    {
        id: 2,
        image: './image/2.jpg'
    },
    {
        id: 3,
        image: './image/3.jpg'
    },
    {
        id: 4,
        image: './image/4.jpg'
    },
    {
        id: 5,
        image: './image/5.jpg'
    },
    {
        id: 6,
        image: './image/6.jpg'
    },
    {
        id: 7,
        image: './image/7.jpg'
    },
    {
        id: 8,
        image: './image/8.jpg'
    },
    {
        id: 9,
        image: './image/9.jpg'
    },
    {
        id: 10,
        image: './image/10.jpg'
    },
    {
        id: 10,
        image: './image/j.jpg'
    },
    {
        id: 10,
        image: './image/q.jpg'
    },
    {
        id: 10,
        image: './image/k.jpg'
    },
    {
        image: './image/a.jpg'
    },
]

card.map((el, index) => {
    el.addEventListener('click', () => {
        console.log(isFin);
        if(isFin === false){
        if (count === index) {
            console.log(index)
            console.log(count)
            randomImage = array[Math.floor(Math.random() * array.length)]
            if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8) {
                if (randomImage.image === './image/a.jpg') {
                    el.src = randomImage.image
                    if (firstPlayerResult < 11) {
                        console.log(firstPlayerResult = firstPlayerResult + 11)
                    } else {
                        firstPlayerResult = firstPlayerResult + 1
                    }
                    count = count + addCount
                } else {
                    el.src = randomImage.image
                    console.log(firstPlayerResult = firstPlayerResult + randomImage.id)
                    count = count + addCount
                }
                firstPlayerPoint.innerText = `First Player Result - ${firstPlayerResult}`

                if (firstPlayerResult > secondPlayerResult && firstPlayerResult > 21) {
                    display.innerHTML = `<p style="color: green;">SECOND Player WIN</p>
                    <h6>FIRST Player LOSE<h6>`
                    isFin = true
                } else if (firstPlayerResult === 21) {
                    display.innerHTML = `<p>!BLACK JACK!</p>
                    <p style="color: green;">FIRST Player WIN</p>
                    <h6>SECOND Player LOSE</h6>`
                    isFin = true
                }
            } else if (index === 1 || index === 3 || index === 5 || index === 7 || index === 9) {
                if (randomImage.image === './image/a.jpg') {
                    el.src = randomImage.image
                    if (secondPlayerResult < 11) {
                        console.log(secondPlayerResult = secondPlayerResult + 11)
                    } else {
                        secondPlayerResult = secondPlayerResult + 1
                    }
                    count = count + addCount
                } else {
                    el.src = randomImage.image
                    console.log(secondPlayerResult = secondPlayerResult + randomImage.id)
                    count = count + addCount
                }
                SecondPlayerPoint.innerText = `Second Player Result - ${secondPlayerResult}`
                if (secondPlayerResult > firstPlayerResult && secondPlayerResult > 21) {
                    display.innerHTML = `<p style="color: green;">FIRST Player WIN</p>
                    <h6>SECOND Player LOSE</h6>`
                    isFin = true
                } else if (secondPlayerResult === 21) {
                    display.innerHTML = `<p>!BLACK JACK!</p>
                    <p style="color: green;"> SECOND Player WIN</p>
                    <h6>FIRST Player LOSE</h6>`
                    isFin = true
                } else if (secondPlayerResult === 21 && firstPlayerResult === 21) {
                    display.innerHTML = `Don't have a winner`
                    isFin = true
                }
            }
        }
    }
    })
})

finishFirstPayerGame.addEventListener('click', () => {
    finishFirstPayerGame.style.backgroundColor = 'red'
    if (finishSecondPlayerGame.style.backgroundColor === 'red') {
        isFin = true
        if (firstPlayerResult > secondPlayerResult && firstPlayerResult < 21) {
            display.innerHTML = `<p style="color: green;">FIRST Player WIN</p>
            <h6>SECOND Player LOSE</h6>`
            isFin = true
        } else if (secondPlayerResult > firstPlayerResult && secondPlayerResult < 21) {
            display.innerHTML = `<p style="color: green;"> SECOND Player WIN</p>
            <h6>FIRST Player LOSE</h6>`
            isFin = true
        }
    }
    if (count % 2 === 1) {
        addCount = 2
    } else if (count % 2 === 0) {
        count = count + 1
        addCount = 2
    }
    console.log(count);
})

finishSecondPlayerGame.addEventListener('click', () => {
    finishSecondPlayerGame.style.backgroundColor = 'red'
    if (finishFirstPayerGame.style.backgroundColor === 'red') {
        isFin = true
        if (firstPlayerResult > secondPlayerResult && firstPlayerResult < 21) {
            display.innerHTML = `<p style="color: green;">FIRST Player WIN</p>
            <h6>SECOND Player LOSE</h6>`
            isFin = true
        } else if (secondPlayerResult > firstPlayerResult && secondPlayerResult < 21) {
            display.innerHTML = `<p style="color: green;"> SECOND Player WIN</p>
            <h6>FIRST Player LOSE</h6>`
            isFin = true
        }
    }
    if (count % 2 === 0) {
        addCount = 2
    } else if (count % 2 === 1) {
        count = count + 1
        addCount = 2
    }
})