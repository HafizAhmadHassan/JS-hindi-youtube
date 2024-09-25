let myDate = new Date()

console.table([
    myDate.toString(),
    myDate.toDateString(),
    myDate.toLocaleString(),
    typeof myDate
]);

let myCreatedDate = new Date(2023, 0, 23)

let myCreatedDate2 = new Date("2023-01-23")

console.table
    ([  
        myCreatedDate.toDateString(),
        myCreatedDate2.toLocaleString(),
        Date.now(), // returns the seconds
        myCreatedDate2.getTime(),
        myCreatedDate.getDate(),
        Math.floor(Date.now()/1000)        
    ])


    console.table
    ([  
        myDate ,
        myDate.getMonth()+1,
        myDate.getDay(),

    ])

    console.log(
        myDate.toLocaleString(
        'default',
        {
            weekday: "long",
            
            //timeZone: ''
        }

    )) // this is an object