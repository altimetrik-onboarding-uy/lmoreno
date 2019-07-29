({
    init: function (cmp, event, helper) {
        helper.initialList(cmp, event, helper);
        
    },
    
	change: function (cmp, event, helper) {
        var all = cmp.get("v.all");
        var filter = cmp.get("v.filter");
        if (all == true){
            cmp.set('v.all', false);
            console.log(all);
        	console.log("Evento recibido");
        	helper.initialList(cmp, event, helper);
        }
        if (filter == true){
            cmp.set('v.filter', false);
            console.log("Evento recibido");
        	console.log(filter);
            helper.onlyLast(cmp, event, helper);
        }
        
    	
	}    
})