import puppeteer from 'puppeteer';
import booleanizationOptions from './serializeOptions.js';

const defaultOptions = {
    // displayHeaderFooter: true,
    // printBackground: true,
    // scale: 1,
    // deviceScaleFactor: 1.4,
    // landscape: false,
    // format: 'a4',
    // width: 815, height: 1045
};

export default (async (options, url) => {
    url = url ? url : 'https://www.google.com/';
    options = booleanizationOptions(options);

    const mediaType = options.mediaType;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // if (!options.hasOwnProperty('format')) {
    //     await page.setViewport({width: 815, height: 1045, deviceScaleFactor: 2});
    // } else {
    //     console.log(1111);
    //     await page.setViewport({width: 794, height: 1122, deviceScaleFactor: 2});
    // }

    await page.goto(url);

    if (mediaType) {
        await page.emulateMediaType(mediaType ? mediaType : 'print');
    }

    const pdf = await page.pdf({
        ...defaultOptions,
        ...options
    });
    await browser.close();
    return pdf;
});
