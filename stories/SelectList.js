/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/

import {action} from '@storybook/addon-actions';
import React from 'react';
import SelectList from '../src/SelectList';
import {storiesOf} from '@storybook/react';

const defaultProps = {
  'aria-label': 'Ice cream flavor',
  placeholder: 'Select flavor...',
  style: {textAlign: 'left', maxWidth: '192px'},
  onChange: action('change'),
  options: [
    {label: 'Chocolate', value: 'chocolate'},
    {label: 'Vanilla', value: 'vanilla'},
    {label: 'Strawberry', value: 'strawberry'},
    {label: 'Caramel', value: 'caramel'},
    {label: 'Cookies and Cream', value: 'cookiescream', disabled: true},
    {label: 'Peppermint', value: 'peppermint'},
    {label: 'Some crazy long value that should be cut off', value: 'longVal'}
  ]
};

const selectedValue = [
  'chocolate',
  'vanilla',
  'longVal'
];

storiesOf('SelectList', module)
  .add(
    'Default',
    () => (render({...defaultProps}))
  )
  .add(
    'multiple noValue: true',
    () => (render({multiple: true}))
  )
  .add(
    'multiple: true',
    () => (render({multiple: true, value: selectedValue}))
  )
  .add(
    'multiple disabled: true',
    () => (render({disabled: true, multiple: true, value: selectedValue}))
  )
  .add(
    'disabled: true',
    () => (render({disabled: true}))
  )
  .add(
    'value: longVal',
    () => (render({value: 'longVal'}))
  )
  .add(
    'renderItem',
    () => render({
      multiple: true,
      renderItem: item => <em>{item.label}</em>
    }),
    {info: 'This example uses renderItem method to italicize each option\'s label text'}
  );

function render(props = {}) {
  return (
    <SelectList
      {...defaultProps}
      {...props} />
  );
}