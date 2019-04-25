const db = require('../data/dbConfig')

const Hobbits = require('./hobbitsModel')

describe('hobbits model', () => {
    describe('insert()', () => {
        beforeEach(async () => {
            await db('hobbits').truncate()
        })
        it('should insert the provided hobbits into the database', async () => { 
           await Hobbits.insert({ name: 'sam'}) 
           await Hobbits.insert({ name: 'gandalf'}) 

           const hobbits = await db('hobbits')
           expect(hobbits).toHaveLength(2)
        })
    })
})