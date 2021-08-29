

$('.btn1').click(()=>{
    console.log("proceed")
    $('#Billing-form').css("display", "none");
    $('#card-form').css("display", "block");
})



$('.btn2').click(()=>{
    window.confirm("you want to order...")
    alert("Transaction sucessfull...");
    $('#Billing-form').css("display", "block");
    $('#card-form').css("display", "none");
    
    $('.txt').html("<i>Order-Confirmed<i><br> <strong>order no :<strong> "+Date.now());

})

$('.clbtn2').click(()=>{
  
   
    $('#Billing-form').css("display", "block");
    $('#card-form').css("display", "none");
})

