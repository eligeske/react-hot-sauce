import React from 'react';

import './page.less';

import Footer from '../footer/Footer';

export default function Page(props) {
  return (
    <div className="page">
      {props.children}
      <Footer />
    </div>
  );
}
