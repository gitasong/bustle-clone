import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image: DS.attr(),
  teaser: DS.attr(),
  author: DS.attr()
});
