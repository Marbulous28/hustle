import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    save(){
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        category: this.get('category') ? this.get('category') : "",
        text: this.get('text') ? this.get('text') : "",
        image: this.get('image') ? this.get('image') : "",
      };
      console.log(params);
      this.sendAction('save', params);
    }
  }
});
