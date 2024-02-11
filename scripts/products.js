function Product(name, description, image, id){
    this.name = name;
    this.description = description;
    this.image = image;
    this.id = id;
};

var roboChair_desc = "RoboChair is an exoskeleton with one degree of freedown (DOF) - the knee. It is designed to provide assistive motion for users with limited mobility in Sit-to-Stand and Stand-to-Sit (STS) needs.";
var roboChair = new Product("RoboChair", roboChair_desc, 'images/RoboChairBlankBackground.png', "robochair");

var exollent_desc = "Exollent is a POC system which is intented for initial testing of gait dynamics, structural strength, system's stability, user's comfort, environmental loads, and motion control.";
var exollent = new Product("Exollent", exollent_desc, 'images/ExollentConcept.png', "exollent");

var products = [roboChair, exollent];

function populateProduct(products){
    for(var i = 0; i < products.length; i++){
        var image = document.createElement("img");
        image.src = products[i].image;
        image.setAttribute("alt", "Product image");
        image.setAttribute("class", "prod-img");
        document.getElementById(products[i].id).appendChild(image);

        var heading = document.createElement("h2");
        var node = document.createTextNode(products[i].name);
        heading.appendChild(node);

        document.getElementById(products[i].id).appendChild(heading);

        var para = document.createElement("p");
        var node = document.createTextNode(products[i].description);
        para.appendChild(node);

        document.getElementById(products[i].id).appendChild(para);
    }
}

populateProduct(products);