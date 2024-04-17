var arr = [     
        {name: "Roses", image: "https://images.unsplash.com/photo-1550593854-87edb352e3be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvc2VzfGVufDB8fDB8fHww"},
        {name: "Cars", image: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"},
        {name: "Console", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"},
        {name: "Dog", image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww"},
        {name: "Elephants", image:"https://plus.unsplash.com/premium_photo-1664302656038-f9df273a522a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlcGhhdHN8ZW58MHx8MHx8fDA%3D"},
        {name: "red hand", image: "https://images.unsplash.com/photo-1501472347868-5581299ade14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29tZXRoaW5nJTIwcmVkfGVufDB8fDB8fHww"}
];

function showCardsData(){
        var clutter = "";
        arr.forEach(function(obj){
                clutter += `<div class="box">
                <img class="cursor-pointer" src="${obj.image}" alt="image">
                <div class="caption">${obj.name}</div>
            </div>`;
        })

        document.querySelector(".container")
        .innerHTML = clutter;
}

function handleSearchFunctionality(){

        var input = document.querySelector("#searchinput");

        input.addEventListener("focus", function(){
                document.querySelector(".overlay").style.display = "block"
        })

        input.addEventListener("blur", function(){
                document.querySelector(".overlay").style.display = "none"
        })

        input.addEventListener("input", function(){
               var filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
               var clutter = "";
               filteredArray.forEach(function(obj){
                clutter += `<div class="res flex px-8 py-3">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
            </div>`
               })
               document.querySelector(".searchdata").style.display = "block"
               document.querySelector(".searchdata").innerHTML = clutter;

        })


}


handleSearchFunctionality();
showCardsData();
