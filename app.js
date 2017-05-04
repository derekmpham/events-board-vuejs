new Vue({

	// target div with 'events' id
	el: '#events',

	// register any values or collections holding data for the app
	data: {
		event: {name: '', description: '', date: ''},
		events: []
	},

	// anything within ready function will run when app loads
	ready: function() {
		// when application loads, we want to call method that initializes some data
		this.fetchEvents();
	},

	// methods we want to use in our app are registered here
	methods: {

		// dedicate method to retrieving and setting some data
		fetchEvents: function() {
			var events = [
			{
				id: 1,
				name: 'Coachella',
				description: 'Music and arts festival',
				date: '2017-04-14'
			},
			{
				id: 2,
				name: 'Sneaker Con Bay Area 2017',
				description: 'Sneaker enthusiast gathering',
				date: '2017-04-29'
			},
			{
				id: 3,
				name: 'DocuSign Momentum Hackathon',
				description: 'Software development competition',
				date: '2017-05-02'
			},
			];

			// $set is a convenience method provided by Vue that is similar to pushing data onto an array
			this.$set('events', events);
		},

		// adds an event to the existing events array
		addEvent: function() {
			if(this.event.name) {
				this.events.push(this.event);
				this.event = {name: '', description: '', date: ''};
			}
		}
	}
});
