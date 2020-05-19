const path = require("path");
const fs = require("fs").promises;

async function swap(folderOne, folderTwo) {
    const directoryOne = path.join(__dirname, folderOne);
    const directoryTwo = path.join(__dirname, folderTwo);
    const directorySwap = path.join(__dirname, 'swap-folder');

    await fs.mkdir(directorySwap);
    await copyFile(directoryOne, directorySwap);
    await copyFile(directoryTwo, directoryOne);
    await copyFile(directorySwap, directoryTwo);
    await fs.rmdir(directorySwap)

}

async function copyFile (directoryOne, directoryTwo){
    const files = await fs.readdir(directoryOne);
    for (const file of files) {
        await fs.rename(
            path.join(directoryOne, file),
            path.join(directoryTwo, file),
        )
    }
}

swap("1800", "2000");
