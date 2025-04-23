import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (currency) {
      fetch(`https://api.frankfurter.app/latest?from=USD`)
        .then((res) => res.json())
        .then((res) => setData(res.rates))
        .catch((error) => {
          console.error("Error fetching currency data:", error);
          setData({});
        });
    }
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
