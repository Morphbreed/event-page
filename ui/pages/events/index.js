import {Events} from '../../../collection/events';
import { Template } from 'meteor/templating';
import './index.html';

Template.eventsIndex.helpers({
    events: () => {        
        return Events.find();
    }
});

