public class CreateRecordForAccountController {

    @AuraEnabled
    public static void createRecord( String lName, String Email, Id recId) {
        
        Contact objCon = new Contact();
        objCon.LastName = lName;
        objcon.Email = Email;
        objcon.AccountId = recId;
        System.debug(objCon);
        upsert objCon;
    }
}