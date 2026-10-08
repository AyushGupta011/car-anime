import carImg from "../../../public/car.png";

export function CarVisual() {
  return (
    <div className="absolute top-0 left-0 w-[350px] h-[200px] z-30 car-element will-change-transform flex items-center justify-center pointer-events-none">
      <img 
        src={carImg.src} 
        alt="Car top view" 
        className="w-[350px] h-auto drop-shadow-2xl object-contain" 
      />
    </div>
  );
}
