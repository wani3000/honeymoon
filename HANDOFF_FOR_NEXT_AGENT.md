# Handoff For Next Agent

이 문서는 다음 PC 에이전트가 이 프로젝트를 바로 이어서 작업할 수 있도록 만든 최신 인수인계 문서입니다.

## 1. 현재 기준 상태

로컬 `main` 브랜치는 현재 GitHub `origin/main` 최신 상태와 맞춰져 있습니다.

기준 커밋:

- `e9f6c83` `Add detailed Record Go rental info to schedule`

## 2. 프로젝트 목적

이 프로젝트는 신혼여행 일정, 예약, 지도, 회화를 모바일에서 한 번에 확인하는 단일 페이지 플래너입니다.

주요 탭:

- 개요
- 일정표
- 예약 체크
- 여행 회화

## 3. 실제 소스 오브 트루스

현재 사용자 화면 기준 실제 동작 코드는 아래 파일에 거의 모두 들어 있습니다.

- `/Users/chulwan/Documents/GitHub/europe/index.html`

즉, 작업 시작 시 가장 먼저 봐야 할 파일은 `index.html`입니다.

## 4. 최근 GitHub에서 반영된 큰 흐름

원격 최신 내역을 기준으로 최근 반영된 핵심은 아래와 같습니다.

- Google Static Maps 연결
- 일정 카드별 지도 미리보기
- 개요 탭 경로 지도 및 요약 지도 카드
- 숙소별 복사 버튼 / 지도 버튼
- 5/10 카타마란 예약 상세 반영
- Record Go 픽업/반납 상세 반영
- BAHR 예약 관련 문구 반영
- Cassai Beach House 점심 플랜 추가
- 현재 검증된 예약 상태를 README에 문서화

즉, 지금 프로젝트는 단순 일정표를 넘어서 **예약 검증과 지도 미리보기까지 포함한 상태**입니다.

## 5. 현재 문서 기준 사실관계

`README.md`에 적힌 최신 기준 정보:

- `Convent Square Lisbon` 예약번호 검증 완료
- `Fontsanta Hotel Thermal Spa` 예약번호 검증 완료
- `Vueling VY3437` 검증 완료
- `Iberia Express I21652` 검증 완료
- `Record Go 75/2026-25992` 일정표 반영 완료
- `Luxury Catamaran 2026-05-10 09:30 - 13:30` 검증 완료

아직 원문 대조가 끝나지 않은 항목:

- `KE921`
- `KE914`
- 호텔 세부 정책 전체

`Record Go` 관련 현재 코드 반영 범위:

- 픽업 시각 `2026-05-08 13:00`
- 반납 시각 `2026-05-12 06:30`
- 차종 `TOYOTA C-HR 또는 동급`
- 등급 `CDAH / 5인승 / 5도어 / 수하물 2개 / 자동`
- 요금제 `Just go`
- 보험 `Total Comfort Coverage`
- 결제 `143.79€`
- 연료정책 `Full-Full`
- 공항 10km 이내 주유 영수증 규칙
- 미충족 시 `30€` 주유 서비스 수수료

## 6. Gmail 관련 주의사항

README 기준 현재 Gmail 커넥터 상태는 아래와 같습니다.

- 프로필 조회는 됨
- 메일 검색/읽기 권한은 부족함
- `403 insufficientPermissions` 발생 가능

따라서 메일 원문 대조를 다시 하려면 재인증 또는 권한 보강이 필요할 수 있습니다.

## 7. Google Maps 관련 주의사항

현재 원격에는 아래 파일이 있습니다.

- `/Users/chulwan/Documents/GitHub/europe/config.public.js`

이 파일은 현재 빈 플레이스홀더 상태입니다.  
이전 공개 키는 저장소에서 제거했습니다.

다음 에이전트는 작업 전에:

1. 기존 키가 Google Cloud에서 회전 또는 폐기됐는지
2. referrer 제한이 걸려 있는지
3. API 제한이 `Static Maps API`로 잠겨 있는지

를 먼저 확인하는 편이 좋습니다.

자세한 지도 작업 문서는 아래를 참고하면 됩니다.

- `/Users/chulwan/Documents/GitHub/europe/GOOGLE_MAPS_INTEGRATION_GUIDE.md`

## 8. 현재 UI/내용 주의사항

사용자 성향상 특히 중요한 것:

- 일정표가 제일 중요함
- 정보가 숨겨져 있지 않고 바로 보여야 함
- 위치 / 이동 / 주의 / 팁이 표처럼 정리된 걸 선호함
- 카드 안에 카드가 많은 구조를 싫어함
- 텍스트 가독성을 가장 중요하게 봄
- 다른 데스크탑 에이전트가 이어받기 쉽게 문서화가 잘 되어 있어야 함

그래서 새 작업을 할 때도:

- 지도보다 일정 텍스트 우선
- 예약 정보보다 일정 흐름 우선
- 모바일 폭에서 텍스트가 밀리거나 겹치지 않게 유지

## 9. 로컬에 함께 존재하는 파일

현재 저장소 파일 중 실제 우선순위는 아래입니다.

### 가장 중요

- `/Users/chulwan/Documents/GitHub/europe/index.html`
- `/Users/chulwan/Documents/GitHub/europe/README.md`

### 설정/배포 관련

- `/Users/chulwan/Documents/GitHub/europe/config.public.js`
- `/Users/chulwan/Documents/GitHub/europe/config.js`
- `/Users/chulwan/Documents/GitHub/europe/config.example.js`

### 참고/레거시 가능성 있음

- `/Users/chulwan/Documents/GitHub/europe/app.js`
- `/Users/chulwan/Documents/GitHub/europe/styles.css`

현재 사용자 기준 실제 배포 화면은 `index.html` 단일 파일 중심으로 이해하는 게 가장 안전합니다.

## 10. 배포 상태

저장소:

- [https://github.com/wani3000/honeymoon](https://github.com/wani3000/honeymoon)

배포:

- [https://wani3000.github.io/honeymoon/](https://wani3000.github.io/honeymoon/)

GitHub Pages는 `main` 브랜치 루트(`/`) 기반입니다.

배포 최신화 절차:

1. `git status --short`로 작업트리 확인
2. `git add ... && git commit -m "..."`
3. `git push origin main`
4. 필요 시 GitHub Pages 반영 여부 확인

## 11. 지금 시점에서 다음 에이전트가 먼저 보면 좋은 것

1. `README.md`
2. `index.html`
3. `config.public.js`
4. `GOOGLE_MAPS_INTEGRATION_GUIDE.md`
5. `HANDOFF_FOR_NEXT_AGENT.md`

## 12. 로컬 백업 메모

이전에 동기화 전 로컬 작업은 아래 백업 브랜치에 보존되어 있습니다.

- `backup/local-pre-sync-2026-04-27`

이 브랜치에는:

- 로컬 인수인계 문서 초안
- 로컬 Google Maps 연동 문서 초안
- 원격 최신본과 다른 일정/예약 체크 수정안

이 남아 있습니다.

필요하면 비교 기준으로만 참고하세요. 현재 기준 주 브랜치는 `main`입니다.
