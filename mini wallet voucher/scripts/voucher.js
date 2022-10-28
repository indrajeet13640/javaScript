// let api ="https://masai-vouchers-api.herokuapp.com/api/vouchers"
let user = JSON.parse(localStorage.getItem('user'));

let wallet = document.getElementById('wallet_balance');
if (user !== null) {
    wallet.innerText = Number(user.wallet);
}


let amount = +wallet.textContent;
// console.log(typeof (amount))

const voucherList = document.getElementById('voucher_list');

let copy_Data;

let getData = async () => {
    try {
        let res = await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`);

        let data = await res.json();

        copy_Data = data[0].vouchers
        // console.log(data[0].vouchers)
        appentVoucher(copy_Data)
    } catch (err) {
        console.log("error:", err)
    }

}
getData();


let appentVoucher = (data) => {

    data.map((el) => {

        let div = document.createElement("div");
        div.setAttribute('class', 'voucher')
        let img = document.createElement('img');
        img.src = el.image;

        let name = document.createElement('p');
        name.textContent = el.name;

        let price = document.createElement('p');
        price.textContent = el.price;

        const btnBuy = document.createElement('button');
        btnBuy.textContent = "Buy";
        btnBuy.setAttribute('class', 'buy_voucher');

        btnBuy.addEventListener('click', () => {
            buyVoucher(el)
        });

        div.append(img, name, price, btnBuy);

        voucherList.append(div)

    })
}

let purchaseList = JSON.parse(localStorage.getItem("purchase")) || [];
function buyVoucher(el) {

    if (el.price <= user.wallet) {
        purchaseList.push(el);
        localStorage.setItem('purchase', JSON.stringify(purchaseList));

        amount = amount - el.price;
        user.wallet = amount;
        localStorage.setItem('user', JSON.stringify(user));
        wallet.innerText = Number(user.wallet);
    } else {
        alert("insufficient Blance")
    }
    // console.log(el.price)
}


