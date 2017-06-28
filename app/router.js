import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('tasks', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:task_id'});
  });
  this.route('homepage', { path: '/homepage'});
  this.resource('transition1', function() {});
  this.resource('transition2', function() {});
  this.route('login');
  this.route('students');
});

export default Router;
