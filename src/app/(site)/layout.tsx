interface Props {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: Props) {
  return (
    <main className="w-screen h-screen md:w-[700px] md:h-[450px] lg:w-[940px] lg:h-[560px] bg-white/30 p-5 md:rounded-lg backdrop-blur-lg shadow-lg">
      {children}
    </main>
  );
}
