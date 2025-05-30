import "./globals.css"; // Asegúrate que existe o cámbialo según tu css global
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "NextAPI",
  description: "Mi proyecto de práctica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Fondo global en blanco y negro con blur */}
        <div className="fixed inset-0 w-screen h-screen overflow-hidden -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale"
            style={{ backgroundImage: "url('/fondoMarvel.jpg')" }}
          ></div>
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
        </div>

        {/* Componentes globales */}
        <Header />

        {/* Contenido dinámico */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
