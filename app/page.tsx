import Direcciones from '@/components/page/direcciones';
import Header from '@/components/page/header';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Direcciones />
    </main>
  );
}
