// Best time to buy and sell stock

const buySellStock = (priceList) => {
    lowestPrice = priceList[0];
    maxDiff = priceList[1] - priceList[0];
    localDiff = 0;  

    for (let i=1; i<priceList.length; i++) {
        localDiff = priceList[i] - lowestPrice;
        maxDiff = Math.max(maxDiff, localDiff);

        lowestPrice = Math.min(lowestPrice, priceList[i])
    }
    console.log(maxDiff);
    // return maxDiff > 0 ? maxDiff:-1;
}           



// Driver Code 
prices1 = [7,1,5,3,6,4];
prices2 = [7,6,4,3,1];

buySellStock(prices1);
buySellStock(prices2);