// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    let menuItems = document.getElementById("menu");
   
    for (let category in menu){
        let catElement=document.createElement("h2");
        catElement.textContent = category;

        menuItems.appendChild(catElement);

        let items = document.createElement("ul")

        menuItems.appendChild(items);

        menu[category].forEach(item => {
            let itemList= document.createElement("li")
            itemList.textContent=item;
            itemList.addEventListener("click", function() {
                addToOrder(`${item}`); /* calls addToOrder() when clicking on item
 */
            });
            items.appendChild(itemList)
            
        });

    }
}

displayMenuItems(menu)

let totalPrice = 0; /* set total price @ zero...global variable set outside of function
 */
// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    let itemList=document.getElementById("order-items");

    // Create a list item for the order
    let orderList = document.createElement("li");

    // Set the text content of the list item to the item name
   orderList.textContent=itemName

    // Append the list item to the order items list
    itemList.appendChild(orderList)

    // Calculate and update the total price
    let itemPrice= 60;
    totalPrice += itemPrice;

    
    // Update the text content of the order total element with the new total
    document.getElementById("order-total").textContent = `Total: R${totalPrice}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu)  
}

// Start the menu system by calling the init function
initMenuSystem(menu);
