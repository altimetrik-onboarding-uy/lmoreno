@isTest public class MyTestClass {
    
 @isTest static void emptyTest() {
     list<Timesheet__c> listT = new list<Timesheet__c>();
     System.assertEquals(0, listT.size());
 }
  
  @isTest static void sizeTest2() {
     list<Timesheet__c> listT =  MyTestClass.GenerarTimSheet();
      System.assertEquals(100, listT.size());
 }
    
 @isTest static void containTest() {
     list<Timesheet__c> listT =  MyTestClass.GenerarTimSheet();
     Timesheet__c timesheet = listT[1];
     System.assertEquals('TimeSheet1', timesheet.name);
 }
    
 @isTest static list<Timesheet__c> GenerarTimSheet() {
     list<Timesheet__c> listT = new list<Timesheet__c>();
     for(Integer i=0;i<100;i++) {
            Timesheet__c timesheet = new Timesheet__c(Name='TimeSheet' + i);
            listT.add(timesheet);
        }
     return listT;
 }
    @isTest static void GenerarContact() {
     list<Timesheet__c> listT = MyTestClass.GenerarTimSheet();
     Timesheet__c timesheet = new Timesheet__c();
    for(Integer i=0;i<100;i++) {
            Contact contact = new Contact(FirstName='Contact' + i);
            listT.add(timesheet);
        
        for(Integer j=0;j<100;j++) {
            timesheet = listT[j];
        	timesheet.contact__c = contact.id;
        }
    }
  }
    
}