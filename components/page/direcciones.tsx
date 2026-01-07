'use client';

import {
  AlertCircleIcon,
  Church,
  Clock,
  Copy,
  MapPin,
  PartyPopper,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const copiarAlPortapapeles = async (texto: string) => {
  try {
    await navigator.clipboard.writeText(texto);

    toast.success('Copiado al portapapeles');
  } catch {
    toast.error('Fallo al copiar al portapapeles');
  }
};

export default function Direcciones() {
  return (
    <section
      id="direcciones"
      className="w-full flex flex-col gap-5 items-center justify-center my-page"
    >
      <h1>Información y direcciones</h1>

      <div>
        Nuestra boda será el{' '}
        <span className="font-bold text-xl">¡Sábado 31 de Enero!</span>
      </div>

      <div className="text-center mt-2">
        Por dudas, consultas o inconvenientes, contactarnos a:
        <br />
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center mt-2">
          <span className="font-bold">+54 11 54733110 (Micaela)</span>
          <Link href={'https://wa.link/ml40oe'} target="_blank">
            <Button>Abrir en WhatsApp</Button>
          </Link>
          <Button onClick={() => copiarAlPortapapeles('+54 11 54733110')}>
            <Copy /> Copiar número
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full items-center md:items-start justify-center">
        <Card className="flex card-size flex-col">
          <CardHeader>
            <CardTitle className="flex flex-row items-center gap-5">
              <Church /> <p>La Iglesia</p>
            </CardTitle>
            <CardDescription className="flex flex-row items-center gap-2">
              <Clock size="1rem" /> Horario: 11.45 hs
            </CardDescription>
          </CardHeader>
          <CardContent className="grow">
            La iglesia avenida Hipolito Yrigoyen 250, General Pacheco (Código
            Postal 1617), Buenos Aires.
            <br />
            <br />
            La ceremonia se celebrará aquí, revisa la dirección fácil y rápido
            cuantas veces necesites. ¡Te esperamos!
            <Alert className="mt-5" variant="destructive">
              <AlertCircleIcon />
              <AlertTitle>Consideración MUY importante</AlertTitle>
              <AlertDescription>
                En la iglesia NO podemos tirar arroz ni nada similar a la
                salida, asi que te pedimos por favor que no lleven nada desde
                casa ese día
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter>
            <Link
              href="https://maps.app.goo.gl/HKHefriitkE1fdoh8"
              target="_blank"
            >
              <Button>
                <MapPin />
                Abrir en Google Maps
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex card-size flex-col md:w-1/2">
          <CardHeader>
            <CardTitle className="flex flex-row items-center gap-5">
              <PartyPopper /> <p>¡La Fiesta!</p>
            </CardTitle>
            <CardDescription className="flex flex-row items-center gap-2">
              <Clock size="1rem" /> Horario: Desde las 14.00 a 22.00 hs
            </CardDescription>
          </CardHeader>
          <CardContent className="grow">
            ¡Luego de la ceremonia nos reuniremos aquí para seguir celebrando
            juntos este nuevo comienzo!
            <br />
            <br />
            Ubicado en: Cordoba 1233, Ingeniero Maschwitz (Código postal 1623),
            Buenos Aires
          </CardContent>
          <CardFooter>
            <Link
              href="https://maps.app.goo.gl/FKQMjpzmVVE5abLA9"
              target="_blank"
            >
              <Button>
                <MapPin />
                Abrir en Google Maps
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
