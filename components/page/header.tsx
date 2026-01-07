'use client';

import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <section id="header" className="flex h-[90svh] flex-row w-full">
      <div className="bg-gray-700 w-full h-full hidden md:flex md:flex-col items-center justify-center text-base 2xl:text-3xl font-normal text-center">
        <div className="p-page flex flex-col gap-5">
          <p className="font-extrabold text-4xl 2xl:text-8xl pb-10">
            ¡Bienvenidos/as!
            <br />
          </p>
          <p>
            Si llegaste hasta aca, significa que estas invitado a compartir con
            nosotros uno de los días mas especiales de nuestras vidas juntos:
            <b> ¡Nuestra boda!</b>
          </p>
          <p>
            Estamos muy felices y esperamos verte allí para celebrar juntos,
            reír bailar y seguir creando recuerdos. Los queremos mucho y
            bienvenidos a nuestra nueva página.
          </p>
          <p className="flex flex-row gap-2 text-center w-full justify-center items-center">
            Aquí tendrás acceso a info util como:
            <Link href="#vestimenta">
              <Button variant={'outline'}>Código de vestimenta</Button>
            </Link>
            <Link href="#direcciones">
              <Button variant={'outline'}>Información y direcciones</Button>
            </Link>
            <Link href="#regalos">
              <Button variant={'outline'}>Regalos</Button>
            </Link>
          </p>
          <p>
            Si tenes alguna duda no te la guardes, escribinos! Con mucha alegría
            y cariño los esperan pronto, <b>Ruben y Mica</b>
          </p>
        </div>
      </div>

      <div className="h-full relative">
        <div className="flex md:hidden card-size absolute top-1/3 justify-self-center">
          <Card className="opacity-85 w-full">
            <CardContent className="text-center flex flex-col gap-5 font-bold text-xs">
              <p className="font-extrabold text-2xl">¡Bienvenidos/as!</p>
              <p>
                Si llegaste hasta aca, significa que estas invitado a compartir
                con nosotros uno de los días mas especiales de nuestras vidas
                juntos:
                <b> ¡Nuestra boda!</b>
              </p>
              <p>
                Estamos muy felices y esperamos verte allí para celebrar juntos,
                reír bailar y seguir creando recuerdos. Los queremos mucho y
                bienvenidos a nuestra nueva página.
              </p>
              <p className="flex flex-col md:flex-row gap-2 text-center justify-center items-center">
                Aquí tendrás acceso a info util como:
                <Link href="#vestimenta">
                  <Button variant={'outline'} className="text-xs">
                    Código de vestimenta
                  </Button>
                </Link>
                <Link href="#direcciones">
                  <Button variant={'outline'} className="text-xs">
                    Información y direcciones
                  </Button>
                </Link>
                <Link href="#regalos">
                  <Button variant={'outline'} className="text-xs">
                    Regalos
                  </Button>
                </Link>
              </p>
              <p>
                Si tenes alguna duda no te la guardes, escribinos! Con mucha
                alegría y cariño los esperan pronto, <b>Ruben y Mica</b>
              </p>
            </CardContent>
          </Card>
        </div>
        <Image
          src={'/header.webp'}
          className="w-full h-full object-cover"
          width={1920}
          height={1920}
          alt="Micaela y Rubén"
        />
      </div>
    </section>
  );
}
