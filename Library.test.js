const Library = require('./Library')

describe('Vending machine', () => {

    let library;

    let books=[{name:'Underground', author: 'Haruki Murakami'}]

    beforeEach(()=> {
        library = new Library();
    })
    
    test('should be able to list inventory', () => { 
        expect(library.showInventory()).toEqual([]);

    })
    
    test('should be able to add books', () => { 
        library.addBooks(books)
        expect(library.showInventory()).toEqual(books)
    })
    
    test('should be able to issue out books', () => { 
        library.addBooks(books)
        library.issueBook('Underground');
        expect(library.showInventory()).toEqual([])
     })

})