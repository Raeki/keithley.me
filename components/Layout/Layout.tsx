import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type AppProps = {
  children: ReactNode;
};

export default function Layout({ children }: AppProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
