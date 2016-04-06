import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  artist: DS.attr(),
  year: DS.attr(),
  country: DS.attr(),
  price: DS.attr()
});
