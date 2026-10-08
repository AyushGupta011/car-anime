import carImg from "../../../public/car.png";

export function CarVisual() {
  return (
    <div className="absolute top-0 left-0 z-30 car-element will-change-transform flex items-center justify-center pointer-events-none" style={{ width: '350px', height: '200px' }}>
      <img 
        src={carImg.src} 
        alt="Car top view" 
        className="drop-shadow-2xl object-contain" 
        style={{ width: '350px', height: 'auto' }}
      />
    </div>
  );
}
