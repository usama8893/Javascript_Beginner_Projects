const quotes = [

    "Worry a little bit every day and in a lifetime you will lose a couple of years. If something is wrong, fix it if you can. But train yourself not to worry. Worry never fixes anything.",
    "We don not receive wisdom we must discover it for ourselves after a journey that no one can take for us or spare us.",
    "The strongest possible piece of advice I would give any young woman is: Don't screw around, and don't smoke.",
    "Grown-ups never understand anything for themselves, and it is tiresome for children to be always and forever explaining things to them.",
    "Never refuse any advance of friendship, for if nine out of ten bring you nothing, one alone may repay you.",
    "There is no problem so awful that you can not add some guilt to it and make it even worse.",
    "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
    "The brain is a wonderful organ. It starts working the moment you get up in the morning and does not stop until you get into the office.",
    "The Constitution only gives people the right to pursue happiness. You have to catch it yourself.",
]

const usedIndex = new Set()
const quoteElement = document.getElementById("quote")

function genQuotes() {
    while (true) {

        const randomIdx = Math.floor(Math.random() * quotes.length);
        if (usedIndex.has(randomIdx)) continue

        const quote = quotes[randomIdx];
        quoteElement.innerHTML = quote;
        udesIndex.add(randomIdx);

        break;
    }
}