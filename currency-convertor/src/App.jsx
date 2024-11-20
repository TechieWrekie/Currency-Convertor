import { useEffect, useState } from "react"
import InputBox from "./components/InputBox"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {

  const [fromCurrency, setFromCurrency] = useState("INR")
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [currencyOptions, setCurrencyOption] = useState([])


  const currencyInfo = useCurrencyInfo(fromCurrency)
  useEffect(() => {
    if (currencyInfo) {
      setCurrencyOption(Object.keys(currencyInfo))
    }
  }, [currencyInfo])

  const calculateCurrencyExchnage = () => {
    if (amount && currencyInfo) {
      setConvertedAmount(amount * currencyInfo[toCurrency])
    }
  }
  return (
    <div className='flex flex-wrap justify-center items-center h-screen bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url('../public/assets/alexandr-bormotin-tlVcNXHhZhA-unsplash.jpg')` }}>
      <div className="w-1/2 h-1/2 bg-transparent  flex flex-wrap justify-center items-center backdrop-blur-lg rounded-lg bg-transparent border border-white ">
        <InputBox
          label="From"
          amount={amount}
          currency={fromCurrency}
          currencyOptions={currencyOptions}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setFromCurrency(currency)}
        />
        <div className="mx-auto">
          <button onClick={() => {
            setToCurrency(fromCurrency);
            setFromCurrency(toCurrency);
            setAmount(convertedAmount);
            setConvertedAmount(amount);
          }} className="text-2xl border text-white w-60 hover:bg-blue-500 border-white bg-blue-600 p-5 rounded-lg">Swap</button>
        </div>
        <InputBox
          label="To"
          amount={convertedAmount}
          currency={toCurrency}
          currencyOptions={currencyOptions}
          onAmountChange={(amount) => setConvertedAmount(amount)}
          onCurrencyChange={(currency) => setToCurrency(currency)}
          disableInput
        />
        <div className="mx-auto">
          <button onClick={calculateCurrencyExchnage} className="mb-2 text-2xl border text-white w-80 hover:bg-blue-500 border-white bg-blue-600 p-5 rounded-lg">Calculate currency value</button>
        </div>
      </div>

    </div>
  )
}

export default App
