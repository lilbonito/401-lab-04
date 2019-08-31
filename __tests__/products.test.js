const Products = require('../models/products/products.js');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Products();
  });


  // How might we repeat this to check on types?
  it('sanitize() returns undefined with missing requirements', () => {
    const schema = categories.schema;
    var testRecord = {};
    for (var field in schema) {
      if (schema[field].required) {
        testRecord[field] = null;
      }
    }
    expect(categories.sanitize(testRecord)).toEqual(false);
  });

  it('can post() a new category', () => {
    let obj = {name: 'Test Category'};
    return categories.create(obj)
    .then(record => {
      Object.keys(obj).forEach(key => {
        expect(record[key]).toEqual(undefined);
      });
    }).catch(e => console.error('ERR', e));
  });

  it('can update() a category', () => {
    let obj = {name: 'Test Category'};
    return categories.create(obj)
    .then(createRecord => {
      return categories.update(createRecord._id, obj)
      .then(record => {
        expect(record.name).toEqual(createRecord._id)
      }).catch(e => console.error('ERR', e));
    });
  });

  it('can delete() a category', () => {
    let obj = {name: 'Test Category'};
    return categories.create(obj)
    .then(createdRecord => {
      return categories.delete(createdRecord)
      .then(record => {
        expect(record).toEqual(undefined)
      }).catch(e => console.error('ERR', e));
    });
  });

  it('can get() a category', () => {
    let obj = {name: 'Test Category'};
    return categories.create(obj)
    .then(record => {
      return categories.get(record._id)
      .then( category => {
        expect(category.name).toEqual(record._id)
      }).catch(e => console.error('ERR', e));
    });
  });
});







