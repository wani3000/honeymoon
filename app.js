const data = {
  stats: [
    { label: "총 기간", value: "10박 11일" },
    { label: "주요 도시", value: "3곳" },
    { label: "항공 구간", value: "4회" },
    { label: "렌터카", value: "마요르카 4일" }
  ],
  maps: [
    {
      label: "실시간 구글맵 열기",
      href: "https://www.google.com/maps/embed?origin=mfe&pb=!1m7!4m6!4m1!2sRossio+Station+Lisbon!4m1!2sPena+Palace!4m1!2sCabo+da+Roca"
    },
    {
      label: "신트라 + 호카곶 지도",
      href: "https://www.google.com/maps/dir/Rossio+Station+Lisbon/Pena+Palace/Cabo+da+Roca/"
    },
    {
      label: "리스본 숙소",
      href: "https://www.google.com/maps/search/?api=1&query=Convent+Square+Lisbon"
    },
    {
      label: "마요르카 드라이브",
      href: "https://www.google.com/maps/dir/Fontsanta+Hotel+Thermal+Spa/Cal%C3%B3+des+Moro/Valldemossa/Dei%C3%A0/Palma+Cathedral/"
    },
    {
      label: "마드리드 레이오버",
      href: "https://www.google.com/maps/dir/Madrid+Airport+Atocha+Station/Retiro+Park/Prado+Museum/Puerta+del+Sol/Gran+Via/"
    }
  ],
  staticMapCards: [
    {
      title: "리스본 첫 일정",
      copy: "숙소에서 상 조르즈 성, 타임아웃 마켓까지 리스본 첫날 핵심 동선.",
      href: "https://www.google.com/maps/dir/Convent+Square+Lisbon/Castelo+de+S%C3%A3o+Jorge/Time+Out+Market+Lisboa/",
      path: "color:0x2d7ff9cc|weight:5|Convent Square Lisbon|Castelo de São Jorge|Time Out Market Lisboa",
      markers: [
        "color:0x2d7ff9|label:H|Convent Square Lisbon",
        "color:0x2d7ff9|label:C|Castelo de São Jorge",
        "color:0xe25468|label:T|Time Out Market Lisboa"
      ]
    },
    {
      title: "벨렘 데이",
      copy: "제로니무스 수도원, 파스테이스 드 벨렘, SUD Lisboa 디너 흐름.",
      href: "https://www.google.com/maps/dir/Jer%C3%B3nimos+Monastery/Past%C3%A9is+de+Bel%C3%A9m/SUD+Lisboa+Terrazza/",
      path: "color:0x6f5cffcc|weight:5|Jerónimos Monastery|Pastéis de Belém|SUD Lisboa Terrazza",
      markers: [
        "color:0x6f5cff|label:J|Jerónimos Monastery",
        "color:0x2d7ff9|label:P|Pastéis de Belém",
        "color:0xe25468|label:S|SUD Lisboa Terrazza"
      ]
    },
    {
      title: "신트라 + 호카곶",
      copy: "페나 궁전 이후 호카곶까지 이어지는 당일치기 핵심 동선.",
      href: "https://www.google.com/maps/dir/National+Palace+of+Pena/Cape+Roca/",
      path: "color:0xe25468cc|weight:5|National Palace of Pena|Cape Roca",
      markers: [
        "color:0x2d7ff9|label:P|National Palace of Pena",
        "color:0xe25468|label:R|Cape Roca"
      ]
    },
    {
      title: "마요르카 남동부",
      copy: "Fontsanta에서 Caló des Moro와 Cala Figuera로 이어지는 바다 일정.",
      href: "https://www.google.com/maps/dir/Fontsanta+Hotel+Thermal+Spa/Cal%C3%B3+des+Moro/Cala+Figuera/",
      path: "color:0x23a26dcc|weight:5|Fontsanta Hotel Thermal Spa|Caló des Moro|Cala Figuera",
      markers: [
        "color:0x23a26d|label:F|Fontsanta Hotel Thermal Spa",
        "color:0x2d7ff9|label:C|Caló des Moro",
        "color:0xe25468|label:G|Cala Figuera"
      ]
    },
    {
      title: "팔마 + 마드리드 레이오버",
      copy: "팔마 대성당과 마드리드 레이오버 핵심 장소를 빠르게 체크하는 미리보기.",
      href: "https://www.google.com/maps/dir/Catedral+La+Seu/El+Retiro+Park/Puerta+del+Sol/Gran+V%C3%ADa/",
      path: "color:0x2d7ff9cc|weight:5|El Retiro Park|Puerta del Sol|Gran Vía",
      markers: [
        "color:0x6f5cff|label:L|Catedral La Seu",
        "color:0x23a26d|label:R|El Retiro Park",
        "color:0xe25468|label:S|Puerta del Sol",
        "color:0x2d7ff9|label:G|Gran Vía"
      ]
    }
  ],
  flights: [
    {
      title: "5/3(일) KE921",
      subtitle: "인천 T2 → 리스본 T1",
      badge: "36H / 36J",
      badgeClass: "green",
      details: ["12:45 출발", "20:20 도착", "첫날은 체크인 후 바로 휴식 중심으로 운영"]
    },
    {
      title: "5/8(금) VY3437",
      subtitle: "리스본 → 마요르카",
      badge: "1B / 1A",
      badgeClass: "green",
      details: ["08:50 출발", "11:45 도착", "공항 도착 목표 06:30, 체크인 마감 07:10"]
    },
    {
      title: "5/12(화) I21652",
      subtitle: "마요르카 → 마드리드",
      badge: "10E / 10F",
      badgeClass: "green",
      details: ["09:10 출발", "10:35 도착", "렌터카 반납 목표 06:30"]
    },
    {
      title: "5/12(화) KE914",
      subtitle: "마드리드 T1 → 인천 T2",
      badge: "52H / 52J",
      badgeClass: "green",
      details: ["20:00 출발", "5/13 16:00 도착", "마드리드 공항 복귀는 17:00 전 권장"]
    }
  ],
  stays: [
    {
      title: "Convent Square Lisbon",
      subtitle: "5/3 - 5/8 · 5박",
      badge: "확정",
      badgeClass: "green",
      details: ["전액 결제 완료", "비환불 예약", "보행자 구역이라 차량 하차 후 도보 이동"]
    },
    {
      title: "Fontsanta Hotel Thermal Spa",
      subtitle: "5/8 - 5/12 · 4박",
      badge: "확정",
      badgeClass: "green",
      details: ["전액 결제 완료", "비환불 예약", "체크인 시 잔여금 35.20 EUR 현장 결제"]
    }
  ],
  priorities: ["SUD Lisboa 예약", "Solar dos Presuntos 예약", "페나 궁전 입장권 구매"],
  todos: [
    { title: "SUD Lisboa 예약", due: "지금 바로", urgency: "red" },
    { title: "Solar dos Presuntos 예약", due: "지금 바로", urgency: "red" },
    { title: "페나 궁전 입장권 구매", due: "지금 바로", urgency: "red" },
    { title: "A Cevicheria 예약", due: "이번 주", urgency: "amber" },
    { title: "El Camino 예약", due: "이번 주", urgency: "amber" },
    { title: "제로니무스 수도원 입장권 구매", due: "이번 주", urgency: "amber" },
    { title: "Fontsanta 스파 트리트먼트 예약", due: "이번 주", urgency: "amber" },
    { title: "Fontsanta 호텔 레스토랑 예약", due: "체크인 전", urgency: "green" },
    { title: "국제운전면허증 확인", due: "출발 전", urgency: "green" },
    { title: "유로 환전", due: "출발 전", urgency: "green" },
    { title: "여행자 보험 가입", due: "출발 전", urgency: "green" }
  ],
  timeline: [
    {
      date: "5/3 (일)",
      title: "리스본 도착 후 바로 휴식",
      focus: "공항 도착 후 호텔 체크인만 마치고, 호텔 근처에서 가볍게 식사한 뒤 일찍 쉬는 날로 정리.",
      chips: ["도착일", "체력 안배"],
      points: [
        "인천 12:45 출발, 리스본 20:20 도착",
        "호텔은 보행자 구역이라 하차 후 캐리어를 끌고 이동",
        "야식은 호시우 광장 근처에서 간단하게 해결"
      ],
      critical: ["인천공항 출발편 탑승 시간 12:45"],
      places: [{ name: "Convent Square Lisbon", href: "https://maps.google.com/?cid=7850292069258072457" }]
    },
    {
      date: "5/4 (월)",
      title: "알파마 산책 + 시내 첫 탐방",
      focus: "상 조르즈 성 전망과 28번 트램, 자유의 거리 쇼핑, Time Out Market 저녁으로 흐름을 단순하게 잡은 날.",
      chips: ["리스본", "도보 + 트램"],
      points: [
        "28번 트램은 마르팅 모니스 종점 탑승이 가장 수월",
        "알파마 골목 산책 후 자유의 거리 롤렉스 매장 방문",
        "저녁은 Time Out Market Lisboa로 정리"
      ],
      places: [
        { name: "Convent Square Lisbon", href: "https://maps.google.com/?cid=7850292069258072457" },
        { name: "Castelo de São Jorge", href: "https://maps.google.com/?cid=13024533549412529111" },
        { name: "Time Out Market Lisboa", href: "https://maps.google.com/?cid=1409592934746217618" }
      ]
    },
    {
      date: "5/5 (화)",
      title: "벨렘 지구 집중 일정",
      focus: "제로니무스 수도원과 에그타르트, 타구스 강변 산책, SUD Lisboa 일몰 예약까지 이어지는 날.",
      chips: ["벨렘", "일몰 예약"],
      points: [
        "제로니무스 수도원은 사전 예약이 있으면 동선이 훨씬 편함",
        "Pastéis de Belém은 줄이 있어도 들를 가치가 큰 핵심 포인트",
        "SUD Lisboa는 20:00 전후 예약이 가장 좋은 타이밍"
      ],
      places: [
        { name: "Jerónimos Monastery", href: "https://maps.google.com/?cid=9760810247707356141" },
        { name: "Pastéis de Belém", href: "https://maps.google.com/?cid=18442230332396508773" },
        { name: "SUD Lisboa Terrazza", href: "https://maps.google.com/?cid=11345109858595221778" }
      ]
    },
    {
      date: "5/6 (수)",
      title: "신트라 + 호카곶 당일치기",
      focus: "이른 열차로 신트라에 들어가고, 페나 궁전 후 호카곶으로 이동해 오후에 리스본으로 복귀하는 흐름.",
      chips: ["기차", "사전 예약 필수"],
      points: [
        "호시우역에서 신트라까지 기차 약 40분",
        "페나 궁전 입장권은 미리 확보해야 원하는 시간대가 남음",
        "저녁은 체력에 따라 A Cevicheria 또는 근처 캐주얼 식사"
      ],
      places: [
        { name: "National Palace of Pena", href: "https://maps.google.com/?cid=8585860342190914392" },
        { name: "Cape Roca", href: "https://maps.google.com/?cid=10753145278933283759" },
        { name: "A Cevicheria", href: "https://maps.google.com/?cid=249361683231044429" }
      ]
    },
    {
      date: "5/7 (목)",
      title: "미식 + 쇼핑 데이",
      focus: "오전은 시내 쇼핑, 저녁은 Solar dos Presuntos 예약 디너에 집중하는 구성.",
      chips: ["쇼핑", "예약 식당"],
      points: [
        "시아두 지구 또는 LCM 아울렛 중심으로 여유 있게 이동",
        "저녁 메인은 Arroz de Marisco",
        "예약만 잡히면 하루 전체 난도가 확 내려감"
      ],
      places: [{ name: "Solar dos Presuntos", href: "https://maps.google.com/?cid=6887572243664963168" }]
    },
    {
      date: "5/8 (금)",
      title: "마요르카 이동 + 온천 회복",
      focus: "새벽 공항 이동, 마요르카 도착 후 렌터카 픽업과 체크인을 끝내고 바로 스파로 회복하는 날.",
      chips: ["이동일", "스파 시작"],
      points: [
        "전날 밤 캐리어를 미리 정리해두면 새벽 이동이 편함",
        "13:00 Record Go 렌터카 픽업",
        "14:30 Fontsanta 체크인 후 온천 서킷 이용 추천"
      ],
      critical: ["05:00 호텔 출발", "06:30 리스본 공항 도착 목표", "07:10 Vueling 체크인 마감", "08:50 항공편 출발"],
      places: [
        { name: "Convent Square Lisbon", href: "https://maps.google.com/?cid=7850292069258072457" },
        { name: "Fontsanta Hotel Thermal Spa", href: "https://maps.google.com/?cid=2233528644058998346" }
      ]
    },
    {
      date: "5/9 (토)",
      title: "남동부 에메랄드 해변",
      focus: "아침 일찍 Caló des Moro에 들어가고, 점심은 Cala Figuera, 오후는 호텔 복귀 후 수영장과 스파로 쉬는 구성.",
      chips: ["일찍 출발", "해변"],
      points: [
        "07:50 호텔 출발, 08:30 전 주차장 도착 권장",
        "Caló des Moro는 오전 2~3시간 체류가 적당",
        "오후에는 첫 스파 트리트먼트 예약 넣기 좋음"
      ],
      places: [
        { name: "Fontsanta Hotel Thermal Spa", href: "https://maps.google.com/?cid=2233528644058998346" },
        { name: "Caló des Moro", href: "https://maps.google.com/?cid=13650283880968476839" },
        { name: "Cala Figuera", href: "https://maps.google.com/?cid=721331792335290592" }
      ]
    },
    {
      date: "5/10 (일)",
      title: "북서부 드라이브 + 팔마 시내",
      focus: "발데모사 드라이브 후 오후에는 팔마 대성당과 구시가지, 저녁은 El Camino 대신 일요일 가능한 대안 식당으로 정리.",
      chips: ["드라이브", "팔마"],
      points: [
        "산악 도로는 좁고 구불구불해 천천히 운전 필요",
        "팔마는 14시 전후 도착 기준으로 움직이면 여유가 남음",
        "El Camino는 일요일 휴무라 저녁은 La Bodeguita del Medio 또는 Marc Fosh로 변경"
      ],
      places: [
        { name: "Valldemossa", href: "https://maps.google.com/?cid=10540766082293436990" },
        { name: "Catedral La Seu", href: "https://maps.google.com/?cid=6056387022241497514" }
      ]
    },
    {
      date: "5/11 (월)",
      title: "완전한 호캉스",
      focus: "늦잠, 조식, Es Trenc 해변, 마지막 스파와 호텔 레스토랑 디너까지 여유만 남기는 하루.",
      chips: ["호캉스", "마지막 밤"],
      points: [
        "Es Trenc 해변은 호텔에서 차로 약 10분",
        "비치 타월은 호텔 대여 가능",
        "새벽 체크아웃 대비해 저녁 전 짐 정리 완료"
      ],
      places: [
        { name: "Fontsanta Hotel Thermal Spa", href: "https://maps.google.com/?cid=2233528644058998346" },
        { name: "Es Trenc Beach", href: "https://maps.google.com/?cid=6718804724195379185" }
      ]
    },
    {
      date: "5/12 (화)",
      title: "마드리드 레이오버 후 귀국",
      focus: "이른 체크아웃과 렌터카 반납 뒤 마드리드로 이동하고, 짧게 시내를 본 뒤 저녁 항공편으로 귀국.",
      chips: ["귀국일", "레이오버"],
      points: [
        "렌터카 반납 전 10km 이내 주유소에서 풀주유 후 영수증 챙기기",
        "공항에서 Cercanías C-1로 아토차역 이동 가능",
        "레티로 공원, 프라도 외관, 솔 광장, 그란 비아 순서가 무난"
      ],
      critical: ["05:40 체크아웃", "06:30 렌터카 반납", "07:00 공항 수속 시작", "09:10 마요르카 출발", "17:00 전 마드리드 공항 복귀", "20:00 KE914 탑승"],
      places: [
        { name: "Fontsanta Hotel Thermal Spa", href: "https://maps.google.com/?cid=2233528644058998346" },
        { name: "El Retiro Park", href: "https://maps.google.com/?cid=11415542133959205806" },
        { name: "Puerta del Sol", href: "https://maps.google.com/?cid=7587138583347971705" },
        { name: "Gran Vía", href: "https://maps.google.com/?cid=16220066372150648097" }
      ]
    }
  ],
  reservations: [
    {
      title: "SUD Lisboa",
      subtitle: "리스본 · 루프탑 바",
      badge: "지금 바로",
      badgeClass: "red",
      details: ["일몰 기준 20:00 전후 예약 추천", "공식 홈페이지 또는 OpenTable 이용"]
    },
    {
      title: "Solar dos Presuntos",
      subtitle: "리스본 · 해물밥",
      badge: "지금 바로",
      badgeClass: "red",
      details: ["Arroz de Marisco가 대표 메뉴", "공식 홈페이지 또는 전화 예약"]
    },
    {
      title: "페나 궁전 입장권",
      subtitle: "신트라 · 필수 사전 구매",
      badge: "지금 바로",
      badgeClass: "red",
      details: ["원하는 시간대가 빨리 빠지는 편", "방문일 전에 예매 완료 권장"]
    },
    {
      title: "A Cevicheria",
      subtitle: "리스본 · 문어 요리",
      badge: "이번 주",
      badgeClass: "amber",
      details: ["신트라 일정 이후 컨디션 보고 방문", "예약해두면 저녁 선택지가 편해짐"]
    },
    {
      title: "팔마 저녁 식당 변경",
      subtitle: "5/10 일요일 · 대체 식당 필요",
      badge: "반영 완료",
      badgeClass: "amber",
      details: ["El Camino는 월·일 휴무", "5/10 저녁은 La Bodeguita del Medio 또는 Marc Fosh 추천"]
    },
    {
      title: "Fontsanta 스파 + 레스토랑",
      subtitle: "마요르카 · 호텔 내부",
      badge: "체크인 전",
      badgeClass: "green",
      details: [
        "info@fontsantahotel.com 으로 스파 트리트먼트 문의",
        "신혼여행 코멘트와 커플 패키지 문의 함께 전달",
        "레스토랑은 프런트 또는 이메일로 사전 요청"
      ]
    }
  ],
  tips: [
    "리스본 28번 트램은 소매치기 이슈가 있어 가방은 앞으로 메고 탑승.",
    "현지 카드 결제 시에는 항상 EUR를 선택하고, 원화 결제 DCC는 거절.",
    "마요르카 렌터카 반납 전 주유 영수증은 꼭 보관.",
    "Fontsanta 체크인 시 잔여금 35.20 EUR 결제 필요.",
    "마드리드 공항에서 아토차역 이동은 Cercanías C-1 기준으로 보면 편함.",
    "마요르카에서 마드리드 구간은 수하물 허용량이 25kg에서 23kg으로 줄어드니 쇼핑 무게 체크 필요."
  ]
};

