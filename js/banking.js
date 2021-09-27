document.getElementById('depositbtn').addEventListener('click', function(){
     const deposittk = document.getElementById('kototkdibi').value;
     
     const deposittotal = document.getElementById('deposit-total');
     const balancetotal = document.getElementById('balance-total');
     let depositTotaltext = deposittotal.innerText;
     let balanceTotaltext = balancetotal.innerText;
     let withdrawTotaltext = withdrawtk.innerText;
    //  const recentwithdrawbalance = parseFloat(withdrawTotaltext);
     const previousbalancetotal = parseFloat(balanceTotaltext);
    //  console.log(balanceTotaltext);
     const previodeposittoatal = parseFloat(depositTotaltext);
    //  console.log(previodeposittoatal);
     const recentdeposittotal = parseFloat(deposittk);
     deposittotal.innerText = previodeposittoatal + recentdeposittotal;
     balancetotal.innerText = previousbalancetotal + recentdeposittotal;
     balancetotal.innerText = previousbalancetotal - recentwithdrawbalance;
    //  console.log(recentdeposittotal);
     deposittk.innerText = '';
    //  console.log(depositTotaltext);
})

document.getElementById('withdrawbtn').addEventListener('click', function(){
    const withdrawinput = document.getElementById('kototktulbi').value;
    const withdrawtotaltext = document.getElementById('withdraw-total').innerText;
    const withdrawtotalvalue = document.getElementById('withdraw-total');
    // let withdrawtotaltext = withdrawammount.innerText;
    const withdrawtotal = parseFloat( withdrawtotaltext);
    withdrawtotalvalue.innerText = parseFloat( withdrawtotaltext ) + parseFloat( withdrawinput);
    const balancetotal = document.getElementById('balance-total');
    let balanceTotaltext = balancetotal.innerText;
    const previousbalancetotal = parseFloat(balanceTotaltext);
    console.log(previousbalancetotal);
    balancetotal.innerText = previousbalancetotal - withdrawtotal;

})