import { Agent, Content, NavigationBar } from "@/components";

interface IAppLayout {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
}

export default function AppLayout({
  leftComponent,
  rightComponent,
}: IAppLayout) {
  return (
    <main className="grid grid-cols-12 container min-h-screen">
      <NavigationBar />
      <Content>{leftComponent}</Content>
      <Agent>{rightComponent}</Agent>
    </main>
  );
}
