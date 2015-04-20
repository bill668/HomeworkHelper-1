// note that I don't put "var" in front of the variable
// refer to http://docs.meteor.com/#/full/namespacing for why
// Ming: This is a Package Scope. This formHelpers variable is visible to every file inside
// of this app. 4/20/15
formHelpers = {
	getTaskData: function() {
		var name = $('#name').val(); // name input box value
		var description = $('#description').val(); // description input box value
		var date = $('#datepicker').val(); // date input box value
		// send back a premade object
		return {
				url: name,
				title: name,
				description: description,
				date: date
				};
		}
};