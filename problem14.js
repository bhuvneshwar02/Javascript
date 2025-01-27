// Write a JavaScript function analyzeInventory(section1, section2) that takes two nested arrays of items (section1 and section2) as input and performs the following tasks:

// Combine Sections: Combine the inventories of both sections into a single inventory list.
// Flatten Inventory: Flatten the combined inventory to get a single-level array of all items.
// Find Index: Find the index of a specific item (e.g., 'widget') in the flattened inventory.
// Check Availability: Check if a specific item (e.g., 'gadget') is included in the flattened inventory.


function analyzeInventory (section1,section2) {
    //combining
    const combinedInventory= section1.concat(section2);
    console.log(combinedInventory);

    // flattening
    const flattenedInventory= combinedInventory.flat();
    console.log(flattenedInventory);

    // find index
    const indexOfWidget = flattenedInventory.indexOf('widget');
    console.log(indexOfWidget);

    //check availaibility
    const includesGadget = flattenedInventory.includes('gadget');
    console.log(includesGadget);

}
const section1=[['hammer','nail'],['screwdriver','widget']];
const section2=[['gadget','saw'], ['drill','bolt']];
console.log(analyzeInventory(section1,section2));