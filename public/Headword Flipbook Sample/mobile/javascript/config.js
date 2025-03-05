	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionFontSize="20";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.loadingPictureHeight="150";bookConfig.showLoadingGif="Yes";bookConfig.loadingDisplayTime="0";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoLinkURL="http://www.headword.in/";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#6590ab";bookConfig.iconColor="#FFFFFF";bookConfig.pageNumColor="#1F1F1F";bookConfig.iconFontColor="#ffffff";bookConfig.toolbarAlwaysShow="Yes";bookConfig.ToolBarVisible="Yes";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#6590ab";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.buttonsSortXML=["home","table","shopping","thumb","goto","zoom","bookmark","number","sound","search","print","annotation","email","btnshare","download","language","autoflip","select","about"];bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Show";bookConfig.HomeURL="%10%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Hide";shareObj = [];bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ThumbnailSize="small";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Hide";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Hide";bookConfig.FlipSound="No";bookConfig.BackgroundSoundLoop="-1";bookConfig.bgSoundVol="50";bookConfig.AutoPlayButtonVisible="Hide";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Show";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Show";bookConfig.bgBeginColor="#C2E0F8";bookConfig.bgEndColor="#C2E0F8";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="tile";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.pageHighlightType="magazine";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.phoneFlipShortcutButton="Hide";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.2";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.DoubleSinglePageButtonVisible="hide";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="Table of Contents";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.passwordTips="Please contact the <a href=mailto:author@sample.com><u>author</u></a> to access the web";bookConfig.OnlyOpenInIframe="No";bookConfig.OnlyOpenInIframeInfo="No reading rights";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#235106";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=12;bookConfig.largePageWidth=1024;bookConfig.largePageHeight=1325;;bookConfig.securityType="1";bookConfig.CreatedTime ="240614165039";bookConfig.bookTitle="Lavender-B-3";bookConfig.bookmarkCR="7d7a4355575fcedf5a3e45e9ea22031f974b3abf";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"2024141648198268","alpha":"1","mouseOverEffect":"1","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.43300653594771243","y":"0.11742424242424243","width":"0.08169934640522876","height":"0.06313131313131314","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"256","imgOriginalHeight":"256","url":"./files/pageConfig/music34.png","originalURL":"./files/pageConfig/music34.png","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenWindow","windowType":"0","windowWidth":"640","windowHeight":"360","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionOpenWindow","caption":"","H5Replay":"false","H5PlaybackNumber":"0","resourceContent":"files/pageConfig/vid_5.mp4","reloadEveryTime":"false","drag":"true","hideTitle":"true"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2024141648195448","alpha":"1","location":{"tannoName":"sound1","x":"0.3349673202614379","y":"0.006313131313131313","width":"0.32679738562091504","height":"0.04993686868686868","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer","className":"StandardAudioPlayer","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/Ch-5.mp3"}}}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"2024141648197299","alpha":"1","overColor":"16776960","downColor":"16776960","outColor":"16776960","overAlpha":"0.2","downAlpha":"0.4","outAlpha":"0.1","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link16","x":"0.07352941176470588","y":"0.2171717171717172","width":"0.07107843137254902","height":"0.025252525252525252","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/polish.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"2024141648199161","alpha":"1","overColor":"16776960","downColor":"16776960","outColor":"16776960","overAlpha":"0.2","downAlpha":"0.4","outAlpha":"0.1","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link16","x":"0.33169934640522875","y":"0.27146464646464646","width":"0.06688453159041394","height":"0.025252525252525252","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/worn.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"2024141648191722","alpha":"1","overColor":"16776960","downColor":"16776960","outColor":"16776960","overAlpha":"0.2","downAlpha":"0.4","outAlpha":"0.1","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link16","x":"0.0718954248366013","y":"0.2967171717171717","width":"0.09727668845315904","height":"0.025252525252525252","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/unusual.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"2024141648194041","alpha":"1","overColor":"16776960","downColor":"16776960","outColor":"16776960","overAlpha":"0.2","downAlpha":"0.4","outAlpha":"0.1","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link16","x":"0.3562091503267974","y":"0.3939393939393939","width":"0.060294117647058824","height":"0.025252525252525252","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/host.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"2024141648197608","alpha":"1","overColor":"16776960","downColor":"16776960","outColor":"16776960","overAlpha":"0.2","downAlpha":"0.4","outAlpha":"0.1","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link16","x":"0.22875816993464052","y":"0.7866161616161617","width":"0.10582788671023965","height":"0.025252525252525252","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/perform.mp3","H5Replay":"false","H5PlaybackNumber":"0"}}],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2024141648194707","alpha":"1","location":{"tannoName":"sound1","x":"0.3349673202614379","y":"0.006313131313131313","width":"0.32679738562091504","height":"0.04993686868686868","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer","className":"StandardAudioPlayer","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/Ch-5-1.mp3"}}}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"2024141648198667","alpha":"1","mouseOverEffect":"1","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.6601307189542484","y":"0.09848484848484848","width":"0.07352941176470588","height":"0.056818181818181816","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"184","imgOriginalHeight":"197","url":"./files/pageConfig/ACT.png","originalURL":"./files/pageConfig/ACT.png","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"1280","windowHeight":"720","caption":"","windowURL":"act/act11/story.html"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202414164819156","alpha":"1","mouseOverEffect":"1","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.795751633986928","y":"0.4393939393939394","width":"0.07352941176470588","height":"0.056818181818181816","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"184","imgOriginalHeight":"197","url":"./files/pageConfig/ACT.png","originalURL":"./files/pageConfig/ACT.png","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"1280","windowHeight":"720","caption":"","windowURL":"act/act12/story.html"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"2024141648194254","alpha":"1","mouseOverEffect":"1","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.6519607843137255","y":"0.054292929292929296","width":"0.07352941176470588","height":"0.056818181818181816","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"208","imgOriginalHeight":"208","url":"./files/pageConfig/Audio_icon.png","originalURL":"./files/pageConfig/Audio_icon.png","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"false","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/Chap-5.mp3","H5Replay":"false","H5PlaybackNumber":"0"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}