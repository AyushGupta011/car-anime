export function Headline() {
  const text = "WELCOME ITZFIZZ";
  
  return (
    <div className="absolute top-[30%] left-[5%] z-20 flex gap-[0.3rem] value-add pointer-events-none">
      {text.split('').map((char, i) => (
        <span 
          key={i} 
          className="text-[8rem] font-bold text-[#111] leading-none value-letter opacity-0"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}
