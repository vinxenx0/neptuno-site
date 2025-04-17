
import React from 'react';
import CardSummary from './CardSummary';
import { ReactNode } from 'react';

interface UserCardSummaryProps {
  title: string;
  value: string;
  icon: ReactNode;
  colorClass: string;
  onClick?: () => void;
}

const UserCardSummary: React.FC<UserCardSummaryProps> = (props) => {
  return <CardSummary {...props} />;
};

export default UserCardSummary;
