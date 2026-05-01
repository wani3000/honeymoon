# Places Data Workflow

이 프로젝트에서는 Google Maps 저장 목록을 원본 데이터로 보지 않고, 프로젝트 내부의 JSON 파일을 원본으로 관리합니다.

## 핵심 원칙

- `Google Maps`는 장소를 열어보는 용도
- `places.seed.json`은 사람이 관리하는 원본 초안
- `places.resolved.json`은 Google Places 기준으로 보강된 캐시
- 메모, 태그, 예약 여부는 우리 프로젝트 데이터에 저장
- `placeId`와 `googleMapsUri`는 Google Places에서 보강

## 파일 구조

- `data/places.seed.json`
  - 사람이 직접 관리하는 입력 파일
  - 최소 필드: `slug`, `city`, `name`, `query`, `note`, `tags`
- `data/places.resolved.json`
  - 자동 보강 결과
  - `placeId`, `googleMapsUri`, `formattedAddress`, `rating` 등을 포함
- `scripts/build-places-db.mjs`
  - seed 파일을 Places API 기준으로 보강하는 스크립트

## 실행 방법

### 1. Vercel 프록시를 사용할 때

```bash
TRIP_PLACES_API_BASE=https://honeymoon-delta.vercel.app node scripts/build-places-db.mjs
```

### 2. Google Places API 키로 직접 호출할 때

```bash
GOOGLE_PLACES_API_KEY=YOUR_KEY node scripts/build-places-db.mjs
```

### 3. 다른 입출력 경로를 쓸 때

```bash
GOOGLE_PLACES_API_KEY=YOUR_KEY node scripts/build-places-db.mjs data/places.seed.json data/places.resolved.json
```

## 권장 운영 흐름

1. 일정표에서 정확한 단일 핀만 `places.seed.json`에 추가
2. `note`, `tags`, `reservation` 같은 사용자 메타데이터 입력
3. `build-places-db.mjs` 실행
4. 생성된 `places.resolved.json`에서 `placeId`, `googleMapsUri` 확인
5. 프론트에서는 resolved 파일을 읽어서 버튼/카드/지도 링크 생성

## 예시 항목

```json
{
  "slug": "lisbon-noobai",
  "city": "lisbon",
  "name": "Noobai Cafe",
  "query": "Noobai Cafe Lisbon",
  "note": "예약완료",
  "tags": ["식당", "예약"],
  "reservation": true
}
```

보강 후에는 아래 정보가 붙습니다.

```json
{
  "placeId": "ChIJ...",
  "googleName": "Noobai - Rooftop Bar e Restaurante",
  "formattedAddress": "Miradouro de Santa Catarina ...",
  "googleMapsUri": "https://maps.google.com/..."
}
```

## 왜 이 방식이 좋은가

- Google Maps 저장 목록 편집보다 훨씬 안정적
- 메모 저장 실패 같은 UI 이슈를 피할 수 있음
- 장소명 변경이 생겨도 `placeId` 기준으로 유지 가능
- 나중에 일정표, 체크리스트, 맛집 카드, 지도 카드에 재사용 가능
