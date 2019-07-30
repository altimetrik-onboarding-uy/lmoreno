({
    init: function (cmp, event, helper) {
        helper.initialList(cmp, event, helper);      
    },
    
	change: function (cmp, event, helper) {
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