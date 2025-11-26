import Footer from "@/components/footer/Footer";
import NavbarContainerThree from "@/components/navbar/NavbarContainerThree";
import ScrollProgressButton from "@/components/shared/scroll-top/ScrollProgressButton";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* <NavbarContainerThree /> */}
      {children}
       <ScrollProgressButton />
      <Footer />
    </div>
  );
}
