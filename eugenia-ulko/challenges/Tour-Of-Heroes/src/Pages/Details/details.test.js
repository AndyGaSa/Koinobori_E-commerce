const DetailsPage = require('./details');


/**
 * Given DelailsPage
 * When an object is created
 * then should have an id property
 * then should have a name property
 * 
 */
let page;
describe('', () => {
    let properties;
    beforeEach(() => {
        page = new DetailsPage(11, [{id: 11, name: "Dr. Nice"}]);
        properties = Object.keys(page);
    });
}

test("Then should have id property", () => {
    expect(properties.some('id')).toBe(true);
})

test("Then should have name property", () => {
    expect(properties.some('name')).toBe(true);
});
