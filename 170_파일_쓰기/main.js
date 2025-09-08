"use strict";

const fs = require('fs');
const path = require('path');

const makeFile = (filePath, callback) => {
    fs.writeFile(filePath, 'New file, New content', 'utf8', (err) => {
        if (err) {
            return callback(err);
        }
        console.log('파일이 생성됐습니다.');
        callback(null);
    });
};

const appendFile = (filePath, callback) => {
    fs.appendFile(filePath, '\nUpdate file', (err) => {
        if (err) {
            return callback(err);
        }
        console.log('파일 내용을 추가합니다.');
        callback(null);
    });
};

const printErrIfExist = (err) => {
    if (err) {
        console.error(err);
    }
};

const filePath = path.join(__dirname, 'js200', 'hello.txt');

fs.open(filePath, 'wx', (err, fd) => {
    if (err && err.code === 'EEXIST') {
        // 파일이 이미 있으면 내용 추가
        return appendFile(filePath, (err) => printErrIfExist(err));
    }
    if (err) {
        return printErrIfExist(err);
    }
    // 새 파일 생성
    return makeFile(filePath, (err) => printErrIfExist(err));
});
