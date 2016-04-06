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
        year: this.get('year'),
        country: this.get('country'),
        price: this.get('price'),
        image: this.get('image'),
        description: this.get('description')
      };
      console.log(params);
      this.set('showProductForm', false);
      this.set('title', "");
      this.set('artist', "");
      this.set('year', "");
      this.set('country', "");
      this.set('price', "");
      this.set('image', "");
      this.set('description', "");
      this.sendAction('saveProduct', params);
    }
  }
});
