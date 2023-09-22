import "./globals.css";
import Header from "../components/Header";

export const metadata = {
   title: "Home",
   description: "Home of the app",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <div className="flex h-screen w-screen flex-col overflow-x-hidden">
               <Header />
               <div className="w-full flex-grow">{children}</div>
            </div>
         </body>
      </html>
   );
}
