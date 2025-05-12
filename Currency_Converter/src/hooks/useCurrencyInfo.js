import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
    const [money, setMoney] = useState({});

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`);
                const data = await response.json();
                setMoney(data[currency]);
                console.log(data);
            } catch (err) {
                console.error("Failed to fetch currency data:", err);
            }
        };

        fetchCurrencyData();
    }, [currency]);

    console.log(money);
    return money;
}

export default useCurrencyInfo;
