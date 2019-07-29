({
        
	 filter : function(component, event, helper) {
        console.log(component.find("hour_rate")); 
        helper.validateDates (component,component.find("startDate"),component.find("endDate"));
		helper.validateHourRate (component,component.find("hour_rate"));
        if(component.get("v.er") === false)
        {
        	helper.save(component);
            console.log("hola");
        }
    }
    
})