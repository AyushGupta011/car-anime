import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="h-[100vh] w-full flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold tracking-widest uppercase text-white">Next Section</h2>
      </div>
    </main>
  );
}
