import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('news');
  this.route('admin');
  this.route('full-article', {path: 'full-article/:article_id'});
  this.route('entertainment');
  this.route('sports');
});

export default Router;
