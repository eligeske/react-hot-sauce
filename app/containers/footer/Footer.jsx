import React from 'react';
import './footer.less';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>&copy; {year} <span className="hot-sauce-copyright">React Hot Sauce</span></footer>
  );
}
