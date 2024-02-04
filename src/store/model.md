# Store Model

Accounts:

- ID
- First Name
- Last Name
- Email Address
- Password (hashed)
- Funds

Transactions:

- ID
- Account ID
- Stock ID
- Price
- Action (Buy/Sell)
- Timestamp

Stocks:

- ID
- Name

Portfolios:

- ID
- Account ID
- Stock IDs (Array)

# Search Response

```json
{
  "1. symbol": "BA",
  "2. name": "The Boeing Company",
  "3. type": "Equity",
  "4. region": "United States",
  "5. marketOpen": "09:30",
  "6. marketClose": "16:00",
  "7. timezone": "UTC-05",
  "8. currency": "USD",
  "9. matchScore": "1.0000"
}
```

# Quote Response

```json
{
  "Global Quote": {
    "01. symbol": "AAPL",
    "02. open": "324.7300",
    "03. high": "325.9800",
    "04. low": "322.8500",
    "05. price": "324.9500",
    "06. volume": "20028447",
    "07. latest trading day": "2020-02-14",
    "08. previous close": "324.8700",
    "09. change": "0.0800",
    "10. change percent": "0.0246%"
  }
}
```
