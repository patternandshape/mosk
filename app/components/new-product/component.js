import Ember from 'ember';

export default Ember.Component.extend({
  showProductForm: false,
  actions: {
    showProductForm() {
      this.set('showProductForm', true);
    },
    saveProduct() {
      var params = {
        title: this.get('title'),
        artist: this.get('artist'),
        year: parseInt(this.get('year')),
        country: this.get('country'),
        price: parseInt(this.get('price')),
        image: this.get('image'),
        description: this.get('description')
      };
      console.log(params);
      this.set('showProductForm', false);
      this.set('title', "");
      this.set('artist', "");
      this.set('country', "");
      this.set('image', "");
      this.set('description', "");
      this.sendAction('saveProduct', params);
    }
  }
});
