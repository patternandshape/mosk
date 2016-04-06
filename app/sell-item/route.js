import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('product');
  },
  actions: {
    saveProduct(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('sell-item');
    }
  }
});
