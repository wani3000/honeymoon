# Honeymoon Planner

모바일 중심 신혼여행 플래너 단일 페이지 프로젝트입니다.

배포: [https://wani3000.github.io/honeymoon/](https://wani3000.github.io/honeymoon/)

## 기능

- 날짜별 일정표와 시간대별 이동/주의사항
- 위치 복사 버튼 + Google Maps 링크
- 체크리스트 진행률 및 `localStorage` 저장
- 스페인어/포르투갈어 여행 회화
- Google Static Maps API 기반 지도 미리보기(옵션)

## 실행

`index.html`을 브라우저에서 바로 열면 됩니다.

## 파일

- `index.html`: 실제 동작 코드(마크업/스타일/스크립트)
- `assets/route-overview.svg`: 경로 개요 이미지
- `config.public.js`: 배포용 API 키 파일(버전 관리 대상)
- `config.js`: 로컬 전용 API 키 파일(버전 관리 제외)
- `config.example.js`: 키 파일 예시
- `styles.css`, `app.js`: 보조/이전 분리 파일

## Google Static Maps 설정

### 1) Google Cloud에서 준비

1. 프로젝트 선택: <https://console.cloud.google.com/>
2. Static Maps API 활성화: <https://console.cloud.google.com/apis/library/maps-backend.googleapis.com>
3. Billing 연결: <https://console.cloud.google.com/billing>
4. API Key 생성: <https://console.cloud.google.com/apis/credentials>

### 2) 키 파일 전략

1. 배포용 키는 `config.public.js`에 설정
2. 로컬 테스트 키는 `config.js`에 설정
3. 로딩 우선순위는 `config.public.js` → `config.js`
4. 같은 전역 변수 `window.TRIP_MAPS_API_KEY`를 사용

예시:

```js
window.TRIP_MAPS_API_KEY = "YOUR_KEY";
```

### 3) Referrer 제한값(프로젝트 기준)

아래 값을 API Key의 `HTTP referrers (web sites)`에 등록하세요.

- `https://wani3000.github.io/*`
- `http://localhost/*`
- `http://127.0.0.1/*`

### 4) API 제한

API Key의 `API restrictions`는 `Static Maps API`만 허용하세요.

### 5) 점검 체크리스트

1. Billing 연결 완료
2. Static Maps API 활성화 완료
3. 키 값이 `config.public.js` 또는 `config.js`에 설정됨
4. Referrer 제한에 실제 접속 도메인이 포함됨
5. API 제한이 `Static Maps API`로 고정됨
6. 배포 페이지에서 지도 미리보기 카드 이미지가 표시됨
