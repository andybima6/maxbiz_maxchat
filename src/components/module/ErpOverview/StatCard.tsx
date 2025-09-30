interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

const StatCard = ({ number, label, delay = 0 }: StatCardProps) => {
  return (
    <div 
      className="text-center animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl font-bold  bg-clip-text text-primary mb-2">
        {number}
      </div>
      <div className="text-sm md:text-base text-card-foreground/80">
        {label}
      </div>
    </div>
  );
};

export default StatCard;