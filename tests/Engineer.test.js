const Engineer = require("../assets/lib/engineer")

describe("Engineer", () => {

    it("should accept an github argument", () => {
        let exampleGithub = "JaneGit"

        const result = new Engineer("Jane", "123", "jane@fakemail.com", exampleGithub)
        expect(result.github).toEqual(exampleGithub);
    });

    it("getGithub should return Github", () => {

        exampleGithub = "JaneGit"

        const result = new Engineer("Jane", "123", "jane@fakemail.com", exampleGithub)
        //insert method
        expect(result.getGithub()).toEqual(exampleGithub);
    });
});