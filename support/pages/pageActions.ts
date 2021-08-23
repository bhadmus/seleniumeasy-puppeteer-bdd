import { Browser, launch, Page} from 'puppeteer';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

class PageActions {
    private browser: Browser;
    private page: Page;

    constructor() {
        this.browser = null;
        this.page = null;
    }

    public async init() {
        try {
            this.browser = await launch({
                headless: false,
                defaultViewport: null,
                args: ['--start-maximized'] // '–disable-setuid-sandbox','--disable-notifications','--no-sandbox',
            });
            this.page = await this.browser.newPage();

        } catch (e)  {
            throw new Error(`Cannot Launch Chromium Instance`);
        }
    }

    public async open(url: string){
        try {
            await this.page.goto(url);
        } catch (e) {
            throw new Error(`WebPage Not Found`);
        }

    }

    public async clickElement(element: string){
        try {
            await this.page.waitForSelector(element);
            return await this.page.click(element);
        } catch (e){
            throw new Error(`Element: ${element} is not clickable or visible`);

        }

    }

    public async sendElementText(element: string, text: string){
        try {
            return await this.page.type(element, text);
        } catch (Exception){
            throw new Error(`The selector: ${element} is not available to insert ${text}`);
        }


    }

    public async getElementText(selector: string, text: string){
        try{
            await this.page.waitForSelector(selector);
            const text_checker = await this.page.$eval(selector, element => element.textContent);
            expect(text_checker).to.be.a('string', text);
        }catch (e) {
            throw new Error(`Text is not present or Element ${selector} is not visible`)
        }
    }

    public async close(){
        try {
            return await this.browser.close();
        }catch (e) {
            throw new Error(`Session not terminated`)
        }
    }

}

export { PageActions };