
export interface JourneyLayoutProps {
  title?: string;
  subtitle?: string;
  bgColor?: string;
  children: React.ReactNode;
  progress?: number;
  currentPoints?: number;
  journeyTitle?: string;
}

export interface RewardCardProps {
  title: string;
  value?: number;
  icon?: React.ReactNode;
  bgColor?: string;
  points?: number;
  description?: string;
}

export interface RewardPopupProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  isVisible?: boolean;
  onClose?: () => void;
  points?: number;
  open?: boolean;
}
