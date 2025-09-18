import Footer from "@/components/footer/Footer";
import NavbarContainerThree from "@/components/navbar/NavbarContainerThree";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* <NavbarContainerThree /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
}
