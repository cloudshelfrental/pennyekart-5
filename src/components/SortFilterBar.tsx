import { ArrowDownUp, TrendingUp, Star, BadgePercent, IndianRupee } from "lucide-react";

export type SortOption = "relevance" | "price_low" | "price_high" | "rating" | "discount" | "most_ordered";

const sortOptions: { value: SortOption; label: string; icon: React.ElementType }[] = [
  { value: "relevance", label: "Relevance", icon: ArrowDownUp },
  { value: "price_low", label: "Price ↑", icon: IndianRupee },
  { value: "price_high", label: "Price ↓", icon: IndianRupee },
  { value: "rating", label: "Rating", icon: Star },
  { value: "discount", label: "Discount", icon: BadgePercent },
  { value: "most_ordered", label: "Popular", icon: TrendingUp },
];

interface SortFilterBarProps {
  selected: SortOption;
  onChange: (value: SortOption) => void;
}

const SortFilterBar = ({ selected, onChange }: SortFilterBarProps) => {
  return (
    <div className="border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="container">
        <div className="flex items-center gap-1.5 overflow-x-auto py-2 scrollbar-hide">
          {sortOptions.map((opt) => {
            const Icon = opt.icon;
            const isActive = selected === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => onChange(opt.value)}
                className={`flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`}
              >
                <Icon className="h-3 w-3" />
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SortFilterBar;
