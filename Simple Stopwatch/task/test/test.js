import path from 'path';
import {correct, StageTest, wrong} from 'hs-test-web';

const pagePath = path.join(import.meta.url, '../../src/index.html');

class Test extends StageTest {

    page = this.getPage(pagePath)

    tests = [this.page.execute(() => {
        // test #1
        // HELPERS-->
        // method to check if element with id exists
        this.elementExists = (id, nodeNames) => {
            const element = document.body.querySelector(id);
            if (!element) return true;
            else return (nodeNames && !nodeNames.includes(element.nodeName.toLowerCase()));
        };

        // method to check if element with id has right text
        this.elementHasText = (id, correctText) => {
            const element = document.body.querySelector(id);
            if (!element) return true;

            if (correctText) {
                return (element.innerText !== correctText);
            }

            return !element.innerText || element.innerText.trim().length === 0;
        };

        // check if helpers still attached
        this.checkHelpers = () => {
            return true;
        }

        // CONSTANTS-->
        const theElement = "The element with the selector of";
        // <--CONSTANTS

        // MESSAGES-->
        this.missingIdMsg = (id) => {
            return `${theElement} "${id}" is missing in the body of the HTML document.`;
        };
        this.wrongTagMsg = (id, tag, tagAlt) => {
            if (tagAlt) return `${theElement} "${id}" should be a/an ${tag} or ${tagAlt} tag.`;
            else return `${theElement} "${id}" should be a/an ${tag} tag.`;
        };
        this.wrongTextMsg = (id, text) => {
            return `${theElement} "${id}" should have the text: "${text}".`;
        };
        // <--MESSAGES
        return correct();

    }), this.page.execute(() => {
        // test #2
        // STAGE1 TAGS

        // check if h1 exists
        const h1 = "h1";
        if (this.elementExists(h1)) return wrong(this.missingIdMsg(h1));

        // check if correct text
        const h1Text = "Simple Stopwatch";
        if (this.elementHasText(h1, h1Text)) return wrong(this.wrongTextMsg(h1, h1Text));

        // check #timer exists
        const timer = "#timer";
        if (this.elementExists(timer)) return wrong(this.missingIdMsg(timer));

        // check if its p tag
        if (this.elementExists(timer, ["p"])) return wrong(this.wrongTagMsg(timer, "p"));

        // check if it has text
        const timerText = "00:00:00";
        if (this.elementHasText(timer, timerText)) return wrong(this.wrongTextMsg(timer, timerText));

        // check if #start exists
        const start = "#start";
        if (this.elementExists(start)) return wrong(this.missingIdMsg(start));

        // check if its button
        if (this.elementExists(start, ["button"])) return wrong(this.wrongTagMsg(start, "button"));

        // check if it has text
        const startText = "Start";
        if (this.elementHasText(start, startText))
            return wrong(this.wrongTextMsg(start, startText));

        // check if #stop exists
        const stop = "#stop";
        if (this.elementExists(stop)) return wrong(this.missingIdMsg(stop));

        // check if its button
        if (this.elementExists(stop, ["button"])) return wrong(this.wrongTagMsg(stop, "button"));

        // check if it has text
        const stopText = "Stop";
        if (this.elementHasText(stop, stopText))
            return wrong(this.wrongTextMsg(stop, stopText));

        // check if #reset exists
        const reset = "#reset";
        if (this.elementExists(reset)) return wrong(this.missingIdMsg(reset));

        // check if its button
        if (this.elementExists(reset, ["button"])) return wrong(this.wrongTagMsg(reset, "button"));

        // check if it has text
        const resetText = "Reset";
        if (this.elementHasText(reset, resetText))
            return wrong(this.wrongTextMsg(reset, resetText));

        // check if #lap exists
        const lap = "#lap";
        if (this.elementExists(lap)) return wrong(this.missingIdMsg(lap));

        // check if its button
        if (this.elementExists(lap, ["button"])) return wrong(this.wrongTagMsg(lap, "button"));

        // check if it has text
        const lapText = "Lap";
        if (this.elementHasText(lap, lapText))
            return wrong(this.wrongTextMsg(lap, lapText));

        return correct();
    })
    ]

}

it("Test stage", async () => {
    await new Test().runTests()
}).timeout(30000);