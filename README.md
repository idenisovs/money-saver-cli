# Money Saver CLI

## CSV file format

Example:

```csv
date,payment
2022-01-23,12.34
2022-01-24,23.45
```

Record interface

```typescript
interface PaymentCsvRecord {
    date: string;
    payment: number;
}
```
