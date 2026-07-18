import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Priority Experience | Clearer fees, better updates, faster support",
    template: "%s | Priority Experience",
  },
  description:
    "An improved food delivery experience for frequent city customers. Clear fees before checkout, dependable delivery updates, and faster support resolution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
