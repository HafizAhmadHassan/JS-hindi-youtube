console.table([
    2>1,
    2!=1,
    "2">1, // java script convert to num
    "02">1,

//Java script. comparison 
// and equality check behaves different

    null>0, // null convert 0
    null==0, // null did not convert 0
    null>=0, // yes null becomse zero

    undefined == 0,
    undefined > 0,
    undefined < 0,

    // === checks also data type
    "2" === 2, // false
    "2"== 2 // true

])