/*
    -------------------------------------------------------------------
    | [리스트 상위 뎁스 구분 표시]
    | 'appoint'  : 'leader' <= 1뎁스 영역에 해당되는 소제목으로 구분 표시
    | 'appoint'  : 'split'  <= 해당 요소 바로 위에 진한 구분선 표시
    -------------------------------------------------------------------
    | [페이지 표시 형태]
    | 'type'     : 'page'   <= 페이지 형태로 새창열림
    | 'type'     : 'popup'  <= 팝업 형태로 새창열림
    | 'type'     : 'url'    <= 타 url링크 형태로 새창열림
    -------------------------------------------------------------------
    | [진행범위 표시]
    | 'progress' : '110'    <= 완료(신규이슈)
    | 'progress' : '100'    <= 완료
    | 'progress' : '99'     <= 공통
    | 'progress' : '70'     <= 수정사항
    | 'progress' : '50'     <= 스크립트 필요
    | 'progress' : '1'      <= 삭제
    | 'progress  : '0'      <= 표시 없음
    | 'progress' : ''       <= 표시 없음
    -------------------------------------------------------------------
*/

var guide_data = [
    {
        'appoint':'',
        'id':'00000000',
        'class':'00000000',
        '1depth':'sample',
        'page-name':'공통 레이아웃',
        'type':'page',
        'planning-name':'',
        'publisher-name':'이상훈',
        'start-date':'',
        'end-date':'',
        'progress':'',
        'url':'/views/sample/layout.html',
        'update':'',
        'memo':
            ''
    },
    { 
        'appoint':'',
        'id':'00000000',
        'class':'00000000',
        '1depth':'sample',
        'page-name':'하단 고정 버튼',
        'type':'page',
        'planning-name':'',
        'publisher-name':'이상훈',
        'start-date':'',
        'end-date':'',
        'progress':'',
        'url':'/views/sample/btn-bottom-fixed.html',
        'update':'',
        'memo':        
            ''
    },
    { 
        'appoint':'',
        'id':'00000000',
        'class':'00000000',
        '1depth':'sample',
        'page-name':'팝업 레이아웃',
        'type':'popup',
        'planning-name':'',
        'publisher-name':'이상훈',
        'start-date':'',
        'end-date':'',
        'progress':'',
        'url':'/views/sample/modal-window.html',
        'update':'',
        'memo':
            ''        
    },
    { 
        'appoint':'',
        'id':'00000000',
        'class':'00000000',
        '1depth':'sample',
        'page-name':'다중 팝업',
        'type':'popup',
        'planning-name':'',
        'publisher-name':'이상훈',
        'start-date':'',
        'end-date':'',
        'progress':'',
        'url':'/views/sample/popup-multi.html',
        'update':'',
        'memo':
            ''
    },
    { 
        'appoint':'',
        'id':'loading-round',
        'class':'loading-round',
        '1depth':'sample',
        'page-name':'로딩화면',
        'type':'page',
        'planning-name':'',
        'publisher-name':'박문영',
        'start-date':'2021-10-26',
        'end-date':'2021-10-26',
        'progress':'',
        'url':'/views/sample/loading-round.html',
        'update':'2021-10-26',
        'memo':
            '10/26 장지현<br />'+
            '1.로딩 화면 및 인터렉션 아이콘 추가'
    },
    { 
        'appoint':'',
        'id':'loading-car',
        'class':'loading-car',
        '1depth':'sample',
        'page-name':'로딩화면',
        'type':'page',
        'planning-name':'',
        'publisher-name':'박문영',
        'start-date':'',
        'end-date':'',
        'progress':'',
        'url':'/views/sample/loading-car.html',
        'update':'2021-10-26',
        'memo':'',
    },
    { 
        'appoint':'',
        'id':'scroll-bottom',
        'class':'scroll-bottom',
        '1depth':'sample',
        'page-name':'약관 페이지 하단 스크롤',
        'type':'popup',
        'planning-name':'',
        'publisher-name':'김현기',
        'start-date':'2021-12-06',
        'end-date':'2021-12-06',
        'progress':'',
        'url':'/views/sample/scroll-bottom.html',
        'update':'2021-12-06',
        'memo':
            '12/6 조승모<br />'+
            '약관 팝업 스크롤 이동 스크립트 추가<br />'+
            '* 현업 별도 요청사항(유지보수 때 반영예정)'
    },

    // 연습
    { 
        'appoint':'leader',
        'id':'pagesample',
        'class':'pagesample',
        '1depth':'연습',
        'page-name':'페이지샘플',
        'type':'page',
        'planning-name':'박문영',
        'publisher-name':'김은하',
        'start-date':'2023-11-17',
        'end-date':'2023-11-17',
        'progress':'00',
        'url':'/views/pt/pagesample.html',
        'update':'',
        'memo': ''
    },
    { 
        'appoint':'',
        'id':'popsample',
        'class':'popsample',
        '1depth':'',
        'page-name':'팝업샘플',
        'type':'popup',
        'planning-name':'박문영',
        'publisher-name':'김은하',
        'start-date':'2023-11-17',
        'end-date':'2023-11-17',
        'progress':'00',
        'url':'/views/pt/popsample.html',
        'update':'',
        'memo': ''
    },
    { 
        'appoint':'',
        'id':'pt0101',
        'class':'pt0101',
        '1depth':'',
        'page-name':'STAR CMS 안내',
        'type':'page',
        'planning-name':'박문영',
        'publisher-name':'김은하',
        'start-date':'2023-11-17',
        'end-date':'2023-11-17',
        'progress':'100',
        'url':'/views/pt/pt0101.html',
        'update':'',
        'memo': ''
    },

    // 내자산
    { 
        'appoint':'leader',
        'id':'CMYMCP001',
        'class':'CMYMCP001',
        '1depth':'내자산',
        'page-name':'내자산(서브메인)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-07',
        'end-date':'2021-06-17',
        'progress':'110',
        'url':'/views/as/CMYMCP001.html',
        'update':'2021-12-13',
        'memo':        
            '6/18 김보민<br />'+
            '1.[투자] 평가손익, 총 수익률 삭제 / [펀드] 평가손익, 수익률 삭제 -&gt; [주식]만 유지<br /><br />'+
            '6/21 장지현<br />'+
            '1.계좌/카드/대출 - 배너추가<br /><br />'+
            '6/29 김보민<br />'+
            '1.03펼침 화면 : 계좌 - [외화] 항목 추가<br /><br />'+
            '6/30 김보민<br />'+
            '1.최상단 내차고 등록된 차량수 [2] 노출 (.num-round)<br />'+
            '2.투자 - [기타] 항목 추가<br />'+
            '3.카드 탭 [이용금액] -&gt; [당월이용금액]<br /><br />'+
            '7/21 장지현<br />'+
            '1.기관추가버튼 플루팅버튼으로 변경(차계부 참고)<br />'+
            '*마지막 기관 하단에 구분바 삭제<br /><br />'+
            '7/22 김보민<br />'+
            '1.[배너 3개] 계좌/카드/대출•리스 통이미지로 수정 (관리자에서 등록관리)<br /><br />'+
            '7/30 장지현<br />'+
            '1.목록 - 계좌 -&gt; 예금<br />'+
            '2.예금 - 증권 삭제, 기타 추가<br />'+
            '3.IRP(퇴직연금) - “평가손익/수익률” 추가 <br />'+
            '4.카드 탭명 변경 - 당월이용금액 -&gt; 이용금액<br /><br />'+
            '8/2 장지현<br />'+
            '1.내차고 차량등록 없을 경우 - 내차고 타이틀에 num-round 노출 안함<br />'+
            '2.카드 &gt; 탭 : 청구금액, 포인트 - 카드사만 노출(카드명 x)<br /><br />'+
            '8/3 김보민<br />'+
            '1.내차고 타이틀 영역 링크 -&gt; 클릭시 이동 .top-title-price<br /><br />'+
            '8/5 김보민<br />'+
            '1.03펼침 화면 : [전자금융] 탭 추가<br /><br />'+
            '8/24 김보민<br />'+
            '1.전자금융 [탭] 텍스트 수정 : 선불거래내역 -&gt; 선불거래<br /><br />'+
            '8/31 김보민<br />'+
            '1.리스트 기관 로고 [no image]추가<br /><br />'+
            '9/10 icon-refresh-round 클래스에 인터렉션 refresh-loding 클래스 적용<br /><br />'+
            '9/17 김보민<br />'+
            '1.리스트 예금 갯수 4 -&gt; 5로 수정'+
            '2.리스트 예금 입출금과 예적금 사이 [증권] 추가<br /><br />'+
            '10/7 장지현<br />'+
            '1.증권 케이스 추가<br />'+
            '- 기본정보 목록 복수 개 케이스<br />'+
            '- 연금계좌 케이스<br /><br />'+
            '10/8 김보민<br />'+
            '1.내자산 홈 화면 모든 리스트에서 기관명과 금액 글자수 조정<br />'+
            '(투자-펀드 영역 참고) 금액은 , 포함하여 숫자 10자리<br /><br />'+
            '10/19 장지현<br />'+
            '1.투자 -&gt; 기타 -&gt; 평가손익 삭제<br /><br />'+
            '10/20 김보민<br />'+
            '1.투자, IRP의 [수익률], [평가손익] 값<br />'+
            '컬러 변경<br />'+
            '\'+\' 플러스금액 -&gt; #FF0000 (빨강)<br />'+
            '\'-\' 마이너스금액 -&gt; #2589FF (파랑)<br /><br />'+
            '10/22 김보민<br />'+
            '1.[예금] 배너 삭제, [보험] 배너 추가<br />'+
            '2.[카드], [대출리스], [보험] 연결/미연결 배너 다름<br /><br />'+
            '10/25 김보민<br />'+
            '1.텍스트 변경<br />'+
            '[예금] -&gt; [계좌]<br />'+
            '[대출•리스] -&gt; [대출]<br />'+
            '[IRP(퇴직연금)] -&gt; [퇴직연금(IRP)]<br />'+
            '2.내자산, 내차고 케이스 추가<br />'+
            '제플린 : <a href=\"http://zpl.io/VYzYDQp\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/VYzYDQp</a> / 스크롤시 상단 축소 <a href=\"http://zpl.io/2G3EMBr\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/2G3EMBr</a><br /><br />'+
            '11/30 장지현<br />'+
            '1.배너 미연결시 no-img 노출<br />'+
            '제플린 : <a href=\"http://zpl.io/29d0nAY\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/29d0nAY</a><br /><br />'+
            '12/13 김현기<br />'+
            '1.리로드 아이콘 마크업 변경'
    },
    { 
        'appoint':'',
        'id':'CMYMCP001-2',
        'class':'CMYMCP001',
        '1depth':'내자산',
        'page-name':'내자산(서브메인, 비회원)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-25',
        'end-date':'2021-10-25',
        'progress':'1',
        'url':'/views/as/CMYMCP001-2.html',
        'update':'2021-10-25',
        'memo':        
            '10/25<br />'+
            '1.화면삭제 : 공식 ID화면이 아닌 비회원용 구사 화면' 
    },
    { 
        'appoint':'',
        'id':'CMYMCP001-1',
        'class':'CMYMCP001-1',
        '1depth':'내자산',
        'page-name':'자산연결완료_토스트팝업',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'이상훈',
        'start-date':'2021-06-15',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/as/CMYMCP001-1.html',
        'update':'2021-06-18',
        'memo':        
            '6/16 김보민<br />'+
            '1.토스트팝업 컬러 변경 : #222 opacity:70%' 
    },
    { 
        'appoint':'',
        'id':'CMYMCP002',
        'class':'CMYMCP002',
        '1depth':'내자산',
        'page-name':'내자산(서브메인) : 금액 OFF',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-07',
        'end-date':'2021-06-17',
        'progress':'110',
        'url':'/views/as/CMYMCP002.html',
        'update':'2021-12-13',
        'memo':        
            '6/29 김보민<br />'+
            '1.04금액OFF 화면 : 계좌 - [외화] 항목 추가<br /><br />'+
            '6/30 김보민<br />'+
            '1.bg 컬러 변경 -&gt; #ffcc00<br />'+
            '2.[금액미표시] 최상단만 노출, 하단 리스트영역에선 삭제<br />'+
            '3.최상단 내차고 : 등록된 차량수 [2] 노출 (.num-round)<br />'+
            '4.투자 - [기타] 항목 추가<br />'+
            '5.카드 탭 [이용금액] -&gt; [당월이용금액]<br /><br />'+
            '8/5 김보민<br />'+
            '1.04금액OFF 화면 : [전자금융] 탭 추가<br /><br />'+
            '8/24 김보민<br />'+
            '1.전자금융 [탭] 텍스트 수정 : 선불거래내역 -&gt; 선불거래<br /><br />'+
            '8/31 김보민<br />'+
            '1.리스트 기관 로고 [no image]추가<br /><br />'+
            '9/17 icon-refresh-round 클래스에 인터렉션 refresh-loding 클래스 적용<br /><br />'+
            '9/17 김보민<br />'+
            '1.리스트 예금 갯수 4 -&gt; 5로 수정'+
            '2.리스트 예금 입출금과 예적금 사이 [증권] 추가<br /><br />'+
            '10/7 장지현<br />'+
            '1.증권 케이스 추가<br />'+
            '- 기본정보 목록 복수 개 케이스<br />'+
            '- 연금계좌 케이스<br /><br />'+
            '10/22 김보민<br />'+
            '1.[예금] 배너 삭제, [보험] 배너 추가<br />'+
            '2.[카드], [대출리스], [보험] 연결/미연결 배너 다름<br /><br />'+
            '10/25 김보민<br />'+
            '1.텍스트 변경<br />'+
            '[예금] -&gt; [계좌]<br />'+
            '[대출•리스] -&gt; [대출]<br />'+
            '[IRP(퇴직연금)] -&gt; [퇴직연금(IRP)]<br />'+
            '2.내자산, 내차고 케이스 추가<br />'+
            '제플린 : <a href=\"http://zpl.io/VYzYDQp\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/VYzYDQp</a> / 스크롤시 상단 축소 <a href=\"http://zpl.io/2G3EMBr\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/2G3EMBr</a><br /><br />'+
            '12/13 김현기<br />'+
            '1.리로드 아이콘 마크업 변경'
    },
    { 
        'appoint':'',
        'id':'CMYMCP003',
        'class':'CMYMCP003',
        '1depth':'내자산',
        'page-name':'차량등록유도(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-07',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/as/CMYMCP003.html',
        'update':'2021-06-18',
        'memo':        
            '6/16 김보민<br />'+
            '1.[타이틀] 내차관리의시작 : 16/medium<br />'+
            '2.[내용] 정기검사일~ : 14/regular<br />'+
            '3.다음부터 ~ 띄위지 않음 -&gt; [띄우지] 텍스트 수정<br /><br />'+
            '7/27 장지현<br />'+
            '1.내용 및 디자인 변경'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP004',
        'class':'CMYMCP004',
        '1depth':'내자산',
        'page-name':'자산연결 오류 안내(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-07',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/as/CMYMCP004.html',
        'update':'2021-06-18',
        'memo':        
            '6/16 김보민<br />'+
            '1.버튼 [확인] : 폰트사이즈 16'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP005',
        'class':'CMYMCP005',
        '1depth':'내자산',
        'page-name':'자산연결 정기점검 안내(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-07',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/as/CMYMCP005.html',
        'update':'2021-06-18',
        'memo':        
            '6/16 김보민<br />'+
            '1.버튼 [확인] : 폰트사이즈 16'
    },
    { 
        'appoint':'',
        'id':'CMYMCP006',
        'class':'CMYMCP006',
        '1depth':'내자산',
        'page-name':'나의 순자산(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-07',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/as/CMYMCP006.html',
        'update':'2021-10-25',
        'memo':
            '6/16 김보민<br />'+
            '1.리스트 영역<br />'+
            '[항목] 내차고 : 16/medium/#222<br />'+
            '[금액] +300,000원 : 16/bold/#222<br />'+
            '2.버튼명 수정 현재 [내차등록] -&gt; [확인]<br /><br />'+
            '7/30 장지현<br />'+
            '1.목록 - 계좌 -&gt; 예금<br /><br />'+
            '10/7 장지현<br />'+
            '1.상품 미연결 케이스 추가 <br />'+
            '체크박스 : 비활성처리<br />'+
            '금액 : - 하이픈 표기<br /><br />'+
            '10/12 장지현<br />'+
            '1. 상품 미연결 케이스 재수정 <br />'+
            '체크박스 : 비활성처리 -&gt; 활성<br />'+
            '금액 : - 하이픈 표기  -&gt; 하이픈 유지<br /><br />'+
            '10/25 김보민<br />'+
            '1. 텍스트 변경<br />'+
            '[예금] -&gt; [계좌]<br />'+
            '[대출•리스] -&gt; [대출]<br />'+
            '[IRP(퇴직연금)] -&gt; [퇴직연금(IRP)]'
    },
    { 
        'appoint':'',
        'id':'CMYMCP007',
        'class':'CMYMCP007',
        '1depth':'내자산',
        'page-name':'나의 순자산(팝업) : 금액 OFF',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-07',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/as/CMYMCP007.html',
        'update':'2021-06-18',
        'memo':
            '6/16 김보민<br />'+
            '1.버튼명 수정 현재 [내차등록] -&gt; [확인]'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP008',
        'class':'CMYMCP008',
        '1depth':'내자산',
        'page-name':'전송요구 기간 연장 안내(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-07',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/as/CMYMCP008.html',
        'update':'2021-07-16',
        'memo':
            '7/26 장지현<br />'+
            '1.테이블 하단 블릿 텍스트 변경<br />'+
            '2.체크 문구 텍스트 및 위치 변경'
    },
    { 
        'appoint':'',
        'id':'CMYMCP009',
        'class':'CMYMCP009',
        '1depth':'내자산',
        'page-name':'전송요구 기간 연장 안내(팝업) : 전송요구기간만료',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-09-23',
        'end-date':'2021-09-23',
        'progress':'100',
        'url':'/views/as/CMYMCP009.html',
        'update':'2021-09-23',
        'memo':
            '9/23 김보민<br/>'+
            '1.신규'        
    },
    { 
        'appoint':'',
        'id':'CMYCTE024',
        'class':'CMYCTE024',
        '1depth':'내자산',
        'page-name':'추천상품 : (탭)계좌/카드/대출',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-07-23',
        'end-date':'2021-07-23',
        'progress':'1',
        'url':'/views/as/CMYCTE024.html',
        'update':'2021-10-22',
        'memo':
            '7/23 장지현<br />'+
            '1.신규-계좌,대출 배너-통이미지<br /><br />'+
            '10/14 송아영<br />'+
            '1.추천상품_카드 탭 : 추천카드 리스트 영역 삭제 &gt; 베너 영역으로 대체<br /><br />'+
            '10/22 김보민<br />'+
            '1.화면삭제 (기존 내자산 홈 배너에서 클릭시 링크는 차테크 화면으로 이동됌)'
    },
    { 
        'appoint':'',
        'id':'CMYMCP201',
        'class':'CMYMCP201',
        '1depth':'내자산',
        'page-name':'계좌 조회 : 입출금(은행)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP201.html',
        'update':'2021-10-21',
        'memo':
            '8/2 김보민<br />'+
            '1.[계좌상태] 항목 추가<br /><br />'+
            '8/17 오지혜<br />'+
            '1.[적요] 항목 추가<br /><br />'+
            '9/23 김보민<br />'+
            '1.기간선택 CASE 추가<br /><br />'+
            '10/8 장지현<br />'+
            '1.문구 수정<br />'+
            '개설일 -&gt; 계좌개설일<br /><br />'+
            '10/20 김보민<br />'+
            '1.[거래금액] 값 \'-\' 마이너스금액 컬러 변경 #222, bold<br />'+
            '*자산조회-거래내역 공통 수정<br /><br />'+
            '10/21 김보민<br />'+
            '1.[적용금리] 값 소수점 5자리 표기'
    },
    { 
        'appoint':'',
        'id':'CMYMCP202',
        'class':'CMYMCP202',
        '1depth':'내자산',
        'page-name':'거래내역 상세조회(팝업) : 입출금(은행)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP202.html',
        'update':'2021-08-17',
        'memo':
            '8/2 김보민<br />'+
            '1.[통화코드] 삭제<br /><br />'+
            '8/17 오지혜<br />'+
            '1.[적요] 항목 추가'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP203',
        'class':'CMYMCP203',
        '1depth':'내자산',
        'page-name':'계좌 조회 : 예적금',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP203.html',
        'update':'2021-10-08',
        'memo':
            '6/18 김보민<br />'+
            '1.잔액 -&gt; 현재잔액<br /><br />'+
            '6/24 김보민<br />'+
            '1.현재잔액 -&gt; 잔액 재수정<br /><br />'+
            '8/2 김보민<br />'+
            '1.[통화코드] 삭제<br />'+
            '2.[출금가능금액] 삭제<br />'+
            '3.필터 항목 중 [전체] 삭제<br /><br />'+
            '9/23 김보민<br />'+
            '1.기간선택 CASE 추가<br /><br />'+
            '10/8 장지현<br />'+
            '1.문구 수정<br />'+
            '개설일 -&gt; 계좌개설일<br /><br />'+
            '10/20 김보민<br />'+
            '1.[거래금액] 값 \'-\' 마이너스금액 컬러 변경 #222, bold<br />'+
            '* 자산조회-거래내역 공통 수정<br /><br />'+
            '10/21 김보민<br />'+
            '1.[적용금리] 값 소수점 5자리 표기'
    },
    { 
        'appoint':'',
        'id':'CMYMCP203-1',
        'class':'CMYMCP203',
        '1depth':'내자산',
        'page-name':'계좌 조회 : 예적금 (외화 USD 케이스 추가)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-07-21',
        'end-date':'2021-07-21',
        'progress':'1',
        'url':'/views/as/CMYMCP203-1.html',
        'update':'2021-08-02',
        'memo':            
            '7/21<br />'+
            'CMYMCP203-1.html<br />'+
            '외화 USD 케이스 추가<br /><br />'+
            '8/2 김보민<br />'+
            '1.[통화코드] 삭제<br />'+
            '2.[출금가능금액] 삭제<br />'+
            '3.필터 항목 중 [전체] 삭제<br /><br />'+
            '8/2<br />'+
            '새 화면ID 추가되므로 삭제처리'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP204',
        'class':'CMYMCP204',
        '1depth':'내자산',
        'page-name':'거래내역 상세조회(팝업) : 예적금',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP204.html',
        'update':'2021-08-02',
        'memo':  
            '8/2 김보민<br />'+
            '1.[통화코드] 삭제'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP204-1',
        'class':'CMYMCP204',
        '1depth':'내자산',
        'page-name':'거래내역 상세조회(팝업) : 예적금 (외화 USD 케이스 추가)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-07-21',
        'end-date':'2021-07-21',
        'progress':'1',
        'url':'/views/as/CMYMCP204-1.html',
        'update':'2021-08-02',
        'memo':  
            '7/21<br />'+
            'CMYMCP203-1.html<br />'+
            '외화 USD 케이스 추가<br /><br />'+
            '8/2 김보민<br />'+
            '1. [통화코드] 삭제<br /><br />'+
            '8/2<br />'+
            '새 화면ID 추가되므로 삭제처리'
    },
    { 
        'appoint':'',
        'id':'CMYMCP205',
        'class':'CMYMCP205',
        '1depth':'내자산',
        'page-name':'계좌 조회 : 증권(금투)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-10-08',
        'progress':'100',
        'url':'/views/as/CMYMCP205.html',
        'update':'2021-10-21',
        'memo': 
            '6/18 김보민<br />'+
            '1.잔액 -&gt; 예수금<br /><br />'+
            '10/7 장지현<br />'+
            '1.상단 아코디언 펼쳤을때 연금상품의 경우 아래 항목 추가(납부총액, 기출금액, 최종납입일, 연금기수령액)<br />'+
            '* 화면명 입출금 -&gt; 증권으로 수정함<br /><br />'+
            '10/8 장지현<br />'+
            '1.문구 수정<br />'+
            '개설일 -&gt; 계좌개설일<br />'+
            '세제혜택 -&gt; 세제혜택 적용여부<br /><br />'+
            '10/20 김보민<br />'+
            '1.[거래금액] 값 \'-\' 마이너스금액 컬러 변경 #222, bold<br />'+
            '* 자산조회-거래내역 공통 수정<br />'+
            '2.펼침 화면 [신용융자], [대출금] 값 컬러 변경 #666'
    },
    { 
        'appoint':'',
        'id':'CMYMCP206',
        'class':'CMYMCP206',
        '1depth':'내자산',
        'page-name':'거래내역 상세조회(팝업) : 증권',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP206.html',
        'update':'2021-10-21',
        'memo': 
            '6/24 김보민<br />'+
            '1.거래단가 [원] 추가<br /><br />'+
            '8/2 김보민<br />'+
            '1.[거래종류상세], [거래종류] 위치 변경<br />'+
            '2.정산금액 데이터 [-9,800,000원] 폰트스타일 16M 로 변경<br /><br />'+
            '8/17 오지혜<br />'+
            '1.거래번호 항목 추가<br /><br />'+
            '10/7 장지현<br />'+
            '1.해외주식의 경우 해외주식 거래소 항목 추가<br /><br />'+
            '10/20 김보민<br />'+
            '1.[거래금액] 값 \'-\' 마이너스금액 컬러 변경 #222 bold, [정산금액] 값 \'-\' 마이너스금액 컬러 변경 #222'
    },
    { 
        'appoint':'',
        'id':'CMYMCP207',
        'class':'CMYMCP207',
        '1depth':'내자산',
        'page-name':'상품 조회 : 펀드(은행)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP207.html',
        'update':'2021-10-08',
        'memo': 
            '6/18 김보민<br />'+
            '1.수익률 및 평가손익 삭제<br /><br />'+
            '8/2 김보민<br />'+
            '1.[통화코드] 삭제<br /><br />'+
            '10/8 장지현<br />'+
            '1.문구 수정<br />'+
            '개설일 -&gt; 계좌개설일'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP208',
        'class':'CMYMCP208',
        '1depth':'내자산',
        'page-name':'거래내역 상세조회(팝업) : 펀드',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP208.html',
        'update':'2021-08-02',
        'memo': 
            '8/2 김보민<br />'+
            '1.[통화코드] 삭제' 
    },
    { 
        'appoint':'',
        'id':'CMYMCP262',
        'class':'CMYMCP262',
        '1depth':'내자산',
        'page-name':'예금_외화',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-03',
        'end-date':'2021-08-03',
        'progress':'100',
        'url':'/views/as/CMYMCP262.html',
        'update':'2021-10-08',
        'memo': 
            '6/18 김보민<br />'+
            '1.수익률 및 평가손익 삭제<br /><br />'+
            '8/2 김보민<br />'+
            '1.신규<br /><br />'+
            '10/8 장지현<br />'+
            '1.문구 수정<br />'+
            '개설일 -&gt; 계좌개설일<br /><br />'+
            '10/20 김보민<br />'+
            '1.[거래금액] 값 \'-\' 마이너스금액 컬러 변경 #222, bold<br />'+
            '* 자산조회-거래내역 공통 수정<br /><br />'+
            '10/21 김보민<br />'+
            '1.[적용금리] 값 소수점 5자리 표기'
    },
    { 
        'appoint':'',
        'id':'CMYMCP263',
        'class':'CMYMCP263',
        '1depth':'내자산',
        'page-name':'예금_외화_거래내역 상세조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-03',
        'end-date':'2021-08-03',
        'progress':'100',
        'url':'/views/as/CMYMCP263.html',
        'update':'2021-08-04',
        'memo':
            '8/2 김보민<br />'+
            '1.신규'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP264',
        'class':'CMYMCP264',
        '1depth':'내자산',
        'page-name':'예금_기타',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-03',
        'end-date':'2021-08-03',
        'progress':'100',
        'url':'/views/as/CMYMCP264.html',
        'update':'2021-10-08',
        'memo':
            '8/2 김보민<br />'+
            '1.신규<br /><br />'+
            '10/8 장지현<br />'+
            '1.문구 수정<br />'+
            '개설일 -&gt; 계좌개설일<br /><br />'+
            '10/20 김보민<br />'+
            '1.[거래금액] 값 \'-\' 마이너스금액 컬러 변경 #222, bold<br />'+
            '* 자산조회-거래내역 공통 수정<br /><br />'+
            '10/21 김보민<br />'+
            '1.[적용금리] 값 소수점 5자리 표기'
    },
    { 
        'appoint':'',
        'id':'CMYMCP265',
        'class':'CMYMCP265',
        '1depth':'내자산',
        'page-name':'예금_기타_거래내역 상세조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-03',
        'end-date':'2021-08-03',
        'progress':'100',
        'url':'/views/as/CMYMCP265.html',
        'update':'2021-08-04',
        'memo':
            '8/2 김보민<br />'+
            '1.신규'
    },
    { 
        'appoint':'',
        'id':'CMYMCP209',
        'class':'CMYMCP209',
        '1depth':'내자산',
        'page-name':'상품 조회 : 주식',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP209.html',
        'update':'2021-10-21',
        'memo':
            '10/19 장지현<br />'+
            '매도가능수량 항목삭제<br /><br />'+
            '10/20 김보민<br />'+
            '1.[평가손익] 값 \'+\' 플러스금액 (빨강) 컬러 변경 #FF0000, bold<br />'+
            '2. 리스트 의 [수익률], [평가손익] 값 \'+\' 플러스금액 컬러 변경 #FF0000<br />'+
            '* \'-\' 마이너스금액 일 경우 (파랑) 컬러값 #2589FF'
    },
    { 
        'appoint':'',
        'id':'CMYMCP209-1',
        'class':'CMYMCP209-1',
        '1depth':'내자산',
        'page-name':'상품 조회 : 주식 (CASE : 해외)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP209-1.html',
        'update':'2021-10-19',
        'memo':
            '10/19 장지현<br />'+
            '매도가능수량 항목삭제'
    },
    { 
        'appoint':'',
        'id':'CMYMCP266',
        'class':'CMYMCP266',
        '1depth':'내자산',
        'page-name':'상품 조회 : 펀드(금투)-국내/해외역내/해외역외',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-07-30',
        'end-date':'2021-07-30',
        'progress':'100',
        'url':'/views/as/CMYMCP266.html',
        'update':'2021-08-04',
        'memo':
            '8/2 김보민<br />'+
            '1.신규<br /><br />'+
            '10/19 장지현<br />'+
            '1.매도가능수량 항목 삭제'
    },
    { 
        'appoint':'',
        'id':'CMYMCP266-1',
        'class':'CMYMCP266-1',
        '1depth':'내자산',
        'page-name':'상품 조회 : 펀드(금투)(CASE : 해외주식)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-03',
        'end-date':'2021-08-03',
        'progress':'100',
        'url':'/views/as/CMYMCP266-1.html',
        'update':'2021-08-04',
        'memo':
            '8/2 김보민<br />'+
            '1.신규<br /><br />'+
            '10/19 장지현<br />'+
            '1.매도가능수량 항목 삭제'
    },
    { 
        'appoint':'',
        'id':'CMYMCP267',
        'class':'CMYMCP267',
        '1depth':'내자산',
        'page-name':'상품 조회 : 기타(은행)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-07-30',
        'end-date':'2021-07-30',
        'progress':'100',
        'url':'/views/as/CMYMCP267.html',
        'update':'2021-10-08',
        'memo':
            '8/2 김보민<br />'+
            '1.신규'+
            '10/8 장지현<br />'+
            '1.문구 수정<br />'+
            '개설일 -&gt; 계좌개설일'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP268',
        'class':'CMYMCP268',
        '1depth':'내자산',
        'page-name':'거래내역 상세조회(팝업) : 기타(은행)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-07-30',
        'end-date':'2021-07-30',
        'progress':'100',
        'url':'/views/as/CMYMCP268.html',
        'update':'2021-08-04',
        'memo':
            '8/2 김보민<br />'+
            '1.신규'+
            '2.[통화코드] 삭제'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP269',
        'class':'CMYMCP269',
        '1depth':'내자산',
        'page-name':'상품 조회 : 기타(금투)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-07-30',
        'end-date':'2021-07-30',
        'progress':'100',
        'url':'/views/as/CMYMCP269.html',
        'update':'2021-08-04',
        'memo':
            '8/2 김보민<br />'+
            '1.신규<br /><br />'+
            '10/19 장지현<br />'+
            '1.매도가능수량 항목 삭제'
    },
    { 
        'appoint':'',
        'id':'CMYMCP269-1',
        'class':'CMYMCP269-1',
        '1depth':'내자산',
        'page-name':'상품 조회 : 기타(금투)(CASE : 해외주식)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-03',
        'end-date':'2021-08-03',
        'progress':'100',
        'url':'/views/as/CMYMCP269-1.html',
        'update':'2021-08-04',
        'memo':
            '8/2 김보민<br />'+
            '1.신규<br /><br />'+
            '10/19 장지현<br />'+
            '1.매도가능수량 항목 삭제'     
    },
    { 
        'appoint':'',
        'id':'CMYMCP210',
        'class':'CMYMCP210',
        '1depth':'내자산',
        'page-name':'상품 조회 : 연금상품',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP210.html',
        'update':'2021-07-07',
        'memo':
            '7/7<br />'+
            '\'MyData 관리\'를 \'마이데이터 관리\'로 문구수정'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP211',
        'class':'CMYMCP211',
        '1depth':'내자산',
        'page-name':'개인형IRP 조회 : 거래내역(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP211.html',
        'update':'2021-10-08',
        'memo':
            '6/18 김보민<br />'+
            '1.잔액 -&gt; 계좌평가금액<br />'+
            '2.적립금액 -&gt; 계좌잔액<br /><br />'+
            '6/24 김보민<br />'+
            '1.계좌평가금액 -&gt; 평가금액<br />'+
            '2.계좌잔액 -&gt; 잔액<br /><br />'+
            '10/8 장지현<br />'+
            '1.문구 수정<br />'+
            '개설일 -&gt; 계좌개설일<br /><br />'+
            '10/20 김보민<br />'+
            '1.[거래금액] 값 \'-\' 마이너스금액 컬러 변경 #222, bold<br />'+
            '* 자산조회-거래내역 공통 수정'
    },
    { 
        'appoint':'',
        'id':'CMYMCP212',
        'class':'CMYMCP212',
        '1depth':'내자산',
        'page-name':'개인형IRP 조회 : 운용상품(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP211.html',
        'update':'2021-10-21',
        'memo':
            'CMYMCP211과 동일한 화면<br /><br />'+
            '6/16 송아영<br />'+
            '1.리스트 영역: 날짜(date) : 아래간격 24<br /><br />'+
            '6/18 김보민<br />'+
            '1.잔액 -&gt; 계좌평가금액<br />'+
            '2.적립금액 -&gt; 계좌잔액<br /><br />'+            
            '6/22 김보민<br />'+
            '1.[운용상품 탭] 활성화시 #ddd 컬러 border 1px 더생김<br /><br />'+
            '6/24 김보민<br />'+
            '1.계좌평가금액 -&gt; 평가금액<br />'+
            '2.계좌잔액 -&gt; 잔액<br /><br />'+
            '8/2 김보민<br />'+
            '1.리스트 폰트사이즈, 간격 수정<br /><br />'+
            '10/20 김보민<br />'+
            '1.[수익률], [평가손익] 값 \'+\' 플러스금액 컬러 변경 #FF0000 (빨강)<br />'+
            '* \'-\' 마이너스금액 일 경우 (파랑) 컬러값 #2589FF'
    },
    { 
        'appoint':'',
        'id':'CMYMCP213',
        'class':'CMYMCP213',
        '1depth':'내자산',
        'page-name':'개인형IRP 조회 : 운용상품 상세조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP213.html',
        'update':'2021-10-21',
        'memo':
            '8/2 김보민<br />'+
            '1.평가금액 데이터 [5,000,000원] 폰트스타일 : 16B 로 변경<br /><br />'+
            '10/20 김보민<br />'+
            '1.[수익률], [평가손익] 값 \'+\' 플러스금액 컬러 변경 #FF0000 (빨강)<br /><br />'+
            '* \'-\' 마이너스금액 일 경우 (파랑) 컬러값 #2589FF<br /><br />'+
            '10/21 김보민<br />'+
            '1.[약정이자율] 값 소수점 3자리 표기'
    },
    { 
        'appoint':'',
        'id':'CMYMCP273',
        'class':'CMYMCP273',
        '1depth':'내자산',
        'page-name':'개인형IRP(금투) 조회 : 거래내역(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-02',
        'end-date':'2021-08-02',
        'progress':'100',
        'url':'/views/as/CMYMCP273.html',
        'update':'2021-10-21',
        'memo':
            '8/2 김보민<br />'+
            '1.신규<br /><br />'+
            '10/8 장지현<br />'+
            '1.문구 수정<br />'+
            '개설일 -&gt; 계좌개설일<br />'+
            '세제혜택 -&gt; 세제혜택 적용여부<br /><br />'+
            '10/20 김보민<br />'+
            '1.[거래금액] 값 \'-\' 마이너스금액 컬러 변경 #222, bold<br />'+
            '* 자산조회-거래내역 공통 수정<br />'+
            '2.펼침 화면 [신용융자], [대출금] 값 컬러 변경 #666'
    },
    { 
        'appoint':'',
        'id':'CMYMCP274',
        'class':'CMYMCP274',
        '1depth':'내자산',
        'page-name':'개인형IRP(금투) : 거래상세(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-02',
        'end-date':'2021-08-02',
        'progress':'100',
        'url':'/views/as/CMYMCP274.html',
        'update':'2021-10-21',
        'memo':
            '8/2 김보민<br />'+
            '1.신규<br />'+
            '2.거래금액 데이터 [-9,800,000원] 폰트스타일 : 16B 로 변경<br /><br />'+
            '10/20 김보민<br />'+
            '1.[거래금액] 값 \'-\' 마이너스금액 컬러 변경 #222 bold, [정산금액] 값 \'-\' 마이너스금액 컬러 변경 #222'
    },
    { 
        'appoint':'',
        'id':'CMYMCP275',
        'class':'CMYMCP275',
        '1depth':'내자산',
        'page-name':'개인형IRP(금투) 조회 : 운용상품(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-02',
        'end-date':'2021-08-02',
        'progress':'100',
        'url':'/views/as/CMYMCP211.html',
        'update':'2021-10-21',
        'memo':
            'CMYMCP211과 동일한 화면<br /><br />'+
            '8/2 김보민<br />'+
            '1.신규<br />'+
            '2.리스트 폰트사이즈, 간격 수정<br /><br />'+
            '10/20 김보민<br />'+
            '1.[수익률], [평가손익] 값 \'+\' 플러스금액 컬러 변경 #FF0000 (빨강)<br /><br />'+
            '* \'-\' 마이너스금액 일 경우 (파랑) 컬러값 #2589FF'
    },
    { 
        'appoint':'',
        'id':'CMYMCP276',
        'class':'CMYMCP276',
        '1depth':'내자산',
        'page-name':'개인형IRP(금투) : 운용상품상세(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-02',
        'end-date':'2021-08-02',
        'progress':'100',
        'url':'/views/as/CMYMCP276.html',
        'update':'2021-10-21',
        'memo':
            '8/2 김보민<br />'+
            '1.신규<br /><br />'+
            '10/20 김보민<br />'+
            '1.[수익률], [평가손익] 값 \'+\' 플러스금액 컬러 변경 #FF0000 (빨강)<br />'+
            '* \'-\' 마이너스금액 일 경우 (파랑) 컬러값 #2589FF'
    },
    { 
        'appoint':'',
        'id':'CMYMCP214',
        'class':'CMYMCP214',
        '1depth':'내자산',
        'page-name':'전자금융 조회(탭) : 선불거래내역',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP214.html',
        'update':'2021-08-17',
        'memo':
            '6/16 송아영<br />'+
            '1.상단 박스 안에 txt: 0원,0원, 200만원: regular<br />'+
            '2.리스트 영역: 첫번쨰 리스트안에 충전취소 항목 삭제<br />'+
            '3.리스트 영역: 거래내역: 충전 취소항목: 거래금액 50,000원(취소표시)/잔액 50,000원으로 수정요청.<br /><br />'+
            '6/18 김보민<br />'+
            '1.잔액 -&gt 총 잔액<br />'+
            '2.[가입일] 항목 추가<br /><br />'+
            '8/2 김보민<br />'+
            '1.[자동충전정보 수] 항목 추가<br />'+
            '2.[가맹점명] 항목 추가<br />'+
            '3.필터 항목 중 [전체] 삭제<br /><br />'+
            '8/5 김보민<br />'+
            '1.[자동충전정보 수] 항목 삭제<br />'+
            '2.탭 메뉴 삭제 (선불거래내역, 결제내역)'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP259',
        'class':'CMYMCP259',
        '1depth':'내자산',
        'page-name':'전자금융 조회(탭) : 결제내역',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-05',
        'end-date':'2021-08-05',
        'progress':'100',
        'url':'/views/as/CMYMCP259.html',
        'update':'2021-08-17',
        'memo':
            '8/2 김보민<br />'+
            '1.신규<br />'+
            '2.CMYMCP214 와 동일ID<br /><br />'+
            '8/5 김보민<br />'+
            '1.탭 메뉴 삭제 (선불거래내역, 결제내역)<br />'+
            '2.[상세정보 펼침] 화면 추가 .detail-contents<br /><br />'+
            '8/17<br />'+
            '1.클래스명 [.detail-box] 를 a태그에서 div태그로 변경'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP215',
        'class':'CMYMCP215',
        '1depth':'내자산',
        'page-name':'계정 조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP215.html',
        'update':'2021-08-17',
        'memo':
            '6/18 김보민<br />'+
            '1.[결제수단] 항목 추가<br /><br />'+
            '8/5 김보민<br />'+
            '1.[계정상태] 항목 삭제<br />'+
            '2.텍스트 변경 : 결제수단 -&gt; 충전수단'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP216',
        'class':'CMYMCP216',
        '1depth':'내자산',
        'page-name':'거래내역 상세조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP216.html',
        'update':'2021-08-17',
        'memo':
            '6/18 김보민<br />'+
            '1.[거래번호], [결제수단 기관], [결제수단 식별번호], [가맹점명], [구매상품명], [구매상품 분류], [결제방법] 항목 추가<br /><br />'+
            '8/2 김보민<br />'+
            '1.텍스트 변경<br />'+
            '결제수단 기관 -&gt; 거래상대 기관<br />'+
            '결제수단식별번호 -&gt; 거래상대 식별번호<br /><br />'+
            '8/5 김보민<br />'+
            '1.[이용계정] 항목 추가'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP217',
        'class':'CMYMCP217',
        '1depth':'내자산',
        'page-name':'자동충전정보(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-02',
        'end-date':'2021-08-02',
        'progress':'100',
        'url':'/views/as/CMYMCP217.html',
        'update':'2021-08-17',
        'memo':
            '8/2 김보민<br />'+
            '1.신규<br /><br />'+
            '8/17 오지혜<br />'+
            '1.타이틀 변경'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP218',
        'class':'CMYMCP218',
        '1depth':'내자산',
        'page-name':'자동충전정보(탭) : 기준하한 자동충전',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'1',
        'url':'/views/as/CMYMCP214.html',
        'update':'2021-08-05',
        'memo':
            '6/18 김보민<br />'+
            '1.잔액 -&gt; 총 잔액<br /><br />'+
            '6/22<br />'+
            '1.수정완료 (CMYMCP214와 동일화면)<br /><br />'+
            '8/5 김보민<br />'+
            '1.화면 삭제 -&gt; CMYMCP217 화면으로 병합'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP219',
        'class':'CMYMCP219',
        '1depth':'내자산',
        'page-name':'자동충전정보(탭) : 기타',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'1',
        'url':'/views/as/CMYMCP214.html',
        'update':'2021-08-05',
        'memo':
            '6/18 김보민<br />'+
            '1.잔액 -&gt; 총 잔액<br /><br />'+
            '6/22<br />'+
            '1.수정완료 (CMYMCP214와 동일화면)<br /><br />'+
            '8/5 김보민<br />'+
            '1.화면 삭제 -&gt; CMYMCP217 화면으로 병합'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP220',
        'class':'CMYMCP220',
        '1depth':'내자산',
        'page-name':'카드 이용내역 조회',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP220.html',
        'update':'2021-08-17',
        'memo':
            '8/17 오지혜<br />'+
            '1.가맹점명 하단 리스트로 이동'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP221',
        'class':'CMYMCP221',
        '1depth':'내자산',
        'page-name':'카드 이용내역 상세조회(팝업) : 국내승인내역',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP221.html',
        'update':'2021-08-17',
        'memo':    
            '8/2 김보민<br />'+
            '1.화면 본수 : 3<br />'+
            'CASE [승인/승인취소/정정]<br />'+
            '2.텍스트 변경<br />'+
            '결제일시 -&gt; 승인일시<br /><br />'+
            '8/17 오지혜<br />'+
            '1.가맹점명 하단 리스트로 이동<br />'+
            '2.항목 순서변경'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP222',
        'class':'CMYMCP222',
        '1depth':'내자산',
        'page-name':'카드 이용내역 상세조회(팝업) : 해외승인내역',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP222.html',
        'update':'2021-08-17',
        'memo':
            '8/2 김보민<br />'+
            '1.화면 본수 : 3<br />'+
            'CASE [승인/승인취소/정정]<br />'+
            '2.텍스트 변경<br />'+
            '결제일시 -&gt; 승인일시<br />'+
            '3.[통화코드] 삭제<br /><br />'+
            '8/17 오지혜<br />'+
            '1.가맹점명 하단 리스트로 이동<br />'+
            '2.항목 순서변경'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP223',
        'class':'CMYMCP223',
        '1depth':'내자산',
        'page-name':'청구서(탭) 조회',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP223.html',
        'update':'2021-08-02',
        'memo':
            '8/2 김보민<br />'+
            '1.[결제순번] 추가'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP224',
        'class':'CMYMCP224',
        '1depth':'내자산',
        'page-name':'청구서 상세조회',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP224.html',
        'update':'2021-08-17',
        'memo':
            '6/24 김보민<br />'+
            '1.(03)월 청구금액 - &gt; 3월 청구금액<br /><br />'+
            '8/2 장지현<br />'+
            '1.카드 선택 디폴트 : 카드 전체<br /><br />'+
            '8/17 오지혜<br />'+
            '1.가맹점명 하단 리스트로 이동<br />'+
            '2.항목 순서변경'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP225',
        'class':'CMYMCP225',
        '1depth':'내자산',
        'page-name':'카드사 선택(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP225.html',
        'update':'2021-08-17',
        'memo':
            '8/17 오지혜<br />'+
            '1.가맹점명 하단 리스트로 이동<br />'+
            '2.항목 순서변경'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP226',
        'class':'CMYMCP226',
        '1depth':'내자산',
        'page-name':'청구월 선택(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP226.html',
        'update':'2021-08-02',
        'memo':
            '8/2 장지현<br />'+
            '1.리스트 : \'카드 전체\' 추가'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP227',
        'class':'CMYMCP227',
        '1depth':'내자산',
        'page-name':'포인트 조회',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP223.html',
        'update':'2021-08-02',
        'memo':
            'CMYMCP223과 동일한 화면<br /><br />'+
            '6/18 김보민<br />'+
            '1.잔여포인트-&gt;잔여 포인트<br />'+
            '2.소멸 예정-&gt;소멸예정 포인트'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP228',
        'class':'CMYMCP228',
        '1depth':'내자산',
        'page-name':'은행 대출 :  대출상세정보(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/as/CMYMCP228.html',
        'update':'2021-08-17',
        'memo':
            '7/30 장지현<br />'+
            '1.최종적용금리 : 4.75% -&gt; 연 4.75%<br />'+
            '2.다음이자상환일과 대출잔액 순서 변경<br /><br />'+
            '8/2 김보민<br />'+
            '1.리스트 중 [대출원금] 순서 변경<br /><br />'+
            '10/21 김보민<br />'+
            '1. [최종적용금리] 값 소수점 5자리 표기'
    },
    { 
        'appoint':'',
        'id':'CMYMCP229',
        'class':'CMYMCP229',
        '1depth':'내자산',
        'page-name':'은행 대출 : 상환내역(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/as/CMYMCP228.html',
        'update':'2021-06-24',
        'memo':
            'CMYMCP228과 동일한 화면<br /><br />'+
            '6/18 김보민<br />'+
            '1.잔액-&gt;대출잔액'
    },
    { 
        'appoint':'',
        'id':'CMYMCP230',
        'class':'CMYMCP230',
        '1depth':'내자산',
        'page-name':'대출 조회 : 카드(리볼빙)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-24',
        'progress':'1',
        'url':'/views/as/CMYMCP230.html',
        'update':'2021-08-05',
        'memo':
            '6/18 김보민<br />'+
            '1.[약정결제금액] 항목 추가<br /><br />'+
            '7/30 장지현<br />'+
            '1.UI 변경<br /><br />'+
            '8/5 김보민<br />'+
            '1.화면 삭제<br /><br />'+
            '8/12 장지현<br />'+
            '1.화면 삭제'
    },
    { 
        'appoint':'',
        'id':'CMYMCP231',
        'class':'CMYMCP231',
        '1depth':'내자산',
        'page-name':'대출 조회 : 카드(단기대출)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/as/CMYMCP231.html',
        'update':'2021-07-30',
        'memo':
            '7/30 장지현<br />'+
            '1.UI 변경'
    },
    { 
        'appoint':'',
        'id':'CMYMCP232',
        'class':'CMYMCP232',
        '1depth':'내자산',
        'page-name':'대출 조회 : 카드(장기대출)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/as/CMYMCP232.html',
        'update':'2021-07-30',
        'memo':
            '7/30 장지현<br />'+
            '1.UI 변경'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP233',
        'class':'CMYMCP233',
        '1depth':'내자산',
        'page-name':'할부금융 대출 : 대출상세정보(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/as/CMYMCP233.html',
        'update':'2021-08-17',
        'memo':
            '8/2 김보민<br />'+
            '1.리스트 중 [대출원금] 순서 변경<br /><br />'+
            '10/21 김보민<br />'+
            '1.[최종적용금리] 값 소수점 3자리 표기'
    },
    { 
        'appoint':'',
        'id':'CMYMCP234',
        'class':'CMYMCP234',
        '1depth':'내자산',
        'page-name':'할부금융 대출 : 상환내역(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/as/CMYMCP233.html',
        'update':'2021-06-25',
        'memo':
            'CMYMCP233과 동일한 화면'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP235',
        'class':'CMYMCP235',
        '1depth':'내자산',
        'page-name':'할부금융 운용리스 : 대출상세정보(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/as/CMYMCP235.html',
        'update':'2021-07-07',
        'memo':
            '7/7 \'MyData 관리\'를 \'마이데이터 관리\'로 문구수정'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP236',
        'class':'CMYMCP236',
        '1depth':'내자산',
        'page-name':'할부금융 운용리스 : 상환내역(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/as/CMYMCP235.html',
        'update':'2021-06-25',
        'memo':
            'CMYMCP235와 동일한 화면'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP237',
        'class':'CMYMCP237',
        '1depth':'내자산',
        'page-name':'보험 대출 : 대출상세정보(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/as/CMYMCP237.html',
        'update':'2021-07-07',
        'memo':
            '7/7 \'MyData 관리\'를 \'마이데이터 관리\'로 문구수정'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP238',
        'class':'CMYMCP238',
        '1depth':'내자산',
        'page-name':'보험 대출 : 상환내역(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/as/CMYMCP237.html',
        'update':'2021-08-17',
        'memo':
            'CMYMCP237과 동일한 화면<br /><br />'+
            '7/30 장지현<br />'+
            '1.대출잔액 삭제<br /><br />'+    
            '8/2 김보민<br />'+
            '1.[거래번호] 삭제'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP239',
        'class':'CMYMCP239',
        '1depth':'내자산',
        'page-name':'보험 조회 : 거래내역(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-24',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/as/CMYMCP254.html',
        'update':'2021-08-02',
        'memo':
            'CMYMCP254와 동일한 화면<br /><br />'+
            '8/2 김보민<br />'+
            '1.필터 항목 중 [전체] 삭제'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP240',
        'class':'CMYMCP240',
        '1depth':'내자산',
        'page-name':'보험 조회 : 납입정보(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-24',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/as/CMYMCP254.html',
        'update':'2021-06-25',
        'memo':
            'CMYMCP254와 동일한 화면'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP241',
        'class':'CMYMCP241',
        '1depth':'내자산',
        'page-name':'특약조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/as/CMYMCP241.html',
        'update':'2021-11-02',
        'memo':
            '11/2 김보민<br />'+
            '1.data-list 여러개 추가 대응에 대한 스타일 제작<br >'+
            '제플린 : <a href=\"http://zpl.io/bAKpPeP\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/bAKpPeP</a><br />'
    },
    { 
        'appoint':'',
        'id':'CMYMCP242',
        'class':'CMYMCP242',
        '1depth':'내자산',
        'page-name':'자동차보험 조회 : 납입내역(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-24',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/as/CMYMCP255.html',
        'update':'2021-07-30',
        'memo':
            'CMYMCP255와 동일한 화면<br /><br />'+
            '7/30 장지현<br />'+
            '1.항목 변경 - 디자인 참고'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP243',
        'class':'CMYMCP243',
        '1depth':'내자산',
        'page-name':'자동차보험 조회 : 납입정보(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-24',
        'end-date':'2021-06-24',
        'progress':'1',
        'url':'/views/as/CMYMCP255.html',
        'update':'2021-07-30',
        'memo':
            '7/30 장지현<br />'+
            '1.화면 삭제'
    },
    { 
        'appoint':'',
        'id':'CMYMCP244',
        'class':'CMYMCP244',
        '1depth':'내자산',
        'page-name':'보증보험 조회',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-24',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/as/CMYMCP256.html',
        'update':'2021-08-02',
        'memo':
            'CMYMCP256와 동일한 화면<br /><br />'+
            '8/2 김보민<br />'+
            '1.필터 항목 중 [전체] 삭제'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP245',
        'class':'CMYMCP245',
        '1depth':'내자산',
        'page-name':'통신 조회 : 납입내역(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/as/CMYMCP245.html',
        'update':'2021-09-09',
        'memo':
            '7/30 장지현<br />'+
            '1.이용기간 -&gt; 청구년월 2021년 4월 로 변경<br /><br />'+
            '8/2 김보민<br />'+
            '1.필터 항목 중 [전체] 삭제'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP246',
        'class':'CMYMCP246',
        '1depth':'내자산',
        'page-name':'청구서 조회',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-25',
        'progress':'1',
        'url':'/views/as/CMYMCP246.html',
        'update':'2021-07-30',
        'memo':
            '7/30 장지현<br/ >'+
            '1.화면 삭제'
    },
    { 
        'appoint':'',
        'id':'CMYMCP247',
        'class':'CMYMCP247',
        '1depth':'내자산',
        'page-name':'청구서 상세조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-25',
        'progress':'1',
        'url':'/views/as/CMYMCP247.html',
        'update':'2021-07-30',
        'memo':
            '7/30 장지현<br />'+
            '1.화면 삭제'
    },
    { 
        'appoint':'',
        'id':'CMYMCP248',
        'class':'CMYMCP248',
        '1depth':'내자산',
        'page-name':'통신 조회 : 결제내역(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/as/CMYMCP245.html',
        'update':'2021-09-09',
        'memo':
            'CMYMCP245와 동일한 화면<br /><br />'+
            '8/2 김보민<br />'+
            '1.필터 항목 중 [전체] 삭제<br /><br />'+
            '9/9 장지현<br />'+
            '1.가맹점명 -&gt; 결제상품명으로 변경'        
    },
    { 
        'appoint':'',
        'id':'CMYMCP249',
        'class':'CMYMCP249',
        '1depth':'내자산',
        'page-name':'결제내역 상세조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/as/CMYMCP249.html',
        'update':'2021-06-25',
        'memo':
            '9/9 장지현<br />'+
            '1.가맹점명 -&gt; 결제상품명으로 변경'        
    },
    {
        'appoint':'',
        'id':'CMYMCP250',
        'class':'CMYMCP250',
        '1depth':'내자산',
        'page-name':'은행 대출 : 상환내역 상세조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/as/CMYMCP250.html',
        'update':'2021-10-21',
        'memo':
            '7/30 장지현<br />'+
            '1.항목 변경 - 설계서 및 디자인 참고<br /><br />'+
            '10/20 김보민<br />'+
            '1.[적용이율] 값 컬러 변경 #666<br /><br />'+
            '10/21 김보민<br />'+
            '1.[적용이율] 값 소수점 3자리 표기'
    },
    {
        'appoint':'',
        'id':'CMYMCP251',
        'class':'CMYMCP251',
        '1depth':'내자산',
        'page-name':'할부금융 대출 : 상환내역 상세조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/as/CMYMCP251.html',
        'update':'2021-10-21',
        'memo':
            '10/20 김보민<br />'+
            '1.[적용이율] 값 컬러 변경 #666<br /><br />'+
            '10/21 김보민<br />'+
            '1.[적용이율] 값 소수점 3자리 표기'
    },
    {
        'appoint':'',
        'id':'CMYMCP252',
        'class':'CMYMCP252',
        '1depth':'내자산',
        'page-name':'할부금융 운용리스 : 상환내역 상세조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/as/CMYMCP252.html',
        'update':'2021-06-25',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMCP253',
        'class':'CMYMCP253',
        '1depth':'내자산',
        'page-name':'보험 대출 : 상환내역 상세조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-06-25',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/as/CMYMCP253.html',
        'update':'2021-10-21',
        'memo':
            '8/2 김보민<br />'+
            '1.h3 .list-tit 삭제<br />'+
            '2.통화코드 삭제<br />'+
            '3.[거래번호] 항목 추가<br />'+
            '4.대출원금상환액 데이터 이자납입액 데이터 폰트스타일 16B 로 변경<br /><br />'+
            '10/20 김보민<br />'+
            '1.[적용이율] 값 컬러 변경 #666<br /><br />'+
            '10/21 김보민<br />'+
            '1.[적용이율] 값 소수점 3자리 표기'
    },
    {
        'appoint':'',
        'id':'CMYMCP254',
        'class':'CMYMCP254',
        '1depth':'내자산',
        'page-name':'보험 조회:가입정보(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-18',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP254.html',
        'update':'2021-10-07',
        'memo':
            '6/18 김보민<br />'+
            '1.신규<br /><br />'+
            '8/3 김보민<br />'+
            '1.버튼 수타일 수정<br /><br />'+
            '10/7 장지현<br />'+
            '1.항목 보장내역 추가'        
    },
    {
        'appoint':'',
        'id':'CMYMCP278',
        'class':'CMYMCP278',
        '1depth':'내자산',
        'page-name':'보장내용조회_실손(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-07',
        'end-date':'2021-10-07',
        'progress':'100',
        'url':'/views/as/CMYMCP278.html',
        'update':'2021-10-07',
        'memo':
            '10/7 장지현<br />'+
            '1.신규'        
    },
    {
        'appoint':'',
        'id':'CMYMCP279',
        'class':'CMYMCP279',
        '1depth':'내자산',
        'page-name':'보장내용조회_실손 외(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-07',
        'end-date':'2021-10-07',
        'progress':'100',
        'url':'/views/as/CMYMCP279.html',
        'update':'2021-10-07',
        'memo':
            '10/7 장지현<br />'+
            '1.신규'        
    },
    {
        'appoint':'',
        'id':'CMYMCP255',
        'class':'CMYMCP255',
        '1depth':'내자산',
        'page-name':'자동차보험 조회:가입정보(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-18',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP255.html',
        'update':'2021-07-30',
        'memo':
            '6/18 김보민<br />'+
            '1.신규<br /><br />'+
            '7/30 장지현<br />'+
            '1.UI 변경'        
    },
    {
        'appoint':'',
        'id':'CMYMCP256',
        'class':'CMYMCP256',
        '1depth':'내자산',
        'page-name':'보증보험 조회:가입정보(탭)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-18',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP256.html',
        'update':'2021-07-07',
        'memo':
            '6/18 김보민<br />'+
            '1.신규'        
    },
    {
        'appoint':'',
        'id':'CMYMCP257',
        'class':'CMYMCP257',
        '1depth':'내자산',
        'page-name':'계정조회 결제수단조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-18',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP257.html',
        'update':'2021-09-08',
        'memo':
            '6/18 김보민<br />'+
            '1.신규<br /><br />'+
            '6/24 김보민<br />'+
            '1.[기본] 아이콘 추가<br /><br />'+
            '8/2 김보민<br />'+
            '1.ui 변경<br /><br />'+
            '8/5 김보민<br />'+
            '1.아이콘 변경 : 기본 -&gt; 주결제<br /><br />'+
            '9/8 김보민<br />'+
            '1.타이틀바 닫기버튼으로 변경'        
    },
    {
        'appoint':'',
        'id':'CMYMCP258',
        'class':'CMYMCP258',
        '1depth':'내자산',
        'page-name':'결제내역 상세조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-18',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP258.html',
        'update':'2021-08-05',
        'memo':
            '6/18 김보민<br />'+
            '1.신규<br /><br />'+   
            '8/5 김보민<br />'+
            '1.[이용계정], [거래메모] 항목추가'
    },
    {
        'appoint':'',
        'id':'CMYMCP270',
        'class':'CMYMCP270',
        '1depth':'내자산',
        'page-name':'대출리스_카드_리볼빙_상세조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-02',
        'end-date':'2021-08-03',
        'progress':'1',
        'url':'/views/as/CMYMCP270.html',
        'update':'2021-08-05',
        'memo':
            '7/30 장지현<br />'+
            '1.신규<br /><br />'+
            '8/5 김보민<br />'+
            '1.화면 삭제<br><br />'+
            '8/12 장지현<br />'+
            '1.화면 삭제'        
    },
    {
        'appoint':'',
        'id':'CMYMCP277',
        'class':'CMYMCP277',
        '1depth':'내자산',
        'page-name':'대출리스_카드_단기대출_상세조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-02',
        'end-date':'2021-08-02',
        'progress':'100',
        'url':'/views/as/CMYMCP277.html',
        'update':'2021-08-02',
        'memo':
            '7/30 장지현<br />'+
            '1.신규<br /><br />'+
            '8/2<br />'+
            'CMYMCP271에서 CMYMCP277로 변경<br /><br />'+
            '10/21 김보민<br />'+
            '1.[적용이율] 값 소수점 3자리 표기'
    },
    {
        'appoint':'',
        'id':'CMYMCP272',
        'class':'CMYMCP272',
        '1depth':'내자산',
        'page-name':'대출리스_카드_장기대출_상세조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-02',
        'end-date':'2021-08-02',
        'progress':'100',
        'url':'/views/as/CMYMCP272.html',
        'update':'2021-07-30',
        'memo':
            '7/30 장지현<br />'+ 
            '1.신규<br /><br />'+
            '10/21 김보민<br />'+
            '1.[적용이율] 값 소수점 3자리 표기'
    },
    {
        'appoint':'',
        'id':'CMYMCP260',
        'class':'CMYMCP260',
        '1depth':'내자산',
        'page-name':'자동차보험_가입정보_가입정보조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-02',
        'end-date':'2021-08-02',
        'progress':'100',
        'url':'/views/as/CMYMCP260.html',
        'update':'2021-07-30',
        'memo':
            '7/30 장지현<br />'+
            '1.신규<br /><br />'+
            '9/10 김보민<br />'+
            '1.텍스트 수정<br />'+
            '차량번호 -&gt; 차량명'
    },
    {
        'appoint':'',
        'id':'CMYMCP261',
        'class':'CMYMCP261',
        '1depth':'내자산',
        'page-name':'자동차보험_납입내역_납입내역조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-08-02',
        'end-date':'2021-08-02',
        'progress':'100',
        'url':'/views/as/CMYMCP261.html',
        'update':'2021-07-30',
        'memo':
            '7/30 장지현<br />'+ 
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMCP271',
        'class':'CMYMCP271',
        '1depth':'내자산',
        'page-name':'(조회 공통)기간 선택',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-25',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/as/CMYMCP271.html',
        'update':'2021-10-13',
        'memo':
            '10/12 장지현<br />'+
            '1.헤더 타이틀 변경<br />'+
            '검색조건 설정 -&gt; 조회 설정<br />'+
            '2.기간검색 라디오 버튼 클릭시<br />'+
            '- 날짜 인풋 디폴트 문구 조회 시작일, 조회 종료일<br />'+
            '- 조회 설정에서 기간선택시 조회버튼 비활성<br />'+
            '- 조회 버튼 비활성(시작일 종료일 날짜 선택시 활성화)'
    },
    {
        'appoint':'',
        'id':'CMYMCP300',
        'class':'CMYMCP300',
        '1depth':'내자산',
        'page-name':'마이데이터 관리',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-18',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/as/CMYMCP300.html',
        'update':'2021-08-18',
        'memo':
            '6/18 김보민<br />'+
            '1.신규<br /><br />'+
            '7/9 김보민<br />'+
            '1.ui 변경<br /><br />'+
            '7/21 장지현<br />'+
            '1.기관추가 버튼 추가<br /><br />'+
            '7/22 장지현<br />'+
            '1.기관추가 버튼 삭제<br /><br />'+
            '8/18 장지현<br />'+
            '1.메뉴 삭제 및 추가<br /><br />'+
            '10/18 장지현<br />'+
            '1.개인정보처리방침 메뉴 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP301',
        'class':'CMYMCP301',
        '1depth':'내자산',
        'page-name':'연결 기관 현황',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-10',
        'end-date':'2021-06-10',
        'progress':'100',
        'url':'/views/as/CMYMCP301.html',
        'update':'2021-10-27',
        'memo':
            '6/18 김보민<br />'+
            '1.하단 버튼 삭제<br /><br />'+
            '7/9 김보민<br />'+
            '1.ui 변경<br /><br />'+
            '7/21 장지현<br />'+
            '1.전송요구 기간 연장하기 버튼 추가(만료일 D-30부터 노출)<br />'+
            '2.연결해제 기관 - 연결개수 삭제<br /><br />'+
            '10/27 장지현<br />'+
            '1.연결정보 없는 케이스 추가<br />'+
            '제플린 : <a href=\"http://zpl.io/awl01N7\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/awl01N7</a><br />'
    },
    {
        'appoint':'',
        'id':'CMYMCP302',
        'class':'CMYMCP302',
        '1depth':'내자산',
        'page-name':'기관별 연결 자산 현황',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-11',
        'end-date':'2021-06-11',
        'progress':'100',
        'url':'/views/as/CMYMCP302.html',
        'update':'2021-10-28',
        'memo':
            '7/9 김보민<br />'+
            '1.ui 변경 (case 2개)<br /><br />'+
            '7/16 김보민<br />'+
            '1..property-list 마진탑 32<br /><br />'+
            '8/18 장지현<br />'+
            '1.상단 아코디언 문구 수정<br />'+
            '2.하단 버튼명 수정 : “연결계좌 변경“ -&gt; “데이터 삭제“<br />'+
            '3.리스트 케이스 추가 : 카드:포인트정보 / 통신 /  전자금융<br /><br />'+
            '8/23 김보민<br />'+
            '1.테이블 내용 수정 (CASE : 정기적전송/비정기적전송)<br /><br />'+
            '9/6 장지현<br />'+
            '1.날짜형식 하이픈에서 . 으로 변경 2021-04-02 -&gt; 2021.04.02<br /><br />'+
            '10/28 김보민<br />'+
            '1.[최근 업데이트] 항목 삭제<br />'+
            '2.[연결해제] 항목 삭제<br />'+
            '3.[해제] 태그와 같은 스타일의 [삭제] 태그 추가'
    },
    {
        'appoint':'',
        'id':'CMYMCP302-1',
        'class':'CMYMCP302-1',
        '1depth':'내자산',
        'page-name':'연결 오류 안내(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-11',
        'end-date':'2021-06-11',
        'progress':'1',
        'url':'/views/as/CMYMCP302-1.html',
        'update':'2021-08-18',
        'memo':
            '8/18 장지현<br />'+
            '1.화면 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP302-2',
        'class':'CMYMCP302-2',
        '1depth':'내자산',
        'page-name':'전송요구내역(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-11',
        'end-date':'2021-06-11',
        'progress':'1',
        'url':'/views/as/CMYMCP302-2.html',
        'update':'2021-07-09',
        'memo':
            '7/14 장지현<br />'+
            '1.화면삭제<br />'+
            '* CMYMCP302 상단 더보기 영역으로 이동'
    },
    {
        'appoint':'',
        'id':'CMYMCP303',
        'class':'CMYMCP303',
        '1depth':'내자산',
        'page-name':'메뉴 선택(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-24',
        'end-date':'2021-06-24',
        'progress':'1',
        'url':'/views/as/CMYMCP303.html',
        'update':'2021-07-09',
        'memo':
            '7/9 김보민<br />'+
            '1.화면삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP310',
        'class':'CMYMCP310',
        '1depth':'내자산',
        'page-name':'데이터 삭제 확인(팝업) : 기관별',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-08-17',
        'end-date':'2021-08-17',
        'progress':'100',
        'url':'/views/as/CMYMCP310.html',
        'update':'2021-08-18',
        'memo':
            '8/18 장지현<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMCP311',
        'class':'CMYMCP311',
        '1depth':'내자산',
        'page-name':'인증방식 선택(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-08-17',
        'end-date':'2021-08-17',
        'progress':'100',
        'url':'/views/as/CMYMCP311.html',
        'update':'2021-08-24',
        'memo':
            '8/18 장지현<br />'+
            '1.신규<br /><br />'+
            '8/24 김보민<br />'+
            '1.텍스트 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP312',
        'class':'CMYMCP312',
        '1depth':'내자산',
        'page-name':'데이터 삭제 확인(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-08-26',
        'end-date':'2021-08-26',
        'progress':'100',
        'url':'/views/as/CMYMCP312.html',
        'update':'2021-08-26',
        'memo':
            '8/26 송아영<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMCP321',
        'class':'CMYMCP321',
        '1depth':'내자산',
        'page-name':'전송요구 철회 정보 확인',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-11',
        'end-date':'2021-06-11',
        'progress':'100',
        'url':'/views/as/CMYMCP321.html',
        'update':'2021-08-18',
        'memo':
            '7/9 김보민<br />'+
            '1.ui 변경<br /><br />'+
            '7/16 김보민<br />'+
            '1.컨텐츠 내용중 순서변경<br /><br />'+
            '7/20 김보민<br />'+
            '1.16폰트 아래 간격32 변경<br /><br />'+
            '8/18 장지현<br />'+
            '1.상단 기관 로고 추가<br />'+
            '2.수집한 개인신용정보 - 리스트에 블릿추가<br />'+
            '3.문구 변경'
    },
    {
        'appoint':'',
        'id':'CMYMCP322',
        'class':'CMYMCP322',
        '1depth':'내자산',
        'page-name':'철회 및 삭제 여부 확인(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-11',
        'end-date':'2021-06-11',
        'progress':'100',
        'url':'/views/as/CMYMCP322.html',
        'update':'2021-08-18',
        'memo':
            '7/9 김보민<br />'+
            '1.텍스트 변경<br /><br />'+
            '8/18 장지현<br />'+
            '1.상단 기관 영역 디자인 변경<br />'+
            '2.안내사항 문구 및 컬러 변경'
    },
    {
        'appoint':'',
        'id':'CMYMCP323',
        'class':'CMYMCP323',
        '1depth':'내자산',
        'page-name':'전송요구 철회 완료',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-11',
        'end-date':'2021-06-11',
        'progress':'100',
        'url':'/views/as/CMYMCP323.html',
        'update':'2021-07-13',
        'memo':
            '7/9 김보민<br />'+
            '1.텍스트 변경<br /><br />'+
            '9/14 체크아이콘 인터렉션 적용'
    },
    {
        'appoint':'',
        'id':'CMYMCP326',
        'class':'CMYMCP326',
        '1depth':'내자산',
        'page-name':'전송요구 해제 실패',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-11-03',
        'end-date':'2021-11-03',
        'progress':'100',
        'url':'/views/as/CMYMCP326.html',
        'update':'2021-11-03',
        'memo':
            '11/3 김보민<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMCP324',
        'class':'CMYMCP324',
        '1depth':'내자산',
        'page-name':'데이터 삭제 및 해제 완료',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-08-18',
        'end-date':'2021-08-18',
        'progress':'100',
        'url':'/views/as/CMYMCP324.html',
        'update':'2021-08-26',
        'memo':
            '8/18 장지현<br />'+
            '1.신규<br /><br />'+
            '8/23 김보민<br />'+
            '1.텍스트 변경<br /><br />'+
            '9/14 체크아이콘 인터렉션 적용'
    },
    {
        'appoint':'',
        'id':'CMYMCP327',
        'class':'CMYMCP327',
        '1depth':'내자산',
        'page-name':'데이터 삭제 및 해제 실패',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-11-03',
        'end-date':'2021-11-03',
        'progress':'100',
        'url':'/views/as/CMYMCP327.html',
        'update':'2021-11-03',
        'memo':
            '11/3 김보민<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMCP325',
        'class':'CMYMCP325',
        '1depth':'내자산',
        'page-name':'데이터 삭제 완료',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-08-26',
        'end-date':'2021-08-26',
        'progress':'100',
        'url':'/views/as/CMYMCP325.html',
        'update':'2021-08-26',
        'memo':
            '8/26 송아영<br />'+
            '1.신규<br /><br />'+
            '9/14 체크아이콘 인터렉션 적용'
    },
    {
        'appoint':'',
        'id':'CMYMCP341',
        'class':'CMYMCP341',
        '1depth':'내자산',
        'page-name':'개인신용정보 전송 내역 조회',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-11',
        'end-date':'2021-06-11',
        'progress':'100',
        'url':'/views/as/CMYMCP341.html',
        'update':'2021-11-24',
        'memo':
            '7/9 김보민<br />'+
            '1.ui 변경<br /><br />'+
            '7/16 김보민<br />'+
            '1.기관 아이콘 옆 텍스트 굵기 regular<br />'+
            '2.항목추가 : [데이터 삭제 여부] 삭제/미삭제<br /><br />'+
            '7/20 김보민<br />'+
            '1.16폰트 아래 간격32 변경<br />'+
            '2.아코디언 위 간격32 변경<br /><br />'+
            '8/18 장지현<br />'+
            '1.기관별 전송내역 문구 수정<br /><br />'+
            '9/6 김보민<br />'+
            '1.날짜 형식 변경 yyyy.mm.dd<br /><br />'+
            '10/13 김보민<br />'+
            '1.[철회 여부] 항목 중 값을 철회(yyyy.mm.dd) 로 변경<br />'+
            '현재는 날짜만 표시되어있음<br /><br />'+
            '11/24 장지현<br />'+
            '1.아코디언 리스트 내용 상단 select 추가'
    },
    {
        'appoint':'',
        'id':'CMYMCP342',
        'class':'CMYMCP342',
        '1depth':'내자산',
        'page-name':'전송내역 상세 : 전송요구(신규)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-11',
        'end-date':'2021-06-11',
        'progress':'1',
        'url':'/views/as/CMYMCP342.html',
        'update':'2021-07-09',
        'memo':
            '6/16 송아영<br />'+
            '1.title(전송요구 신규): 하단영역 padding 10px &gt; 8px<br />'+
            '2.리스트 영역: 오른쪽 부분 txt 전부 medium<br /><br />'+
            '7/9 김보민<br />'+
            '1.화면삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP343',
        'class':'CMYMCP343',
        '1depth':'내자산',
        'page-name':'전송내역 상세 : 전송요구(변경)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-11',
        'end-date':'2021-06-11',
        'progress':'1',
        'url':'/views/as/CMYMCP343.html',
        'update':'2021-07-09',
        'memo':
            '6/16 송아영<br />'+
            '1.title(전송요구 변경): 하단영역 padding 10px &gt; 8px<br />'+
            '2.리스트 영역: 오른쪽 부분 txt 전부 medium<br /><br />'+
            '7/9 김보민<br />'+
            '1.화면삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP344',
        'class':'CMYMCP344',
        '1depth':'내자산',
        'page-name':'전송내역 상세 : 전송요구 철회',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-11',
        'end-date':'2021-06-11',
        'progress':'1',
        'url':'/views/as/CMYMCP344.html',
        'update':'2021-07-09',
        'memo':
            '6/16 김민지<br />'+
            '타이틀 하단 간격 10px > 8px<br /><br />'+
            '7/9 김보민<br />'+
            '1.화면삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP345',
        'class':'CMYMCP345',
        '1depth':'내자산',
        'page-name':'개인신용정보 전송 내역 조회 선택(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-15',
        'end-date':'2021-06-15',
        'progress':'1',
        'url':'/views/as/CMYMCP345.html',
        'update':'2021-07-09',
        'memo':            
            '7/9 김보민<br />'+
            '1.화면삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP361-1',
        'class':'CMYMCP361',
        '1depth':'내자산',
        'page-name':'통지 방법/주기 설정 - 분할 1/2',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-16',
        'end-date':'2021-06-16',
        'progress':'1',
        'url':'/views/as/CMYMCP301.html',
        'update':'2021-10-27',
        'memo':
            '6/16 김민지<br />'+
            '1.서브 타이틀(\"3개 기관의 3개 자산이 연결되어 있습니다\") 상단 간격 6px &gt; 8px<br />'+
            '2.은행명, 에러 아이콘 사이 간격 4px &gt; 8px<br />'+
            '3.하단 My Data 서비스 탈퇴 문구 상단 간격 43px &gt; 40px<br /><br />'+
            '6/22 김보민<br />'+
            '1.화면삭제(CMYMCP301과 같은화면)'
    },
    {
        'appoint':'',
        'id':'CMYMCP361',
        'class':'CMYMCP361',
        '1depth':'내자산',
        'page-name':'통지수단관리 통지 방법/주기 설정 선택',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-16',
        'end-date':'2021-06-16',
        'progress':'1',
        'url':'/views/as/CMYMCP361.html',
        'update':'2021-07-09',
        'memo':
            '6/22 김보민<br />'+
            '1.화면아이디 변경 -&gt; CMYMCP361<br /><br />'+
            '7/9 김보민<br />'+
            '1.화면삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP381',
        'class':'CMYMCP381',
        '1depth':'내자산',
        'page-name':'전송요구 해제 정보 확인',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-16',
        'end-date':'2021-06-16',
        'progress':'100',
        'url':'/views/as/CMYMCP381.html',
        'update':'2021-10-27',
        'memo':
            '7/9 김보민<br />'+
            '1.ui 변경<br /><br />'+
            '8/18 장지현<br />'+
            '1.문구변경<br />'+
            '2.수집한 개인신용정보 - 리스트 블릿 추가<br /><br />'+
            '8/26 송아영<br />'+
            '1.리스트 영역 아코디언 형식으로 변경<br /><br />'+
            '10/27 장지현<br />'+
            '1.헤더 타이틀 \"탈퇴\" 추가<br />'+
            '2.연결정보 없는 케이스 추가<br />'+
            '제플린 : <a href=\"http://zpl.io/aRkNNKK\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/aRkNNKK</a><br />'+
            '3. .CMYMCP381 .body-120<br />'+
            'margin-top: -0.8 rem 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP382',
        'class':'CMYMCP382',
        '1depth':'내자산',
        'page-name':'서비스 탈퇴 여부 확인(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-16',
        'end-date':'2021-06-16',
        'progress':'100',
        'url':'/views/as/CMYMCP382.html',
        'update':'2021-08-18',
        'memo':
            '7/9 김보민<br />'+
            '1.텍스트 변경<br /><br />'+
            '8/18 장지현<br />'+
            '1.문구변경'
    },
    {
        'appoint':'',
        'id':'CMYMCP383',
        'class':'CMYMCP383',
        '1depth':'내자산',
        'page-name':'서비스 탈퇴 완료',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-16',
        'end-date':'2021-06-16',
        'progress':'100',
        'url':'/views/as/CMYMCP383.html',
        'update':'2021-06-18',
        'memo':
            '9/14 체크아이콘 인터렉션 적용'
    },
    {
        'appoint':'',
        'id':'CMYMCP384',
        'class':'CMYMCP384',
        '1depth':'내자산',
        'page-name':'재실행 오류 기관 조회',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-16',
        'end-date':'2021-06-16',
        'progress':'100',
        'url':'/views/as/CMYMCP384.html',
        'update':'2021-07-20',
        'memo':
            '7/9 김보민<br />'+
            '1.ui 변경<br /><br />'+
            '7/16 김보민<br />'+
            '1.기관 아이콘 옆 텍스트 굵기 regular<br />'+
            '2.[텍스트 버튼] 오류 의 굵기 regular<br /><br />'+
            '7/20 김보민<br />'+
            '1.16폰트 아래 간격32 변경'
    },
    {
        'appoint':'',
        'id':'CMYMCP385',
        'class':'CMYMCP385',
        '1depth':'내자산',
        'page-name':'재실행 오류기관없음',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-16',
        'end-date':'2021-06-16',
        'progress':'100',
        'url':'/views/as/CMYMCP385.html',
        'update':'2021-10-27',
        'memo':
            '7/9 김보민<br />'+
            '1.텍스트 변경<br /><br />'+
            '10/27 장지현<br />'+
            '1.헤더 타이틀 \"연동 오류 관리\" 추가'
    },
    {
        'appoint':'',
        'id':'CMYMCP306',
        'class':'CMYMCP306',
        '1depth':'내자산',
        'page-name':'이용 불가 안내(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-07-14',
        'end-date':'2021-07-14',
        'progress':'100',
        'url':'/views/as/CMYMCP306.html',
        'update':'2021-08-17',
        'memo':
            '7/9 김보민<br />'+
            '1.신규<br /><br />'+
            '8/17 장지현<br />'+
            '1.아이콘 하단 문구 수정<br /><br />'+
            '10/18<br />'+
            'CSS수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP304',
        'class':'CMYMCP304',
        '1depth':'내자산',
        'page-name':'연결상태 조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-07-14',
        'end-date':'2021-07-14',
        'progress':'100',
        'url':'/views/as/CMYMCP304.html',
        'update':'2021-10-28',
        'memo':
            '7/9 김보민<br />'+
            '1.신규<br />'+
            '* 화면 본수 : 3<br />'+
            '- 연결중&amp;성공<br />'+
            '- 연결중&amp;오류<br />'+
            '- 연결해제<br /><br />'+
            '7/16 김보민<br />'+
            '1.오류 [텍스트 버튼] 관리 사이 여백 8<br /><br />'+
            '8/18 장지현<br />'+
            '1.상단 기관 영역 디자인 변경<br />'+
            '2.\"데이터 삭제\" 버튼 삭제<br /><br />'+
            '10/28 김보민<br />'+
            '1.화면 case 추가 [삭제] 일 경우'
    },
    {
        'appoint':'',
        'id':'CMYMCP305',
        'class':'CMYMCP305',
        '1depth':'내자산',
        'page-name':'데이터 삭제',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-07-14',
        'end-date':'2021-07-14',
        'progress':'1',
        'url':'/views/as/CMYMCP305.html',
        'update':'2021-07-14',
        'memo':
            '7/9 김보민<br />'+
            '1.신규<br />'+
            '* 화면 본수 : 2<br />'+
            '- 특정기관<br />'+
            '- 특정계좌/상품<br /><br />'+
            '7/16 김보민<br />'+
            '1.화면 ui 변경'+
            '[특정계좌/상품]<br /><br />'+
            '8/18 장지현<br />'+
            '1.화면 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP307',
        'class':'CMYMCP307',
        '1depth':'내자산',
        'page-name':'연결해제 안내 및 데이터 삭제 여부 확인(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-07-14',
        'end-date':'2021-07-14',
        'progress':'100',
        'url':'/views/as/CMYMCP307.html',
        'update':'2021-08-18',
        'memo':
            '7/9 김보민<br />'+
            '1.신규<br /><br />'+
            '7/16 김보민<br />'+
            '1.화면 ui 변경<br /><br />'+
            '8/18 장지현<br />'+
            '1.안내사항 문구 및 컬러 변경'
    },
    {
        'appoint':'',
        'id':'CMYMCP387',
        'class':'CMYMCP387',
        '1depth':'내자산',
        'page-name':'오류내용 조회(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-07-14',
        'end-date':'2021-07-14',
        'progress':'100',
        'url':'/views/as/CMYMCP387.html',
        'update':'2021-07-14',
        'memo':
            '7/9 김보민<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMCP386',
        'class':'CMYMCP386',
        '1depth':'내자산',
        'page-name':'업데이트 완료',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-07-14',
        'end-date':'2021-07-14',
        'progress':'100',
        'url':'/views/as/CMYMCP386.html',
        'update':'2021-07-16',
        'memo':
            '7/9 김보민<br />'+
            '1.신규<br /><br />'+
            '7/16 김보민<br />'+
            '1.기관 아이콘 옆 텍스트 굵기 regular<br />'+
            '2.[텍스트 버튼] 실패 의 굵기 regular<br /><br />'+
            '9/14 체크아이콘 인터렉션 적용'
    },
    {
        'appoint':'',
        'id':'CMYMCP348',
        'class':'CMYMCP348',
        '1depth':'내자산',
        'page-name':'마이데이터 동시 가입 내역',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-07-14',
        'end-date':'2021-07-14',
        'progress':'1',
        'url':'/views/as/CMYMCP348.html',
        'update':'2021-07-20',
        'memo':
            '7/9 김보민<br />'+
            '1.신규<br /><br />'+
            '7/20 김보민<br />'+
            '1.16폰트 아래 간격32 변경<br /><br />'+
            '8/18 장지현<br />'+
            '1.화면 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP362',
        'class':'CMYMCP362',
        '1depth':'내자산',
        'page-name':'약관 목록',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-07-14',
        'end-date':'2021-07-14',
        'progress':'100',
        'url':'/views/as/CMYMCP362.html',
        'update':'2021-11-26',
        'memo':
            '7/9 김보민<br />'+
            '1.신규<br /><br />'+
            '7/16 김보민<br />'+
            '1.화면 ui 변경<br />'+
            '화면 본수 : 3<br />'+
            '- 미동의<br />'+
            '- 동의<br />'+
            '- 모두 OFF<br />'+
            '2.토스트팝업 생성 : case2개<br /><br />'+
            '7/20 김보민<br />'+
            '1.16폰트 아래 간격32 변경<br /><br />'+
            '7/27 장지현<br />'+
            '1.모두 OFF 설정할경우 : 바텀시트 -&gt; 레이어팝업으로 변경<br /><br />'+
            '9/30 장지현<br />'+
            '1.약관 리스트 변경<br /><br />'+
            '10/1 장지현<br />'+
            '1.약관 1뎁스 텍스트 두줄일경우 - 체크박스 가운데 정렬 (공통)<br /><br />'+
            '11/25 장지현<br />'+
            '1.리스트 문구 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP363',
        'class':'CMYMCP363',
        '1depth':'내자산',
        'page-name':'약관 상세(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-07-14',
        'end-date':'2021-07-14',
        'progress':'100',
        'url':'/views/as/CMYMCP363.html',
        'update':'2021-09-06',
        'memo':
        '7/9 김보민<br />'+
        '1.신규<br /><br />'+
        '7/16 김보민<br />'+
        '1. 버튼 생성 : case3개 [동의 / 동의 철회 / 확인]<br /><br />'+
        '9/6 장지현<br />'+
        '1. 날짜형식 하이픈에서 . 으로 변경 2021-04-02 -&gt; 2021.04.02'
    },
    {
        'appoint':'',
        'id':'CMYMCP366',
        'class':'CMYMCP366',
        '1depth':'내자산',
        'page-name':'부수/겸영 요약동의서(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-18',
        'end-date':'2021-10-19',
        'progress':'100',
        'url':'/views/as/CMYMCP366.html',
        'update':'2021-12-03',
        'memo':
        '\'CMYMCP101-4-1\'의 내용만 불러오기<br /><br />'+
        '10/18 장지현<br />'+
        '1. 산규<br /><br />'+
        '11/25 장지현<br />'+
        '1. 헤더 타이틀 수정<br /><br />'+
        '12/3 김현기<br />'+
        '1. 요약동의서 약관 데이터 불러오는 영역 태그 변경'
    },
    {
        'appoint':'',
        'id':'CMYMCP367',
        'class':'CMYMCP367',
        '1depth':'내자산',
        'page-name':'부수/겸영 상세동의서(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-18',
        'end-date':'2021-10-19',
        'progress':'100',
        'url':'/views/as/CMYMCP367.html',
        'update':'2021-11-26',
        'memo':
        '\'CMYMCP101-4-2\'의 내용만 불러오기<br /><br />'+
        '10/18 장지현<br />'+
        '1.산규<br /><br />'+
        '11/25 장지현<br />'+
        '1.헤더 타이틀 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP300-1',
        'class':'CMYMCP300-1',
        '1depth':'내자산',
        'page-name':'신용정보활용체제',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-18',
        'end-date':'2021-10-20',
        'progress':'100',
        'url':'/views/as/CMYMCP300-1.html',
        'update':'2021-10-20',
        'memo':
        '* 페이지 아이디 임의적용<br /><br />'+
        '10/19 장지현<br />'+
        '1.CMYMCP300_01 에 일부 적용<br />'+
        '제플린 : <a href=\"http://zpl.io/aRKjo30\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/aRKjo30</a><br />'+
        '* 워드문서의 ☞  은 - 으로 대체<br /><br />'+
        '10/25 유진민<br />'+
        '1.버튼 \'동의\'-&gt;\'확인\'으로 문구 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP364',
        'class':'CMYMCP364',
        '1depth':'내자산',
        'page-name':'알림 설정',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-07-15',
        'end-date':'2021-07-15',
        'progress':'100',
        'url':'/views/as/CMYMCP364.html',
        'update':'2021-10-06',
        'memo':
            '7/9 김보민<br />'+
            '1.신규<br /><br />'+
            '7/16 김보민<br />'+
            '1.화면 ui 변경<br />'+
            '* 화면 본수 : 3<br />'+
            '- 미동의<br />'+
            '- 동의<br />'+
            '- 모두 OFF<br />'+
            '2.토스트팝업 생성 : case2개<br /><br />'+
            '7/20 김보민<br />'+
            '1. 16폰트 아래 간격32 변경<br /><br />'+
            '7/27 장지현<br />'+
            '1.모두 OFF 설정할경우 : 바텀시트 -&gt; 레이어팝업으로 변경<br /><br />'+
            '9/30 장지현<br />'+
            '1.화면 전체 변경<br /><br />'+
            '10/1 장지현<br />'+
            '1.[선택] 상품 서비스 안내 상세없음 - 우측 화살표 삭제<br />'+
            '2.약관 상단 여백 확인 필요<br /><br />'+
            '10/1 장지현<br />'+
            '1.[선택] 상품 서비스 안내 - 디폴트 : 체크버튼 비활성화<br />'+
            '*[선택] 개인(신용)정보 수집·이용 동의(마이데이터 관련 상품 및 서비스 안내) 선택시 활성화됨'
    },
    {
        'appoint':'',
        'id':'CMYMCP364-1',
        'class':'CMYMCP364-1',
        '1depth':'내자산',
        'page-name':'알림 설정 : 모두 OFF',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-07-27',
        'end-date':'2021-07-27',
        'progress':'100',
        'url':'/views/as/CMYMCP364-1.html',
        'update':'2021-07-27',
        'memo':
            '7/27 장지현<br />'+
            '1.모두 OFF 설정할경우 : 바텀시트 -&gt; 레이어팝업으로 변경'
    },
    {
        'appoint':'',
        'id':'CMYMCP365',
        'class':'CMYMCP365',
        '1depth':'내자산',
        'page-name':'동의서 상세(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-07-15',
        'end-date':'2021-07-15',
        'progress':'100',
        'url':'/views/as/CMYMCP365.html',
        'update':'2021-09-06',
        'memo':
            '7/9 김보민<br />'+
            '1.신규<br /><br />'+
            '7/16 김보민<br />'+
            '1.버튼 생성 : case2개 [동의 / 동의 철회]<br /><br />'+
            '8/18 장지현<br />'+
            '1.이용목적 - 문구 수정<br />'+
            '2.수집항목 - 리스트 블릿 추가 <br /><br />'+
            '9/1송아영<br />'+
            '1.보유기간 텍스트 수정 (2021.04.10~2022.04.09 > 서비스 이용 종료 시 또는 삭제 요구 시까지)<br /><br />'+
            '9/3 송아영<br />'+
            '1.텍스트 삭제하고 본문영역으로 변경<br /><br />'+
            '9/6 장지현<br />'+
            '1.날짜형식 하이픈에서 . 으로 변경<br />'+
            '2021-04-02 -&gt; 2021.04.02'
    },
    {
        'appoint':'',
        'id':'CMYMCP349',
        'class':'CMYMCP349',
        '1depth':'내자산',
        'page-name':'기가입 안내(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-07-15',
        'end-date':'2021-07-15',
        'progress':'100',
        'url':'/views/as/CMYMCP349.html',
        'update':'2021-07-16',
        'memo':
            '7/9 김보민<br />'+
            '1.신규<br /><br />'+
            '10/18<br />'+
            'CSS수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP308',
        'class':'CMYMCP308',
        '1depth':'내자산',
        'page-name':'연결해제 안내(팝업) : 연결계좌변경',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-07-16',
        'end-date':'2021-07-16',
        'progress':'1',
        'url':'/views/as/CMYMCP308.html',
        'update':'2021-07-16',
        'memo':
            '7/16 김보민<br />'+
            '1.신규<br /><br />'+
            '8/18 장지현<br />'+
            '1.화면 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP309',
        'class':'CMYMCP309',
        '1depth':'내자산',
        'page-name':'전송요구 기간 연장(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'박문영',
        'start-date':'2021-07-21',
        'end-date':'2021-07-21',
        'progress':'100',
        'url':'/views/as/CMYMCP309.html',
        'update':'2021-07-21',
        'memo':
            '7/21 장지현<br />'+
            '1.신규'
    },
    { 
        'appoint':'',
        'id':'공통',
        'class':'공통',
        '1depth':'내자산',
        'page-name':'마이데이터 서비스 안내',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'',
        'end-date':'',
        'progress':'99',
        'url':'/views/as/공통.html',
        'update':'',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMCP101',
        'class':'CMYMCP101',
        '1depth':'내자산',
        'page-name':'서비스 이용 동의(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-23',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/as/CMYMCP101.html',
        'update':'2021-11-25',
        'memo':
            '6/23 김보민<br />'+
            '1.텍스트 변경 (기획서참고)<br /><br />'+
            '7/27 김보민<br />'+
            '1.동의 항목 추가<br /><br />'+
            '9/3 김민지<br />'+
            '1.동의 항목 추가<br /><br />'+
            '9/14 장지현<br />'+
            '1.항목 링크 삭제<br /><br />'+
            '9/30 장지현<br />'+
            '1.약관 리스트 전체 변경<br /><br />'+
            '10/1 장지현<br />'+
            '1.[선택] 상품 서비스 안내 상세없음 - 우측 화살표 삭제<br />'+
            '2.타이틀 띄어쓰기 서비스이용 동의 -> 서비스 이용 동의<br /><br />'+
            '10/6 장지현<br />'+
            '1.[선택] 상품 서비스 안내 - 디폴트 : 체크버튼 비활성화<br /><br />'+
            '* [선택] 개인(신용)정보 수집·이용 동의(마이데이터 관련 상품 및 서비스 안내) 선택시 활성화됨<br /><br />'+
            '10/12 장지현<br />'+
            '1.네번째 약관 리스트 텍스트<br />'+
            '[선택] 개인(신용)정보 수집·이용 동의(마이데이터 부수/겸영 서비스) - 강조 처리 제거(다른 약관 리스트와 같은 스타일 적용)<br /><br />'+
            '11/25 장지현<br />'+
            '1.리스트 문구 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP101-1',
        'class':'CMYMCP101',
        '1depth':'내자산',
        'page-name':'[필수] 마이데이터 서비스 이용 약관',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-18',
        'end-date':'2021-10-19',
        'progress':'100',
        'url':'/views/as/CMYMCP101-1.html',
        'update':'2021-12-07',
        'memo':
            '10/18<br />'+
            '1.신규<br /><br />'+
            '10/19 장지현<br />'+
            '1.CMYMCP108 에 약관 일부 적용<br />'+
            '제플린 확인 : '+
            '<a href=\"http://zpl.io/adyJAG7\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/adyJAG7</a><br /><br />'+
            '10//27 조승모<br />'+
            '1.문구 변경 및 css 수정<br />'+
            '2.제13조 항 넘버링 삭제<br /><br />'+
            '11/25 장지현<br />'+
            '1.약관 내용 전체 수정<br /><br />'+
            '12/3 김보민<br />'+
            '1.타이틀 및 문구수정<br /><br />'+
            '12/7 장지현<br />'+
            '1.타이틀 수정'

    },
    {
        'appoint':'',
        'id':'CMYMCP101-2',
        'class':'CMYMCP101',
        '1depth':'내자산',
        'page-name':'[필수] 개인(신용)정보 수집ㆍ이용 동의서',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-18',
        'end-date':'2021-10-19',
        'progress':'100',
        'url':'/views/as/CMYMCP101-2.html',
        'update':'2021-12-07',
        'memo':
            '10/18<br />'+
            '1.신규<br /><br />'+
            '10/19 장지현<br />'+
            '1.CMYMCP108 에 약관 일부 적용<br />'+
            '제플린 : '+
            '<a href=\"http://zpl.io/bLJWYBd\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/bLJWYBd</a><br /><br />'+
            '10//27 조승모<br />'+
            '1.문구 변경 및 css 수정<br />'+
            '2.동의 타이틀 strong 태그 위치 수정<br /><br />'+
            '11/22 조승모<br />'+
            '1.수집이용목적, 보유 및 이용 기간 안의 내용을 파란색 글씨로 변경<br /><br />'+
            '12/2 김현기<br />'+
            '1.요소명 변경 (dt, dd 상단 div를 dl로)<br /><br />'+
            '12/3 김보민<br />'+
            '1.타이틀 및 문구수정<br /><br />'+
            '12/7 장지현<br />'+
            '1.타이틀 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP101-3',
        'class':'CMYMCP101',
        '1depth':'내자산',
        'page-name':'[필수] 개인(신용)정보 수집ㆍ이용 동의서(내자산)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-18',
        'end-date':'2021-10-19',
        'progress':'100',
        'url':'/views/as/CMYMCP101-3.html',
        'update':'2021-12-07',
        'memo':
            '10/18<br />'+
            '1.신규<br /><br />'+
            '10/19 장지현<br />'+
            '1.CMYMCP108 에 약관 일부 적용<br />'+
            '제플린 : '+
            '<a href=\"http://zpl.io/2jdXpOQ\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/2jdXpOQ</a><br /><br />'+
            '10//27 조승모<br />'+
            '1.문구 변경 및 css 수정<br />'+
            '2.동의 타이틀 strong 태그 위치 수정<br /><br />'+
            '11/22 조승모<br />'+
            '1.수집이용목적, 보유 및 이용 기간 안의 내용을 파란색 글씨로 변경<br /><br />'+
            '11/25 장지현<br />'+
            '1.약관 내용 수정<br />'+
            '2.헤더 타이틀 수정 \"[필수] 개인(신용)정보 수집·이용 동의서(내자산) → [필수] 개인(신용)정보 수집·이용 동의서(내자산)\"<br /><br />'+
            '12/2 김현기<br />'+
            '1.요소명 변경 (dt, dd 상단 div를 dl로)<br /><br />'+
            '12/3 김보민<br />'+
            '1.타이틀 및 문구수정<br /><br />'+
            '12/7 장지현<br />'+
            '1.타이틀 수정'
            
    },
    {
        'appoint':'',
        'id':'CMYMCP101-4-1',
        'class':'CMYMCP101',
        '1depth':'내자산',
        'page-name':'[선택] 개인(신용)정보 수집ㆍ이용 동의서(내차구매/차테크)요약동의서',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-18',
        'end-date':'2021-10-19',
        'progress':'100',
        'url':'/views/as/CMYMCP101-4-1.html',
        'update':'2021-12-07',
        'memo':
            '\'CMYMCP366\'로 콘텐츠 내용만 넘기기<br /><br />'+
            '10/18<br />'+
            '1.신규<br /><br />'+
            '10/19 장지현<br />'+
            '1.CMYMCP108 에 약관 일부 적용<br />'+
            '제플린 : '+
            '<a href=\"http://zpl.io/V0NYwgo\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/V0NYwgo</a><br /><br />'+
            '10//27 조승모<br />'+
            '1.문구 변경 및 css 수정<br />'+
            '2.동의 타이틀 strong 태그 위치 수정<br /><br />'+
            '11/22 조승모<br />'+
            '1.수집이용목적, 보유 및 이용 기간 안의 내용을 파란색 글씨로 변경<br /><br />'+
            '11/25 장지현<br />'+
            '1.약관 내용 수정 <br />'+
            '* QR코드, 화살표 이미지 추후 교체 예정 (이미지만 덮어씌울 수 있께 퍼블)<br />'+
            '2.헤더 타이틀 수정 \"[선택] 개인(신용)정보 수집ㆍ이용 동의서(마이데이터 부수/겸영 서비스)_요약동의서 → [선택] 개인(신용)정보 수집·이용 동의서(내차구매,차테크)_요약동의서\"<br /><br />'+
            '12/1 장지현<br />'+
            '1. 동의 동급바 화살표 위치 수정<br />'+
            'QR코드 이미지교체<br />'+
            '보유 및 이용기간 문구 수정<br />'+
            '하단에 다소안심 아이콘 추가<br /><br />'+
            '12/2 김현기<br />'+
            '1.요소명 변경 (dt, dd 상단 div를 dl로)<br /><br />'+
            '12/3 김보민<br />'+
            '1.타이틀 및 문구수정<br /><br />'+
            '12/7 장지현<br />'+
            '1.타이틀 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP101-4-2',
        'class':'CMYMCP101',
        '1depth':'내자산',
        'page-name':'[선택] 개인(신용)정보 수집·이용 동의서(내차구매/차테크)상세동의서',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-18',
        'end-date':'2021-10-19',
        'progress':'100',
        'url':'/views/as/CMYMCP101-4-2.html',
        'update':'2021-12-07',
        'memo':
            '\'CMYMCP367\'로 콘텐츠 내용만 넘기기<br /><br />'+
            '10/18<br />'+
            '1.신규<br /><br />'+
            '10/19 장지현<br />'+
            '1.CMYMCP108 에 약관 일부 적용<br />'+
            '제플린 : '+
            '<a href=\"http://zpl.io/beGPxzW\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/beGPxzW</a><br />'+
            '* 수집·이용 항목은 CMYMCP109_03 내용과 동일<br /><br />'+
            '10//27 조승모<br />'+
            '1.문구 변경 및 css 수정<br />'+
            '2.서비스 이용 동의 목록 =&gt; 마이데이터 부수/겸영 서비스에 대한 동의 항목만 볼드처리 되어있음.<br />'+
            '3.동의 타이틀 strong 태그 위치 수정<br /><br />'+
            '11/1 조승모 [결함처리]<br />'+
            '1.부수/겸영 서비스 상세동의서 오타 수정<br />'+
            '- 통신 &gt; 통신 계약 목록<br />'+
            '계ㅖ약관리번호 → 계약관리번호<br />'+
            '2.동의서 내용 볼드처리 부분(타이틀 제외, ex 수집·이용 목적 타이틀은 검은색 유지, 내용만 파란색으로 구분) 색상은 전송요구 동의서와 같은 파란색 적용<br /><br />'+
            '11/22 조승모<br />'+
            '1.수집이용목적, 보유 및 이용 기간 안의 내용을 파란색 글씨로 변경<br /><br />'+
            '11/25 장지현<br />'+
            '1.약관 내용 수정<br />'+
            '* QR코드, 화살표 이미지 추후 교체 예정 (이미지만 덮어씌울 수 있께 퍼블)<br />'+
            '2.헤더 타이틀 수정 \"[선택] 개인(신용)정보 수집ㆍ이용 동의서(마이데이터 부수/겸영 서비스)_상세동의서 → [선택] 개인(신용)정보 수집·이용 동의서(내차구매,차테크)_상세동의서\"<br /><br />'+
            '12/1 장지현<br />'+
            '1. 동의 동급바 화살표 위치 수정<br />'+
            'QR코드 이미지교체<br />'+
            '보유 및 이용기간 문구 수정<br />'+
            '하단에 다소안심 아이콘 추가<br /><br />'+
            '12/2 김현기<br />'+
            '1.요소명 변경 (dt, dd 상단 div를 dl로)<br /><br />'+
            '12/3 김보민<br />'+
            '1.타이틀 및 문구수정<br /><br />'+
            '12/7 장지현<br />'+
            '1.타이틀 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP101-5',
        'class':'CMYMCP101',
        '1depth':'내자산',
        'page-name':'[선택] 개인(신용)정보 수집ㆍ이용 동의서(마이데이터 관련 상품 및 서비스 안내)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-18',
        'end-date':'2021-10-19',
        'progress':'100',
        'url':'/views/as/CMYMCP101-5.html',
        'update':'2021-12-07',
        'memo':
            '10/18<br />'+
            '1.신규<br /><br />'+
            '10/19 장지현<br />'+
            '1.CMYMCP108 에 약관 일부 적용<br />'+
            '제플린 : '+
            '<a href=\"http://zpl.io/VOEgXzY\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/VOEgXzY</a><br /><br />'+
            '10//27 조승모<br />'+
            '1.문구 변경 및 css 수정<br />'+
            '2.동의 타이틀 strong 태그 위치 수정<br /><br />'+
            '11/1 조승모 [결함처리]<br />'+
            '1.수집·이용 목적의 내용은 볼드처리 및 파란색으로 변경<br />'+
            '2.하단 주의 문구(상기 내용에 동의하시는 경우 -> (생략)) 볼드처리<br /><br />'+
            '11/22 조승모<br />'+
            '1.수집이용목적, 보유 및 이용 기간 안의 내용을 파란색 글씨로 변경<br /><br />'+
            '11/25 장지현<br />'+
            '1.약관 내용 수정<br /><br />'+
            '12/2 김현기<br />'+
            '1.요소명 변경 (dt, dd 상단 div를 dl로)<br /><br />'+
            '12/3 김보민<br />'+
            '1.타이틀 및 문구수정<br /><br />'+
            '12/7 장지현<br />'+
            '1.타이틀 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP101-6',
        'class':'CMYMCP101',
        '1depth':'내자산',
        'page-name':'개인정보처리방침',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-11-22',
        'end-date':'2021-11-22',
        'progress':'100',
        'url':'/views/as/CMYMCP101-6.html',
        'update':'2021-12-03',
        'memo':
            '11/22 장지현<br />'+
            '1.신규<br /><br />'+
            '11/26 김현기<br />'+
            '1.class속성의 class명 추가 또는 대체<br /><br />'+
            '12/3 김보민<br />'+
            '1.타이틀 및 문구수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP101-7-1',
        'class':'CMYMCP101',
        '1depth':'내자산',
        'page-name':'[선택] 개인신용정보수집,이용,제공 동의서(KB마이데이터통합분석)요약동의서',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-12-02',
        'end-date':'2021-12-02',
        'progress':'100',
        'url':'/views/as/CMYMCP101-7-1.html',
        'update':'2021-12-07',
        'memo':
            '12/2 장지현<br />'+
            '1.신규<br />'+
            '제플린 : '+
            '<a href=\"http://zpl.io/VkP9g4v\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/VkP9g4v</a><br /><br />'+
            '12/3 김보민<br />'+
            '1.타이틀 및 문구수정<br /><br />'+
            '12/7 장지현<br />'+
            '1.타이틀 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP101-7-2',
        'class':'CMYMCP101',
        '1depth':'내자산',
        'page-name':'[선택] 개인신용정보수집,이용,제공 동의서(KB마이데이터통합분석)상세동의서',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-12-02',
        'end-date':'2021-12-02',
        'progress':'100',
        'url':'/views/as/CMYMCP101-7-2.html',
        'update':'2021-12-07',
        'memo':
            '12/2 장지현<br />'+
            '1.신규<br /><br />'+
            '12/3 김보민<br />'+
            '1.타이틀 및 문구수정<br /><br />'+
            '12/7 장지현<br />'+
            '1.타이틀 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP113',
        'class':'CMYMCP113',
        '1depth':'내자산',
        'page-name':'상품 서비스 안내수단 선택(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-06',
        'end-date':'2021-10-06',
        'progress':'100',
        'url':'/views/as/CMYMCP113.html',
        'update':'2021-10-06',
        'memo':
            '10/6 장지현<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMCP102',
        'class':'CMYMCP102',
        '1depth':'내자산',
        'page-name':'내자산서비스 이용안내 : 정회원(CI 미존재)',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/as/CMYMCP102.html',
        'update':'2021-06-15',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMCP103',
        'class':'CMYMCP103',
        '1depth':'내자산',
        'page-name':'내자산서비스 이용안내 : 준회원',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/as/CMYMCP103.html',
        'update':'2021-06-16',
        'memo':
            '6/16 장지현<br />'+
            '1.문구수정 - KB차차차 회원으로 → KB차차차 정회원으로'
    },
    {
        'appoint':'',
        'id':'공통',
        'class':'공통',
        '1depth':'내자산',
        'page-name':'휴대폰 본인인증(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'99',
        'url':'/views/as/공통.html',
        'update':'2021-06-18',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMCP104',
        'class':'CMYMCP104',
        '1depth':'내자산',
        'page-name':'서비스 이용불가 안내 : 19세미만',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/as/CMYMCP104.html',
        'update':'2021-07-27',
        'memo':
            '7/27 김보민<br />'+
            '1.문구 변경'
    },
    {
        'appoint':'',
        'id':'CMYMCP110',
        'class':'CMYMCP110',
        '1depth':'내자산',
        'page-name':'TOP50 한번에 연결 안내(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-08-18',
        'end-date':'2021-08-18',
        'progress':'100',
        'url':'/views/as/CMYMCP110.html',
        'update':'2021-08-18',
        'memo':
            '8/18 김민지<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMCP111',
        'class':'CMYMCP111',
        '1depth':'내자산',
        'page-name':'서비스 재가입 불가 안내',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-08-18',
        'end-date':'2021-08-18',
        'progress':'100',
        'url':'/views/as/CMYMCP111.html',
        'update':'2021-08-18',
        'memo':
            '8/18 김민지<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMCP105',
        'class':'CMYMCP105',
        '1depth':'내자산',
        'page-name':'마이데이터 가입현황 안내(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/as/CMYMCP105.html',
        'update':'2021-08-18',
        'memo':
            '6/16 김민지<br />'+
            '1.아이콘 삭제, 테이블 디자인으로 변경<br /><br />'+
            '7/20 김보민<br />'+
            '1.텍스트 16R -&gt; 18B 변경<br />'+
            '2.테이블 상단 여백 : 16으로 변경<br /><br />'+
            '7/27 김보민<br />'+
            '1.문구 추가<br />'+
            '2.텍스트 18B ->16R 변경<br /><br />'+
            '8/18 김민지 <br />'+
            '페이지 수정<br /><br />'+
            '8/20 김민지<br />'+
            '콘텐츠 추가'
    },
    {
        'appoint':'',
        'id':'CMYMCP106',
        'class':'CMYMCP106',
        '1depth':'내자산',
        'page-name':'인증방식 선택',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/as/CMYMCP106.html',
        'update':'2021-08-24',
        'memo':
            '6/15 김민지<br />'+
            '1.상단 문구와 컨텐츠 사이 여백32px(공통)<br />'+
            '2.타이틀 문구에 마침표 추가(공통)<br />'+
            '3.안내문구 \"잠깐! 진행 전 확인해 주세요\" 마침표 추가(공통)<br />'+
            '4.문구수정 - 공동인증서 저장은  → 공동인증서 복사는<br /><br />'+
            '6/23 김보민<br />'+
            '1.상단 [로케이션] 추가<br /><br />'+
            '6/25 김보민<br />'+
            '1.상단[로케이션]은 통합인증에서만 표출, 개별인증일때는 삭제<br /><br />'+
            '6/30 김보민<br />'+
            '1.[로케이션] 수정<br /><br />'+
            '8/18 김민지<br />'+
            '하단 공지사항 파란색 문구 수정<br /><br />'+
            '8/23 김민지<br />'+
            '하단 잠깐! 진행 전 확인해 주세요. &gt; 파란색 문구 &gt; \"공동인증서 복사는 [전체메뉴 > 인증서 관리] 에서 가능합니다.\"로 변경<br /><br />'+
            '8/24 김민지<br />'+
            '하단 잠깐! 진행 전 확인해 주세요. &gt; 파란색 문구 &gt; \"공동인증서 복사는 [전체메뉴 > 공동인증서 관리] 에서 가능합니다.\"로 변경'
    },
    {
        'appoint':'',
        'id':'CMYMCP131',
        'class':'CMYMCP131',
        '1depth':'내자산',
        'page-name':'통합인증/전자서명 동의(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':' ',
        'progress':'1',
        'url':'/views/as/CMYMCP101.html',
        'update':'2021-06-23',
        'memo':
            '6/23 김보민<br />'+
            '1.화면 삭제 -&gt; CMYMCP101 화면과 동일'
    },
    {
        'appoint':'',
        'id':'CMYMCP132',
        'class':'CMYMCP132',
        '1depth':'내자산',
        'page-name':'정보제공기관 선택(통합인증용) : 기관 목록',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/as/CMYMCP132.html',
        'update':'2021-10-13',
        'memo':
            '6/15 김민지<br />'+
            '1.플루팅 버튼 이미지 - 교체 요청<br />'+
            '2.플루팅 버튼 숫자 뱃지 - 디폴트 사이즈 16x16으로 수정<br />'+
            '3.타이틀 문구에 마침표 추가<br /><br />'+
            '6/23 김보민<br />'+
            '1.상단 [로케이션] 추가<br /><br />'+
            '6/30 김보민<br />'+
            '1.[로케이션] 수정<br /><br />'+
            '7/15 김보민<br />'+
            '1.[연결완료] 플래그 ui 변경 <br /><br />'+
            '8/18 김민지 <br />'+
            '1.타이틀 문구 수정<br /><br />'+
            '9/30 김민지 : 결함조치<br />'+
            '1.검색문구 입력 &gt; 검색버튼 클릭 &gt; 오른쪽 엑스 표시 사라짐. 엑스버튼 유지되어야함.<br />'+
            'CSS 수정사항 .filled .icon-close { display:none; } 삭제<br /><br />'+
            '2.전자금융 하단 여백 삭제<br />'+
            '스크립트 삭제 조치<br /><br />'+
            '10/13<br />'+
            '결과화면 CMYMCP133포함 내용으로 해당화면에서 결과없음 내용 삭제<br /><br />'+
            '10/18<br />'+
            '스크립트 복구 필요 : 탭 앵커에 대한 하단 높이 설정'
    },
    {
        'appoint':'',
        'id':'CMYMCP132-1',
        'class':'CMYMCP132-1',
        '1depth':'내자산',
        'page-name':'정보제공기관 선택(통합인증용) : 기관 목록',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/as/CMYMCP132-1.html',
        'update':'2021-11-19',
        'memo':
            '11/19 장지현<br />'+
            '1. 선택기관없음 케이스 추가'
    },
    {
        'appoint':'',
        'id':'CMYMCP133',
        'class':'CMYMCP133',
        '1depth':'내자산',
        'page-name':'정보제공기관 선택(통합인증용) : 검색',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/as/CMYMCP133.html',
        'update':'2021-10-13',
        'memo':
            '6/15 김민지<br />'+
            '1.타이틀 문구에 마침표 추가<br /><br />'+
            '6/23 김보민<br />'+
            '1.상단 [로케이션] 추가<br /><br />'+
            '6/30 김보민<br />'+
            '1.[로케이션] 수정<br /><br />'+
            '7/27 김보민<br />'+
            '1.문구 수정<br />'+
            '조회된 데이터가 없습니다. -&gt; 검색된 기관이 없습니다.<br /><br />'+
            '8/18 김민지<br />'+
            '1. 타이틀 문구 수정<br /><br />'+
            '10/12 김민지<br />'+
            '1. 검색된 기관이 없습니다 수정 - 전체 업권 타이틀 노출<br />'+
            '제플린 확인<br />'+
            '<a href=\"http://zpl.io/beykP9z\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/beykP9z</a><br />'+
            '<a href=\"http://zpl.io/aXqdvOP\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/aXqdvOP</a><br /><br />'+
            '10/12<br />'+
            '스크립트 복구 필요 : 탭 앵커에 대한 하단 높이 설정'
    },
    {
        'appoint':'',
        'id':'공통',
        'class':'공통',
        '1depth':'내자산',
        'page-name':'공동인증서 선택',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':' ',
        'end-date':' ',
        'progress':'99',
        'url':'/views/as/공통.html',
        'update':' ',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMCP135',
        'class':'CMYMCP135',
        '1depth':'내자산',
        'page-name':'전송요구 목록 확인 : 자산목록',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'1',
        'url':'/views/as/CMYMCP135.html',
        'update':'2021-07-27',
        'memo':
            '6/15 김민지<br />'+
            '1.타이틀 문구에 마침표 추가<br />'+
            '2.테이블 th width:32% 으로 수정<br /><br />'+
            '6/23 김보민<br />'+
            '1.상단 [로케이션] 추가<br /><br />'+
            '6/30 김보민<br />'+
            '1.[로케이션] 수정<br /><br />'+
            '7/27 김보민<br />'+
            '1.화면 삭제(퍼블 백업 필요)'
    },
    {
        'appoint':'',
        'id':'공통',
        'class':'공통',
        '1depth':'내자산',
        'page-name':'공동인증서 비밀번호 입력',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'',
        'end-date':'',
        'progress':'99',
        'url':'/views/as/공통.html',
        'update':'',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMCP051',
        'class':'CMYMCP051',
        '1depth':'내자산',
        'page-name':'진행중',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/as/CMYMCP051.html',
        'update':'2021-11-30',
        'memo':
            '6/15 김민지<br />'+
            '1.하단 문구 \"잠시만 기다려 주세요 60%\" 삭제<br />'+
            '2.\"진행중입니다\" 문구에 마침표 추가<br /><br />'+
            '7/21 장지현<br />'+
            '1.자산연결 로딩 이미지 수정, 인터랙션 요청<br /><br />'+
            '11/30 장지현<br />'+
            '1.로딩 이미지 하단 이미지로 교체<br />'+
            '<a href=\"/views/sample/loading-car.html\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">/views/sample/loading-car.html</a><br />'+
            '제플린 : <a href=\"http://zpl.io/a8Q7exE\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/a8Q7exE</a>'

    },
    {
        'appoint':'',
        'id':'CMYMCP136',
        'class':'CMYMCP136',
        '1depth':'내자산',
        'page-name':'전송요구(자산목록) 완료',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/as/CMYMCP136.html',
        'update':'2021-07-27',
        'memo':
            '6/15 김민지<br />'+
            '1.타이틀 문구에 마침표 추가(공통)<br /><br />'+
            '6/23 김보민<br />'+
            '1.상단 [로케이션] 추가<br /><br />'+
            '6/30 김보민<br />'+
            '1.[로케이션] 수정<br /><br />'+
            '7/14 장지현<br />'+
            '1.ui 수정<br /><br />'+
            '7/27 김보민<br />'+
            '1.리스트 내용 중 [에러 메시지] 추가 <br /><br />'+
            '8/18 김민지 <br />'+
            '1.타이틀 안내 문구 수정<br />'+
            '2.추가 케이스 추가<br /><br />'+
            '8/26 장지현<br />'+
            '1.띄어쓰기 수정<br />'+
            '9/14 체크아이콘 인터렉션 적용'
    },
    {
        'appoint':'',
        'id':'CMYMCP137',
        'class':'CMYMCP137',
        '1depth':'내자산',
        'page-name':'전송요구 오류 안내',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/as/CMYMCP137.html',
        'update':'2021-07-27',
        'memo':
            '6/15 김민지<br />'+
            '1.타이틀 문구에 마침표 추가(공통)<br /><br />'+
            '6/23 김보민<br />'+
            '1.상단 [로케이션] 추가<br /><br />'+
            '6/30 김보민<br />'+
            '1.[로케이션] 수정<br /><br />'+
            '7/27 김보민<br />'+
            '1.리스트 내용 중 에러코드 -&gt; [에러 메시지]로 변경<br /><br />'+
            '9/13 장지현<br />'+
            '1.문구 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP138',
        'class':'CMYMCP138',
        '1depth':'내자산',
        'page-name':'전송요구 약관(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'1',
        'url':'/views/as/CMYMCP138.html',
        'update':'2021-06-23',
        'memo':
            '6/23 김보민<br />'+
            '1.화면 삭제 -&gt; CMYMCP101 화면과 동일'
    },
    {
        'appoint':'',
        'id':'CMYMCP139',
        'class':'CMYMCP139',
        '1depth':'내자산',
        'page-name':'개인신용정보 선택',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/as/CMYMCP139.html',
        'update':'2021-10-28',
        'memo':
            '6/15 김민지<br />'+
            '1.툴팁아이콘 - 16 -&gt; 24로 변경<br />'+
            '2.툴팁상세 - 배경 쉐도우 추가(WSG참고:공통)<br />'+
            '3.아코디언 펼쳤을떄 하단여백 20px-&gt; 24px로 수정 <br />'+
            '4.타이틀 문구에 마침표 추가(공통)<br /><br />'+
            '6/23 김보민<br />'+
            '1.상단 [로케이션] 추가<br /><br />'+
            '6/29 김보민<br />'+
            '1.리스트 아코디언 : [외화다통화 예금] 2개 추가<br /><br />'+
            '6/30 김보민<br />'+
            '1.[로케이션] 수정<br /><br />'+
            '7/14 장지현<br />'+
            '1.ui 수정/기관로고 삭제 후 체크박스 추가<br /><br />'+
            '7/15 김보민<br />'+
            '1.[연결완료] 플래그 ui 변경<br />'+
            '2.버튼 [연결0/12] -&gt; [다음] 으로 변경<br />'+
            '3.전체선택 우측으로 (선택한계좌수/전체계좌수) (0/23) 추가 <br /><br />'+
            '8/18 김민지<br />'+
            '1.타이틀 문구 수정<br />'+
            '2.튤팁 타이틀 및 내용 수정<br />'+
            '3.카드 목록 수정 (청구, 결제 정보 및 리볼빙 정보(여부) / 대출(단기대출/장기대출) 정보<br /><br />'+
            '10/28 조승모<br />'+
            '1.테스트결함 -&gt; 문구수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP140',
        'class':'CMYMCP140',
        '1depth':'내자산',
        'page-name':'선택 개인신용정보 확인',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'1',
        'url':'/views/as/CMYMCP140.html',
        'update':'2021-07-27',
        'memo':
            '6/15 김민지<br />'+
            '1.아코디언 펼쳤을떄 하단여백 20px -&gt; 24px로 수정<br />'+
            '2.타이틀 문구에 마침표 추가(공통)<br /><br />'+
            '6/23 김보민<br />'+
            '1.상단 [로케이션] 추가<br /><br />'+
            '6/30 김보민<br />'+
            '1.[로케이션] 수정<br /><br />'+
            '7/14 장지현<br />'+
            '1.ui 수정<br /><br />'+
            '7/27 김보민<br />'+
            '1.화면 삭제(퍼블 백업 필요)'
    },
    {
        'appoint':'',
        'id':'CMYMCP141',
        'class':'CMYMCP141',
        '1depth':'내자산',
        'page-name':'기관별 정기전송 여부 설정',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'1',
        'url':'/views/as/CMYMCP141.html',
        'update':'2021-07-27',
        'memo':
            '6/15 김민지<br />'+
            '1.타이틀 문구에 마침표 추가(공통)<br /><br />'+
            '6/23 김보민<br />'+
            '1.상단 [로케이션] 추가<br /><br />'+
            '6/30 김보민<br />'+
            '1.[로케이션] 수정<br /><br />'+
            '7/27 김보민<br />'+
            '1.화면 삭제(퍼블 백업 필요)'
    },
    {
        'appoint':'',
        'id':'CMYMCP142',
        'class':'CMYMCP142',
        '1depth':'내자산',
        'page-name':'정기전송 설정(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'1',
        'url':'/views/as/CMYMCP142.html',
        'update':'2021-07-27',
        'memo':
            '7/12 김보민<br />'+
            '1.타이틀 수정<br /><br />'+
            '7/27 김보민<br />'+
            '1.화면 삭제(퍼블 백업 필요)'
    },
    {   'appoint':'',
        'id':'CMYMCP143',
        'class':'CMYMCP143',
        '1depth':'내자산',
        'page-name':'정기전송 주기 선택(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'1',
        'url':'/views/as/CMYMCP143.html',
        'update':'2021-07-27',
        'memo':
            '6/15 김민지<br />'+
            '1.헤더 - Back 버튼 추가 / 닫기버튼 삭제<br /><br />'+
            '7/27 김보민<br />'+
            '1.화면 삭제(퍼블 백업 필요)'
    },
    {
        'appoint':'',
        'id':'CMYMCP144',
        'class':'CMYMCP144',
        '1depth':'내자산',
        'page-name':'전송요구 내역 확인(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-09',
        'progress':'1',
        'url':'/views/as/CMYMCP144.html',
        'update':'2021-07-27',
        'memo':
            '6/15 김민지<br />'+
            '1.보유기간 셀렉트박스 - 기간 선택 후 텍스트 겹침<br />'+
            '2.테이블 th width:32% 으로 수정<br /><br />'+
            '7/27 김보민<br />'+
            '1.화면 삭제(퍼블 백업 필요)'
    },
    {
        'appoint':'',
        'id':'공통',
        'class':'공통',
        '1depth':'내자산',
        'page-name':'공동인증서 비밀번호 입력',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':' ',
        'end-date':' ',
        'progress':'99',
        'url':'/views/as/공통.html',
        'update':'2021-06-18',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMCP051',
        'class':'CMYMCP051',
        '1depth':'내자산',
        'page-name':'진행중',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-07',
        'end-date':'2021-06-18',
        'progress':'1',
        'url':'/views/as/CMYMCP051.html',
        'update':'2021-11-30',
        'memo':
            '6/15 김민지<br />'+
            '1.하단 문구 \"잠시만 기다려 주세요 60%\" 삭제 <br />'+
            '2.\"진행중입니다\" 문구에 마침표 추가<br /><br />'+
            '11/30 김현기<br />'+
            '1.중복아이디 리스트 삭제' 
    },
    {
        'appoint':'',
        'id':'CMYMCP054',
        'class':'CMYMCP054',
        '1depth':'내자산',
        'page-name':'연결 실패 안내(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'1',
        'url':'/views/as/CMYMCP054.html',
        'update':'2021-11-03',
        'memo':
            '7/27 김보민<br />'+
            '1.내용 중 [에러 메시지] 추가<br /><br />'+
            '11/3 김보민<br />'+
            '1.화면 삭제(CMYMCP145로 병합)'
    },
    {
        'appoint':'',
        'id':'CMYMCP145',
        'class':'CMYMCP145',
        '1depth':'내자산',
        'page-name':'자산연결 완료 : 통합인증',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/as/CMYMCP145.html',
        'update':'2021-11-03',
        'memo':
            '6/23 김보민<br />'+
            '1.상단 [로케이션] 추가<br /><br />'+
            '6/30 김보민<br />'+
            '1.[로케이션] 수정<br /><br />'+
            '7/14 장지현<br />'+
            '1 ui 수정/연결일시 삭제<br /><br />'+
            '7/16 김보민<br />'+
            '1.기관 아이콘 옆 텍스트 굵기 regular<br />'+
            '2.[텍스트 버튼] 실패 의 굵기 regular<br /><br />'+
            '8/26 김민지<br />'+
            '1.타이틀 문구 수정 ( 자산연결이 완료되었습니다 > 상세정보 전송요구가 완료되었습니다.)<br /><br />'+
            '9/14 체크아이콘 인터렉션 적용<br /><br />'+
            '11/3 김보민<br />'+
            '1.UI 변경'
    },    
    {
        'appoint':'',
        'id':'CMYMCP146',
        'class':'CMYMCP146',
        '1depth':'내자산',
        'page-name':'연결 재시도 여부 확인(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/as/CMYMCP146.html',
        'update':'2021-07-27',
        'memo':
            '7/27 김보민<br />'+
            '1.문구 수정<br /><br />'+
            '10/18<br />'+
            '1.CSS수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP147',
        'class':'CMYMCP147',
        '1depth':'내자산',
        'page-name':'본인확인 동의(개인정보 이용 동의)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-06-24',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/as/CMYMCP147.html',
        'update':'2021-10-06',
        'memo':
            '6/23 김보민<br />'+
            '1.신규<br /><br />'+
            '7/27 김보민<br />'+
            '1.동의 항목 추가<br /><br />'+
            '8/18 김민지<br />'+
            '1. 타이틀 및 동의내용 변경<br /><br />'+
            '9/13 마크업 변경, form-checkbox와 txt-link 텍스트 분리<br /><br />'+
            '9/30 장지현<br />'+
            '1.약관 리스트 전체 변경<br /><br />'+
            '10/1 김보민<br />'+
            '1.약관 리스트 텍스트 재변경<br /><br />'+
            '10/6 장지현<br />'+
            '1.첫번째 약관 리스트 하단 문구로 변경 [필수] 가입상품 목록 전송요구서'
    },
    {
        'appoint':'',
        'id':'CMYMCP189',
        'class':'CMYMCP189',
        '1depth':'내자산',
        'page-name':'통합인증 자산연결취소',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-12-06',
        'end-date':'2021-12-06',
        'progress':'100',
        'url':'/views/as/CMYMCP189.html',
        'update':'2021-12-06',
        'memo':
            '12/6 장지현<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMCP171',
        'class':'CMYMCP171',
        '1depth':'내자산',
        'page-name':'정보제공기관 선택(개별인증용) : 기관 목록',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/as/CMYMCP171.html',
        'update':'2021-10-26',
        'memo':
            '6/23 김보민<br />'+
            '1.상단 [로케이션] 추가<br /><br />'+
            '6/25 김보민<br />'+
            '1.상단 [로케이션] 삭제<br /><br />'+
            '8/18 김민지<br />'+
            '1.상단 변경 ( 단계 / top 50기관 연결 버튼 추가 )<br />'+
            '2.타이틀 수정<br /><br />'+
            '10/26 박문영<br />'+
            '1.연결완료 마크업 및 스크롤탭 class 추가'

    },
    {
        'appoint':'',
        'id':'CMYMCP172',
        'class':'CMYMCP172',
        '1depth':'내자산',
        'page-name':'정보제공기관 선택(개별인증용) : 검색',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/as/CMYMCP171.html',
        'update':'2021-07-27',
        'memo':
            '\"CMYMCP171\"과 동일화면<br /><br />'+
            '6/23 김보민<br />'+
            '1.상단 [로케이션] 추가<br /><br />'+
            '6/25 김보민<br />'+
            '1.상단 [로케이션] 삭제<br /><br />'+
            '7/27 김보민<br />'+
            '1.문구 수정<br />'+
            '조회된 데이터가 없습니다. -&gt; 검색된 기관이 없습니다.<br /><br />'+
            '8/18 김민지<br />'+
            '1.상단 변경 (단계 / top 50기관 연결 버튼 추가)<br />'+
            '2.타이틀 수정'

    },
    {
        'appoint':'',
        'id':'CMYMCP173',
        'class':'CMYMCP173',
        '1depth':'내자산',
        'page-name':'자산연결 완료 : 개별인증',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'1',
        'url':'/views/as/CMYMCP173.html',
        'update':'2021-06-28',
        'memo':    
            '6/23 김보민<br />'+
            '1.상단 [로케이션] 추가<br /><br />'+
            '6/25 김보민<br />'+
            '1.화면 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP108',
        'class':'CMYMCP108',
        '1depth':'내자산',
        'page-name':'서비스이용동의_전체동의 상세(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-08-23',
        'end-date':'2021-08-23',
        'progress':'100',
        'url':'/views/as/CMYMCP186.html',
        'update':'2021-08-18',
        'memo':            
            '8/3 김보민<br />'+
            '1.신규<br /><br />'+
            '8/23<br />'+
            'CMYMCP186과 동일한 화면'
    },
    {
        'appoint':'',
        'id':'CMYMCP109',
        'class':'CMYMCP109',
        '1depth':'내자산',
        'page-name':'서비스이용동의_개별동의 상세(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-07-27',
        'end-date':'2021-07-27',
        'progress':'100',
        'url':'/views/as/CMYMCP109.html',
        'update':'2021-07-27',
        'memo':
            '7/27 김보민<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMCP114',
        'class':'CMYMCP114',
        '1depth':'내자산',
        'page-name':'개인(신용)정보 수집·이용 동의(마이데이터 부수/겸영 서비스)_요약동의서',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-12',
        'end-date':'2021-10-12',
        'progress':'100',
        'url':'/views/as/CMYMCP114.html',
        'update':'2021-12-03',
        'memo':
            '10/12 장지현<br />'+
            '1.신규<br /><br />'+
            '10/18<br />'+
            '1.CSS 수정<br />'+
            '.modal-header h3 { font-size:1.8rem; }<br /><br />'+
            '11/9 김현기<br />'+
            '1.bc-ddd 배경색 클래스 제거<br /><br />'+
            '12/3 김현기<br />'+
            '1. 요약동의서 약관 데이터 불러오는 영역 태그 변경'

    },
    {
        'appoint':'',
        'id':'CMYMCP112',
        'class':'CMYMCP112',
        '1depth':'내자산',
        'page-name':'개인(신용)정보 수집·이용 동의(마이데이터 부수/겸영 서비스)_상세동의서(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-06',
        'end-date':'2021-10-06',
        'progress':'100',
        'url':'/views/as/CMYMCP112.html',
        'update':'2021-11-09',
        'memo':
            '10/06 장지현<br />'+
            '1.신규<br /><br />'+
            '10/13 장지현<br />'+
            '1.하단 동의 버튼 삭제<br /><br />'+
            '10/18<br />'+
            '1.CSS 수정<br />'+
            '.modal-header h3 { font-size:1.8rem; }<br /><br />'+
            '11/9<br />'+
            '1.bc-dddddd 배경색 클래스 제거'
    },
    {
        'appoint':'',
        'id':'CMYMCP107',
        'class':'CMYMCP107',
        '1depth':'내자산',
        'page-name':'통합인증_인증수단 선택(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-07-27',
        'end-date':'2021-07-27',
        'progress':'100',
        'url':'/views/as/CMYMCP107.html',
        'update':'2021-07-27',
        'memo':
            '7/27 김보민<br />'+
            '1.신규<br /><br />'+
            '8/18 김민지<br />'+
            '1.페이지 이동<br />'+
            '이동 전 : CMYMCP106 직후<br />'+
            '이동 후 : CMYMCP147 직후<br /><br />'+
            '10/25 김보민<br />'+
            '1.아이콘 추가'
    },
    {
        'appoint':'',
        'id':'CMYMCP107-1',
        'class':'CMYMCP107',
        '1depth':'내자산',
        'page-name':'사설인증서_인증완료 후 진행중 화면',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-11-17',
        'end-date':'2021-11-17',
        'progress':'100',
        'url':'/views/as/CMYMCP107-1.html',
        'update':'2021-11-17',
        'memo':
            '11/17 장지현<br />'+
            '1.신규<br />'+
            '제플린 : <a href=\"http://zpl.io/blnY7E5\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/blnY7E5</a>'
    },
    {
        'appoint':'',
        'id':'CMYMCP185',
        'class':'CMYMCP185',
        '1depth':'내자산',
        'page-name':'통합인증_인증수단 선택(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-08-20',
        'end-date':'2021-08-20',
        'progress':'100',
        'url':'/views/as/CMYMCP185.html',
        'update':'2021-08-23',
        'memo':
            '8/20 김민지<br />'+
            '1.신규<br /><br />'+
            '9/14<br />'+
            '1.동의 박스 체크아이콘과 텍스트링크 분리'
    },
    {
        'appoint':'',
        'id':'CMYMCP186',
        'class':'CMYMCP186',
        '1depth':'내자산',
        'page-name':'통합인증_인증수단 선택(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-08-23',
        'end-date':'2021-08-23',
        'progress':'100',
        'url':'/views/as/CMYMCP186.html',
        'update':'2021-09-24',
        'memo':
            '팝업 slick 연결 시 $(\'.agree-pop-slide\').get(0).slick.setPosition(); 또는 $(\'.agree-pop-slide\').slick(\'setPosition\'); 스크립트 실행<br /><br />' +
            '8/20 김민지<br />'+
            '1.신규<br /><br />'+
            '9/24<br />'+
            'slick내 아이프레임 형태 overflow-y:hidden;<br />'+
            'slick내 태그 콘텐츠 overflow-y:auto; (class : agree-pop-con2)<br />'+
            '스크롤 타입 분리CMYMCP186과 동일한 화면'
    },
    {
        'appoint':'',
        'id':'CMYMCP187',
        'class':'CMYMCP187',
        '1depth':'내자산',
        'page-name':'인증서 본인확인서비스 이용약관(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-08-23',
        'end-date':'2021-08-20',
        'progress':'100',
        'url':'/views/as/CMYMCP187.html',
        'update':'2021-08-20',
        'memo':
            '8/20 김민지<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMCP187-1',
        'class':'CMYMCP187',
        '1depth':'내자산',
        'page-name':'개인정보 처리 동의(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-08-23',
        'end-date':'2021-08-20',
        'progress':'100',
        'url':'/views/as/CMYMCP187-1.html',
        'update':'2021-08-20',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMCP187-2',
        'class':'CMYMCP187',
        '1depth':'내자산',
        'page-name':'고유식별정보 수집이용 및 위탁 동의(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-08-23',
        'end-date':'2021-08-20',
        'progress':'100',
        'url':'/views/as/CMYMCP187-2.html',
        'update':'2021-08-20',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMCP148',
        'class':'CMYMCP148',
        '1depth':'내자산',
        'page-name':'통합인증_자산목록 전송요구서(팝업) : 개별동의',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-07-27',
        'end-date':'2021-07-27',
        'progress':'100',
        'url':'/views/as/CMYMCP148.html',
        'update':'2021-10-06',
        'memo':
            '7/27 김보민<br />'+
            '1.신규<br /><br />'+
            '8/18 김민지<br />'+
            '1.타이틀 변경<br />'+
            '2.표수정<br />'+
            '3.리스트 &gt 전송을 요구하는 목적 내용 수정<br /><br />'+
            '9/30 장지현<br />'+
            '1.전송을 요구하는 개인신용정보 테이블 내 tr 순서 변경<br /><br />'+
            '10/1 김보민<br />'+
            '1.타이틀바 텍스트 변경<br /><br />'+
            '10/6 장지현<br />'+
            '1. 헤더 타이틀 하단 문구로 변경 가입상품 목록 전송요구서'
    },
    {
        'appoint':'',
        'id':'CMYMCP149',
        'class':'CMYMCP149',
        '1depth':'내자산',
        'page-name':'통합인증_개인(신용)정보 수집·이용 동의서-자산목록 조회(팝업) : 개별동의',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-07-27',
        'end-date':'2021-07-27',
        'progress':'100',
        'url':'/views/as/CMYMCP149.html',
        'update':'2021-11-17',
        'memo':
            '7/27 김보민<br />'+
            '1.신규<br /><br />'+
            '8/18 김민지<br />'+
            '1.타이틀 변경<br />'+
            '2.내용전반 변경<br /><br />'+
            '9/30 장지현<br />'+
            '1.헤더타이틀 변경<br />'+
            '2.수집·이용 항목 테이블 내용 변경<br />'+
            '3.맨하단 볼드밑줄 텍스트<br />'+
            '수집·이용 -&gt; 개인(신용)정보 수집·이용<br /><br />'+
            '10/1 장지현<br />'+
            '1.헤더타이틀 변경 (동의서가 동의로 변경됨) 개인(신용)정보 수집·이용 동의서(가입상품목록 조회) -&gt; 개인(신용)정보 수집·이용 동의(가입상품목록 조회)<br />'+
            '2.수집·이용 항목 테이블 내용 누락 금융투자 - 개인형 IRP 계좌 목록 추가<br /><br />'+
            '11/17 조승모<br />'+
            '1.약관 문구 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP150',
        'class':'CMYMCP150',
        '1depth':'내자산',
        'page-name':'통합인증_개인(신용)정보 제공 동의서(팝업) : 개별동의',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-07-27',
        'end-date':'2021-07-27',
        'progress':'100',
        'url':'/views/as/CMYMCP150.html',
        'update':'2021-11-17',
        'memo':
            '7/27 김보민<br />'+
            '1.신규<br /><br />'+
            '8/18 김민지<br />'+
            '1.리스트 &gt; 제공항목 내용 변경<br /><br />'+
            '8/20 김민지<br />'+
            '1.빨간색 글자 &gt; 파란색<br />'+
            '2.하단 제공항목 부분 디자인 변경<br /><br />'+
            '9/7 김민지<br />'+
            '1.하단 동의 부분 밑줄 문구 변경<br /><br />'+
            '9/30 장지현<br />'+
            '1. 헤더타이틀 변경<br />'+
            '2. 맨하단 볼드밑줄 텍스트<br />'+
            '제공 -&gt; 개인(신용)정보 제공<br /><br />'+
            '11/17 조승모<br />'+
            '1.약관 문구 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP116',
        'class':'CMYMCP116',
        '1depth':'내자산',
        'page-name':'통합인증_개인(신용)정보 제공 동의(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-06',
        'end-date':'2021-10-06',
        'progress':'100',
        'url':'/views/as/CMYMCP116.html',
        'update':'2021-11-17',
        'memo':
            '10/6 장지현<br />'+
            '1.신규<br /<br />'+
            '11/17 조승모<br />'+
            '1.약관 문구 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP151',
        'class':'CMYMCP151',
        '1depth':'내자산',
        'page-name':'통합인증_정기전송 여부 및 전송요구 기간 설정',
        'type':'page',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-07-27',
        'end-date':'2021-07-27',
        'progress':'100',
        'url':'/views/as/CMYMCP151.html',
        'update':'2021-09-16',
        'memo':
            '7/27 김보민<br />'+
            '1.신규<br />'+
            '[선택], [미선택], [날짜초과시]<br /><br />'+
            '8/20 김민지<br />'+
            '1.타이틀 변경<br />'+
            '2.하단 체크 문구 삭제<br /><br />'+
            '8/23 김민지<br />'+
            '1.하단 날짜 입력칸에 아이콘 확인<br /><br />'+
            '9/16 component _input.scss "2021-09-16" select 스타일 추가'
    },
    {
        'appoint':'',
        'id':'CMYMCP151-1',
        'class':'CMYMCP151-1',
        '1depth':'내자산',
        'page-name':'통합인증_정기전송 여부 및 전송요구 기간 설정(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-07-27',
        'end-date':'2021-07-27',
        'progress':'100',
        'url':'/views/as/CMYMCP151-1.html',
        'update':'2021-07-27',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMCP152',
        'class':'CMYMCP152',
        '1depth':'내자산',
        'page-name':'통합인증_전송요구(상세) 및 이용동의(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-07-27',
        'end-date':'2021-07-27',
        'progress':'100',
        'url':'/views/as/CMYMCP152.html',
        'update':'2021-10-06',
        'memo':    
            '7/27 김보민<br />'+
            '1.신규<br /><br />'+
            '8/18 김민지<br />'+
            '1.동의 내용 변경<br /><br />'+
            '9/13 마크업 변경, form-checkbox와 txt-link 텍스트 분리<br /><br />'+
            '9/30 장지현<br />'+
            '1.약관 리스트 변경<br /><br />'+
            '10/1 김보민<br />'+
            '1.약관 리스트 텍스트 재변경<br /><br />'+
            '10/6 장지현<br />'+
            '1.첫번째 약관 리스트 하단 문구로 변경 [필수] 상세정보 전송요구서'
    },
    {
        'appoint':'',
        'id':'CMYMCP153',
        'class':'CMYMCP153',
        '1depth':'내자산',
        'page-name':'통합인증_상세정보 전송요구서(팝업) : 개별동의',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-07-27',
        'end-date':'2021-07-27',
        'progress':'100',
        'url':'/views/as/CMYMCP153.html',
        'update':'2021-11-17',
        'memo':
            '7/27 김보민<br />'+
            '1.신규<br /><br />'+
            '8/18 김민지<br />'+
            '1.타이틀 변경<br />'+
            '2.내용 전반 변경<br /><br />'+
            '9/30 장지현<br />'+
            '1.약관 리스트 변경<br /><br />'+
            '10/1 장지현<br />'+
            '1.헤더 타이틀 변경 전송요구서(상세정보 전송) -&gt; 상세정보 전송요구서<br />'+
            '2.전송을 요구하는 개인신용정보 - 할부금융 내용 수정<br />'+
            '3.개인신용정보를 제공받는 자 ~ 전송요구의 종료시점(전송요구서의 유효기간)) 내용을 상세정보 전송요구 시 유의사항 하단으로 이동<br />'+
            '4.상세정보 전송요구 시 유의사항 텍스트 강조 볼드처리 컬러 - #222으로 변경<br /><br />'+
            '10/1 김보민<br />'+
            '1.타이틀바 텍스트 재변경<br /><br />'+
            '10/6 장지현<br />'+
            '1.헤더 타이틀 하단 문구로 변경 상세정보 전송요구서<br /><br />'+
            '10/28 조승모<br />'+
            '1.테스트 결함<br />'+
            '1) 동의서명 수정 : 상세정보 전송구서 -&gt; 상세정보 전송요구서 (10/26에 수정)<br />'+
            '2) 전송요구의 종료시점 표기형식 수정 : yyyy-mm-dd -&gt; yyyy.mm.dd<br />'+
            '3) 상세정보 전송요구 시 유의사항은 해당 업권 및 전송을 요구하는 개인신용정보 유형에 해당할 때만 나와야 함. (주석처리)<br /><br />'+
            '10/29 조승모<br />'+
            '1.결함조치 -&gt; 오기 수정<br /><br />'+           
            '11/17 장지현<br />'+
            '1.기능적합성 관련 수정사항<br /><br />'+
            '11/17 조승모<br />'+
            '1.약관 문구 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP154',
        'class':'CMYMCP154',
        '1depth':'내자산',
        'page-name':'통합인증_개인(신용)정보 수집·이용 동의서-상세정보 전송(팝업) : 개별동의',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-07-27',
        'end-date':'2021-07-27',
        'progress':'1',
        'url':'/views/as/CMYMCP154.html',
        'update':'2021-10-06',
        'memo':
            '7/27 김보민<br />'+
            '1.신규<br />'+
            '[바텀시트], [레이어팝업]<br /><br />'+
            '8/18 김민지<br />'+
            '1.내용 전반 변경<br /><br />'+
            '8/20 김민지<br />'+
            '1.빨간색 글자 &gt; 파란색<br />'+
            '2.테이블 디자인 변경<br /><br />'+
            '8/23 김민지<br />'+
            '파란색 글자 띄어쓰기 변경<br /><br />'+
            '9/1 김민지<br />'+
            '1.띄어쓰기 수정<br /><br />'+
            '10/6 장지현<br />'+
            '1. 페이지 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP154-1',
        'class':'CMYMCP154-1',
        '1depth':'내자산',
        'page-name':'통합인증_개인(신용)정보 수집·이용 동의서-상세정보 전송(팝업) : 개별동의',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-07-27',
        'end-date':'2021-07-27',
        'progress':'1',
        'url':'/views/as/CMYMCP154-1.html',
        'update':'2021-10-06',
        'memo':
            '10/6 장지현<br />'+
            '1.페이지 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP174',
        'class':'CMYMCP174',
        '1depth':'내자산',
        'page-name':'개별인증_수집·이용 및 제공 동의(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-07-27',
        'end-date':'2021-08-18',
        'progress':'100',
        'url':'/views/as/CMYMCP174.html',
        'update':'2021-10-06',
        'memo':
            '7/27 김보민<br />'+
            '1.신규<br /><br />'+
            '8/18 김민지<br />'+
            '체크리스트 내용변경<br /><br />'+
            '9/13 마크업 변경, form-checkbox와 txt-link 텍스트 분리<br /><br />'+
            '9/30 장지현<br />'+
            '1.약관 리스트 변경<br /><br />'+
            '10/6 장지현<br />'+
            '1.5번째 약관 리스트 띄어쓰기 수정 : 사업자등록 번호 -&gt; 사업자등록번호'
    },
    {
        'appoint':'',
        'id':'CMYMCP175',
        'class':'CMYMCP175',
        '1depth':'내자산',
        'page-name':'개별인증_개인(신용)정보 수집·이용 동의서-상세정보 전송(팝업) : 개별동의',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-07-27',
        'end-date':'2021-07-27',
        'progress':'1',
        'url':'/views/as/CMYMCP175.html',
        'update':'2021-10-06',
        'memo':
            '7/27 김보민<br />'+
            '1.신규<br />'+
            '[바텀시트], [레이어팝업]<br /><br />'+
            '8/18 김민지<br />'+
            '1.타이틀 변경<br />'+
            '2.내용 전반 변경<br /><br />'+
            '8/20 김민지<br />'+
            '1.빨간색 글자 &gt; 파란색<br />'+
            '2.테이블 디자인 변경<br /><br />'+
            '8/23 김민지<br />'+
            '1.파란색 글자 띄어쓰기 변경<br /><br />'+
            '9/1 장지현<br />'+
            '1.띄어쓰기 수정<br /><br />'+
            '10/6 장지현<br />'+
            '1.페이지 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP175-1',
        'class':'CMYMCP175-1',
        '1depth':'내자산',
        'page-name':'개별인증_개인(신용)정보 수집·이용 동의서-상세정보 전송(팝업) : 개별동의',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-07-27',
        'end-date':'2021-07-27',
        'progress':'1',
        'url':'/views/as/CMYMCP175-1.html',
        'update':'2021-10-07',
        'memo':
            '10/7 장지현<br />'+
            '1.페이지 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMCP176',
        'class':'CMYMCP176',
        '1depth':'내자산',
        'page-name':'개별인증_정보제공기관 선택(개별인증용) : 검색',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-07-27',
        'end-date':'2021-07-27',
        'progress':'100',
        'url':'/views/as/CMYMCP176.html',
        'update':'2021-11-17',
        'memo':  
            '7/27 김보민<br />'+
            '1.신규<br /><br />'+
            '8/18 김민지<br />'+
            '1.타이틀 변경<br />'+
            '2.리스트에 제공항목 내용 변경<br /><br />'+
            '8/20 김민지<br />'+
            '1.빨간색 글자 &gt; 파란색<br />'+
            '2.하단 제공항목 디자인 변경<br /><br />'+
            '9/7 김민지<br />'+
            '1.하단 동의 부분 밑줄 문구 변경<br /><br />'+
            '9/30 장지현<br />'+
            '1.헤더 타이틀 변경<br />'+
            '2.맨하단 볼드밑줄 텍스트 제공 -&gt; 개인(신용)정보 제공<br /><br />'+
            '11/17 조승모<br />'+
            '1.약관 문구 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP177',
        'class':'CMYMCP177',
        '1depth':'내자산',
        'page-name':'개인(식별)정보 및 신용거래 정보 수집·이용 동의(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-08-18',
        'end-date':'2021-08-18',
        'progress':'100',
        'url':'/views/as/CMYMCP177.html',
        'update':'2021-11-17',
        'memo':
            '8/18 김민지<br />'+
            '1.신규<br /><br />'+
            '8/20 김민지<br />'+
            '1.빨간색 글자 &gt; 파란색<br />'+
            '2.테이블 디자인 변경<br /><br />'+
            '8/23 김민지<br />'+
            '1.파란색 글자 띄어쓰기 변경<br /><br />'+
            '9/1 장지현<br />'+
            '1.띄어쓰기 수정<br /><br />'+
            '9/30 장지현<br />'+
            '1.헤더 타이틀 변경<br />'+
            '2.수집·이용 항목 - 내용 변경<br />'+
            '3.맨하단 볼드밑줄 텍스트 수집·이용 -&gt; 개인(신용)정보 수집·이용<br /><br />'+
            '10/1 장지현<br />'+
            '1.헤더타이틀 변경 : 개인(식별)정보 및 신용거래 정보 수집·이용 동의 -&gt; 개인(신용)정보 수집·이용 동의(상세정보 전송)<br /><br />'+
            '10/6 장지현<br />'+
            '1.테이블 내 강조 텍스트 볼드 #222 처리<br /><br />'+
            '10/26 김현기<br />'+
            '1.결함조치내용 수정완료<br /><br />'+
            '11/17 조승모<br />'+
            '1.약관 문구 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP178',
        'class':'CMYMCP178',
        '1depth':'내자산',
        'page-name':'적요 또는 거래메모 정보 수집·이용 동의(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-08-18',
        'end-date':'2021-08-18',
        'progress':'100',
        'url':'/views/as/CMYMCP178.html',
        'update':'2021-11-17',
        'memo':
            '8/18 김민지<br />'+
            '1.신규<br /><br />'+
            '8/20 김민지<br />'+
            '1.수집이용항목 디자인 변경<br /><br />'+
            '9/30 장지현<br />'+
            '1.헤더 타이틀 변경<br />'+
            '2.수집·이용 항목 위로 내용 추가<br /><br />'+
            '11/17 조승모<br />'+
            '1.약관 문구 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP179',
        'class':'CMYMCP179',
        '1depth':'내자산',
        'page-name':'가맹점명 정보 수집·이용 동의(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-08-18',
        'end-date':'2021-08-18',
        'progress':'100',
        'url':'/views/as/CMYMCP179.html',
        'update':'2021-11-17',
        'memo':
            '8/18 김민지<br />'+
            '1.신규<br /><br />'+
            '8/20 김민지<br />'+
            '1.수집이용항목 디자인 변경<br /><br />'+
            '9/30 장지현<br />'+
            '1.헤더 타이틀 변경<br />'+
            '2.수집·이용 항목 위로 내용 추가<br /><br />'+
            '10/1 장지현<br />'+
            '1.헤더 타이틀 변경 : 가맹점명 정보 수집·이용 동의 -&gt; 가맹점명 및 사업자등록번호 정보 수집·이용 동의<br /><br />'+
            '11/17 조승모<br />'+
            '1.약관 문구 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP180',
        'class':'CMYMCP180',
        '1depth':'내자산',
        'page-name':'상품구매 카테고리 정보 수집·이용 동의(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-08-18',
        'end-date':'2021-08-18',
        'progress':'100',
        'url':'/views/as/CMYMCP180.html',
        'update':'2021-11-17',
        'memo':
            '8/18 김민지<br />'+
            '1.신규<br /><br />'+
            '8/20 김민지<br />'+
            '1.수집이용항목 디자인 변경<br /><br />'+
            '9/30 장지현<br />'+
            '1.헤더 타이틀 변경<br />'+
            '2.수집·이용 항목 위로 내용 추가<br /><br />'+
            '11/17 조승모<br />'+
            '1.약관 문구 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP188',
        'class':'CMYMCP188',
        '1depth':'내자산',
        'page-name':'개별인증_개인(신용)정보 제공 동의(팝업)',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'김현기',
        'start-date':'2021-10-06',
        'end-date':'2021-10-07',
        'progress':'100',
        'url':'/views/as/CMYMCP188.html',
        'update':'2021-11-17',
        'memo':
            '10/6 장지현<br />'+
            '1.신규<br /><br />'+
            '11/17 조승모<br />'+
            '1.약관 문구 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP181',
        'class':'CMYMCP181',
        '1depth':'내자산',
        'page-name':'개인(식별)정보 및 신용거래 정보 수집·이용 동의(팝업):개별인증용',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-08-18',
        'end-date':'2021-08-18',
        'progress':'100',
        'url':'/views/as/CMYMCP181.html',
        'update':'2021-11-17',
        'memo':
            '8/18 김민지<br />'+
            '1.신규<br /><br />'+
            '8/20 김민지<br />'+
            '1.빨간색 글자 &gt; 파란색<br />'+
            '2.테이블 디자인 변경<br /><br />'+
            '8/23 김민지<br />'+
            '파란색 글자 띄어쓰기 변경<br /><br />'+
            '9/1 장지현<br />'+
            '1.띄어쓰기 수정<br /><br />'+
            '9/30 장지현<br />'+
            '1.헤더 타이틀 변경<br />'+
            '2.수집·이용 항목 - 내용 변경<br />'+
            '3.맨하단 볼드밑줄 텍스트 수집·이용 -&gt; 개인(신용)정보 수집·이용<br /><br />'+
            '10/1 장지현<br />'+
            '1.헤더타이틀 변경 : 개인(식별)정보 및 신용거래 정보 수집·이용 동의 -> 개인(신용)정보 수집 ·이용 동의<br /><br />'+
            '10/6 장지현<br />'+
            '1.테이블 내 강조 텍스트 볼드 #222 처리<br /><br />'+
            '11/17 조승모<br />'+
            '1.약관 문구 수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP182',
        'class':'CMYMCP182',
        '1depth':'내자산',
        'page-name':'적요 또는 거래메모 정보 수집·이용 동의(팝업):개별인증용',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-08-18',
        'end-date':'2021-08-18',
        'progress':'100',
        'url':'/views/as/CMYMCP182.html',
        'update':'2021-11-19',
        'memo':
            '9/30 장지현<br />'+
            '1.헤더 타이틀 변경<br />'+
            '2.수집·이용 항목 위로 내용 추가<br /><br />'+
            '11/19 조승모<br />'+
            '1.수집 이용 목적, 거부 권리 및 불이익 하단 내용 문구수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP183',
        'class':'CMYMCP183',
        '1depth':'내자산',
        'page-name':'가맹점명 정보 수집·이용 동의(팝업):개별인증용',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-08-18',
        'end-date':'2021-08-18',
        'progress':'100',
        'url':'/views/as/CMYMCP183.html',
        'update':'2021-11-19',
        'memo':
            '8/18 김민지<br />'+
            '1.신규<br /><br />'+
            '8/20 김민지<br />'+
            '1.수집이용항목 디자인 변경<br /><br />'+
            '9/30 장지현<br />'+
            '1.헤더 타이틀 변경<br />'+
            '2.수집·이용 항목 위로 내용 추가<br /><br />'+
            '10/6 장지현<br />'+
            '1.헤더 타이틀 하단 텍스트로 변경 가맹점명 및 사업자등록번호 정보 수집·이용 동의<br /><br />'+
            '11/19 조승모<br />'+
            '1.수집 이용 목적, 거부 권리 및 불이익 하단 내용 문구수정'
    },
    {
        'appoint':'',
        'id':'CMYMCP184',
        'class':'CMYMCP184',
        '1depth':'내자산',
        'page-name':'상품구매 카테고리 정보 수집·이용 동의(팝업):개별인증용',
        'type':'popup',
        'planning-name':'유진민',
        'publisher-name':'곽종범',
        'start-date':'2021-08-18',
        'end-date':'2021-08-18',
        'progress':'100',
        'url':'/views/as/CMYMCP184.html',
        'update':'2021-11-19',
        'memo':
            '8/18 김민지<br />'+
            '1.신규<br /><br />'+
            '8/20 김민지<br />'+
            '1.수집이용항목 디자인 변경<br /><br />'+
            '9/30 장지현<br />'+
            '1.헤더 타이틀 변경<br />'+
            '2.수집·이용 항목 위로 내용 추가<br /><br />'+
            '11/19 조승모<br />'+
            '1.수집 이용 목적, 거부 권리 및 불이익 하단 내용 문구수정'
    },
    {
        'appoint':'leader',
        'id':'CMYMPH022',
        'class':'CMYMPH022',
        '1depth':'내차구매',
        'page-name':'내차구매 서비스 시작하기(팝업)',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'김현기',
        'start-date':'2021-10-13',
        'end-date':'2021-10-13',
        'progress':'100',
        'url':'/views/bu/CMYMPH022.html',
        'update':'2021-10-13',
        'memo':
            '10/13 장지현<br />'+
            '1.신규'

    },
    {
        'appoint':'',
        'id':'CMYMPH001',
        'class':'CMYMPH001',
        '1depth':'내차구매',
        'page-name':'내차구매(서브메인)',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-09',
        'end-date':'2021-06-15',
        'progress':'100',
        'url':'/views/bu/CMYMPH001.html',
        'update':'2021-10-14',
        'memo':
            '6/21 장지현<br />'+
            '1.다음차 흰박스내 년도 삭제<br />'+
            '중고차시세(2015) - &gt; 중고차시세<br />'+
            '2.신차가 준비중 케이스 추가<br /><br />'+
            '6/22 오지혜<br />'+
            '1.김국민님의 구매 가능 예산 보유차 판매금액-&gt;내차 판매예상 금액 으로 변경<br />'+
            '2.시뮬레이션결과 구매가능예산 보유차 판매금액-&gt;내차 판매예상 금액 으로 변경<br /><br />'+
            '6/24 오지혜<br />'+
            '1.CaseC,D 내한도알기 하단 고정배너 삭제-&gt; CaseC 신차로 구매 하단, CaseD 시뮬레이션 진행 하단 영역으로 변경<br />'+
            '2.02내차구매_01메인_다음차없는경우_CMYMPH001 추천차 컬러  Flag 텍스트 변경->은색<br />'+
            '3.내한도알기영역 <내한도 알기> 버튼 추가<br />'+
            '4.CaseD 시뮬레이션 진행 박스 bg컬러 수정<br /><br />'+
            '7/1 오지혜<br />'+
            '1.CaseC,D 내한도알기 조회 영역 문구 수정->디자인 화면 참고<br />'+
            '2.시뮬레이션case_중고차_내한도알기 조회 X 일때 그래프 상단 \"내한도 알기 조회하고 추가 예산을 알아보세요!\" 문구 앞에 \"차차차\" 추가<br /><br />'+
            '7/7 오지혜<br />'+
            '1. 시뮬레이션case_중고차 -&gt; 내한도알기 ON하면 구매할 수 있을 때-&gt; 문구 수정<br />'+
            '- 내한도 알기 포함하면 구매할 수 있어요. -&gt; 내한도 알기 더하면 구매할 수 있어요.<br />'+
            '- 차차차 내한도 알기를 포함하면 구매할 수 있어요! -&gt; 차차차 내한도 알기를 더하면 구매할 수 있어요!<br />'+
            '2.CaseC 한도알기 조회 영역 00년식 신차로 구매 위로 위치 변경<br /><br />'+
            '7/9 오지혜<br />'+
            '1.case A,B 김국민님의 구매가능예산 하단에 사람 일러스트 + 문구 추가<br />'+
            '2.case C,D 김국민님의 구매가능예산 -&gt; 차차차 내한도 알기 연결하기 버튼 추가, 하단 일러스트 오른쪽 꺽쇠 삭제<br />'+
            '3.case A,B,C,D 내한도알기 조회 영역 삭제<br /><br />'+
            '4.시뮬레이션 결과 구매가능 예산 디자인 수정-&gt; case A, 시뮬레이션case_중고차,신차 디자인 화면 참고<br /><br />'+
            '7/12 오지혜<br />'+
            '1.case B,C,D 김국민님의 구매 가능 예산-&gt; 내차판매예상금액, 차차차 내한도 알기 오른쪽 버튼명 변경<br /><br />'+
            '7/13 오지혜<br />'+
            '1.다음차없는경우 &gt; 김국민님이 원하는 다음차 아래 문구 수정 디자인 참고<br /><br />'+
            '7/20 오지혜<br />'+
            '1.다음차 중고차 시세 없을 경우 케이스 추가 -&gt; case E<br />'+
            '2.시뮬레이션_자산기반차량구매상태텍스트case -&gt; 00년식 신차로 구매 케이스 삭제<br />'+
            '3.차차차 내한도알기 문구 띄어쓰기 \"차차차 내한도알기\" 로 통일, 내 한도-> 내한도<br />'+
            '4.김국민님의 구매 가능 예산 하단 문구 변경<br /><br />'+
            '7/22 오지혜<br />'+
            '1.김국민이 원하는 다음차->기본정보 텍스트버튼 추가<br />'+
            '2.다음차 없는경우 추천 태그 디자인, 위치 변경<br /><br />'+
            '7/27 오지혜<br />'+
            '1.김국민님의 구매가능예산->보유예산, 내차 판매예상금액 수정했을 시 텍스트 컬러 변경<br /><br />'+
            '8/2 오지혜<br />'+
            '1.차국민 님이 원하는 다음차 -&gt; 내가 원하는 다음차 로 변경<br />'+
            '2.차국민 님의 구매 가능 예산 -&gt; 나의 구매 가능 예산 으로 변경<br />'+
            '3.차차차 내한도알기 하단 차국민 님의 한도는? -&gt; 나의 한도는? 으로 변경<br />'+
            '4.cacs F 추가 (비회원일 경우)<br /><br />'+
            '8/11 오지혜<br />'+
            '1.내가 원하는 다음차 신차가 뒤에 ~ 삭제<br />'+
            '2.리스 월납입금 자산미연동 케이스로 통일(3개월 평균잔액 노출 케이스 삭제)<br /><br />'+
            '8/13 오지혜<br />'+
            '1.시뮬레이션 결과 케이스별 서브문구 변경 ->디자인 참고<br /><br />'+
            '8/31 장지현<br />'+
            '1.내가 원하는 다음차 - no images  이미지 추가<br /><br />'+
            '9/6 장지현<br />'+
            '1.나의 구매 가능 예산/툴팁/시물레이션 결과 - 문구 변경<br />'+
            '차차차 내한도알기 -&gt; 내한도알기<br /><br />'+
            '9/8 장지현<br />'+
            '1.타이틀 문구 변경 : 시뮬레이션 진행을 도와드릴께요! -&gt; 시뮬레이션 진행을 도와드릴게요!<br />'+
            '2.버튼명 수정 : 시물레이션 바로가기 -&gt; 내차구매 시뮬레이션 진행하기<br /><br />'+
            '9/14 장지현<br />'+
            '1.나의 구매 가능 예산 - 남자일러+말풍선 문구 추가<br />'+
            '유효기간 만료 시 노출<br />'+
            '제플린 : <a href=\"http://zpl.io/aXj4LAE\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/aXj4LAE</a><br /><br />'+
            '10/12 장지현<br />'+
            '1.중고차 금융상담 신청 배너 추가(상시 고정)<br />'+
            '*나의 구매 가능 예산 하단에 위치<br /><br />'+
            '10/14 장지현<br />'+
            '1.내한도알기 툴팁 문구 변경<br />'+
            '제플린 : <a href=\"http://zpl.io/bPypopD\" class=\"link-txt\" target=\"_blank\" title=\"새창페이지\">zpl.io/bPypopD</a>'
    },
    {
        'appoint':'',
        'id':'CMYMPH002',
        'class':'CMYMPH002',
        '1depth':'내차구매',
        'page-name':'(다음차) 기본 정보',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH002.html',
        'update':'2021-08-18',
        'memo':
            '8/18 오지혜<br />'+
            '1.가격 -&gt; 신차가로 변경<br />'+
            '2.신차가 금액 메인신차가 금액과 맞춤'
    },
    {
        'appoint':'',
        'id':'CMYMPH003',
        'class':'CMYMPH003',
        '1depth':'내차구매',
        'page-name':'(다음차) 다음차 삭제 안내 팝업',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH003.html',
        'update':'2021-06-18',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMPH004',
        'class':'CMYMPH004',
        '1depth':'내차구매',
        'page-name':'(추천차) 기본정보',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH004.html',
        'update':'2021-08-18',
        'memo':
        '8/18 오지혜<br />'+
        '1.가격 -&gt; 신차가로 변경<br />'+
        '2.신차가 금액 메인신차가 금액과 맞춤'
    },
    {
        'appoint':'',
        'id':'CMYMPH005',
        'class':'CMYMPH005',
        '1depth':'내차구매',
        'page-name':'(추천차) 다음차로 등록 팝업',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH005.html',
        'update':'2021-06-25',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMPH006',
        'class':'CMYMPH006',
        '1depth':'내차구매',
        'page-name':'보유예산 설정',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH006.html',
        'update':'2021-08-02',
        'memo':
            '7/20 오지혜<br />'+
            '1.상단 설명문구 변경<br />'+
            '2.하단 사용가능예산 -&gt; 보유 예산으로 변경<br />'+
            '3.버튼명 변경<br />'+
            '4.타이틀 보유예산->보유 예산으로 변경<br /><br />'+
            '8/2 오지혜<br />'+
            '1.계좌->예금으로 변경<br />'+
            '2.예금 열렸을때 증권 -&gt; 기타로 변경<br />'+
            '3.아코디언 텍스트 크기 18-&gt;16 변경'
    },
    {
        'appoint':'',
        'id':'CMYMPH007',
        'class':'CMYMPH007',
        '1depth':'내차구매',
        'page-name':'보유차 판매 금액 설정',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH007.html',
        'update':'2021-08-18',
        'memo':
            '6/22 오지혜<br />'+
            '1.보유예산 -&gt; 내차 판매예상 금액 으로 변경<br />'+
            '2.보유차 판매금액 -&gt; 내차 판매예상 금액 으로 변경<br /><br />'+
            '6/29 오지혜<br />'+
            '1.보유차에 차량번호 [123가 1234] 추가, 번호+모델명이 영역을 넘어갈 경우 …처리<br /><br />'+
            '7/20 오지혜<br />'+
            '1.상단 문구 변경<br />'+
            '2.보유차 -&gt; 내차고 로 변경<br />'+
            '3.하단 버튼명 변경'
    },
    {
        'appoint':'',
        'id':'CMYMPH008',
        'class':'CMYMPH008',
        '1depth':'내차구매',
        'page-name':'내 차 구매 시뮬레이션 서비스 안내',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH008.html',
        'update':'2021-11-30',
        'memo':
            '7/20 오지혜<br />'+
            '1.차차차 내한도알기 띄어쓰기 변경<br /><br />'+
            '7/22 오지혜<br />'+
            '1.타이틀 문구 변경<br />'+
            '2.컨텐츠 문구 및 위치 변경<br /><br />'+
            '9/6 장지현<br />'+
            '1.문구 변경 : 차차차 내한도알기 -&gt; 내한도알기<br /><br />'+
            '11/30 장지현<br />'+
            '1.문구 및 버튼명 수정,<br />'+
            '하단 \'차량만 연결\' 버튼 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMPH009',
        'class':'CMYMPH009',
        '1depth':'내차구매',
        'page-name':'다음차 등록',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH009.html',
        'update':'2021-06-24',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMPH010',
        'class':'CMYMPH010',
        '1depth':'내차구매',
        'page-name':'제조사 선택',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH010.html',
        'update':'2021-06-22',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMPH011',
        'class':'CMYMPH011',
        '1depth':'내차구매',
        'page-name':'보유 예산 등록 유도',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'1',
        'url':'/views/bu/CMYMPH011.html',
        'update':'2021-08-19',
        'memo':
            '8/19 오지혜<br />'+
            '1.타이틀 문구 변경<br />'+
            '2.버튼명 변경<br /><br />'+
            '9/6 장지현<br />'+
            '1.페이지 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMPH012',
        'class':'CMYMPH012',
        '1depth':'내차구매',
        'page-name':'다음차 등록',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH012.html',
        'update':'2021-06-22',
        'memo':
            '6/22 오지혜<br />'+
            '1.연식, 색상 등 비활성화 상태 +아이콘 opacity 50%'
    },
    {
        'appoint':'',
        'id':'CMYMPH013',
        'class':'CMYMPH013',
        '1depth':'내차구매',
        'page-name':'브랜드 선택',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH013.html',
        'update':'2021-06-22',
        'memo':
            '8/30 장지현<br />'+
            '1.헤더 타이틀 변경<br />'+
            '제조사 선택 -&gt; 브랜드 선택'
    },
    {
        'appoint':'',
        'id':'CMYMPH014',
        'class':'CMYMPH014',
        '1depth':'내차구매',
        'page-name':'모델 선택',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH014.html',
        'update':'2021-06-22',
        'memo':
            '6/22 오지혜<br />'+
            '1.모델명 텍스트 차량 이미지와 미들정렬로 수정'
    },
    {
        'appoint':'',
        'id':'CMYMPH015',
        'class':'CMYMPH015',
        '1depth':'내차구매',
        'page-name':'세부 모델 선택',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH015.html',
        'update':'2021-07-22',
        'memo':
            '7/22 오지혜<br />'+
            '1.리스트 아코디언 스타일 변경'
    },
    {
        'appoint':'',
        'id':'CMYMPH016',
        'class':'CMYMPH016',
        '1depth':'내차구매',
        'page-name':'이전 버튼 클릭 팝업',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH016.html',
        'update':'2021-06-25',
        'memo':
            '6/22 오지혜<br />'+
            '1.설정하신, 맞춤  다음 줄바꿈 처리'
    },
    {
        'appoint':'',
        'id':'CMYMPH017',
        'class':'CMYMPH017',
        '1depth':'내차구매',
        'page-name':'등록 결과 확인',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH017.html',
        'update':'2021-07-01',
        'memo':
            '6/22 오지혜<br />'+
            '1.box-shadow 삭제<br /><br />'+
            '7/1 오지혜<br />'+
            '1.체크 아이콘삭제 / 아이콘 아래 문구 변경, 위치 하단 버튼위로 이동'
    },
    {
        'appoint':'',
        'id':'CMYMPH018',
        'class':'CMYMPH018',
        '1depth':'내차구매',
        'page-name':'등록 결과 확인(동일한 차량 등록 case)',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH018.html',
        'update':'2021-08-04',
        'memo':
            '6/22 오지혜<br />'+
            '1.[다음]을 누르시면~ 과 다음 버튼 사이간격 40px<br /><br />'+
            '8/4 오지혜<br />'+
            '1.문구 변경 (차국민님이 등록하신 삭제)'
    },
    {
        'appoint':'',
        'id':'CMYMPH019',
        'class':'CMYMPH019',
        '1depth':'내차구매',
        'page-name':'다음차 순서 변경 팝업',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH019.html',
        'update':'2021-06-24',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMPH020',
        'class':'CMYMPH020',
        '1depth':'내차구매',
        'page-name':'연식색상 선택',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH020.html',
        'update':'2021-09-01',
        'memo':
            '6/22 오지혜<br />'+
            '1.색상선택 라디오버튼 디폴트 기준 상하 사이간격 16px<br /><br />'+
            '7/29 오지혜<br />'+
            '1.색상 텍스트 추가<br /><br />'+
            '9/1 장지현<br />'+
            '1.문구 변경<br />'+
            '제조사/모델 -&gt; 브랜드/모델'
    },
    {
        'appoint':'',
        'id':'CMYMPH021',
        'class':'CMYMPH021',
        '1depth':'내차구매',
        'page-name':'다음차 등록 제한 팝업',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH021.html',
        'update':'2021-06-21',
        'memo':
            '6/21 오지혜<br />'+
            '1.신규'
    },
    { 
        'appoint':'',
        'id':'CMYMPH100',
        'class':'CMYMPH100',
        '1depth':'내차구매',
        'page-name':'차차차 프리체크연동 유도',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'1',
        'url':'/views/bu/CMYMPH100.html',
        'update':'2021-07-13',
        'memo':
            '7/13 이연지<br />'+
            '1.팝업 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMPH101',
        'class':'CMYMPH101',
        '1depth':'내차구매',
        'page-name':'서비스안내',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-10-19',
        'progress':'100',
        'url':'/views/bu/CMYMPH101.html',
        'update':'2021-10-21',
        'memo':
            '9/8 장지현<br />'+
            '1.하단 버튼 2 case<br />'+
            '- 로그인, 회원가입<br />'+
            '- 정회원 전환<br /><br />'+
            '10/19 장지현<br />'+
            '1.컨텐츠 내용 추가<br /><br />'+
            '10/21 장지현<br />'+
            '1.인터렉션 적용'
    },
    {
        'appoint':'',
        'id':'CMYMPH102',
        'class':'CMYMPH102',
        '1depth':'내차구매',
        'page-name':'마이데이터 연동 유도',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'1',
        'url':'/views/bu/CMYMPH102.html',
        'update':'2021-09-08',
        'memo':
            '7/2 오지혜<br />'+
            '1.문구 수정 -&gt; 디자인 참고<br /><br />'+
            '9/8 장지현<br />'+
            '1.페이지 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMPH115',
        'class':'CMYMPH115',
        '1depth':'내차구매',
        'page-name':'마이데이터 활용 안내',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-09-08',
        'end-date':'2021-09-08',
        'progress':'100',
        'url':'/views/bu/CMYMPH115.html',
        'update':'2021-12-06',
        'memo':
            '9/8 장지현<br />'+
            '1.신규<br /><br />'+
            '9/9 장지현<br />'+
            '1.문구 수정 - 헤더타이틀, 컨텐츠 내용, 버튼명<br /><br />'+
            '10/27 장지현<br />'+
            '1.해당문구 삭제 \"와 보험정보\"<br /><br />'+
            '12/6 장지현<br />'+
            '1.문구 수정'
    },
    {
        'appoint':'',
        'id':'CMYMPH103',
        'class':'CMYMPH103',
        '1depth':'내차구매',
        'page-name':'약관동의',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH103.html',
        'update':'2021-09-13',
        'memo':
            '6/24 오지혜<br />'+
            '화면 확인 불가<br /><br />'+
            '7/2 오지혜<br />'+
            '1.레이아웃 변경<br /><br />'+
            '9/1 장지현<br />'+
            '1.문구 수정<br /><br />'+
            '9/13 마크업 변경, form-checkbox와 txt-link 텍스트 분리<br /><br />'+
            '10/19<br />'+
            '1.popup을 page 타입으로 변경'
    },
    {
        'appoint':'',
        'id':'CMYMPH104',
        'class':'CMYMPH104',
        '1depth':'내차구매',
        'page-name':'고객정보입력',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH104.html',
        'update':'2021-06-25',
        'memo':
            '6/23 오지혜<br />'+
            '1.상단문구 수정(디자인 화면상에 문구 잘못넣음)<br /><br />'+
            '9/6 장지현<br />'+
            '1.문구 변경 : 차차차 내한도알기 -&gt; 내한도알기<br /><br />'+
            '9/8 장지현<br />'+
            '1.컨텐츠 영역 고객정보 타이틀 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMPH105',
        'class':'CMYMPH105',
        '1depth':'내차구매',
        'page-name':'본인인증 수단 선택',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-07-05',
        'end-date':'2021-07-05',
        'progress':'100',
        'url':'/views/bu/CMYMPH105.html',
        'update':'2021-10-26',
        'memo':
            '7/2 오지혜<br />'+
            '1.신규<br /><br />'+
            '10/12 장지현<br />'+
            '1.인증수단 중 카카오페이, 토스 삭제<br /><br />'+
            '10/26 장지현<br />'+
            '1.인증수단 중 공동인증서 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMPH106',
        'class':'CMYMPH106',
        '1depth':'내차구매',
        'page-name':'정보확인',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH106.html',
        'update':'2021-06-25',
        'memo':
            '6/23 오지혜<br />'+
            '1.상단문구 삭제<br /><br />'+
            '7/7<br />'+
            '1.데이터값 불러와서 수정 불가한 페이지므로 input에 속성 추가<br /><br />'+
            '9/8<br />'+
            '1. .inp-box에 클래스명 readonly 추가<br />'+
            '2.주민번호 뒷자리 input에 maxlength, value 제거 / 클래스명 active 제거 후 inactive 추가'
    },
    {
        'appoint':'',
        'id':'CMYMPH107',
        'class':'CMYMPH107',
        '1depth':'내차구매',
        'page-name':'프리체크 조회 로딩',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH107.html',
        'update':'2021-06-24',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMPH116',
        'class':'CMYMPH116',
        '1depth':'내차구매',
        'page-name':'신용조회동의 완료',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'김현기',
        'start-date':'2021-10-12',
        'end-date':'2021-10-12',
        'progress':'100',
        'url':'/views/bu/CMYMPH116.html',
        'update':'2021-10-12',
        'memo':
            '10/12 장지현<br />'+
            '1. 신규'
    },
    {
        'appoint':'',
        'id':'CMYMPH117',
        'class':'CMYMPH117',
        '1depth':'내차구매',
        'page-name':'차이지 내한도알기 결과',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'김현기',
        'start-date':'2021-10-12',
        'end-date':'2021-10-12',
        'progress':'100',
        'url':'/views/bu/CMYMPH117.html',
        'update':'2021-12-02',
        'memo':
            '10/12 장지현<br />'+
            '1.신규(노란색 테두리 박스 세로값 고정)<br /><br />'+
            '10/14 장지현<br />'+
            '1.문구 변경<br />'+
            '차종과 상관없이 중고차 구매에 이용할 수 있는 예상 한도입니다. -&gt; 차종과 상관없이 중고차 구매에 이용할 수 있는 최소한도입니다.<br /><br />'+
            '12/1 김보민<br />'+
            '1. [중고차대출 필수 안내사항] 추가<br /><br />'+
            '12/2 이연지<br >'+
            '1. 텍스트 추가'
    },
    {
        'appoint':'',
        'id':'CMYMPH118',
        'class':'CMYMPH118',
        '1depth':'내차구매',
        'page-name':'차이지 내한도알기 결과 (한도 0원 케이스)',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'김현기',
        'start-date':'2021-10-12',
        'end-date':'2021-10-12',
        'progress':'100',
        'url':'/views/bu/CMYMPH118.html',
        'update':'2021-12-02',
        'memo':
            '10/12 장지현<br />'+
            '1.신규(노란색 테두리 박스 세로값 고정)<br /><br />'+
            '10/26 장지현<br />'+
            '1.안내문구 삭제<br /><br />'+
            '12/1 김보민<br />'+
            '1. [중고차대출 필수 안내사항] 추가<br /><br />'+
            '12/2 이연지<br >'+
            '1. 텍스트 추가'
    },
    {
        'appoint':'',
        'id':'CMYMPH119',
        'class':'CMYMPH119',
        '1depth':'내차구매',
        'page-name':'차이지 내한도알기 결과 (정보 불일치)',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'김현기',
        'start-date':'2021-10-26',
        'end-date':'2021-10-26',
        'progress':'100',
        'url':'/views/bu/CMYMPH119.html',
        'update':'2021-10-26',
        'memo':
            '10/26 장지현<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMPH120',
        'class':'CMYMPH120',
        '1depth':'내차구매',
        'page-name':'차이지 상담요청 접수 완료',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'김현기',
        'start-date':'2021-10-26',
        'end-date':'2021-10-26',
        'progress':'100',
        'url':'/views/bu/CMYMPH120.html',
        'update':'2021-10-26',
        'memo':
            '10/26 장지현<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMPH108',
        'class':'CMYMPH108',
        '1depth':'내차구매',
        'page-name':'예상한도 조회 결과',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/bu/CMYMPH108.html',
        'update':'2021-12-02',
        'memo':
            '7/12 오지혜<br />'+
            '1. 박스 하단 문구 추가<br /><br />'+
            '9/6 장지현<br />'+
            '1. 헤더 타이틀 변경 : 차차차 내한도알기 -> 내한도알기<br /><br />'+
            '9/7 김보민<br />'+
            '1. 2021.05.14 ~2021.06.14 띄어쓰기 (~사이) 2021.05.14 ~ 2021.06.14<br /><br />'+
            '10/12 장지현<br />'+
            '1. 하단 버튼 1개 -&gt; 2개로 수정<br />'+
            '다시 조회하기 -&gt; 다시 조회하기, 상담신청<br /><br />'+
            '12/1 김보민<br />'+
            '1. [중고차대출 필수 안내사항] 추가<br /><br />'+
            '12/2 이연지<br >'+
            '1. 텍스트 추가'
    },
    {
        'appoint':'',
        'id':'CMYMPH109',
        'class':'CMYMPH109',
        '1depth':'내차구매',
        'page-name':'만료 갱신',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-06-16',
        'end-date':'2021-06-24',
        'progress':'1',
        'url':'/views/bu/CMYMPH109.html',
        'update':'2021-09-14',
        'memo':
            '9/14 장지현<br />'+
            '1.페이지 삭제'        
    },
    {
        'appoint':'',
        'id':'CMYMPH110',
        'class':'CMYMPH110',
        '1depth':'내차구매',
        'page-name':'자산 변동',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-07-05',
        'end-date':'2021-06-24',
        'progress':'1',
        'url':'/views/bu/CMYMPH110.html',
        'update':'2021-09-09',
        'memo':
            '9/9 장지현<br />'+
            '1.페이지 삭제'
    },
    {
        'appoint':'',
        'id':'CMYMPH111',
        'class':'CMYMPH111',
        '1depth':'내차구매',
        'page-name':'고객정보 비밀번호 입력 오류 팝업',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-07-05',
        'end-date':'2021-07-05',
        'progress':'100',
        'url':'/views/bu/CMYMPH111.html',
        'update':'2021-07-02',
        'memo':
            '7/2 오지혜<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMPH112',
        'class':'CMYMPH112',
        '1depth':'내차구매',
        'page-name':'본인인증수단-휴대폰인증',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-07-05',
        'end-date':'2021-07-05',
        'progress':'100',
        'url':'/views/bu/CMYMPH112.html',
        'update':'2021-07-02',
        'memo':
            '7/2 오지혜<br />'+
            '1.신규<br /><br />'+
            '9/8 장지현<br />'+
            '1.약관동의 타이틀 삭제, 약관 위치 맨 하단으로 이동<br />'+
            '2.휴대폰번호와 안내문구 사이간격 32-&gt;16<br /><br />'+
            '9/17<br />'+
            '1.select-box 통신사 수정'

    },
    {
        'appoint':'',
        'id':'CMYMPH113',
        'class':'CMYMPH113',
        '1depth':'내차구매',
        'page-name':'본인인증수단-신용/체크카드인증',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-07-05',
        'end-date':'2021-07-06',
        'progress':'100',
        'url':'/views/bu/CMYMPH113.html',
        'update':'2021-09-13',
        'memo':
            '7/2 오지혜<br />'+
            '1.신규<br /><br />'+
            '7/7 오지혜<br />'+
            '1.카드번호 입력 TextField 수정<br />'+
            '2.핸드폰번호  ARS인증요청 버튼 인증후 비활성화처리<br /><br />'+
            '9/8 장지현<br />'+
            '1.약관동의 타이틀 삭제, 약관 위치 맨 하단으로 이동<br />'+
            '2.휴대폰번호와 안내문구 사이간격 32-&gt;16<br /><br />'+
            '9/13 마크업 변경, form-checkbox와 txt-link 텍스트 분리<br /><br />'+
            '9/17<br />'+
            'select-box 통신사 수정'
    },
    {
        'appoint':'',
        'id':'CMYMPH121',
        'class':'CMYMPH121',
        '1depth':'내차구매',
        'page-name':'본인인증수단-아이핀인증',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'김현기',
        'start-date':'2021-11-09',
        'end-date':'2021-11-09',
        'progress':'100',
        'url':'/views/bu/CMYMPH121.html',
        'update':'2021-11-09',
        'memo':
            '11/9 장지현<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYMPH114',
        'class':'CMYMPH114',
        '1depth':'내차구매',
        'page-name':'ARS인증요청 오류 팝업 ',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'박문영',
        'start-date':'2021-07-05',
        'end-date':'2021-07-05',
        'progress':'100',
        'url':'/views/bu/CMYMPH114.html',
        'update':'2021-07-02',
        'memo':
            '7/2 오지혜<br />'+
            '1.신규'
    },
    {
        'appoint':'leader',
        'id':'CMYMGA001',
        'class':'CMYMGA001',
        '1depth':'내차고',
        'page-name':'내차고(서브메인)',
        'type':'page',
        'planning-name':'배선일',
        'publisher-name':'김현기',
        'start-date':'2021-06-24',
        'end-date':'2021-06-29',
        'progress':'100',
        'url':'/views/mycar/CMYMGA001.html',
        'update':'2020-08-06',
        'memo':
            '6/29 장지현<br />'+
            '1. 통 &gt; box radius : 1.3rem &gt; 1.2rem<br /><br />'+
            '2.상단​<br />'+
            '2-1) 알람이 있을 경우 : 알람상단여백 24-&gt;16<br />'+
            '2-2) 주행거리 box padding : 1.7rem 2.4rem &gt; 1.6rem 2.4rem<br />'+
            '2-3) 월평균주행/나와함께/중고차시세 : 1/n아님. 디자인참고 / 더보기 버튼 높이 40고정<br /><br />'+
            '3.내차캘린더 box padding : 1.7rem 2.4rem &gt; 1.6rem 2.4rem<br /><br />'+
            '4.내차예상판매가 : 월간입찰수 아이콘 재적용<br /><br />'+
            '5.올뉴쏘렌트배너<br />'+
            '5-1) padding : 좌측만 2.4rem<br />'+
            '5-2) 텍스트크기 : 지금바로130만원더받고팔기 18>16(디자인변경)<br />'+
            '5-3) 이미지 : 차,폭죽,금액 분리 (차테크메인 CMYCTE001 내차팔기 배너 참고)<br /><br />'+
            '6.안전관리 &gt; 운전면허벌점 : 벌점기록가져오기 버튼 상단 여백 16 &gt; 24<br /><br />'+
            '7. 내차유지 &gt; 자동차보험<br />'+
            '7-1) 미등록 보험조회가능시 : 보험사를 선택해주세요. 마침표추가<br />'+
            '7-2) 미등록 보험조회가실패시 : 텍스트수정 2021.12.18 만료 &gt; 만료일 정보가 없습니다.<br />'+
            '7-3) 마이데이터연동하기 버튼으로 등록시 : 수정 버튼 삭제<br /><br />'+
            '8.내차관리<br />'+
            '8-1) 정기검사 : 빨강에러아이콘 좌측여백 4 삭제(2,3번쨰케이스)<br />'+
            '8-2) 리콜대상 : 완료아이콘 높이 24 / &gt; 버튼 우측 여백 16&gt;8<br />'+
            '8-3) 타이어정보 : 정보없을시 이미지 3번째 배너위치   translateY(-1.2rem) &gt; -1.8rem<br /><br />'+
            '​9.차차차멤버십 : 배너이미지 재적용<br /><br />'+
            '10.상단 탭 : 클릭시 이동되는 위치 검토<br /><br />'+
            '11.내차시세 : 오타 산차가격 &gt; 신차가격<br /><br />'+
            '12.헤더 : 자동차아이콘에 옐로우 숫자 뱃지 추가<br /><br />'+
            '13.차계부 &gt; 마이데이터 미연동시 : 4월23일 기준 텍스트 삭제(기획변경)'+
            '7/1 김민지<br />'+
            '1.운전면허 공인인증서로 본인인증 후 / 운전면허 벌점에서 누산 종료일자, 시작일자 수정 하단 착한 운전 마일리지, 교통법규 수강 이미지 추가 및 레이아웃 변경<br />'+
            '2.내차팔기 배너 레이아웃 수정<br />'+
            '3.최상단 마이데이터/멤버십 연결 노출여부 영역 삭제<br />'+
            '4.내차시세영역: 선호-&gt;인기도로 레이블 일괄 변경<br /><br />'+
            '7/30 장지현 (차차차 수정사항)<br />'+
            '1.상단<br />'+
            '1-1) 스크롤시 생성되는 탭 : 탑버튼 삭제<br />'+
            '1-2) 알람 아이콘 교체, 박스 높이 40-&gt;44<br />'+
            '1-3) 차량명과  수정 버튼 사이간격 : 4-&gt;8<br />'+
            '1-4) 주행거리 : 박스 제거<br />'+
            '1-5) 인터랙션 추가 : 자동차, 주행거리 숫자 (현 차차차 내차고 참고)<br /><br />'+
            '2.내차시세<br />'+
            '2-1) 999,999km 기준 우측 연필 아이콘 삭제<br />'+
            '2-2) 잔존가치, 신차가격 위치 변경<br />'+
            '2-2) 매력도 : 아이콘추가, 문구 변경<br />'+
            '2-3) 그래프 재적용<br /><br />'+
            '3.내차예상판매가<br />'+
            '2-1) 999,999km 기준 우측 연필 아이콘 삭제<br />'+
            '3-2) 월간입찰수 위치 변경, 그래프 재적용<br /><br />'+
            '4.내차캘린더<br />'+
            '4-1) 내차예상판매가 하단으로 위치 변경<br />'+
            '4-2) new 아이콘 추가<br /><br />'+
            '5.팔아줘차차차 : 타이틀 추가, 배경 컬러 변경<br /><br />'+
            '6.안전관리 &gt; 보험사고이력<br />'+
            '6-1) 아이콘 교체<br />'+
            '6-2) 버튼 컬러 수정, 버튼 \'무료\' 추가<br /><br />'+
            '7.안전관리 &gt; 운전면허벌점 : <br />'+
            '7-1) 폰트 12 자간 0.2 -&gt; -0.2 수정(공통) 최근 업데이트 : 2021.06.17<br />'+
            '7-2) 박스 내 세로 라인 추가<br /><br />        '+
            '8.내차관리 &gt; 리콜대상 : 완료 뱃지 배경 #fff 으로 변경<br /><br />'+
            '9.내차관리 &gt; 보증기간 : 뱃지 내 폰트 자간 0.2 -&gt; -0.2 (12 폰트 공통)<br /><br />'+
            '10.내차관리 &gt; 타이어정보<br />'+
            '10-1) 전륜, 후륜 사이 구분바 삭제<br />'+
            '10-2) 사이즈정보없음 띄어쓰기 -&gt; 사이즈정보 없음<br />'+
            '10-3) 사이즈정보 없음 텍스트와 정보있는경우 텍스트 가운데정렬 조정 필요 (폰트크기가 다른점 고려)<br />'+
            '10-4) 타이어정보 안전 알림 : 박스 상단 라운드로, 3건에 &gt; 버튼 추가'            
    },
    {
        'appoint':'',
        'id':'CMYMGA002',
        'class':'CMYMGA002',
        '1depth':'내차고',
        'page-name':'차량 변경',
        'type':'popup',
        'planning-name':'배선일',
        'publisher-name':'박문영',
        'start-date':'2021-06-24',
        'end-date':'2021-06-28',
        'progress':'100',
        'url':'/views/mycar/CMYMGA002.html',
        'update':'2020-06-30',
        'memo':
            '6/26 김민지<br />'+
            '체크버튼 차량 선택시에만 보임'
    },
    {
        'appoint':'',
        'id':'CMYMGA003',
        'class':'CMYMGA003',
        '1depth':'내차고',
        'page-name':'내차 수정',
        'type':'page',
        'planning-name':'배선일',
        'publisher-name':'박문영',
        'start-date':'2021-06-24',
        'end-date':'2021-06-28',
        'progress':'100',
        'url':'/views/mycar/CMYMGA003.html',
        'update':'2020-07-29',
        'memo':
            '6/27 김민지<br />'+
            '1.연식에서 년, 월, 일 박스 사이즈 108.33px &gt; 108px<br />'+
            '2.모델정보에 모델명(현대 그렌저~) font-weight 500 &gt; 400<br />'+
            '3.주행거리에 입력일 2021.6.22 font color #999 &gt; #888<br />'+
            '4.추가정보 tab에서 옵션 아이콘, 리스/렌트이력 사이 간격 32px<br />'+
            '(현재 옵션 아이콘 margin-bottom 24px + 리스/렌트이력 magin top 16px = 40px로 되어있음)<br /><br />'+
            '7/1 김민지<br />'+
            '1.제조사 멤버십 연동 영역 : 멤버십 로고 추가, 현대 상용차 멤버십 > 현대 멤버십, 하단 문구에도 \'상용차\' 삭제, 해제중(상태값) 삭제<br /><br />'+
            '7/29 김민지<br />'+
            '컬러 아래에 컬러명 추가'
    },
    {
        'appoint':'',
        'id':'CMYMGA004',
        'class':'CMYMGA004',
        '1depth':'내차고',
        'page-name':'모델 정보',
        'type':'page',
        'planning-name':'배선일',
        'publisher-name':'김현기',
        'start-date':'2021-06-24',
        'end-date':'2021-06-24',
        'progress':'100',
        'url':'/views/mycar/CMYMGA004.html',
        'update':'2020-06-28',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMGA005',
        'class':'CMYMGA005',
        '1depth':'내차고',
        'page-name':'월 평균 주행',
        'type':'page',
        'planning-name':'배선일',
        'publisher-name':'김현기',
        'start-date':'2021-06-24',
        'end-date':'2021-06-29',
        'progress':'100',
        'url':'/views/mycar/CMYMGA005.html',
        'update':'2020-06-30',
        'memo':
            '6/30 김민지<br />'+
            '1.top-car-info-area, 하단 콘텐츠 사이 간격 31px &gt; 24px<br />'+
            '2.두번째 콘텐츠 \"평균보다 더 달리고 있어요. 가까운 거리는 걸어보면 어떨까요?\"에서 하단 %3단계 모델명% 중에서도 월 평균 0,000km 정도 덜 달리고 있어요.부분에서 덜 &gt; 더 로 문구 교체<br />'+
            '3.하단 안내문구 아이콘 사이즈 오류 16px * 16px/ 안내아이콘, 안내문구 사이 간격 4px<br /><br />'+
            '7/5 김민지<br />'+
            '1.하단 주행거리 추가(현대, 기아)<br /><br />'+
            '7/29 장지현<br />'+
            '1.그래프 3타입 인터랙션 추가'
    },
    {
        'appoint':'',
        'id':'CMYMGA006',
        'class':'CMYMGA006',
        '1depth':'내차고',
        'page-name':'나와 함께 ',
        'type':'page',
        'planning-name':'배선일',
        'publisher-name':'김현기',
        'start-date':'2021-06-24',
        'end-date':'2021-06-29',
        'progress':'100',
        'url':'/views/mycar/CMYMGA006.html',
        'update':'2020-06-30',
        'memo':
            '6/30 김민지<br />'+
            '1.top-car-info-area, 하단 콘텐츠 사이 간격 32px &gt; 24px<br />'+
            '2.나와 함께한지 2,999km &gt; 3,650일로 수정<br />'+
            '3.나의 누적 주행거리 &gt; 나의 보유기간 랭킹으로 교체( 오른쪽 수치도 수정 : 상위 20.5%) / 동일 모델 월 평균 주행거리 &gt; 동일모델 평균 보유기간 (오른쪽 수치도 수정 : 9,999일)<br />'+
            '4.하단 안내문구 아이콘 사이즈 오류 16px * 16px/ 안내아이콘, 안내문구 사이 간격 4px<br />'+
            '5.하단 로고 아래 여백 40px'
    },
    {
        'appoint':'',
        'id':'CMYMGA007',
        'class':'CMYMGA007',
        '1depth':'내차고',
        'page-name':'자동차 보험 정보 수정',
        'type':'popup',
        'planning-name':'배선일',
        'publisher-name':'박문영',
        'start-date':'2021-06-24',
        'end-date':'2021-06-28',
        'progress':'100',
        'url':'/views/mycar/CMYMGA007.html',
        'update':'2020-06-27',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMGA008',
        'class':'CMYMGA008',
        '1depth':'내차고',
        'page-name':'보증 기간 설정',
        'type':'popup',
        'planning-name':'배선일',
        'publisher-name':'박문영',
        'start-date':'2021-06-24',
        'end-date':'2021-06-29',
        'progress':'100',
        'url':'/views/mycar/CMYMGA008.html',
        'update':'2020-06-27',
        'memo':
            '6/27 김민지<br />'+
            'Electirc 전용부품에서 평생보증 체크와 하단 안내문구(차량의 최초등록일로부터 잔여 보증기간을 예측합니다.)<br />'+
            '사이 간격 16px &gt; 24px<br /><br />'+
            '8/10 김민지<br />'+
            '1.[문구수정] : 보증 기간 설정 -&gt; 보증기간 설정'
    },
    {
        'appoint':'',
        'id':'CMYMGA009',
        'class':'CMYMGA009',
        '1depth':'내차고',
        'page-name':'교통 범칙금 ·과태료',
        'type':'popup',
        'planning-name':'배선일',
        'publisher-name':'박문영',
        'start-date':'2021-06-24',
        'end-date':'2021-06-29',
        'progress':'100',
        'url':'/views/mycar/CMYMGA009.html',
        'update':'2020-06-27',
        'memo':
            '8/10 김민지<br />'+
            '1.[문구수정] : 교통 범칙금 -&gt; 교통범칙금'
    },
    {
        'appoint':'',
        'id':'CMYMGA010',
        'class':'CMYMGA010',
        '1depth':'내차고',
        'page-name':'자동차 세금 안내',
        'type':'popup',
        'planning-name':'배선일',
        'publisher-name':'박문영',
        'start-date':'2021-06-24',
        'end-date':'2021-06-29',
        'progress':'100',
        'url':'/views/mycar/CMYMGA010.html',
        'update':'2020-06-27',
        'memo':
            '6/27 김민지<br />'+
            '1.두번째 콘텐츠 승용자동차 &gt; 승합자동차<br />'+
            '2.승합자동차 영업용에서 대형 전세버스 가격 : 대형전세버스 &gt; 70,000원<br />'+
            '3.연납 신고기간 및 할인율 할인적용에서 마지막칸 9.16~9.30 &gt; 10~12월<br />'+
            '4.장애인 감면에서 공지아이콘 및 안내문구 사이 간격 8px &gt; 4px<br />'+
            '5.화물자동차, 특수자동차는 첫번째 th 만 width=\"40%\"로 수정<br /><br />'+
            '7/2 김민지<br />'+
            '1.오타 문구수정'

    },
    {
        'appoint':'',
        'id':'CMYMGA011',
        'class':'CMYMGA011',
        '1depth':'내차고',
        'page-name':'다이렉트 보험료 계산하기',
        'type':'popup',
        'planning-name':'배선일',
        'publisher-name':'박문영',
        'start-date':'2021-06-24',
        'end-date':'2021-06-29',
        'progress':'100',
        'url':'/views/mycar/CMYMGA011.html',
        'update':'2020-06-27',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMGA012',
        'class':'CMYMGA012',
        '1depth':'내차고',
        'page-name':'운전면허 벌점 도움말',
        'type':'popup',
        'planning-name':'배선일',
        'publisher-name':'박문영',
        'start-date':'2021-06-24',
        'end-date':'2021-06-29',
        'progress':'100',
        'url':'/views/mycar/CMYMGA012.html',
        'update':'2020-06-27',
        'memo':
            '6/27 김민지<br />'+
            '본문 내용 첫째줄 예) 부터 줄바꿈'
    },
    {
        'appoint':'',
        'id':'CMYMGA013',
        'class':'CMYMGA013',
        '1depth':'내차고',
        'page-name':'사고 이력 조회',
        'type':'popup',
        'planning-name':'배선일',
        'publisher-name':'박문영',
        'start-date':'2021-06-24',
        'end-date':'2021-06-29',
        'progress':'100',
        'url':'/views/mycar/CMYMGA013.html',
        'update':'2020-06-30',
        'memo':
            '6/30 김민지<br />'+
            '1.자동차 번호/소유자 변경이력 정보 - 테이블추가<br />'+
            '2.보험사고이력 상세정보 - 미가입정보 하단에 2017년 08월 ~ 2021년 04월 추가<br />'+
            '* 미가입기간 케이스 - 노출 비노출<br /><br />'+
            '8/10 장지현<br />'+
            '1.헤더 띄어쓰기 : 사고 이력 조회 -&gt; 사고이력조회<br />'+
            '2.중고차 사고이력조회 : 타이틀 삭제 후 상단 높이 32-&gt;24<br />'+
            '3.사고이력조회 횟수 : 금액 영역으로 이동 내 차 피해 2회 / 상대 차 피해 2회 -&gt; 2회(100,000원)<br />'+
            '4.문구 및 띄어쓰기 수정 : 자동차 일반사항 정보 -&gt; 자동차 일반 사양 정보<br />'+
            '5.자동차 번호/소유자 변경이력 정보 : TD 추가<br />'+
            '6.자동차보험 특수사고 이력 정보 : TD 내용 전체 교체<br />'+
            '7.보험사고이력 상세정보 : 타이틀 띄어쓰기 -&gt; 보험사고이력 상세 정보 bullet-list -&gt; bullet-list sm 으로 변경 (사이간격 16-&gt;8)<br />'+
            '8.자동차 특수용도 이력 정보 : 사용이력 텍스트 삭제 (3개)<br />'+
            '9.텍스트 강조 컬러 레드 : 삭제 (이 페이지 공통)'
    },
    {
        'appoint':'',
        'id':'CMYMGA014',
        'class':'CMYMGA014',
        '1depth':'내차고',
        'page-name':'대출 상담 신청',
        'type':'popup',
        'planning-name':'배선일',
        'publisher-name':'김현기',
        'start-date':'2021-06-24',
        'end-date':'2021-06-29',
        'progress':'100',
        'url':'/views/mycar/CMYMGA014.html',
        'update':'2020-06-29',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMGA015',
        'class':'CMYMGA015',
        '1depth':'내차고',
        'page-name':'벌점 기록 가져오기',
        'type':'popup',
        'planning-name':'배선일',
        'publisher-name':'김현기',
        'start-date':'2021-06-25',
        'end-date':'2021-06-29',
        'progress':'100',
        'url':'/views/mycar/CMYMGA015.html',
        'update':'2020-06-27',
        'memo':
            '6/27 김민지<br />'+
            '1.공지 아이콘 안내문구 사이 간격 8px &gt; 4px<br />'+
            '2.체크버튼 이용동의 문구 사이 간격 8px &gt; 4px'
    },
    {
        'appoint':'',
        'id':'CMYMGA101',
        'class':'CMYMGA101',
        '1depth':'내차고',
        'page-name':'내차캘린더',
        'type':'page',
        'planning-name':'배선일',
        'publisher-name':'김현기',
        'start-date':'2021-06-24',
        'end-date':'2021-06-30',
        'progress':'100',
        'url':'/views/mycar/CMYMGA101.html',
        'update':'2020-07-30',
        'memo':
            '7/30 장지현<br />'+
            '1.흰색 라운드 박스 사이 간격 24 -&gt; 16<br />'+
            '2.상단 블루 박스 컬러 opacity 0.6 -&gt; 1.0<br />'+
            '3.연납 round-box 높이 26 -&gt; 24'
    },
    {
        'appoint':'',
        'id':'CMYMGA102',
        'class':'CMYMGA102',
        '1depth':'내차고',
        'page-name':'정비주기',
        'type':'page',
        'planning-name':'배선일',
        'publisher-name':'김현기',
        'start-date':'2021-06-24',
        'end-date':'2021-06-29',
        'progress':'100',
        'url':'/views/mycar/CMYMGA102.html',
        'update':'2020-06-27',
        'memo':
            '6/27 김민지<br />'+
            '본문 내용 첫째줄 예) 부터 줄바꿈'
    },
    {
        'appoint':'',
        'id':'CMYMGA103',
        'class':'CMYMGA103',
        '1depth':'내차고',
        'page-name':'정비주기 변경',
        'type':'page',
        'planning-name':'배선일',
        'publisher-name':'곽종범',
        'start-date':'2021-06-24',
        'end-date':'2021-06-28',
        'progress':'100',
        'url':'/views/mycar/CMYMGA103.html',
        'update':'2020-06-27',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMGA201',
        'class':'CMYMGA201',
        '1depth':'내차고',
        'page-name':'타이어 상세 정보',
        'type':'page',
        'planning-name':'배선일',
        'publisher-name':'곽종범',
        'start-date':'2021-06-24',
        'end-date':'2021-06-28',
        'progress':'100',
        'url':'/views/mycar/CMYMGA201.html',
        'update':'2020-06-26',
        'memo':
            '6/26 김민지<br />'+
            '전륜, 후륜에서 단면폭, 편평비, 인치 가로사이즈 109px &gt; 108px / 사이 간격 : 8px &gt; 9px'
    },
    {
        'appoint':'',
        'id':'CMYMGA202',
        'class':'CMYMGA202',
        '1depth':'내차고',
        'page-name':'타이어 등록',
        'type':'popup',
        'planning-name':'배선일',
        'publisher-name':'곽종범',
        'start-date':'2021-06-24',
        'end-date':'2021-06-28',
        'progress':'100',
        'url':'/views/mycar/CMYMGA202.html',
        'update':'2020-07-30',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMGA203',
        'class':'CMYMGA203',
        '1depth':'내차고',
        'page-name':'타이어 등록 전 확인',
        'type':'popup',
        'planning-name':'배선일',
        'publisher-name':'곽종범',
        'start-date':'2021-06-24',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/mycar/CMYMGA203.html',
        'update':'2021-06-28',
        'memo':
            '6/25 김민지<br />'+
            '1.하단문장 \'현재 차량의\'에서 줄바꿈'
    },
    {
        'appoint':'',
        'id':'CMYMGA204',
        'class':'CMYMGA204',
        '1depth':'내차고',
        'page-name':'위치교환 정보 등록',
        'type':'popup',
        'planning-name':'배선일',
        'publisher-name':'곽종범',
        'start-date':'2021-06-24',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/mycar/CMYMGA204.html',
        'update':'2021-06-28',
        'memo':
            '6/25 김민지<br />'+
            '1.list text color #000000 &gt; #222222<br />'+
            '2.list text 마침표 추가'
    },
    {
        'appoint':'',
        'id':'CMYMGA205',
        'class':'CMYMGA205',
        '1depth':'내차고',
        'page-name':'위치교환 도움말',
        'type':'popup',
        'planning-name':'배선일',
        'publisher-name':'곽종범',
        'start-date':'2021-06-24',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/mycar/CMYMGA205.html',
        'update':'2021-06-25',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMGA206',
        'class':'CMYMGA206',
        '1depth':'내차고',
        'page-name':'타이어 규격 도움말',
        'type':'popup',
        'planning-name':'배선일',
        'publisher-name':'곽종범',
        'start-date':'2021-06-24',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/mycar/CMYMGA206.html',
        'update':'2021-06-25',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYMGA901',
        'class':'CMYMGA901',
        '1depth':'내차고',
        'page-name':'마이데이터 연동 안내',
        'type':'page',
        'planning-name':'배선일',
        'publisher-name':'곽종범',
        'start-date':'2021-06-24',
        'end-date':'2021-06-25',
        'progress':'100',
        'url':'/views/mycar/CMYMGA901.html',
        'update':'2021-06-28',
        'memo':
            '6/25 김민지<br />'+
            '1.상단 텍스트 \"마이데이터 연동 안내\" &gt; \"내차고\"<br />'+
            '2.안내문구, list 내차 구매 시뮬레이션 사이 간격 32px &gt; 24px'
    },
    {
        'appoint':'leader',
        'id':'CMYCTE029',
        'class':'CMYCTE029',
        '1depth':'차테크',
        'page-name':'서비스 시작하기(팝업)',
        'type':'popup',
        'planning-name':'기나영',
        'publisher-name':'김현기',
        'start-date':'2021-10-07',
        'end-date':'2021-10-07',
        'progress':'100',
        'url':'/views/te/CMYCTE029.html',
        'update':'2021-11-09',
        'memo':
            '10/7 장지현<br />'+
            '1.신규(추후 헤더 타이틀 변경 가능성 있음)<br /><br />'+
            '10/13 장지현<br />'+
            '1.헤더 타이틀 \'차테크 서비스 이용하기\' 로 변경<br /><br />'+
            '11/9 장지현<br />'+
            '1.문구 수정 - 결함된 -&gt; 결합된'
    },
    {
        'appoint':'',
        'id':'CMYCTE001',
        'class':'CMYCTE001',
        '1depth':'차테크',
        'page-name':'차테크(서브메인)',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-14',
        'end-date':'2021-06-15',
        'progress':'100',
        'url':'/views/te/CMYCTE001.html',
        'update':'2021-12-07',
        'memo':
            '6/17 송아영<br />'+
            '1.내차보험:스마트 자동차보험 box영역: txt: 그랜저 IG 줄바꿈 2020.01.04~2021.01.03<br />'+
            '3.차테크 배너: 상단 하단 좌측만 16 (공통)<br />'+
            '4.내차팔기: txt: 올 뉴 쏘렌토, 지금바로 / 내 차 팔때, 2분투자로: opacity 70%<br />'+
            '5.btn: 신청하기/비교하기 : radius 제거<br />'+
            '6.btn: 팔아줘 차차차 바로가기 &gt; / 직거래 차차차 바로가기 &gt; : height:40<br /><br />'+
            '6/23 장지현<br />'+
            '1.배너 &gt; 나에게 딱 맞는 자동차 보험 찾기 - 지난가입내역 버튼삭제<br /><br />            '+
            '7/1 송아영<br />'+
            '1.내차팔기 배너 : (내 차 팔기 신청하기)버튼추가<br /><br />'+
            '7/6 송아영<br />'+
            '1.내차팔기 시뮬레이션 : 차량 선택 기능 추가 (차가 한대만 있을시 차량번경 버튼 노출안함)<br /><br />'+
            '7/7 송아영<br />'+
            '1.차계부 : 유지비 없음 케이스 추가<br /><br />'+
            '7/20 송아영<br />'+
            '1.신청하기 -&gt; 상담하기<br /><br />'+
            '7/21 송아영<br />'+
            '1.내가 금융 영역: 대출잔액 box내 위치 변경<br />'+
            '2.카드별 연회비 정보 추가<br /><br />'+
            '7/22 송아영<br />'+
            '1.자동차 대출 배너 : 조건충족 Y (대출 전환하면 매월 최대 129,067원 절약!) 케이스 추가 *개발영역<br />'+
            '2.메인 배너 전부 통이미지로 (1.자동차 대출 배너는 제외)<br />'+
            '3.카드연결 항목 추가 / 이미 카드 연결 되어있을시 노출 X<br /><br />'+
            '7/27 송아영<br />'+
            '1.내차 금융 영역: 적용금리 2.95% 삭제<br /><br />'+
            '7/30 송아영<br />'+
            '1.내차보험_자동차보험영역 날짜 추가<br /><br />'+
            '8/2 송아영<br />'+
            '1.내차팔기_(자산 연결된)배너 bg컬러 #29538D로 수정<br /><br />'+
            '9/1 송아영<br />'+
            '1.추천카드 영역: 카드이미지 없을때 케이스 추가<br /><br />'+
            '9/23 송아영<br />'+
            '1.내차 팔기 시뮬레이션 영역 : 직접팔기 : 판매 예상가 하단에: 팔아줘 차차차 거래 기준 &gt; 직거래 차차차 거래 기준<br /><br />'+
            '10/14 송아영<br />'+
            '1.추천카드 리스트 영역 삭제 &gt; 베너로 대체 <br />'+
            '제플린 : zpl.io/bPBxjvl<br />'+
            '*맨 하단 추천카드 배너 3배수 png로 적용<br /><br />'+
            '10/22 송아영<br />'+
            '1.내차 팔기 시뮬레이션 영역: 차량변경 항목 삭제<br /><br />'+
            '11/4 김현기<br />'+
            '1.개발요청 결함처리 : CSS수정<br />'+
            '\"팔아줘 차차차 바로가기\" 버튼 스타일<br />'+
            '\"직거래 차차차 바로가기\" 버튼 스타일<br /><br />'+
            '12/7 장지현 [현업요청]<br />'+
            '1.자동차보험, 운전자보험 배너 변경<br />'+
            '* 연결 미연결 케이스 삭제<br />'+
            '2.가입내역이 없는 경우 배너 - 히든 처리<br />'+
            '제플린 : <a href="http://zpl.io/2yD5nNG" class="link-txt" target="_blank" title="새창페이지">zpl.io/2yD5nNG</a>'
    },
    {
        'appoint':'',
        'id':'CMYCTE002',
        'class':'CMYCTE002',
        '1depth':'차테크',
        'page-name':'차계부',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/te/CMYCTE002.html',
        'update':'2021-10-14',
        'memo':
            '7/6 송아영<br />'+
            '1.헤더영역 : 전년도 표시 케이스 추가<br /><br />'+
            '7/9 장지현<br />'+
            '1.하단지출내역 : 정정케이스 추가 / 결제금액순-날짜추가<br /><br />'+
            '7/21 송아영<br />'+
            '1.차량 유지비 팝업 삭제로 인한 더보기 버튼(꺽쇠) 삭제<br />'+
            '2.하단영역: 지출합계에 미포함된 내역의 경우 가맹점 명, 이용금액 영역 회색 처리<br />'+
            '3.카드별 연회비 정보 추가<br />'+
            '4.[신규] 카테고리 0개인경우 그래프<br /><br />'+
            '8/2 송아영 <br />'+
            '1.하단 지출내역 리스트 영역 : 결제금액 고액순 > 과거순으로 변경 (그에 따른 리스트별 날짜도 변경)<br /><br />'+
            '9/1 송아영<br />'+
            '1.추천카드 영역: 카드이미지 없을때 케이스 추가<br /><br />'+
            '9/3 송아영<br />'+
            '1.\'내 차\' -&gt; \'내차\'로 띄어쓰기 수정<br /><br />'+
            '10/14 송아영<br />'+
            '1.추천카드 리스트 영역 삭제 > 베너로 대체, 위치 변경'
    },
    {
        'appoint':'',
        'id':'CMYCTE003',
        'class':'CMYCTE003',
        '1depth':'차테크',
        'page-name':'카테고리 선택 팝업',
        'type':'popup',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/te/CMYCTE003.html',
        'update':'2021-06-22',
        'memo':
            '6/22 장지현<br />'+
            '1.리스트 영역 스크롤처리 - 5개만 노출'
    },
    {
        'appoint':'',
        'id':'CMYCTE004',
        'class':'CMYCTE004',
        '1depth':'차테크',
        'page-name':'월 선택 팝업',
        'type':'popup',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/te/CMYCTE004.html',
        'update':'2021-06-22',
        'memo':
        '6/22 장지현<br />'+
        '1.리스트 영역 스크롤처리 - 4개만 노출'
    },
    {
        'appoint':'',
        'id':'CMYCTE005',
        'class':'CMYCTE005',
        '1depth':'차테크',
        'page-name':'카테고리별 지출 내역',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/te/CMYCTE005.html',
        'update':'2021-08-02',
        'memo':
            '7/9 장지현<br />'+
            '1.정정케이스 수정 / 결제금액순-날짜추가<br /><br />'+
            '7/21 송아영<br />'+
            '1.지출합계에 미포함된 내역의 경우 가맹점 명, 이용금액 영역 회색 처리<br /><br />'+
            '8/2 송아영<br />'+
            '1.지출내역 리스트 영역 : 결제금액 고액순 &gt; 과거순으로 변경 (그에 따른 리스트별 날짜도 변경)'
    },
    {
        'appoint':'',
        'id':'CMYCTE006',
        'class':'CMYCTE006',
        '1depth':'차테크',
        'page-name':'차량유지비 팝업',
        'type':'popup',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'1',
        'url':'/views/te/CMYCTE006.html',
        'update':'2021-07-21',
        'memo':
            '6/22 장지현<br />'+
            '1.리스트 영역 스크롤처리 - 3개만 노출<br /><br />'+
            '7/21 송아영<br />'+
            '1.페이지 삭제'
    },
    {
        'appoint':'',
        'id':'CMYCTE007',
        'class':'CMYCTE007',
        '1depth':'차테크',
        'page-name':'지출 내역',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'110',
        'url':'/views/te/CMYCTE007.html',
        'update':'2021-12-13',
        'memo':
            '6/17 장지현<br />'+
            '1.문구수정<br />'+
            '자동차보험 - 보험시기 -&gt; 납입시기<br /><br />'+
            '7/27 송아영<br />'+
            '1.카드_해외승인_정정 케이스 에서 원화 api가 미회신 된 경우 지출 합계에 포함하지 않음. off상태로 비활성화 처리 케이스 추가<br />'+
            '2.계좌_출금 케이스 에서 출금 내역이 외화 계좌인 경우 지출 합계에 포함하지 않음. off상태로 비활성화 처리 케이스 추가<br /><br />'+
            '8/20 송아영<br />'+
            '1.리스트 영역: 지출처 항목 추가 (계좌 출금은 \'적요\' 항목도 추가)<br />'+
            '2.\'내역이 추가되었습니다\' 토스트 안내 출력<br /><br />'+
            '12/13 김현기<br />'+
            '1.지출일시 label요소 마크업 변경'
    },
    {
        'appoint':'',
        'id':'CMYCTE008',
        'class':'CMYCTE008',
        '1depth':'차테크',
        'page-name':'카테고리 변경 안내 팝업',
        'type':'popup',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/te/CMYCTE008.html',
        'update':'2021-07-21',
        'memo':
            '6/17 김민지<br />'+
            '1.하단 체크 버튼, 안내사항 간격 8px &gt; 4px<br />'+
            '2.타이틀 마침표 추가<br /><br />'+
            '6/22 장지현<br />'+
            '1.리스트 영역 스크롤처리 - 5개만 노출'
    },
    {
        'appoint':'',
        'id':'CMYCTE009',
        'class':'CMYCTE009',
        '1depth':'차테크',
        'page-name':'메모 입력 ',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/te/CMYCTE009.html',
        'update':'2021-08-20',
        'memo':    
            '8/20 송아영<br />'+
            '1.헤더 타이틀 추가'
    },
    {
        'appoint':'',
        'id':'CMYCTE010',
        'class':'CMYCTE010',
        '1depth':'차테크',
        'page-name':'내역 추가 방식 선택 팝업',
        'type':'popup',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/te/CMYCTE010.html',
        'update':'2021-06-17',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYCTE011',
        'class':'CMYCTE011',
        '1depth':'차테크',
        'page-name':'카드 소비 내역',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-17',
        'progress':'100',
        'url':'/views/te/CMYCTE011.html',
        'update':'2021-08-25',
        'memo':
            '6/17 김민지<br />'+
            '1.검색창 \"사용 내역을 입력하세요\" 마침표 추가<br /><br />'+
            '7/21 송아영<br />'+
            '1.업데이트 기능 삭제<br /><br />'+
            '7/27 송아영<br />'+
            '1.소비 내역 없음 케이스 추가<br /><br />'+
            '8/20 송아영<br />'+
            '1.가맹점명 미회신 내역 케이스 추가<br />'+
            '2.가맹점명 미회신 툴팁 추가<br />'+
            '3.시간 옆에 일시불/6개월할부 추가<br /><br />'+
            '8/25 송아영<br />'+
            '1.미회신 툴팁영역 &gt; 박스 레이아웃으로 수정'
    },
    {
        'appoint':'',
        'id':'CMYCTE012',
        'class':'CMYCTE012',
        '1depth':'차테크',
        'page-name':'직접 내역 추가하기',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-18',
        'progress':'110',
        'url':'/views/te/CMYCTE012.html',
        'update':'2021-12-13',
        'memo':
            '12/7 김현기<br />'+
            '1. date, trme 분리 및 스크립트 수정<br />'+
            '2. datetime-local 타입 추가<br /><br />'+
            '12/13 김현기<br />'+
            '1.지출일시 label요소 마크업 변경'
    },
    {
        'appoint':'',
        'id':'CMYCTE013',
        'class':'CMYCTE013',
        '1depth':'차테크',
        'page-name':'내역 추가 안내 팝업',
        'type':'popup',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/te/CMYCTE013.html',
        'update':'2021-06-22',
        'memo':
            '6/22 장지현<br />'+
            '1.리스트 영역 스크롤처리 - 5개만 노출<br /><br />'+
            '7/21 송아영<br />'+
            '1.하단 안내 메세지 수정'
    },
    {
        'appoint':'',
        'id':'CMYCTE014',
        'class':'CMYCTE014',
        '1depth':'차테크',
        'page-name':'금융 정보',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/te/CMYCTE014.html',
        'update':'2021-09-24',
        'memo':
            '7/13 송아영<br />'+
            '1.하단 배너  버튼: 신청하기>상담하기<br /><br />'+
            '7/21 송아영<br />'+
            '1.워딩 수정: 남은 대출기간 > 대출기간<br />'+
            '2.대출일,만기일은 상단 대출 상품정보와 같은 정보이므로 삭제<br />'+
            '3.배너: 메인배너 그대로 사용 ,위치 변경<br /><br />'+
            '7/22 송아영<br />'+
            '1.배너 통이미지로<br /><br />'+
            '9/23 송아영<br />'+
            '1.기본정보 리스트 영역 : 대출원금 항목 추가'
    },
    {
        'appoint':'',
        'id':'CMYCTE015',
        'class':'CMYCTE015',
        '1depth':'차테크',
        'page-name':'대출 거래내역',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/te/CMYCTE015.html',
        'update':'2021-07-09',
        'memo':
            '6/28 송아영<br />'+
            '1.리스트영역 날짜 : 2021.04.14 로 형식변경<br /><br />'+
            '7/9 장지현<br />'+
            '1.리스트 날짜에 시간추가<br />'+
            '2.거래유형과 거래금액 분리 - 디자인가이드에 맞춰서 수정'
    },
    {
        'appoint':'',
        'id':'CMYCTE016',
        'class':'CMYCTE016',
        '1depth':'차테크',
        'page-name':'보험 정보(자동차 보험)',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/te/CMYCTE016.html',
        'update':'2021-12-07',
        'memo':
            '7/22 송아영<br />'+
            '1.배너 통이미지로<br /><br />'+
            '9/1 송아영<br />'+
            '1.납입현황 영역: 일시납 &gt; 1회차<br />'+
            '2.기본정보 리스트 영역: 결제방법 삭제<br /><br />'+
            '12/7 장지현 [현업요청]<br />'+
            '1.자동차보험 배너 변경'
    },
    {
        'appoint':'',
        'id':'CMYCTE017',
        'class':'CMYCTE017',
        '1depth':'차테크',
        'page-name':'지난 가입 내역',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':' ',
        'progress':'1',
        'url':'/views/te/CMYCTE017.html',
        'update':'2021-06-24',
        'memo':
            '페이지 삭제'
    },
    {
        'appoint':'',
        'id':'CMYCTE018',
        'class':'CMYCTE018',
        '1depth':'차테크',
        'page-name':'보험 정보(운전자 보험)',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/te/CMYCTE018.html',
        'update':'2021-12-07',
        'memo':
            '7/21 송아영<br />'+
            '1.배너: 메인배너 그대로 사용 ,위치 변경<br /><br />'+
            '7/22 송아영<br />'+
            '1.배너 통이미지로<br /><br />'+
            '8/27 송아영<br />'+
            '1.납입현황 영역 : 납입금액 삭제<br /><br />'+
            '9/1 송아영<br />'+
            '1.기본정보 리스트 영역: 결제방법 삭제<br /><br />'+
            '12/7 장지현 [현업요청]<br/ >'+
            '1.첫번째  운전자보험 배너 변경<br/ >'+
            '2.두번째 가입내역이 없는 경우 배너 - 히든 처리'
    },
    {
        'appoint':'',
        'id':'CMYCTE019',
        'class':'CMYCTE019',
        '1depth':'차테크',
        'page-name':'내역 삭제 안내 팝업',
        'type':'popup',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/te/CMYCTE019.html',
        'update':'2021-07-21',
        'memo':
            '6/22 송아영<br />'+
            '1.btn: 취소,삭제: txt size 16<br /><br />'+
            '7/21 송아영<br />'+
            '1.[신규] 카드 내역 삭제 한 경우 안내 팝업<br />'+
            '2.[신규] 계좌 출금 내역 삭제 한 경우 안내 팝업<br />'+
            '3.[신규] 현금, 할부, 보험 내역 삭제한 경우 안내 팝업'
    },
    {
        'appoint':'',
        'id':'CMYCTE020',
        'class':'CMYCTE020',
        '1depth':'차테크',
        'page-name':'지출처 입력',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/te/CMYCTE020.html',
        'update':'2021-08-20',
        'memo':
            '7/30 송아영<br />'+
            '1.지출처 입력 최대 25글자로 변경<br /><br />'+
            '8/20 송아영<br />'+
            '1.헤더 타이틀 추가<br />'+
            '2.지출처 입력 안내 토스트 메시지 출력<br />'+
            '3.인풋 플레이스 홀더 추가 : [적요] 내용'
    },
    {
        'appoint':'',
        'id':'CMYCTE021',
        'class':'CMYCTE021',
        '1depth':'차테크',
        'page-name':'입출금 통장 출금내역',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/te/CMYCTE021.html',
        'update':'2021-08-25',
        'memo':
            '7/21 송아영<br />'+
            '1.업데이트 기능 삭제<br /><br />'+
            '7/27 송아영<br />'+
            '1.출금 내역 없음 케이스 추가<br /><br />'+
            '8/20 송아영<br />'+
            '1.시간 옆에 통장명 추가<br />'+
            '2.전송요구 여부에 따른 케이스추가<br />'+
            '적요정보없음 / - / 출금<br />'+
            '3.적요 또는 거래메모 미회신 툴팁 추가<br /><br />'+
            '8/25 송아영<br />'+
            '1.미회신 툴팁영역 &gt; 박스 레이아웃으로 수정<br />'+
            '2.적요 정보없음 &gt; 지출처 정보없음으로 수정'
    },
    {
        'appoint':'',
        'id':'CMYCTE022',
        'class':'CMYCTE022',
        '1depth':'차테크',
        'page-name':'보험 납입내역(자동차 보험)',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/te/CMYCTE022.html',
        'update':'2021-06-22',
        'memo':
            '6/22 송아영<br />'+
            '1.txt 11,439,330원 :아래간격 32px &gt; 24px<br />'+
            '2.list영역: txt 신용카드: medium'
    },
    {
        'appoint':'',
        'id':'CMYCTE023',
        'class':'CMYCTE023',
        '1depth':'차테크',
        'page-name':'보험 납입내역(운전자 보험)',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-06-17',
        'end-date':'2021-06-18',
        'progress':'100',
        'url':'/views/te/CMYCTE023.html',
        'update':'2021-06-28',
        'memo':
            '6/22 송아영<br />'+
            '1.txt 11,439,330원 :아래간격 32px &gt; 24px<br />'+
            '2.list영역: txt 자동이체: medium (전부적용)<br /><br />'+
            '6/28 송아영<br />'+
            '1.리스트영역 날짜 : (수) 요일삭제'
    },
    {
        'appoint':'',
        'id':'CMYCTE025',
        'class':'CMYCTE025',
        '1depth':'차테크',
        'page-name':'로딩페이지(공통)',
        'type':'page',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-07-21',
        'end-date':'2021-07-21',
        'progress':'100',
        'url':'/views/te/CMYCTE025.html',
        'update':'2021-07-30',
        'memo':
            '7/21 송아영<br />'+
            '1.[신규] 로딩화면: 공통 type01<br /><br />'+
            '7/30 송아영<br />'+
            '1.txt: 잠시만 기다려 주세요.: 아래간격 4px &gt; 8px<br />'+
            '2.txt: 해당 페이지로 이동 중입니다 : #888888'
    },
    {
        'appoint':'',
        'id':'CMYCTE026',
        'class':'CMYCTE026',
        '1depth':'차테크',
        'page-name':'카드 자산 연결 유도 팝업',
        'type':'popup',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-07-22',
        'end-date':'2021-07-22',
        'progress':'100',
        'url':'/views/te/CMYCTE026.html',
        'update':'2021-07-30',
        'memo':
            '7/22 송아영<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYCTE027',
        'class':'CMYCTE027',
        '1depth':'차테크',
        'page-name':'은행 자산 연결 유도 팝업',
        'type':'popup',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-07-22',
        'end-date':'2021-07-22',
        'progress':'100',
        'url':'/views/te/CMYCTE027.html',
        'update':'2021-07-30',
        'memo':
            '7/22 송아영<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYCTE028',
        'class':'CMYCTE028',
        '1depth':'차테크',
        'page-name':'가맹점명 정보수집 동의 유도 팝업',
        'type':'popup',
        'planning-name':'기나영',
        'publisher-name':'곽종범',
        'start-date':'2021-08-20',
        'end-date':'2021-08-23',
        'progress':'100',
        'url':'/views/te/CMYCTE028.html',
        'update':'2021-08-23',
        'memo':
            '8/20 송아영<br />'+
            '1.신규'
    },
    {
        'appoint':'leader',
        'id':'CMYETC001',
        'class':'CMYETC001',
        '1depth':'공동인증서관리',
        'page-name':'공동인증서 관리(PC)',
        'type':'url',
        'planning-name':'이연지',
        'publisher-name':'곽종범',
        'start-date':'2021-07-06',
        'end-date':'2021-07-06',
        'progress':'100',
        'url':'http://samdory.synology.me/kbcapital/views/certificate.html',
        'update':'2021-10-07',
        'memo':
            '7/6 송아영<br />'+
            '1.신규<br /><br />'+            
            '8/12 송아영<br />'+
            '1.상단 (공동인증서 내보내기 버튼) 아래 안내문구 수정<br />'+
            '2.하단에 유의사항 박스 전체랑 그 아래 설치하기 버튼 삭제<br /><br />'+
            '8/19 송아영<br />'+
            '1.공동인증서 내보내기 순서 _스마트폰 : 4번 문구 수정<br /><br />'+
            '10/07 장지현<br />'+
            '1.차차차 gnb &gt; 공동인증서 관리 메뉴 추가<br />'+
            '제플린 : <a href="http://zpl.io/2pNgq6J" class="link-txt" target="_blank" title="새창페이지">zpl.io/2pNgq6J</a><br />'+
            '2.클릭시 새창으로 띄우기<br />'+
            '제플린 : <a href="http://zpl.io/aMw39vJ" class="link-txt" target="_blank" title="새창페이지">zpl.io/aMw39vJ</a>'
    },
    {
        'appoint':'',
        'id':'CMYETC002',
        'class':'CMYETC002',
        '1depth':'공동인증서관리',
        'page-name':'안내팝업(PC)',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'곽종범',
        'start-date':'2021-07-06',
        'end-date':'2021-07-06',
        'progress':'1',
        'url':'/views/etc/CMYETC002.html',
        'update':'2021-08-12',
        'memo':
            '7/6 송아영<br />'+
            '1.신규<br /><br />'+
            '8/12<br />'+
            '안내팝업 삭제'
    },
    {
        'appoint':'',
        'id':'CMYETC003',
        'class':'CMYETC003',
        '1depth':'공동인증서관리',
        'page-name':'마이데이터 서비스안내',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'곽종범',
        'start-date':'2021-07-05',
        'end-date':'2021-07-05',
        'progress':'100',
        'url':'/views/etc/CMYETC003.html',
        'update':'2021-07-30',
        'memo':
            '7/5 송아영<br />'+
            '1.신규<br /><br />'+
            '8/18 송아영<br />'+
            '1.버튼명 수정'
    },
    {
        'appoint':'',
        'id':'CMYETC004',
        'class':'CMYETC004',
        '1depth':'공동인증서관리',
        'page-name':'인증서 관리',
        'type':'page',
        'planning-name':'이연지',
        'publisher-name':'곽종범',
        'start-date':'2021-07-05',
        'end-date':'2021-07-05',
        'progress':'100',
        'url':'/views/etc/CMYETC004.html',
        'update':'2021-12-07',
        'memo':
            '7/5 송아영<br />'+
            '1.신규<br /><br />'+
            '7/9 장지현<br />'+
            '1.상단 문구 폰트<br />'+
            'PC에 생성된 인증번호 12자리를 입력하세요.<br />'+
            '크기 24bold -&gt; 16regular<br />'+
            '컬러 #222 -&gt; #666<br /><br />'+
            '8/18 장지현<br />'+
            '1.상단 문구 수정(PC에 -&gt; PC에서)<br />'+
            '2.버튼 위치 수정<br />'+
            '3.버튼명 수정<br />'+
            '4.PC에서 가져오기 : 이미지 다시 적용<br /><br />'+
            '12/7 장지현<br />'+
            '1.버튼명 수정 : 확인 -&gt; 공동인증서 가져오기'
    },
    {
        'appoint':'',
        'id':'CMYETC005',
        'class':'CMYETC005',
        '1depth':'공동인증서관리',
        'page-name':'인증번호 입력오류',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'곽종범',
        'start-date':'2021-07-05',
        'end-date':'2021-07-05',
        'progress':'100',
        'url':'/views/etc/CMYETC005.html',
        'update':'2021-07-30',
        'memo':
            '7/5 송아영<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYETC007',
        'class':'CMYETC007',
        '1depth':'공동인증서관리',
        'page-name':'공동인증서목록',
        'type':'popup',
        'planning-name':'이연지',
        'publisher-name':'곽종범',
        'start-date':'2021-07-05',
        'end-date':'2021-07-05',
        'progress':'100',
        'url':'/views/etc/CMYETC007.html',
        'update':'2021-08-19',
        'memo':
            '8/18 송아영<br />'+
            '1.신규(기존 공통화면 CMYCMM019 사용안함)<br /><br />'+
            '8/19 송아영<br />'+
            '1.만료일이 지난 경우는 리스트에 노출되지 않음<br /><br />'+
            '8/25 송아영<br />'+
            '1.공동인증서 가져오기 버튼 위치 페이지 하단으로 변경(개발이슈)'
    },
    {
        'appoint':'',
        'id':'CMYETC008',
        'class':'CMYETC008',
        '1depth':'공동인증서관리',
        'page-name':'공동인증서 입력 오류 팝업',
        'type':'popup',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-08-19',
        'end-date':'2021-08-19',
        'progress':'100',
        'url':'/views/etc/CMYETC008.html',
        'update':'2021-08-19',
        'memo':
            '8/19 송아영<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYETC009',
        'class':'CMYETC009',
        '1depth':'공동인증서관리',
        'page-name':'공동인증서 입력 오류 팝업',
        'type':'popup',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-08-25',
        'end-date':'2021-08-25',
        'progress':'100',
        'url':'/views/etc/CMYETC009.html',
        'update':'2021-08-25',
        'memo':
            '8/25 송아영<br />'+
            '1.신규'
    },
    {
        'appoint':'leader',
        'id':'CMYCMM001',
        'class':'CMYCMM001',
        '1depth':'공통',
        'page-name':'약관 팝업',
        'type':'popup',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-09',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/cm/CMYCMM001.html',
        'update':'2021-06-18',
        'memo':
            '6/16 장지현<br />'+
            '1.안내 문구 삭제'
    },
    {
        'appoint':'',
        'id':'CMYCMM002',
        'class':'CMYCMM002',
        '1depth':'공통',
        'page-name':'약관 상세 팝업',
        'type':'popup',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-09',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/cm/CMYCMM002.html',
        'update':'2021-06-18',
        'memo':
            '6/16 장지현<br />'+
            '1.바텀시트 풀팝업(공통)'
    },
    {
        'appoint':'',
        'id':'CMYCMM003',
        'class':'CMYCMM003',
        '1depth':'공통',
        'page-name':'마이데이터 서비스 안내',
        'type':'page',
        'planning-name':'조승모',
        'publisher-name':'김현기',
        'start-date':'2021-06-25',
        'end-date':'2021-09-27',
        'progress':'100',
        'url':'/views/cm/CMYCMM003.html',
        'update':'2021-10-28',
        'memo':
            '9/27 장지현<br />'+
            '1.신규(일러 인터랙션 적용)<br /><br />'+
            '10/19<br />'+
            '1.CSS수정<br /><br />'+
            '10/20 장지현<br />'+
            '1.2,4 번째 디바이스 이미지 수정<br />'+
            '2.1-4번째 맨 하단 문구 수정<br /><br />'+
            '10/27 장지현<br />'+
            '1.슬라이드 로드 시 문제개선<br /><br />'+
            '10/28 김현기<br />'+
            '1.css 수정<br />'+
            '2.. .mydata-service-item 클래스 dl dt 요소안에<br />'+
            '&lt;img src=\"/images/cm/img-mydata-bg.png\" class=\"bg-mydata-img\" alt="" /&gt;  요소 추가(재요청)<br />'+
            '/images/cm/img-mydata-bg.png 해당 경로안에 이미지도 추가 재요청'
    },
    {
        'appoint':'',
        'id':'CMYCMM003-1',
        'class':'CMYCMM003-1',
        '1depth':'공통',
        'page-name':'KB차차차 마이데이터 서비스',
        'type':'page',
        'planning-name':'조승모',
        'publisher-name':'김현기',
        'start-date':'2021-11-23',
        'end-date':'2021-11-23',
        'progress':'100',
        'url':'/views/cm/CMYCMM003-1.html',
        'update':'2021-11-23',
        'memo':
            '11/23 장지현<br />'+
            '1.신규'
    },
    {
        'appoint':'',
        'id':'CMYCMM004',
        'class':'CMYCMM004',
        '1depth':'공통',
        'page-name':'휴대폰 본인확인 팝업',
        'type':'page',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-09',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/cm/CMYCMM004.html',
        'update':'2021-09-13',
        'memo':
            '6/18 장지현<br />'+
            '1.상단문구추가 / 약관전체동의 순서 변경<br /><br />'+
            '7/22 장지현<br />'+
            '1.최상단문구 폰트 수정 크기 24볼드 -&gt;  16레귤러, 색상 #222 -&gt; #666<br /><br />'+
            '8/13 장지현<br />'+
            '1.문구수정<br /><br />'+
            '9/6 장지현<br />'+
            '1.띄어쓰기수정<br /><br />'+
            '9/8 장지현<br />'+
            '1.약관 동의 리스트 문구 수정<br /><br />'+
            '9/14<br />'+
            '1.동의 박스 체크아이콘과 텍스트링크 분리<br /><br />'+
            '9/17<br />'+
            '1.select-box 통신사 수정'
    },
    {
        'appoint':'',
        'id':'CMYCMM004-1',
        'class':'CMYCMM004-1',
        '1depth':'공통',
        'page-name':'통신사 선택',
        'type':'popup',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-09',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/cm/CMYCMM004-1.html',
        'update':'2021-06-18',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYCMM005',
        'class':'CMYCMM005',
        '1depth':'공통',
        'page-name':'휴대폰 본인인증 오류메시지',
        'type':'popup',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-09',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/cm/CMYCMM005.html',
        'update':'2021-06-18',
        'memo':
            ''
    },
    { 
        'appoint':'',
        'id':'CMYCMM021',
        'class':'CMYCMM021',
        '1depth':'공통',
        'page-name':'개인정보 이용·제공 동의',
        'type':'popup',
        'planning-name':'조승모',
        'publisher-name':'김현기',
        'start-date':'2021-09-08',
        'end-date':'2021-09-09',
        'progress':'100',
        'url':'/views/cm/CMYCMM021.html',
        'update':'2021-09-09',
        'memo':
            '9/8 장지현<br />'+
            '1.신규 - 약관 상세 스타일 제공'
    },
    {
        'appoint':'',
        'id':'CMYCMM022',
        'class':'CMYCMM022',
        '1depth':'공통',
        'page-name':'고유식별정보 처리 동의',
        'type':'popup',
        'planning-name':'조승모',
        'publisher-name':'김현기',
        'start-date':'2021-09-08',
        'end-date':'2021-09-09',
        'progress':'100',
        'url':'/views/cm/CMYCMM022.html',
        'update':'2021-09-09',
        'memo':
            '9/8 장지현<br />'+
            '1.신규 - 약관 상세 스타일 제공'
    },
    {
        'appoint':'',
        'id':'CMYCMM023',
        'class':'CMYCMM023',
        '1depth':'공통',
        'page-name':'서비스 이용약관 동의',
        'type':'popup',
        'planning-name':'조승모',
        'publisher-name':'김현기',
        'start-date':'2021-09-08',
        'end-date':'2021-09-09',
        'progress':'100',
        'url':'/views/cm/CMYCMM023.html',
        'update':'2021-09-09',
        'memo':
            '9/8 장지현<br />'+
            '1.신규 - 약관 상세 스타일 제공'
    },
    {
        'appoint':'',
        'id':'CMYCMM024',
        'class':'CMYCMM024',
        '1depth':'공통',
        'page-name':'통신사 서비스 이용약관 동의',
        'type':'popup',
        'planning-name':'조승모',
        'publisher-name':'김현기',
        'start-date':'2021-09-08',
        'end-date':'2021-09-09',
        'progress':'100',
        'url':'/views/cm/CMYCMM024.html',
        'update':'2021-09-09',
        'memo':
            '9/8 장지현<br />'+
            '신규 - 약관 상세 스타일 제공'
    },
    {
        'appoint':'',
        'id':'CMYCMM006',
        'class':'CMYCMM006',
        '1depth':'공통',
        'page-name':'본인인증 완료',
        'type':'page',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-09',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/cm/CMYCMM006.html',
        'update':'2021-06-18',
        'memo':
            '9/14<br />'+
            '체크아이콘 인터렉션 적용'
    },
    {
        'appoint':'',
        'id':'CMYCMM007',
        'class':'CMYCMM007',
        '1depth':'공통',
        'page-name':'본인확인 문자 인증(iOS) 팝업',
        'type':'popup',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-09',
        'end-date':'2021-06-18',
        'progress':'1',
        'url':'/views/cm/CMYCMM007.html',
        'update':'2021-09-08',
        'memo':
            '9/8 장지현<br />'+
            '1.페이지 삭제'
    },
    {
        'appoint':'',
        'id':'CMYCMM008',
        'class':'CMYCMM008',
        '1depth':'공통',
        'page-name':'본인확인 문자 인증 오류메시지(iOS)',
        'type':'popup',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-09',
        'end-date':'2021-06-09',
        'progress':'1',
        'url':'/views/cm/CMYCMM008.html',
        'update':'2021-09-08',
        'memo':
            '9/8 장지현<br />'+
            '1.페이지 삭제'
    },
    {
        'appoint':'',
        'id':'CMYCMM009',
        'class':'CMYCMM009',
        '1depth':'공통',
        'page-name':'아이디/비밀번호 로그인(일반회원)',
        'type':'page',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-25',
        'end-date':'2021-06-21',
        'progress':'100',
        'url':'/views/cm/CMYCMM009.html',
        'update':'2021-09-16',
        'memo':
            '8/12 장지현<br />'+
            '1.로그인방식선택 버튼 텍스트라인으로 스타일 수정<br /><br />'+
            '9/16 송아영<br />'+
            '1.sns 계정으로 로그인 영역: Apple 로고 추가<br />'+
            '2.sns로고 사이간격 24>16'
    },
    {
        'appoint':'',
        'id':'CMYCMM010',
        'class':'CMYCMM010',
        '1depth':'공통',
        'page-name':'로그인 방식 선택 팝업',
        'type':'popup',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-25',
        'end-date':'2021-06-21',
        'progress':'100',
        'url':'/views/cm/CMYCMM010.html',
        'update':'2021-06-21',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYCMM011',
        'class':'CMYCMM011',
        '1depth':'공통',
        'page-name':'PIN 번호 입력 팝업',
        'type':'popup',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':' ',
        'end-date':' ',
        'progress':'1',
        'url':'/views/cm/CMYCMM011.html',
        'update':'2021-06-21',
        'memo':
            '페이지 삭제'
    },
    {
        'appoint':'',
        'id':'CMYCMM012',
        'class':'CMYCMM012',
        '1depth':'공통',
        'page-name':'패턴 입력 팝업',
        'type':'popup',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':' ',
        'end-date':' ',
        'progress':'1',
        'url':'/views/cm/CMYCMM012.html',
        'update':'2021-06-21',
        'memo':
            '페이지 삭제'
    },
    {
        'appoint':'',
        'id':'CMYCMM013',
        'class':'CMYCMM013',
        '1depth':'공통',
        'page-name':'아이디/비밀번호 로그인(딜러회원)',
        'type':'page',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-25',
        'end-date':'2021-06-21',
        'progress':'100',
        'url':'/views/cm/CMYCMM013.html',
        'update':'2021-06-21',
        'memo':
            '8/12 장지현<br />'+
            '1.로그인방식선택 버튼 텍스트라인으로 스타일 수정'
    },
    {
        'appoint':'',
        'id':'CMYCMM014',
        'class':'CMYCMM014',
        '1depth':'공통',
        'page-name':'아이디 찾기',
        'type':'page',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-25',
        'end-date':'2021-06-21',
        'progress':'100',
        'url':'/views/cm/CMYCMM014.html',
        'update':'2021-06-21',
        'memo':
            '9/1 장지현<br />'+
            '1.통신사 삭제'
    },
    {
        'appoint':'',
        'id':'CMYCMM015',
        'class':'CMYCMM015',
        '1depth':'공통',
        'page-name':'아이디 찾기 완료',
        'type':'page',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-25',
        'end-date':'2021-06-21',
        'progress':'100',
        'url':'/views/cm/CMYCMM015.html',
        'update':'2021-09-16',
        'memo':
            '9/16<br />'+
            '체크 인터렉션 아이콘 변경'
    },
    {
        'appoint':'',
        'id':'CMYCMM016',
        'class':'CMYCMM016',
        '1depth':'공통',
        'page-name':'비밀번호 찾기',
        'type':'page',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-25',
        'end-date':'2021-06-21',
        'progress':'100',
        'url':'/views/cm/CMYCMM016.html',
        'update':'2021-06-21',
        'memo':
            '9/1 장지현<br />'+
            '1.통신사 삭제'
    },
    {
        'appoint':'',
        'id':'CMYCMM017',
        'class':'CMYCMM017',
        '1depth':'공통',
        'page-name':'비밀번호 재설정',
        'type':'page',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-25',
        'end-date':'2021-06-21',
        'progress':'100',
        'url':'/views/cm/CMYCMM017.html',
        'update':'2021-06-21',
        'memo':
            ''
    },
    {
        'appoint':'',
        'id':'CMYCMM018',
        'class':'CMYCMM018',
        '1depth':'공통',
        'page-name':'회원가입',
        'type':'page',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-25',
        'end-date':'2021-06-21',
        'progress':'100',
        'url':'/views/cm/CMYCMM018.html',
        'update':'2021-09-16',
        'memo':
            '9/16 송아영<br />'+
            '1.sns 계정으로 로그인 영역: Apple 로고 추가<br />'+
            '2.sns로고 사이간격 24>16'
    },
    {
        'appoint':'',
        'id':'CMYCMM019',
        'class':'CMYCMM019',
        '1depth':'공통',
        'page-name':'공동인증서 선택',
        'type':'page',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-09',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/cm/CMYCMM019.html',
        'update':'2021-07-23',
        'memo':
            '7/23 장지현<br />'+
            '1.만료 케이스 디자인수정 : 아이콘 투명도 50%, 텍스트 #888 (만료일제외), 만료 상태아이콘 추가, 박스 border #ddd 추가<br />'+
            '2.인증서없음 페이지 추가<br /><br />'+
            '9/6 장지현<br />'+
            '1.날짜 표기수정'
    },
    {
        'appoint':'',
        'id':'CMYCMM020',
        'class':'CMYCMM020',
        '1depth':'공통',
        'page-name':'공동인증서 비밀번호 입력',
        'type':'page',
        'planning-name':'조승모',
        'publisher-name':'곽종범',
        'start-date':'2021-06-09',
        'end-date':'2021-06-09',
        'progress':'100',
        'url':'/views/cm/CMYCMM020.html',
        'update':'2021-07-23',
        'memo':
            '7/23 장지현<br />'+
            '1.해당 인증서 추가<br /><br />'+
            '9/6 장지현<br />'+
            '1.날짜 표기수정'
    },
    {
        'appoint':'',
        'id':'CMYCMM025',
        'class':'CMYCMM025',
        '1depth':'공통',
        'page-name':'404 에러',
        'type':'page',
        'planning-name':'조승모',
        'publisher-name':'김현기',
        'start-date':'2021-10-05',
        'end-date':'2021-10-05',
        'progress':'100',
        'url':'/views/cm/CMYCMM025.html',
        'update':'2021-10-05',
        'memo':
            '10/5 장지현<br />'+
            '1.신규<br /><br />'+
            '10/12 코드간소화<br />'+
            '10/13 meta charset=\'utf-8\' 한글깨짐 방지'
    },
    {
        'appoint':'',
        'id':'CMYCMM026',
        'class':'CMYCMM026',
        '1depth':'공통',
        'page-name':'페이지 준비중',
        'type':'page',
        'planning-name':'조승모',
        'publisher-name':'김현기',
        'start-date':'2021-10-05',
        'end-date':'2021-10-05',
        'progress':'100',
        'url':'/views/cm/CMYCMM026.html',
        'update':'2021-10-05',
        'memo':
            '10/5 장지현<br />'+
            '1.신규<br /><br />'+
            '10/12 코드간소화<br />'+
            '10/13 meta charset=\'utf-8\' 한글깨짐 방지'
    },
];


