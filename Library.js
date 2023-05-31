
class Library{
    constructor() {
        this.inventory = [];
    }
    showInventory(){
        return this.inventory;
    }
    addBooks(books) {
        this.inventory.push(...books)
    }
}

module.exports=Library