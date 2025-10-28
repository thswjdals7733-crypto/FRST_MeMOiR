# Memoir - 시대인재 회고록

시대인재 학생들의 한 해를 회고하는 개인화된 웹사이트입니다.

## 🚀 자동 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 배포됩니다.

- **배포 URL**: https://[username].github.io/Memoir
- **자동 배포**: `main` 브랜치에 푸시할 때마다 자동으로 웹사이트가 업데이트됩니다.

## 📝 사용법

1. 코드를 수정합니다
2. Git에 커밋하고 푸시합니다:
   ```bash
   git add .
   git commit -m "업데이트 내용"
   git push origin main
   ```
3. 몇 분 후 웹사이트가 자동으로 업데이트됩니다!

## 🛠️ 로컬에서 테스트

브라우저에서 `index.html` 파일을 직접 열어서 확인할 수 있습니다.

## 📁 파일 구조

- `index.html` - 메인 웹페이지
- `*.png`, `*.jpg` - 이미지 파일들
- `.github/workflows/deploy.yml` - 자동 배포 설정
