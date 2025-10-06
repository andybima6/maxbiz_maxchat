interface StatsCardProps {
  value: string | number;
  label: string;
}

const StatsCard = ({ value, label }: StatsCardProps) => {
  return (
    <div className="rounded-xl border border-border/50 bg-card p-6 text-center">
      <div className="text-3xl md:text-4xl font-bold tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export default StatsCard;
