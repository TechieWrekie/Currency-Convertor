const InputBox = ({
    label,
    amount,
    onAmountChange,
    currency,
    onCurrencyChange,
    currencyOptions,
    disableInput
}) => {
    return (
        <div className="w-full flex justify-center p-5">
            <div className="w-5/6 rounded-lg bg-white h-36  flex  flex-col justify-between p-4">
                <div className="flex justify-between px-4 py-2 text-xl text-slate-600">
                    <div>{label}</div>
                    <div>Currency Type</div>
                </div>
                <div className="flex justify-between px-4 py-2 text-xl text-slate-600">
                    <input
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                        type="number"
                        className="outline-none"
                        disabled={disableInput}
                    />
                    <div>

                        <select value={currency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                            {
                                currencyOptions?.map((curr, index) => {
                                    return (
                                        <option key={index} value={curr}> {curr}</option>
                                    )
                                })
                            }

                        </select>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default InputBox