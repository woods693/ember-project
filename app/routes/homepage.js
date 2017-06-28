import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return ['Chris Lee', 'Jason Chan', 'Woody Chang', 'Chang Wook Ahn', 'Brandon Nguyen', 'Alin Paunescu'];
    },
    actions:{
        statementLink(){
            window.location.replace("https://guides.emberjs.com/v2.13.0/")
        },
        
        starting(){
            window.location.replace("https://emberjs.com/");
        }
    }
});
