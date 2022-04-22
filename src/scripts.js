const input = document.querySelector('#input-text');
const valor = document.querySelector('.valor');


input.addEventListener('change', function () {

    if (!input) {
        return;
    }
    const inputPromise = fetch(`https://www.mercadobitcoin.net/api/${input.value}/ticker/`);

    inputPromise.then(function (resposta) {
        const promiseBody = resposta.json();

        promiseBody.then(function (body) {
            valor.textContent = body.ticker.buy;

        });
    });
});