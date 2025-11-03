// fix_names.js
// 사용법: node fix_names.js index.html
const fs = require('fs');

const file = process.argv[2] || 'index.html';
if (!fs.existsSync(file)) {
  console.error(`[ERR] 파일을 찾을 수 없습니다: ${file}`);
  process.exit(1);
}
const src = fs.readFileSync(file, 'utf8');
fs.writeFileSync(file + '.bak', src, 'utf8'); // 백업

let html = src;

// 1) 광역 nowrap 제거: `.content-text span { white-space: nowrap; ... }`
html = html.replace(
  /(\.content-text\s*span\s*\{\s*[^}]*white-space\s*:\s*nowrap;[^}]*\})/gi,
  `/* 제거됨: 광역 nowrap */`
);

// 1-1) 숫자/단위에만 no-wrap (없으면 style 끝에 추가)
function ensureStyleBlock(id, css) {
  if (html.includes(id)) return html;
  return html.replace(/<\/style>\s*$/im, m => `${css}\n${m}`) ||
         html.replace(/<\/head>/i, m => `<style id="${id.slice(1)}">\n${css}\n</style>\n${m}`);
}
const metricCSS = `
/* metric no-wrap 전용 */
.metric-row .metric-value,
.metric-row .metric-unit { white-space: nowrap; }
`;
if (!/\.metric-row\s+\.metric-value[^}]*white-space\s*:\s*nowrap/i.test(html)) {
  // style 블록이 하나도 없다면 head 안에 새로 추가
  if (!/<style[\s\S]*?>[\s\S]*?<\/style>/i.test(html)) {
    html = html.replace(/<\/head>/i, m => `<style id="metric-nowrap">${metricCSS}\n</style>\n${m}`);
  } else {
    html = ensureStyleBlock('#metric-nowrap', metricCSS);
  }
}

// 2) .nowrap 유틸 보장, .param-value는 white-space:normal
const extraCSS = `
/* 이름+접미어 묶음 유틸 */
.nowrap { white-space: nowrap; }
/* 모바일에서만 줄바꿈 */
.br-only-mobile { display:none; }
@media (max-width:480px){
  .br-only-mobile::after { content: "\\A"; white-space: pre; }
}
/* 이름 span이 광역 nowrap 상속받지 않도록 */
.param-value { white-space: normal; }
`;
if (!/\.nowrap\s*\{[^}]*white-space\s*:\s*nowrap/i.test(html)) {
  if (!/<style[\s\S]*?>[\s\S]*?<\/style>/i.test(html)) {
    html = html.replace(/<\/head>/i, m => `<style id="nowrap-utils">${extraCSS}\n</style>\n${m}`);
  } else {
    html = ensureStyleBlock('#nowrap-utils', extraCSS);
  }
}

// 3) {학생 이름}+접미어를 한 덩어리로 래핑
//   (<span id="studentNameOutput">...</span>)(님[은이의과께도만에게]?[,]?)
const nameSuffixRe = new RegExp(
  '(?<full>(<span[^>]*id=["\']studentNameOutput["\'][^>]*>)([\\s\\S]*?)(</span>))\\s*(?<suffix>님(?:은|이|의|과|께|도|만|에게)?(?:,)?)(?![^<]*?</span>\\s*</span>)',
  'g'
);
html = html.replace(nameSuffixRe, (_m, _full, open, inner, close, suffix) => {
  return `<span class="nowrap">${open}${inner}${close}${suffix}</span>`;
});

// 4) 이름 뒤에 들어간 <br> → 모바일전용 줄바꿈으로 치환
//    </span><br>  → </span><span class="br-only-mobile"></span>
html = html.replace(
  /(<span[^>]*id=["']studentNameOutput["'][^>]*>[\s\S]*?<\/span>)\s*<br\s*\/?>/gi,
  '$1<span class="br-only-mobile"></span>'
);

// 저장
fs.writeFileSync(file, html, 'utf8');
console.log(`[OK] 수정 완료. 백업: ${file}.bak`);

