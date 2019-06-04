import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Image } from '.';
import { Proportions } from '../../../constants';
import { Table } from '../table';
import CONSTANTS from './constants';

storiesOf('Image', module)
  .add('Default', () => (
    <div style={{ width: 320 }}>
      <Image rounded={boolean('rounded', false)} src="http://bulma.io/images/placeholders/640x480.png" size="3by2" />
    </div>
  ))
  .add('Fixed Square', () => (
    <Table>
      <thead>
        <tr>
          <th />
          <th>Size</th>
          <th>Image</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {CONSTANTS.SIZES.filter(size => typeof size === 'number').map((size: any) => (
          <tr key={size}>
            <td />
            <td style={{ width: 100 }}>{size}</td>
            <td style={{ width: 128 }}>
              <Image
                src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original"
                size={size}
              />
            </td>
            <td />
          </tr>
        ))}
      </tbody>
    </Table>
  ))
  .add('Responsive images with ratios', () => (
    <Table>
      <thead>
        <tr>
          <th />
          <th>Size</th>
          <th>Image</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {CONSTANTS.SIZES.filter(size => typeof size === 'string').map((size: any) => (
          <tr key={size}>
            <td />
            <td style={{ width: 100 }}>{size}</td>
            <td style={{ width: 128 }}>
              <Image
                src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original"
                size={size}
              />
            </td>
            <td />
          </tr>
        ))}
      </tbody>
    </Table>
  ));
