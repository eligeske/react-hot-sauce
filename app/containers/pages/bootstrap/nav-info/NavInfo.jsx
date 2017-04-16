import React from 'react';

import NavPillsInfo from './NavPillsInfo';
import NavTabsInfo from './NavTabsInfo';
import NavStackedPillsInfo from './NavStackedPillsInfo';
import NavItemsInfo from './NavItemsInfo';

export default function NavInfo() {
  window.perf.navInfo = performance.now();
  console.log(`perf navInfo took: ${window.perf.navInfo - window.perf.start}ms`);
  return (
    <div className="code-page">
      <h1>Nav Component</h1>
      <p>The general navigation component for creating vertical and horizontal menus.</p>
      <p>Each nav type consists of the parent nav and child items. These child items
      support react-router-dom routes, normal href links, dropdowns and plain text.</p>
      <NavPillsInfo />
      <NavTabsInfo />
      <NavStackedPillsInfo />
      <NavItemsInfo />
      <br />
    </div>
  );
}