var guide_data2 = [
    { 
        'appoint':'',
        'id':'coo001',
        'class':'coo001',
        '1depth':'쿠콘',
        'page-name':'개별본인인증_휴대폰인증',
        'type':'page',
        'planning-name':'',
        'publisher-name':'박문영',
        'start-date':'2021-07-12',
        'end-date':'2021-07-14',
        'progress':'100',
        'url':'/views/coo/coo001.html',
        'update':'2021-09-13',
        'memo':
            '7/15 김민지<br />'+
            '1.휴대폰 본인확인 전체동의 폰트 굵기 700 &gt; 500<br />'+
            '2.로고 이미지 꺠짐<br />'+
            '3.약관동의 사이 간격 조정<br /><br />'+
            '9/13 마크업 변경, form-checkbox와 txt-link 텍스트 분리'
    },
    { 
        'appoint':'',
        'id':'coo002',
        'class':'coo002',
        '1depth':'쿠콘',
        'page-name':'개별본인인증_추가인증선택',
        'type':'page',
        'planning-name':'',
        'publisher-name':'박문영',
        'start-date':'2021-07-12',
        'end-date':'2021-07-14',
        'progress':'100',
        'url':'/views/coo/coo002.html',
        'update':'2021-07-16',
        'memo':
            '7/15 김민지<br />'+
            '1.로고 이미지 꺠짐'
    },
    {
        'appoint':'',
        'id':'coo003',
        'class':'coo003',
        '1depth':'쿠콘',
        'page-name':'개별본인인증_카카오&토스',
        'type':'page',
        'planning-name':'',
        'publisher-name':'박문영',
        'start-date':'2021-07-12',
        'end-date':'2021-07-14',
        'progress':'100',
        'url':'/views/coo/coo003.html',
        'update':'2021-07-16',
        'memo':
            '7/15 김민지<br />'+
            '1.상단 개별본인인증 콘텐츠와 로고 간격 72px &gt; 48px<br />'+
            '2.카카오 페이인증 컬러 FEC600 변경<br />'+
            '3.상단 캐피탈 로고이미지 깨짐'
    },
    {
        'appoint':'',
        'id':'coo004',
        'class':'coo004',
        '1depth':'쿠콘',
        'page-name':'개별본인인증_전송요구내역선택',
        'type':'page',
        'planning-name':'',
        'publisher-name':'박문영',
        'start-date':'2021-07-12',
        'end-date':'2021-07-14',
        'progress':'100',
        'url':'/views/coo/coo004.html',
        'update':'2021-07-16',
        'memo':
            '7/15 김민지<br />'+
            '1.전체선택 폰트 굵기 700>500<br />'+
            '2.하단 라디오 선택에서 예, 아니오, 1년, 1년 범위 내 직접 선택 폰트 크기 14px &gt; 16px/ 폰트 컬러 #66666 &gt; #22222<br />'+
            '3.1년 범위 내 직접 선택 텍스트 및 선택 박스 사이 간격 16px &gt; 24px<br />'+
            '4.계좌목록 사이 간격 조정<br />'+
            '5.라디오 버튼 선택시에만 예 하단에 기본정보 및 추가정보 생성/ 1년 범위 내 직접선택 선택시에만 날짜선택 박스 생성'
    },
    {
        'appoint':'',
        'id':'coo005',
        'class':'coo005',
        '1depth':'쿠콘',
        'page-name':'개별본인인증_표준전송요구서',
        'type':'page',
        'planning-name':'',
        'publisher-name':'박문영',
        'start-date':'2021-07-12',
        'end-date':'2021-07-14',
        'progress':'100',
        'url':'/views/coo/coo005.html',
        'update':'2021-07-16',
        'memo':
            '7/15 김민지<br />'+
            '1.하단 전송 요구 문구 폰트 컬러 #66666 &gt; 신용주체자 성명은 #88888 나머지 문구 #22222<br />'+
            '2.(전자)서명 오른쪽 여백 16px &gt; 24px<br />'+
            '3.하단 확인 버튼 컬러 #FEC600'
    },
];