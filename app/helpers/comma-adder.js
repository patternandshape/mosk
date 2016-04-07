import Ember from 'ember';

export function commaAdder(params) {

    var price = params[0];
      console.log(price);
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

export default Ember.Helper.helper(commaAdder);
