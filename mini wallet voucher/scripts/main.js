
let submit = document.getElementById("submit");


function inputfild(n, e, add, amt,) {
    this.name = n;
    this.email = e;
    this.address = add;
    this.wallet = amt;
};


let inputBox = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let amount = document.getElementById("amount").value;

    let input = new inputfild(name, email, address, amount);

    localStorage.setItem('user', JSON.stringify(input));

    document.getElementById("name").value = null
    document.getElementById("email").value = null
    document.getElementById("address").value = null
    document.getElementById("amount").value = null
}

submit.addEventListener('click', inputBox);


console.log("hello")