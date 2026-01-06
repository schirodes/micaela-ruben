import { Mars, Shirt, Venus } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Vestimenta() {
  return (
    <section
      id="vestimenta"
      className="w-full flex flex-col gap-5 items-center justify-center my-page"
    >
      <Separator />
      <h1>Código de vestimenta</h1>
      <p>
        El código de vestimenta es <b>¡Elegante Sport!</b>
      </p>
      <Card className="w-3/4 md:w-1/2">
        <CardHeader>
          <CardTitle className="flex flex-row gap-5 items-center">
            <Shirt /> ¿No sabes que ponerte?
          </CardTitle>
          <CardDescription>¡Te dejamos unas opciones!</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row justify-between gap-5">
          <div className="flex flex-col gap-5">
            <p className="flex flex-row gap-2 items-center font-bold underline">
              <Venus /> Ellas
            </p>

            <p>
              <Link href="Hola" target="_blank">
                <Button>Ideas Elegante Sport para ellas</Button>
              </Link>
            </p>
          </div>

          <div>
            <Separator orientation="vertical" className="hidden md:block" />
            <Separator className="block md:hidden" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="flex flex-row gap-2 items-center font-bold underline text-end justify-end">
              <Mars /> Ellos
            </p>

            <p>
              <Link href="Hola" target="_blank">
                <Button>Ideas Elegante Sport para ellos</Button>
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
