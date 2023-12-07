var UI_GUIDE = UI_GUIDE||{};
UI_GUIDE.GNB = {
    init : function(){
        this.setButton();
        this.setAllMenuButton();
        this.setAllMenuCloseButton();
    },
    reset : function(){
        $(".GNB>ul>li").each(function(index, item){
            $(item).removeClass("on");
        });
    },
    setAllMenuButton : function(){
        var _self=this;
        $(".btn-allmenu").click(function(e){
            _self.open();
        });
    },
    setAllMenuCloseButton : function(){
        var _self=this;
        $(".btn-allmenu-close").click(function(e){
            _self.close();
        });
    },
    setButton : function(){
        var _self = this;
        $(".GNB>ul>li").click(function(e){
            _self.reset();
            var id = $(this).attr("id");
            switch(id){
                case "styleGuide":
                    UI_GUIDE.content.load("./style_guide.html");
                    break;
                case "component":
                    UI_GUIDE.content.load("./components.html");
                    break;
                case "template":
                    UI_GUIDE.content.load("./templates.html");
                    break;
                case "pages":
                    UI_GUIDE.content.load("./pages.html");
                    break;
                case "revise":
                    UI_GUIDE.content.load("./../txt/20211118.html");
                    break;
                default:
                    UI_GUIDE.content.load("./main.html");
                    break;
            }
            $(this).addClass("on");
            _self.close();
        });

        $(".title>h2").click(function(e){
            _self.reset();
            UI_GUIDE.content.load("./main.html");
            _self.close();
        });

        $(".title>h2").trigger( "click" );
    },
    open : function(){
        $(".GNB").addClass("on");
    },
    close : function(){
        $(".GNB").removeClass("on");
    }
};
UI_GUIDE.LNB = {
    init : function(){
        this.setButton();
    },
    setButton : function(){
        var _self = this;
        $(".LNB>ul>li").click(function(e){
            console.log("ddddd");
            setTimeout(function(){
                $(window).scrollLeft(0);
            },10);
        });
    }
};
UI_GUIDE.content = {
    init : function(){
        $(".btn-lnb").click(function(){
            $(".wrap").toggleClass("lnb");
        });
    },
    load : function(url){
        $(".contents>iframe").attr("src",url)
    }
};
UI_GUIDE.page = {
    init : function(){
        this.setList();
        this.setListTableHeightLimit();
    },
    setList : function(){
        var cnt = 0;        
        var tag = "";

        for(var i=0;i<guide_data.length;i++){
            try{
                cnt++;                

                if(guide_data[i]["progress"] == 100){
                    if(guide_data[i]["appoint"] =='leader'){
                        tag += "<tr class='subtit'>";
                        tag += "<td colspan='14'>" + guide_data[i]["1depth"] + "</td>";
                        tag += "</tr>";
                        tag += "<tr class='complete'>";
                    } else if(guide_data[i]["appoint"] =='split'){
                        tag += "<tr class='complete split'>";
                    } else {
                        tag += "<tr class='complete'>";
                    }
                    tag += "<td>"+cnt+"</td>";
                } else if(guide_data[i]["progress"] == 110){
                    if(guide_data[i]["appoint"] =='leader'){
                        tag += "<tr class='subtit'>";
                        tag += "<td colspan='14'>" + guide_data[i]["1depth"] + "</td>";
                        tag += "</tr>";
                        tag += "<tr class='complete new'>";
                    } else if(guide_data[i]["appoint"] =='split'){
                        tag += "<tr class='complete split'>";
                    } else {
                        tag += "<tr class='complete new'>";
                    }
                    tag += "<td>"+cnt+"</td>";
                    guide_data[i]["progress"] = 100;
                } else if(guide_data[i]["progress"] == 50){
                    if(guide_data[i]["appoint"] =='leader'){ 
                        tag += "<tr class='subtit'>";
                        tag += "<td colspan='14'>" + guide_data[i]["1depth"] + "</td>";
                        tag += "</tr>";
                        tag += "<tr class='script'>";
                    } else if(guide_data[i]["appoint"] =='split'){
                        tag += "<tr class='script split'>";
                    } else {
                        tag += "<tr class='script'>";
                    }
                    tag += "<td>"+cnt+"</td>";
                } else if(guide_data[i]["progress"] == 99){
                    if(guide_data[i]["appoint"] =='leader'){
                        tag += "<tr class='subtit'>";
                        tag += "<td colspan='14'>" + guide_data[i]["1depth"] + "</td>";
                        tag += "</tr>";
                        tag += "<tr class='common'>";
                    } else if(guide_data[i]["appoint"] =='split'){
                        tag += "<tr class='common split'>";
                    } else {
                        tag += "<tr class='common'>";
                    }
                    tag += "<td></td>";
                    cnt--;
                } else if(guide_data[i]["progress"] == 70){
                    if(guide_data[i]["appoint"] =='leader'){
                        tag += "<tr class='subtit'>";
                        tag += "<td colspan='14'>" + guide_data[i]["1depth"] + "</td>";
                        tag += "</tr>";
                        tag += "<tr class='correct'>";
                    } else if(guide_data[i]["appoint"] =='split'){
                        tag += "<tr class='correct split'>";
                    } else {
                        tag += "<tr class='correct'>";
                    }
                    tag += "<td>"+cnt+"</td>";
                } else if(guide_data[i]["progress"] == 1){
                    if(guide_data[i]["appoint"] =='leader'){
                        tag += "<tr class='subtit'>";
                        tag += "<td colspan='14'>" + guide_data[i]["1depth"] + "</td>";
                        tag += "</tr>";
                        tag += "<tr class='delete'>";
                    } else if(guide_data[i]["appoint"] =='split'){
                        tag += "<tr class='delete split'>";
                    } else {
                        tag += "<tr class='delete'>";
                    }
                    tag += "<td></td>";
                    cnt--;
                } else if(guide_data[i]["progress"] == 0){
                    if(guide_data[i]["appoint"] =='leader'){
                        tag += "<tr class='subtit'>";
                        tag += "<td colspan='14'>" + guide_data[i]["1depth"] + "</td>";
                        tag += "</tr>";
                        tag += "<tr class='nodata'>";
                    } else if(guide_data[i]["appoint"] =='split'){
                        tag += "<tr class='nodata split'>";
                    } else {
                        tag += "<tr class='nodata'>";
                    }
                    tag += "<td>"+cnt+"</td>";
                } else{
                    tag += "<tr>";
                    tag += "<td>"+cnt+"</td>";
                }                
                tag += "<td>"+guide_data[i]["id"]+"</td>";
                if(guide_data[i]["class"] == undefined){
                    guide_data[i]["class"] = "";
                };
                tag += "<td>"+guide_data[i]["class"]+"</td>";
                tag += "<td>"+guide_data[i]["1depth"]+"</td>";
                tag += "<td>"+guide_data[i]["page-name"]+"</td>";
                if(guide_data[i]["type"] == undefined){
                    guide_data[i]["type"] = "page"
                }
                tag += "<td>"+guide_data[i]["type"]+"</td>";
                tag += "<td>"+guide_data[i]["planning-name"]+"</td>";
                tag += "<td>"+guide_data[i]["publisher-name"]+"</td>";
                tag += "<td>"+guide_data[i]["start-date"]+"</td>";
                tag += "<td>"+guide_data[i]["end-date"]+"</td>";
                tag += "<td>"+guide_data[i]["progress"]+"%</td>";
                tag += "<td>";
                if(guide_data[i]["update"] == undefined){
                    guide_data[i]["update"] = "";
                };
                tag += guide_data[i]["update"] + "</td>";
                tag += "<td><div class='table-url-link'>";
                if(guide_data[i]["type"] == "page"){                    
                    tag += "<a href='.."+guide_data[i]["url"]+"' target='_blank' class='btn_view page_view'>페이지보기</a>";
                    tag += "<a href='.."+guide_data[i]["url"]+"' target='_blank' class='txt-link'>"+guide_data[i]["id"]+".html</a>";
                } else if(guide_data[i]["type"] == "popup"){                    
                    tag += "<a href='../guide/popupView.html?url=.."+guide_data[i]["url"]+"' target='_blank' class='btn_view popup_view'>팝업보기</a>";
                    tag += "<a href='../guide/popupView.html?url=.."+guide_data[i]["url"]+"' target='_blank' class='txt-link'>"+guide_data[i]["id"]+".html</a>";
                } else if(guide_data[i]["type"] == "popup_loading"){
                    tag += "<a href='../guide/popupView.html?url=.."+guide_data[i]["url"]+"&type=loading' target='_blank' class='btn_view popup_loading_view'>팝업보기</a>";
                    tag += "<a href='../guide/popupView.html?url=.."+guide_data[i]["url"]+"&type=loading' target='_blank' class='txt-link'>"+guide_data[i]["url"]+".html</a>";                    
                } else if(guide_data[i]["type"] == "url"){
                    tag += "<a href='"+guide_data[i]["url"]+"' target='_blank' class='btn_view url_view'>URL보기</a>";
                    tag += "<a href='"+guide_data[i]["url"]+"' target='_blank' class='txt-link'>"+guide_data[i]["url"]+".html</a>";                    
                }
                tag += "</div></td>";

                if(guide_data[i]["memo"] == undefined){
                    guide_data[i]["memo"] = "";
                };
                tag += "<td class='memo'><div class=\"height-imit\">"+guide_data[i]["memo"]+"</div></td>";
                tag += "</tr>";                
            }catch(e){
                console.log(e.message)
            }
        } $("#pageList>tbody").append(tag);

        cnt = 0;
        tag = "";

        for(var i=0;i<guide_data2.length;i++){
            try{
                cnt++;
                if(guide_data2[i]["progress"] == 100){
                    if(guide_data2[i]["appoint"] =='leader'){
                        tag += "<tr class='subtit'>";
                        tag += "<td colspan='14'>" + guide_data2[i]["1depth"] + "</td>";
                        tag += "</tr>";
                        tag += "<tr class='complete'>";
                    } else if(guide_data[i]["appoint"] =='split'){
                        tag += "<tr class='complete split'>";
                    } else {
                        tag += "<tr class='complete'>";
                    }
                    tag += "<td>"+cnt+"</td>";
                } else if(guide_data[i]["progress"] == 110){
                    if(guide_data2[i]["appoint"] =='leader'){
                        tag += "<tr class='subtit'>";
                        tag += "<td colspan='14'>" + guide_data2[i]["1depth"] + "</td>";
                        tag += "</tr>";
                        tag += "<tr class='complete new'>";
                    } else if(guide_data2[i]["appoint"] =='split'){
                        tag += "<tr class='complete new split'>";
                    } else {
                        tag += "<tr class='complete new'>";
                    }
                    tag += "<td>"+cnt+"</td>";
                } else if(guide_data2[i]["progress"] == 50){
                    if(guide_data2[i]["appoint"] =='leader'){
                        tag += "<tr class='subtit'>";
                        tag += "<td colspan='14'>" + guide_data2[i]["1depth"] + "</td>";
                        tag += "</tr>";
                        tag += "<tr class='script'>";
                    } else if(guide_data2[i]["appoint"] =='split'){
                        tag += "<tr class='script split'>";
                    } else {
                        tag += "<tr class='script'>";
                    }
                    tag += "<td>"+cnt+"</td>";
                } else if(guide_data2[i]["progress"] == 99){
                    if(guide_data2[i]["appoint"] =='leader'){
                        tag += "<tr class='subtit'>";
                        tag += "<td colspan='14'>" + guide_data2[i]["1depth"] + "</td>";
                        tag += "</tr>";
                        tag += "<tr class='common'>";
                    } else if(guide_data2[i]["appoint"] =='split'){
                        tag += "<tr class='common split'>";
                    } else {
                        tag += "<tr class='common'>";
                    }
                    tag += "<td></td>";
                    cnt--;
                } else if(guide_data2[i]["progress"] == 70){
                    if(guide_data2[i]["appoint"] =='leader'){ 
                        tag += "<tr class='subtit'>";
                        tag += "<td colspan='14'>" + guide_data2[i]["1depth"] + "</td>";
                        tag += "</tr>";
                        tag += "<tr class='correct'>";
                    } else if(guide_data2[i]["appoint"] =='split'){
                        tag += "<tr class='correct split'>";
                    } else {
                        tag += "<tr class='correct'>";
                    }
                    tag += "<td>"+cnt+"</td>";
                } else if(guide_data2[i]["progress"] == 1){
                    if(guide_data2[i]["appoint"] =='leader'){
                        tag += "<tr class='subtit'>";
                        tag += "<td colspan='14'>" + guide_data2[i]["1depth"] + "</td>";
                        tag += "</tr>";
                        tag += "<tr class='delete'>";
                    } else if(guide_data2[i]["appoint"] =='split'){
                        tag += "<tr class='delete split'>";
                    } else {
                        tag += "<tr class='delete'>";
                    }
                    tag += "<td></td>";
                    cnt--;
                } else if(guide_data2[i]["progress"] == 0){
                    if(guide_data2[i]["appoint"] =='leader'){
                        tag += "<tr class='subtit'>";
                        tag += "<td colspan='14'>" + guide_data2[i]["1depth"] + "</td>";
                        tag += "</tr>";
                        tag += "<tr class='nodata'>";
                    } else if(guide_data2[i]["appoint"] =='split'){
                        tag += "<tr class='nodata split'>";
                    } else {
                        tag += "<tr class='nodata'>";
                    }
                    tag += "<td>"+cnt+"</td>";
                } else{
                    tag += "<tr>";
                    tag += "<td>"+cnt+"</td>";
                }                
                tag += "<td>"+guide_data2[i]["id"]+"</td>";
                if(guide_data2[i]["class"] == undefined){
                    guide_data2[i]["class"] = "";
                };
                tag += "<td>"+guide_data2[i]["class"]+"</td>";
                tag += "<td>"+guide_data2[i]["1depth"]+"</td>";
                tag += "<td>"+guide_data2[i]["page-name"]+"</td>";
                if(guide_data2[i]["type"] == undefined){
                    guide_data2[i]["type"] = "page"
                }
                tag += "<td>"+guide_data2[i]["type"]+"</td>";
                tag += "<td>"+guide_data2[i]["planning-name"]+"</td>";
                tag += "<td>"+guide_data2[i]["publisher-name"]+"</td>";
                tag += "<td>"+guide_data2[i]["start-date"]+"</td>";
                tag += "<td>"+guide_data2[i]["end-date"]+"</td>";
                tag += "<td>"+guide_data2[i]["progress"]+"%</td>";
                tag += "<td>";
                if(guide_data2[i]["update"] == undefined){
                    guide_data2[i]["update"] = "";
                };
                tag += guide_data2[i]["update"] + "</td>";
                tag += "<td><div class='table-url-link'>";
                if(guide_data2[i]["type"] == "page"){                    
                    tag += "<a href='.."+guide_data2[i]["url"]+"' target='_blank' class='btn_view page_view'>페이지보기</a>";
                    tag += "<a href='.."+guide_data2[i]["url"]+"' target='_blank' class='txt-link'>"+guide_data2[i]["id"]+".html</a>";
                } else if(guide_data2[i]["type"] == "popup"){
                    tag += "<a href='../guide/popupView.html?url=.."+guide_data2[i]["url"]+"' target='_blank' class='btn_view popup_view'>팝업보기</a>";
                    tag += "<a href='../guide/popupView.html?url=.."+guide_data2[i]["url"]+"' target='_blank' class='txt-link'>"+guide_data2[i]["id"]+".html</a>";                    
                } else if(guide_data2[i]["type"] == "popup_loading"){
                    tag += "<a href='../guide/popupView.html?url=.."+guide_data2[i]["url"]+"&type=loading' target='_blank' class='btn_view popup_loading_view'>팝업보기</a>";
                    tag += "<a href='../guide/popupView.html?url=.."+guide_data2[i]["url"]+"&type=loading' target='_blank' class='txt-link'>"+guide_data2[i]["url"]+".html</a>";                    
                } else if(guide_data2[i]["type"] == "url"){
                    tag += "<a href='"+guide_data2[i]["url"]+"' target='_blank' class='btn_view url_view'>URL보기</a>";
                    tag += "<a href='"+guide_data2[i]["url"]+"' target='_blank' class='txt-link'>"+guide_data2[i]["url"]+".html</a>";
                }
                tag += "</div></td>";
                
                if(guide_data2[i]["memo"] == undefined){
                    guide_data2[i]["memo"] = "";
                };
                tag += "<td><div class=\"height-imit\">"+guide_data2[i]["memo"]+"</div></td>";
                tag += "</tr>";
            }catch(e){
                console.log(e.message)
            }
        } $("#pageList2>tbody").append(tag);


        /* 페이지 통계 시작 */

        var pageNumTot  = 0,
            pageNumTot1 = 0,
            pageNumTot2 = 0,
            pageNumTot3 = 0,
            pageNumTot4 = 0,
            pageNumTot5 = 0,
            pageNumTot6 = 0,
            pageNumTot7 = 0;

        var pageNumDel  = 0,
            pageNumDel1 = 0,
            pageNumDel2 = 0,
            pageNumDel3 = 0,
            pageNumDel4 = 0,
            pageNumDel5 = 0,
            pageNumDel6 = 0,
            pageNumDel7 = 0;

        var pageNumCom  = 0,
            pageNumCom1 = 0,
            pageNumCom2 = 0,
            pageNumCom3 = 0,
            pageNumCom4 = 0,
            pageNumCom5 = 0,
            pageNumCom6 = 0,
            pageNumCom7 = 0;

        var pageNumCur  = 0,
            pageNumCur1 = 0,
            pageNumCur2 = 0,
            pageNumCur3 = 0,
            pageNumCur4 = 0,
            pageNumCur5 = 0,
            pageNumCur6 = 0,
            pageNumCur7 = 0;

        var tag = "";

        for(var i=0;i<guide_data.length;i++){
            try {
                if(guide_data[i]["1depth"] == "내자산"){
                    pageNumTot1++;
                    if(guide_data[i]["progress"] == 1){
                        pageNumDel1++;
                    } else if(guide_data[i]["progress"] == 99){
                        pageNumCom1++;
                    }
                } else if(guide_data[i]["1depth"] == "내차구매"){
                    pageNumTot2++;
                    if(guide_data[i]["progress"] == 1){
                        pageNumDel2++;
                    } else if(guide_data[i]["progress"] == 99){
                        pageNumCom2++;
                    }
                } else if(guide_data[i]["1depth"] == "내차고"){
                    pageNumTot3++;
                    if(guide_data[i]["progress"] == 1){
                        pageNumDel3++;
                    } else if(guide_data[i]["progress"] == 99){
                        pageNumCom3++;
                    }
                } else if(guide_data[i]["1depth"] == "차테크"){
                    pageNumTot4++;
                    if(guide_data[i]["progress"] == 1){
                        pageNumDel4++;
                    } else if(guide_data[i]["progress"] == 99){
                        pageNumCom4++;
                    }
                } else if(guide_data[i]["1depth"] == "공동인증서관리"){
                    pageNumTot5++;
                    if(guide_data[i]["progress"] == 1){
                        pageNumDel5++;
                    } else if(guide_data[i]["progress"] == 99){
                        pageNumCom5++;
                    }
                } else if(guide_data[i]["1depth"] == "공통"){
                    pageNumTot6++;
                    if(guide_data[i]["progress"] == 1){
                        pageNumDel6++;
                    } else if(guide_data[i]["progress"] == 99){
                        pageNumCom6++;
                    }
                }
            } catch(e){
                console.log(e.message)
            }
        }

        for(var i=0;i<guide_data2.length;i++){
            try {
                if(guide_data2[i]["1depth"] == "쿠콘"){
                    pageNumTot7++;
                    if(guide_data2[i]["progress"] == 1){
                        pageNumDel7++;
                    } else if(guide_data2[i]["progress"] == 99){
                        pageNumCom7++;
                    }
                }
            } catch(e){
                console.log(e.message)
            }
        }

        pageNumCur1 = pageNumTot1 - (pageNumCom1 + pageNumDel1);
        pageNumCur2 = pageNumTot2 - (pageNumCom2 + pageNumDel2);
        pageNumCur3 = pageNumTot3 - (pageNumCom3 + pageNumDel3);
        pageNumCur4 = pageNumTot4 - (pageNumCom4 + pageNumDel4);
        pageNumCur5 = pageNumTot5 - (pageNumCom5 + pageNumDel5);
        pageNumCur6 = pageNumTot6 - (pageNumCom6 + pageNumDel6);
        pageNumCur7 = pageNumTot7 - (pageNumCom7 + pageNumDel7);

        pageNumTot = pageNumTot1 + pageNumTot2 + pageNumTot3 + pageNumTot4 + pageNumTot5 + pageNumTot6 + pageNumTot7;
        pageNumCom = pageNumCom1 + pageNumCom2 + pageNumCom3 + pageNumCom4 + pageNumCom5 + pageNumCom6 + pageNumCom7;
        pageNumDel = pageNumDel1 + pageNumDel2 + pageNumDel3 + pageNumDel4 + pageNumDel5 + pageNumDel6 + pageNumDel7;
        pageNumCur = pageNumCur1 + pageNumCur2 + pageNumCur3 + pageNumCur4 + pageNumCur5 + pageNumCur6 + pageNumCur7;

        var depthCnt = 7;

        for(var i=0; i<depthCnt; i++){
            try {
                tag += "<tr>";
                if(i == 0){
                    tag += "<th>"+"내자산"+"</th>";
                    tag += "<td>"+pageNumTot1+"</td>";
                    tag += "<td>"+pageNumCom1+"</td>";
                    tag += "<td>"+pageNumDel1+"</td>";
                    tag += "<td>"+pageNumCur1+"</td>";
                } else if(i == 1){
                    tag += "<th>"+"내차구매"+"</th>";
                    tag += "<td>"+pageNumTot2+"</td>";
                    tag += "<td>"+pageNumCom2+"</td>";
                    tag += "<td>"+pageNumDel2+"</td>";
                    tag += "<td>"+pageNumCur2+"</td>";
                } else if(i == 2){
                    tag += "<th>"+"내차고"+"</th>";
                    tag += "<td>"+pageNumTot3+"</td>";
                    tag += "<td>"+pageNumCom3+"</td>";
                    tag += "<td>"+pageNumDel3+"</td>";
                    tag += "<td>"+pageNumCur3+"</td>";
                } else if(i == 3){
                    tag += "<th>"+"차테크"+"</th>";
                    tag += "<td>"+pageNumTot4+"</td>";
                    tag += "<td>"+pageNumCom4+"</td>";
                    tag += "<td>"+pageNumDel4+"</td>";
                    tag += "<td>"+pageNumCur4+"</td>";
                } else if(i == 4){
                    tag += "<th>"+"공동인증서관리"+"</th>";
                    tag += "<td>"+pageNumTot5+"</td>";
                    tag += "<td>"+pageNumCom5+"</td>";
                    tag += "<td>"+pageNumDel5+"</td>";
                    tag += "<td>"+pageNumCur5+"</td>";
                } else if(i == 5){
                    tag += "<th>"+"공통"+"</th>";
                    tag += "<td>"+pageNumTot6+"</td>";
                    tag += "<td>"+pageNumCom6+"</td>";
                    tag += "<td>"+pageNumDel6+"</td>";
                    tag += "<td>"+pageNumCur6+"</td>";
                } else if(i == 6){
                    tag += "<th>"+"쿠콘"+"</th>";
                    tag += "<td>"+pageNumTot7+"</td>";
                    tag += "<td>"+pageNumCom7+"</td>";
                    tag += "<td>"+pageNumDel7+"</td>";
                    tag += "<td>"+pageNumCur7+"</td>";
                }
                tag += "</tr>";                
            } catch(e){
                console.log(e.message)
            }
        }
        tag += "<tr class=\"bottom-total\">";
        tag += "<th>총계</th>";
        tag += "<td>"+pageNumTot+"</td>";
        tag += "<td>"+pageNumCom+"</td>";
        tag += "<td>"+pageNumDel+"</td>";
        tag += "<td>"+pageNumCur+"</td>";
        tag += "</tr>";

        $("#pageList3>tbody").append(tag);

        /* 페이지 통계 끝 */

    },
    setListTableHeightLimit : function(){
        $('.height-imit').each(function(index,sender){
            if(sender.scrollHeight > sender.offsetHeight){
                var maxScroll = sender.scrollHeight - sender.offsetHeight;
                sender.scrollTop = maxScroll;
            } //console.log(sender.offsetHeight);
        })
    },
}
