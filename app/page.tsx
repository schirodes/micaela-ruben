import Direcciones from '@/components/page/direcciones';
import Header from '@/components/page/header';
import Vestimenta from '@/components/page/vestimenta';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Direcciones />
      <Vestimenta />
    </main>
  );
}
