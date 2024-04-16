import { H1 } from "@/components/typography/H1";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <H1>Lucas&apos; TODO</H1>
      <Button>Click me</Button>
    </main>
  );
}
