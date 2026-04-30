# Honeymoon Planner

모바일 중심 신혼여행 플래너 단일 페이지 프로젝트입니다.

배포: [https://wani3000.github.io/honeymoon/](https://wani3000.github.io/honeymoon/)

최신 커밋 기준은 `git log -1 --oneline`으로 확인하세요. GitHub Pages 배포는 `main` 브랜치 푸시 후 자동 반영됩니다.

## 기능

- 날짜별 일정표와 시간대별 이동/주의사항
- 위치 복사 버튼 + Google Maps 링크
- 체크리스트 진행률 및 `localStorage` 저장
- 스페인어/포르투갈어 여행 회화
- Google Static Maps API 기반 지도 미리보기(옵션)
- 주변 맛집 탭 50곳 후보 및 Google Places API 실시간 연동 준비

## 실행

`index.html`을 브라우저에서 바로 열면 됩니다.

## Current Trip Data

현재 일정 데이터는 `index.html`에 직접 포함되어 있습니다.

직접 대조 완료된 예약/티켓:

- `Convent Square Lisbon` 예약번호 `41605443`
- `Fontsanta Hotel Thermal Spa` 예약번호 `P7128119`
- `KE921` `2026-05-03` `ICN T2 -> LIS T1` 예약번호 `EH6OZW`
  좌석 `36H / 36J`
  티켓번호 `1802353367488 / 1802353263946`
- `Vueling VY3437` `2026-05-08` `LIS -> PMI` 예약번호 `KFZL6V`
- `Iberia Express I21652` `2026-05-12` `PMI -> MAD`
- `KE914` `2026-05-12` `MAD T1 -> ICN T2`
  예약번호 `EM8HFD / EM7D8F`
  좌석 `52H / 52J`
  티켓번호 `1802353365545 / 1802353263946`
- `Record Go` 렌터카 예약번호 `75/2026-25992`
  `Toyota C-HR or similar / CDAH / Just go / Total Comfort Coverage / Full-Full`
  온라인 결제 `143.79 EUR`
- `Noobai Café` `2026-05-04 19:30 - 21:30`
  `Miradouro de Santa Catarina (Adamastor), Lisboa`
  예약자 `Chulwan Park / oxaz1234@gmail.com / 821065586450`
- `Luxury Catamaran` `2026-05-10 09:30 - 13:30`
  티켓번호 `SYS-T129013463`
  예약확인 `SYS-90344486`
  운영사 `SR Yachting GmbH`
  총 결제금액 `EUR 198.00`
- `BAHR & Terrace` `2026-05-07` 저녁 예약
  예약번호 `5S9TP63HYP8R`
  주소 `Praça Luís de Camões, Lisboa, 1200-243, Portugal`

카타마란 일정에는 아래 내용까지 반영되어 있습니다.

- 미팅 포인트 `La Lonja Marina Charter, Muelle de la lonja, s/n, 07012 Palma`
- 주차 옵션 2곳
- 전액 결제 완료 상태
- 인보이스 번호 `C-521076126`
- 준비물, 금연 규정, 여권 정보 제출 필요, 취소정책

## Handoff Notes

다른 에이전트가 이어서 작업할 때 기준으로 삼을 현재 상태입니다.

- 주요 일정/체크리스트/예약 데이터는 모두 `index.html`에 있습니다.
- 최근 작업은 `Record Go` 픽업/반납 칸에 예약번호, 보험, 결제금액, 연료정책, 영수증 규칙까지 일정표에 상세 반영한 것입니다.
- `2026-05-10` 카타마란 예약 정보도 이메일/PDF 기준으로 반영된 상태입니다.
- `2026-05-06` 일정은 현재 `신트라 중심`이 아니라 `카스카이스 → 호카곶` 흐름으로 조정되어 있습니다.
- `2026-05-04` 저녁은 `Noobai Café` 예약 확정 정보가 일정표에 반영되어 있습니다.
- `2026-05-07` 저녁은 `BAHR & Terrace` 예약 확정 정보가 일정표에 반영되어 있습니다.
- 문서 체크리스트에는 카타마란 티켓 PDF 저장과 여권 정보 제출 항목이 추가되어 있습니다.
- 예약 체크리스트에는 카타마란 투어가 `완료` 상태 예약으로 추가되어 있습니다.
- GitHub Pages 배포는 `main` 브랜치 푸시로 이루어집니다.

아직 원문 대조가 더 남을 수 있는 항목:

- 일부 자유식 식당/현장 방문지
- 추가 관광지의 더 세밀한 운영시간 변경 여부

주의사항:

- Gmail 커넥터는 현재 프로필 조회는 되지만 메일 검색/읽기 권한이 부족합니다.
- Gmail 검색 시 `403 insufficientPermissions`가 발생했으므로 메일 원문 대조 작업 전 재인증이 필요할 수 있습니다.
- 렌터카 정보는 현재 사용자 제공 예약 데이터 기준으로 일정표에 반영되어 있습니다. 다만 Record Go 원본 메일/바우처와의 직접 대조 이력까지 확보된 것은 아닐 수 있으니, 필요하면 원문 재검증을 권장합니다.

## 파일

- `index.html`: 실제 동작 코드(마크업/스타일/스크립트)
- `assets/route-overview.svg`: 경로 개요 이미지
- `config.public.js`: 현재 배포용 Google Static Maps API 키 파일
- `config.js`: 로컬 전용 API 키 파일(버전 관리 제외)
- `config.example.js`: 키 파일 예시
- `api/google-place-details.js`: Google Places API 상세정보 서버리스 프록시
- `api/google-place-search.js`: Google Places `placeId` 검색용 서버리스 프록시
- `GOOGLE_PLACES_API_PLAN.md`: Places API 적용 계획과 남은 작업
- `styles.css`, `app.js`: 보조/이전 분리 파일

## 다음 에이전트 시작 순서

1. `README.md` 읽기
2. `index.html`에서 실제 데이터와 UI 구조 확인
3. `HANDOFF_FOR_NEXT_AGENT.md`로 최근 의사결정과 사용자 선호 확인
4. 지도 작업이면 `GOOGLE_MAPS_INTEGRATION_GUIDE.md` 확인

## 배포 메모

- 저장소: [https://github.com/wani3000/honeymoon](https://github.com/wani3000/honeymoon)
- 배포 방식: `main` 브랜치 푸시 후 GitHub Pages 자동 배포
- 로컬 확인: `index.html` 직접 열기 또는 간단한 정적 서버 사용

## Google Static Maps 설정

현재 저장소는 `config.public.js`를 통해 배포용 Google Maps API 키를 로드합니다.

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
3. 키 값이 `config.public.js` 또는 로컬 `config.js`에 설정됨
4. Referrer 제한에 실제 접속 도메인이 포함됨
5. API 제한이 `Static Maps API`로 고정됨
6. 배포 페이지에서 지도 미리보기 카드 이미지가 표시됨

### 6) 현재 지도/일정 기준 메모

- `5/6` 개요 지도와 일정표는 `Rossio Station Lisbon → Cabo da Roca → Cascais → Lisbon` 경로를 사용합니다.
- `5/10` 마요르카 지도는 카타마란 집결지와 팔마 해안 동선을 포함합니다.

## Google Places API 준비 상태

주변 맛집 탭은 현재 정적 데이터 50곳을 표시합니다.

실시간 Google 평점/주소/영업상태를 붙이려면 GitHub Pages와 별도로 서버리스 API가 필요합니다. 이 저장소에는 Vercel 등에서 실행 가능한 `/api/google-place-details.js`, `/api/google-place-search.js`가 준비되어 있습니다.

필요 환경변수:

```bash
GOOGLE_PLACES_API_KEY=...
```

프론트 설정:

```js
window.TRIP_PLACES_API_BASE = "https://YOUR-VERCEL-PROJECT.vercel.app";
```

상세 절차는 `GOOGLE_PLACES_API_PLAN.md`를 기준으로 진행하세요.
