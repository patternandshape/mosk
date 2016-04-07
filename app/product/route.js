import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },
  shoppingCart: Ember.inject.service(),
  
  actions: {
    destroyProduct(product) {
      product.destroyRecord();
      this.transitionTo('index');
    },
    updateProduct(product, params) {
      console.log(product);
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          product.set(key,params[key]);
        }
      });
      product.save();
      this.transitionTo('index', product);
    }
  }
});
