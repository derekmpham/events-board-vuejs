// app.js

new Vue({

    // We want to target the div with an id of 'events'
    el: '#events',

    // Here we can register any values or collections that hold data
    // for the application
    data: {
        event: { name: '', description: '', date: '' },
        events: []
    },

    mounted: function() {
    	this.fetchEvents();
    },

    // Anything within the ready function will run when the application loads
    ready: function() {
        // When the application loads, we want to call the method that initializes
        // some data
        this.fetchEvents();
    },

    // Methods we want to use in our application are registered here
    methods: {


        // We dedicate a method to retrieving and setting some data
        fetchEvents: function() {
            var events = [{
                id: 1,
                name: 'Coachella',
                description: 'Music and arts festival',
                date: '2017-04-14'
            }, {
                id: 2,
                name: 'Sneaker Con Bay Area 2017',
                description: 'Sneaker enthusiast gathering',
                date: '2017-04-29'
            }, {
                id: 3,
                name: 'DocuSign Momentum Hackathon',
                description: 'Software development competition',
                date: '2017-05-02'
            }];
            // $set is a convenience method provided by Vue that is similar to pushing
            // data onto an array
            this.$set(this, 'events', events);
            //this.$set('events', events);
        },

        // Adds an event to the existing events array
        addEvent: function() {
            if (this.event.name) {
                this.events.push(this.event);
                this.event = { name: '', description: '', date: '' };
            }
        },

            deleteEvent: function(index) {
            if (confirm("Are you sure you want to delete this event?")) {
                // $remove is a Vue convenience method similar to splice
                this.events.$remove(index);
            }
        }
    }
});
