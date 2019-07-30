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
        },
    
    onlyLast : function(cmp, event, helper) {
		var action = cmp.get("c.getOnlyLast");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set('v.timesheets', response.getReturnValue());
            }
        });
       
        $A.enqueueAction(action);
	},
    
    submitted : function(cmp, event, helper) {
		var action = cmp.get("c.getOnlySubmitted");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set('v.timesheets', response.getReturnValue());
            }
        });
       
        $A.enqueueAction(action);
	},
    
    notSubmitted : function(cmp, event, helper) {
		var action = cmp.get("c.getOnlyNoSubmitted");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set('v.timesheets', response.getReturnValue());
            }
        });
       
        $A.enqueueAction(action);
	},
    
    getLastAndSubmitted : function(cmp, event, helper) {
		var action = cmp.get("c.getLastAndSubmitted");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set('v.timesheets', response.getReturnValue());
            }
        });
       
        $A.enqueueAction(action);
	},
    getLastAndNoSubmitted : function(cmp, event, helper) {
		var action = cmp.get("c.getLastAndNoSubmitted");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set('v.timesheets', response.getReturnValue());
            }
        });
       
        $A.enqueueAction(action);
	}
})