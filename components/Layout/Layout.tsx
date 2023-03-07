import { useState, PropsWithChildren } from 'react';

import Header from './Layout-Components/Header';
import Row from './Layout-Components/Row';
import Sidebar from './Layout-Components/Sidebar';
import ActiveApp from './Layout-Components/ActiveApp';
import Footer from './Layout-Components/Footer';
import classes from './Layout.module.css';

export default function Layout({
  children: activeApp,
}: PropsWithChildren): JSX.Element {
  const [displaySidebar, setDisplaySiderbar] = useState(false);
  return (
    <main className={classes.layout}>
      <Header />
      <Row>
        {displaySidebar ? <Sidebar /> : ''}
        <ActiveApp>{activeApp}</ActiveApp>
      </Row>
      <Footer />
    </main>
  );
}
