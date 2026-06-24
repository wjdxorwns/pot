/**
 * 정적 빌드 스크립트 — GitHub Pages 배포용
 * views/index.pug + 포트폴리오 데이터를 정적 HTML로 렌더링해 docs/ 에 출력한다.
 *   - docs/index.html
 *   - docs/stylesheets/style.css
 *   - docs/.nojekyll  (Jekyll 처리 비활성화)
 */
var fs = require('fs');
var path = require('path');
var pug = require('pug');

var portfolio = require('./routes/index').portfolio;

var outDir = path.join(__dirname, 'docs');
fs.mkdirSync(path.join(outDir, 'stylesheets'), { recursive: true });

var html = pug.renderFile(path.join(__dirname, 'views', 'index.pug'), {
  title: '정택준 · Portfolio',
  p: portfolio
});

fs.writeFileSync(path.join(outDir, 'index.html'), html);
fs.copyFileSync(
  path.join(__dirname, 'public', 'stylesheets', 'style.css'),
  path.join(outDir, 'stylesheets', 'style.css')
);
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

console.log('✓ Build complete → docs/ (index.html, stylesheets/style.css, .nojekyll)');
