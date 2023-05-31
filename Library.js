
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
    issueBook(name) {
        let bookToIssue = this.inventory.find(book => book.name == name)
        if (!bookToIssue)
            return 'No such book'
        this.inventory.splice(this.inventory.indexOf(bookToIssue), 1)
        return bookToIssue;
    }
}

module.exports=Library