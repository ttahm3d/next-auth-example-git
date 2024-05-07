import { AppLayout } from "@/components";

export default function About() {
  return (
    <AppLayout
      leftComponent={<h1>About page</h1>}
      rightComponent={<h2>Should be different</h2>}
    />
  );
}
