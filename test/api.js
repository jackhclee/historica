const { Selector } = require("testcafe")

fixture("API Testing")

test("API should return JSON object", async t => {
    let result = await t.request("http://localhost:3000/api/book")
    let data = await result.body
    await t.expect(result.body.msg).eql("hello")
} )