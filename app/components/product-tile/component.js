import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('product');
  },
  displayPrice: Ember.computed('product.price', function(){
    var price = this.get('product.price');
    function numberWithCommas(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }),
  shoppingCart: Ember.inject.service(),
  actions: {
    addToCart(product) {
      this.get('shoppingCart').add(product);
    }
  }
});
