import React from 'react';

import {
  Table, TableHead, TableBody, TableRow, TableCol, TableColH
} from '../../../components/bootstrap/table';

export default function ChildOne() {
  return (
    <div>
      <div className="well">
        <h3>Child One</h3>
        <p>Blurb blurb</p>
      </div>
      <Table hover condensed striped>
        <TableHead>
          <TableRow>
            <TableColH>Col 1</TableColH>
            <TableColH>Col 2</TableColH>
            <TableColH>Col 3</TableColH>
            <TableColH>Col 4</TableColH>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCol>Data 1</TableCol>
            <TableCol>Data 2</TableCol>
            <TableCol>Data 3</TableCol>
            <TableCol>Data 4</TableCol>
          </TableRow>
          <TableRow>
            <TableCol>Data 1</TableCol>
            <TableCol>Data 2</TableCol>
            <TableCol>Data 3</TableCol>
            <TableCol>Data 4</TableCol>
          </TableRow>
          <TableRow>
            <TableCol>Data 1</TableCol>
            <TableCol>Data 2</TableCol>
            <TableCol>Data 3</TableCol>
            <TableCol>Data 4</TableCol>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
