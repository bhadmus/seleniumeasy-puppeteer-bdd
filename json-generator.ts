import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
const jsonReports = process.cwd() + '/output/puppeteer/json';
/**
 * @param  {string} dir
 */
function createDirectory(dir: string) {
    if (!fs.existsSync(dir)) {
        mkdirp.sync(dir);
    }
}
createDirectory(jsonReports);