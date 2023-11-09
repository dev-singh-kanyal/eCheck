console.log("running on PORT 3000 ");

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("clicked");
    results.innerHTML = `<img width="30" src="img/loading.gif" alt="loading" />`;
    let apiKey = "ema_live_rMgNUdRwIOZZhVY2RgUXsJ2iIFCVBP54OcATKitl";
    let email = document.getElementById("email").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${apiKey}&email=${email}`;

    let res = await fetch(url);
    let result = await res.json();

    let str = ``;
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }

    console.log(str)
    results.innerHTML = str;
});

