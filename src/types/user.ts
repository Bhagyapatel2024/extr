export interface Invoice {
  SerialNumber: string;
  CustomerName: string;
  ProductName: string;
  Quantity: number;
  Tax: number;
  TotalAmount: number;
  Date: string; // Format: YYYY-MM-DD
}

export interface Product {
  Name: string;
  Quantity: number;
  UnitPrice: number;
  Tax: number;
  PriceWithTax: number;
  Discount: number;
}

export interface Customer {
  CustomerName: string;
  PhoneNumber: string;
  TotalPurchaseAmount: number;
}

export interface User {
  Invoices: Invoice[];
  Products: Product[];
  Customers: Customer[];
}
