import React from 'react';

export function Table(props) {
  const classNames = ['table'];
  const prefix = 'table-';

  ['hover', 'striped', 'bordered', 'condensed'].forEach((cn) => {
    if (props[cn] === true) {
      classNames.push(`${prefix}${cn}`);
    }
  });
  return (
    <table className={classNames.join(' ')}>{props.children}</table>
  );
}
export function TableHead(props) {
  return <thead {...props} />;
}
export function TableBody(props) {
  return <tbody {...props} />;
}
export function TableFoot(props) {
  return <tfoot {...props} />;
}
export function TableRow(props) {
  return <tr {...props} />;
}
export function TableCol(props) {
  return <td {...props} />;
}
export function TableColH(props) {
  return <th {...props} />;
}
