import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../bootstrap/buttons';
import {
  Table,
  TableHead as Head,
  TableBody as Body,
  TableRow as Row,
  TableColH as ColH,
  TableCol as Col
} from '../bootstrap/table';

export default function DataTable1(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <Table bordered hover>
        <Head>
          <Row>
            {props.headers.map(txt => <ColH key={txt}>{txt}</ColH>)}
            <ColH colSpan={2} />
          </Row>
        </Head>
        <Body>
          {
            props.rows.map((row, idx) => (
              <Row key={`${row[idx]}-${idx}`}>
                {row.map((txt, iidx) => <Col key={`txt-${iidx}`}>{txt}</Col>)}
                <Col style={{ width: '120px' }}>
                  <Button
                    type={'danger'}
                    size={'sm'}
                    onClick={() => props.onRemove(idx)}
                  >Remove</Button>
                </Col>
              </Row>
            ))
          }
        </Body>
      </Table>
    </div>
  );
}
DataTable1.prototype.propTypes = {
  title: PropTypes.string.isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.shape(PropTypes.string).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
