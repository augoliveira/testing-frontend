import Header from '../../components/Header/index';
import Hero from '../../components/Hero';
import Service from '../../components/service';
import Projects from '@/components/Projects_20240616171111';

export default function Home() {
  return (
    <div className="h-screen w-full overflow-hidden overflow-y-auto bg-neutral-900">
      <Header>Home</Header>
      <div className="mb-7 mt-2 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Newest Songs</h1>
        </div>
        <div className="h-screen w-full">
          <Hero />
          <div className="relative h-full w-full">
            <Service />
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}