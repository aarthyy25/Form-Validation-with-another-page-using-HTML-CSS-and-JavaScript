function validationForm(){
    var fname=document.validateform.fname.value;
    var lname=document.validateform.lname.value;
    var city=document.validateform.city.value;
    var phonenumber=document.validateform.phonenumber.value;
    var address=document.validateform.address.value;
    if(fname==null || fname=="")
    {
        alert("Fill the First Name");
        return false;
    }
    else if(lname==null || lname==""){
        alert("Fill the Last name")
    }
    else if(city==null || city=="")
    {
        alert("Fill the city feild");
        return false;
    }
    else if(address==null || address=="")
    {
        alert("Fill the address feild");
        return false;
    }
    else if(phonenumber=="" || phonenumber==null)
    {
        alert("Fill the phone number");
        return false;
    }
    else if(phonenumber.length<10 || phonenumber.length<10)
    {
        alert("Inavalid phone number");
        return false;
    }
    else{
        alert("The form has been successfully.")
    }
}