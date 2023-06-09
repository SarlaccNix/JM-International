"use client";
import Footer from "./components/Footer/footer";
import { createContext } from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { FloatingWhatsApp as Whatsapp } from "react-floating-whatsapp";
import { ParallaxProvider } from "react-scroll-parallax";
import { NextPage } from "next";
interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout: NextPage<RootLayoutProps> = ({ children }) => {
  const context = createContext<{ language: number }>({ language: 0 });
  return (
    <html lang="en">
      <head />
      {/* <context.Provider value={{ language: 0 }}> */}
      <CacheProvider>
        <body>
          {/* <header></header> */}
          <main>
            <ChakraProvider>
              <ParallaxProvider>
                <Flex direction="column" minH="100vh">
                  {children}
                </Flex>
                <Whatsapp
                  phoneNumber="+50762250666"
                  accountName="JM Internacional"
                />
                <Footer />
              </ParallaxProvider>
            </ChakraProvider>
          </main>
        </body>
      </CacheProvider>
      {/* </context.Provider> */}
    </html>
  );
};

export default RootLayout;
