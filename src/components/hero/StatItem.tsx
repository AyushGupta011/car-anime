type StatItemProps = {
  value: string;
  label: string;
  color?: string;
  position?: string;
  index: number;
  id?: string;
};

export function StatItem({ value, label, color, position, id }: StatItemProps) {
  return (
    <div id={id} className={`absolute ${position} ${color} rounded-[10px] p-[30px] stat-item w-[280px] z-10 opacity-0 flex flex-col justify-start`}>
      <span className="text-[58px] font-semibold leading-tight">{value}</span>
      <span className="text-[18px] mt-1">{label}</span>
    </div>
  );
}
