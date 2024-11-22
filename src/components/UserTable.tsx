import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowUpDown } from 'lucide-react';
import { RootState } from '../store/store';
import { sortUsers } from '../store/userSlice';
import type { User } from '../types/user';

const UserTable: React.FC = () => {
  const dispatch = useDispatch();
  const { users, sortField } = useSelector((state: RootState) => state.users);

  const handleSort = (field: keyof User['Invoices'][0]) => {
    dispatch(sortUsers(field));
  };

  const SortIcon = ({ field }: { field: keyof User['Invoices'][0] }) => (
    <ArrowUpDown
      className={`inline-block ml-2 h-4 w-4 transition-colors ${
        sortField === field ? 'text-blue-600' : 'text-gray-400'
      }`}
    />
  );

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
      {/* Invoice Table */}
      <h2 className="text-lg font-bold text-gray-700 mb-4">Invoices</h2>
      <table className="min-w-full divide-y divide-gray-200 mb-8">
        <thead className="bg-gray-50">
          <tr>
            {['SerialNumber', 'CustomerName', 'ProductName', 'Quantity', 'Tax', 'TotalAmount', 'Date'].map((field) => (
              <th
                key={field}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort(field as keyof User['Invoices'][0])}
              >
                {field} <SortIcon field={field as keyof User['Invoices'][0]} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.Invoices.map((invoice, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="px-6 py-4">{invoice.SerialNumber}</td>
              <td className="px-6 py-4">{invoice.CustomerName}</td>
              <td className="px-6 py-4">{invoice.ProductName}</td>
              <td className="px-6 py-4">{invoice.Quantity}</td>
              <td className="px-6 py-4">{invoice.Tax}</td>
              <td className="px-6 py-4">{invoice.TotalAmount}</td>
              <td className="px-6 py-4">{invoice.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Product Table */}
      <h2 className="text-lg font-bold text-gray-700 mb-4">Products</h2>
      <table className="min-w-full divide-y divide-gray-200 mb-8">
        <thead className="bg-gray-50">
          <tr>
            {['Name', 'Quantity', 'UnitPrice', 'Tax', 'PriceWithTax', 'Discount'].map((field) => (
              <th
                key={field}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.Product.map((product, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="px-6 py-4">{product.Name}</td>
              <td className="px-6 py-4">{product.Quantity}</td>
              <td className="px-6 py-4">{product.UnitPrice}</td>
              <td className="px-6 py-4">{product.Tax}</td>
              <td className="px-6 py-4">{product.PriceWithTax}</td>
              <td className="px-6 py-4">{product.Discount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Customer Table */}
      <h2 className="text-lg font-bold text-gray-700 mb-4">Customers</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['CustomerName', 'PhoneNumber', 'TotalPurchaseAmount'].map((field) => (
              <th
                key={field}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.Customer.map((customer, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="px-6 py-4">{customer.CustomerName}</td>
              <td className="px-6 py-4">{customer.PhoneNumber}</td>
              <td className="px-6 py-4">{customer.TotalPurchaseAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
