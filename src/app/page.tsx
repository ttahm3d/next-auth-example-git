import { AppLayout } from "@/components";

export default function Home() {
  return (
    <AppLayout
      leftComponent={<h1>test</h1>}
      rightComponent={<h2>I should be on right</h2>}
    />
  );
}
