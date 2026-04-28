type PageLayoutProps = {
  title: string;
};

export default function PageLayout({ title }: PageLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">{title}</h1>
    </main>
  );
}
