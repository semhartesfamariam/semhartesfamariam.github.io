 var frmvalidator = new Validator("myform");
    frmvalidator.addValidation("FirstName","req","Please enter your First Name");
      frmvalidator.addValidation("FirstName","maxlen=20",
                                 "Max length for FirstName is 20");

      frmvalidator.addValidation("LastName","req");
      frmvalidator.addValidation("LastName","maxlen=20");

      frmvalidator.addValidation("Email","maxlen=50");
      frmvalidator.addValidation("Email","req");
      frmvalidator.addValidation("Email","email");
    
     frmvalidator.addValidation("Comment","maxlen=50");

