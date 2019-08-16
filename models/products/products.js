'use strict';

const DataModel = require('../../memory.js');


class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
     id: {require: true, type: 'object'},
      name: {require: true, type: 'string'},
      category_id: { required: true, type: 'object'},
      price: { required: true, type: 'string' },
      weight: { required: false , type: 'string'},
      quantity_in_stock: { required: true , type: 'string'}
    };
  }
}


module.exports = Products;
