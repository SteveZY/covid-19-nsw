(this["webpackJsonpcovid-19-nsw"]=this["webpackJsonpcovid-19-nsw"]||[]).push([[0],{435:function(e,t,a){e.exports=a(933)},440:function(e,t,a){},783:function(e,t,a){},931:function(e,t,a){},933:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"statistics",(function(){return g}));var d={};a.r(d),a.d(d,"dailyHistorys",(function(){return re})),a.d(d,"todaySummarys",(function(){return de})),a.d(d,"predicts",(function(){return oe}));var o={};a.r(o),a.d(o,"dailyHistorys",(function(){return ne})),a.d(o,"todaySummarys",(function(){return me})),a.d(o,"predicts",(function(){return le}));var n={};a.r(n),a.d(n,"dailyHistorys",(function(){return ie})),a.d(n,"todaySummarys",(function(){return ue})),a.d(n,"predicts",(function(){return ce}));var m={};a.r(m),a.d(m,"dailyHistorys",(function(){return Ne})),a.d(m,"todaySummarys",(function(){return be})),a.d(m,"predicts",(function(){return se}));var l={};a.r(l),a.d(l,"dailyHistorys",(function(){return fe})),a.d(l,"todaySummarys",(function(){return pe})),a.d(l,"predicts",(function(){return Ce}));var i={};a.r(i),a.d(i,"dailyHistorys",(function(){return ye})),a.d(i,"todaySummarys",(function(){return we})),a.d(i,"predicts",(function(){return he}));var u={};a.r(u),a.d(u,"dailyHistorys",(function(){return Me})),a.d(u,"todaySummarys",(function(){return Te})),a.d(u,"predicts",(function(){return Ee}));var c={};a.r(c),a.d(c,"dailyHistorys",(function(){return ve})),a.d(c,"todaySummarys",(function(){return Se})),a.d(c,"predicts",(function(){return ge}));var N={};a.r(N),a.d(N,"todaySummarys",(function(){return De}));var b={};a.r(b),a.d(b,"source",(function(){return We}));for(var s=a(0),f=a.n(s),p=a(89),C=a.n(p),y=(a(440),a(423)),w=a(401),h=a.n(w),M=a(944),T=a(107),E=a.n(T),v=function(e,t,a){var r=t.map((function(e){var t=e.date,a=e.todayNewNumber;return[new Date(t),a]}));return{legend:{show:!0,selected:{total:!0,"predicted total":!1,"new cases on the day":!0}},tooltip:{show:!0},xAxis:{type:"time"},yAxis:{type:"value"},series:[{type:"line",name:"total",data:t.map((function(e){var t=e.date,a=e.totalConfirmedNumber;return[new Date(t),a]})),itemStyle:{normal:{label:{show:!0}}}},{type:"line",name:"predicted total",data:a.map((function(e){var t=e.date,a=e.predictedTotalConfirmedNumber;return[new Date(t),a]})),smooth:!1,itemStyle:{normal:{label:{show:!0,position:"right"},lineStyle:{width:2,type:"dotted"}}}},{type:"bar",name:"new cases on the day",data:r,itemStyle:{normal:{label:{show:!0,position:"top"}}}}]}},S=function(e){e.id;var t=e.dailyHistorys,a=e.predicts;return f.a.createElement(f.a.Fragment,null,f.a.createElement(E.a,{option:v(0,t,a)}))},g=[{"calc total":5442,Date:"2020-03-15T12:30:00.000Z",State:"WA",confirmed:18,excluded:5424},{Date:"2020-03-15T11:00:00.000Z",State:"NSW",confirmed:134,"under investigation":1924,"total tested":22567,excluded:20511,"calc total":22569},{Date:"2020-03-14T11:00:00.000Z",State:"NSW",confirmed:112,"under investigation":1668,"total tested":20496,excluded:18716,"calc total":20496},{Date:"2020-03-13T11:00:00.000Z",State:"NSW",confirmed:92,"under investigation":1928,"total tested":16685,excluded:14665,"calc total":16685},{Date:"2020-03-12T13:00:00.000Z",State:"NSW",confirmed:78,"under investigation":1831,"total tested":12949,excluded:11040,"calc total":12949},{Date:"2020-03-11T13:00:00.000Z",State:"NSW",confirmed:65,"under investigation":1004,"total tested":10221,excluded:9152,"calc total":10221},{Date:"2020-03-10T21:00:00.000Z",State:"NSW",confirmed:61,"under investigation":1008,"total tested":10165,excluded:9096,"calc total":10165},{Date:"2020-03-10T07:00:00.000Z",State:"NSW",confirmed:55,"under investigation":618,"total tested":9034,excluded:8361,"calc total":9034},{Date:"2020-03-09T16:32:00.000Z",State:"NSW",confirmed:47,"under investigation":476,"total tested":8371,excluded:7848,"calc total":8371},{Date:"2020-03-08T21:00:00.000Z",State:"NSW",confirmed:40,"under investigation":576,"total tested":7977,excluded:7361,"calc total":7977},{Date:"2020-03-08T09:00:00.000Z",State:"NSW",confirmed:38,"under investigation":488,"total tested":7216,excluded:6690,"calc total":7216},{Date:"2020-03-07T21:00:00.000Z",State:"NSW",confirmed:36,"under investigation":488,"total tested":7214,excluded:6690,"calc total":7214},{Date:"2020-03-07T09:00:00.000Z",State:"NSW",confirmed:34,"under investigation":545,"total tested":6796,excluded:6217,"calc total":6796}],D=[],W=[],x=[],A=[],R=0;R<g.length;R++){var k=g[R],H=new Date(k.Date);D.push([H,k.confirmed]),W.push([H,k["under investigation"]]),x.push([H,k.excluded]),A.push([H,k["total tested"]])}var F={totalConfirmed:D,wip:W,excluded:x,totalTested:A},Z=function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement(E.a,{option:(e=F,{legend:{show:!0},tooltip:{show:!0},xAxis:{type:"time"},yAxis:{type:"value",axisLabel:{formatter:function(e){return e>=1e3?"".concat(e/1e3,"k"):e}}},series:[{type:"line",name:"total confirmed",data:e.totalConfirmed},{type:"line",name:"under investigation",data:e.wip},{type:"line",name:"tested and excluded",data:e.excluded},{type:"line",name:"total tested",data:e.totalTested}]})}));var e},I=[{name:"overseas",value:60},{name:"contact of confirmed case",value:38},{name:"under investigation",value:23},{name:"not identified",value:13}],J=function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement(E.a,{option:(e=I,{legend:{orient:"vertical",left:0},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},series:[{type:"pie",radius:["50%","70%"],avoidLabelOverlap:!0,left:50,name:"source",data:e,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"12",fontWeight:"bold"}}}}]})}));var e},O=function(e){var t=e.id,a=e.dailyHistorys,r=e.predicts;return f.a.createElement(f.a.Fragment,null,f.a.createElement("h2",{className:"ui small header"},"Trending:"),f.a.createElement(M.a,{columns:"equal",stackable:!0},f.a.createElement(M.a.Column,null,f.a.createElement(S,{id:t,dailyHistorys:a,predicts:r})),"NSW"===t&&f.a.createElement(f.a.Fragment,null,f.a.createElement(M.a.Column,null,f.a.createElement(J,null)),f.a.createElement(M.a.Column,null,f.a.createElement(Z,null)))))},V=a(943),z=a(941),L=(a(783),function(e){var t,a,r,d=e.id,o=e.data,n=o.totalConfirmedNumber,m=o.totalRecoveredNumber,l=o.totalDeathNumber,i=o.totalRemianNumber,u=o.todayNewNumber,c=g.filter((function(e){return e.State===d}))[0];return c&&(t=c["under investigation"],a=c.excluded,r=c["total tested"]),f.a.createElement("div",{className:"summary"},f.a.createElement("h2",{className:"ui small header"},"Summary data:"),f.a.createElement(M.a,{columns:"equal"},f.a.createElement(M.a.Column,null,f.a.createElement(V.a,{color:"blue",label:"Remain",value:i})),f.a.createElement(M.a.Column,null,f.a.createElement(V.a,{label:"Total",value:n})),f.a.createElement(M.a.Column,null,f.a.createElement(V.a,{color:"grey",label:"Death",value:l})),f.a.createElement(M.a.Column,null,f.a.createElement(V.a,{color:"green",label:"Recover",value:m}))),f.a.createElement(z.a,{unstackable:!0,compact:!0},f.a.createElement(z.a.Body,null,f.a.createElement(z.a.Row,{negative:!0},f.a.createElement(z.a.Cell,null,"New cases today"),f.a.createElement(z.a.Cell,null,0===u?f.a.createElement(f.a.Fragment,null,"Pending data"):u)),t&&f.a.createElement(z.a.Row,null,f.a.createElement(z.a.Cell,null,"Cases under investigation"),f.a.createElement(z.a.Cell,null,t)),a&&f.a.createElement(z.a.Row,null,f.a.createElement(z.a.Cell,null,"Cases tested and excluded"),f.a.createElement(z.a.Cell,null,a))),r&&f.a.createElement(z.a.Footer,null,f.a.createElement(z.a.Row,null,f.a.createElement(z.a.HeaderCell,null,"Total tested"),f.a.createElement(z.a.HeaderCell,null,r)))))}),U=a(405),j={NSW:"shrwCf9WUJrBKNZHB",VIC:"shrKh4I4XuWbUr0mh",QLD:"shrqzrS1Px0JXrM4h",WA:"shrY62a2829RpTIfn",SA:"shrGGCzlLOETWFzNd",TAS:"shrfEwUbg7HbtyIOm",NT:"shrrueAhnuETjOJVW",ACT:"shrmTt5x64kBoIHOs"},B=function(e){var t=e.id;return f.a.createElement(f.a.Fragment,null,f.a.createElement("h2",{className:"ui small header"},"Confirmed cases details(best view on desktop):"),f.a.createElement(U.a,{className:"airtable-embed",url:"https://airtable.com/embed/".concat(j[t],"?backgroundColor=teal"),frameborder:"0",onmousewheel:"",width:"100%",height:"500"}))},_=a(939),q=a(945),P=a(942),Q=function(){return f.a.createElement(_.a,{trigger:f.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Joanna and her friends (Disclaimer)")},f.a.createElement(_.a.Header,null,"Team, Thanks and Disclaimer"),f.a.createElement(_.a.Content,null,f.a.createElement(_.a.Description,null,f.a.createElement(q.a,null,"Team member"),f.a.createElement(P.a,{bulleted:!0},f.a.createElement(P.a.Item,null,f.a.createElement("a",{href:"https://wileam.com/"},"Joanna Wu"),": design and develop the website, update the data."),f.a.createElement(P.a.Item,null,f.a.createElement("a",{href:"https://ngot.me/"},"Henry Zhuang"),": devops and update the data"),f.a.createElement(P.a.Item,null,f.a.createElement("a",{href:"https://ivanfan.net/"},"Ivan(Yifan) Fan"),": developer, add regression prediction functionality"),f.a.createElement(P.a.Item,null,f.a.createElement("a",{href:"https://www.sydneytoday.com/"},"Sydney Today"),": media, provide updated data from NSW Health"),f.a.createElement(P.a.Item,null,"Nan Zhang, update and analysis the data.")),f.a.createElement(q.a,null,"Thanks to"),f.a.createElement(P.a,{bulleted:!0},f.a.createElement(P.a.Item,null,f.a.createElement("a",{href:"https://www.echartsjs.com/"},"echarts")),f.a.createElement(P.a.Item,null,f.a.createElement("a",{href:"https://airtable.com/"},"airtable"))),f.a.createElement(q.a,null,"Disclaimer"),f.a.createElement(P.a,{bulleted:!0},f.a.createElement(P.a.Item,null,"The views and options expressed in this blog are those of the authors and do not necessarily reflect the official policy or position of any other agency, organization, employer or company"),f.a.createElement(P.a.Item,null,'Authors are not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information'),f.a.createElement(P.a.Item,null,"We do not make any warranties about the completeness, reliability and accuracy of these information. None of the authors, contributors, adminstrators or anyone else connected with this website, in anyway whatsoever, can be responsible for your use of the information contained in or linked from these web pages. Any action you take upon the information on this website is strictly at your own risk. and we will not be liable for any losses and damages in connection with the use of our website.")))))},G=function(){return f.a.createElement(_.a,{trigger:f.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"contribute?")},f.a.createElement(_.a.Header,null,"Help needed!"),f.a.createElement(_.a.Content,null,f.a.createElement(_.a.Description,null,f.a.createElement("p",null,"Now as there is no api provided, all the data are manually updated."),f.a.createElement("p",null,"We need more people to keep the data updated!! Please join telegram"," ","",f.a.createElement("a",{href:"https://t.me/covid_19_au"},"@covid_19_au")," if you wanna help, what we need is simply: when you saw data updated, notify in the group with the source link, thank you!"))))},K=function(){return f.a.createElement("p",null,f.a.createElement("small",null,"Made by ",f.a.createElement(Q,null),", ",f.a.createElement(G,null)))},X=a(947),Y=a(250),$=function(){var e="https://covid-19.wileam.com/";return f.a.createElement(X.a,X.a.onlyComputer,f.a.createElement("p",{style:{textAlign:"right"}},"Share the page:",f.a.createElement(Y.Facebook,{link:e}),f.a.createElement(Y.Twitter,{link:e})))},ee=a(253),te=a(70),ae=a(938),re=[{date:"Mar 01, 2020",todayNewNumber:2,totalConfirmedNumber:6},{date:"Mar 02, 2020",todayNewNumber:3,totalConfirmedNumber:9},{date:"Mar 03, 2020",todayNewNumber:6,totalConfirmedNumber:15},{date:"Mar 04, 2020",todayNewNumber:7,totalConfirmedNumber:22},{date:"Mar 05, 2020",todayNewNumber:3,totalConfirmedNumber:25},{date:"Mar 06, 2020",todayNewNumber:3,totalConfirmedNumber:28},{date:"Mar 07, 2020",todayNewNumber:8,totalConfirmedNumber:36},{date:"Mar 08, 2020",todayNewNumber:4,totalConfirmedNumber:40},{date:"Mar 09, 2020",todayNewNumber:7,totalConfirmedNumber:47},{date:"Mar 10, 2020",todayNewNumber:14,totalConfirmedNumber:61},{date:"Mar 11, 2020",todayNewNumber:4,totalConfirmedNumber:65},{date:"Mar 12, 2020",todayNewNumber:13,totalConfirmedNumber:78},{date:"Mar 13, 2020",todayNewNumber:14,totalConfirmedNumber:92},{date:"Mar 14, 2020",todayNewNumber:20,totalConfirmedNumber:112},{date:"Mar 15, 2020",todayNewNumber:23,totalConfirmedNumber:135},{date:"Mar 16, 2020",todayNewNumber:36,totalConfirmedNumber:171}],de={totalConfirmedNumber:171,totalRecoveredNumber:4,totalDeathNumber:3,totalRemianNumber:164,todayNewNumber:36},oe=[{date:"Mar 01, 2020",predictedTotalConfirmedNumber:9},{date:"Mar 02, 2020",predictedTotalConfirmedNumber:11},{date:"Mar 03, 2020",predictedTotalConfirmedNumber:14},{date:"Mar 04, 2020",predictedTotalConfirmedNumber:18},{date:"Mar 05, 2020",predictedTotalConfirmedNumber:22},{date:"Mar 06, 2020",predictedTotalConfirmedNumber:27},{date:"Mar 07, 2020",predictedTotalConfirmedNumber:33},{date:"Mar 08, 2020",predictedTotalConfirmedNumber:40},{date:"Mar 09, 2020",predictedTotalConfirmedNumber:48},{date:"Mar 10, 2020",predictedTotalConfirmedNumber:57},{date:"Mar 11, 2020",predictedTotalConfirmedNumber:68},{date:"Mar 12, 2020",predictedTotalConfirmedNumber:82},{date:"Mar 13, 2020",predictedTotalConfirmedNumber:97},{date:"Mar 14, 2020",predictedTotalConfirmedNumber:116},{date:"Mar 15, 2020",predictedTotalConfirmedNumber:137},{date:"Mar 16, 2020",predictedTotalConfirmedNumber:163},{date:"Mar 17, 2020",predictedTotalConfirmedNumber:193},{date:"Mar 18, 2020",predictedTotalConfirmedNumber:229},{date:"Mar 19, 2020",predictedTotalConfirmedNumber:271}],ne=[{date:"Feb 25, 2020",todayNewNumber:3,totalConfirmedNumber:7},{date:"Mar 01, 2020",todayNewNumber:2,totalConfirmedNumber:9},{date:"Mar 04, 2020",todayNewNumber:1,totalConfirmedNumber:10},{date:"Mar 07, 2020",todayNewNumber:1,totalConfirmedNumber:11},{date:"Mar 08, 2020",todayNewNumber:1,totalConfirmedNumber:12},{date:"Mar 09, 2020",todayNewNumber:3,totalConfirmedNumber:15},{date:"Mar 10, 2020",todayNewNumber:3,totalConfirmedNumber:18},{date:"Mar 11, 2020",todayNewNumber:9,totalConfirmedNumber:27},{date:"Mar 13, 2020",todayNewNumber:9,totalConfirmedNumber:36},{date:"Mar 14, 2020",todayNewNumber:13,totalConfirmedNumber:49},{date:"Mar 15, 2020",todayNewNumber:8,totalConfirmedNumber:57},{date:"Mar 16, 2020",todayNewNumber:14,totalConfirmedNumber:71}],me={totalConfirmedNumber:71,totalRecoveredNumber:8,totalDeathNumber:0,totalRemianNumber:63,todayNewNumber:14},le=[{date:"Feb 25, 2020",predictedTotalConfirmedNumber:10},{date:"Mar 01, 2020",predictedTotalConfirmedNumber:8},{date:"Mar 04, 2020",predictedTotalConfirmedNumber:8},{date:"Mar 07, 2020",predictedTotalConfirmedNumber:9},{date:"Mar 08, 2020",predictedTotalConfirmedNumber:12},{date:"Mar 09, 2020",predictedTotalConfirmedNumber:16},{date:"Mar 10, 2020",predictedTotalConfirmedNumber:21},{date:"Mar 11, 2020",predictedTotalConfirmedNumber:28},{date:"Mar 13, 2020",predictedTotalConfirmedNumber:37},{date:"Mar 14, 2020",predictedTotalConfirmedNumber:46},{date:"Mar 15, 2020",predictedTotalConfirmedNumber:58},{date:"Mar 16, 2020",predictedTotalConfirmedNumber:71},{date:"Mar 17, 2020",predictedTotalConfirmedNumber:85},{date:"Mar 18, 2020",predictedTotalConfirmedNumber:101},{date:"Mar 19, 2020",predictedTotalConfirmedNumber:118}],ie=[{date:"Feb 28, 2020",todayNewNumber:4,totalConfirmedNumber:9},{date:"Mar 03, 2020",todayNewNumber:1,totalConfirmedNumber:10},{date:"Mar 04, 2020",todayNewNumber:1,totalConfirmedNumber:11},{date:"Mar 05, 2020",todayNewNumber:2,totalConfirmedNumber:13},{date:"Mar 06, 2020",todayNewNumber:1,totalConfirmedNumber:14},{date:"Mar 08, 2020",todayNewNumber:1,totalConfirmedNumber:15},{date:"Mar 10, 2020",todayNewNumber:3,totalConfirmedNumber:18},{date:"Mar 11, 2020",todayNewNumber:2,totalConfirmedNumber:20},{date:"Mar 12, 2020",todayNewNumber:7,totalConfirmedNumber:27},{date:"Mar 13, 2020",todayNewNumber:8,totalConfirmedNumber:35},{date:"Mar 14, 2020",todayNewNumber:11,totalConfirmedNumber:46},{date:"Mar 15, 2020",todayNewNumber:16,totalConfirmedNumber:62}],ue={totalConfirmedNumber:62,totalRecoveredNumber:8,totalDeathNumber:1,totalRemianNumber:53,todayNewNumber:0},ce=[{date:"Feb 28, 2020",predictedTotalConfirmedNumber:12},{date:"Mar 03, 2020",predictedTotalConfirmedNumber:10},{date:"Mar 04, 2020",predictedTotalConfirmedNumber:9},{date:"Mar 05, 2020",predictedTotalConfirmedNumber:10},{date:"Mar 06, 2020",predictedTotalConfirmedNumber:11},{date:"Mar 08, 2020",predictedTotalConfirmedNumber:14},{date:"Mar 10, 2020",predictedTotalConfirmedNumber:18},{date:"Mar 11, 2020",predictedTotalConfirmedNumber:23},{date:"Mar 12, 2020",predictedTotalConfirmedNumber:30},{date:"Mar 13, 2020",predictedTotalConfirmedNumber:38},{date:"Mar 14, 2020",predictedTotalConfirmedNumber:47},{date:"Mar 15, 2020",predictedTotalConfirmedNumber:57},{date:"Mar 16, 2020",predictedTotalConfirmedNumber:69},{date:"Mar 17, 2020",predictedTotalConfirmedNumber:82},{date:"Mar 18, 2020",predictedTotalConfirmedNumber:96}],Ne=[{date:"Feb 22, 2020",todayNewNumber:1,totalConfirmedNumber:1},{date:"Feb 28, 2020",todayNewNumber:1,totalConfirmedNumber:2},{date:"Mar 05, 2020",todayNewNumber:1,totalConfirmedNumber:3},{date:"Mar 08, 2020",todayNewNumber:1,totalConfirmedNumber:4},{date:"Mar 09, 2020",todayNewNumber:2,totalConfirmedNumber:6},{date:"Mar 11, 2020",todayNewNumber:3,totalConfirmedNumber:9},{date:"Mar 13, 2020",todayNewNumber:5,totalConfirmedNumber:14},{date:"Mar 14, 2020",todayNewNumber:3,totalConfirmedNumber:17},{date:"Mar 15, 2020",todayNewNumber:1,totalConfirmedNumber:18}],be={totalConfirmedNumber:18,totalRecoveredNumber:1,totalDeathNumber:1,totalRemianNumber:16,todayNewNumber:0},se=[{date:"Feb 22, 2020",predictedTotalConfirmedNumber:1},{date:"Feb 28, 2020",predictedTotalConfirmedNumber:2},{date:"Mar 05, 2020",predictedTotalConfirmedNumber:3},{date:"Mar 08, 2020",predictedTotalConfirmedNumber:5},{date:"Mar 09, 2020",predictedTotalConfirmedNumber:7},{date:"Mar 11, 2020",predictedTotalConfirmedNumber:9},{date:"Mar 13, 2020",predictedTotalConfirmedNumber:12},{date:"Mar 14, 2020",predictedTotalConfirmedNumber:16},{date:"Mar 15, 2020",predictedTotalConfirmedNumber:19},{date:"Mar 16, 2020",predictedTotalConfirmedNumber:24},{date:"Mar 17, 2020",predictedTotalConfirmedNumber:28},{date:"Mar 18, 2020",predictedTotalConfirmedNumber:33}],fe=[{date:"Feb 22, 2020",todayNewNumber:1,totalConfirmedNumber:3},{date:"Mar 04, 2020",todayNewNumber:2,totalConfirmedNumber:5},{date:"Mar 05, 2020",todayNewNumber:2,totalConfirmedNumber:7},{date:"Mar 11, 2020",todayNewNumber:2,totalConfirmedNumber:9},{date:"Mar 12, 2020",todayNewNumber:3,totalConfirmedNumber:12},{date:"Mar 13, 2020",todayNewNumber:4,totalConfirmedNumber:16},{date:"Mar 14, 2020",todayNewNumber:3,totalConfirmedNumber:19},{date:"Mar 15, 2020",todayNewNumber:1,totalConfirmedNumber:20}],pe={totalConfirmedNumber:20,totalRecoveredNumber:9,totalDeathNumber:0,totalRemianNumber:11,todayNewNumber:0},Ce=[{date:"Feb 22, 2020",predictedTotalConfirmedNumber:3},{date:"Mar 04, 2020",predictedTotalConfirmedNumber:5},{date:"Mar 05, 2020",predictedTotalConfirmedNumber:7},{date:"Mar 11, 2020",predictedTotalConfirmedNumber:10},{date:"Mar 12, 2020",predictedTotalConfirmedNumber:12},{date:"Mar 13, 2020",predictedTotalConfirmedNumber:15},{date:"Mar 14, 2020",predictedTotalConfirmedNumber:18},{date:"Mar 15, 2020",predictedTotalConfirmedNumber:21},{date:"Mar 16, 2020",predictedTotalConfirmedNumber:24},{date:"Mar 17, 2020",predictedTotalConfirmedNumber:27},{date:"Mar 18, 2020",predictedTotalConfirmedNumber:31}],ye=[{date:"Mar 02, 2020",todayNewNumber:1,totalConfirmedNumber:1},{date:"Mar 08, 2020",todayNewNumber:1,totalConfirmedNumber:2},{date:"Mar 12, 2020",todayNewNumber:1,totalConfirmedNumber:3},{date:"Mar 13, 2020",todayNewNumber:1,totalConfirmedNumber:4},{date:"Mar 14, 2020",todayNewNumber:2,totalConfirmedNumber:6},{date:"Mar 15, 2020",todayNewNumber:1,totalConfirmedNumber:7}],we={totalConfirmedNumber:7,totalRecoveredNumber:1,totalDeathNumber:0,totalRemianNumber:6,todayNewNumber:0},he=[{date:"Mar 02, 2020",predictedTotalConfirmedNumber:1},{date:"Mar 08, 2020",predictedTotalConfirmedNumber:2},{date:"Mar 12, 2020",predictedTotalConfirmedNumber:3},{date:"Mar 13, 2020",predictedTotalConfirmedNumber:4},{date:"Mar 14, 2020",predictedTotalConfirmedNumber:6},{date:"Mar 15, 2020",predictedTotalConfirmedNumber:7},{date:"Mar 16, 2020",predictedTotalConfirmedNumber:9},{date:"Mar 17, 2020",predictedTotalConfirmedNumber:11},{date:"Mar 18, 2020",predictedTotalConfirmedNumber:13}],Me=[{date:"Mar 10, 2020",todayNewNumber:1,totalConfirmedNumber:1}],Te={totalConfirmedNumber:1,totalRecoveredNumber:0,totalDeathNumber:0,totalRemianNumber:1,todayNewNumber:0},Ee=[{date:"Mar 10, 2020",predictedTotalConfirmedNumber:0}],ve=[{date:"Mar 12, 2020",todayNewNumber:1,totalConfirmedNumber:1},{date:"Mar 15, 2020",todayNewNumber:1,totalConfirmedNumber:2}],Se={totalConfirmedNumber:2,totalRecoveredNumber:0,totalDeathNumber:0,totalRemianNumber:2,todayNewNumber:0},ge=[{date:"Mar 12, 2020",predictedTotalConfirmedNumber:0},{date:"Mar 15, 2020",predictedTotalConfirmedNumber:0}],De={totalConfirmedNumber:352,totalRecoveredNumber:31,totalDeathNumber:5,totalRemianNumber:316,todayNewNumber:50},We=[{Date:"2020-03-15",overseas:60,"contact of confirmed case":38,"not identified":13,"under investigation":23,State:"NSW",updated:"2020-03-15T08:06:18.000Z"},{Date:"2020-03-15",updated:"2020-03-15T06:51:35.000Z",State:"VIC","not identified":1,"oversea or contact of confirmed cases":56},{Date:"2020-03-15",updated:"2020-03-15T07:00:36.000Z",State:"TAS",overseas:6},{Date:"2020-03-15",updated:"2020-03-15T11:15:56.000Z",State:"SA",overseas:18,"contact of confirmed case":1,"not identified":1},{Date:"2020-03-15",updated:"2020-03-15T12:18:34.000Z",State:"WA","oversea or contact of confirmed cases":18},{Date:"2020-03-14",overseas:51,"contact of confirmed case":32,"not identified":11,"under investigation":18,State:"NSW",updated:"2020-03-15T08:06:19.000Z"},{Date:"2020-03-12",overseas:34,"contact of confirmed case":32,"not identified":2,"under investigation":10,State:"NSW",updated:"2020-03-15T08:06:20.000Z"}],xe={NSW:d,VIC:o,QLD:n,WA:m,SA:l,TAS:i,NT:u,ACT:c,AUS:N,statistics:r,source:b},Ae=(a(930),a(931),{url:"https://covid-19.wileam.com/",identifier:"covid-19-wileam-com",title:"CoVid-19 Updates - NSW"});function Re(e){var t=e.id,a=function(e){return xe[e]}(t);return f.a.createElement("div",{className:"ui container"},f.a.createElement("header",null,f.a.createElement("h1",{className:"ui header"},"CoVid-19 Updates - ",t),f.a.createElement("small",{className:"ui small"},"Site updated: ","March 16, 2020 15:36:06"," AEDT")),f.a.createElement($,null),f.a.createElement(ke,{id:t,data:a}),f.a.createElement(ae.a,null),f.a.createElement(B,{id:t}),f.a.createElement(h.a.DiscussionEmbed,{shortname:"covid-19-wileam-com",config:Ae}),f.a.createElement("footer",null,f.a.createElement(K,null)))}var ke=function(e){var t=e.id,a=e.data;return f.a.createElement(f.a.Fragment,null,f.a.createElement(L,{id:t,data:a.todaySummarys}),a.dailyHistorys.length>5&&f.a.createElement(f.a.Fragment,null,f.a.createElement(ae.a,null),f.a.createElement(O,{id:t,dailyHistorys:a.dailyHistorys,predicts:a.predicts})))},He=function(){var e=window.location.hash.slice(2);""===e&&(window.location.hash="#/NSW",e="NSW");var t=Object(s.useState)(e),a=Object(y.a)(t,2),r=a[0],d=a[1],o=["NSW","VIC","QLD","WA","SA","TAS","NT","ACT"];return f.a.createElement(ee.a,null,f.a.createElement("div",{className:"ui container center aligned nav-wrapper"},f.a.createElement(P.a,{link:!0,horizontal:!0},o.map((function(e){return f.a.createElement(P.a.Item,{active:r===e},f.a.createElement(ee.b,{exact:!0,isActive:function(t,a){return a.pathname==="/".concat(e)},activeClassName:"active",to:e,onClick:function(){return d(e)}},e))})))),f.a.createElement(te.c,null,o.map((function(e){return f.a.createElement(te.a,{path:"".concat("","/").concat(e)},f.a.createElement(Re,{id:e}))}))))};C.a.render(f.a.createElement(He,null),document.getElementById("root"))}},[[435,1,2]]]);