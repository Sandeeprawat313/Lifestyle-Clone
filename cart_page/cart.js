
// console.log('hi')

let data =[{  image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010459248-Multicolour-1000010459248_01-2100.jpg",
rupeesig:"₹",
price:297,
productName:"BOSSINI Women Solid Round Neck Top",
categories:"cothing",
Productid: "C12345"
},
{  image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010465887-Black-Black-1000010465887_01-2100.jpg",
rupeesig:"₹",
price:649,
productName:"BOSSINI Women Round Neck Lace top",
categories:"cothing",
Productid: "C12346"
},
{  image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010444494-Pink-DustyPink-1000010444494_01-2100.jpg",
rupeesig:"₹",
price:449,
productName:"GINGER Women Textured Puffed Top",
categories:"cothing",
Productid: "C12347"
},
{  image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010444516-Grey-Sage-1000010444516_01-2100.jpg",
rupeesig:"₹",
price:897,
productName:"GINGER Women Solid Round Neck Top",
categories:"cothing",
Productid: "C12347"
}];

displayCart(data);



function displayCart(data){
    let mrp =0;
    let offerDiscount =0;
    data.forEach(function(ele,index){
        // inside function
        let actualPrice =ele.price -(ele.price*0.2);
        actualPrice =Math.floor(actualPrice);
        let saved = ele.price - actualPrice ;
        mrp+=ele.price;
        offerDiscount+=saved;
        // adding cart in html
        let cartDiv = document.createElement('div');
    cartDiv.setAttribute('class','cart_div');
    cartDiv.innerHTML+= ` <div>
    <div>
        <img src="${ele.image}" alt="">
    </div>
    <div>
        <h3>${ele.productName}</h3>
        <p>${ele.categories}</p>
        <p><span class ="span1"> ${ele.price}  ₹ </span><span class ="span2"> ${actualPrice} ₹ </span><span class="span3"> ${saved} ₹ saved</span></p>

        <p>ProductId : ${ele.Productid}</p>
    </div>
    </div>
    <h2><span class="delsym"></span><span class="delevery" style="font-weight:normal;">Delivery in   </span> <span> Enter pincode above</span><span class="qty">Qty:1</span></h2> ` ;
    let delRem_div = document.createElement('div');
    let remove = document.createElement('h5');
    remove.innerText ="Remove";
    // adding event listner for remove button
    remove.addEventListener('click' ,function(){
        removeFromCart(index);
    })

    let mtf = document.createElement('h5');
    mtf.innerText ="Move to favourite";
    // adding event listner for move to favourite element;
    mtf.addEventListener('click',function(){
        moveToFavourite(index,ele);
    })
delRem_div.append(remove,mtf);
cartDiv.append(delRem_div);
document.getElementById('cart_content').append(cartDiv);    
    })
    // showing total number of cart 
    document.getElementById('cart_quantity').innerText = data.length +" "+ ' products '
    displayPrices(mrp,offerDiscount);
}

// --------------display total price and total discount-------------
function displayPrices(total,discount){
    let mrp = document.querySelector('.total_price');
    mrp.innerText = total;
    let dis = document.querySelector('.total_discount');
    dis.innerText = discount;
    document.querySelector('.total_payment').innerText = total-discount
}

// --------------- removing functionalities -----------------

function removeFromCart(index){
    console.log(index);
}

// -------------- move to favourite functionalities ----------------
function moveToFavourite(index,element){
    console.log(element);
}






