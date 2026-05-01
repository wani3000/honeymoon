# Google Places API Implementation Plan

이 문서는 `주변 맛집` 탭을 Google Places API 기준으로 최신화하기 위한 실행 계획입니다.

## 현재 적용된 것

- `index.html`
  - `window.TRIP_PLACES_API_BASE`가 설정되어 있으면 주변 맛집 카드에서 실시간 Google Places 데이터를 가져올 수 있는 구조를 추가했습니다.
  - 각 장소 객체에 `placeId`가 들어가면 Google 평점, 리뷰 수, 주소, Google Maps URI, 영업상태를 서버 API에서 받아와 표시합니다.
  - `placeId`가 없거나 API 호출이 실패하면 기존 정적 데이터가 그대로 보입니다.
- `api/google-place-details.js`
  - `placeId` 기준으로 Google Places API Place Details(New)를 호출하는 서버리스 엔드포인트입니다.
- `api/google-place-search.js`
  - 장소명/주소 검색으로 `placeId` 후보를 찾는 서버리스 엔드포인트입니다.
- `config.example.js`
  - `window.TRIP_PLACES_API_BASE = ""` 예시를 추가했습니다.

## 필요한 Google Cloud 설정

1. Google Cloud Console에서 `Places API (New)` 활성화
2. Billing 연결
3. 서버 전용 API 키 생성
4. API 제한: `Places API (New)`만 허용
5. 서버 환경변수에 저장

```bash
GOOGLE_PLACES_API_KEY=...
```

주의:

- 기존 `TRIP_MAPS_API_KEY`는 Static Maps용 공개 키입니다.
- Places 서버 키는 브라우저에 노출하면 안 됩니다.

## 배포 구조

현재 GitHub Pages는 정적 파일만 배포하므로 `/api/*` 서버리스 함수가 실행되지 않습니다.

실시간 Places API를 쓰려면 아래 중 하나가 필요합니다.

### 추천: Vercel 보조 API

1. 이 저장소를 Vercel 프로젝트로 연결하거나 별도 API 프로젝트 생성
2. `GOOGLE_PLACES_API_KEY` 환경변수 설정
3. 배포 후 API 주소 확보
4. `config.public.js` 또는 `config.js`에 API base 추가

```js
window.TRIP_PLACES_API_BASE = "https://YOUR-VERCEL-PROJECT.vercel.app";
```

현재 프로젝트의 Vercel Production URL:

```js
window.TRIP_PLACES_API_BASE = "https://honeymoon-delta.vercel.app";
```

GitHub Pages 프론트는 그대로 두고, 데이터만 Vercel API에서 받아오는 방식입니다.

## 엔드포인트

### 1. Place Details

```txt
GET /api/google-place-details?placeId=ChIJ...
```

반환 예시:

```json
{
  "id": "ChIJ...",
  "name": "Nicolau Lisboa",
  "address": "Rua de São Nicolau 17, 1100-547 Lisboa, Portugal",
  "googleMapsUri": "https://maps.google.com/?cid=...",
  "rating": 4.3,
  "userRatingCount": 12000,
  "regularOpeningHours": {
    "openNow": true
  }
}
```

### 2. Place Search

```txt
GET /api/google-place-search?query=Nicolau%20Lisboa%20Rua%20de%20S%C3%A3o%20Nicolau%2017%20Lisboa
```

반환 예시:

```json
{
  "places": [
    {
      "id": "ChIJ...",
      "name": "Nicolau Lisboa",
      "address": "...",
      "googleMapsUri": "..."
    }
  ]
}
```

## 50곳 placeId 채우는 순서

1. Vercel API 배포
2. `GOOGLE_PLACES_API_KEY` 환경변수 설정
3. 각 장소의 `name + address`로 `/api/google-place-search` 호출
4. 가장 정확한 후보의 `id`를 `foodPlaces` 객체에 `placeId`로 추가
5. 주변 맛집 탭에서 실시간 평점/주소가 표시되는지 확인

예시:

```js
{
  region: "lisbon-home",
  category: "cafe",
  name: "Nicolau Lisboa",
  placeId: "ChIJ...",
  address: "Rua de São Nicolau 17, 1100-547 Lisboa, Portugal",
  ...
}
```

## 비용 관리

현재 서버리스 코드는 FieldMask를 제한해서 필요한 필드만 요청합니다.

Details:

```txt
id,displayName,formattedAddress,googleMapsUri,rating,userRatingCount,regularOpeningHours
```

Search:

```txt
places.id,places.displayName,places.formattedAddress,places.googleMapsUri
```

`rating`, `regularOpeningHours` 등은 과금 티어가 올라갈 수 있으므로, 비용이 걱정되면 상세 필드에서 영업시간을 빼고 평점만 유지하는 식으로 줄일 수 있습니다.

## 정책 주의

- Google Places 콘텐츠는 임의로 장기 저장하면 안 됩니다.
- `place_id`는 저장 예외에 해당하므로 앱 데이터에는 `placeId`만 고정 저장하는 방향이 안전합니다.
- Tripadvisor 평점은 Google Places API에서 제공하지 않습니다. 계속 수동 확인값으로 유지해야 합니다.

## 남은 작업

- [ ] Vercel API 배포
- [ ] `GOOGLE_PLACES_API_KEY` 환경변수 설정
- [x] `window.TRIP_PLACES_API_BASE` 설정
- [ ] 50곳 `placeId` 검색 및 확정
- [ ] `foodPlaces`에 `placeId` 추가
- [ ] 주변 맛집 탭에서 실시간 Google 데이터 표시 확인
