(this.webpackJsonpshopping_app=this.webpackJsonpshopping_app||[]).push([[0],{33:function(e,t,i){},34:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),r=i(20),o=i.n(r),s=i(9),c=i(18),l=i(13),d=i(8),h=function(e,t){var i,a,n,r,o=e.shoppingCart,s=e.quantity,c=e.cost;switch(t.type){case"ADD":return o.find((function(e){return e.id===t.ID}))?e:((i=t.eachWholeProduct).qty=1,n=s+1,a=c+t.eachWholeProduct.price,{shoppingCart:[i].concat(Object(d.a)(o)),quantity:n,cost:a});case"CLEAR":return{shoppingCart:[],quantity:0,cost:0};case"INCREASE":return(i=t.currentWholeProduct).qty=i.qty+1,n=s+1,a=c+i.price,r=o.findIndex((function(e){return e.id===t.ID})),o[r]=i,{shoppingCart:Object(d.a)(o),quantity:n,cost:a};case"DECREASE":return(i=t.currentWholeProduct).qty>1?(i.qty=i.qty-1,n=s-1,a=c-i.price,r=o.findIndex((function(e){return e.id===t.ID})),o[r]=i,{shoppingCart:Object(d.a)(o),quantity:n,cost:a}):e;case"REMOVE":var l;return l=o.filter((function(e){return e.id!==t.ID})),n=s-(i=t.currentWholeProduct).qty,a=c-i.price*i.qty,{shoppingCart:Object(d.a)(l),quantity:n,cost:a};default:return e}},p=i(0),m=n.a.createContext(),g=function(e){var t=Object(a.useReducer)(h,{shoppingCart:[],quantity:0,cost:0}),i=Object(l.a)(t,2),n=i[0],r=i[1];return Object(p.jsx)(m.Provider,{value:Object(c.a)(Object(c.a)({},n),{},{dispatch:r}),children:e.children})};function u(){var e=Object(a.useContext)(m).quantity;return Object(p.jsxs)("nav",{className:"nav",children:[Object(p.jsx)("div",{className:"home",children:Object(p.jsx)(s.b,{to:"/",className:"text",children:"Dil se Indian"})}),Object(p.jsxs)("div",{className:"right",children:[Object(p.jsx)("span",{className:"logo",children:Object(p.jsx)(s.b,{to:"/Cart",children:Object(p.jsx)("i",{className:"fas fa-shopping-cart",style:{color:"black"}})})}),Object(p.jsx)("span",{className:"count",children:Object(p.jsx)("h3",{children:e})})]})]})}function j(){return Object(p.jsx)("div",{className:"banner",children:Object(p.jsx)("header",{className:"head_image",children:Object(p.jsx)("div",{className:"background",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{className:"heading",children:"Ye Hai Aapki Apni Dukaan"}),Object(p.jsx)("h4",{className:"sub_heading",children:"Enjoy Online Shopping"})]})})})})}var b=[{id:1,title:"Fjallraven - Backpack",price:109,description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",category:"men's clothing",image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},{id:2,title:"Mens Slim Fit T-Shirts ",price:22,description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",category:"men's clothing",image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},{id:3,title:"Mens Cotton Jacket",price:55,description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",category:"men's clothing",image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"},{id:4,title:"Mens Casual Slim Fit",price:15,description:"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",category:"men's clothing",image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"},{id:5,title:"Women's Chain Bracelet",price:695,description:"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",category:"jewelery",image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"},{id:6,title:"Solid Petite Micropave ",price:168,description:"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",category:"jewelery",image:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"},{id:7,title:"White Plated Princess",price:9,description:"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",category:"jewelery",image:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"},{id:8,title:"Pierced Gold Steel Double",price:10,description:"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",category:"jewelery",image:"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"},{id:9,title:"2TB Hard Drive -USB 3.0 ",price:64,description:"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user\u2019s hardware configuration and operating system",category:"electronics",image:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"},{id:10,title:"SanDisk 1TB SSD",price:109,description:"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5\u201d hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",category:"electronics",image:"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"},{id:11,title:"Silicon 256GB SSD",price:109,description:"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",category:"electronics",image:"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"},{id:12,title:"4TB Hard Drive",price:114,description:"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",category:"electronics",image:"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"},{id:13,title:"Acer 21.5 Ultra-Thin",price:599,description:"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",category:"electronics",image:"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"},{id:14,title:"Samsung 49-Inch QLED ",price:999,description:"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",category:"electronics",image:"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"},{id:15,title:"BIYLACLESEN Women's coats",price:56,description:"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",category:"women's clothing",image:"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"},{id:16,title:"Lock Women's Jacket",price:29,description:"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",category:"women's clothing",image:"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"},{id:17,title:"Rain Women Raincoats",price:39.99,description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",category:"women's clothing",image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"},{id:18,title:"Women's leeve Neck V ",price:9.85,description:"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",category:"women's clothing",image:"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"},{id:19,title:"Women's Short Sleeve",price:7.95,description:"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",category:"women's clothing",image:"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"},{id:20,title:"Womens Shirt Short",price:12.99,description:"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",category:"women's clothing",image:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"}],f=Object(a.createContext)(),y=function(e){return Object(p.jsx)(f.Provider,{value:Object(d.a)(b),children:e.children})},O=(i(32),function(){var e=Object(a.useContext)(f),t=Object(a.useContext)(m).dispatch,i=Object(a.useState)(!1),n=Object(l.a)(i,2),r=n[0],o=n[1];window.addEventListener("scroll",(function(){window.pageYOffset>1100?o(!0):o(!1)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:r?"scrollshow":"noshow",children:Object(p.jsx)("i",{className:"fas fa-angle-double-up",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})}),Object(p.jsx)("section",{className:"main",children:e.map((function(e){return Object(p.jsxs)("div",{className:"box",children:[Object(p.jsx)("img",{src:e.image,alt:e.category,className:"image"}),Object(p.jsx)("h3",{className:"title",children:e.title}),Object(p.jsxs)("h4",{className:"price",children:["$",e.price]}),Object(p.jsx)("button",{type:"button",className:"btxn",onClick:function(){return t({type:"ADD",ID:e.id,eachWholeProduct:e})},children:"Add To Cart"})]})}))})]})}),k=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j,{}),Object(p.jsx)(O,{})]})},x=function(){var e=Object(a.useContext)(m),t=e.shoppingCart,i=e.cost,n=e.dispatch;return console.log(Object(a.useContext)(m)),Object(p.jsxs)("section",{className:"cart",children:[Object(p.jsx)("h2",{className:"carthead",children:"YOUR BAG"}),t.length>0?t.map((function(e){return Object(p.jsxs)("div",{className:"item_container",children:[Object(p.jsxs)("div",{className:"product",children:[Object(p.jsx)("img",{src:e.image,className:"cimage"}),Object(p.jsxs)("div",{className:"cinside",children:[Object(p.jsxs)("div",{className:"tp",children:[Object(p.jsx)("h4",{children:e.title}),Object(p.jsxs)("h5",{children:["$",e.price]})]}),Object(p.jsx)("button",{type:"button",className:"btnxnxx",onClick:function(){return n({type:"REMOVE",ID:e.id,currentWholeProduct:e})},children:"Remove"})]})]}),Object(p.jsxs)("div",{className:"incdec",children:[Object(p.jsx)("i",{className:"fas fa-sort-up",style:{cursor:"pointer"},onClick:function(){return n({type:"INCREASE",ID:e.id,currentWholeProduct:e})}}),Object(p.jsx)("h5",{children:e.qty}),Object(p.jsx)("i",{className:"fas fa-sort-down",style:{cursor:"pointer"},onClick:function(){return n({type:"DECREASE",ID:e.id,currentWholeProduct:e})}})]})]})})):Object(p.jsx)("h1",{className:"ctitle",children:"YOUR BAG IS EMPTY"}),Object(p.jsx)("div",{className:"line"}),Object(p.jsxs)("div",{className:"cprice",children:[Object(p.jsx)("p",{children:"Total"}),Object(p.jsxs)("h4",{children:["$",i]})]}),Object(p.jsx)("div",{className:"bt",children:Object(p.jsx)("button",{type:"button",className:"btnX",onClick:function(){return n({type:"CLEAR"})},children:"CLEAR CART"})})]})},C=function(){return Object(p.jsx)("section",{className:"nf",children:Object(p.jsx)("section",{className:"nfimage",children:Object(p.jsx)("div",{className:"shade",children:Object(p.jsx)("h2",{className:"hh",children:"Page Not Found"})})})})},w=i(2);i(33);function S(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u,{}),Object(p.jsxs)(w.c,{children:[Object(p.jsx)(w.a,{exact:!0,path:"/",component:k}),Object(p.jsx)(w.a,{exact:!0,path:"/Cart",component:x}),Object(p.jsx)(w.a,{component:C})]})]})}o.a.render(Object(p.jsx)(s.a,{children:Object(p.jsx)(y,{children:Object(p.jsx)(g,{children:Object(p.jsx)(S,{})})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9bb59040.chunk.js.map