import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowUpDown, Mail, Phone, Globe } from 'lucide-react';
import { RootState } from '../store/store';
import { sortUsers } from '../store/userSlice';
import type { User } from '../types/user';

const UserTable: React.FC = () => {
  const dispatch = useDispatch();
  const { users, sortField, sortDirection } = useSelector((state: RootState) => state.users);

  const handleSort = (field: keyof User) => {
    dispatch(sortUsers(field));
  };

  const SortIcon = ({ field }: { field: keyof User }) => (
    <ArrowUpDown
      className={`inline-block ml-2 h-4 w-4 transition-colors ${
        sortField === field ? 'text-blue-600' : 'text-gray-400'
      }`}
    />
  );

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              onClick={() => handleSort('name')}
            >
              Name <SortIcon field="name" />
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              onClick={() => handleSort('username')}
            >
              Username <SortIcon field="username" />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{user.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">@{user.username}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col space-y-1">
                  <a
                    href={`mailto:${user.email}`}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {user.email}
                  </a>
                  <a
                    href={`tel:${user.phone}`}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {user.phone}
                  </a>
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    {user.website}
                  </a>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900 font-medium">{user.company.name}</div>
                <div className="text-sm text-gray-500">{user.company.catchPhrase}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{user.address.street}, {user.address.suite}</div>
                <div className="text-sm text-gray-500">{user.address.city}, {user.address.zipcode}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;