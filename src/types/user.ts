export interface User {
  Invoices: [
    {
      SerialNumber: string;
      CustomerName: string;
      ProductName: string;
      Quantity: number;
      Tax: number;
      TotalAmount: number;
      Date: string; // Format: YYYY-MM-DD
    }
  ];

  Product: [
    {
      Name: string;
      Quantity: number;
      UnitPrice: number;
      Tax: number;
      PriceWithTax: number;
      Discount: number;
    }
  ];

  Customer: [
    {
      CustomerName: string;
      PhoneNumber: string;
      TotalPurchaseAmount: number;
    }
  ];
}
