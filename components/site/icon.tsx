import {
  Clock,
  Globe,
  Timer,
  BadgeCheck,
  Wrench,
  PackagePlus,
  Server,
  Wifi,
  Languages,
  UserCheck,
  Calendar,
  Wallet,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  clock: Clock,
  globe: Globe,
  timer: Timer,
  'badge-check': BadgeCheck,
  wrench: Wrench,
  'package-plus': PackagePlus,
  server: Server,
  wifi: Wifi,
  languages: Languages,
  'user-check': UserCheck,
  calendar: Calendar,
  wallet: Wallet,
  'trending-up': TrendingUp,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? Globe;
  return <Cmp className={className} />;
}
