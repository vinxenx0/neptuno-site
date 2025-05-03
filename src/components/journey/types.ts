
import { ReactNode } from 'react';

export interface JourneyLayoutProps {
  children: ReactNode;
  journeyTitle?: string;
  progress?: number;
  currentPoints?: number;
}

export interface RewardCardProps {
  title: string;
  points?: number;
}

export interface RewardPopupProps {
  title: string;
  points?: number;
  open: boolean;
  onClose: () => void;
}

export interface BadgeProps {
  name: string;
  image: string;
  description?: string;
  unlocked?: boolean;
}

export interface ProgressBarProps {
  progress: number;
  total?: number;
  showText?: boolean;
}
