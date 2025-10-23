

export const navItems = [
    {
        id:1,
        path:"/service",
        navTitle:"Services",
        navicon:true,
        dropdown:[
            {id:1,mainTitle:"Domain Services",sublinks:["/domaintransfer","/bulkdomain","/domainbulktransfer"],title:["Domain transfer","Bulk domain","Domain bulk transfer"]},
            {id:2,mainTitle:"Domain Services",sublinks:["/domaintransfer","/bulkdomain","/domainbulktransfer"],title:["Domain transfer","Bulk domain","Domain bulk transfer"]}
        ]
    },
    {
        id:2,
        path:"/domain",
        navTitle:"Domains",
        navicon:false
    },
    {
        id:3,
        path:"/pricing",
        navTitle:"Pricing",
        navicon:false
    },
    {
        id:4,
        path:"/support",
        navTitle:"Support",
        navicon:true
    },


]