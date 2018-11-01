({
    doInit : function(component, event, helper) {
        
        var action = component.get('c.createRecord');
        action.setParams({'lName' : component.get('v.lname'),
                          'Email__c' : component.get('v.email'),
                          'recId' : component.get('v.recordId')});
        action.setCallback(this, function(a) {
            var state = a.getState();
            if (state === "SUCCESS") {
                var name = a.getReturnValue();
                component.set('v.showTable', false);
                component.find("lastName").set("v.value", "");
                component.find("Email").set("v.value", "");
                
            }
        });
        
        $A.enqueueAction(action);
        
        
    },
    
    showTable : function(component, evt, help) {
        
        component.set('v.showTable', true);
    },
    
    Close : function(component, event, helper) {
        
        component.set('v.showTable', false);
    },
    
    closeModel : function (component, event, helper) {
        
        component.set('v.isOpen', false);
    },
    
    openModel : function (component, event, helper) {
        
        console.log('i m called');
        component.set('v.isOpen', true);
    }
})