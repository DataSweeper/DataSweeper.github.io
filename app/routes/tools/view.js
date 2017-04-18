export default Ember.Route.extend({
    ajax: Ember.inject.service(),
    model: function(param) {
        return this.get('ajax').raw('https://datasweeper.github.io/'+param.id+'.html', {
         dataType: 'html',
         });
    }
});