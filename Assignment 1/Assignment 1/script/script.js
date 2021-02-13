$(document).ready(function(){


    document.form.onsubmit = function () {
        return formDetail();
    }
    
    let companyName = document.getElementById("companyName").value;
    let owner = document.getElementById("owner").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let annualSale = document.getElementById("annualSale").value;
    let borrowAmt = document.getElementById("borrowAmt").value;
    let payTerms = document.getElementById("payTerms").value;

    localStorage.setItem("Name", companyName);
    localStorage.setItem("owner",owner);
    localStorage.setItem("email",email);
    localStorage.setItem("phoneNum", phoneNumber);
    localStorage.setItem("annSale", annualSale);
    localStorage.setItem("brwAmt", borrowAmt);
    localStorage.setItem("pyTerm", payTerms); 
});