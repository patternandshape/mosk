import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  artist: DS.attr(),
  year: DS.attr(),
  country: DS.attr(),
  price: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),

  // displayPrice: Ember.computed('price'),
  // shoppingCart: Ember.inject.service(),
  // inCart: Ember.computed('shoppingCart.products.[]', function(){
  //   console.log(shoppingCart);
  //   return this.get('shoppingCart').includes(this);
  // })
});
