import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('product');
  },
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(product) {
      this.get('shoppingCart').add(product);
    }
  }
});
