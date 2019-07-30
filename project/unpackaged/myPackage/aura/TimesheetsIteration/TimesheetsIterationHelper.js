({
	initialList : function(cmp, event, helper) {
        var action = cmp.get("c.getT");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set('v.timesheets', response.getReturnValue());
            }
        });
       
        $A.enqueueAction(action);
        }
})