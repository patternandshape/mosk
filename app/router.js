import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('store');
  this.route('cart');
  this.route('new-product');
  this.route('sell-item');
});

export default Router;
