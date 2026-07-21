var express = require('express');
var router = express.Router();

/* 포트폴리오 데이터 — 이력서 기반 (정택준) */
var portfolio = {
  name: '  정택준',
  role: 'Full-Stack Developer',
  tagline: '자세는 낮게, 실력은 깊고 넓게.',
  intro: '기획부터 일정 관리, 개발까지 직접 이끌어 본 신입 풀스택 개발자입니다. ' +
    'Java·Spring 백엔드와 React 프론트엔드를 모두 경험했고, 문제를 깊게 분석해 끝까지 해결하는 데 강점이 있습니다. ' +
    '두 번의 팀 프로젝트에서 PL·팀장을 맡아 협업과 책임감의 중요성을 몸으로 익혔습니다.',
  email: 'jtj991215@naver.com',
  phone: '010-8948-5106',
  github: '',

  // 핵심 요약 지표
  highlights: [
    { num: '2', label: 'BDNS · 현관앞 키친 단독 개발' },
    { num: 'Full', label: '백엔드 · 프론트 · 모바일 · DB' },
    { num: '8', label: '실무 · 교육 프로젝트 참여' }
  ],

  // 기술 스택
  stacks: [
    {
      group: 'Backend',
      items: ['Java 17 / 21', 'Kotlin', 'Spring Boot 3', 'Spring Security',
        'Spring Modulith', 'JPA / Hibernate', 'QueryDSL', 'MyBatis', 'NestJS', 'Node.js']
    },
    {
      group: 'Frontend & Mobile',
      items: ['React 19', 'Next.js', 'TypeScript', 'Vite', 'Tailwind CSS',
        'Zustand', 'TanStack Query', 'Flutter', 'jQuery / Ajax']
    },
    {
      group: 'Database',
      items: ['MySQL / MariaDB', 'JPA · QueryDSL', 'Prisma · MyBatis']
    },
    {
      group: 'Infra & Tools',
      items: ['AWS (EC2 · RDS · S3)', 'OCI', 'Docker', 'Nginx', 'Apache Tomcat',
        'Git / GitHub', 'TossPayments', 'Firebase', 'IntelliJ · Figma']
    },
    {
      group: 'AI 활용',
      items: ['Claude Code', 'MCP (Model Context Protocol)', 'AI 페어 프로그래밍',
        '프롬프트 엔지니어링', 'AI 코드 리뷰']
    }
  ],

  // 실무 프로젝트 (twomos)
  workProjects: [
    {
      title: 'BDNS — 빠더너스 팬카페 커뮤니티',
      stack: 'Spring Boot 3 · Java 21 · JPA · React 19',
      desc: '게시판 형식의 팬카페 커뮤니티 플랫폼. 백오피스와 엔드유저 앱을 하나의 백엔드로 서비스하며, 게시글·댓글·반응, 신고 처리 워크플로우, 실시간 채팅(금칙어 필터), 출석, Vimeo 강의, 대시보드 통계까지 직접 설계·구현했습니다.',
      tags: ['팬카페', '게시판', 'JWT', 'WebSocket', 'Vimeo'],
      solo: true
    },
    {
      title: '현관앞 키친 — 구독 배송 + 아임웹 위젯',
      stack: 'Spring Boot 3 · QueryDSL · React 19 · Next.js',
      desc: '음식 구독 배송 관리 시스템. 배송 가능 지역 체크, 공휴일 제외 자동 배송 스케줄링, 아임웹 OAuth 주문 동기화를 구현하고, 아임웹 페이지에 삽입되는 위젯 스크립트까지 직접 개발했습니다.',
      tags: ['QueryDSL', '아임웹 연동', '공휴일 스케줄러', '위젯'],
      solo: true
    },
    {
      title: 'S-in — 셀러 커머스 플랫폼',
      stack: 'Spring Boot · Kotlin · React 19',
      desc: 'Spring Modulith로 도메인을 모듈 단위로 분리한 셀러 커머스 플랫폼. 백오피스·사용자 프론트엔드(React)와 백엔드 도메인 기능을 개발하고, CQRS·Dual-ID 설계로 확장성을 확보했습니다.',
      tags: ['Kotlin', 'Spring Modulith', 'CQRS', 'React 19']
    },
    {
      title: 'IMWEB LMS / RunRun — 온라인 강의',
      stack: 'NestJS · Prisma · React · Vimeo API',
      desc: '아임웹 플러그인샵 기반 구독형 LMS. siteId 멀티테넌트 격리, 역할 기반 접근 제어, Vimeo 영상 연동과 진도·수료증 관리를 구현했습니다.',
      tags: ['NestJS', 'Prisma', 'Multi-tenant', 'Vimeo']
    },
    {
      title: 'Vrink (브링크) — 음료 주문 앱',
      stack: 'Flutter · Spring Boot · Firebase',
      desc: 'Flutter로 만든 음료 주문 모바일 앱. 2-step 주문 플로우, 토스페이먼츠 결제, 카카오/애플 소셜 로그인, Firebase 푸시 알림을 지원합니다.',
      tags: ['Flutter', 'Riverpod', 'Firebase', 'TossPay']
    },
    {
      title: 'RecordGuard (황금후추) — 녹화 방지',
      stack: 'PyInstaller · NSIS · Windows',
      desc: '강의 화면 녹화를 감지·차단하는 Windows 데스크톱 프로그램. 시스템 트레이 백그라운드 실행과 로컬 REST API 상태 체크를 제공합니다.',
      tags: ['Desktop', 'System Tray', 'REST', 'NSIS']
    }
  ],

  // 교육 프로젝트 (한국ICT인재개발원 팀 프로젝트)
  eduProjects: [
    {
      title: 'Tesseris — ERP · PMS 통합 플랫폼',
      role: '팀장 (PM) · 분석 / 개발',
      period: '2025.07 ~ 2025.08 · 4주',
      summary: '소상공인을 위해 ERP(매출·재고·회계·인사)와 PMS(프로젝트·일정·업무)를 통합한 웹 기반 관리 시스템. ' +
        '인사 관리 체계가 없던 기업의 업무를 체계화하고 운영 효율을 끌어올리는 것을 목표로 했습니다.',
      points: [
        'DB 스키마 재설계 · 정규화 및 쿼리 성능 최적화',
        '공용 엔티티 설계로 재사용 가능한 데이터 모델 구축',
        'Chart.js 기반 실시간 데이터 시각화 대시보드 구현',
        '카카오 주소 API · 네이버 이메일 인증 등 외부 API 연동',
        '관리자 권한별 기능 제한 · 검증(권한 기반 접근 제어) 구현',
        '로그인 / 회원가입 · 결제 관리 · 고객 / 매장 관리 등 핵심 화면 개발'
      ],
      tags: ['Java', 'Spring', 'MySQL', 'MyBatis', 'JavaScript', 'Chart.js']
    },
    {
      title: 'ERP 인사 플랫폼 — 중소기업 인사관리 시스템',
      role: 'PL · 분석 / 개발 (Full-Stack)',
      period: '2025.03 ~ 2025.05 · 7주',
      summary: '인사 관리 시스템을 별도로 도입하기 어려운 중소기업을 위한 ERP. ' +
        '직원·근태·업무 데이터를 통합 관리해 인사 업무의 효율을 극대화하도록 설계했습니다.',
      points: [
        'MySQL 전체 DB 설계 · 생성 및 수정 검수 총괄',
        'Apache POI를 활용한 엑셀 다운로드 기능 설계',
        'Apache Tomcat 기반 WAR 서버 배포 담당',
        'GitHub 코드 검수 · 전체 코드 디버깅 담당',
        '급여 · 퇴직자 · QnA · 직원 등록 페이지 풀스택 구현'
      ],
      tags: ['Java', 'JSP', 'Spring', 'MySQL', 'jQuery']
    }
  ],

  // 트러블 슈팅 (실무 프로젝트 기반)
  troubles: [
    {
      project: 'BDNS',
      title: '실시간 채팅 메시지 누락·순서 꼬임',
      problem: '팬카페 실시간 채팅에서 동시 접속이 늘면 메시지가 간헐적으로 누락되거나 표시 순서가 뒤바뀌었습니다.',
      cause: 'WebSocket 세션 관리와 클라이언트 렌더링 방식이 동시 접속 트래픽을 고려하지 못했습니다.',
      solution: 'STOMP 기반으로 메시지 처리 흐름을 재정비해 순서 보장 로직을 개선했습니다.',
      result: '동시 접속 상황에서도 메시지 누락 없이 순서가 보장되어 채팅이 안정화됐습니다.'
    },
    {
      project: 'BDNS',
      title: '게시글 좋아요·조회수 동시성 정합성',
      problem: '인기 게시글에 좋아요·조회 요청이 몰리면 카운트가 실제보다 적게 집계되는 문제가 있었습니다.',
      cause: '동시 요청이 몰릴 때 카운트 갱신 방식이 정합성을 보장하지 못했습니다(lost update).',
      solution: '카운트 갱신 쿼리와 중복 방지 제약을 개선해 동시 요청에도 정확히 반영되도록 처리했습니다.',
      result: '동시 트래픽에서도 좋아요·조회수가 정확히 집계되어 통계 신뢰도가 올라갔습니다.'
    },
    {
      project: 'BDNS',
      title: '금칙어 필터 우회 표현 차단',
      problem: '채팅·게시글에서 변형된 표현으로 필터를 우회하는 경우가 있었습니다.',
      cause: '단순 매칭 방식만 사용해 변형된 표현을 걸러내지 못했습니다.',
      solution: '입력 검증 로직을 고도화해 변형 표현까지 차단하도록 필터를 개선했습니다.',
      result: '우회 표현까지 차단되어 커뮤니티 운영·모니터링 부담이 줄었습니다.'
    },
    {
      project: '현관앞 키친',
      title: '공휴일을 제외한 배송일 자동 계산',
      problem: '구독 배송일을 자동 생성할 때 공휴일·주말에도 배송일이 잡혀 운영자가 매번 수동으로 조정해야 했습니다.',
      cause: '날짜 계산 로직이 공휴일 정보를 반영하지 않았습니다.',
      solution: '공휴일 정보를 연동해 스케줄러가 배송일 계산 시 공휴일·주말을 건너뛰도록 보강했습니다.',
      result: '운영자의 수기 조정이 사라지고, 배송 일정이 자동으로 정확하게 생성됐습니다.'
    },
    {
      project: '현관앞 키친',
      title: '주소 → 배송구역 자동 매핑 실패',
      problem: '회원 주소를 배송구역에 자동 매핑할 때 일부 주소가 매칭되지 않아 배송 가능 여부 판단이 어긋났습니다.',
      cause: '주소 표기 방식이 제각각이라 일부 주소가 구역과 바로 매칭되지 않았습니다.',
      solution: '지오코딩을 연동해 주소를 좌표 기반으로 매칭하고, 실패 건은 운영자가 수동 보정할 수 있게 했습니다.',
      result: '자동 매핑률이 올라가고, 매칭 실패 건도 누락 없이 관리할 수 있게 됐습니다.'
    },
    {
      project: '현관앞 키친',
      title: '외부 플랫폼 삽입 위젯의 로딩 이슈',
      problem: '외부 플랫폼 페이지에 삽입한 위젯 스크립트가 일부 환경에서 로드되지 않거나 API 호출이 차단됐습니다.',
      cause: '외부 도메인 호출 시 CORS 정책과 번들 배포 구조가 맞지 않았습니다.',
      solution: 'CORS 설정과 위젯 번들 배포 구조를 정리해 안정적으로 서빙되도록 했습니다.',
      result: '외부 페이지에서도 위젯이 안정적으로 동작하며 배송지역 체크가 정상화됐습니다.'
    },
    {
      project: '현관앞 키친',
      title: '외부 연동 인증 토큰 만료 이슈',
      problem: '외부 플랫폼 API 호출 중 인증 토큰이 만료되면 호출이 실패하는 경우가 있었습니다.',
      cause: '토큰 만료를 사전에 확인하지 않고 있었습니다.',
      solution: '토큰 갱신 로직을 개선해 만료로 인한 호출 실패를 방지했습니다.',
      result: '토큰 만료로 인한 API 실패가 사라지고 외부 연동이 안정적으로 유지됐습니다.'
    },
    {
      project: '현관앞 키친',
      title: '외부 플랫폼 주문 동기화 중복·누락',
      problem: '외부 플랫폼 주문을 동기화할 때 같은 주문이 중복 저장되거나 일부가 누락됐습니다.',
      cause: '동기화 처리 방식이 재전송·중복 상황을 고려하지 못했습니다.',
      solution: '동기화 로직을 개선해 중복·누락 없이 안정적으로 반영되도록 했습니다.',
      result: '중복·누락이 사라지고 주문 데이터가 일관되게 유지됐습니다.'
    },
    {
      project: 'IMWEB LMS',
      title: '대용량 강의 영상 업로드 실패·재시도',
      problem: '강사가 큰 강의 영상을 올릴 때 네트워크가 끊기면 처음부터 다시 업로드해야 했습니다.',
      cause: '단일 요청으로 전체 파일을 전송해, 중간 실패 시 이어서 올릴 방법이 없었습니다.',
      solution: '청크 업로드 방식을 도입해 중단 지점부터 재개하고 진행률을 표시하도록 했습니다.',
      result: '대용량 업로드 실패율이 크게 줄고, 강사의 업로드 경험이 개선됐습니다.'
    }
  ],

  // 재직 중
  experiences: [
    {
      period: '2025.12.01 ~ 재직 중 · 약 7개월',
      company: '투모어스탭스 (Two More Steps)',
      role: '풀스택 개발자',
      desc: '빠더너스 팬카페(BDNS), 현관앞 키친 구독 배송 등 웹·앱 서비스의 백엔드·프론트엔드를 ' +
        '단독 또는 팀으로 개발하고 운영. Spring Boot · React · Flutter 기반 실서비스를 직접 설계·구현했습니다.'
    }
  ],

  // 이전 경력
  careers: [
    {
      period: '2024.05 ~ 2025.11',
      company: '㈜GS25',
      role: '아르바이트',
      desc: '고객 응대 및 매장 관리'
    },
    {
      period: '2023.07 ~ 2023.08',
      company: '국립중앙도서관',
      role: '단기',
      desc: 'R 활용 텍스트마이닝 교육 진행 (일반인 대상)'
    },
    {
      period: '2021.10 ~ 2022.03',
      company: '㈜하나비앤씨',
      role: '재학 중 계약직',
      desc: '자재 검수·운반, 설계도면 검수'
    }
  ],

  // 교육 / 학력
  educations: [
    { period: '2025.01 ~ 2025.08', name: '한국ICT인재개발원', desc: '클라우드 기반 Java 풀스택(프론트·백엔드) 개발자 과정 수료 (7개월)' },
    { period: '2018.03 ~ 2023.02', name: '강서대학교 (4년제)', desc: '빅데이터경영 전공 · 사회복지 복수전공 · 학사 졸업 (일반성적장학금)' }
  ],

  awards: ['특모범상 (출석률 100%)', '봉사상', '프로젝트 최우수', 'SW인재상'],

  certs: [
    { date: '2025.02', name: '사회복지사 2급', org: '한국사회복지사협회' },
    { date: '2023.08', name: '빅데이터 전문가 자격증', org: '한국능률교육 평가원' },
    { date: '2023.08', name: '코딩 교육 자격증', org: '한국능률교육 평가원' }
  ]
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '정택준 · Portfolio', p: portfolio });
});

module.exports = router;
module.exports.portfolio = portfolio;
