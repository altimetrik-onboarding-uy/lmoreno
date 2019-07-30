({
	
	helperFilter : function (component, event) {
        component.set('v.filter', true);
        var filter = component.get("v.filter");
        var updateEvent = component.getEvent("updateFilter");
        updateEvent.setParams({ "filter1": filter });
        updateEvent.fire();
        
	},
	
	helperAll : function (component) {
        component.set('v.all', true);
        var all = component.get("v.all");
        var updateEvent = component.getEvent("updateFilter");
        updateEvent.setParams({ "all": all });
        updateEvent.fire();
	},
	
	helperSubmitted : function (component) {
        component.set('v.submitted', true);
        var submitted = component.get("v.submitted");
        var updateEvent = component.getEvent("updateFilter");
        updateEvent.setParams({ "submitted": submitted });
        updateEvent.fire();
	},
	
	helperNotSubmitted : function (component) {
        component.set('v.notSubmitted', true);
        var notSubmitted = component.get("v.notSubmitted");
        var updateEvent = component.getEvent("updateFilter");
        updateEvent.setParams({ "notSubmitted": notSubmitted });
        updateEvent.fire();
    }
})