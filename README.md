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

## Current Trip Data

현재 일정 데이터는 `index.html`에 직접 포함되어 있습니다.

직접 대조 완료된 예약/티켓:

- `Convent Square Lisbon` 예약번호 `41605443`
- `Fontsanta Hotel Thermal Spa` 예약번호 `P7128119`
- `Vueling VY3437` `2026-05-08` `LIS -> PMI` 예약번호 `KFZL6V`
- `Iberia Express I21652` `2026-05-12` `PMI -> MAD`
- `Luxury Catamaran` `2026-05-10 09:30 - 13:30`
  티켓번호 `SYS-T129013463`
  예약확인 `SYS-90344486`
  총 결제금액 `EUR 198.00`

카타마란 일정에는 아래 내용까지 반영되어 있습니다.

- 미팅 포인트 `La Lonja Marina Charter, Muelle de la lonja, s/n, 07012 Palma`
- 주차 옵션 2곳
- 전액 결제 완료 상태
- 인보이스 번호 `C-521076126`
- 준비물, 금연 규정, 여권 정보 제출 필요, 취소정책

## Handoff Notes

다른 에이전트가 이어서 작업할 때 기준으로 삼을 현재 상태입니다.

- 주요 일정/체크리스트/예약 데이터는 모두 `index.html`에 있습니다.
- 최근 작업은 `2026-05-10` 카타마란 예약 정보를 이메일/PDF 원문 기준으로 보강한 것입니다.
- 문서 체크리스트에는 카타마란 티켓 PDF 저장과 여권 정보 제출 항목이 추가되어 있습니다.
- 예약 체크리스트에는 카타마란 투어가 `완료` 상태 예약으로 추가되어 있습니다.
- GitHub Pages 배포는 `main` 브랜치 푸시로 이루어집니다.

아직 원문 대조가 끝나지 않은 항목:

- `KE921`
- `KE914`
- `Record Go` 렌터카 상세 메일 원문
- 호텔 세부 정책 전체

주의사항:

- Gmail 커넥터는 현재 프로필 조회는 되지만 메일 검색/읽기 권한이 부족합니다.
- Gmail 검색 시 `403 insufficientPermissions`가 발생했으므로 메일 원문 대조 작업 전 재인증이 필요할 수 있습니다.
- 렌터카 정보는 현재 코드상 `Record Go / 75/2026-25992 / Toyota C-HR`로 들어가 있지만 Gmail 원문과는 아직 직접 대조하지 못했습니다.

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
