import * as fs from 'fs';

export const getAllFiles = function (dirPath: string, arrayOfFiles: string[] = []) {
    const files = fs.readdirSync(dirPath)

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            let filePath = dirPath + "/" + file
            arrayOfFiles.push(filePath)
        }
    })

    return arrayOfFiles
}

export const getAllFilesFilter = function (dirPath: string, suffix: string, arrayOfFiles: string[] = []) {
    arrayOfFiles = getAllFiles(dirPath, arrayOfFiles).filter(file => file.endsWith(suffix))
    return arrayOfFiles
}
