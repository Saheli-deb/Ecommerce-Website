window.onload = function () {
    const name = document.getElementById('name');
    const cardnumber = document.getElementById('cardnumber');
    const expirationdate = document.getElementById('expirationdate');
    const securitycode = document.getElementById('securitycode');
    const output = document.getElementById('output');
    const ccicon = document.getElementById('ccicon');
    const ccsingle = document.getElementById('ccsingle');
    const generatecard = document.getElementById('generatecard');

    let cctype = null;

    // Mask the Credit Card Number Input
    var cardnumber_mask = new IMask(cardnumber, {
        mask: [
            {
                mask: '0000 000000 00000',
                regex: '^3[47]\\d{0,13}',
                cardtype: 'american express',
            },
            {
                mask: '0000 0000 0000 0000',
                regex: '^4\\d{0,15}',
                cardtype: 'visa',
            },
            {
                mask: '0000 0000 0000 0000',
                regex: '^5[1-5]\\d{0,14}',
                cardtype: 'mastercard',
            },
            {
                mask: '0000 0000 0000 0000',
                regex: '^6(?:011|5\\d{2})\\d{0,12}',
                cardtype: 'discover',
            },
        ],
        dispatch: function (appended, dynamicMasked) {
            const number = (dynamicMasked.value + appended).replace(/\D/g, '');
            for (let i = 0; i < dynamicMasked.compiledMasks.length; i++) {
                if (dynamicMasked.compiledMasks[i].regex.test(number)) {
                    cctype = dynamicMasked.compiledMasks[i].cardtype;
                    return dynamicMasked.compiledMasks[i];
                }
            }
        },
    });
};