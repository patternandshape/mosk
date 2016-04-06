import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('product');
  },
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },

    // update(product, params) {
    //   this.sendAction('update', product, params);
    // }
  }
});