const renderBadges = (items) => items.map((item) => `<span class="meta-chip">${item}</span>`).join("");
const renderList = (items) => `<ul class="detail-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
const staticMapsApiKey = window.TRIP_MAPS_API_KEY || "";

const buildStaticMapUrl = (card) => {
  const params = new URLSearchParams({
    size: "1200x760",
    scale: "2",
    maptype: "roadmap",
    style: "feature:poi|visibility:simplified",
    key: staticMapsApiKey
  });

  params.append("path", card.path);
  card.markers.forEach((marker) => params.append("markers", marker));

  return `https://maps.googleapis.com/maps/api/staticmap?${params.toString()}`;
};

const renderPlaces = (items = []) =>
  items.length
    ? `<div class="place-list">${items
        .map((item) => `<a class="place-link" href="${item.href}" target="_blank" rel="noreferrer">${item.name}</a>`)
        .join("")}</div>`
    : "";
const renderCritical = (items = []) =>
  items.length
    ? `<div class="critical-wrap"><div class="critical-label">Must Check</div><ul class="critical-list">${items
        .map((item) => `<li>${item}</li>`)
        .join("")}</ul></div>`
    : "";

const renderMapPreviewHelp = () =>
  staticMapsApiKey
    ? `<div class="map-preview-note">Google Static Maps API가 연결되어 있어서 각 핵심 동선의 지도 미리보기를 바로 확인할 수 있어요.</div>`
    : `<div class="map-preview-note">` +
        `지도 미리보기는 Google Static Maps API 키를 연결하면 바로 표시돼요. ` +
        `<code>config.js</code>의 <code>window.TRIP_MAPS_API_KEY</code>에 키를 넣으면 됩니다.` +
      `</div>`;

