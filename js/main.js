let num = 28374234;

// 28,374,234

function formatMoney(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(formatMoney(28374234));


