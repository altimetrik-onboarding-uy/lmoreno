({
    filter : function (component, event) {
        helper.helperFilter(component, event);
        
    },
    
    all : function (component) {
        helper.helperAll(component);
    },
    
    submitted : function (cosmponent) {
        helper.helperSubmitted(component);
    },

    notSubmitted : function (component) {
        helper.helperNotSubmitted(component);
    }
})