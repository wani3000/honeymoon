# Google Maps Integration Guide

이 문서는 다른 PC 에이전트가 이 프로젝트의 Google Maps 연동을 이어서 작업할 때 참고할 수 있는 최신 가이드입니다.

## 1. 현재 적용 상태

현재 배포 기준 실제 동작 코드는 아래 파일이 중심입니다.

- `/Users/chulwan/Documents/GitHub/europe/index.html`
- `/Users/chulwan/Documents/GitHub/europe/api/google-place-details.js`
- `/Users/chulwan/Documents/GitHub/europe/api/google-place-search.js`

현재 구조에서는 다음이 이미 반영되어 있습니다.

- 개요 탭의 전체 경로 지도
- 개요 탭의 주요 동선 지도 미리보기 카드
- 일정표 카드별 Static Maps 미리보기
- 일정표 카드별 `구글맵 열기` 버튼
- 위치 복사 버튼
- 주변 맛집 탭의 Google Places API 실시간 데이터 연동 준비

즉, Google Maps는 이미 **외부 링크 수준이 아니라 Static Maps까지 연결된 상태**입니다.
주변 맛집 탭은 `placeId`와 서버 API base가 들어오면 Google Places API의 최신 평점/주소/영업상태를 선택적으로 표시할 수 있습니다.

## 2. 실제 키 로딩 방식

현재 프로젝트는 아래 순서로 API 키를 읽습니다.

1. `config.public.js`
2. `config.js`

사용하는 전역 변수는 아래 하나입니다.

```js
window.TRIP_MAPS_API_KEY
```

주변 맛집 실시간 Places API 연동에 쓰는 전역 변수는 아래입니다.

```js
window.TRIP_PLACES_API_BASE
```

예시:

```js
window.TRIP_PLACES_API_BASE = "https://YOUR-VERCEL-PROJECT.vercel.app";
```

현재 저장소 상태:

- `/Users/chulwan/Documents/GitHub/europe/config.public.js`
- `/Users/chulwan/Documents/GitHub/europe/config.js`
- `/Users/chulwan/Documents/GitHub/europe/config.example.js`
- `/Users/chulwan/Documents/GitHub/europe/GOOGLE_PLACES_API_PLAN.md`

주의:

- `config.public.js`는 현재 배포용 키를 로드합니다.
- `config.js`는 로컬 전용 파일입니다.
- 필요하면 Google Cloud Console에서 referrer/API 제한을 먼저 점검하세요.
- Places API 서버 키는 브라우저에 노출하지 말고 서버 환경변수 `GOOGLE_PLACES_API_KEY`로만 관리하세요.

## 3. 현재 지도 렌더링 진입점

`index.html` 안에서 관련 핵심 함수는 아래입니다.

- `loadTripConfig()`
- `buildStaticMapUrl(card, apiKey)`
- `buildRouteOverviewStaticMapUrl(apiKey)`
- `renderRouteOverviewMap()`
- `buildScheduleItemMapHref(item, prevItem)`
- `buildScheduleItemStaticMapUrl(item, prevItem, apiKey)`
- `renderMapPreviews()`
- `renderSchedule()`
- `renderFoodGuide()`
- `hydrateLiveFoodPlaces(places, regionId, categoryId)`
- `getCachedLivePlace(place)`

이 함수들이 모두 `index.html` 안 스크립트에 있습니다.

## 4. 데이터 구조

### 4-1. 일정 데이터

일정 데이터는 `const days = [...]` 에 있습니다.

각 item은 현재 대체로 아래 필드를 가집니다.

```js
{
  time: "09:30",
  type: "sight",
  title: "Luxury Catamaran 출발",
  summary: "...",
  move: "...",
  location: "...",
  details: [...],
  warning: "...",
  tip: "...",
  map: "https://maps.google.com/...",
  reservation: { label: "...", href: "..." },
  alternative: { label: "...", href: "..." },
  mustVisitNote: "..."
}
```

주의할 점:

- 예전 문서에서는 `reserve`라고 적었지만 최신 원격 코드 일부는 `reservation` 필드도 사용합니다.
- 현재 코드에는 `reserve`와 `reservation`이 혼재할 수 있으니 작업 전에 한 번 정규화하는 것이 좋습니다.

### 4-2. 개요용 지도 카드 데이터

날짜 요약용 지도 미리보기는 `staticMapCards` 배열에 들어 있습니다.

이 배열은 대략 아래 정보를 가집니다.

- 제목
- 설명 문구
- Google Maps 이동 링크
- Static Maps용 `path`
- `markers`

즉, 일정 카드 미리보기와 개요 탭 지도 카드는 서로 다른 레벨의 데이터 구조를 사용합니다.

### 4-3. 주변 맛집 데이터

주변 맛집 탭은 `foodPlaces` 배열을 사용합니다.

현재 정적 데이터 필드는 아래와 같습니다.

