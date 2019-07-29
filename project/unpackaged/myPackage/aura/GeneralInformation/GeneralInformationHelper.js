({
     validateDates : function (component,startDate,endDate) {
         if(endDate < startDate){
           component.set("v.errors", [{message:"The final date must be greater than the initial"}]);
       }   
     },
    
   	 validateHourRate : function (component,hour_rate) {
    	if(hour_rate > 100){
           component.set("v.errors", [{message:"it can't be over $100"}]);
       }
    },
    
    save : function (component) {
    	var StartDate = component.get("v.startDate");
        component.set("v.startDate", StartDate);
         
        var EndDate = component.get("v.endDate");
        component.set("v.EndDate", EndDate);
		
        var selectCmp = component.find("InputSelectSingle");
        component.set("v.Type_of_timesheets", selectCmp);
         
        var hour_rate = component.get("v.hour_rate");
        component.set("v.hour_rate", hour_rate);
        
        var Gross_pay = component.get("v.Gross_pay");
        component.set("v.Gross_pay", Gross_pay);
         
        var Taxes = component.get("v.Taxes");
        component.set("v.Taxes", Taxes);
        
        var Comments = component.get("v.Comments");
        component.set("v.Comments", Comments);
       }
})