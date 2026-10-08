import { statsData } from "@/data/stats";
import { StatItem } from "./StatItem";

export function StatsList() {
  return (
    <>
      {statsData.map((stat, i) => (
        <StatItem 
          key={stat.id}
          id={stat.id}
          value={stat.value} 
          label={stat.label} 
          color={stat.color}
          position={stat.position}
          index={i} 
        />
      ))}
    </>
  );
}
