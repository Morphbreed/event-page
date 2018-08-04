import '../ui/layouts/layout.html';
import {Events}  from '../collection/events';

Router.configure({
    layoutTemplate: 'layout',
});

Router.route('/', function () {
    import '../ui/pages/home/index'
    this.render('homeIndex');
}, {
    name: 'homeIndex'
});

Router.route('/events', function () {
    import '../ui/pages/events/index'
    this.render('eventsIndex');
}, {
    name: 'eventsIndex'
});

Router.route('/event/:_id', function () {
    import '../ui/pages/event/show';
    this.render('eventShow', {
        data: function() {            
            return Events.findOne({_id: this.params._id});
        }
    });
}, {
    name: 'eventShow'
});

Router.route('/events/add', function () {
    if(Meteor.user()) {
        import '../ui/pages/events/add'
        this.render('eventsAdd');
    } else {
        Router.go('eventsIndex'); //TODO: change this to index page
    }
}, {
    name: 'eventsAdd'
});