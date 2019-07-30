({
    filter : function (component, event) {
        helper.helperFilter(component, event);
        
    },
    
    all : function (component) {
        helper.helperAll(component);
    },
    
    submitted : function (component) {
        helperSubmitted(component);
    },

    notSubmitted : function (component) {
        helperNotSubmitted(component);
    }
})