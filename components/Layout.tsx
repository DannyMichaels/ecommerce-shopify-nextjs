import { ReactNode } from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import NavMenu from './NavMenu';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <Navbar />
      <Cart />
      <NavMenu />
      <div className="layout__children">{children}</div>
      <Footer />
    </div>
  );
}
