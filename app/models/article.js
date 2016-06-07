import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    category: DS.attr(),
    author: DS.attr(),
    text: DS.attr(),
    image: DS.attr()
});