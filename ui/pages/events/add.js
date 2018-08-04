import {Events} from '../../../collection/events';
import { Template } from 'meteor/templating';
import './add.html';

var hooksObject = {
    onError: () => {
        $('.events-add-form-error').show();
    },
    onSuccess: () => {
        $('.events-add-form-success').show();
    }
};

AutoForm.hooks({
    eventsAdd: hooksObject
});

Template.eventsAdd.helpers({
    Events() {
        return Events;
    }   
});