const renderMapPreviewCards = () =>
  data.staticMapCards
    .map(
      (card) => `
        <article class="map-card">
          ${
            staticMapsApiKey
              ? `<img class="map-card-image" src="${buildStaticMapUrl(card)}" alt="${card.title} 지도 미리보기" />`
              : `<div class="map-card-image"></div>`
          }
          <div class="map-card-body">
            <h3 class="map-card-title">${card.title}</h3>
            <p class="map-card-copy">${card.copy}</p>
            <a class="map-card-link" href="${card.href}" target="_blank" rel="noreferrer">Google Maps 열기</a>
          </div>
        </article>
      `
    )
    .join("");

document.getElementById("trip-stats").innerHTML = data.stats
  .map(
    (item) => `
      <article class="stat-card">
        <div class="stat-label">${item.label}</div>
        <div class="stat-value">${item.value}</div>
      </article>
    `
  )
  .join("");

document.getElementById("map-links").innerHTML = data.maps
  .map((item) => `<a class="map-link" href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`)
  .join("");

document.getElementById("map-preview-help").innerHTML = renderMapPreviewHelp();
document.getElementById("map-preview-grid").innerHTML = renderMapPreviewCards();

document.getElementById("flight-list").innerHTML = data.flights
  .map(
    (item) => `
      <article class="info-card">
        <div class="info-top">
          <div>
            <h3 class="info-title">${item.title}</h3>
            <p class="subtle">${item.subtitle}</p>
          </div>
          <span class="badge ${item.badgeClass}">${item.badge}</span>
        </div>
        ${renderList(item.details)}
      </article>
    `
  )
  .join("");

