async function getTokenPrices() {
    let asset1 = document.getElementById("asset1");
    let asset2 = document.getElementById("asset2");


    let selectMenuItem1 = document.getElementById("selectMenu1").value;
    let selectMenuItem2 = document.getElementById("selectMenu2").value;

    let dataFromApi = await fetch("https://api.coincap.io/v2/assets");
    dataFromApi = await dataFromApi.json();

    let bitcoinPrice = dataFromApi.data[0].priceUsd;
    let ethPrice = dataFromApi.data[1].priceUsd;
    let xrpPrice = dataFromApi.data[5].priceUsd;

    if (selectMenuItem1 === "bitcoin" && selectMenuItem2 === "bitcoin") {
        asset2.value = asset1.value;
    }

    if (selectMenuItem1 === "bitcoin" && selectMenuItem2 === "eth") {
        asset2.value = (bitcoinPrice * Number(asset1.value)) / ethPrice;
    }

    if (selectMenuItem1 === "bitcoin" && selectMenuItem2 === "xrp") {
        asset2.value = (bitcoinPrice * Number(asset1.value)) / xrpPrice;
    }
    
}