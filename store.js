
const goods = {
    1 : {
        id: 1,
        name: "Шорты",
        description: "хлопок 95 %, лайкра 5 %",
        sizes: ["L", "XL"],
        price: 1,
        available: true,
    },
    2 : {
        id: 2,
        name: "Пиджак",
        description: "Шерсть",
        sizes: ["M","XL", "XXL"],
        price: 5,
        available: true
    },
    3 : {
        id: 3,
        name: "Футболка",
        description: "Члопок",
        sizes: ["M", "XL", "XXL"],
        price: 2.00,
        available: true
    },
    4 : {
        id: 4,
        name: "Пальто",
        description: "Шерсть",
        sizes: ["L", "XL", "XXL"],
        price: 11,
        available: false
    },
    5 : {
        id: 5,
        name: "Брюки серые",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 8,
        available: false
    },
}

const basket = [
    {
        good: 1,
        amount: 4,
    },
    {
        good: 2,
        amount: 55,
    },
    {
        good: 3,
        amount: 21,
    },
]


function addGood(good, amount) {
    basket.push({"good":good, "amount": amount})
    return basket
}

function delGood(good) {
    basket.splice(good, 2); 
    return basket
}

function clearBasket() {
    basket.splice(0, basket.length); 
    return basket
}


function total() {

    let totalSumm = 0
    let totalAmount = 0

    for (let basketPosition = 0; basketPosition < basket.length; basketPosition++) {

        totalSumm = totalSumm + basket[basketPosition].amount * goods[basket[basketPosition].good].price 

        totalAmount = totalAmount + basket[basketPosition].amount 

    }

    let totals = {
        "totalAmount": totalAmount,
        "totalSumm": totalSumm,
        }
    return totals
}



    // console.log(addGood(process.argv[2], process.argv[2]));
    // console.log(delGood(process.argv[2]));
    // console.log(clearBasket());
    console.log(total());