import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { AddInstituteModal } from "@/components/modals/AddInstituteModal";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <AddInstituteModal />
    </>
  );
}
