$(document).ready(function(){

    $("#header").html(`Assignment 1 / Aishpreet Kaur / 991585548`);
    $("#footer").html(`kauraish / Davis Campus`);

    let companyName = localStorage.getItem("Name");
    let borrowAmt = localStorage.getItem("brwAmt");
    let payTerms = localStorage.getItem("pyTrm");

    $("#in").html(`Company Name: ${companyName}`);
    $("#borwAmt").html(`Borrow Amount: ${borrowAmt}`);
    $("#payterms").html(`Payment Terms: ${payTerms}`);

    let interest = (parseFloat(borrowAmt) * parseFloat(payTerms) / 12)  * 0.03;
    $("#interest").html(`Interest: ${interest}`);

    let pymnt = parseFloat(borrowAmt) + interest;
    $("#pymnt").html(`Payment: ${pymnt}`);
    
    let profit = pymnt - parseFloat(borrowAmt);
    $("#profit").html(`Profit: ${profit}`);

    let decision = document.getElementById("decision").value;
    
    function toLocalStorage(){
        localStorage.setItem("Interest", interest.value);
        localStorage.setItem("Payment", pyment.value);
        localStorage.setItem("profit", profit.value);
        localStorage.setItem("decision", decision);
    }
});