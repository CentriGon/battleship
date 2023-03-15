const code = require('./maincode')

const ship1 = new code.shipFactory(5, [10, 15, 20, 25, 30]);
const ship2 = new code.shipFactory(2, [10, 50])

test("Testing object creation", () => {
    expect(ship1.getLength()).toBe(5);
})

test("testing coords", () => {
    expect(new code.shipFactory(5, [10, 20, 30, 40]).getCoordinates()).toStrictEqual([10, 20, 30, 40])
})

test("testing coords", () => {
    expect(new code.shipFactory(5, [10, 20, 30, 50]).getCoordinates()).toStrictEqual([10, 20, 30, 50])
})

test("testing coords before change", () => {
    expect(ship1.getCoordinates()).toStrictEqual([10,15, 20, 25, 30])
})

test("changing coords", () => {
    expect(ship1.setCoordinates([10, 20, 25, 30])).toBe();
})

test("length change ", () => {
    expect(ship1.getLength()).toBe(4)
})

test("length check ship2", () => {
    expect(ship2.getLength()).toBe(2)
})

test("testing coords after change", () => {
    expect(ship1.getCoordinates()).toStrictEqual([10, 20, 25, 30])
})

test("testing different ship coords", () => {
    expect(ship2.getCoordinates()).toStrictEqual([10, 50])
})