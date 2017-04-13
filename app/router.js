import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bgp');
  this.route('interface');
  this.route('add-router', {path: '/addrouter'});
  this.route('bgp', {resetNamespace: true }, function() {
    this.route('details', {path: '/details/:id'});
  });
  this.route('login');
  this.route('mtrprofile');
  this.route('inlinefilter');
  this.route('zohoservices');
});

export default Router;
