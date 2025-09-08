"use strict";

const fs = require('fs');
const path = require('path');

const makeFile = (filePath, callback) => {
    fs.writeFile(filePath, 'New file, New content', 'utf8', (err) => {
        if (err) return callback(err);
        console.log('파일이 생성됐습니다.');
        callback(null);
    });
};

const appendFile = (filePath, callback) => {
    fs.appendFile(filePath, '\nUpdate file', (err) => {
        if (err) return callback(err);
        console.log('파일 내용을 추가합니다.');
        callback(null);
    });
};

const printErrIfExist = (err) => {
    if (err) console.error(err);
};

const filePath = path.join(__dirname, 'js200', 'hello.txt');

// 파일 존재 여부 확인
fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        // 파일 없음 → 새 파일 생성
        return makeFile(filePath, printErrIfExist);
    }
    // 파일 있음 → 내용 추가
    return appendFile(filePath, printErrIfExist);
});
