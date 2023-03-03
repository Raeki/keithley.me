import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from '../UI/Card';

type AppProps = {
  children: ReactNode;
};

export default function Layout({ children }: AppProps): JSX.Element {
  return (
    <Card>
      <Header />
      {children}
      <Footer />
    </Card>
  );
}
