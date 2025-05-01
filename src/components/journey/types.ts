
import { ReactNode } from 'react';

export interface JourneyLayoutProps {
  children: ReactNode;
  journeyTitle: string;
  progress: number;
  currentPoints?: number;
}

export interface RewardPopupProps {
  title: string;
  points: number;
  description?: string;
  open?: boolean;
  onClose?: () => void;
}

export interface RewardCardProps {
  title: string;
  points: number;
  description?: string;
}
