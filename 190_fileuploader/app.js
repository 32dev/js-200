const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const UPLOAD_PATH = path.join(__dirname, 'uploads');

// 업로드 폴더 없으면 생성
if (!fs.existsSync(UPLOAD_PATH)) {
    fs.mkdirSync(UPLOAD_PATH, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_PATH),
    filename: (req, file, cb) =>
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

const app = express();
app.use(cors());

// 메인 페이지
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 파일 업로드
app.post('/upload', upload.single('file'), (req, res) => {
    console.log('요청 도착');
    if (!req.file) {
        console.log('파일 없음');
        return res.status(400).send('파일이 업로드되지 않았습니다.');
    }
    console.log('업로드 성공:', req.file);
    res.status(200).send('파일을 정상적으로 업로드했습니다.');
});


// 파일 리스트
app.get('/file_list', (req, res, next) => {
    fs.readdir(UPLOAD_PATH, (err, files) => {
        if (err) return next(err);
        res.status(200).json(files);
    });
});

// 에러 핸들러 (맨 마지막!)
app.use((err, req, res, next) => {
    console.error('서버 에러:', err);
    res.status(500).send('서버 오류: 파일 업로드에 실패했습니다.');
});

app.listen(3000, () => {
    console.log('서버 실행중 → http://localhost:3000');
});
