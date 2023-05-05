import { NOTIMP } from "dns";
import { countLetters, isPaired, treeToSentence, WordTree } from "../../src/part2/part2";

describe("Assignment 1 Part 2", () => {
    describe("countLetters", () => {
        it("1- counts letters", () => {
            expect(countLetters("aaabbbb")).toEqual({"a": 3, "b":4});
        });
        it("2- counts letters", () => {
            expect(countLetters("AaaBbbb")).toEqual({"a": 3, "b":4});
        });
        it("3- counts letters", () => {
            expect(countLetters("ABbbaab")).toEqual({"a": 3, "b":4});
        });
        it("4- counts letters", () => {
            expect(countLetters("I am robot")).toEqual({"i": 1, "a": 1, "m": 1, "r":1, "o":2, "b":1, "t":1});
        });
        it("5- counts letters", () => {
            expect(countLetters("abcABCaabbcc d")).toEqual({"a": 4, "b":4, "c": 4, "d": 1});
        });
    });

    describe("isPaired", () => {
        it("returns true for a string with paired parens", () => {
            expect(isPaired("([{}])")).toBe(true);
        });
        it("returns true for a string with paired parens", () => {
            expect(isPaired("This is ([some]) {text}.")).toBe(true);
        });
        it("returns true for a string with paired parens", () => {
            expect(isPaired("No parens, no problems.")).toBe(true);
        });
        it("returns true for a string with paired parens", () => {
            expect(isPaired("[](){}")).toBe(true);
        });

        it("returns false when the parens are not paired", () => {
            expect(isPaired("(]")).toBe(false);
            expect(isPaired("This is ]some[ }text{")).toBe(false);
            expect(isPaired("(")).toBe(false);
            expect(isPaired(")(")).toBe(false);
            expect(isPaired("())")).toBe(false);
        });
    });

    describe("treeToSentence", () => {
        it("Represents a tree as a sentence", () => {
            const t1: WordTree = {root:"hello", children:[{root: "world", children:[]}]}
            expect(treeToSentence(t1)).toBe("hello world");
        });

        it("Represents a tree as a sentence", () => {
            const t2: WordTree = {root:"hello", children:[{root: "there", children:[]}, {root:"!", children:[]}]}
            expect(treeToSentence(t2)).toBe("hello there !");
        });
        it("Represents a tree as a sentence", () => {
            const t3: WordTree = {root:"hello", children:[{root: "there", children:[{root:"!", children:[]}]}]}
            expect(treeToSentence(t3)).toBe("hello there !");
        });
        it("Represents a tree as a sentence", () => {
            const t4: WordTree = {root:"hello", children:[]}
            expect(treeToSentence(t4)).toBe("hello");
        });
        it("Represents a tree as a sentence", () => {
            const t5: WordTree = {root:"", children:[]}
            expect(treeToSentence(t5)).toBe("");
        });
    });
});

