import React from 'react';
import './footer.less';

import { ContainerFluid } from '../../components/bootstrap/layout';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <ContainerFluid>
        &copy; {year} <span className="hot-sauce-copyright">React Hot Sauce</span>
      </ContainerFluid>
    </footer>
  );
}
