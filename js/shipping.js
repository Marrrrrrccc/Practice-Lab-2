/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
    var cb1= document.getElementById('same');
    var sName = document.getElementById('shippingName');
    var sZip = document.getElementById('shippingZip');
    var bName = document.getElementById('billingName');
    var bZip = document.getElementById('billingZip');
    if (cb1.checked){
    bName.value = sName.value;
    bZip.value = sZip.value;
        
    }
    else{
        bZip.value = null;
        bName.value = null;
    }
}


    
    
