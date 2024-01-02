if (localStorage.getItem('userdetails') === null) {  
    var userDetails = {firstName:"Walter", lastName:"Mitty", dob:"1990-12-01",address1:"Buenos Ayres Drive", address2:"Strandhill", address3:"Co. Sligo"};
    localStorage.setItem('userdetails',JSON.stringify(userDetails));
    document.getElementById("firstNameID").setAttribute('value',userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value',userDetails.lastName);
    document.getElementById("dobID").setAttribute('value',userDetails.dob);
    document.getElementById("address1ID").setAttribute('value',userDetails.address1);       document.getElementById("address2ID").setAttribute('value',userDetails.address2);
    document.getElementById("address3ID").setAttribute('value',userDetails.address3);
} else {
    userDetails=JSON.parse(localStorage.getItem('userdetails'));
    document.getElementById("firstNameID").setAttribute('value',userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value',userDetails.lastName);
    document.getElementById("dobID").setAttribute('value',userDetails.dob);
    document.getElementById("address1ID").setAttribute('value',userDetails.address1);       document.getElementById("address2ID").setAttribute('value',userDetails.address2);
    document.getElementById("address3ID").setAttribute('value',userDetails.address3);
}


var userDetailsUpdate = document.getElementById('udetails');
userDetailsUpdate.addEventListener("submit", UpdateUserDetails);

function UpdateUserDetails() {
    var userDetails={};
    userDetails.firstName=document.getElementById('firstNameID').value;
    userDetails.lastName=document.getElementById('lastNameID').value;
    userDetails.dob=document.getElementById('dobID').value;
    userDetails.address1=document.getElementById('address1ID').value;   
    userDetails.address2=document.getElementById('address2ID').value;
    userDetails.address3=document.getElementById('address3ID').value; 

    localStorage.setItem('userdetails',JSON.stringify(userDetails));

    event.preventDefault();


}
