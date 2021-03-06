import React, { Component } from 'react';

import AsyncCreatableSelect from '../../src/AsyncCreatable';
import { colourOptions } from '../data';

const filterColors = (inputValue: string) => {
  if (inputValue) {
    return colourOptions.filter(i =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
      );
  }
  return colourOptions;
};

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default class WithPromises extends Component<*, State> {
  render() {
    return (
      <AsyncCreatableSelect
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
      />
    );
  }
}
