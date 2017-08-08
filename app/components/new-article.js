import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    saveArticle() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        image: this.get('image') ? this.get('image') : "",
        teaser: this.get('teaser') ? this.get('teaser') : "",
        author: this.get('author') ? this.get('author') : "",
        fulltext: this.get('fulltext') ? this.get('fulltext') : "",
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle', params);
    }
  }
});
