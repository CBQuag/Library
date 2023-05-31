const Library = require('./Library')

describe('Vending machine', () => {

    let library;

    beforeEach((=> {
        library = new Library();
    }))
    
    test('should be able to list inventory', () => { 
        expect(library.showInventory)

     })

})