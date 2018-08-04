import { Template } from 'meteor/templating';
import './nav.html';

Template.nav.helpers({
    activePath: (routeName) => {
        var currentRouteName = Router.current().route.getName();
        return currentRouteName == routeName ? 'active' : '';
    }
});
