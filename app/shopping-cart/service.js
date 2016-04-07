import Ember from 'ember';

export default Ember.Service.extend({
  products: [],
  cartTotal: Ember.computed('products.[]', function(){
    var sum = 0;
    var cartProducts = this.get('products');
    console.log(cartProducts);
    for (var i = 0; i < cartProducts.length; i++) {
      sum += cartProducts[i].get('price');
      console.log(sum);
    }
    return sum;
  }),
  add(product) {
      this.get('products').pushObject(product);
    }
});
