({
    filter : function (component, event) {
        component.set('v.filter', true);
        var filter = component.get("v.filter");
      
        console.log(filter);
        console.log("enviando evento");
        
        var updateEvent = component.getEvent("updateFilter");
        updateEvent.setParams({ "filter1": filter });
        updateEvent.fire();
        
    },
    
    all : function (component) {
        component.set('v.all', true);
        var all = component.get("v.all");
         console.log(all);
        var updateEvent = component.getEvent("updateFilter");
        updateEvent.setParams({ "all": all });
        updateEvent.fire();
    }
})