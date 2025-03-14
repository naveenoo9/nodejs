const { ifError } = require('assert');
const { error } = require('console');
const fs = require('fs'); // Import statement for file systems core module
const path = require('path')

function readFileSynchornously(fileName)   {
    try {
        const data = fs.readFileSync(fileName)
        console.info('Data read from file:\t', data.toString())
    } catch (error) {
        console.error('Error reading from file:\t', error)
    }
}

async function readFileAsynchronously(fileName)   {
    return fs.readFile(fileName, (error, data) => {
        if(error)
            console.error('Error reading from file:\t', error)
        else if(data)
        {
            console.info('Data read from file:\t', data.toString())
            return data.toString();
        }
    })
}

async function writeToFileAsynchronously(file, data)  {
    fs.writeFile(file, data, (error) => {
        if(error)
            console.error('Error writing to file:\t', error)
        else 
            console.info('Wrote to file successfully!!!')
    })
}

async function prependHeaderAsynchronously_V1(file, header)  {
    fs.readFile(file, (error, data) => {
        if(error)
            console.error('Error reading from file:\t', error);
        else {
            data = header + '\n' + data;
            // fs.writeFile(file, (error) => { 
            //     if(error)
            //         console.error('Error writing to file:\t', error);
            //     else
            //         console.info("Wrote to file Successfully!!!")
            // })
            writeToFileAsynchronously(file, data);
        }
    })
}

function openAndWriteToFileAsynchornously(file, position, content)  {
    fs.open(file, 'a', (error, file) => {
        if(error)
            console.error('Error opening file: ', error);
        else {
            // fs.write(file,content, 0, content.length, 0,)
            // function write<any>(fd: number, buffer: any, offset: number | undefined | null, length: number | undefined | null, position: number | undefined | null, callback: (err: NodeJS.ErrnoException | null, written: number, buffer: any) => void): void (+6 overloads)
            fs.write(file,content, 0, content.length, 0, error => {
                if(error)
                    console.error('Error writing to file: ', error);
                else
                    console.info('Wrote to file Successfully!!! ')
            })
            fs.close(file, error => {
                if(error)
                    console.error('Error closing file: ', error);
            })
        }
    })
}

/**
 * Problem Statement: Read the contents from 3 Files and write it to 4th file: no order -- Callback Hell
 * 1. Read Sync from 3 Files and append to 4th File
 * 2. Read from each and append to file4
 *      - Read from file1 and append data to file4
 *      - Read from file2 and append data to file4
 *      - Read from file3 and append data to file4
 */

const file = path.join(__dirname, 'files/file.txt')
// readFileSynchornously(file)
// readFileAsynchronously(file)
// prependHeaderAsynchronously_V1(file, 'Header')
openAndWriteToFileAsynchornously(file, 0, 'Header2')