```js
{
  region: "lisbon-home",
  category: "cafe",
  name: "Nicolau Lisboa",
  address: "Rua de São Nicolau 17, 1100-547 Lisboa, Portugal",
  googleRating: "4.3",
  tripadvisorRating: "4.1",
  distance: "Convent Square에서 도보 약 5분",
  description: "...",
  signature: "...",
  review: "...",
  href: "https://www.google.com/maps/search/?api=1&query=..."
}
```

Google Places API 연동 후에는 아래 필드를 추가하면 됩니다.

```js
placeId: "ChIJ..."
```

`placeId`가 있는 항목만 `/api/google-place-details`를 통해 실시간 Google 데이터를 가져옵니다.
API base가 없거나 호출에 실패하면 기존 정적 데이터로 표시됩니다.

## 5. 현재 포함된 주요 지도 연동 내용

최신 원격 기준으로 아래 내용이 이미 반영되어 있습니다.

- 리스본 / 마요르카 / 마드리드 전체 경로 개요
- 5/6 리스본 출발 카스카이스 + 호카곶 동선
- 마요르카 북서부 + 카타마란 동선
- Record Go 픽업/반납 위치와 마요르카 공항 동선
- 일정 카드별 이전 위치 → 현재 위치 기준 Static Maps 경로 생성
- 카타마란 미팅 포인트
- 주차장 대체 링크
- 숙소별 지도 버튼

특히 `2026-05-10` 카타마란 예약이 강하게 반영되어 있으므로, 해당 날짜 수정 시 지도 데이터도 같이 검토해야 합니다.

## 6. 다른 에이전트가 작업할 때 추천 순서

1. `index.html`에서 `loadTripConfig()`부터 읽기
2. `staticMapCards`와 `days` 내부의 지도 관련 필드 확인
3. `renderRouteOverviewMap()`과 `renderMapPreviews()` 확인
4. `renderSchedule()` 안의 일정 카드별 지도 미리보기 로직 확인
5. 새 지도 필드가 필요하면 `days` 또는 `staticMapCards` 중 어디에 넣을지 먼저 결정

## 7. 수정 시 주의사항

현재 사용자 선호는 아래 쪽입니다.

- 일정표 가독성 우선
- 지도는 보조 정보
- 흰 배경 + 얇은 디바이더 선 스타일
- 텍스트가 지도보다 더 중요

따라서 지도 작업 시 아래를 주의하세요.

- 일정 카드 높이를 과하게 키우지 않기
- 지도 이미지가 텍스트보다 먼저 시선을 과하게 가져가지 않기
- 모바일에서 이미지가 길어져 스크롤 피로를 늘리지 않기
- 지도 로딩 실패 시 대체 UI 유지

## 8. 확인해야 할 보안/운영 포인트

현재 원격 저장소는 `config.public.js`를 통해 배포용 키를 로드합니다.

다음 항목을 꼭 확인하세요.

1. 현재 배포 키가 유효한지
2. `HTTP referrers` 제한이 걸려 있는지
3. `Static Maps API`만 허용되어 있는지
4. 필요하면 키를 회전해야 하는지

Places API 추가 시:

1. `GOOGLE_PLACES_API_KEY`는 서버 환경변수로만 관리
2. `Places API (New)`만 API 제한
3. GitHub Pages 단독으로는 서버리스 API가 실행되지 않으므로 Vercel 또는 Cloudflare Workers 같은 보조 API 필요
4. Google Places 콘텐츠는 장기 저장하지 말고, 저장 가능한 `placeId` 중심으로 관리
5. Tripadvisor 평점은 Google Places API에서 제공하지 않으므로 수동 데이터로 유지

## 9. 테스트 체크리스트

- `index.html`을 로컬에서 열었을 때 지도 이미지가 보이는지
- GitHub Pages 배포본에서도 지도 이미지가 보이는지
- 키가 없을 때 안내 문구가 뜨는지
- 일정표 카드의 지도 미리보기 클릭 시 Google Maps로 이동하는지
- 개요 탭의 지도 카드들이 모바일에서 깨지지 않는지
- `window.TRIP_PLACES_API_BASE`가 비어 있어도 주변 맛집 탭이 기존 정적 데이터로 표시되는지
- `placeId`가 있는 테스트 장소에서 실시간 Google 평점/주소가 표시되는지

## 10. 관련 파일

- `/Users/chulwan/Documents/GitHub/europe/index.html`
- `/Users/chulwan/Documents/GitHub/europe/api/google-place-details.js`
- `/Users/chulwan/Documents/GitHub/europe/api/google-place-search.js`
- `/Users/chulwan/Documents/GitHub/europe/config.public.js`
- `/Users/chulwan/Documents/GitHub/europe/config.js`
- `/Users/chulwan/Documents/GitHub/europe/config.example.js`
- `/Users/chulwan/Documents/GitHub/europe/README.md`
- `/Users/chulwan/Documents/GitHub/europe/GOOGLE_PLACES_API_PLAN.md`
