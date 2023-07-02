const { Selector } = require("testcafe")

fixture('Getting Started').page("http://localhost:3000/about")

test("Page About should have country names", async t => {
    await t.expect(Selector("#china").innerText).eql("CHINA")
} )