document.getElementById("stay-list").innerHTML = data.stays
  .map(
    (item) => `
      <article class="info-card">
        <div class="info-top">
          <div>
            <h3 class="info-title">${item.title}</h3>
            <p class="subtle">${item.subtitle}</p>
          </div>
          <span class="badge ${item.badgeClass}">${item.badge}</span>
        </div>
        ${renderList(item.details)}
      </article>
    `
  )
  .join("");

document.getElementById("priority-list").innerHTML = data.priorities
  .map((item) => `<div class="priority-pill">${item}</div>`)
  .join("");

document.getElementById("todo-list").innerHTML = data.todos
  .map(
    (item) => `
      <article class="todo-item">
        <div class="check ${item.urgency === "red" ? "urgent" : ""}" aria-hidden="true"></div>
        <div class="todo-text">
          <h3 class="todo-title">${item.title}</h3>
          <div class="todo-meta">${item.due}</div>
        </div>
      </article>
    `
  )
  .join("");

document.getElementById("timeline").innerHTML = data.timeline
  .map(
    (item) => `
      <article class="day-card">
        <div class="day-top">
          <div>
            <div class="day-date">${item.date}</div>
            <h3 class="day-title">${item.title}</h3>
          </div>
        </div>
        <div class="meta-chips">${renderBadges(item.chips)}</div>
        <p class="day-summary">${item.focus}</p>
        ${renderPlaces(item.places)}
        ${renderList(item.points)}
        ${renderCritical(item.critical)}
      </article>
    `
  )
  .join("");

document.getElementById("reservation-list").innerHTML = data.reservations
  .map(
    (item) => `
      <article class="reservation-card">
        <div class="reservation-top">
          <div>
            <h3 class="reservation-title">${item.title}</h3>
            <p class="subtle">${item.subtitle}</p>
          </div>
          <span class="badge ${item.badgeClass}">${item.badge}</span>
        </div>
        ${renderList(item.details)}
      </article>
    `
  )
  .join("");

document.getElementById("tips-list").innerHTML = data.tips.map((tip) => `<li>${tip}</li>`).join("");

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    tabButtons.forEach((item) => item.classList.toggle("active", item === button));
    tabPanels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === target));
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
