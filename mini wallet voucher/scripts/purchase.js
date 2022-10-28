let user = JSON.parse(localStorage.getItem('user'));
let purchaseList = JSON.parse(localStorage.getItem("purchase")) || [];

document.getElementById("balance").innerText = user.wallet;
let purchase = document.getElementById('purchased_vouchers');

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



        div.append(img, name, price);

        purchase.append(div)

    })
}
appentVoucher(purchaseList)