
import React from 'react';
import CardSummary from './CardSummary';
import { ReactNode } from 'react';

interface AdminCardSummaryProps {
  title: string;
  value: string;
  icon: ReactNode;
  colorClass: string;
  onClick?: () => void;
}

const AdminCardSummary: React.FC<AdminCardSummaryProps> = (props) => {
  return <CardSummary {...props} />;
};

export default AdminCardSummary;
