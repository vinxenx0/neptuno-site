
import React from 'react';
import { History } from 'lucide-react';

const UserTransactionsPanel: React.FC = () => {
  const transactions = [
    {
      id: 1,
      type: 'reset',
      date: '4/13/2025, 11:39:24 PM',
      status: 'pending',
      isPositive: true
    },
    {
      id: 2,
      type: 'usage',
      date: '4/17/2025, 7:49:32 AM',
      status: 'pending',
      isPositive: false
    },
    {
      id: 3,
      type: 'usage',
      date: '4/17/2025, 7:49:34 AM',
      status: 'pending',
      isPositive: false
    },
    {
      id: 4,
      type: 'usage',
      date: '4/17/2025, 7:49:35 AM',
      status: 'pending',
      isPositive: false
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium flex items-center gap-2">
          <History size={20} className="text-blue-500" />
          <span>Historial de Transacciones</span>
        </h2>
        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
          4 transacciones
        </span>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center border-b pb-4">
            <div className={`w-10 h-10 rounded-full ${transaction.isPositive ? 'bg-green-100' : 'bg-red-100'} flex items-center justify-center mr-4`}>
              <span className={`text-2xl ${transaction.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {transaction.isPositive ? '+' : '-'}
              </span>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between">
                <div className="text-sm font-medium">{transaction.type}</div>
                <div className={`text-sm ${transaction.isPositive ? 'text-green-600' : 'text-red-600'} font-medium`}>
                  {transaction.isPositive ? '+1000 créditos' : '-1 créditos'}
                </div>
              </div>
              <div className="text-xs text-gray-500 flex justify-between">
                <span>{transaction.date}</span>
                <span>• {transaction.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTransactionsPanel;
