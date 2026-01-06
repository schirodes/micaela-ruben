'use client';

import { Copy, Gift } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Separator } from '../ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import Image from 'next/image';
import { Button } from '../ui/button';
import { toast } from 'sonner';

const regalos = [
  { nombre: 'Nuestros primeros ladrillos', precio: 50000 },
  { nombre: 'Balde de pintura blanca', precio: 85000 },
  { nombre: 'Cerámicas para el piso', precio: 100000 },
  { nombre: 'Ventana', precio: 150000 },
  { nombre: 'Juego de mesa y sillas', precio: 225000 },
  { nombre: 'Sillón', precio: 375000 },
  { nombre: 'Techo', precio: 500000 },
] as const;

const copiarAlPortapapeles = async (texto: string) => {
  try {
    await navigator.clipboard.writeText(texto);

    toast.success('Copiado al portapapeles');
  } catch {
    toast.error('Fallo al copiar al portapapeles');
  }
};

export default function Regalos() {
  return (
    <section
      id="regalos"
      className="w-full flex flex-col gap-5 items-center text-center justify-center my-page"
    >
      <Separator />
      <h1>
        <Gift /> Regalos
      </h1>
      <p>
        Nuestra boda es el comienzo de un gran viaje juntos para toda la vida,
        <br />y el regalo más lindo es que estén con nosotros en este día tan
        especial. <br />
        <br />
        Como todo viaje, el punto de partida te lleva a dar pasos. <br />
        Algunos pequeños y otros más grandes. <br />
        El paso que queremos cultivar es uno muy especial:{' '}
        <span className="text-xl font-bold">¡Nuestra casa propia!</span>
        <br />
        <br />
        Es por eso que los invitamos a ser parte de este gran sueño.
      </p>
      <Card className="w-3/4 md:w-1/3 text-start">
        <CardHeader>
          <CardTitle className="flex flex-row gap-5 items-center">
            <Gift /> Ideas para regalos
          </CardTitle>
          <CardDescription>
            Les compartimos algunas ideas simbólicas
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-between gap-2">
          <Table>
            <TableHeader className="bg-gray-500">
              <TableRow>
                <TableHead className="w-2/3">Idea</TableHead>
                <TableHead>Monto sugerido</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {regalos.map((regalo, index) => (
                <TableRow key={index}>
                  <TableCell>{regalo.nombre}</TableCell>
                  <TableCell>
                    ${regalo.precio.toLocaleString('es-AR')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex flex-col text-start items-start gap-2">
          <p className="font-semibold underline">Donde enviar el regalo</p>
          <p>
            Alias: rubenfanc.icbc{' '}
            <Button
              onClick={() => copiarAlPortapapeles('rubenfanc.icbc')}
              variant={'outline'}
              className="ml-1"
            >
              <Copy />
            </Button>
          </p>
          <p>Propietario: Rubén Eduardo Fanchini</p>
        </CardFooter>
      </Card>

      <div className="w-full md:w-1/3 relative">
        <div className="absolute top-[42%] md:top-1/2 w-11/12 md:w-5/6 justify-center left-1/20 md:left-1/12">
          <Card className="opacity-85 w-full text-xs">
            <CardContent className="text-center flex flex-col gap-5 font-bold">
              <p className="font-extrabold text-xl md:text-2xl">
                ¡Te agradecemos infinitamente!
              </p>
              <p>
                Queremos que cuando nos visiten, sientan que su regalo está ahí
                esperándolos: en el sillón que nos sentaríamos a tomar una rica
                merienda, <br />
                en la cocina donde compartiríamos cenas cargadas de anécdotas, y
                en las mismas paredes donde colgaríamos nuestras fotos juntos.{' '}
                <br /> <br />
                Es un gran desafío para nosotros, pero confiamos en que con
                tiempo y esfuerzo ese proyecto que hoy es un sueño, irá tomando
                forma.
              </p>
            </CardContent>
            <CardFooter>
              Los queremos mucho y nos vemos pronto, Rubén y Mica
            </CardFooter>
          </Card>
        </div>
        <Image
          className="object-contain"
          src={'/regalos2.jpg'}
          alt="Micaela y Rubén"
          width={1920}
          height={1920}
        ></Image>
      </div>
    </section>
  );
}
