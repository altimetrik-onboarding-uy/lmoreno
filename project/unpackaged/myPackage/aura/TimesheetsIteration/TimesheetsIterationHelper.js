({
	initialList : function(cmp, event, helper) {
        var action = cmp.get("c.getT");
        action.setCallback(this, function(response) {
 		console.log(response.getReturnValue());
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set('v.timesheets', response.getReturnValue());
            }
        });
       
        $A.enqueueAction(action);
        }
})