import * as Exports from './../';


describe("Package exports", () => {
    test("Default exports the client", () => {
        expect(Exports.default).toBe(Exports.S3Client);
    })
})