public class GetTimesheets {
    @AuraEnabled
    public static list<Timesheet__c> getT(){
        return [SELECT Contact__r.FirstName, Contact__r.Birthdate, StartDate__c, EndDate__c, Hours__c, Gross_Pay__c, Taxes__c, 
                Type_of_timesheets__c, Status__c
                FROM Timesheet__c];
    }
    
    @AuraEnabled
    public static list<Timesheet__c> getOnlyLast(){
        return [SELECT Contact__r.FirstName,Contact__r.LastName, Contact__r.Birthdate, StartDate__c, EndDate__c, Hours__c, Gross_Pay__c, Taxes__c, 
                Type_of_timesheets__c, Status__c
                FROM Timesheet__c 
                WHERE StartDate__c > YESTERDAY ];
    }
    @AuraEnabled
    public static list<Timesheet__c> getOnlySubmitted(){
        return [SELECT Contact__r.FirstName,Contact__r.LastName, Contact__r.Birthdate, StartDate__c, EndDate__c, Hours__c, Gross_Pay__c, Taxes__c, 
                Type_of_timesheets__c, Status__c
                FROM Timesheet__c 
                WHERE Status__c = 'SUBMITTED' ];
    }

    @AuraEnabled
    public static list<Timesheet__c> getOnlyNoSubmitted(){
        return [SELECT Contact__r.FirstName,Contact__r.LastName, Contact__r.Birthdate, StartDate__c, EndDate__c, Hours__c, Gross_Pay__c, Taxes__c, 
                Type_of_timesheets__c, Status__c
                FROM Timesheet__c 
                WHERE Status__c != 'SUBMITTED' ];
    }
    
    @AuraEnabled
    public static list<Timesheet__c> getLastAndSubmitted(){
        return [SELECT Contact__r.FirstName,Contact__r.LastName, Contact__r.Birthdate, StartDate__c, EndDate__c, Hours__c, Gross_Pay__c, Taxes__c, 
                Type_of_timesheets__c, Status__c
                FROM Timesheet__c 
                WHERE (StartDate__c > YESTERDAY AND Status__c = 'SUBMITTED')];
    }
    
    @AuraEnabled
    public static list<Timesheet__c> getLastAndNoSubmitted(){
        return [SELECT Contact__r.FirstName,Contact__r.LastName, Contact__r.Birthdate, StartDate__c, EndDate__c, Hours__c, Gross_Pay__c, Taxes__c, 
                Type_of_timesheets__c, Status__c
                FROM Timesheet__c 
                WHERE (StartDate__c > YESTERDAY AND Status__c != 'SUBMITTED')];
    }
}