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
    }, 
    
    helperChange: function (cmp, event, helper) {
        var all = cmp.get("v.all");
        var filter = cmp.get("v.filter");
        var submitted = cmp.get("v.submitted");
        var notSubmitted = cmp.get("v.notSubmitted");
        if (all == true){
            cmp.set('v.filter', false);
            cmp.set('v.notSubmitted', false);
            cmp.set('v.submitted', false);
            cmp.set('v.all', false);
        	helper.initialList(cmp, event, helper);
        }
        if (filter == true && submitted == true){
            cmp.set('v.filter', false);
            cmp.set('v.submitted', false);
            helper.getLastAndSubmitted(cmp, event, helper);
        }
        else if (filter == true && notSubmitted == true){
            cmp.set('v.filter', false);
            cmp.set('v.notSubmitted', false);
            helper.getLastAndNoSubmitted(cmp, event, helper);
        }
        else if (filter == true){
            helper.onlyLast(cmp, event, helper);
        }
        else if (submitted == true){
            helper.submitted(cmp, event, helper);
        }
        else if (notSubmitted == true){
            helper.notSubmitted(cmp, event, helper);
        }
        
    	
	}    
})