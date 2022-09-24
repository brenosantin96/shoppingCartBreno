const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "EUR", style: "currency"
});

//used to format numbers

export function formatCurrency(number: number){

    return CURRENCY_FORMATTER.format(number);

    
}
