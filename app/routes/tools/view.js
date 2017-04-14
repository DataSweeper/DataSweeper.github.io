export default Ember.Route.extend({
    ajax: Ember.inject.service(),
    model: function(param) {
        return this.get('ajax').raw('http://localhost:4200/'+param.id+'.html', {
         dataType: 'html',
         });
    }
});