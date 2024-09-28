import "./globals.css";
import Header from "./components/header/header";

export const metadata = {
  title: "Shop Quần Áo",
  description: "Siêu rẻ đ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
