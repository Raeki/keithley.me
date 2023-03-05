import { ReactNode } from 'react';

import Header from './Layout-Components/Header';
import Row from './Layout-Components/Row';
import Sidebar from './Layout-Components/Sidebar';
import ActiveApp from './Layout-Components/ActiveApp';
import Footer from './Layout-Components/Footer';
import classes from './Layout.module.css';

type AppProps = {
  children: ReactNode;
};

export default function Layout({ children: activeApp }: AppProps): JSX.Element {
  return (
    <main className={classes.layout}>
      <Header />
      <Row>
        <Sidebar />
        <ActiveApp>{activeApp}</ActiveApp>
      </Row>
      <Footer />
    </main>
  );
}
