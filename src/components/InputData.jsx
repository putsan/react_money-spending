/* eslint-disable */
import React, { useCallback, useState } from 'react';
import { getExchangeRate } from '../api/api';
const gg = {
  "AED":4.466627,
  "AFN":93.821793,
  "ALL":122.887369,
  "AMD":634.769256,
  "ANG":2.183217,
  "AOA":796.887898,
  "ARS":101.231175,
  "AUD":1.616319,
  "AWG":2.188985,
  "AZN":2.061108,
  "BAM":1.94302,
  "BBD":2.455809,
  "BDT":103.148031,
  "BGN":1.951761,
  "BHD":0.458433,
  "BIF":2367.751678,
  "BMD":1.216103,
  "BND":1.622026,
  "BOB":8.374246,
  "BRL":6.274482,
  "BSD":1.216331,
  "BTC":5.1889628e-5,
  "BTN":89.840511,
  "BWP":13.127911,
  "BYN":3.127382,
  "BYR":23835.610112,
  "BZD":2.451816,
  "CAD":1.570195,
  "CDF":2395.722324,
  "CHF":1.081887,
  "CLF":0.031887,
  "CLP":879.849926,
  "CNY":7.957324,
  "COP":4213.795359,
  "CRC":737.18177,
  "CUC":1.216103,
  "CUP":32.226718,
  "CVE":110.726433,
  "CZK":26.336891,
  "DJF":216.125527,
  "DKK":7.438168,
  "DOP":70.648153,
  "DZD":161.129489,
  "EGP":19.056572,
  "ERN":18.24166,
  "ETB":47.208683,
  "EUR":1,
  "FJD":2.49149,
  "FKP":0.910682,
  "GBP":0.91077,
  "GEL":3.982718,
  "GGP":0.910682,
  "GHS":7.211612,
  "GIP":0.910682,
  "GMD":62.933816,
  "GNF":12130.622937,
  "GTQ":9.487064,
  "GYD":254.064573,
  "HKD":9.427775,
  "HNL":29.502632,
  "HRK":7.539348,
  "HTG":88.449241,
  "HUF":362.046151,
  "IDR":17362.478618,
  "ILS":3.928692,
  "IMP":0.910682,
  "INR":89.910351,
  "IQD":1447.162043,
  "IRR":51203.997911,
  "ISK":155.879561,
  "JEP":0.910682,
  "JMD":174.459661,
  "JOD":0.862247,
  "JPY":126.097355,
  "KES":133.163465,
  "KGS":98.57156,
  "KHR":4906.973666,
  "KMF":491.852986,
  "KPW":1094.533317,
  "KRW":1348.294715,
  "KWD":0.37067,
  "KYD":1.013576,
  "KZT":511.58724,
  "LAK":11301.240813,
  "LBP":1847.259956,
  "LKR":230.182213,
  "LRD":198.224894,
  "LSL":17.828069,
  "LTL":3.590835,
  "LVL":0.735609,
  "LYD":1.623475,
  "MAD":10.926644,
  "MDL":20.981971,
  "MGA":4554.30403,
  "MKD":61.211449,
  "MMK":1617.660976,
  "MNT":3479.840914,
  "MOP":9.712886,
  "MRO":434.148404,
  "MUR":47.9751,
  "MVR":18.730311,
  "MWK":930.318429,
  "MXN":24.492038,
  "MYR":4.938572,
  "MZN":90.959699,
  "NAD":17.827376,
  "NGN":462.118811,
  "NIO":42.450516,
  "NOK":10.622473,
  "NPR":143.743247,
  "NZD":1.727308,
  "OMR":0.468162,
  "PAB":1.216331,
  "PEN":4.395595,
  "PGK":4.271561,
  "PHP":58.476902,
  "PKR":195.36719,
  "PLN":4.504085,
  "PYG":8351.49741,
  "QAR":4.427843,
  "RON":4.868024,
  "RSD":117.584751,
  "RUB":92.112487,
  "RWF":1197.861018,
  "SAR":4.562337,
  "SBD":9.809831,
  "SCR":25.787237,
  "SDG":67.190054,
  "SEK":10.140022,
  "SGD":1.62588,
  "SHP":0.910682,
  "SLL":12273.513665,
  "SOS":707.771378,
  "SRD":17.212738,
  "STD":25337.330588,
  "SVC":10.643567,
  "SYP":623.608861,
  "SZL":17.828241,
  "THB":36.762309,
  "TJS":13.775085,
  "TMT":4.256359,
  "TND":3.287736,
  "TOP":2.773075,
  "TRY":9.302458,
  "TTD":8.255832,
  "TWD":34.223189,
  "TZS":2820.680605,
  "UAH":34.526575,
  "UGX":4439.594419,
  "USD":1.216103,
  "UYU":51.260943,
  "UZS":12736.24216,
  "VEF":12.14582,
  "VND":28125.411881,
  "VUV":133.191794,
  "WST":3.079137,
  "XAF":651.628833,
  "XAG":0.048246,
  "XAU":0.000653,
  "XCD":3.286578,
  "XDR":0.846378,
  "XOF":656.69525,
  "XPF":119.634106,
  "YER":304.451555,
  "ZAR":17.843812,
  "ZMK":10946.384675,
  "ZMW":25.716347,
  "ZWL":391.585249
}

export const InputData = React.memo(
  () => {
    const [command, setCommand] = useState('');
    const [listOfExpenses, setListOfExpenses] = useState({});
    const [latestExchangeRate, setlatestExchangeRate] = useState(gg);
    const baseCurrency = 'EUR';

    const handleCommand = useCallback(({ target }) => {
      setCommand(target.value);
    });

    const runCommand = () => {
      const { type, date, price, currency, product } = parseCommand(command);

      if (type === 'LIST') {
        console.log(listOfExpenses); //eslint-disable-line
      } else if (type === 'CLEAR') {
        setListOfExpenses((prevList) => {
          const copyOfList = { ...prevList };

          delete copyOfList[date];

          return copyOfList;
        });
      } else if (type === 'TOTAL') {
        // getExchangeRate()
        //   .then(exchange => setlatestExchangeRate(exchange));

        const commonList = Object
          .values(listOfExpenses)
          .reduce((acc, list) => acc.concat(list), []);

        const totalExpence = commonList.reduce((total, expence) => {
          const { currency: usedCurrency, price } = expence;

          return usedCurrency === currency
            ? total + price
            : total + ((price / latestExchangeRate[usedCurrency]) * latestExchangeRate[currency]);
        }, 0);
      } else {
        setListOfExpenses(prevList => ({
          ...prevList,
          [date]: prevList[date] ? [
            ...prevList[date],
            {
              price,
              currency,
              product,
            },
          ] : [{
            price,
            currency,
            product,
          }],
        }));
      }

      setCommand('');
    };

    return (
      <>
        <label>
          <input
            value={command}
            type="text"
            onChange={handleCommand}
          />

          <input
            type="submit"
            onClick={runCommand}
          />
        </label>

        <p>{JSON.stringify(listOfExpenses)}</p>
        <p>{JSON.stringify(latestExchangeRate)}</p>
      </>
    );
  },
);

function parseCommand(string) {
  const lowerString = string.toUpperCase().trim();

  if (lowerString === 'list') {
    return { type: 'list' };
  }

  const partsOfCommand = lowerString.split(' ');

  return {
    type: partsOfCommand[0],
    date: partsOfCommand[1],
    price: Number(partsOfCommand[2]),
    currency: partsOfCommand[3] ? partsOfCommand[3] : partsOfCommand[1],
    product: partsOfCommand.slice(4).join(' '),
  };
}
