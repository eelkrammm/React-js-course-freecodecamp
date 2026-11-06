const { useState, useMemo } = React;

export function CurrencyConverter() {

const [number, setNumber] = useState("");
const [fromCurrency, setFromCurrency] = useState("USD"); 
const [toCurrency, setToCurrency] = useState("USD"); 

const goodMapping = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
};

const handleNumber = (e) => {
  setNumber(e.target.value);
}

const convertInUsd = useMemo(() => {
  if (!number) return 0; 
  const early = number / goodMapping[fromCurrency];
  return early
}, [number, fromCurrency])

const finalResult = convertInUsd * goodMapping[toCurrency]

// cek
console.log(fromCurrency);
console.log(toCurrency);
console.log(number);

return(
<div className="container" >
<h1>Currency Converter</h1>
<p>{fromCurrency} to {toCurrency} conversion</p>
<input type="number" value={number} onChange={handleNumber}/>
<label>
Start Currency:
<select name="currency-from" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
<option value="USD">USD</option>
<option value="EUR">EUR</option>
<option value="GBP">GBP</option>
<option value="JPY">JPY</option>
</select>
</label>
<label>
Target Currency:
<select name="currency-to" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
<option value="USD">USD</option>
<option value="EUR">EUR</option>
<option value="GBP">GBP</option>
<option value="JPY">JPY</option>
</select>
</label>

 <p>
        {finalResult !== 0 
          ? `Converted Amount: ${finalResult.toFixed(2)} ${toCurrency}` 
          : ""}
      </p>

</div>

)
}
