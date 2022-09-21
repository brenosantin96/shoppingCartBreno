const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "EUR", style: "currency"
});

export function formatCurrency(number: number){

    return CURRENCY_FORMATTER.format(number);

    
}

//let sum = (x: number, y: number): number => {
//    return x + y;
//}

