import '../lib/router';
import '../ui/components/nav';
import './config/accounts-config';

Meteor.subscribe('events');

Template.registerHelper("formatDate", (date) => {
    return moment(date).format('DD.MM.YYYY');
});