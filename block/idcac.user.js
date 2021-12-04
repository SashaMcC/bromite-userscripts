// Copyright © 2021 xarantolus
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see https://www.gnu.org/licenses/gpl-3.0.html.
//
// --------------------------------------------------------------------------------
//
// ==UserScript==
// @name         I don't care about cookies
// @namespace    xarantolus
// @version      0.0.2
// @description  Removes cookie banners, based on the browser extension
// @author       xarantolus
// @match        *://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==


// This script uses style & common rules from the "I don't care about cookies" Addon (https://addons.mozilla.org/de/firefox/addon/i-dont-care-about-cookies/)
// It is published under the GNU General Public License 3 (https://www.gnu.org/licenses/gpl-3.0.html)
// To get the rules from this extension, you have to right-click the "Add to firefox" button, then "Save as...".
// Then open the extension and open "data/rules.js". The variables "commons" and "rules" are used in this script.
// TODO: Also use the scripts from the extension, e.g. when a rule has a "j" key, we need a script
var commons={10:"#fancybox-overlay,#fancybox-wrap{display:none !important}",11:"#bottom-banner{display:none !important}",12:"#privacy-policy{display:none !important}",13:".confidentialite{display:none !important}",14:".alertbanner{display:none !important}",15:"#polityka{display:none !important}",16:".consent,#consent{display:none !important}",17:"#fixedBar{display:none !important}",18:".alert-dismissible,.alert-dismissable,.alert--dismissable,.pmd-alert-dismissible{display:none !important}",19:".notice{display:none !important}",2:"#cookies{display:none !important}",20:".cookie{display:none !important}",21:'body > div[id^="WG"]{display:none !important}',22:"#cnil,.cnil,#CNIL{display:none !important}",23:"#colorbox,#cboxOverlay{display:none !important}",24:"#notify-container{display:none !important}",25:".elementor-popup-modal{display:none !important}",26:".uk-position-fixed{display:none !important}",27:".activebar-container{display:none !important}",28:'#lithium-root > [role="button"]{display:none !important}',29:".ui-widget,.ui-widget-overlay{display:none !important}",3:"#cookie{display:none !important}",30:".noty_cont,.noty_bar{display:none !important}",31:".alert-dismissible{display:none !important}",32:".wds-banner-notification,div[data-tracking-opt-in-overlay]{display:none !important}body{overflow:visible !important}",33:".toast-container{display:none !important}",34:".cookies{display:none !important}",35:".policy,#policy,.cpolicy{display:none !important}",36:".notification{display:none !important}",37:".cc_container{display:none !important}",38:"#sticky-popup{display:none !important}",39:".sqs-announcement-bar{display:none !important}",4:"#disclaimer{display:none !important}",40:".alert-info,.alert-warning,.alert-box{display:none !important}",41:".cookie-consent{display:none !important}",42:".st_notification_wrap{display:none !important}",43:"#lbmodal-overlay,#lbmodal{display:none !important}",44:"body > div[id][class]{display:none !important}",46:".alert,#alert{display:none !important}",47:"#privacy,.privacy{display:none !important}",5:"#notification{display:none !important}",50:"#myModal,.modal-backdrop,.reveal-modal-bg{display:none !important}",51:".clm{display:none !important}",52:"body > iframe{display:none !important}",53:".gdpr{display:none !important}",57:"#system-message,#system-messages,#system-message-container{display:none !important}",58:".head-page-information{display:none !important}",59:"#p_ciCont{display:none !important}",6:".disclaimer{display:none !important}",60:"#cook,.cook{display:none !important}",64:"#sbox-window,#sbox-overlay{display:none !important}",65:"#toast,.toast{display:none !important}",66:"body > .c_128{display:none !important}",67:"#message,.message{display:none !important}",68:"#cp{display:none !important}",69:"#stickyFooter,.sticky-footer{display:none !important}",7:"body > div:not([id]):not([class]){display:none !important}",71:".JSWrapper{display:none !important}",72:".banner,#banner{display:none !important}",75:"body > form{display:none !important}",76:'#SITE_ROOT ~ div[data-reactid*="siteAspectsContainer"]{display:none !important}',77:".modal-backdrop{display:none !important}",8:'body > div:not([id]):not([class])[style*="fixed"],body > div:not([id]):not([class])[style*="absolute"]{display:none !important}',81:".blockUI{display:none !important}",82:"#boxes{display:none !important}",84:".opt-in{display:none !important}",86:"#hinweise{display:none !important}",87:'body > div[id*="cookie"]{display:none !important}',88:"#notice{display:none !important}",89:".flash-info{display:none !important}",9:"#popup,.popup{display:none !important}",92:".navbar-fixed-bottom{display:none !important}",93:"#chorus_notifiations{display:none !important}",95:"#SITE_ROOT ~ .siteAspectsContainer{display:none !important}",97:"#gpdr,#GPDR,#gdpr,#GDPR{display:none !important}",98:"#info_message{display:none !important}"},rules={"google.com":{j:"8"},"consent.youtube.com":{j:"8"},"youtube.com":{j:"5",s:"ytd-consent-bump-v2-lightbox,tp-yt-iron-overlay-backdrop,.consent-bump-lightbox{display:none !important}"},"facebook.com":{s:'div[data-cookiebanner="banner"],.hasCookieBanner #root ~ .accelerate,body[tabindex] > div > #viewport > div:first-child:not(#MChromeHeader),div[data-testid="cookie-policy-dialog"],div[data-testid="cookie-policy-manage-dialog"]{display:none !important}.uiLayer[data-testid="cookie-policy-banner"]{display:none !important}.hasCookieBanner > div{position:static !important}',j:"5"},"fb.com":{j:"5",s:'div[class*="cookieBanner"]{display:none !important}'},"messenger.com":{j:"5"},"instagram.com":{j:"5"},"linkedin.com":{s:'#js-notification-wrapper[role="alert"],.global-alert.global-alert--yield,#global-alert-queue,#artdeco-global-alert-container,.alert,#alert{display:none !important}'},"twitter.com":{j:"6",s:".twtr-data-protection{display:none !important}"},"yahoo.com":{s:'#gdpr[style*="padding"],#y-shade,#applet_p_50000174,.tdv2-applet-nagbar,.login-body + .login-footer{display:none !important}'},"guce.yahoo.com":{j:"5"},"consent.yahoo.com":{j:"5"},"duckduckgo.com":{s:".badge-link.ddg-extension-hide{display:none !important}"},"msn.com":{j:"5"},"bing.com":{s:'#bnp_cookie_banner[aria-modal="false"],#bnp_ttc_div,#thp_notf_div,.b_hide.bnp_ttc,#t_termsInfo{display:none !important}#hp_cellCenter{padding-top:0 !important}',j:"5"},"microsoft.com":{s:"#multy-lang-betanotifier,body > .row-fluid:first-child,#notificationBanner,#ux-banner,#h_popup{display:none !important}#megabladeIframe{top:0 !important}#BodyBackground{border-top:none !important}"},"ask.com":{s:"#ccbar,#cp-banner{display:none !important}"},"ted.com":{c:"7"},"google.co.uk":{j:"8"},"google.it":{j:"8"},"google.at":{j:"8"},"google.es":{j:"8"},"google.ee":{j:"8"},"google.pl":{j:"8"},"google.cz":{j:"8"},"google.dk":{j:"8"},"google.ie":{j:"8"},"google.fr":{j:"8"},"google.si":{j:"8"},"google.hu":{j:"8"},"google.sk":{j:"8"},"google.se":{j:"8"},"google.fi":{j:"8"},"google.lt":{j:"8"},"google.gr":{j:"8"},"google.ro":{j:"8"},"google.bg":{j:"8"},"google.be":{j:"8"},"google.hr":{j:"8"},"google.de":{j:"8"},"google.pt":{j:"8"},"google.nl":{j:"8"},"google.no":{j:"8"},"google.is":{j:"8"},"google.lu":{j:"8"},"google.cl":{j:"8"},"google.lv":{j:"8"},"google.ch":{j:"8"},"google.ba":{j:"8"},"google.co.ve":{j:"8"},"google.com.au":{j:"8"},"google.ae":{j:"8"},"google.lk":{j:"8"},"google.ru":{j:"8"},"google.co.th":{j:"8"},"google.co.in":{j:"8"},"google.com.ph":{j:"8"},"google.com.br":{j:"8"},"google.com.hk":{j:"8"},"google.ca":{j:"8"},"google.co.jp":{j:"8"},"google.ac":{j:"8"},"google.ms":{j:"8"},"google.je":{j:"8"},"google.com.ag":{j:"8"},"google.com.mx":{j:"8"},"google.com.ua":{j:"8"},"google.com.eg":{j:"8"},"google.cat":{j:"8"},"google.co.il":{j:"8"},"google.com.sg":{j:"8"},"google.am":{j:"8"},"google.com.ar":{j:"8"},"google.fm":{j:"8"},"google.as":{j:"8"},"google.li":{j:"8"},"google.al":{j:"8"},"google.cf":{j:"8"},"google.com.tr":{j:"8"},"google.co.kr":{j:"8"},"google.com.na":{j:"8"},"google.com.sl":{j:"8"},"google.co.za":{j:"8"},"toldosalsina.com":{s:"#aviso{display:none !important}"},"barcelona.cat":{s:"#bcn-ccwr{display:none !important}"},"barclays.com":{s:".dialogMask{display:none !important}"},"britannia.co.uk":{s:"#noticePanel{display:none !important}"},"soundcloud.com":{s:".announcements{display:none !important}"},"hostgator.com":{s:"#alertBar{display:none !important}"},"theregister.co.uk":{s:"#RegCTBWF{display:none !important}"},"rapturetv.com":{s:"#apDiv1{display:none !important}"},"civilsociety.co.uk":{s:".announcement-banner{display:none !important}"},"cofunds.co.uk":{s:"#idrMasthead .idrPageRow .smContainer{display:none !important}"},"channelregister.co.uk":{s:"#RegCCO{display:none !important}"},"ordnancesurvey.co.uk":{s:"#messages{display:none !important}"},"hattrick.org":{c:"46"},"hrportfolio.hr":{s:"#kolac{display:none}"},"ecdl.hr":{s:"#admin_sys_notif{display:none !important}"},"sajmovi.eu":{s:"#mBox1,#mBox1+div{display:none !important}"},"poba.hr":{s:"#meerkat-wrap{display:none !important}"},"heinz.co.uk":{c:"7"},"tvlicensing.co.uk":{s:"#blq-global{display:none !important}"},"esure.com":{s:"#slideMenu{display:none !important}"},"mggp.com.pl":{c:"92"},"tmgonlinemedia.nl":{j:"4"},"neckermann.com":{s:"#st_popup,#st_overlay,#ewcm_container{display:none !important}"},"thejournal.ie":{c:"24"},"dba.dk":{c:"7"},"gosc.pl":{c:"8"},"bilbasen.dk":{c:"7"},"stargreen.com":{c:"7"},"wrzucacz.pl":{s:"#logo .info{display:none !important}"},"wattsindustries.com":{s:"#header1_overlay2{display:none !important}"},"mistrzowie.org":{c:"8"},"muddymatches.co.uk":{j:"5"},"korwin-mikke.pl":{c:"7"},"element14.com":{s:".e14-cookie-directive{display:none !important}"},"oushop.com":{c:"7"},"mocnopomocni.pl":{c:"7"},"instal.si":{s:"body > img,.urejanjecenter,.urejanjecenter + table{display:none !important}"},"megashopbot.com":{s:"#alertBar{display:none !important}"},"daft.ie":{s:"#notify-container,.strapline-container{display:none !important}"},"vegetus.nl":{s:"#tracking{display:none !important}"},"thetoyshop.com":{s:"#entCNDiv{display:none !important}"},"direct-croatia.com":{s:"#site_nt{display:none !important}"},"odjechani.com.pl":{s:".guest_warn{display:none !important}"},"kulturstyrelsen.dk":{c:"43"},"bosw.pl":{c:"9"},"zend.com":{s:".ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-front.ui-draggable.ui-resizable{display:none !important}"},"clinique.co.uk":{s:"#bt_notification{display:none !important}"},"vente-privee.com":{s:".showCookiesBanner #headerWrapper{top:0 !important}.cookiesTxt{display:none !important}"},"rk.dk":{c:"43"},"krsystem.pl":{c:"60"},"shelldriversclub.co.uk":{s:"#modal_container{display:none !important}"},"boards.ie":{c:"24"},"plus.google.com":{s:"#gba.gb_Ec{display:none !important}"},"katowice-airport.com":{c:"7"},"oferia.pl":{c:"7"},"grafoteka.pl":{s:"#info-container{display:none !important}"},"shopusa.com":{s:"body > .box{display:none !important}"},"ohra.nl":{s:"#wrapper-overlay{display:none !important}"},"jw.org":{s:".legal-notices-client--notice{display:none !important}"},"dynos.es":{s:"#cuerpo > div:not([id]):not([class]){display:none !important}"},"pobieralnia.org":{s:"#close{display:none !important}"},"amadeus.com":{s:".wayfinder-component,.country-lightbox.cookies{display:none !important}"},"siemens.com":{s:"#c-info,.cm-banner{display:none !important}"},"fiskarsgroup.com":{s:".q_cookies{display:none !important}"},"androidmagazine.pl":{c:"7"},"smulweb.nl":{s:".accept_container{display:none !important}"},"epiotrkow.pl":{s:".user_politic_pop{display:none !important}"},"bygningskultur2015.dk":{c:"43"},"racjonalista.pl":{s:"#_ci{display:none !important}"},"xtremmedia.com":{s:"#mensacok{display:none !important}"},"herbaciani.pl":{c:"7"},"waw.pl":{s:"#wip.stability,.alert-warning,.komunikat{display:none !important}"},"costco.co.uk":{s:".site-messages-container{display:none !important}"},"adverts.ie":{s:"#notify-container-sticky-wrapper{display:none !important}"},"siemens.pl":{s:".alert.block.show,.PopupDiv{display:none !important}"},"open.fm":{j:"5"},"laznianowa.pl":{c:"7"},"swiatnauki.pl":{s:"#menu{display:none !important}"},"oxfordshire.gov.uk":{s:".occlss-alert--cookiepopup{display:none !important}"},"mtvmobile.nl":{s:"#exposeMask,#TMobile_nl_WebPortals_UI_PageComponents_CookieSettingsOverlay_CookieSettingsOverlayController_OverlayRootDiv{display:none !important}"},"dropbox.com":{s:"#top-notification-bar-container{display:none !important}body.top-notification-bar,.embedded-app.IndexRebrandPage.top-notification-bar{margin-top:0 !important}"},"legolas.pl":{s:"#kuki{display:none !important}"},"tropicana.fr":{j:"6"},"mappy.com":{s:"#IndexView-first-visit{display:none !important}"},"slke.dk":{c:"43"},"ists.pl":{s:".polityka{display:none !important}"},"fora.pl":{s:".pp-t-a-c{display:none !important}"},"petardas.com":{s:'body > div[style*="color:white"],body > div:not([id]) > div[style*="color:white"]{display:none !important}'},"winrar.es":{s:"#ckwarn{display:none !important}"},"racunovodja.com":{s:".polprosojno{display:none !important}"},"reviewcentre.com":{s:"#growlcontainer{display:none !important}"},"pensioenleeftijdberekenen.nl":{s:"#ckpol{display:none !important}"},"toysrus.es":{c:"7"},"cepsa.com":{s:".b-home-modal{display:none !important}"},"omegasoft.pl":{s:".ui-dialog{display:none !important}"},"mpolska24.pl":{s:".infoBox{display:none !important}"},"smakizycia.pl":{s:"#info-bar{display:none !important}"},"tabletsmagazine.nl":{c:"84"},"ebuyclub.com":{s:"#bandeau-c{display:none !important}"},"szpital-chrzanow.pl":{s:".warp_top_message{display:none !important}"},"automapa.pl":{s:'body > div[style*="fixed"],.error.rounded{display:none !important}'},"zwangerschapspagina.nl":{j:"5"},"szkolkikornickie.pl":{c:"58"},"kikocosmetics.es":{s:".mod-notification{display:none !important}"},"shellsmart.com":{s:"#modal_container{display:none !important}"},"webm2.dk":{s:"#footer_notification{display:none !important}"},"storm24.pl":{c:"9"},"weespreventief.nl":{c:"9"},"danskernesdigitalebibliotek.dk":{c:"43"},"24hgold.com":{s:".divTop{display:none !important}"},"policja.pl":{s:".informationBar,.JSWrapper{display:none !important}"},"ford-esklep.pl":{s:"#box_alert{display:none !important}"},"tomtom.com":{s:"#tabbed_menu + .container.expand,.tt-cookie-bar-module{display:none !important}"},"healthcare.siemens.dk":{c:"46"},"centraalbeheer.nl":{c:"52"},"layar.com":{s:".remarketing-banner{display:none !important}"},"wiz.pl":{s:"#menu{display:none !important}"},"cartoonnetwork.com":{s:"#tos-bar{display:none !important}"},"testigo.pl":{s:"#cp_wrap{display:none !important}"},"wiara.pl":{c:"8"},"tyrdanmark.dk":{s:"#C46703f08cookie{display:none !important}"},"markgum.com.pl":{s:'body > div[id=""]{display:none !important}'},"cnn.com":{s:".m-truste,#new-tos-privacy,#js-tos-prompt,head + div,.user-msg,#notification-legal,.popup_tosEdition{display:none !important}"},"kopland.pl":{c:"67"},"wampirki.com":{j:"5"},"zorgbelang-noordholland.nl":{s:".telecom-tracking-dialog{display:none !important}"},"unizg.hr":{s:"#cms_area_admin_bar{display:none !important}"},"4hifi.pl":{s:".myModal-box{display:none !important}"},"office.com":{s:"#BannerContainer,#h_popup,.sortable-control > .row-fluid.pmg-txt-align-center.pmg-grid-content-no-padding.pmg-grid-content{display:none !important}"},"aktieinfo.net":{s:"#eufis{display:none !important}"},"sainsburysbank.co.uk":{s:".showing-notification #shell{margin-top:0 !important}"},"ksiegaimion.com":{s:"#euci{display:none !important}"},"ecfr.eu":{s:"#footerr{display:none !important}"},"lrb.co.uk":{s:"#wrapper > div:not([id]):not([class]){display:none !important}"},"kunst.dk":{c:"43"},"oesterreichinstitut.cz":{s:"#cook-cont{display:none !important}"},"foto4u.pl":{s:"#info-bar{display:none !important}"},"napovednik.com":{c:"46"},"maty.com":{s:".banner-wrapper{display:none !important}"},"skitour.fr":{s:"#coo_aut{display:none !important}"},"vttour.fr":{s:"#coo_aut{display:none !important}"},"olsztyn.com.pl":{s:".rodoaccept{display:none !important}"},"sondagenational.com":{s:"#legalCookies{display:none !important}"},"truste.com":{j:"5"},"love.dk":{s:"#scw{display:none !important}"},"sodisce.si":{c:"57"},"zepass.com":{s:".bloc-notifications{display:none !important}"},"reactor.pl":{s:"#einfo{display:none !important}"},"energiemoinschere.fr":{s:"#headband{display:none !important}"},"mutuelle.com":{c:"60"},"zombiearmy.com":{s:".warning{display:none !important}"},"buziak.pl":{s:"#cffc{display:none !important}"},"hop.com":{s:"#cnil-layer{display:none !important}"},"notre-planete.info":{s:"#npimsg{display:none !important}"},"kingston.com":{s:"#policy_message{display:none !important}"},"lomza.pl":{s:"body.polityka-cookies{background-position:center top !important;margin-top:0 !important}"},"zeroturnaround.com":{s:".hud{display:none !important}"},"pewnykantor.pl":{s:"#cu_bar{display:none !important}"},"hth.dk":{s:".nb-message{display:none !important}"},"alltricks.fr":{s:".alltricks-CnilRibbon{display:none !important}"},"hi-tec.com.pl":{c:"2"},"unisys.com":{s:"#AlertWrapper{display:none !important}"},"thelawpages.com":{s:"#terms{display:none !important}"},"yachtbasen.com":{s:"body > .hidden-print{display:none !important}"},"nba.com":{s:"#nba_tos{display:none !important}"},"danmarklaeser.dk":{c:"43"},"aso.fr":{c:"13"},"blogs-r.com":{c:"8"},"cio-online.com":{s:"#dialog.bulle_bas{display:none !important}"},"grandeavenue.fr":{s:".fixedBanner{display:none !important}"},"motomoto.pl":{s:"#itlbox{display:none !important}"},"bluearan.co.uk":{s:"#slider{display:none !important}"},"themudday.com":{c:"13"},"zien.tv":{s:"#cbar{display:none !important}"},"talerzpokus.tv":{c:"8"},"radioluisteren.fm":{s:"#cbar{display:none !important}"},"aceprensa.com":{s:"#anuncio{display:none !important}"},"off-road.pl":{s:"#popslide{display:none !important}"},"mininstitution.dk":{c:"8"},"ihg.com":{s:"#topSpot,.mod-modal{display:none !important}"},"fora.se":{c:"46"},"mediametrie.fr":{s:"#cooks{display:none !important}"},"unoform.dk":{s:".notificationbar{display:none !important}"},"lotnictwo.net.pl":{s:"#navbar_notice_123{display:none !important}"},"environmentlaw.org.uk":{s:"#nf_htmlonly{display:none !important}"},"werkenbijstayokay.com":{s:"#sliderWrap{display:none !important}"},"sfinks.org.pl":{c:"7"},"macrojuegos.com":{s:"#popupmsg_wrapper{display:none !important}"},"glyphweb.com":{c:"8"},"bitmarket24.pl":{c:"46"},"merixstudio.pl":{c:"67"},"purinaonline.es":{s:"#__afpc{display:none !important}"},"selexion.be":{s:"#splash_footer{display:none !important}"},"kinoteka.pl":{c:"7"},"minmyndighetspost.se":{s:".alertWrap{display:none !important}"},"minameddelanden.se":{s:".alertWrap{display:none !important}"},"thagson.com":{s:".init_message{display:none !important}"},"licytacje.komornik.pl":{s:'#sign_up,body > div[style*="margin-top: 100"]{display:none !important}'},"sprezyny-strozyk.pl":{c:"58"},"emagister.fr":{s:".fixed-footer{display:none !important}"},"ulabox.com":{s:".flash-message-bar{display:none !important}"},"bloodhoundssc.com":{s:".ccwrap{display:none !important}"},"malygosc.pl":{c:"8"},"lodz.pl":{s:'#stpdueckmsg,.sticked-widgets__widget-trigger[href*="ochrona-danych-osobowych"]{display:none !important}'},"cieem.net":{c:"7"},"brouwland.com":{s:".notification-top{display:none !important}"},"podatnik.info":{s:".p14-footer > div:not([class]){display:none !important}"},"survey-remover.com":{c:"8"},"clubhyundai.es":{c:"44"},"wwf.gr":{s:"#popupBg{display:none !important}"},"biznes2biznes.com":{s:"#stickynote2{display:none !important}"},"droitshumains.fr":{s:"#unblcn{display:none !important}body{margin-top:0 !important}"},"morrisonsislistening.co.uk":{j:"5"},"mundosexanuncio.com":{s:"#alegal{display:none !important}"},"avogel.dk":{s:".slideOutContainer{display:none !important}"},"sizzle.co.uk":{c:"46"},"mysnapp.co.uk":{s:".cookies-content{display:none !important}"},"botrans.eu":{s:"#c_tlo{display:none !important}"},"minigamers.com":{s:"#popupmsg_wrapper{display:none !important}"},"runinreims.com":{c:"13"},"ogaming.tv":{c:"92"},"fitzpatrickreferrals.co.uk":{s:"#hellobar{display:none !important}"},"xuletas.es":{s:"#privacy_w{display:none !important}"},"konkolnieruchomosci.pl":{c:"58"},"otabletach.pl":{s:"#cop{display:none !important}"},"kikocosmetics.com":{s:".mod-notification{display:none !important}"},"parkguell.cat":{s:"#fixdiv{display:none !important}"},"dvdfr.com":{s:"#dvdfrCnil{display:none !important}"},"digitenne.nl":{c:"7"},"macquarie.com":{s:"#alert-first{display:none !important}"},"kanpai.fr":{s:"#f_r_e_e{display:none !important}"},"motonotes.pl":{c:"7"},"weber.dk":{c:"89"},"fifa.com":{j:"5"},"seges.dk":{s:"#vcc_container{display:none !important}"},"die-linke.de":{c:"6"},"net.hr":{c:"6"},"dielinke.berlin":{c:"6"},"opera-comique.com":{c:"6"},"valtra.de":{c:"6"},"fellow.pl":{c:"7"},"salonroman.pl":{c:"7"},"pss-archi.eu":{s:"#miam_div{display:none !important}"},"lafi.fr":{s:".nota{display:none !important}"},"flatme.it":{s:"#ic{display:none !important}"},"123partyshop.nl":{c:"7"},"volkswagen.com":{s:"#vwd4_m509,.system-notification{display:none !important}"},"visitleevalley.org.uk":{s:"#howdy{display:none !important}"},"nageurs.com":{c:"7"},"pusc.it":{s:"#pixelfabrica-cs-banner{display:none !important}"},"agroterra.com":{c:"46"},"doka.com":{j:"5"},"allekoszyk.pl":{s:'#allekoszyk > div[style*="fixed"]{display:none !important}'},"nutrimuscle.com":{s:"#messageBox{display:none !important}"},"forumcommunity.net":{s:".note,.jnote{display:none !important}"},"londontechweek.com":{s:".festival-cookie{display:none !important}"},"ragepluginhook.net":{j:"5"},"ondarock.it":{c:"11"},"fcarreras.org":{s:".NoticesBox{display:none !important}"},"homecinemamagazine.nl":{c:"84"},"bahnhof.se":{s:".top-line-block{display:none !important}"},"southwestcoastpath.org.uk":{s:".roar-body{display:none !important}"},"jal.com":{s:"#JS_ciBox,#JS_ciBox_filter,#JS_ciBox_filter_iframe,#JS_ciBox_style{display:none !important}"},"cochranelibrary.com":{s:".system-message-container{display:none !important}"},"lindex.com":{c:"36"},"klockolandia.pl":{c:"7"},"smhi.se":{s:".polopolyNotification{display:none !important}"},"magazynpracy.pl":{c:"7"},"devilpage.pl":{c:"7"},"laga.se":{s:".site-info-message{display:none !important}"},"elektrozysk.pl":{c:"7"},"krakow.pl":{s:'body > #ci[style*="fixed"],body > #kuki,body > #mainCookie{display:none !important}'},"bywajtu.pl":{s:"#co15ie87a{display:none !important}"},"tecnun.es":{s:"#alertbar{display:none !important}"},"invita.dk":{s:".notificationbar{display:none !important}"},"juzaphoto.com":{s:".s_bluebox{display:none !important}"},"telesystem-world.com":{s:"#cover,#cookies{display:none !important}"},"holding-graz.at":{s:".blockOverlay{display:none !important}"},"efax.fr":{s:".stickyFooter{display:none !important}"},"mountain.es":{s:"#messagebar{display:none !important}"},"dictzone.com":{s:"#ac{display:none !important}"},"qrzcq.com":{c:"7"},"stoeger.net":{c:"39"},"gore-ljudje.net":{c:"81"},"winsornewton.com":{s:"#PECR{display:none !important}"},"flugladen.de":{s:".notificationContainer{display:none !important}"},"serwiskarcher.pl":{s:".config-messages{margin-top:-35px}"},"lca.pl":{s:"#popupDiv{display:none !important}"},"baulinks.de":{c:"7"},"estos.de":{s:"#cpol-banner{display:none !important}"},"spreaker.com":{s:"#ly_flash_message{display:none !important}"},"auxmp.com":{s:".policy-label{display:none !important}"},"linuxportal.pl":{c:"7"},"modeoutlet.nl":{c:"9"},"9maand.be":{s:".flashup{display:none !important}"},"blogfree.net":{s:"body > .jnote{display:none !important}"},"browar.biz":{s:'.page > div > div[style*="gray"]{display:none !important}'},"ents24.com":{s:".cookie-nudge{display:none !important}"},"xe.gr":{s:".google_diaclaimer{display:none !important}"},"newhallhospital.co.uk":{s:".popupbox{display:none !important}"},"jotti.org":{c:"18"},"ikalender.se":{s:'body > center > table[style*="F0F0F0"]{display:none !important}'},"milan7.it":{s:"#site-content > .row > h2{display:none !important}"},"polomarket.pl":{c:"7"},"les-champignons.com":{s:"#pub{display:none !important}"},"beko.es":{s:".sayfaIcDiv .row300{display:none !important}"},"centrumpiwowarstwa.pl":{s:'.page > div > div[style*="gray"]{display:none !important}'},"parliamentlive.tv":{j:"5"},"superstart.se":{s:'body > div > div > div[style*="777"]{display:none !important}'},"discounto.de":{c:"18"},"prezzoforte.it":{s:"#bottombar{display:none !important}"},"toysrus.pt":{c:"7"},"paivyri.fi":{s:'body > center > table[style*="width:100%"]{display:none !important}'},"giochigratisonline.it":{s:"#boxRichiesta{display:none !important}body{background-position:0 0;margin-top: 0}"},"netcarshow.com":{s:"#cNag{display:none !important}"},"euromaster.de":{s:"#lytic_layer,#lytic_askbox{display:none !important}"},"netvaerkslokomotivet.dk":{s:"#ck_row{display:none !important}"},"ic2montecchio.gov.it":{s:'.page > div[style*="fixed"]{display:none !important}'},"codziennikfeministyczny.pl":{s:"#bazinga-muffin-container{display:none !important}"},"box10.com":{s:"#cwarn-box{display:none !important}"},"costaclub.com":{s:".alertMessaging{display:none !important}"},"stamboomonderzoek.com":{c:"75"},"kalendarzswiat.pl":{s:"#consent_box_wrapper{display:none !important}"},"muzyczneradio.pl":{j:"5"},"saltogpeber.dk":{s:'.push-up[data-id="sp-cookie"]{display:none !important}'},"linkem.com":{c:"11"},"fiskars.de":{s:"body.s-show-cookie-consent .m-navigation.s-show .desktop{top:0 !important}"},"stubhub.de":{s:"#banner-container{display:none !important}"},"360qpon.it":{s:"#footerSlideContainer{display:none !important}"},"medarbejdernet.dk":{s:"#modalLayer{display:none !important}"},"mdsrl.it":{j:"5"},"qr.cz":{s:"#eu-fck{display:none !important}"},"leyprodatos.es":{s:"#cs_informationBar{display:none !important}"},"ktotv.com":{s:".headline{display:none !important}"},"sallyx.org":{s:".topInfo{display:none !important}"},"wowza.com":{s:"#ck_pu{display:none !important}"},"litmind.com":{s:"#bottom_notice{display:none !important}"},"costacroisieres.fr":{s:".alertMessaging{display:none !important}"},"huaweivenicemarathon.it":{s:"#cp-cont{display:none !important}"},"latagliatellayyo.es":{j:"5"},"pyrex.fr":{s:"#popajax{display:none !important}"},"eservice.pl":{s:"#zwcc{display:none !important}"},"discountoffice.nl":{c:"92"},"vijfhart.nl":{j:"5"},"saperesalute.it":{j:"5"},"uctovani.net":{s:"#message_wrap{display:none !important}"},"mangaclassics.mboards.com":{c:"44"},"eurojackpot.it":{s:".popup-view.modal{display:none !important}"},"freo.nl":{j:"5"},"timing.pt":{c:"35"},"swiat-agd.com.pl":{c:"7"},"sunday.dk":{j:"5"},"teamers.com":{j:"4"},"fiatklubpolska.pl":{s:"#navbar_notice_1.restore{display:none !important}"},"szlakpiastowski.com.pl":{c:"58"},"lainox.it":{s:".background_overlay,#overlay_form{display:none !important}"},"opel-sklep.com":{s:"#simple-modal-overlay,#simple-modal{display:none !important}"},"filminstitutet.se":{s:".info-banner{display:none !important}"},"chateauxhotels.com":{s:"#notificationBar{display:none !important}"},"distritopostal.es":{s:"#ecl-container-box{display:none !important}"},"soeren-hentzschel.at":{s:"#storage-notice{display:none !important}"},"toscana.it":{s:"#cookPol,#banner-overlay-top-page,#myCookie{display:none !important}"},"nas-forum.com":{s:".ipsMessage_error{display:none !important}"},"fundedbyme.com":{s:".pageNotification{display:none !important}"},"blasapisguncuevas.blogcindario.com":{c:"44"},"smgcookies.nl":{j:"5"},"intrage.it":{s:".BoxPrivacy{display:none !important}"},"ingemecanica.com":{s:".encabez{display:none !important}"},"fxsolver.com":{s:"#tframe{display:none !important}"},"infiniti.nl":{c:"66"},"infiniti.de":{c:"66"},"nkd.com":{s:"#DIV_1{display:none !important}"},"eksiegarnia.pl":{s:"#kuki{display:none !important}"},"dailyedge.ie":{c:"24"},"blauarbeit.de":{s:"#messages-container{display:none !important}"},"email.it":{s:'#inckem,#FrstCksDiv,body > div:not([id]):not([class])[style*="000"]{display:none !important}'},"e-lawresources.co.uk":{s:".topbarBox{display:none !important}"},"rast.hr":{s:"#blokDiv{display:none !important}"},"livescores.com":{s:".info-msg{display:none !important}"},"akcneletaky.sk":{s:"#infoCoo{display:none !important}"},"paysdelaloire.fr":{s:".tx-pnfcnil{display:none !important}"},"ingyen-van.hu":{s:"#figyu{display:none !important}"},"steffen-hanske.de":{s:"#note{display:none !important}"},"infiniti.co.uk":{c:"66"},"firstsave.co.uk":{s:".msgBox p{display:none !important}"},"hrportal.hu":{s:"#fixdivgoogle{display:none !important}"},"miplo.pl":{s:".error.rounded{display:none !important}"},"drivepad.fr":{c:"47"},"the42.ie":{c:"24"},"hpobchod.sk":{s:"#hpmGmtT{display:none !important}"},"vas.com.pl":{c:"7"},"federacja-konsumentow.org.pl":{s:"#cu_bar{display:none !important}"},"bancomparador.com":{s:"#cuki{display:none !important}"},"amaterky.sk":{c:"7"},"previ-direct.com":{c:"46"},"o2.pl":{j:"5"},"kodilive.eu":{s:"#claw{display:none !important}"},"areatour.pl":{s:"#topbar{display:none !important}"},"userbenchmark.com":{s:"#notForm{display:none !important}"},"kinonh.pl":{s:"#div_ac{display:none !important}"},"novatech.com.pl":{s:"#cooki{display:none !important}"},"st-ab.nl":{s:'table[width="941"] td[height="38"][width="100%"]{display:none !important}'},"montura.it":{c:"7"},"spaziorock.it":{c:"11"},"mobil-1.nl":{s:".fancybox-container{display:none !important}"},"gratisfaction.co.uk":{s:"#grey-bar{display:none !important}"},"spielfilm.de":{c:"46"},"runmap.net":{s:".messages.temporary{display:none !important}"},"acara.cz":{c:"7"},"allomarie.fr":{c:"7"},"scuolerimini.it":{s:"#upper_div{display:none !important}"},"radiosetv.com":{s:".fck{display:none !important}"},"asd.pl":{c:"7"},"miastograf.pl":{c:"29"},"ihrzeszow.ires.pl":{s:".PopupOverlay,.Popup{display:none !important}"},"controcampus.it":{s:"#Controcampus_cookie_advice{display:none !important}"},"soft112.com":{s:"#s112_accept_cookies{display:none !important}"},"giappo.com":{s:"#normativa{display:none !important}"},"linnunrata.org":{c:"7"},"rentl.io":{s:"#scroll-popup{display:none !important}"},"rankomat.pl":{s:".rank-cookie-bar{display:none !important}"},"foto.no":{s:"#allwrapper > div[style]{display:none !important}"},"bonappetit.hu":{s:"#foodfood_cookie{display:none !important}"},"neue-freunde-finden.com":{s:"#privacy-bar{display:none !important}"},"almacen-informatico.com":{s:"#Informacion{display:none !important}"},"vienormali.it":{s:".info{display:none !important}"},"kvalster.se":{s:"noindex #y{display:none !important}"},"wander-community.de":{s:"#privacy-bar{display:none !important}"},"ildesertofiorira.org":{c:"57"},"origin.com":{s:"origin-global-sitestripe{display:none !important}"},"istotne.pl":{c:"36"},"firefoxosdevices.org":{s:"#storage-notice{display:none !important}"},"inelenco.com":{s:"#hid{display:none !important}"},"calcolostipendio.it":{s:".bold_text{display:none !important}"},"decrypterlenergie.org":{s:"#alert-mention{display:none !important}"},"demaiogroup.it":{s:"#normativa{display:none !important}"},"apdmarket.pl":{c:"9"},"zosiaikevin.pl":{s:"#novem-slot{display:none !important}"},"zdrowemiasto.pl":{s:"#_mo{display:none !important}"},"amarone.pl":{s:"#contBanner{display:none !important}"},"rckik.poznan.pl":{c:"7"},"avery-zweckform.poznan.pl":{c:"7"},"peka.poznan.pl":{s:"#popup-peka{display:none !important}"},"wydawca.com.pl":{s:"#kuki{display:none !important}"},"wirtualis.pl":{s:"#info_container{display:none !important}"},"webelite.pl":{s:"#infobar{display:none !important}"},"simba.com.pl":{s:"#cContainer{display:none !important}"},"metairie.fr":{s:".popup-notification{display:none !important}"},"sapo.tl":{s:".bsu-v2-ntfs{display:none !important}"},"traningspartner.se":{s:".top > .container > .sd-surface > .sd-object-if{display:none !important}"},"alatest.it":{s:".identity-noticebar-content{display:none !important}"},"lstsoft.com.pl":{c:"7"},"jordbruksverket.se":{s:"#svid10_7824f13e14ed0d5e4dcbbcf0{display:none !important}"},"uabstyle.it":{s:".alert-dismissable{display:none !important}"},"supermarchesmatch.fr":{s:"#fevad{display:none !important}"},"vergelijk.nl":{s:'div[data-bind*="PageLocationLinksBehavior"] > div[data-bind*="PopupBehavior"]{display:none !important}'},"marbaro.it":{s:"#marbaro_cookielaw_banner{display:none !important}"},"z-ciziny.cz":{s:".euc{display:none !important}"},"eset.com":{s:"#cook,.oks_pp_msgs{display:none !important}"},"legnica.pl":{s:"#popupDiv{display:none !important}"},"strefa.fm":{s:".cookskom{display:none !important}"},"przyspiesz.pl":{s:"#container_vsm{display:none !important}"},"buliba.pl":{s:"#tooltip-hook{display:none !important}"},"platinumoil.eu":{c:"58"},"e-gratka.info":{s:"#pojemnik{display:none !important}"},"imp.gda.pl":{s:"#cp_wrap{display:none !important}"},"kupbilet.pl":{c:"31"},"krosnocity.pl":{s:"#polcia{display:none !important}"},"hemp.pl":{c:"3"},"fandemonium.pl":{c:"7"},"expozdrowie.pl":{s:"#alert_popup{display:none !important}"},"eteacher.pl":{s:"#info_container{display:none !important}"},"kielce.eu":{s:"#belka_dolna{display:none !important}"},"aftermarket.pl":{s:"#part-cookies{display:none !important}"},"getem.pl":{c:"15"},"archiwumalle.pl":{c:"15"},"anonse.com":{c:"15"},"kosmetykizameryki.pl":{c:"15"},"basketzone.pl":{c:"15"},"teletec.it":{s:"#cookieNewTeletecMainSitoInfo{display:none !important}"},"playme.it":{s:"#msg-close{display:none !important}"},"wrigleys.co.uk":{s:"#rpcm{display:none !important}"},"dexigner.com":{s:"#cwarn{display:none !important}"},"netonnet.se":{s:".topInfo{display:none !important}"},"netonnet.no":{s:".topInfo{display:none !important}"},"lawyersonline.co.uk":{c:"46"},"allianz.hu":{s:"#idAllianzCookiePolicy{display:none !important}"},"kicktipp.de":{s:".messagebox{display:none !important}"},"scanbot.io":{s:".sb-banners--cookie{display:none !important}"},"antalis.co.uk":{s:"#overlay{display:none !important}"},"urban-rivals.com":{c:"46"},"poxilina.com.pl":{s:"#back-lightbox{display:none !important}"},"unifrance.org":{s:".headerInfos{display:none !important}"},"scutt.eu":{s:"#pojemnik{display:none !important}"},"svensktnaringsliv.se":{s:"#warning{display:none !important}"},"hkr.se":{c:"2"},"mercateo.nl":{s:"#header-popup-info{display:none !important}"},"tipsmidler.dk":{c:"43"},"udlodningsmidler.dk":{c:"43"},"hpmarket.cz":{s:'body > div[style*="FFF"]{display:none !important}'},"mygame.co.uk":{s:"#footer ~ div[id]{display:none !important}"},"hankooktire.com":{s:".top_ep_wrap{display:none !important}"},"po-sloveniji.com":{s:"#cookN{display:none !important}"},"forumplay.pl":{s:"#notices{display:none !important}"},"grandix.nl":{s:"#popup,#overlay{display:none !important}"},"bleacherreport.com":{s:".privacy_notice{display:none !important}"},"spalensky.com":{s:"#w_notice{display:none !important}"},"austrian.com":{s:".cop{display:none !important}"},"teogkaffespecialisten.dk":{s:".alert-dismissable{display:none !important}"},"apogeum.net.pl":{c:"7"},"uk-oak.co.uk":{s:"#cc-conf{display:none !important}"},"finefish.cz":{c:"7"},"dentisti-italia.it":{s:".di-banner{display:none !important}"},"zeelandhome.nl":{s:".onderbalk{display:none !important}"},"radioplay.se":{s:"#root > div > div:first-child{display:none !important}"},"ecodallecitta.it":{s:"#consenso{display:none !important}"},"lesportecles.com":{s:".alert-info{display:none !important}"},"autosjbperformance.fr":{s:".cekomeadsbottom{display:none !important}"},"b-travel.com":{s:"#fb-cd{display:none !important}"},"salonocasion.com":{s:"#fb-cd{display:none !important}"},"lediomedee.it":{s:"#cookie-choices{display:none !important}"},"arguedas.es":{s:"#barra{display:none !important}"},"avalon.me":{c:"69"},"radiofama.com.pl":{c:"7"},"eena.pl":{s:"#whole_page_loader{display:none !important}"},"izi.si":{c:"34"},"affaronissimo.it":{s:"#af-cw-box{display:none !important}"},"brobygning.net":{c:"7"},"orliman.pl":{j:"5"},"iit.it":{s:"#messageOuter{display:none !important}"},"opengapps.org":{s:".mdl-snackbar{display:none !important}"},"hudo.com":{s:".cookie-screen{display:none !important}"},"texxas.de":{s:"#texxas-cookie-accept{display:none !important}"},"atg.se":{s:".notice__info-info,.alert--info{display:none !important}"},"seasaltcornwall.co.uk":{s:".global-promotion{display:none !important}"},"w3logistics.com":{s:"#w3l-cookiebox{display:none !important}"},"actionforme.org.uk":{s:".afme_cookie{display:none !important}"},"jajco.pl":{s:'div[id*="cookies-notification"]{display:none !important}'},"messe.de":{s:".user-notes-notification{display:none !important}"},"jdrp.fr":{s:"#jdrp_cookie_notice{display:none !important}"},"gam.com":{s:".gamNotice{display:none !important}"},"compteurdelettres.com":{s:".top-header{display:none !important}"},"electronique-mag.com":{s:"#alert_trk{display:none !important}"},"tge.com.pl":{c:"7"},"allianz.de":{j:"5"},"apartmanija.hr":{s:"#site_nt{display:none !important}"},"chordbook.com":{s:"#cbeu_container{display:none !important}"},"trattorialatellina.it":{s:".peek-a-bar{display:none !important}"},"carfacto.de":{s:"#b-cc{display:none !important}"},"anisearch.com":{s:".urgent-msg{display:none !important}"},"sportfondsen.nl":{s:"#zwemmen-optin-header{display:none !important}"},"hublot.com":{s:"#wrapper.cookies_consent-show .page-wrapper{margin-top:0 !important}#wrapper.cookies_consent-show .page-wrapper .main-header.fixedPos{top:0 !important}"},"whiskyreview.nl":{s:"body > div[id]:not(#sitepicker):not([class]):not(#footer){display:none !important}"},"justaway.com":{s:"#bannerTop{display:none !important}"},"digienergy.ro":{c:"38"},"bblat.se":{c:"59"},"nkh.gov.hu":{s:"#regens-cookie-setting-wrapper{display:none !important}#rgns_header_menu{height:auto !important}"},"digitel.sk":{s:'td[height="35"][bgcolor="#CCFFCC"],td[height="35"][bgcolor="black"]{display:none !important}'},"appdynamics.fr":{s:".announcement-bar{display:none !important}"},"needrom.com":{s:"#cookie_needrom{display:none !important}"},"fitbitsemideparis.com":{c:"13"},"nissan.si":{s:"#ckContainer,#ckBg{display:none !important}"},"ridewill.it":{s:"#footerCk{display:none !important}"},"unitedresistance.eu":{s:".infobox{display:none !important}"},"barracuda.com":{s:".alert-tertiary{display:none !important}"},"alipaczka.pl":{s:"#bottom-charm{display:none !important}"},"pclooptvast.nl":{s:"body > div[id]:not(#websitecontent):not([style]):not([class]){display:none !important}"},"dentonet.pl":{s:"#cpolicy_wrap{display:none !important}"},"armedangels.de":{s:".notice-home{display:none !important}"},"birdfood.co.uk":{s:"#setup_notice{display:none !important}"},"pani-teresa.com.pl":{c:"58"},"cifec.es":{s:"#fixdiv{display:none !important}"},"viralagenda.com":{s:"#viral-footer{display:none !important}"},"pictetfunds.com":{s:"#tracking-message{display:none !important}"},"paysafe.com":{s:"#notify{display:none !important}"},"oalley.fr":{s:"#CGU{display:none !important}"},"stiridecluj.ro":{s:"#acn_cook{display:none !important}"},"na.se":{c:"59"},"hth.se":{s:".nb-content{display:none !important}"},"salon404.pl":{s:"#jqmAlert{display:none !important}"},"alatest.nl":{s:".identity-noticebar-content{display:none !important}"},"kinderspiele-welt.de":{c:"18"},"aicanet.it":{s:".popup-view{display:none !important}"},"menhdv.com":{c:"7"},"allocadeau.com":{s:"#allocadeau-cookies-lightbox{display:none !important}"},"confartigianato.it":{s:"#ssspu-wrapper{display:none !important}"},"sitrion.com":{s:"#limz_cc{display:none !important}body{padding-top:0 !important}"},"binck.nl":{c:"52"},"rugby-league.com":{c:"18"},"elettrocasa.it":{s:".bottomBarMessage{display:none !important}"},"albertsteinhauser.at":{s:".wppn-wrapper{display:none !important}"},"firstdraftnews.com":{s:".welcome-message{display:none !important}"},"pan.bg":{s:".coloralert{display:none !important}"},"solarenvi.cz":{s:"#cs_bx{display:none !important}"},"wibank.de":{s:".mod-Disclaimer{display:none !important}.has-disclaimer body{overflow:visible !important}.has-disclaimer body::before{content:none !important}"},"e-food.hu":{s:"#efood_cookie{display:none !important}"},"pmi.com":{s:"#lightbox-panel{display:none !important}"},"ingame.de":{s:"#ingameCookie{display:none !important}"},"backup4all.com":{s:"#backup4all_accept_cookies{display:none !important}"},"mesonic.com":{s:'.maintd td[style*="background:#999"]{display:none !important}'},"mercateo.fr":{s:"#header-popup-info{display:none !important}"},"kombit.dk":{c:"43"},"neopost.fr":{c:"18"},"webzdarma.cz":{c:"17"},"mklr.pl":{c:"8"},"enerpoint.it":{s:"#container > div[style]{display:none !important}"},"grammata.es":{c:"40"},"geonovum.nl":{s:".geonovum_cookie_popup_main_wrapper{display:none !important}"},"goodsstall.co.uk":{s:"#hideme{display:none !important}"},"cafassoefigli.it":{c:"18"},"helsingborg.se":{c:"40"},"3gb.pl":{s:"#flash-msg{display:none !important}html{margin-top:0 !important}"},"viking.de":{s:"#headerWrapper{padding-top:0 !important}"},"supernordicskipass.it":{s:".infPr{display:none !important}"},"natura-nuova.com":{s:".bottomBarMessage{display:none !important}"},"qbasic.at":{s:"#ckkasten-container{display:none !important}"},"nestlehealthscience.fr":{s:"#nhsCookiePopUpBar{display:none !important}"},"axa.sk":{s:".axa-cookies{display:none !important}"},"dedietrich-thermique.fr":{s:"body.cookie-ask #wrapper,body.cookie-ask #centrage{padding-top:0 !important}"},"managerzone.com":{c:"8"},"auto.at":{s:'table[width="98%"][bgcolor="#666666"]{display:none !important}'},"garbo.ro":{s:"#ictsuc_block{display:none !important}"},"sapsalis.gr":{s:".termsnote{display:none !important}"},"paf.com":{s:".mo-notification-bar-fixed{display:none !important}"},"nebulacodex.com":{j:"5"},"sconfini.eu":{c:"64"},"jimbeam.com":{s:".ng-scope[data-jb-message-cookie]{display:none !important}"},"docteurclic.com":{s:"#disc{display:none !important}"},"coulisse.de":{s:'body > div:not([class]):not([style]):not(#content-wrapper):not(#search-overlay):not([id*="fancybox"]){display:none !important}'},"technopolis.bg":{s:"#infomessage{display:none !important}"},"elektrykapradnietyka.com":{s:"#epnteucookie{display:none !important}"},"mediaworld.it":{s:"#bannerPolicy{display:none !important}"},"ulianavalerio.it":{c:"40"},"komunitnicestiny.cz":{c:"46"},"cyclingarchives.com":{s:'#header > div[id*="zxcw"]{display:none !important}'},"destinyghosthunter.net":{c:"18"},"auditoriaswireless.net":{s:"#adk_acblock{display:none !important}"},"zs1mm.edu.pl":{c:"7"},"fowtcg.it":{c:"18"},"alcoholics-anonymous.org.uk":{c:"60"},"forumlekarza.pl":{s:"#cpolicy_wrap{display:none !important}"},"ncplusgo.pl":{s:".js-messages{display:none !important}"},"autogasnord.it":{s:".pre-privacy-container{display:none !important}"},"moly.hu":{s:"#eu{display:none !important}"},"infiniti.fr":{c:"66"},"lotus-planete.com":{s:"#lotus-cookies-wrap{display:none !important}"},"docdroid.net":{s:".ui-pnotify{display:none !important}"},"aegonalapkezelo.hu":{s:"#AEGONCookieLine{display:none !important}"},"monptivoisinage.com":{s:"#com-message,#bandHead{display:none !important}"},"tvgids24.nl":{s:"#cbar{display:none !important}"},"noto.sr.it":{s:"#policy_id{display:none !important}body{padding-top:0 !important}"},"theinvergordonarchive.org":{s:"#CQ{display:none !important}"},"meteo-service.nl":{s:"#popup-container{display:none !important}"},"valher.si":{s:"body > table{display:none !important}"},"zahradnikrby.cz":{s:"#cs_bx{display:none !important}"},"portal.ou.nl":{s:"#M093A{display:none !important}#page_body{padding-top:0 !important}"},"v10.pl":{c:"8"},"hlidacipes.org":{s:"#hlidacipes_cookies{display:none !important}"},"affecto.fi":{s:".privacy-policy-container{display:none !important}"},"datatypes.net":{s:"#cw{display:none !important}"},"preparegreentea.com":{s:".wdpu-container{display:none !important}.has-popup.no-scroll{overflow:auto !important}"},"regalideidesideri.it":{s:".centered-container .msg{display:none !important}"},"teemo.gg":{c:"46"},"dnevnik.si":{s:"#app-messages{display:none !important}"},"einbuergerungstest-online.eu":{c:"40"},"cinquantamila.it":{s:"#privacy_advisor{display:none !important}"},"englishgratis.com":{s:"#privacy_box_container{display:none !important}"},"sexomercadobcn.com":{s:".hidder,.disclamer{display:none !important}"},"netrisk.hu":{s:"#netrisk_header > div{display:none !important}a + #netrisk_homepage{margin-top:0 !important}"},"nordschleswiger.dk":{s:".TopAdvertising-Content-Wrapper > .Seeems-CollapsibleArea{display:none !important}"},"heim-und-haustiere.de":{c:"86"},"librogame.net":{c:"57"},"concordiaubezpieczenia.pl":{c:"58"},"farmacosmo.it":{s:"#bottombar{display:none !important}"},"ttela.se":{s:".ttelcGRCookieContainer{display:none !important}"},"carmenthyssenmalaga.org":{s:"#divAlertas{display:none !important}"},"orgoglionerd.it":{s:".irpclw{display:none !important}"},"mediterraneaolive.it":{s:"#psmcookie_popup,#psmcookie_popup_layer{display:none !important}body{overflow:visible !important}"},"gmsystem.pl":{c:"75"},"therapia.cz":{s:".CC_wrap{display:none !important}"},"tagsistant.net":{c:"64"},"rhp.nl":{s:"#cn-wrapper{display:none !important}"},"helbling-ezone.com":{s:"#statusBar{display:none !important}"},"andyhoppe.com":{s:"#cmsg{display:none !important}"},"faqin.org":{c:"18"},"hyperxgaming.com":{s:"#policy_message,.notification-center{display:none !important}"},"mtv.com":{s:"#balaMainContainer{display:none !important}"},"geoprostor.net":{s:"#REALISCCBAR{display:none !important}"},"uni-kl.de":{s:"#cookie-uni-kl{display:none !important}"},"merlin.pl":{s:".merlin-legal-note{display:none !important}"},"parcoappiaantica.it":{s:".moduletable-privacy-popup{display:none !important}"},"volvo.com":{s:".headerNotification{display:none !important}"},"geekhebdo.com":{s:".cookiegeek{display:none !important}"},"essilorpro.co.uk":{s:"#mentions{display:none !important}"},"bouwformatie.nl":{s:"#stickyHeader{display:none !important}"},"itwayvad.com":{s:"#light{display:none !important}"},"nousmotards.com":{s:".csa-popup{display:none !important}"},"game-ready.com":{s:".ly-cookie{display:none !important}"},"nite-ize.eu":{s:".blockMsg{display:none !important}"},"robertdicksons.se":{j:"7"},"draagle.com":{s:"#nonsense_root{display:none !important}"},"notariado.org":{c:"40"},"senarrubia.it":{c:"7"},"relpol.pl":{s:"#powiadomiony{display:none !important}"},"el-klinikken.dk":{c:"7"},"forbot.pl":{s:"#ForbotCookies{display:none !important}"},"swm.de":{s:".mod-029{display:none !important}"},"polipc.hu":{s:"#sutik_elf{display:none !important}"},"luxicarshireltd.co.uk":{s:"body > div[data-rule-type]{display:none !important}"},"wearewater.org":{s:".messages{display:none !important}"},"alsacechampagneardennelorraine.eu":{s:".cm-message{display:none !important}"},"homejardin.com":{s:'td[valign="top"] > p[style*="text-align:justify"]{display:none !important}'},"flyordie.com":{s:"#eucc{display:none !important}"},"sickbrain.org":{s:"#popslide{display:none !important}"},"rychlyrande.cz":{s:".cok{display:none !important}"},"convert-my-image.com":{c:"18"},"vedian.io":{s:"ve-cookies{display:none !important}"},"adeccomedical.fr":{s:".bannerContainer{display:none !important}"},"raikaritten.it":{s:".bottom_note{display:none !important}"},"vanitybamboo.com":{s:"#div_c{display:none !important}"},"edenred.fr":{s:"#cookies-navigation + #page > header{top:0 !important}#cookies-navigation + #page > div{margin-top:80px !important}"},"alectia.com":{s:'#NavigationHeader > .smart-object[style*="white"]{display:none !important}'},"flitsers.nl":{s:"#cc_overlay{display:none !important}"},"grupazywiec.pl":{s:"#apollo-bar{display:none !important}"},"abt-s.pl":{c:"50"},"telefonoassistenza.net":{s:"#window{display:none !important}"},"ako-uctovat.sk":{s:"#message_wrap{display:none !important}"},"professioneparquet.it":{c:"57"},"loterieplus.com":{s:".ck_popin{display:none !important}"},"fotozine.org":{s:"#kukijima{display:none !important}"},"praktiker.bg":{s:"#infomessage{display:none !important}"},"tysiagotuje.pl":{s:'body > div > div:not([id]):not([class])[style*="fixed"]{display:none !important}'},"numericable.mobi":{s:".toastComponent{display:none !important}"},"bordersdown.net":{s:"#message-1{display:none !important}"},"diyaudio.pl":{s:"#navbar_notice_11{display:none !important}"},"kelloggs.fr":{s:"#kelloggsfrance{display:none !important}"},"xilo1934.it":{c:"7"},"mediatheque.sainthilairederiez.fr":{c:"98"},"wabeco-remscheid.de":{c:"50"},"ardes.bg":{s:".c-msg{display:none !important}"},"villamadruzzo.com":{s:".tpca{display:none !important}"},"tma-winding.com":{c:"57"},"eaux-de-normandie.fr":{s:"#notifybar{display:none !important}"},"mcclic.com":{s:"#dialog{display:none !important}"},"musicworks.it":{s:"#infromativap{display:none !important}"},"sachsen.de":{s:"#xcm-bar,.ld_container{display:none !important}"},"lonelyplanet.com":{c:"46"},"sabrain.com":{s:'.message-panel[data-notice-id="brainscookienotice"]{display:none !important}'},"matoga.com.pl":{c:"7"},"ravenblack.net":{j:"5"},"swarovskioptik.com":{s:"#cpp-wrapper{display:none !important}"},"sep.gr":{j:"5"},"voiceanddatazone.com":{s:"#popup,.blocker{display:none !important}"},"expogatemilano.org":{c:"8"},"kreuzwort-raetsel.net":{c:"7"},"jobdiagnosis.com":{s:"#benefits{display:none !important}"},"repostuj.pl":{s:".jumbotron{display:none !important}"},"visit.brussels":{s:".confirm{display:none !important}"},"variart.org":{c:"18"},"maccosmetics.it":{s:".bt-content{display:none !important}"},"artemis.co.uk":{s:"#container{top:0 !important}"},"gewoonvegan.nl":{s:"#tracking{display:none !important}"},"lopolis.si":{c:"29"},"nowlive.eu":{s:"#overlayPopup1,#opacity{display:none !important}"},"lucachiesi.com":{s:".wpcp{display:none !important}"},"postrabbit.pl":{c:"40"},"maklarhuset.se":{s:"body > .uk-panel-box{display:none !important}"},"mediaspeed.net":{s:".cp_overly,#cpContainer{display:none !important}"},"promotionbasis.de":{s:"#c_test_box{display:none !important}"},"whitehorsedc.gov.uk":{s:".ccwrap{display:none !important}"},"goodenergy.co.uk":{s:".modal-open{overflow:visible !important}"},"tan.io":{s:"#panel_11 .widget.plgText{display:none !important}"},"mgr.farm":{s:"#mgr_cookie_notice{display:none !important}"},"como-se-escribe.com":{s:"#pck{display:none !important}"},"vfl.dk":{s:"#vcc_container{display:none !important}"},"compassionuk.org":{s:".notification-bar{display:none !important}"},"gmp.police.uk":{c:"46"},"vidahost.com":{s:"#vh-cookie-terms{display:none !important}"},"nissan.be":{c:"66"},"omnitel.lt":{s:".oop-notification{display:none !important}"},"hardloopschema.nl":{s:"#interContainer,#interVeil{display:none !important}"},"ahlens.se":{s:".ah-warning{display:none !important}"},"almamarket.pl":{s:"#claw{display:none !important}"},"g5tiregala.it":{s:"#n1_popup{display:none !important}"},"toborrow.se":{c:"18"},"retromarket.club":{s:"#doc_injected{display:none !important}"},"gunof.net":{s:"body > p{display:none !important}"},"nlite.it":{c:"57"},"gautier.fr":{s:"#block-lchuser-user-preferences{display:none !important}"},"jnjmedical.it":{c:"11"},"rosacea-info.de":{s:".infobox{display:none !important}"},"koakdesign.info":{s:"#barre{display:none !important}"},"anticocaffetoti.com":{c:"18"},"vespaonline.de":{s:".footerBar{display:none !important}"},"oriocenter.it":{c:"18"},"deutsche-bank.de":{s:"#wt-confirm-layer.wt-confirm-layer{display:none !important}"},"azimutyachts.com":{s:".floatFooter{display:none !important}"},"fr12.nl":{j:"5"},"techzine.nl":{j:"4"},"squarespace.com":{s:".squarespace-banner{display:none !important}body{margin-top:0 !important}"},"resultados-futbol.com":{s:"#privacyPolicy{display:none !important}"},"partyflock.nl":{s:"#ckcnsnt{display:none !important}"},"megadev.info":{s:"#footer2{display:none !important}#footer{bottom:0 !important}"},"pampling.com":{s:"#mensaje_aprobacion{display:none !important}"},"datocapital.com":{s:"#ckp{display:none !important}"},"smac-casa.it":{s:".ccp-banner{display:none !important}"},"hosch-kleber.hu":{s:"#cinfo{display:none !important}"},"aegon.hu":{s:"#AEGONCookieLine{display:none !important}"},"biosystems.es":{s:'#aspnetForm > div[style*="fixed"]{display:none !important}'},"forumwodne.pl":{s:'body > div[id] > div[style*="fixed"]{display:none !important}'},"piqd.de":{s:".pq-flash_message-outer_wrap{display:none !important}"},"gangnam.lv":{s:"#menu_side{display:none !important}"},"binck.fr":{c:"52"},"eco07.com":{c:"76"},"pikore.com":{c:"18"},"gafas.es":{s:".header_cookie_gfs{display:none !important}"},"transcend-info.com":{s:"#legal_notice{display:none !important}"},"mojcomp.net":{s:".q-ico-container{display:none !important}"},"ragazzon.com":{c:"7"},"amnesia.es":{s:"#barra{display:none !important}"},"siegwerk.com":{s:".popover{display:none !important}"},"bilka.com.pl":{s:"#mod99{display:none !important}"},"solagrifood.com":{s:"#ecl{display:none !important}"},"activexsoft.es":{s:'body > div[class*="msg-cookies"]{display:none !important}'},"biunsinnorden.de":{s:".header-top-cookie-text{margin-top:0 !important}"},"doku5.com":{s:"#msgWindowX{display:none !important}"},"domain.com":{s:"#alertBar{display:none !important}"},"zoiglapp.de":{c:"82"},"infiniti.hu":{c:"66"},"theerlangelist.com":{s:"#privacy_note{display:none !important}"},"suzuki2wheels.be":{s:".policy-window{display:none !important}"},"pentaxforum.nl":{j:0},"aviva.es":{s:"#ventanaFlotante{display:none !important}"},"soundsgood.co":{c:"18"},"peugeotscooters.be":{s:".policy-window{display:none !important}"},"ravanson.pl":{s:'body > div[style*="cookies"]{display:none !important}'},"konkurrensverket.se":{c:"40"},"thecoupleconnection.net":{s:"#anon_mode{display:none !important}"},"globalassicurazioni.it":{c:"8"},"gamesgrabr.com":{s:".alerts-wrap{display:none !important}"},"rd.nl":{j:"5"},"webzeen.fr":{s:".footer-fixed-bottom{display:none !important}"},"bitpalast.net":{s:".con{display:none !important}"},"schoolandvacation.it":{c:"8"},"maxifoot.fr":{s:"#mfcok1{display:none !important}"},"murciaregion.com":{j:0},"payoneer.com":{s:".gb-popup{display:none !important}"},"lavorar.it":{s:".headerline2{display:none !important}"},"mtech.pl":{s:"#content_jquery_bottom{display:none !important}"},"jomalone.co.uk":{s:"#bt_notification{display:none !important}"},"czarymary.pl":{s:".ek-bar{display:none !important}"},"vera.com.pl":{c:"58"},"ncplus.pl":{s:".js-messages{display:none !important}"},"mccruddens-repair.co.uk":{s:'body > div[data-rule-type="notification"]{display:none !important}'},"bristoltransmissions.co.uk":{c:"8"},"companycheck.co.uk":{s:"footer .news-bar{display:none !important}"},"buzzfil.net":{s:"#popup1{display:none !important}"},"zoomalia.com":{s:".cnil_container{display:none !important}"},"majestic.co.uk":{s:"#ens_overlay_main{display:none !important}"},"idealing.com":{s:"#idealing-cookie-consent-wrapper{display:none !important}"},"tuandco.com":{s:".jnotify-container{display:none !important}"},"simpelkoken.nl":{c:"23"},"pavillonfrance.fr":{c:"7"},"afcwimbledon.co.uk":{s:".optional_module.profile_summary{display:none !important}"},"getagift.pl":{s:"#header > div[style]{display:none !important}"},"mojapogoda.com":{s:"#IR{display:none !important}"},"uzdrowisko-wieniec.pl":{s:"#statement{display:none !important}"},"deshgold.com":{s:".rltcp_information_cookie,.rltcp_overlay{display:none !important}"},"woolrich.eu":{s:".firstvisit{display:none !important}"},"fratinardi.it":{s:'.wrapper > div[id*="cookie"]{display:none !important}'},"casadei.com":{s:".firstvisit{display:none !important}"},"camcom.it":{s:"#fine{display:none !important}"},"portalodo.com":{c:"46"},"leaandperrins.co.uk":{c:"7"},"burn-out-forum.de":{s:".ifancybox-overlay-fixed{display:none !important}"},"pemp.pl":{s:"#divCiacho{display:none !important}"},"gospodari.com":{s:".biscuits{display:none !important}#header.opened-bisc{top:0 !important}"},"swiat-laptopow.pl":{c:"8"},"monsterdoodles.co.uk":{s:"#msgBox{display:none !important}"},"maggi.com.my":{s:".agreebox,.transparent{display:none !important}"},"hannovermesse.de":{s:".user-notes-notification{display:none !important}"},"pavinviaggi.com":{s:"#otp-privacy{display:none !important}"},"ipodnikatel.cz":{s:".footer-banner-container{display:none !important}"},"uta.com":{s:"#hinweisoverlay{display:none !important}"},"vivatechnologyparis.com":{s:"#content > .full > .fixed{display:none !important}"},"synpeka.gr":{s:"#trumpet_message{display:none !important}"},"informationisbeautiful.net":{s:"#iib-cookies{display:none !important}"},"hss.com":{s:"body > div > .center_block{display:none !important}"},"monchio-delle-corti.pr.it":{c:"57"},"groupeelectrogene.com":{s:"#cFrame{display:none !important}"},"guideastuces.com":{s:"#agreeMsg{display:none !important}"},"myairbridge.com":{s:"#terms{display:none !important}"},"privatesportshop.fr":{c:"7"},"persgroepwielerspel.nl":{s:"#st_popup,#st_overlay{display:none !important}"},"mots-croises.ch":{s:"#askCk{display:none !important}"},"adamequipment.com":{s:"#fl_menu{display:none !important}"},"atlasdepoesia.blogcindario.com":{s:"body > div[id][class]:not(#math_parentdiv):not(#pagina){display:none !important}"},"promet.si":{s:"#REALISCCBAR{display:none !important}"},"hang-sluitwerk.nl":{c:"29"},"bonnejournee-by-up.fr":{s:".bandeau{display:none !important}"},"eknjiga.hr":{s:".popupbox{display:none !important}"},"whoisanna.com":{s:".popup-background,.popup{display:none !important}"},"heythroppark.co.uk":{s:"#pecr_summary{display:none !important}"},"headfirstbristol.co.uk":{c:"60"},"elternchecker.de":{c:"37"},"xlbygg.se":{s:".main.cookiewarning{margin-top:0 !important}"},"penzionist.info":{c:"64"},"aerlingus.com":{s:".ng-isolate-scope[cookie-content]{display:none !important}"},"practicalphysics.org":{s:"#alerttop{display:none !important}"},"riomare.it":{s:".ccp-banner{display:none !important}"},"hypemerchants.nl":{s:".body-innerwrapper + div[id]{display:none !important}"},"autohaus-brandt.com":{s:"#notify2{display:none !important}"},"merckmanual.nl":{j:"5"},"msdmanuals.nl":{j:"5"},"nombra.me":{s:"#privacy_w{display:none !important}"},"dobrarada.com.pl":{s:"#notice_bar{display:none !important}"},"lcfc.com":{s:".optional_module.profile_summary{display:none !important}"},"adventureinsel.de":{s:".infobox{display:none !important}"},"goteo.org":{s:"#message.info{display:none !important}"},"valvolgyikisvasut.hu":{s:"#SITE_ROOT + div{display:none !important}"},"germinalbio.it":{c:"8"},"papergeek.fr":{s:"#notification-bar-top{display:none !important}"},"transcend.de":{s:"#legal_notice{display:none !important}"},"withgoogle.com":{j:"5"},"aidonslesnotres.fr":{s:"#cnil-wrapper{display:none !important}"},"unicreditgroup.eu":{s:"#header{top:0 !important}.body-container-table{margin-top: 0 !important}"},"unicreditbank.cz":{s:"#pop-down{display:none !important}"},"opel-rupprecht-wernberg.de":{s:"#tooltip-privacy-shown{display:none !important}"},"filmsorozatok.hu":{s:"#modal-adult{display:none !important}.modal-open{overflow:visible !important}"},"mmtv.pl":{s:"#policyInfo{display:none !important}"},"regupedia.de":{s:".wr_regupedia-header-cookie{display:none !important}"},"ardanta.nl":{s:"#cookie-bar-ardanta{display:none !important}"},"environnement-magazine.fr":{s:".enviro-cookies{display:none !important}"},"italiaracing.net":{s:"#Allpopup_PW0{display:none !important}"},"bbbell.it":{s:"#slideit{display:none !important}"},"courrier-picard.fr":{s:".header{padding-top:0 !important}"},"drittemanntour.at":{s:"#selfedit-privacy-window{display:none !important}"},"e-weber.it":{c:"89"},"visionaidoverseas.org":{c:"7"},"trainstationgame.com":{c:"40"},"wearablesmagazine.nl":{c:"84"},"hirealestate.es":{c:"69"},"olib.oclc.org":{s:"#userMessaging{display:none !important}"},"esklep-sbs.pl":{s:"#cibMessage{display:none !important}"},"seaheroquest.com":{s:".tab-cookies{display:none !important}"},"davidviner.com":{s:"#cklmsg{display:none !important}"},"chceauto.pl":{s:".cookue{display:none !important}"},"masymasbarato.com":{s:"#galetes{display:none !important}"},"mysearch.com":{s:"#cp-banner{display:none !important}"},"bpm.it":{s:"#inline-cookie-tab{display:none !important}"},"cz.it":{s:"#dviT{display:none !important}"},"butagaz.fr":{s:"#prehead{display:none !important}"},"heyn.at":{c:"75"},"lalocandadeigirasoli.it":{s:".allowBox{display:none !important}"},"commentseruiner.com":{s:"#uec_wrap{display:none !important}"},"bongacams.com":{s:".popup_18_plus .block.two{display:none !important}"},"bruno-bedaride-notaire.fr":{s:".avertissement{display:none !important}"},"sklepbiegowy.com":{c:"7"},"covertimes.com":{s:"#privacyPolicy{display:none !important}"},"autohus.de":{s:".c-toast-notification{display:none !important}"},"stresninosice.cz":{s:".remarketing_allow{display:none !important}"},"node-os.com":{s:"#westoredata{display:none !important}"},"bigbank.lt":{s:".sticky{display:none !important}"},"classcroute.com":{c:"40"},"vh1.com":{s:".preventAcceptance{display:none !important}"},"magazzinirossi.eu":{s:"#informativaBreve{display:none !important}"},"lavozdeasturias.es":{c:"40"},"rawranime.tv":{s:'.site-news[data-id="acceptcookies"]{display:none !important}'},"sentinellelagazuoi.it":{s:"#contact{display:none !important}"},"lyrics.cat":{s:"#cxcx{display:none !important}"},"rock-in-chiado.com":{s:"#SITE_ROOT + div{display:none !important}"},"avtoset.si":{s:'body > div[style*="2A2A2A"]{display:none !important}'},"termalfurdo.hu":{s:"#layout_advertising_bottom{display:none !important}"},"blackoise.de":{s:".wppn-wrapper{display:none !important}"},"profiloptik.dk":{s:".message-large{display:none !important}"},"parcoittico.it":{c:"76"},"leporelo.info":{s:".bg-info{display:none !important}"},"prohibita.pl":{s:".ciachbtm-wrap-container{display:none !important}"},"elumbus-reisen.de":{c:"40"},"ebo.se":{j:"7"},"suder.eu":{c:"8"},"dela.nl":{s:"#dela-cookie-bar{display:none !important}"},"kelformation.com":{c:"46"},"pyrexuk.com":{s:"#popajax{display:none !important}"},"drukowalnia.pl":{s:".ek-bar{display:none !important}"},"alfakan.si":{s:".jquery-bar{display:none !important}"},"autotask.com":{s:".alertbar{display:none !important}"},"zvono.eu":{s:"#footer > table{display:none !important}"},"gsbk.pl":{s:"#ci{display:none !important}"},"lacapracampa.com":{s:"#psmcookie_popup,#psmcookie_popup_layer{display:none !important}body{overflow:visible !important}"},"trovanumeri.com":{s:"#hid{display:none !important}"},"chateauversailles.fr":{s:".bloc-notifications{display:none !important}"},"buyamower.co.uk":{c:"35"},"memorialhenrykapuzonia.pl":{s:"#sc{display:none !important}"},"referendumcostituzionale.online":{c:"76"},"also.com":{c:"18"},"paramountplants.co.uk":{s:".uk-notify{display:none !important}"},"bndunlimited.com":{s:"#header-banner{display:none !important}"},"nationalacademic.nl":{s:"#footer_fixed{display:none !important}"},"unimib.it":{s:"#bico-bscn-cnt,#cookies{display:none !important}"},"centromedicobeb.it":{c:"46"},"sosulski.pl":{c:"75"},"howdidido.com":{c:"40"},"bryncynonstrategy.co.uk":{c:"76"},"teaminternet.dk":{c:"8"},"highworthrec.co.uk":{s:"#cookiebtn{display:none !important}"},"oszkar.com":{s:"#footerbar{display:none !important}"},"ekko.com.pl":{s:"#messagePopup{display:none !important}"},"ministerstworeklamy.pl":{s:"#messagePopup{display:none !important}"},"zilverenkruis.nl":{j:"5"},"jak-ksiegowac.pl":{s:"#message_wrap{display:none !important}"},"kicktipp.at":{s:".messagebox{display:none !important}"},"cowsep.com":{s:".cg-notify-message{display:none !important}"},"eg.dk":{s:".top-alert{display:none !important}"},"albrevin.org":{c:"18"},"weclap.fr":{s:".front_web_app_main_menu_front-web-app-main-menu-component_front_show_cookie_container{display:none !important}"},"llttf.com":{s:".ico{display:none !important}"},"cronacaqui.it":{s:"#footerprivacy{display:none !important}"},"camping-les-loges.com":{s:"#MenuCnil{display:none !important}"},"de-vogel.nl":{j:"4"},"scavino.it":{s:"#fanback{display:none !important}"},"radsportseiten.net":{s:"#zxcw03{display:none !important}"},"startupmalta.com":{c:"46"},"mtsmarkets.com":{s:"#headerDropDownPanel{display:none !important}"},"atmanavillarospigliosi.it":{c:"39"},"teamliquid.net":{c:"8"},"gcpat.com":{s:".ms-dlgOverlay,.ms-dlgContent{display:none !important}"},"conservateur.fr":{c:"72"},"instytutlogopedyczny.pl":{s:"#flash-msg{display:none !important}"},"bestiloghent.dk":{s:".popup-container{display:none !important}"},"theblues-thatjazz.com":{s:".transbox1{display:none !important}"},"mini.it":{s:".md-custom-overlay,.md-custom-overlay-veil{display:none !important}"},"zeewolde-actueel.nl":{s:"#CARD-optin-header{display:none !important}"},"ef.com.es":{s:".aa{display:none !important}"},"scorito.com":{j:"5"},"sg-weber.de":{c:"89"},"mercedes-benz.net":{s:"#cLayer,.cLayer,.bottom.notice,#emb-cp-overlay,#emb-cp-dialog,#cPageOverlay{display:none !important}"},"hypersunday.com":{s:"#menu-who{display:none !important}"},"editionlimiteepays.com":{s:".alertAgegate{display:none !important}"},"medtronic.nl":{j:"5"},"kalenderpedia.de":{c:"8"},"next-gamer.de":{s:"#ingameCookie{display:none !important}"},"artedas.it":{s:"#cookiemex{display:none !important}"},"marcel-lameijer.nl":{s:".wpmui-overlay,.wpmui-popup{display:none !important}html.no-scroll,html.no-scroll body{overflow:visible !important}"},"medatixx.de":{s:"#cky-notification{display:none !important}"},"cottages.com":{s:"#createCookie{display:none !important}"},"quotazero.com":{c:"72"},"qsoftnet.com":{s:".art-sheet > table{display:none !important}"},"calendrier-lunaire.net":{s:"#toptop{display:none !important}"},"vrty.org":{s:".usage-notice > strong{display:none !important}"},"3dtvmagazine.nl":{c:"84"},"blikopzeewolde.nl":{j:"5"},"aziendasicura.net":{s:"#FrstCksDiv{display:none !important}"},"hardreset.hu":{c:"57"},"yogenfruz.pl":{s:".shotimoo{display:none !important}"},"brdfinance.ro":{c:"60"},"ebok.jmdi.pl":{s:".ui-notificationbar.top{display:none !important}"},"battlecam.com":{s:".navigation-notify{display:none !important}"},"lma.eu.com":{c:"72"},"crowdstrike.com":{s:"#optInMessage{display:none !important}"},"cplusplus.com":{c:"7"},"ezermester.hu":{c:"18"},"kapszulavadasz.hu":{c:"60"},"kalkulatorkalorii.net":{s:".ek-bar{display:none !important}"},"manualslib.com":{c:"35"},"alablaboratoria.pl":{s:"#cover{display:none !important}"},"kkuriren.se":{c:"59"},"alko-memy.pl":{s:"#cookieMain{display:none !important}"},"remax.at":{s:"#datenschutz{display:none !important}"},"kierunekspozywczy.pl":{c:"60"},"blackspur.com":{s:'#MainTable div[style*="background:#333"]{display:none !important}'},"visahq.co.uk":{s:"#main_visa_warning{display:none !important}"},"dopdf.com":{s:"#dopdf_accept_cookies{display:none !important}"},"beardsmen.co.uk":{c:"7"},"sanef.com":{s:".bandeaux{display:none !important}"},"ah-finmekanik.dk":{c:"7"},"uitdatabank.be":{c:"40"},"azimutyachts.cz":{s:".floatFooter{display:none !important}"},"fitneszvilag.hu":{s:"#id_accptTerrms{display:none !important}"},"varese.it":{s:"#headervarese ~ a{display:none !important}"},"para.it":{s:".popup-alert-notice{display:none !important}"},"buderus.de":{s:".tt-mybuderus-common-cookiebar{display:none !important}"},"appdynamics.de":{s:".announcement-bar{display:none !important}"},"mimio.com":{s:".botmid{display:none !important}"},"sausageandciderfestival.co.uk":{s:"#CC_Bar,#CC_Shade{display:none !important}"},"cinemacity.sk":{c:"35"},"grottapalazzese.it":{s:".modal-strip{display:none !important}"},"crescent.se":{s:"body > div[data-am-cookie-information]{display:none !important}"},"kozy.pl":{s:"#claw{display:none !important}"},"wislaportal.pl":{c:"60"},"liebl.de":{s:".ish-global-notice-container{display:none !important}"},"sussexarchaeology.org":{c:"76"},"lords.org":{s:".global-notice-wrap{display:none !important}"},"weber-terranova.hu":{c:"89"},"southoxon.gov.uk":{s:".ccwrap{display:none !important}"},"auto-schorn.de":{s:"#notify2{display:none !important}"},"viu.es":{s:"#sst_container{display:none !important}"},"breakingitaly.it":{c:"39"},"mare2000.it":{s:"#avviso{display:none !important}"},"serialefilmyonline.pl":{c:"18"},"uuid.cz":{s:"#fuckies_info{display:none !important}"},"unicreditbank.si":{s:"#pop-down{display:none !important}"},"federconsumatoripavia.it":{c:"8"},"mountstuarthospital.co.uk":{s:".popupbox{display:none !important}"},"alatest.no":{s:".identity-noticebar-content{display:none !important}"},"tyrolia.at":{c:"75"},"motorcycles-motorbikes.com":{s:"#CQ{display:none !important}"},"nowtv.it":{c:"8"},"almaimotthona.hu":{s:".aszfLayerText{display:none !important}"},"spelsberg.de":{s:".tx-elsbase-notification{display:none !important}"},"stylefactoryproductions.com":{c:"39"},"negrita.fr":{s:"#slidebox{display:none !important}"},"ingwb.com":{s:".glass,.dialog{display:none !important}"},"voloweb.it":{s:"#popupDivC{display:none !important}"},"ilfruttarolo.it":{s:"#decretopr{display:none !important}"},"e-cegjegyzek.hu":{s:"#suti_csik{display:none !important}"},"coisas.com":{s:".fixebar{display:none !important}"},"runinmarseille.com":{c:"13"},"carhartt-wip.com":{s:".standard-message{display:none !important}"},"wnt.com":{s:"#trackerBanner{display:none !important}"},"sherburnaeroclub.com":{c:"76"},"e-stave.com":{c:"67"},"satispay.com":{c:"40"},"alpintouren.com":{s:".humane{display:none !important}"},"jooas.com":{c:"46"},"quazer.com":{s:".fullscreen-notification{display:none !important}"},"szyj.pl":{c:"7"},"alyt.com":{s:"#ALYT_privacyCookie{display:none !important}"},"epexspot.com":{s:"#ub{display:none !important}"},"privatesportshop.it":{s:'body > div[style*="FFFFE1"]{display:none !important}'},"laatumaa.fi":{s:"#PrivacyNotice{display:none !important}"},"frivolausgehen.eu":{c:"86"},"daiwa-info.hu":{s:"#wrap{display:none !important}"},"americancentury.com":{s:"#instruction_message{display:none !important}"},"mimprendo.it":{c:"7"},"katorishintoryu.it":{c:"76"},"podcrto.si":{s:"#cc-note{display:none !important}"},"kicktipp.com":{s:".messagebox{display:none !important}"},"mycircle.tv":{s:"#notif_ck{display:none !important}"},"filedesc.com":{s:"#cwarn{display:none !important}"},"vrn.de":{s:"#vrn-cookie{display:none !important}"},"mywebook.com":{s:".cui-coks{display:none !important}"},"decathlon.hu":{s:"#container-screen{display:none !important}"},"rendi.hu":{c:"7"},"overcoming.co.uk":{s:"#msg_top_bar{display:none !important}"},"somethingartistic.net":{s:"#hellobar-slider{display:none !important}"},"valtifest.nl":{s:"#cerabox,#cerabox-background{display:none !important}"},"volvotrucks.nl":{s:".headerNotification{display:none !important}"},"havoline.com":{c:"81"},"zetchilli.pl":{s:".giodoContainer{display:none !important}"},"marathondumontsaintmichel.com":{c:"13"},"humanic.net":{s:"#privacyOverlay{display:none !important}"},"webmaster-rank.info":{s:"#footerSlideContainer{display:none !important}"},"216dt.com":{s:'#bdy > div[style*="fixed"]{display:none !important}'},"pingvinpatika.hu":{c:"40"},"voglioviverecosi.com":{c:"18"},"ekuriren.se":{c:"59"},"britmodeller.com":{s:".ipsMessage_error{display:none !important}"},"liquiddota.com":{c:"7"},"digivaardigdigiveilig.nl":{c:"82"},"liveuamap.com":{s:".user-msg{display:none !important}"},"mongars.fr":{s:"#metacontainer > div:not([id]):not([class]){display:none !important}"},"ig.com":{c:"69"},"usm.com":{s:".usm-cookie{display:none !important}"},"suchdichgruen.de":{j:"5"},"smarthomemagazine.nl":{c:"84"},"aircostcontrol.com":{s:".question{display:none !important}"},"stubhub.co.uk":{s:"#banner-container{display:none !important}"},"did.ie":{c:"24"},"peugeot-scooters.nl":{s:".policy-window{display:none !important}"},"tuv.com":{s:"#simplemodal-container,#simplemodal-overlay{display:none !important}"},"printerman.pt":{c:"7"},"neti.ee":{s:".neti_reminder{display:none !important}"},"hirpress.hu":{s:"#cooky{display:none !important}"},"os-naklo.si":{c:"67"},"fis.tv":{s:".messagesWrapper{display:none !important}"},"eloben.hu":{s:".law-accept{display:none !important}"},"tudorwatch.com":{s:".tdr-ribbon{display:none !important}"},"videosection.com":{c:"7"},"boraszportal.hu":{s:"#layout_advertising_bottom{display:none !important}"},"meteo.lt":{s:"#ecl{display:none !important}"},"diochan.com":{s:"#di5c141m3r{display:none !important}"},"uneto-vni.nl":{s:"#euBackground{display:none !important}"},"kotburger.pl":{c:"7"},"region-villach.at":{j:"6"},"rocchietta.fr":{s:".wpmui-overlay,.wpmui-popup{display:none !important}html.no-scroll,html.no-scroll body{overflow:visible !important}"},"liberal.hr":{s:"#footer{display:none !important}"},"byom.de":{c:"18"},"versatel.nl":{s:"#targetedPopupFrame{display:none !important}"},"handleidingzoek.nl":{s:"body.cookie-notice > #wrapper,body.cookie-notice > #footer-bottom,body.cookie-notice > #footer{filter:none;-webkit-filter:none;-moz-filter:none}"},"chathispano.com":{c:"18"},"forzearmate.org":{s:"#WPS_popup_message{display:none !important}"},"ntp-shop.it":{s:".bottomBarMessage{display:none !important}"},"grazia-magazin.de":{s:".safeSpaceForClose{display:none !important}"},"twed.com":{s:".topline_wrapper{display:none !important}"},"audito.fr":{s:"#iframe_cc{display:none !important}"},"watfordfc.com":{s:".wfc-m-cookie{display:none !important}"},"badkissingen.de":{s:"#chint{display:none !important}"},"liquidhearth.com":{c:"7"},"nick.com":{s:"#balaMainContainer{display:none !important}"},"sogeti.nl":{j:"5"},"brenntag.com":{s:".page-hint-box{display:none !important}"},"luebben.de":{s:"#datenschutz-wrapper{display:none !important}"},"teamliquidpro.com":{c:"7"},"sheknows.com":{s:"#dfp-interstitial-holder{display:none !important}"},"mrsmithcasino.co.uk":{s:".global-inline-notifications{display:none !important}"},"robertsspaceindustries.com":{s:".bottom-notif-bar,.l-notification-bar{display:none !important}"},"surveycircle.com":{s:"#consent_info{display:none !important}"},"amnesty.fr":{s:"#content > div > div:not([style]):not([id]){display:none !important}"},"daimler.de":{j:"5"},"zomoto.nl":{j:"5"},"willys.se":{s:".ax-global-messages{display:none !important}"},"greek-weather.org":{s:".notice-top{display:none !important}"},"anisearch.de":{s:".urgent-msg{display:none !important}"},"rocva.nl":{s:".brochure-overlay,.brochure-overlay-bg{display:none !important}"},"giornalepop.it":{s:"#policy-alert{display:none !important}"},"badplaats.nl":{s:".cnotice{display:none !important}"},"futurelearn.com":{s:'.m-heads-up-banner[aria_label="Cookie banner"]{display:none !important}'},"ksk-koeln.de":{s:"#dpWarningWrapper{display:none !important}"},"infogreffe.fr":{s:".trackingCookiesDisclaimer .header{margin-top:0 !important}"},"bulls.de":{s:'footer > div[class*="cookie-hinweis"]{display:none !important}'},"fairmondo.de":{s:".l-news-header{display:none !important}"},"ou.nl":{s:"#M093A{display:none !important}"},"vodafone.hu":{s:".cookie_fix{display:none !important}"},"tarifaexpert.hu":{s:".lablec_suti_szabaly{display:none !important}"},"grammophon-platten.de":{c:"86"},"supercanemagic.com":{s:"#SE-disclaimer{display:none !important}"},"suzuki.nl":{s:".page-helper__content--cookies{display:none !important}"},"symscooters.nl":{s:".policy-window{display:none !important}"},"mypeopledoc.com":{s:".tall .update{display:none !important}"},"viewsoniceurope.com":{c:"18"},"kuki.cz":{s:"#fuckeu{display:none !important}"},"psc.cz":{c:"8"},"l1.nl":{s:"#l1_cookie_policy{display:none !important}"},"eclipsecomputers.com":{s:".pagecookie{display:none !important}"},"vertaa.fi":{s:'div[data-rendering-area="dialogs"] [data-bind*="ui.dialogs.PopupBehavior"]{display:none !important}'},"efset.org":{s:"body > .aa{display:none !important}"},"hemkop.se":{s:".ax-global-messages{display:none !important}"},"wuerzburg.de":{s:"#chint{display:none !important}"},"hdi.global":{s:".js-top-header{display:none !important}"},"inforete.it":{c:"7"},"keyforweb.it":{s:"#dcb-black-screen{display:none !important}"},"wseven.info":{s:"#ntf{display:none !important}"},"akrapovic.com":{s:".cookies-bubble{display:none !important}"},"poigps.com":{s:"#poigps_cookie_advice{display:none !important}"},"gourmet.at":{s:".row-wrapper.blackbox{display:none !important}"},"mondial-assistance.fr":{s:".region-disclaimer{display:none !important}"},"rabla.ro":{s:'body > div[id=""]{display:none !important}'},"manualsearcher.com":{s:"body.cookie-notice > #wrapper,body.cookie-notice > #footer-bottom,body.cookie-notice > #footer{filter:none;-webkit-filter:none;-moz-filter:none}"},"smartenergygb.org":{s:".segb-cookiecompliance{display:none !important}"},"vectonemobile.nl":{s:"#alert_home{display:none !important}"},"runtervomgas.de":{j:"5"},"ristorantegellius.it":{c:"39"},"shopwelt.de":{s:"#dateschutzinfo{display:none !important}"},"rankinglekarzy.pl":{c:"67"},"robeco.nl":{s:"#container{margin:0 auto !important}"},"teesbusinesscompass.co.uk":{j:"5"},"lovepedia.net":{s:".policy-banner{display:none !important}"},"weather2umbrella.com":{s:"#w2u_cookie_notice{display:none !important}"},"euractiv.es":{s:"#avisosusc{display:none !important}"},"qlstats.net":{j:"5"},"kvidingebyggen.se":{j:"7"},"nacesty.cz":{s:"#term-of-use{display:none !important}"},"tallsay.com":{j:"5"},"viactt.pt":{s:".popupContainer{display:none !important}"},"procyclingstats.com":{c:"7"},"lesoriginelles.fr":{c:"76"},"fatface.com":{s:"#messages{display:none !important}"},"openlibra.com":{j:"5"},"casinoeuro.com":{s:".growl-container{display:none !important}"},"emtecko.cz":{s:"#__loadCookie{display:none !important}"},"abb.com":{s:"#abb-cookie-banner{display:none !important}"},"fishersci.fr":{s:"#legalMessageWrapper{display:none !important}"},"telkom.co.za":{s:"#PrivacyNotice{display:none !important}"},"broughtons.com":{s:".notice-wrap{display:none !important}"},"idee-fuer-mich.de":{s:".subNaviNotification{display:none !important}"},"hessenchemie.de":{s:".readcookie{display:none !important}"},"erkel.hu":{s:"#suti_info{display:none !important}"},"freeonlinegames.com":{s:"#cwarn-box{display:none !important}"},"paf.es":{s:".mo-notification-bar-fixed{display:none !important}"},"metropolisweb.it":{s:"#informativa{display:none !important}"},"vocabolariotreccani.it":{s:"footer{display:none !important}"},"kum.dk":{c:"43"},"my-supps.de":{s:".pn_container{display:none !important}"},"yomoni.fr":{s:".header__cook{display:none !important}"},"enel.it":{s:".message-notification{display:none !important}"},"tradukka.com":{j:"5"},"radioveronica.nl":{j:"5"},"zorgverzekeringhema.nl":{j:"5"},"prorun.nl":{s:"body > div[id]:not([class]){display:none !important}"},"go4celebrity.com":{s:".ccc{display:none !important}"},"werkstatt-betrieb.de":{s:".cooco-window{display:none !important}"},"bapr.it":{s:"#policy_id{display:none !important}#wrapper{padding-top:0 !important}"},"meandermc.nl":{j:"5"},"accessibilitacentristorici.it":{s:"#htmlbox_div1{display:none !important}"},"innoq.com":{s:".tracking-wrapper{display:none !important}"},"maschinewerkzeug.de":{s:".cooco-window{display:none !important}"},"freetranslation.com":{s:"w-div{display:none !important}html.wf-active body[class]::before{height:0 !important}"},"magiogo.sk":{s:".headerMessages{display:none !important}"},"naacesrf.com":{s:"#cklbox{display:none !important}"},"ajurveda-brno.cz":{s:".notify{display:none !important}"},"studioevil.com":{s:"#SE-disclaimer{display:none !important}"},"miciny.cz":{c:"17"},"dagelijksestandaard.nl":{s:".dgd_stb_box{display:none !important}"},"energiedirect.nl":{s:"#wall{display:none !important}"},"volvotrucks.gr":{s:".headerNotification{display:none !important}"},"net-s.pl":{s:".regulations{display:none !important}"},"rozwojowiec.pl":{c:"17"},"jobbio.com":{c:"40"},"hotel-sonnblick.at":{s:".pageCookie{display:none !important}"},"haalo.pl":{s:"#cooks{display:none !important}"},"holfuy.com":{c:"8"},"alatest.de":{s:".identity-noticebar-content{display:none !important}"},"floriantravel.com":{s:".cookieatata{display:none !important}"},"canrosendo.com":{s:"#cookies-wrapper2{display:none !important}"},"czesci-samochodowe.wroclaw.pl":{c:"9"},"sockshop.co.uk":{s:"#CNwrap{display:none !important}"},"scandtrack.com":{s:"#st_cookie{display:none !important}"},"bzwbk.pl":{s:".cookie-btn{display:none !important}"},"newsnow.co.uk":{s:"#pmbar{display:none !important}"},"gruppocarraro.it":{c:"7"},"riddarhuset.se":{s:".cookieWidget{display:none !important}"},"dvdbluray.hu":{s:"#sutibox{display:none !important}"},"nickjr.com":{s:"#balaMainContainer{display:none !important}"},"loto.ro":{s:".top-cookies{display:none !important}"},"volkswagen.it":{s:"#trackingPolicy{display:none !important}"},"guidastudenti.it":{s:".barraPrivacy{display:none !important}"},"sokkaljobb.hu":{s:"#SPS_noaccept{display:none !important}"},"webmonkeysoftware.it":{s:"#Divcookie{display:none !important}"},"staffettaonline.com":{s:"#ctl00_CtrlLogAbbonato1_cookiealert{display:none !important}"},"sportetstyle.fr":{c:"87"},"juegosdiarios.com":{s:".bottombar{display:none !important}"},"voicegroup.co.uk":{s:".cookie-menu{display:none !important}"},"vicenteamigo.com":{s:".cva_accept{display:none !important}"},"mixare.org":{s:".rain1-cp-container{display:none !important}"},"hilzingen.de":{s:".popupbox{display:none !important}"},"faelectronic.it":{c:"87"},"fastalp.biz":{c:"35"},"svapoworld.com":{s:"#policy-alert{display:none !important}"},"kyokugym.nl":{c:"76"},"digiminster.com":{c:"40"},"grebbeberg.nl":{s:"#acceptscp2012{display:none !important}"},"365curtains.com":{s:".top_warning{display:none !important}"},"hybridshop.co.uk":{c:"76"},"urbanfires.co.uk":{c:"76"},"fuba.com":{s:"#cover{display:none !important}"},"batcmd.com":{s:"#cmsg{display:none !important}"},"mtom-mag.com":{s:"#alert_trk{display:none !important}"},"itrebon.cz":{s:".info-okno{display:none !important}"},"jeveuxlafibre.re":{s:"#les_cookies{display:none !important}"},"eko-care.si":{s:".ndp-panel{display:none !important}"},"miliboo.com":{s:".m-milibooCookie{display:none !important}"},"capgroup.com":{s:"#sb-container{display:none !important}"},"aquaparksenec.sk":{s:"#PovInfCoo{display:none !important}"},"muzeummw.pl":{s:".cookieForm{display:none !important}"},"netbridge.dk":{s:"#bkg{display:none !important}"},"uresmykker.dk":{c:"7"},"gov.wales":{s:"#govwales-cookie-notice{display:none !important}body.cookie-message-visible{background-position:0 0 !important}"},"seguroscity.com":{s:"#galleta{display:none !important}"},"molfettalive.it":{s:"#Info{display:none !important}"},"bloomsbury.com":{s:".stickyFooter{display:none !important}"},"twojliquid.pl":{c:"67"},"fragasyv.se":{s:"#siteflash{display:none !important}"},"campisiconserve.it":{s:"body > span{display:none !important}"},"szexpartnerindex.hu":{s:"#cookiewindow{display:none !important}"},"gocards.nl":{s:"#cbar{display:none !important}"},"uneo-avantages.fr":{s:".bCnil{display:none !important}"},"fireteam.net":{s:".cc-container{display:none !important}"},"algerieinfo.com":{s:"body > center > font{display:none !important}"},"geoblog.pl":{s:"#cContainer{display:none !important}"},"mojbrzuch.pl":{s:"#__cookies_{display:none !important}"},"weetabix.co.uk":{s:".oCookie{display:none !important}"},"lacnews24.it":{s:"#overlay_pri,#box1{display:none !important}"},"talentsoft.com":{s:"#cnil_message{display:none !important}"},"italradio.org":{s:".privacyStatement{display:none !important}"},"misterfox.co":{c:"7"},"fijlkam.it":{s:"#privacy-wrapper{display:none !important}"},"dieantenne.it":{s:"#camp{display:none !important}"},"alltricks.es":{s:".alltricks-CnilRibbon{display:none !important}"},"sigmastudio.it":{c:"57"},"candycastle.nl":{s:".cookiesC{display:none !important}"},"tokiomarine.com":{s:".navigation-secondary-top{display:none !important}"},"privatesportshop.es":{c:"7"},"online24.pt":{c:"51"},"sydmaquinaria.com":{s:"#infoContainer{display:none !important}"},"lettercount.com":{s:".top-header{display:none !important}"},"dirtyrhino.com":{c:"7"},"gdjenamore.com":{s:".kolacic{display:none !important}"},"immense-serie.com":{s:"#cookie_auth{display:none !important}"},"pirk.lt":{s:"#toolbar_container{display:none !important}"},"grizly.cz":{c:"18"},"caferosenhaven.dk":{c:"7"},"confort-sauter.com":{s:"#block-notice{display:none !important}"},"digi-work.com":{s:"#mobileHeader{display:none !important}"},"allplay.pl":{c:"7"},"krups.com.pl":{c:"7"},"vlmedicina.lt":{s:".div_cookie_bg{display:none !important}"},"longines.it":{j:"5"},"pierreetvacances.com":{s:".cookie-block-visible header,.cookie-block-visible #main-nav.fixed-position,.cookie-block-visible .fp-integrated-booking .header-scroll,.cookie-block-visible .fp-integrated-booking #js_resume_position.scroll-limit-resume{margin-top:0 !important}"},"teoma.com":{s:"#cp-banner{display:none !important}"},"coinucid.it":{c:"76"},"alternativa.fr":{j:"5"},"nextdoor.nl":{s:"#top_banner{display:none !important}"},"groepsaccomodaties.org":{j:"5"},"sportechplc.com":{s:".mdl-notification{display:none !important}"},"oneyeartarget.com":{c:"64"},"france.fr":{s:".atfcookie{display:none !important}"},"tetrainfo.com":{s:"#tetrainfo_eu{display:none !important}"},"xxxvogue.net":{c:"7"},"futbolenvivoargentina.com":{c:"18"},"mols-linien.dk":{s:".CInfo{display:none !important}"},"prague-catering.cz":{s:".feuc{display:none !important}"},"k-tuinskool.com":{s:"#c-cookies{display:none !important}"},"musixmatch.com":{s:".mxm-cookie-alert{display:none !important}"},"megascans.se":{s:"#react-app > div:not([data-reactid]){display:none !important}"},"nosolosalud.com":{s:"#downbar{display:none !important}"},"fahrrad-kuechler.de":{s:'.cookieHintVisible div[class*="cookie-hinweis"]{display:none !important}'},"gerlach.org.pl":{s:"#top0info{display:none !important}"},"cartests.net":{s:".messi{display:none !important}"},"wellmall.cz":{s:".euc{display:none !important}"},"entirelyholby.co.uk":{c:"76"},"belfastmet.ac.uk":{s:"#div-alerts-wrapper{display:none !important}"},"medizzine.com":{s:".alerta{display:none !important}"},"riassuntini.com":{s:".banner.section.white-bg{display:none !important}"},"paskoluklubas.lt":{j:"5"},"motohid.pl":{s:"#simple-modal-overlay,#simple-modal{display:none !important}"},"copyrightpolska.pl":{s:"#cookie-ack{display:none !important}"},"beeshary.com":{c:"72"},"neobiznes.pl":{s:"#cpolicyHolder{display:none !important}"},"zgodafc.pl":{c:"7"},"benissa.net":{s:"#faldon{display:none !important}"},"latiendahome.com":{s:".cookie_validation{display:none !important}"},"lincelot.com":{s:".columbus-background{display:none !important}"},"capri-lublin.pl":{s:"#mod98{display:none !important}"},"dafmuseum.com":{s:".page-overlay{display:none !important}"},"rw2010.pl":{c:"58"},"wecare.gr":{s:".ee-cookie{display:none !important}"},"esinvesticijos.lt":{s:"#pre_header{display:none !important}"},"casaktua.com":{c:"46"},"procycles43.fr":{s:"#divacacher{display:none !important}"},"tuodi.it":{c:"9"},"beko.gr":{s:".sayfaDisDiv > .sayfaIcDiv > .row300{display:none !important}"},"nordpasdecalais.fr":{s:"#bandeauCnil{display:none !important}"},"bubblebed.bg":{s:".gs-cookies-review{display:none !important}"},"moebelix.at":{s:".xxxlutzkarrierecenter-themeBoxCookieInfo{display:none !important}"},"hijob.me":{s:".flash-cookie{display:none !important}"},"iabfrance.com":{s:"#boxAlert{display:none !important}"},"thejukeboxman.com":{s:".promo-banner{display:none !important}"},"wholefoodsmarket.com":{s:".QSISlider{display:none !important}"},"bad-wildbad.de":{s:".popupbox{display:none !important}"},"eleonline.it":{s:'#content > div[style*="fixed"]{display:none !important}'},"evopayments.eu":{s:"#zwcc{display:none !important}"},"noleggiodiy.it":{s:"#privacySlider{display:none !important}"},"echevarne.com":{s:"#note{display:none !important}"},"asuntosaatio.fi":{s:".js-disclaimer-dismiss{display:none !important}"},"osiander.de":{s:"#onlyCookie{display:none !important}"},"lyleandscott.com":{s:"#cookieCont{display:none !important}"},"get-notes.com":{c:"76"},"sachsen-tourismus.de":{s:"#xcm-bar{display:none !important}"},"significados.com.br":{c:"51"},"daimonin.org":{s:"#ecl_outer{display:none !important}"},"karvancevitam.nl":{c:"7"},"homelet.co.uk":{s:".cp-wrapper{display:none !important}"},"desall.com":{s:"#stripe{display:none !important}"},"gel.com":{c:"57"},"buddhismguide.org":{s:"#info_text_header{display:none !important}"},"afs.de":{s:".afs_coi{display:none !important}"},"autoklicecz.cz":{s:"#cookiesI{display:none !important}"},"gamerswalk.com":{s:".cookies--visible + .header,.cookies--visible + .header + .main,.cookies--visible + .header-fos{margin-top:0 !important}"},"ggintegral.fr.nf":{c:"7"},"learn-french-free-with-stories.weebly.com":{s:"#header-top{display:none !important}"},"inzeratyzadarmo.sk":{s:"#coo_source{display:none !important}"},"myproducts.bandce.co.uk":{c:"72"},"d-cycling.nl":{c:"29"},"initalia.it":{s:".notice-wrap{display:none !important}"},"playinfinity.it":{c:"18"},"vta.lt":{s:".cooask{display:none !important}"},"thefourthphase.com":{s:"#red-bull-cookie-notification{display:none !important}"},"radiologie-mannheim.de":{c:"50"},"securedbydesign.com":{s:".interimpopup{display:none !important}"},"fc-koeln.de":{s:".mod-alert{display:none !important}"},"rkw-kompetenzzentrum.de":{s:"#rkw-infolayer{display:none !important}"},"mivoq.it":{s:".check-policy{display:none !important}"},"atlas-roslin.pl":{s:".tytul > span{display:none !important}"},"bptour.pl":{c:"7"},"chaptercheats.com":{s:".headertp{display:none !important}"},"jusan.it":{s:"#privacy-popup{display:none !important}"},"drivingskillsforlife.nl":{s:"#popup_custom{display:none !important}"},"autentiek.nl":{s:"#ciWrapper{display:none !important}"},"hezkakoupelna.cz":{s:".euc{display:none !important}"},"noclegi24h.pl":{c:"7"},"etransport.pl":{j:"5"},"agenceecofin.com":{s:".pwebbox{display:none !important}"},"eco-sunglasses.com":{s:"#first_visit_message{display:none !important}"},"sg-weber.at":{c:"89"},"thebtas.co.uk":{s:".slidepanel_oter{display:none !important}"},"alphotel.at":{s:"#tx_tracking{display:none !important}"},"cimoc.com":{s:"#styleUp{display:none !important}"},"spglobal.com":{s:"#privacyPlicyBanner{display:none !important}"},"maregel.net":{c:"72"},"barclays.it":{s:"#boxTextCookie{display:none !important}"},"cantinesettesoli.it":{s:".modal-privacy.attiva{display:none !important}"},"hdr-photographer.com":{s:"#rn_container{display:none !important}"},"piensasolutions.com":{s:".head .top{display:none !important}"},"dnbfeed.no":{c:"7"},"mct-corp.com":{s:".uk-alert{display:none !important}"},"acierto.com":{s:"#blockdisclaimer{display:none !important}"},"rio2016.coni.it":{s:"#privacy-wrapper{display:none !important}"},"singles-in-stuttgart.de":{s:"#DC{display:none !important}"},"lycos.fr":{s:"#nomnom{display:none !important}"},"alpenradio.net":{s:'div[data-wzb="CookieNotification"] iframe{display:none !important}'},"skyradio.nl":{j:"5"},"valeofglamorgan.gov.uk":{s:"#fixed-bar{display:none !important}"},"slikomat.com":{s:".jquery-bar{display:none !important}"},"societapiemonteseautomobili.com":{c:"72"},"life365.eu":{c:"7"},"taxipedia.info":{s:"#fpub-popup{display:none !important}"},"openprof.com":{s:"#cookie_id{display:none !important}"},"przelewy24.pl":{s:"#policy_container{display:none !important}"},"bankomatfinder.at":{s:"#c-cookie{display:none !important}"},"drive-smart.com":{s:".dri-ncookies-alert{display:none !important}"},"tns.fr":{s:"#pop-cnil{display:none !important}"},"casinodeparis.fr":{c:"29"},"hoelangnog.nl":{s:"body > .container.transparency h3{display:none !important}"},"arch-homes.co.uk":{s:"#cookiepaneltab,#cookiepaneltab ~ .ui-dialog{display:none !important}"},"claremontconsulting.co.uk":{s:"#demo-bar{display:none !important}"},"sgp.nl":{s:".footer-msg{display:none !important}"},"24chasa.bg":{s:"#cookie-b{display:none !important}"},"ismatteirecanati.it":{c:"76"},"sonypictures.net":{s:"#sp-nettrack{display:none !important}"},"axa.cz":{s:".axa-cookies{display:none !important}"},"payback.it":{j:"5"},"kcprofessional.nl":{s:"#optIn,#optIn ~ .reveal-modal-bg,.alert-box{display:none !important}"},"midas.pt":{s:".bg_cookie{display:none !important}"},"rocdesalpes.com":{c:"13"},"symfonia.org":{s:"#eu-dir{display:none !important}"},"autonews.fr":{c:"87"},"lirelactu.fr":{s:'#app > div[data-reactroot] > div[class*="container"]{display:none !important}'},"contratprive-recette.6tzen.fr":{c:"18"},"lecrazyhorseparis.com":{s:"#wrapper.home_cookie #header{margin:0 !important}"},"quotidianoenergia.it":{c:"8"},"certina.com":{s:".footer-cnil-wr{display:none !important}"},"opticjungle.gr":{s:"#sid-container{display:none !important}"},"drinkdruid.com":{s:"#sid-container{display:none !important}"},"cyclemiles.co.uk":{s:"#messages-cont{display:none !important}"},"droidchart.com":{s:"#cw{display:none !important}"},"techknow.ie":{c:"76"},"weetabixfoodcompany.co.uk":{s:".oCookie{display:none !important}"},"venditamobiligiapponesi.it":{s:".sa-notification-bar{display:none !important}body{padding-top:0 !important}"},"wyrobieniepaszportu.pl":{c:"7"},"loccioni.com":{s:"#box.fascia{display:none !important}"},"mediatheque-chabris.net":{c:"98"},"bartek.com.pl":{s:"#journal-cookies{display:none !important}"},"galnet.fr":{s:"#topnotecontainer{display:none !important}"},"mybustracker.co.uk":{s:"#zoneCookie{display:none !important}"},"cliente.enerxenia.it":{s:".commons-alert-overlay,.commons-alert-box{display:none !important}"},"musicclub.eu":{c:"18"},"hiboox.fr":{c:"87"},"checklistwebwinkel.nl":{s:"#smbv_splash{display:none !important}"},"portalinvatamant.ro":{s:"#terms{display:none !important}"},"designfund.dk":{s:".sleeknote{display:none !important}"},"eleicoes2014.com.br":{c:"51"},"digitalshoping.com":{c:"72"},"ophetwww.net":{s:'#footer_container ~ div,script[src*="cookies.min.js"] ~ div{display:none !important}'},"killarneyroyal.ie":{s:".PPContent{display:none !important}"},"fishersci.nl":{s:"#legalMessageWrapper{display:none !important}"},"digimobil.it":{c:"38"},"tarhely.eu":{s:"#sutik{display:none !important}"},"rail.phototrans.eu":{c:"7"},"kwf.nl":{s:".cbar-wrapper{display:none !important}"},"viciodigital.es":{s:"#adk_acblock{display:none !important}"},"privacy.sbs.nl":{j:"5"},"prixtel.com":{s:"#wpx_cookie{display:none !important}"},"wishy.it":{c:"18"},"mora.nl":{s:".clNotice{display:none !important}.clNoticeVisible{margin-top:0 !important}"},"weberbeamix-dhz.nl":{c:"89"},"hotmilfzone.com":{c:"7"},"armedunity.com":{s:".ipsMessage_error{display:none !important}"},"maribor-pohorje.si":{s:".cookeEnabler{display:none !important}"},"google-cache.de":{s:"#meldungContainer{display:none !important}"},"ajoto.com":{c:"39"},"linkgroup.pl":{s:"#lg_cookies{display:none !important}"},"avia.de":{s:".cs-info-wrapper{display:none !important}"},"viber.com":{c:"35"},"skapiec.pl":{s:".cookies-rwd{display:none !important}"},"telia.fi":{s:'.app-content-scroll-container .notification-inline,.notification[data-cookiename="cookies_fi"],#yhteiso-messages,.notification--blue{display:none !important}'},"ultrahack.org":{s:".app > hr:first-child + div:not([class]):not([id]){display:none !important}"},"radio24syv.dk":{s:".r24syv-cookie-notice{display:none !important}"},"cercolavoro.com":{c:"40"},"tp.lpp.si":{s:'body > table[height="20"]{display:none !important}'},"piib.org.pl":{s:"#divcooinf{display:none !important}body{background-position:0 0 !important}"},"allianz-assistance.es":{s:".region-disclaimer{display:none !important}"},"trony.it":{s:".smcc_overlay_cokkieaccept,.smcc_modal_cokkieaccept{display:none !important}"},"hmerologio.gr":{s:"#sid-container{display:none !important}"},"prawobrzeze.info":{c:"7"},"tennistv.com":{s:"#notifications--static{display:none !important}"},"sanprobi-superformula.pl":{c:"7"},"boxannunci.com":{s:".terms{display:none !important}"},"shopforshop.it":{s:"body > span{display:none !important}"},"upendo.tv":{c:"46"},"virginmoneygiving.com":{s:"#blank-container{display:none !important}"},"mjam.net":{s:"#__Mjam__CookieBanner{display:none !important}"},"maree.info":{s:"#CGUCookie{display:none !important}"},"vercapas.com":{s:".footerck{display:none !important}"},"168chasa.bg":{s:"#cookie-b{display:none !important}"},"wienerborse.at":{s:"#page-alert{display:none !important}"},"opel.nl":{c:"29"},"familylawweek.co.uk":{s:"#zeus_box{display:none !important}"},"egarage.de":{s:"#fpub-popup{display:none !important}"},"banaxi.com":{s:"#form2 > div[style]{display:none !important}"},"prawdaobiektywna.pl":{s:"#mcpc{display:none !important}"},"irozhlas.cz":{s:".b-cookie{display:none !important}"},"pravda.sk":{s:".sticky-cookies{display:none !important}"},"telegraafvandaag.nl":{j:"5"},"dewereldmorgen.be":{s:"#cookie-consent-overlay ~ div[style]{display:none !important}"},"wanttoknow.nl":{c:"23"},"donnons.org":{s:".head-line{display:none !important}"},"jaap.nl":{j:"4"},"tastedive.com":{s:".tk-Footer-cc{display:none !important}"},"aukro.cz":{s:".cookiesWrap{display:none !important}"},"mobilenet.cz":{s:".sys-alert{display:none !important}"},"polygon.com":{c:"93"},"toffeeweb.com":{s:"#fixedFooter{display:none !important}"},"bgfermer.bg":{s:"#cookie-b{display:none !important}"},"watchfinder.co.uk":{s:"#cookie_{display:none !important}"},"mediamarkt.nl":{j:"5"},"gonnesa.ca.it":{s:"#fake-div{display:none !important}"},"motorsport.com":{s:".ms-footer-fixbox,.ms-header-messages,#privacy_accept{display:none !important}"},"lifeisstrange.com":{s:".comp-flash-notice{display:none !important}"},"zumba.com":{s:".privacy-policy{display:none !important}"},"beaute-test.com":{s:"#bt__cookie{display:none !important}"},"plt.nl":{j:"5"},"bgdnes.bg":{s:"#cookie-b{display:none !important}"},"acquabella-construplas.com":{s:"#ico_wrapper{display:none !important}"},"gorillaz.com":{s:"#footer{display:none !important}"},"toornament.com":{s:".cookie-legal{display:none !important}"},"manikowski.de":{s:"#notify2{display:none !important}"},"streetz.se":{c:"76"},"hudsonsbay.nl":{s:".gk-stickymessage{display:none !important}"},"minecraft-serverlist.net":{s:"#ingameCookie{display:none !important}"},"distri.cz":{c:"7"},"mojehobby.pl":{s:".message-footer-panel{display:none !important}"},"wegenerwordpress.nl":{j:"5"},"receptentabel.nl":{s:"#loading,#loading + .noblur{display:none !important}"},"omnires.pl":{s:".cookie-allcontent{display:none !important}"},"1pmobile.com":{s:"body > .row{display:none !important}"},"plazilla.com":{j:"5"},"pathfinder-w.space":{s:"#pf-cookie-hint{display:none !important}"},"flyingtiger.com":{s:".save-cookies{display:none !important}"},"huizenzoeker.nl":{j:"4"},"upolujebooka.pl":{c:"92"},"ingdirect.fr":{s:"#cookieManagement{display:none !important}"},"racked.com":{c:"93"},"drmartens.com":{s:".dm-cookie-container{display:none !important}"},"meubella.nl":{s:".cnotice{display:none !important}"},"plan.de":{s:".psg-cookie{display:none !important}"},"niknot.com":{s:".cLaw_mainCnt{display:none !important}"},"ftb.world":{c:"18"},"socialmediaacademie.nl":{j:"5"},"restaurantweek.pl":{s:".cookiesLaw{display:none !important}"},"zerochan.net":{c:"8"},"hemglass.se":{s:".message-popup{display:none !important}"},"umziehen.de":{s:"#mcCookie{display:none !important}"},"asendia.de":{s:".body.body--is-alerted{padding-top:0 !important}"},"skoda-connect.com":{s:".notification-container{display:none !important}"},"agenziademanio.it":{s:"#bannerInfo{display:none !important}"},"fashionlab.nl":{j:"5"},"kortingscouponcodes.nl":{s:".spu-box{display:none !important}"},"swaper.com":{s:"#confirm-stripe{display:none !important}"},"smarkets.com":{s:".notices-wrapper{display:none !important}"},"mooiedeal.nl":{s:"#cbar{display:none !important}"},"weequizz.com":{s:".bt_cookie{display:none !important}"},"wyevalegardencentres.co.uk":{s:"#privacyStatement{display:none !important}"},"maquillalia.com":{s:"#coke{display:none !important}"},"opencaching.de":{j:"5"},"conseils-thermiques.org":{s:".display_cookies{display:none !important}"},"nazwa.pl":{s:"#policy-box{display:none !important}"},"animod.de":{s:"#animod-c{display:none !important}"},"gogift.com":{s:".iziToast-wrapper{display:none !important}"},"autozeeland.nl":{s:"#cpol{display:none !important}"},"zeta.nu":{s:"#oddcookie{display:none !important}"},"fitnessuebungen-zuhause.de":{s:"#cookie[type] + div{display:none !important}"},"reco.se":{s:".pms.bg-white.cntr{display:none !important}"},"asiaflash.com":{c:"37"},"qshops.org":{s:".loading.cache-loading{display:none !important}"},"kfc.co.uk":{s:".cookies-view{display:none !important}"},"openmind-shop.de":{s:".content-cookie{display:none !important}"},"valleyvet.com":{s:"#ToU_float{display:none !important}"},"hellostudent.co.uk":{c:"18"},"amref.it":{s:"#divCk{display:none !important}"},"tube.nl":{j:"5"},"rechtopgeld.nl":{j:"5"},"hboespana.com":{s:"#main-warning{display:none !important}"},"lsb.dk":{s:"#notificationBar{display:none !important}"},"kamilianie.eu":{c:"8"},"weshop.co.uk":{s:".notices{display:none !important}"},"moneybird.nl":{s:".biscuit-message-is-active .page,.biscuit-message-is-active .header{transform:none !important}"},"destockplus.com":{s:".page_warning{display:none !important}"},"gwp.pl":{s:"#notice_bar{display:none !important}"},"ragusanews.com":{s:"#barra{display:none !important}"},"curverstyle.pl":{c:"7"},"pro-bikegear.com":{c:"67"},"ingmarkets.com":{s:".no-cookies-pref{position:static !important}.no-cookies-pref:after{display:none !important}"},"helicomicro.com":{s:".cp-info-bar{display:none !important}"},"pendlerinfo.org":{s:"#containerDataProtection{display:none !important}"},"stargazerslounge.com":{s:".ipsfocus-globalMessage{display:none !important}"},"asst-pg23.it":{s:"#divInformativaBreve{display:none !important}"},"teb.com.tr":{s:"#cokieMain{display:none !important}"},"palma.cat":{s:"#avisolssi{display:none !important}"},"nolotech.jimdo.com":{s:".powr-popup.powrLoaded{display:none !important}"},"framtiden.com":{s:".sol-cookies{display:none !important}"},"uhren-miquel.de":{s:".ui-dialog.innoPrivacy{display:none !important}"},"tysol.pl":{s:"#cooinfo{display:none !important}"},"torebrings.se":{c:"40"},"lesinfos.ma":{s:"#bottomBar{display:none !important}"},"scio.pw":{c:"86"},"tooba.pl":{s:".dialog-serwis-msg.dialog-fixed{display:none !important}"},"historicengland.org.uk":{s:".alert-banner{display:none !important}"},"pensburgh.com":{c:"93"},"yoy.tv":{c:"88"},"habitat76.fr":{s:".header-cnil{display:none !important}"},"recast.ai":{s:".Toasts{display:none !important}"},"meetic.fr":{s:".main-frame-bottom-strip{display:none !important}"},"chinamobiel.nl":{c:"76"},"calorielijst.nl":{s:"#loading,#loading + .noblur{display:none !important}"},"theonlinesurgery.co.uk":{s:".alert.ue-content{display:none !important}"},"youmobile.es":{s:".iklon{display:none !important}"},"lxax.com":{s:"body > div:not([id]):not([class]):not([title]){display:none !important}"},"reindicium.com":{j:"5"},"lbp.me":{s:"#error-overlay{display:none !important}"},"fdrive.cz":{s:".sys-alert{display:none !important}"},"voxmedia.com":{c:"93"},"kabeltje.com":{s:"body > .mbdialog{display:none !important}"},"fristadskansas.com":{j:"5"},"regiobank.nl":{s:"#cleanPageContainer{display:none !important}"},"sbnation.com":{c:"93"},"societegenerale.rs":{s:"#sgs_cookie{display:none !important}"},"spycolor.com":{s:"#policy-window{display:none !important}"},"weck.com.pl":{s:"#popup2{display:none !important}"},"aab.dk":{s:".cookieinject{display:none !important}"},"ikgastarten.nl":{j:"5"},"cookiesv2.publiekeomroep.nl":{j:"5"},"curbed.com":{c:"93"},"eumostwanted.eu":{s:"#sortingPreference{display:none !important}"},"swedoor.dk":{s:"#swedoor_privacy_widget{display:none !important}"},"davplus.de":{s:".cookiesmanager{display:none !important}"},"salus.de":{s:'.notification[data-identifier="cookie"]{display:none !important}'},"tripplite.com":{j:"5"},"e-b-z.de":{s:"#cooklay{display:none !important}"},"janrain.com":{s:".wptbbarheaddiv{display:none !important}"},"dccomics.com":{s:"#consent-modal{display:none !important}"},"liquidlegends.net":{c:"8"},"allianz-voyage.fr":{s:".region-disclaimer{display:none !important}"},"sane.org.uk":{s:"#jxcc-bar{display:none !important}"},"gotobrno.cz":{s:".b-cookie{display:none !important}"},"krug.com":{s:"#_evh-ric-age-gate{display:none !important}"},"ekino-tv.pl":{c:"2"},"dws.de":{s:".flash-message__wrapper{display:none !important}"},"stilenaturale.com":{s:"#adw-bottombanner{display:none !important}"},"dyson.co.uk":{s:".js-notifications{display:none !important}"},"torinostar.it":{s:"#footerprivacy{display:none !important}"},"software4u.de":{s:"#mainNav{top:0 !important}"},"sahamassurance.ma":{s:"#rubon{display:none !important}"},"toolbox.com":{s:"#m_privacyPolicy_privacyNotice{display:none !important}"},"phoneklinik.com":{s:".jcncontainer.jcntopoverlay{display:none !important}"},"freemeteo.gr":{c:"2"},"petsie.nl":{j:"5"},"hmc.org.uk":{s:"#modal-mask{display:none !important}"},"rajsvitidel.cz":{s:".cc_wrapper{display:none !important}"},"spotlight.pl":{s:".statement-container{display:none !important}"},"inver.com":{c:"88"},"hkik.hu":{c:"40"},"reading.gov.uk":{c:"40"},"alpenski.pl":{c:"46"},"lesara.nl":{s:".notification__container{display:none !important}"},"spartacus-educational.com":{s:"#new-domain{display:none !important}"},"etstur.com":{s:".protectionOfData{display:none !important}"},"libertas.pl":{c:"8"},"relaischateaux.com":{j:"5"},"wetterheute.at":{s:".cookie-insert{display:none !important}"},"parasol.com.pl":{s:"#black_background,#black_background_panel{display:none !important}"},"codeplay.com":{s:"#notificationPopup{display:none !important}"},"freemeteo.rs":{c:"2"},"fhpelikan.com.pl":{s:"#simple-modal,#simple-modal-overlay{display:none !important}"},"minstercleaning.co.uk":{s:"#ecld_bar{display:none !important}"},"fc.de":{s:".mod-alert{display:none !important}"},"safc.com":{s:".global-notice-wrap{display:none !important}"},"akh.hu":{s:"#macookie{display:none !important}"},"flottagumiszerviz.hu":{s:"#macookie{display:none !important}"},"peters.de":{s:".footersessionarea{display:none !important}"},"colchones.es":{s:"#avisosusc{display:none !important}"},"upvx.es":{s:"#lean_overlay,#change_cookies{display:none !important}"},"chambre-vienne.notaires.fr":{s:"#cnil-notice{display:none !important}"},"bechbruun.com":{s:".header-notice{display:none !important}"},"trekking-koenig.de":{s:".cookie5{display:none !important}"},"pierotofy.it":{c:"7"},"fishersci.es":{s:"#legalMessageWrapper{display:none !important}"},"efinancialcareers.de":{s:"#pageMessages{display:none !important}"},"dokumentyzastrzezone.pl":{s:"#gkTopBar{display:none !important}"},"ftopadova.it":{c:"76"},"symmotos.ch":{s:".policy-window{display:none !important}"},"stayinwales.co.uk":{s:".ckinfo-panel{display:none !important}"},"generatorkodowkreskowych.pl":{s:"#cn{display:none !important}"},"coopalleanza3-0.it":{s:".cookieDisplay{display:none !important}"},"wsim.de":{s:"#dataPrivacyPolicy{display:none !important}"},"lycos.es":{s:"#nomnom{display:none !important}"},"elektroaktivisten.de":{s:".main-alert{display:none !important}"},"seriale.co":{s:"#komunikat{display:none !important}"},"tournamentsoftware.com":{j:"5"},"tuvlita.lt":{s:".section.accept{display:none !important}"},"battle-of-glory.com":{s:".ui-pnotify.background-transparent{display:none !important}"},"onninen.com":{s:"#OnninenCookieInfo{display:none !important}"},"koolhydratentabel.nl":{s:"#loading,#loading + .noblur{display:none !important}"},"gloucestershire.gov.uk":{c:"29"},"wallangues.be":{s:"#wallangues-eu-cookie{display:none !important}"},"pcbox.com":{c:"2"},"vintage-radio.net":{s:"#notices{display:none !important}"},"traconelectric.com":{s:".cookie-row{display:none !important}"},"operasanfrancesco.it":{s:"#avviso{display:none !important}"},"cosiepsuje.com":{s:".ciacha{display:none !important}"},"alberidinataleartificiale.it":{s:"#note{display:none !important}"},"foliesbergere.com":{c:"29"},"m.peruzzosrl.com":{c:"7"},"cookies-accept-nl.weeronline.cloud":{j:"5"},"snapchat.com":{j:"6"},"infodefensa.com":{c:"2"},"atleticodemadrid.com":{c:"2"},"almapress.com.pl":{c:"67"},"hoxa.hu":{s:"#container > div[style]{display:none !important}"},"roly.eu":{s:".jq-toast-wrap{display:none !important}"},"aquaquiz.com":{s:"#footerSlideContainer{display:none !important}"},"passmyparcel.com":{c:"72"},"receptnajidlo.cz":{s:"#cxcx{display:none !important}"},"gruppoeuromobil.com":{c:"8"},"brain-magazine.fr":{c:"2"},"meteoconsult.fr":{s:"#top_head{display:none !important}"},"mesmateriaux.com":{s:"#CookiesValid{display:none !important}"},"coolermaster.com":{s:"#coolermaster-cookie-policy{display:none !important}"},"guenstiger.de":{s:"#ck-pop{display:none !important}"},"gunnars.fr":{s:".cp-slidein-popup-container{display:none !important}"},"exweb.exchange.uk.com":{s:"#ibox{display:none !important}"},"lacsiboltja.hu":{s:"#uzeno{display:none !important}"},"sermicro.com":{s:"#galletas{display:none !important}"},"mercedes-amg.com":{s:"#emb-cp-overlay,#emb-cp-dialog{display:none !important}"},"scooter-system.fr":{s:".avertissement{display:none !important}"},"polskifrontend.pl":{j:"5"},"slupsk.eu":{s:"#pp{display:none !important}"},"nbazar.sk":{s:".eu{display:none !important}"},"ordineveterinariroma.it":{s:"#privacywarn{display:none !important}"},"wecanjob.it":{s:"#trace-form{display:none !important}"},"carnovo.com":{s:".fixed-alert{display:none !important}"},"10clouds.com":{s:".tenc-header__cookies{display:none !important}"},"desokupa.com":{c:"76"},"bib-cclachatrestesevere.net":{c:"98"},"kepmegoszto.com":{s:"#cw{display:none !important}"},"guglwald.at":{s:"#tx_tracking{display:none !important}"},"symfrance.com":{s:".policy-window{display:none !important}"},"rymer.org":{s:"#divzasobu{display:none !important}"},"conjuga-me.net":{s:"#overlay{display:none !important}"},"fahrschulcard.de":{s:"#modalCookies{display:none !important}"},"nuget.org":{c:"72"},"comarsport.com":{s:"#cooking{display:none !important}"},"twinset.com":{s:"#ckInfo{display:none !important}"},"isa-sociology.org":{s:"#politica{display:none !important}"},"skystore.com":{s:".top-notification-container{display:none !important}"},"eralsolution.com":{s:"#stato{display:none !important}"},"enel.ro":{s:".message-notification{display:none !important}"},"offerraadgivning.dk":{s:"#ck_row{display:none !important}"},"uroda.com":{s:"#blockPopupInformation{display:none !important}"},"demaralimentari.it":{s:"#privacy-advise{display:none !important}"},"tmt-magazine.com":{s:".sitealert{display:none !important}"},"pianho97.hu":{s:"#alertify,#alertify-cover{display:none !important}"},"ssangyong.es":{s:"#eltexto{display:none !important}"},"eshop.silicmedia.cz":{s:".box.notify{display:none !important}"},"sonypicturesreleasing.es":{s:"#track-layer{display:none !important}"},"hays.nl":{s:"#header-msg{display:none !important}"},"pozyx.io":{c:"18"},"governmentcomputing.com":{s:".privacy_notice{display:none !important}"},"consumind.nl":{s:"#csm-optin-bar{display:none !important}"},"maccosmetics.be":{s:"#bt_notification{display:none !important}"},"kunstveiling.nl":{s:"#kunstveiling-accept-form{display:none !important}"},"gelighting.com":{s:"#privacy-message{display:none !important}"},"tiendagonzalezbyass.com":{s:"#stickyFooter{display:none !important}"},"24kitchen.nl":{j:"5"},"ligne-adsl.fr":{c:"7"},"parafarma.be":{c:"9"},"toutabo.com":{s:".cookie-text{display:none !important}"},"henkel-reiniger.de":{j:"5"},"fieraforli.it":{s:".ns-box.ns-bar{display:none !important}"},"myparliament.info":{s:"#data-disclaimer{display:none !important}"},"06gids.nl":{s:".ilikecookies{display:none !important}"},"adernats.cat":{c:"2"},"airlinecheckins.com":{s:".app-header + .layout-row{display:none !important}"},"czytio.pl":{c:"2"},"masodomov.sk":{c:"46"},"microgiochi.com":{s:"#popupmsg_wrapper{display:none !important}"},"sorelfootwear.fr":{s:"#notify-bar{display:none !important}"},"weltdergoetter.de":{c:"88"},"dugout.com":{s:".simplemodal-bg.snap-bottom{display:none !important}"},"acf-amphibians.com":{c:"76"},"ifp.si":{s:"body > table{display:none !important}"},"mediatheque.ville-montrouge.fr":{c:"98"},"cipriani-phe.com":{s:"#myAlert{display:none !important}"},"fibs.it":{s:"#privacy-wrapper{display:none !important}"},"witaminy-mineraly.choroby.biz":{s:"#wcp{display:none !important}"},"kreoart.com.pl":{s:"#popupContact{display:none !important}"},"uva.es":{c:"2"},"transformacni-technologie.cz":{s:".upozorneni{display:none !important}"},"acega.es":{s:".aviso{display:none !important}"},"informatica7.com":{s:"#sumome-smartbar-popup{display:none !important}"},"gerritveldman.nl":{j:"5"},"mspy.fr":{s:"#infoToolbar{display:none !important}"},"szabadkeresztyen.hu":{c:"7"},"spike.com":{s:"#balaMainContainer{display:none !important}"},"bbcsolution.it":{c:"76"},"hampshire.spydus.co.uk":{j:"5"},"piab.com":{s:".topBanner{display:none !important}"},"hora.com.es":{s:"#ley{display:none !important}"},"regione.abruzzo.it":{s:"#system-message{display:none !important}"},"tchncs.de":{c:"18"},"wizdeo.com":{s:"#cookieGA{display:none !important}"},"faperme.it":{c:"46"},"if.lt":{s:".btx-expandable{display:none !important}"},"shipton-mill.com":{c:"2"},"bongu.de":{s:"#infoBar{display:none !important}"},"dulcogas.it":{j:"5"},"ingsprinters.nl":{s:'.modal[data-module="cookie-settings"]{display:none !important}'},"lira.nl":{s:".highslide-container{display:none !important}"},"video-virali.it":{s:'div[id*="cookie_pres"]{display:none !important}'},"ornikar.com":{s:"#message--cnil{display:none !important}"},"securetrading.com":{c:"7"},"stenatechnoworld.com":{s:".stickyfooter{display:none !important}"},"yonos.pt":{c:"8"},"elaee.com":{s:"#bcnil{display:none !important}"},"lanebypost.com":{c:"39"},"bubblegumstuff.com":{c:"76"},"scez.nl":{s:"#overlay2{display:none !important}"},"records.team":{c:"39"},"egscans.com":{s:"#egs-cookie-popup{display:none !important}"},"mediathequeouestprovence.fr":{c:"98"},"amphion.nl":{j:"5"},"autoreflex.com":{s:"#legal{display:none !important}"},"forbit.it":{s:'.page > div[id*="cookie"]{display:none !important}'},"dpo-consulting.fr":{s:"#POPUPS_ROOT{display:none !important}"},"24zdrave.bg":{c:"2"},"wandermap.net":{s:".messages.temporary{display:none !important}"},"archiviodistatotorino.beniculturali.it":{s:"#system-message{display:none !important}"},"mpm.pl":{s:"#__cookies_{display:none !important}"},"spiceworks.com":{s:".sui-site-message-container{display:none !important}"},"heavengroup.it":{s:"#cookup{display:none !important}"},"molgroupitaly.it":{s:"#mgit_notification{display:none !important}"},"portalkucharski.pl":{c:"7"},"sanotechnik.ro":{s:".cookiequestion{display:none !important}"},"esdemarca.com":{s:"#cookie_informativa_esd{display:none !important}"},"bati-orient-import.com":{s:"#overlayCookie2015{display:none !important}"},"discoverychannel.it":{c:"7"},"maccosmetics.de":{s:"#bt_notification{display:none !important}"},"casando.it":{s:'div[id*="ctrlCookies_divCookie"]{display:none !important}'},"intu.at":{c:"75"},"keil.com":{s:"#privacymodule{display:none !important}"},"xxxmilfpics.com":{c:"7"},"buquebus.com":{s:".cart_cookie{display:none !important}"},"plutobooks.com":{s:".pp-cookie{display:none !important}"},"swiat-sypialni.pl":{s:"#box_alert{display:none !important}"},"paramedyk24.pl":{s:"#notice_bar{display:none !important}"},"veritas-shop.com":{c:"75"},"forsvarsmakten.se":{s:".s-cookies{display:none !important}"},"wallpapermania.eu":{s:".uk-alert{display:none !important}"},"vornamen-weltweit.de":{c:"7"},"i4a.pl":{s:"#hideMe{display:none !important}"},"steinadler.com":{s:"#countrySelectOverlay{display:none !important}"},"ticnologia.pt":{s:"#rt-drawer{display:none !important}"},"giulianomazzuoli.it":{s:"#cookievjw{display:none !important}"},"marko.pl":{s:"#cookie_nav{display:none !important}"},"lamuscle.com":{s:"#info_banner{display:none !important}"},"postnauka.ru":{s:"notifications{display:none !important}"},"hivehome.com":{s:".header-stacked-message{display:none !important}"},"evs.com":{s:".language-switcher{display:none !important}"},"presscut.hr":{s:"#kolacici{display:none !important}"},"ceske-sjezdovky.cz":{c:"75"},"milanoajto.hu":{s:".cdisclaimer{display:none !important}"},"calculatrice.lu":{s:"#cookies-content{display:none !important}"},"enelgreenpower.com":{s:".message-notification{display:none !important}"},"gw2treasures.com":{s:"#notifications{display:none !important}"},"delkom.pl":{c:"2"},"showcasecinemas.co.uk":{s:".section-prompt{display:none !important}"},"wirklichweiterkommen.de":{s:".lsa-dialog.lsa-js-active{display:none !important}"},"cross.bg":{c:"8"},"fizyka.org":{s:"#pp{display:none !important}"},"ordineavvocati.bari.it":{c:"2"},"cyberdoktor.de":{c:"37"},"versace.com":{s:".first-visit-banner{display:none !important}"},"entreprenor.se":{s:"#warning{display:none !important}"},"scseleccion.com":{s:".vgcookies{display:none !important}"},"pierosangiorgio.kyani.com":{c:"7"},"lucidsamples.com":{s:"#blocksplash{display:none !important}"},"atrio.it":{c:"7"},"tactical-equipements.fr":{s:".warning{display:none !important}"},"bigbang.si":{c:"2"},"edcom.fr":{c:"2"},"dzamlinggar.net":{s:"#cookieID{display:none !important}"},"tubacex.com":{s:".containerBlack{display:none !important}"},"cirquedusoleil.com":{s:'div[data-cookie="cookieWarning"]{display:none !important}'},"flatcast.net":{s:".h_dataprot{display:none !important}"},"abbottsaab.com":{s:"#cc-container{display:none !important}"},"alterego.waw.pl":{c:"95"},"frichti.co":{s:".notification--CNIL{display:none !important}"},"gwpharm.com":{s:".main > .block.block-block.show{display:none !important}"},"ttv.pl":{s:"#msgLayer{display:none !important}"},"androidcentral.com":{s:".usr-msg{display:none !important}"},"oysteryachts.com":{s:".top-header{display:none !important}"},"vrin.fr":{s:"#Disclaimer{display:none !important}"},"locservice.fr":{s:"#CookiesInfos,#CookiesInfosPrefix{display:none !important}"},"mymagazine.co.uk":{s:'span[id$="cookiePanel"]{display:none !important}'},"konsbud-hifi.com.pl":{c:"69"},"halens.ee":{s:"#site-message-container{display:none !important}"},"thefamilycurator.com":{s:".cn_box{display:none !important}"},"azorek.pl":{s:".giodoContainer{display:none !important}"},"artboxone.de":{s:"#ab1_cookie_bar{display:none !important}"},"brunel.ac.uk":{s:"#brunelcookies{display:none !important}"},"therugbychannel.it":{c:"95"},"dewijkgaard.nl":{s:"#popup_melding{display:none !important}"},"jpopasia.com":{c:"7"},"telewizjapolska24.pl":{c:"58"},"stylecaster.com":{s:"#dfp-interstitial-holder{display:none !important}"},"geo-fs.com":{s:".geofs-cooked{display:none !important}"},"air-indemnite.com":{s:"#general-conditions-of-use{display:none !important}"},"mynet.com":{s:"#privacy-notification{display:none !important}"},"hashflare.io":{s:".alert-dismissible:not(.alert-success){display:none !important}"},"microhowto.info":{c:"2"},"formulacionquimica.com":{s:"#pck{display:none !important}"},"wind.it":{s:"#cookies,body > #track,.contentCntr + .messageOverlay{display:none !important}"},"portugalglobal.pt":{s:"#barramensagem{display:none !important}"},"openbookpublishers.com":{s:".menu-header{display:none !important}"},"dmty.pl":{c:"7"},"heal-link.gr":{c:"46"},"fieldgulls.com":{c:"93"},"ku.dk":{s:".privacy-policy{display:none !important}"},"pfarrverband-koenigslutter.de":{s:"#hinweis{display:none !important}"},"webnovel.com":{s:".m-streamer{display:none !important}"},"reittiopas.fi":{s:"#messageBar{display:none !important}"},"zenith.gr":{c:"2"},"kimovil.com":{s:"#code_cookies{display:none !important}"},"rmastri.it":{s:"#cokadv{display:none !important}"},"vitrasa.es":{c:"2"},"oddo-bhf.com":{s:'.durandal-wrapper[data-view*="CookiesSettings"]{display:none !important}'},"oet-redwell.it":{s:".magnus-cookie{display:none !important}"},"elsignificadode.net":{s:"#bn-cookies{display:none !important}"},"louder.com":{s:".hint{display:none !important}"},"coherent.com":{c:"7"},"survio.com":{c:"2"},"m.omroepwest.nl":{s:".c-cbp-container{display:none !important}"},"bjuvsbostader.se":{j:"5"},"aktionspreis.de":{s:".leiste_vollstaendig{display:none !important}"},"moment-liege.be":{s:"#coo{display:none !important}"},"mega-mania.com.pt":{s:".pl-cookies{display:none !important}"},"go4pro.lt":{s:".wu_holder-wrapper{display:none !important}"},"lifescience.net":{c:"46"},"cortesdecima.com":{s:".row.notice.s_active{display:none !important}"},"forum-windows.net":{s:"#ntf{display:none !important}"},"viennaautoshow.at":{s:"body .cookie-message-box.cookie-message-box--open ~ .container header,body .cookie-message-box.cookie-message-box--open ~ .container{margin-top:0 !important}"},"vitek.cz":{s:"#cookiesI{display:none !important}"},"crizal.pl":{s:"#__cookies_{display:none !important}"},"draeger.com":{s:"dw-global-notification{display:none !important}",j:"5"},"basilica.ro":{c:"46"},"tpd.sk":{s:".header__notice{display:none !important}"},"ogrtorino.it":{s:"#__next > div[data-reactroot] > div[data-reactid] > div[class]{display:none !important}"},"giftsandcare.com":{s:"#divbottom{display:none !important}"},"kempa-satellite.com":{s:"#mc_top_bar{display:none !important}"},"turbocso.hu":{s:"#auroraOverlay{display:none !important}"},"thinkwithgoogle.com":{s:".global-toast{display:none !important}"},"konicci.cz":{c:"17"},"games.fm":{s:"#cxcx{display:none !important}"},"malihu.gr":{s:"#malihu-cookies{display:none !important}"},"askabox.fr":{s:"#id_div_bandeau{display:none !important}"},"gpstraining.co.uk":{c:"2"},"internationalchips.com":{s:".ba{display:none !important}"},"klar-im-vorteil.de":{s:"#footer > .inner > p:first-child{display:none !important}"},"clickatell.com":{s:".cookie-show{display:none !important}"},"bookbeat.com":{s:".banner.purple{display:none !important}"},"xapes.net":{s:"#as-uc-wrapper{display:none !important}"},"xm.co.uk":{s:"#cookies-block{display:none !important}"},"collibra.com":{s:".collibra-cookie-accept{display:none !important}"},"vivus.es":{s:'.background[class*="warning-module"]{display:none !important}'},"cefarm24.pl":{s:"#notice_bar{display:none !important}"},"linkmatepr-soritweb.servizienti.it":{s:'.normal[eventproxy="isc_HLayout_1"][style*="absolute"]{display:none !important}'},"subaru.de":{j:"5"},"cookshop.gr":{s:"#cookies-region{display:none !important}"},"pfefferminzia.de":{s:"#acceptUserExperience{display:none !important}"},"royalmailgroup.com":{s:"#block-rmg-cookie-policy-cookie-policy{display:none !important}"},"slyvent.com":{s:"#cookiesCard{display:none !important}"},"lostgames.net":{s:"#entryCookie{display:none !important}"},"kookeiland.be":{s:"#footerSlideContainer{display:none !important}"},"rooms4valencia.com":{c:"95"},"solveigmm.com":{s:"#agreement{display:none !important}"},"dicionariodesimbolos.com.br":{c:"51"},"occhiox.com":{s:"#consenso{display:none !important}"},"boss-nekretnine.hr":{c:"88"},"yodiez.com":{s:"#system-message-container{display:none !important}"},"e-elektron.pl":{c:"7"},"sms.priv.pl":{c:"2"},"stjornarradid.is":{s:".session-text{display:none !important}"},"upc.at":{s:".lgi-bgcontainer-privacybanner{display:none !important}"},"hbkik.hu":{s:"#alert-box{display:none !important}"},"pixabay.com":{s:".message_box{display:none !important}"},"vr.se":{c:"72"},"gaes.es":{c:"2"},"10khits.com":{s:'cloudflare-app[app="welcome-bar"]{display:none !important}'},"cleverdialer.de":{s:"#cdweb-cookie-law-info{display:none !important}"},"kropelka.com":{s:"#back-lightbox{display:none !important}"},"centauria.it":{s:".header-welcome{display:none !important}"},"energologistic.it":{s:"#dc-cnb-container{display:none !important}"},"stiga.it":{s:"#privacyDisclaimer{display:none !important}"},"rhomberg-reisen.com":{s:".rho-toast--top.rho-pagelane{display:none !important}"},"enikom-m.com":{c:"2"},"blazaar.com":{s:".ng-toast--top{display:none !important}"},"idgspa.it":{s:"#showimage{display:none !important}"},"papapiqueetmamancoud.fr":{s:"#id_suivi_publicites{display:none !important}"},"zinodavidoff.com":{s:"#footer + div{display:none !important}"},"mundo-pecuario.com":{s:"#msjadd{display:none !important}"},"rentokil.fr":{s:"#cookie-policy-header .cookie-popup-header{display:none !important}"},"mashable.com":{s:"#peek > div:not([id]):not([class]){display:none !important}"},"ovhcloud.com":{s:"#block-ovhcookieconsent{display:none !important}"},"lemoiszerozero.fr":{s:"#root > div:not([id]){display:none !important}"},"sita.aero":{s:"#privacyPopupOverlay,.privacyPopup{display:none !important}"},"sapabuildingsystem.com":{s:"#header .message{display:none !important}"},"mx1-360.com":{s:".cookie-legal{display:none !important}"},"beko.pl":{s:"#cookies,#cookie_margin{display:none !important}header.cookies-margin{top:0 !important}"},"autovisie.nl":{j:"5"},"facebookafmelden.nl":{s:"#cookiespanel{display:none !important}"},"tablademareas.com":{c:"2"},"porschebank.at":{s:".statisticsOptBox{display:none !important}"},"theringer.com":{c:"93"},"bancopopular.es":{c:"2"},"sharesmagazine.co.uk":{s:"#popup-container{display:none !important}"},"spot-a-shop.de":{s:"#popup-notifications{display:none !important}"},"dplay.no":{s:'#app > div > dialog[class^="notification"]{display:none !important}'},"makewarnotlove.com":{s:".cp-wrap{display:none !important}"},"deutscheam.com":{s:".flash-message__wrapper{display:none !important}"},"seibert-media.net":{s:"#privacy_protection{display:none !important}"},"lariveracioccolato.com":{c:"82"},"doctoranytime.gr":{s:"#notif--privacy{display:none !important}"},"risvegliocomune.com":{c:"95"},"lerepairedesmotards.com":{c:"2"},"dplay.se":{s:'#app > div > dialog[class^="notification"]{display:none !important}'},"dplay.dk":{s:'#app > div > dialog[class^="notification"]{display:none !important}'},"cewe-print.de":{c:"2"},"winflector.com":{c:"7"},"korisnaknjiga.com":{s:"#kukiji{display:none !important}"},"obaku.com":{s:".alert.callout{display:none !important}"},"gva.be":{j:"5"},"jal.co.jp":{s:"#JS_ciBox,#JS_ciBox_filter,#JS_ciBox_filter_iframe{display:none !important}"},"haglofs.com":{s:"#privacy-policy-modal{display:none !important}"},"dissidiafinalfantasynt.com":{s:"#react-mount > .locale-container > div[style]{display:none !important}"},"diamond-air.at":{s:"#privacy-info{display:none !important}"},"itmagination.com":{s:'div[class$="cookie-info"]{display:none !important}'},"adacreisen.de":{s:".FooterNotification{display:none !important}"},"tradeplace.com":{j:"5"},"euronova-italia.it":{s:".cc-customdialog{display:none !important}"},"crunch.co.uk":{s:"#reactAppRoot > div > .text-content{display:none !important}"},"ziffit.com":{s:".notificationholder{display:none !important}"},"cosmo.ru":{s:".disclame_block{display:none !important}"},"educalingo.com":{c:"2"},"geekbrains.ru":{s:".gb-bottom-banners{display:none !important}"},"trespasse.com":{c:"2"},"uhu.de":{s:".message.fixed{display:none !important}"},"idc.com":{s:".idc-privacy-notice{display:none !important}"},"envivas.de":{s:".box-hint-layer{display:none !important}"},"disidentia.com":{s:"#snppopup-welcome{display:none !important}"},"dutchbirding.nl":{c:"2"},"beepjob.com":{s:"#cgCookies{display:none !important}"},"dahuasecurity.com":{s:".top_tip_wrap{display:none !important}"},"cision.com":{s:"#cision-cookie-policy-banner{display:none !important}"},"upctv.at":{s:".notifications-manager{display:none !important}"},"investec.com":{s:'.alerts-top[data-type*="acceptCookies"]{display:none !important}'},"speedyhen.com":{c:"7"},"lasante.net":{s:".cookies__container{display:none !important}"},"meyer.it":{s:"#zf--alerts-panel{display:none !important}"},"portamx.com":{s:"#ecl_outer{display:none !important}"},"ifp-school.com":{s:"#cnilWrapper{display:none !important}"},"codicesconto.org":{s:".bloque_lopd{display:none !important}"},"nuovatecnodelta.it":{s:"body > div[style]{display:none !important}"},"everywhere.game":{s:".cookie-madness{display:none !important}"},"naturenergieplus.de":{s:".announcement{display:none !important}"},"detnyeskotterup.dk":{s:".clWindow{display:none !important}"},"eujuicers.cz":{s:"#snippet-browserBootstrap-flashMessages-{display:none !important}"},"bet.com":{s:".asset_balaNotification,.asset_balaNotificationOverlay{display:none !important}"},"emp-online.es":{s:".browser-check{display:none !important}"},"hestragloves.com":{s:".user-message-list{display:none !important}"},"remax-centarnekretnina.com":{c:"88"},"millennium-nekretnine.hr":{c:"88"},"bws.net":{s:".block--cookie{display:none !important}"},"ofgem.gov.uk":{s:"#ofgem-cookies{display:none !important}"},"mm-kancelaria.com":{c:"58"},"polsonic.com":{s:"body > .widgets-list{display:none !important}"},"energy-storage.news":{s:".site-notices{display:none !important}"},"placeandsee.com":{s:"#bnrckie{display:none !important}"},"napivicc.hu":{s:"#kki_div{display:none !important}"},"docciabox.com":{s:"#site-cookie{display:none !important}"},"mulinobianco.it":{s:".mb_cookie{display:none !important}"},"riftherald.com":{c:"93"},"team-rauscher.at":{j:"5"},"gmanetwork.com":{s:".ckn-container{display:none !important}"},"portalento.es":{s:".gaOptIn{display:none !important}"},"elektrobit.com":{s:"#ckBar{display:none !important}"},"sefaireaider.com":{s:"#cookies-charter{display:none !important}"},"thueringenforst.de":{s:".opt-out{display:none !important}"},"ecotrade.bio":{s:".global-alert{display:none !important}"},"allianzworldwidecare.com":{s:".region-disclaimer{display:none !important}"},"novapdf.com":{s:"#novapdf_accept_cookies{display:none !important}"},"reischecker.nl":{s:"#cbar{display:none !important}"},"bitster.cz":{s:".cookies-window{display:none !important}"},"stasonline.ro":{s:"#form_cookie{display:none !important}"},"adslalvolo.it":{s:"#popupDivC{display:none !important}"},"hrhibiza.com":{s:"#websiteNotification{display:none !important}"},"pleternica.hr":{s:"#footer{display:none !important}"},"tovedo.hr":{s:"#COOKIES,#COOKIES ~ div{display:none !important}"},"lider.hr":{c:"88"},"bora.hr":{s:".modal-mask{display:none !important}"},"autogaleria.hu":{s:"#info-suti{display:none !important}"},"aol.de":{s:".m-user-consent,#alerts-policy{display:none !important}"},"karman.cc":{s:"#ico_wrapper{display:none !important}"},"smiile.com":{s:"#com-message{display:none !important}"},"fc-hansa.de":{c:"7"},"uni-greifswald.de":{s:"#piwik-flyin{display:none !important}"},"livescore.net":{s:'.row[data-id="infobar"]{display:none !important}'},"domwroc24.pl":{s:".black_overlay{display:none !important}"},"kaiserkraft.ie":{s:".policy_notification{display:none !important}"},"aiponet.it":{s:"#cl_wrapp{display:none !important}"},"donadeimonti.it":{s:"#system-message{display:none !important}"},"emagister.com":{s:".fixed-footer{display:none !important}"},"alecoair.ro":{c:"88"},"kvn.ru":{s:".disclame_block{display:none !important}"},"standardandpoors.com":{s:"#wrapper > .portlet-boundary.portlet-static{display:none !important}"},"ssls.cz":{s:"#ckb{display:none !important}"},"kemkik.hu":{s:"#alert-box{display:none !important}"},"huidkanker.nl":{s:"#persistent-messages{display:none !important}"},"mhiae.com":{c:"9"},"checkthatcar.com":{s:".csent{display:none !important}"},"leselupe.de":{c:"7"},"buywithconfidence.gov.uk":{s:"#uptopbar{display:none !important}"},"reed.co.uk":{s:".cookie-legislation{display:none !important}"},"monkey-tie.com":{s:"#cookiemt{display:none !important}"},"lululemon.com":{s:"#promoted-alert-bar{display:none !important}"},"infrarot-fussboden.de":{s:'div[class*="cookie-hint-wrapper"]{display:none !important}'},"turtlecereals.com":{c:"95"},"ambitionspersonnel.com":{c:"7"},"partycasino.com":{s:".info-message{display:none !important}"},"nextpharmajob.com":{s:".userBar{display:none !important}"},"seifensieder.at":{c:"95"},"wurmberg.de":{s:".datenschutz{display:none !important}"},"fisherinvestments.com":{s:"#privNotice{display:none !important}"},"101xp.com":{s:".ui-notification-wrapper{display:none !important}"},"carnevale.venezia.it":{s:"#privacySlider{display:none !important}"},"shortpixel.com":{s:"#shortpixel-cookies{display:none !important}"},"co-opinsurance.co.uk":{s:"#noticePanel{display:none !important}"},"ordina.nl":{j:"6"},"ordina.com":{j:"6"},"werkenbijordina.nl":{j:"6"},"autoampel.de":{c:"2"},"lysman.no":{s:".infobar{display:none !important}"},"autoweetjes.com":{s:"body > div[id]:not([class]){display:none !important}"},"monedo.mx":{s:".wr-notification-panel{display:none !important}"},"debgen.fr":{s:'cloudflare-app[app="welcome-bar"]{display:none !important}'},"merseyfire.gov.uk":{s:"#popup_box{display:none !important}"},"baumtronics.com":{c:"72"},"autohaus-eberstein.de":{s:"#notify2{display:none !important}"},"01-telecharger.com":{s:"#cokkies{display:none !important}"},"impelshop.com":{s:"#privacy_policy{display:none !important}"},"capitandenim.com":{s:"#menscookie{display:none !important}"},"optochtenkalender.nl":{s:".PanelPopUp{display:none !important}"},"thinkshoes.com":{s:"#data-privacy-bar{display:none !important}"},"tevaitalia.it":{s:".riquadroAvvisoPrivacy{display:none !important}"},"sep-ensemble.fr":{s:".disclaimer-bar{display:none !important}"},"kaerntentherme.com":{s:"#coo{display:none !important}"},"tuttostoria.net":{s:"#avviso{display:none !important}"},"porsche-toledo.com":{s:"#popupbox{display:none !important}"},"hbo.pl":{s:"#overlay{display:none !important}"},"pirkis.lt":{s:"#alert_tuscias,#alertt{display:none !important}"},"theoutlinerofgiants.com":{s:"#toog-cookies{display:none !important}"},"keefcooks.com":{s:".cookiecon{display:none !important}"},"savio.it":{s:"#box-overlay{display:none !important}"},"mobileworldcentre.com":{s:".alert-warning{display:none !important}"},"kupigume.hr":{s:".ant-notification{display:none !important}"},"wiener-metropol.at":{c:"7"},"fnvzzp.nl":{s:"#bottom{display:none !important}"},"vzdusin.cz":{s:".euc{display:none !important}"},"lacompagnie.com":{s:"#cnil-layer{display:none !important}"},"hjheinz.de":{c:"7"},"superfi.co.uk":{s:".superfi-cookie-info-wrapper{display:none !important}"},"osservatoriocalcioitaliano.it":{s:"#dc-cnb-container{display:none !important}"},"lingea.sk":{s:".lck-wrapper{display:none !important}"},"simonly.nl":{c:"2"},"ray-ban.com":{s:".wcs-top-message-container{display:none !important}"},"greencity.de":{s:".cnwrap{display:none !important}"},"assocarabinieri.it":{j:"6"},"lafotelektronik.com":{s:'div[id$="cookiesInfo"]{display:none !important}'},"casadelloscaffale.com":{s:"body > div[class][id]{display:none !important}"},"skygroup.sky":{s:".corporate-notice-banner{display:none !important}"},"placelibertine.com":{s:".cookieText{display:none !important}"},"tim.it":{s:"#privacy_disclaimer{display:none !important}"},"plaques-immatriculation.info":{c:"2"},"lottosurprise.be":{s:"._cookies-cookie{display:none !important}"},"oksofas.es":{s:".jCookie{display:none !important}"},"mescommercantsdugrandhainaut.com":{s:"#divacacher{display:none !important}"},"winteroutlet.ro":{s:"#haveCookie{display:none !important}"},"dnelectronic.com":{s:"#ctl00_ley{display:none !important}"},"muenchen-heilpraktiker-psychotherapie.de":{s:".jtci-block{display:none !important}"},"swiggle.org.uk":{s:"#slide-out-div{display:none !important}"},"sinonimosonline.com":{c:"51"},"eibtron.com":{s:".dijitDialog,.dijitDialogUnderlayWrapper{display:none !important}"},"ttunited.com":{s:'div[id$="FrameHolder"] > iframe{display:none !important}'},"accenture.com":{s:".cookie-nav{display:none !important}"},"vlajo.org":{s:"#vlajoCookieLegalContainer{display:none !important}"},"renaultkatowice.pl":{s:".fixedInfo{display:none !important}"},"assuronline.com":{s:".bottom_cookie{display:none !important}"},"vespa-forum.at":{s:"#dkmcookie{display:none !important}"},"fontfreak.com":{c:"38"},"capitalinn.it":{s:"#divPrivacy{display:none !important}"},"youinvest.org":{s:"#Lab0cookie_pres{display:none !important}"},"ekobiuro24.pl":{c:"9"},"coopmaster.it":{s:"#h-navbar{display:none !important}"},"labelleadresse.com":{s:"._cd{display:none !important}"},"electraplus.si":{s:".ndp-panel{display:none !important}"},"paperflies.com":{s:"#content > div[data-reactroot] > div > div[class]{display:none !important}"},"gramwzielone.pl":{s:"#gwz-cookies{display:none !important}"},"netweber.pl":{c:"89"},"cideon.de":{j:"5"},"bookgig.com":{s:'div[class^="__alertCookies"]{display:none !important}'},"romet.pl":{s:".top-msg{display:none !important}"},"recepty.cz":{c:"7"},"shop.ticketpro.cz":{c:"7"},"seat.dk":{s:".notify-bar{display:none !important}"},"seat.mpr.gob.es":{s:"#epd{display:none !important}"},"devex.com":{s:"#alerts-container{display:none !important}"},"legalandgeneral.com":{s:"#st_box{display:none !important}"},"szegedvaros.hu":{s:"#footer{display:none !important}"},"newnownext.com":{s:"#balaMainContainer{display:none !important}"},"emerson.com":{s:'div[class$="global-cookie-notification"]{display:none !important}'},"ridi-group.com":{s:".occ-inline{display:none !important}"},"santucciservice.it":{c:"7"},"fdjesport.fr":{s:".fdj__footer{display:none !important}"},"geemba.net":{s:"#BODY > .window.container{display:none !important}"},"gigant.pl":{s:"#cookie_txt{display:none !important}"},"softwareag.com":{s:"#blanket,#popUpDiv{display:none !important}"},"mariskalrock.com":{s:".pcookies{display:none !important}"},"sapo.cv":{s:".bsu-v2-ntfs{display:none !important}"},"meblemagnat.pl":{c:"7"},"libra.com.pl":{s:"#under_footer{display:none !important}"},"budapestpark.hu":{s:"#cooker_container{display:none !important}"},"lepavelillois.com":{s:"#stickyHeader{display:none !important}"},"win3x.org":{c:"7"},"greta.shop":{s:"#paragraph_cookie{display:none !important}"},"jpgames.de":{s:"#ingameCookie{display:none !important}"},"lataamo.akuankka.fi":{c:"37"},"akuankka.fi":{s:".cb-container{display:none !important}"},"ligna.de":{s:".user-notes-notification{display:none !important}"},"francja.goal.pl":{s:"#viewCookies,#viewCookiesClose{display:none !important}"},"rockthetraveller.com":{s:".pie_cookie{display:none !important}"},"znak.pl":{c:"7"},"ffsa.org":{s:"#DeltaPageStatusBar{display:none !important}"},"redmenta.com":{s:".infobar{display:none !important}"},"dambros.it":{s:"#dambros-data{display:none !important}"},"betsafe.ee":{s:"#MsgAreaBottom{display:none !important}"},"bcn.cat":{s:"#bcn-ccwr{display:none !important}"},"yer.nl":{s:".headerCookie{display:none !important}"},"sharpspixley.com":{s:".otpOut{display:none !important}"},"keolis.nl":{c:"46"},"sklep.vertus.com.pl":{s:"#simple-modal,#simple-modal-overlay{display:none !important}"},"warrantydirect.co.uk":{c:"16"},"ucando.pl":{s:"notifications{display:none !important}"},"midparts.com.pl":{s:"#simple-modal,#simple-modal-overlay{display:none !important}"},"velenje.com":{s:"td.style5 > table{display:none !important}"},"discountbabyequip.co.uk":{s:".notify{display:none !important}"},"passvigo.vigo.org":{c:"2"},"bb-promotion.com":{s:"#sf_fb_retargeting{display:none !important}"},"lizipaina.es":{s:"#additional{display:none !important}"},"numismatica.land63.com":{c:"7"},"abchomeopathy.com":{s:"#cookieQ{display:none !important}"},"almhof.nl":{s:".cm.container{display:none !important}"},"schwedisch-translator.de":{c:"86"},"nationaalcomputerforum.nl":{s:".notices{display:none !important}"},"record.com.mx":{s:"#zone-user-wrapper{display:none !important}"},"420tv.com":{s:"#appBarHeaderContainer{display:none !important}"},"glovoapp.com":{s:".down-banner{display:none !important}"},"drupalet.com":{s:"#modalCookies{display:none !important}"},"orgasmatrix.com":{c:"2"},"starbt.ro":{s:".ava_2.display{display:none !important}"},"joe.pl":{s:"#j_all > div[style]{display:none !important}"},"lifeofvinyl.com":{s:"#msgBox{display:none !important}"},"gbif.org":{s:"#termsOfUse{display:none !important}"},"topskwlfilter.at":{s:"#granola{display:none !important}"},"kolbi.pl":{c:"7"},"kodi-forum.nl":{s:".notices{display:none !important}"},"clinique.com":{s:"#bt_notification{display:none !important}"},"atlantis-travel.eu":{s:"#ook{display:none !important}"},"poundshop.com":{s:"#top-promo{display:none !important}"},"nordseecamping.de":{c:"95"},"animationsource.org":{s:"#cprv{display:none !important}"},"catwalker.hu":{s:"#CWCookie{display:none !important}"},"jjfoodservice.com":{s:'proto-orderpad > div[style*="fixed"]{display:none !important}'},"jman.tv":{s:"#ActionBar{display:none !important}"},"dragonpass.com.cn":{s:".indexCookies{display:none !important}"},"pressreader.com":{s:"#snackbar-container{display:none !important}"},"denovali.com":{s:"#growls2{display:none !important}"},"jazzwruinach.pl":{s:"#info-window{display:none !important}"},"aktivo.nl":{s:"#epd{display:none !important}"},"pila.pl":{c:"7"},"mijnleninginzicht.nl":{c:"7"},"befsztyk.pl":{s:"#notice_bar{display:none !important}"},"herz-lungen-praxis-ebersberg.de":{s:'section[data-module="cookies"]{display:none !important}'},"pommiers.com":{s:"body > center > div{display:none !important}"},"decathlon.cz":{s:"#container-screen{display:none !important}"},"ratebeer.com":{j:"5"},"danstonchat.com":{s:".cls-cookie{display:none !important}"},"mrmen.com":{s:"#mrmen-cookies{display:none !important}"},"meridionews.it":{s:".leaderboard{display:none !important}"},"raritysoft.com":{s:".bootstrap-growl{display:none !important}"},"inqnable.es":{s:"#kgc-consent{display:none !important}"},"intersurgical.de":{s:"#ccPopup{display:none !important}"},"fettspielen.de":{s:"#cwarn{display:none !important}"},"londynek.net":{s:"#ldnk-cookie{display:none !important}"},"mkik.hu":{s:"#alert-box{display:none !important}"},"irisopenpayslips.co.uk":{s:"#outerdiv{display:none !important}"},"sportpartner-boerse.com":{s:"#DC{display:none !important}"},"weber-beamix.nl":{c:"89"},"led-flash.fr":{s:"#eocookie{display:none !important}"},"radiofreccia.it":{s:".off-canvas-content > div[style]{display:none !important}"},"rogosport.si":{s:"#biscuits{display:none !important}"},"rgbdruk.pl":{s:"#message-bar{display:none !important}"},"treningspartner.no":{s:".top > .container > .sd-surface > .sd-object-if{display:none !important}"},"ufopedia.it":{s:"#PrivacyPolicyBar{display:none !important}"},"grafcan.es":{s:"#divConsent{display:none !important}"},"digitalagencynetwork.com":{s:"#popupDiv{display:none !important}"},"leoexpress.com":{s:".js-footer + div{display:none !important}"},"cuatro.com":{s:'div[class^="cookiesAlert"]{display:none !important}'},"aocz.it":{s:"#policy_id{display:none !important}body{padding-top:0 !important}"},"odbojka.si":{s:"#footer_message{display:none !important}"},"luxplus.dk":{s:"#lp-euc{display:none !important}"},"aandelencheck.be":{s:"#site-alert-container{display:none !important}"},"orthomol.com":{s:".alert-box{display:none !important}"},"kunstnet.de":{c:"16"},"thescore.com":{s:'div[class^="PrivacyPolicyPopup"]{display:none !important}'},"t-mobile.pl":{c:"2"},"listesdemots.net":{s:"#cd{display:none !important}"},"casino.dk":{s:"#MsgAreaBottom{display:none !important}"},"laligue.be":{s:".bottom_message{display:none !important}"},"camp-firefox.de":{s:"#storage-notice{display:none !important}"},"kamzakrasou.sk":{s:".cookie-row{display:none !important}"},"angolotesti.it":{c:"2"},"large.nl":{s:".notification-box-bottom{display:none !important}"},"active-traveller.com":{s:"#mixcookies{display:none !important}"},"livep2000.nl":{j:"5"},"member.europe.yamaha.com":{c:"46"},"graze.com":{s:"#graze-cookie-message{display:none !important}"},"friendsoftheearth.uk":{s:"#foe_cookienotice_wrapper{display:none !important}"},"brillen.de":{s:".main-cookie-title{display:none !important}"},"weekday.com":{s:".m-error-banner{display:none !important}"},"dandomain.dk":{s:".no-cookie-wrapper{display:none !important}"},"fondationcartier.com":{s:".c-policy{display:none !important}"},"elster-americanmeter.com":{s:".topRibbon{display:none !important}"},"mutua.es":{c:"2"},"auxoriginesdugout.fr":{s:".spu-box{display:none !important}"},"france-cadenas.fr":{s:"#cookie_legal{display:none !important}"},"protys.fr":{c:"2"},"epictv.com":{s:".epic-cookie-banner{display:none !important}"},"hankkija.fi":{s:"#divVVL{display:none !important}"},"smorgasbord.com":{c:"46"},"schultz-kalecher.dk":{s:".cookieoptions{display:none !important}"},"brinta.nl":{c:"7"},"mediatheque.chatillon-sur-indre.fr":{c:"98"},"pantamera.nu":{s:"#cookie-list{display:none !important}"},"mspy.it":{s:"#infoToolbar{display:none !important}"},"frei-wild.net":{s:"#privacyAnnouncement{display:none !important}"},"madhumanshow.com":{c:"95"},"secureworks.co.uk":{j:"5"},"pensioenschoonmaak.nl":{s:"#cwet{display:none !important}"},"e-mediatheque.sqy.fr":{c:"98"},"mamabartka.blogspot.com":{s:"#pierwszy{display:none !important}"},"haier.com":{s:".swiper-slide-img-txt{display:none !important}"},"musikki.com":{s:".status-cookies{display:none !important}"},"wolkyshop.co.uk":{s:"#wolkyshopCookieBar{display:none !important}"},"apmg-international.com":{s:".status-messages{display:none !important}"},"nobistex.com":{s:"#sw_cookies{display:none !important}"},"leboisfae.com":{c:"95"},"grezzo.de":{s:"body > div[style]{display:none !important}"},"mailplanet.it":{s:"#discl{display:none !important}"},"fabled.com":{c:"46"},"vergelijk.be":{s:'div[data-rendering-area="dialogs"] > div > div > div[data-bind*="PopupBehavior"]:not([data-role]){display:none !important}'},"citybee.cz":{s:".cookies-rules{display:none !important}"},"switchbay.com":{s:".ant-notification{display:none !important}"},"depv.de":{s:"#root > div > div:first-child[class]{display:none !important}"},"szpitalkarowa.pl":{c:"2"},"oldrailwaylinegc.co.uk":{s:".notice-wrap{display:none !important}"},"michael-mueller-verlag.de":{s:"#coo_note{display:none !important}"},"nfl.com":{s:'input[name="x-akamai-edgescape"] + div[style*="fixed"]{display:none !important}'},"weerg.com":{s:"#blultpdfbanner{display:none !important}"},"nowaelektro.pl":{c:"7"},"traum-pizza.de":{s:"#gc_message_bar_open,#gc_message_bar{display:none !important}"},"justgoride.co.uk":{s:"#notifications{display:none !important}"},"newsbelow.de":{s:".flash{display:none !important}"},"baracuta.com":{s:".firstvisit{display:none !important}"},"chinamobilemag.de":{s:"#system-message{display:none !important}"},"borgerforslag.dk":{s:'.site--content > div[id] > section[style*="transform"]{display:none !important}'},"paginasamarillas.es":{s:"#m-notification--bottom{display:none !important}"},"adtorpedo66.es":{s:"#laputapolitica{display:none !important}"},"tcxboots.com":{s:".main-copy{display:none !important}"},"bm.lv":{s:".cookie-txt{display:none !important}"},"tempmailaddress.com":{c:"92"},"thegadgetflow.com":{s:".gfl-widget-gdpr-wrap{display:none !important}"},"deutscher-fenstershop.de":{s:".rule_assept{display:none !important}"},"restplatzboerse.at":{s:"#rpb_cookie-banner{display:none !important}"},"cer-eau.fr":{c:"2"},"stockwatch.pl":{s:".cppa{display:none !important}"},"dalendo.com":{s:".dr-footer-fixed-bar{display:none !important}"},"bally.fr":{s:".first-visit-banner{display:none !important}"},"cv.lt":{s:".cookies-wr{display:none !important}"},"heroesneverdie.com":{c:"93"},"essential.com":{s:"#footerNotice{display:none !important}"},"muji.eu":{s:"#cokbar{display:none !important}"},"ranorex.com":{s:"#rx-cookie-wrapper{display:none !important}"},"9bis.net":{s:'body > div[style*="width"]{display:none !important}'},"bpp.com":{s:"#consentDiv{display:none !important}"},"szyszunia.com":{s:"body > center{display:none !important}"},"mobidrome.com":{s:".mobidrome-websiteStatisticsOptBox{display:none !important}"},"bussgeldkatalog.org":{s:".legalAdvice{display:none !important}"},"leaderdrive.fr":{s:".base-cookies{display:none !important}"},"abt-sportsline.de":{s:".abt-cookieNotification{display:none !important}"},"blende-und-zeit.sirutor-und-compur.de":{c:"86"},"transportfever.net":{c:"36"},"acorianooriental.pt":{s:".allow-cookies{display:none !important}"},"squawka.com":{j:"6"},"wattsindustries.nl":{s:"#header1_overlay2{display:none !important}"},"digi-film.ro":{c:"38"},"namemc.com":{s:".alert-warning{display:none !important}"},"manche.fr":{s:".cmHeaderTop{display:none !important}"},"re.public.polimi.it":{s:"#jGrowl{display:none !important}"},"azurewebsites.net":{s:"#legal-info{display:none !important}"},"passware.com":{s:".notifino{display:none !important}"},"fitnessvoordeelpas.be":{s:".cb-modal{display:none !important}"},"najdise.cz":{c:"37"},"akf-shop.de":{s:".akf__cookie{display:none !important}"},"zmotor.it":{s:"#bannerC{display:none !important}"},"beeoffice.com":{s:"#info{display:none !important}"},"gruppodimensione.com":{s:".floatFooter{display:none !important}"},"lanidor.com":{s:"#divCookiesF{display:none !important}"},"sacoorbrothers.com":{s:".legal-warning{display:none !important}"},"bletchleypark.org.uk":{s:"main.relative > div > div{display:none !important}"},"motuk.com":{s:"#csent10{display:none !important}"},"tvnotas.com.mx":{s:"#zone-headertwo-wrapper{display:none !important}"},"shetland.gov.uk":{s:"body > .container > span{display:none !important}"},"toscana-notizie.it":{s:"#banner-overlay-top-page{display:none !important}"},"hspdat.to":{s:".notices{display:none !important}"},"tripping.com":{s:".navbar__banner{display:none !important}"},"rustimation.eu":{s:"body > p{display:none !important}"},"minitokyo.net":{c:"7"},"na-kd.com":{s:"#container > div > div:not([class]){display:none !important}"},"bekohu.com":{s:".sayfaIcDiv > .row300{display:none !important}"},"whoismocca.com":{s:"#main-bottom-bar{display:none !important}"},"ashtangayogaantibes.com":{s:"#stickyHeader{display:none !important}"},"my.moneypolo.com":{j:"5"},"armorgames.com":{s:"#cc-alert{display:none !important}"},"edx.org":{s:".edx-cookie-banner-wrapper{display:none !important}"},"johnlewisbroadband.com":{s:".cf__main-block{display:none !important}"},"1000dokumente.de":{s:"#bscookie{display:none !important}"},"match.com":{j:"5"},"neu.de":{j:"5"},"aalst.be":{s:".footer-notification{display:none !important}"},"kringloopapp.nl":{j:"5"},"imhd.sk":{j:"5"},"apparata.nl":{s:'#ab_main_nav_container + div[class^="app_"] > div[class^="popup_"]{display:none !important}'},"sz-online.de":{s:"#szoCookieBar{display:none !important}"},"tindie.com":{s:"#tindie_cookie_alert{display:none !important}"},"lebrassageestunerichesse.fr":{s:"#root > div:not([id]){display:none !important}"},"canadianoutages.com":{s:"#overlay.container{display:none !important}"},"sportal.de":{s:"#dgsvoLayer{display:none !important}"},"parczoologiquedeparis.fr":{s:".bloc-notifications-bottom{display:none !important}"},"clubcard.cz":{s:".ucks{display:none !important}"},"mooiland.nl":{s:".clNotice{display:none !important}.clNoticeVisible{margin-top:0 !important}"},"abload.de":{c:"2"},"skat-spielen.de":{s:"#cookieTest{display:none !important}"},"dogma-exclusive.com":{c:"88"},"incomediary.com":{c:"2"},"atgtickets.com":{s:"#atgcookies-container{display:none !important}"},"doctorwho.tv":{c:"52"},"setafika.hu":{s:"#popup_bottom{display:none !important}"},"chilly.domains":{s:"#chilly-cookie-accept{display:none !important}"},"narodowy.pl":{c:"2"},"forum.valka.cz":{c:"46"},"speedtestcustom.com":{s:".stc-wrapper > div[style]{display:none !important}"},"kissonline.com":{s:"#consent-slide{display:none !important}"},"cassaforense.it":{s:"#cassaforense-cookies{display:none !important}"},"ueltje.de":{s:".ueltje-cookie-accept{display:none !important}"},"clinique-veterinaire.fr":{c:"46"},"polimarky.pl":{c:"92"},"hareskovskole.dk":{s:"#jGrowl{display:none !important}"},"pabo.nl":{s:".disclaimer_wrapper{display:none !important}"},"dashlane.com":{s:".js-privacy-module{display:none !important}"},"weersvoorspelling.nl":{c:"7"},"euroclix.nl":{j:"5"},"openclassrooms.com":{s:"#showDisclaimer{display:none !important}"},"ulule.com":{j:"6"},"unitymedia.de":{c:"7"},"9gag.com":{j:"5"},"mendrulandia.es":{j:"5"},"machcomedyfest.co.uk":{s:".wander-cookie{display:none !important}"},"cookiewall.finnik.nl":{j:"5"},"regielive.ro":{s:"#sc-alert-box-wrapper{display:none !important}"},"livesmarter.pl":{s:"#rodo{display:none !important}"},"funpot.net":{c:"67"},"tetrisfriends.com":{s:".iziToast-wrapper{display:none !important}"},"hm.com":{j:"5"},"irisnet.be":{s:"#cookieIndicator{display:none !important}"},"alarabiya.net":{c:"16"},"netdyredoktor.dk":{s:".ct-popup{display:none !important}"},"forum-de.msi.com":{s:".privacy_popup{display:none !important}"},"tenuser.com":{s:"#rsp{display:none !important}"},"fanbike.de":{c:"16"},"jisc-collections.ac.uk":{j:"6"},"salzgitter-ag.com":{s:".sz-meta__cookies-wrap{display:none !important}"},"optyczne.pl":{s:".w3-modal{display:none !important}"},"nuevocaceres-sanfrancisco.es":{s:".index_cookies{display:none !important}"},"sunny-dessous.de":{s:".cookie_licence{display:none !important}"},"rynekzdrowia.pl":{s:".rodo{display:none !important}"},"telering.at":{s:".uc-fab.uc-fab-open{display:none !important}"},"dijaspora.online":{s:".cookie-uslovi{display:none !important}"},"motodesguacehnosgonzalez.com":{j:"5"},"i-say.com":{j:"5"},"ecosia.org":{s:".js-notifications-banner{display:none !important}"},"jobat.be":{s:".contract-sticky{display:none !important}"},"jetbrains.com":{s:".jba-agreement-panel{display:none !important}"},"purevpn.com":{j:"5"},"kaspersky.pt":{s:".notification-bar.bottom{display:none !important}"},"ivoox.com":{j:"5"},"vodafone.pt":{s:"#main-nudge{display:none !important}"},"verkkokauppa.com":{s:".vk-cookie-notification{display:none !important}"},"grrif.ch":{s:"#RGPD{display:none !important}"},"discordbots.org":{j:"5"},"loggly.com":{s:".promotion{display:none !important}"},"rtp.pt":{s:"#rtpprivacycontent{display:none !important}"},"slate.com":{j:"5"},"netdoctor.co.uk":{s:".policy-bar{display:none !important}"},"wizaserwis.pl":{j:"5"},"mtc-it4.be":{j:"5"},"digitalcombatsimulator.com":{c:"2"},"time.com":{j:"5"},"playtv.fr":{j:"5"},"dvdfab.cn":{s:".cookie-opa{display:none !important}"},"wtatennis.com":{s:".wta-cookies-policy{display:none !important}"},"mnb.hu":{s:".popupDialog{display:none !important}"},"vanpartner.com":{j:"5"},"esug.dk":{s:"#COOKIE{display:none !important}"},"strava.com":{s:"#stravaCookieBanner{display:none !important}"},"guce.oath.com":{j:"5"},"userstyles.org":{s:".NotificationLine{display:none !important}"},"grammarly.com":{s:'div[class*="gdpr_notification"]{display:none !important}'},"pathe.nl":{j:"5"},"allyouneedfresh.de":{j:"5"},"eltiempo.es":{s:"#privacy_bar,.curtain_lightbox{display:none !important}"},"shmoop.com":{j:"5"},"xvideos.com":{s:"#x-messages,#x-messages-btn,#x-x-messages-btn{display:none !important}"},"techniconnexion.com":{s:"#fb-root ~ div{display:none !important}"},"memrise.com":{s:"#legal-modals,.modal-backdrop{display:none !important}"},"webcamera.pl":{s:"#rodo-modal{display:none !important}"},"pkl.pl":{s:".popup-pkl{display:none !important}"},"mercateo.com":{s:"#header-popup-info{display:none !important}"},"psychomedia.qc.ca":{c:"7"},"digi24.ro":{s:"#gdpr,#gdpr-modal{display:none !important}"},"theforestmap.com":{j:"5"},"choicefurnituresuperstore.co.uk":{s:".fixBar{display:none !important}"},"magix.info":{s:".mgxCookieConsent{display:none !important}"},"krautreporter.de":{s:".js-flash-messages-container{display:none !important}"},"orcadian.co.uk":{s:".cd-container{display:none !important}"},"boxer.se":{s:'div[class*="CookieBar"]{display:none !important}'},"gadgetsnow.com":{s:".consent-popup{display:none !important}"},"memsql.com":{s:"#memsql-cookie-banner{display:none !important}"},"refresher.sk":{s:".gdpr-panel{display:none !important}"},"refresher.cz":{s:".gdpr-panel{display:none !important}"},"opgevenisgeenoptie.nl":{s:".cbar-wrapper{display:none !important}"},"optical-center.fr":{s:"#cookieOk{display:none !important}"},"usporedi.hr":{s:"#privacyPolicyModal,.modal-backdrop{display:none !important}"},"skdd.hr":{s:".newsBottom{display:none !important}"},"hrdlog.net":{s:"#DivCookies{display:none !important}"},"mercola.com":{s:".gdpr-container{display:none !important}"},"netflixlovers.it":{s:"#cs_container{display:none !important}"},"toutcomment.com":{c:"16"},"blau.de":{s:"app-banner5{display:none !important}"},"hs-emden-leer.de":{s:"#zwcc,#zwcc-spc{display:none !important}"},"iiyama.com":{s:".infobar-message{display:none !important}"},"denizen.io":{s:".cc-container{display:none !important}"},"avaaz.org":{s:".gdpr-block-cookies,.gdpr-block-privacy{display:none !important}"},"societe.com":{j:"5"},"chilloutzone.net":{s:"#cozConsentNugget{display:none !important}"},"supercell.com":{s:".bs-site-alert{display:none !important}"},"themaven.net":{s:".consent-ui{display:none !important}"},"coop.se":{s:".js-personalInformationNotice{display:none !important}"},"broadcom.com":{s:".ribbon-wrapper{display:none !important}"},"technischeunie.nl":{s:"#footer-slideup-highlight-banner{display:none !important}"},"brain.fm":{s:'div[class*="modules-core-css-CookiePopup"]{display:none !important}'},"cryptokitties.co":{s:".BottomBanner{display:none !important}"},"gnkdinamo.hr":{j:"5"},"telia.ee":{s:"iframe.login_top,.header__notice{display:none !important}"},"giphy.com":{s:'div[class*="flash-message__MessageWrapper"]{display:none !important}'},"trustradius.com":{s:".notification-banner-footer{display:none !important}"},"logitech.com":{s:".cForum_Footer{display:none !important}"},"jdvhotels.com":{s:"#ccs-notification{display:none !important}"},"delock.de":{s:"#cookie_private{display:none !important}"},"indiegala.com":{j:"6"},"neoprofs.org":{s:"#page-footer ~ div{display:none !important}"},"classic-trader.com":{s:"#jGrowl{display:none !important}"},"soompi.com":{s:"#gdpr-root{display:none !important}"},"windguru.cz":{j:"5"},"thomsonreuters.com":{s:".dismissible-banner,.pl_announcements{display:none !important}"},"trafikverket.se":{s:"#ctl00_Content_EmptyPage_CoockieInformation_CookieContainer{display:none !important}"},"jobbird.com":{j:"5"},"openweathermap.org":{s:"#stick-footer-panel{display:none !important}"},"starressa.com":{s:"#modal-home{display:none !important}"},"rapidssl.com":{s:"#toolbar{display:none !important}"},"perforce.com":{s:".EUc{display:none !important}"},"detektor.fm":{s:".stb-container.stb-top-right-container{display:none !important}"},"siropsport.fr":{s:".analytics{display:none !important}"},"easyeda.com":{s:".priv-tips{display:none !important}"},"bw-online-shop.com":{s:".modal-mask-class.show-modal{display:none !important}"},"freemake.com":{s:"#bottombar{display:none !important}"},"planeteanimal.com":{c:"16"},"tsb.co.uk":{c:"2"},"lyricsfreak.com":{s:".wrapper ~ div{display:none !important}"},"flertkontakt.com":{s:"#overlay-content{display:none !important}"},"npostart.nl":{j:0},"alarmeringen.nl":{j:"5"},"avherald.com":{s:"#avhcookieconsent{display:none !important}"},"ticketea.com":{j:"5"},"sparbau-dortmund.de":{s:".sg-scn{display:none !important}"},"kongregate.com":{s:".policy-bar{display:none !important}"},"growdiaries.com":{s:".popup_secure{display:none !important}"},"drivereasy.com":{s:".float-bar{display:none !important}"},"unigine.com":{s:".bottom-notice{display:none !important}"},"emma-matras.nl":{s:".ucn-block{display:none !important}"},"raider.io":{s:'div[class*="cookieFooter-module"]{display:none !important}'},"emclient.com":{s:"#emcCookieNotification{display:none !important}"},"drugs.com":{s:".ddc-overlay,.ddc-modal{display:none !important}"},"vesselfinder.com":{s:".pprem_active{display:none !important}"},"keithurban.net":{s:"#important-notice{display:none !important}"},"onvz.nl":{s:".popup_overlay{display:none !important}"},"newatlas.com":{s:'body > div[style*="transparent"]{display:none !important}'},"escapefromtarkov.com":{s:"#legalLightBlock{display:none !important}"},"myspace.com":{s:"#termsOfService{display:none !important}"},"digiromania.ro":{s:"#gdpr,#gdpr-modal{display:none !important}"},"maxict.nl":{s:".wallpop-overlay{display:none !important}"},"flightview.com":{s:"#eea-confirmation-outer{display:none !important}"},"square-enix-games.com":{s:'footer > div[class*="notice"]{display:none !important}'},"arkivmusic.com":{s:"#gdpr-modal{display:none !important}"},"aoib.dk":{j:"5"},"opisopvoordeelshop.nl":{s:".cv-notifier-container{display:none !important}"},"lachainemeteo.com":{c:"2"},"deutschland-spielt.de":{s:"#gamigoCookie{display:none !important}"},"lenstip.com":{s:".w3-modal{display:none !important}"},"zvv.ch":{s:".mod_content_infobanner{display:none !important}"},"code42.com":{s:".QSIInfoBar{display:none !important}"},"invenglobal.com":{s:"#ige-cookie-policy{display:none !important}"},"letgo.hr":{s:"#container > div{display:none !important}"},"letgo.cz":{s:"#container > div{display:none !important}"},"luftlinie.org":{c:"16"},"bandcamp.com":{s:".tos-update{display:none !important}"},"revouninstaller.com":{s:"#consentAccepted{display:none !important}"},"godt.no":{s:"#psi{display:none !important}"},"frankfurt-airport.com":{s:".fra_cookie_policy{display:none !important}"},"transilien.com":{s:"cnil{display:none !important}"},"soliver.eu":{s:".ta_marketing-layer{display:none !important}"},"onzemondial.com":{c:"87"},"mythemeshop.com":{s:"#mts_gdpr_popup{display:none !important}"},"krombacher.de":{s:".trackingNotice{display:none !important}"},"trendsmap.com":{s:"#header_message{display:none !important}"},"bueromarkt-ag.de":{s:"#cC{display:none !important}"},"brodportal.hr":{s:".privatnost{display:none !important}"},"034portal.hr":{s:"#footer.tekst{display:none !important}"},"hajduk.hr":{j:"5"},"germaniasport.hr":{s:"#gdpr-wrapper{display:none !important}"},"tifon.hr":{s:".tifon_cookies{display:none !important}"},"americangreetings.com":{s:"#privacy_manager{display:none !important}"},"teknologisk.dk":{s:".bottom-warning{display:none !important}"},"askmen.com":{s:".privacy_policy__container{display:none !important}"},"cloudways.com":{s:"#cookies-bot{display:none !important}"},"dji.de":{s:"#dji-eucookie{display:none !important}"},"vinchain.io":{s:".bottom.stick{display:none !important}"},"tappedout.net":{j:"5"},"soccerstats.com":{j:"5"},"iscte-iul.pt":{s:"#cookies,#cookiesXs{display:none !important}"},"streetinsider.com":{s:"#zeroIDModal{display:none !important}"},"marathi.tv":{c:"7"},"marktguru.at":{s:".bottom-alert{display:none !important}"},"sap.com":{j:"6"},"hanos.nl":{j:"5"},"orgosolo.nu.it":{s:"#CookieDiv{display:none !important}"},"steadyhealth.com":{c:"7"},"leclercdrive.fr":{s:'div[class*="BandeauCookies"]{display:none !important}'},"teletexto.com":{s:"#priv{display:none !important}"},"caib.es":{s:".imc-cookie{display:none !important}"},"forumrowerowe.org":{s:".ckg{display:none !important}"},"opswat.com":{s:"#cookie-ntc{display:none !important}"},"brooksrunning.com":{j:"5"},"planet.com":{s:".pl-cookies-cta-contain{display:none !important}"},"dormando.de":{s:"#up-cookie{display:none !important}"},"tomtop.com":{s:".m_privacy_statement{display:none !important}"},"revouninstallerpro.com":{s:"#consentAccepted{display:none !important}"},"freeimages.com":{s:".navbar-qards{display:none !important}"},"datafox.de":{s:".popup-banner{display:none !important}"},"hindustantimes.com":{j:"5"},"lyricsmode.com":{c:"7"},"recurly.com":{s:".recurly-gdpr{display:none !important}"},"pokewiki.de":{s:"#gl-topbar-bg,#gl-topbar{display:none !important}"},"aa.com":{s:"#aa_optoutmulti-Modal{display:none !important}"},"lzinios.lt":{c:"7"},"heroku.com":{s:"#heroku-cookie-banner{display:none !important}"},"msnbc.com":{s:".dy_bottom_notification{display:none !important}"},"archiveofourown.org":{j:"6"},"logicsupply.com":{j:"5"},"vr-world.com":{s:"#privacy_policy{display:none !important}"},"huawei.ru":{s:"#cookie__panel-help{display:none !important}"},"rentalens.ch":{s:"#dabar{display:none !important}"},"ehl.de":{s:".popup_bg{display:none !important}"},"jobscout24.ch":{s:".disclaimer-message{display:none !important}"},"roosterteeth.com":{s:".policy-banner{display:none !important}"},"find-dvd.co.uk":{c:"16"},"visdeal.nl":{s:".site-message-overlay{display:none !important}"},"jori.com":{c:"37"},"hpe.com":{s:"#hpealertcomp_container,#hpe_privacy_banner_container{display:none !important}"},"skype.com":{s:'.notification.info[role="alert"]{display:none !important}'},"push4site.com":{s:".gdpr__container{display:none !important}"},"works-hub.com":{s:".tracking-popup{display:none !important}"},"flip.pt":{s:"#access{display:none !important}"},"fdb.pl":{c:"16"},"liberte.pl":{c:"2"},"digisport.ro":{s:"#gdpr,#gdpr-modal{display:none !important}"},"grafana.com":{c:"69"},"gezondheidaanhuis.nl":{s:".hover_bkgr_fricc{display:none !important}"},"smartcockpit.com":{c:"7"},"infostrada.it":{c:"2"},"worthpoint.com":{s:".bannerContainer{display:none !important}"},"utwente.nl":{s:".utwente-cookiebar{display:none !important}"},"fantasyfootballscout.co.uk":{s:"#info-bar{display:none !important}"},"thephone.coop":{s:".ll_banner{display:none !important}"},"digiday.com":{s:".bx-has-close-inside .bx-slab{display:none !important}"},"osb-alliance.de":{s:"#cookieonpage{display:none !important}"},"thewalrus.ca":{s:".spu-box{display:none !important}"},"dlmirror.eu":{j:"6"},"france-galop.com":{c:"7"},"edoc.site":{s:"#EDOCSITE_cookie_box{display:none !important}"},"hollywoodreporter.com":{s:".tos-change{display:none !important}"},"omnium.cat":{s:".omnium_cookies_popup_wrapper{display:none !important}"},"poulpeo.com":{s:".legal-banner{display:none !important}"},"team-neusta.de":{s:".c-slide-up,.c-slide-up ~ div{display:none !important}"},"maa.nl":{j:"5"},"swissgrid.ch":{s:".swg-overlay-cookie{display:none !important}"},"enternity.gr":{s:"#enternity_consent{display:none !important}"},"chomikuj.pl":{j:"5"},"trustnet.com":{s:"#deployment_banner{display:none !important}"},"visir.is":{s:".bottom-disclaimer{display:none !important}"},"ndsas.sk":{s:".navbar-fixed-top > .container{display:none !important}"},"iberley.es":{s:"#cookies-modal{display:none !important}"},"thesleepdoctor.com":{s:'body > p[style*="fixed"]{display:none !important}'},"nhl.com":{s:".btm-nhl-announcement-modal{display:none !important}"},"singlereisen.de":{s:".cp-dialog{display:none !important}"},"searchlock.com":{s:"#fixedFooter{display:none !important}"},"comviq.se":{c:"46"},"araihelmet.eu":{s:".top-banner{display:none !important}"},"redleonardo.es":{s:".cookies-label{display:none !important}"},"immobilien.net":{j:"5"},"monsterhunterworld.com":{j:"5"},"konyvelozona.hu":{s:".snackbar-container{display:none !important}"},"tiles-studio.cz":{j:"6"},"maxdome.de":{s:"#mx-js-bar{display:none !important}"},"datanyze.com":{j:"6"},"containerbestellung24.de":{s:"#active-popup,#popup-container{display:none !important}"},"royalcaribbean.co.uk":{s:".rccl_cookieConsentStickeyFooterInformation{display:none !important}"},"indiancaller.com":{s:".pn_notebox{display:none !important}"},"danielaburke.com":{s:".fixed-banner{display:none !important}"},"knuddels.de":{s:'#root > div[class*="ColumnFluid"] > div[class*="ColumnFluid"] > div[class*="ColumnFluid"] > div[class*="Column__Column"][style*="opacity"]{display:none !important}'},"ouicar.fr":{s:".ce_cookies{display:none !important}"},"adtraction.com":{s:"#adtrprivacy{display:none !important}"},"bombich.com":{s:"body > .text-center{display:none !important}"},"epix.com":{s:".messaging-container{display:none !important}"},"volkswagen-classic-parts.de":{s:".dataProtection{display:none !important}"},"volkswagen-nutzfahrzeuge.de":{s:"#trackingPolicy{display:none !important}"},"gsp.ro":{s:".center-gdpr{display:none !important}"},"acotelnet.com":{s:"#box_resp,#overlay_resp{display:none !important}"},"icicibank.co.uk":{s:".siteCapture{display:none !important}"},"autovandaag.nl":{s:".bo-cb-bar{display:none !important}"},"virginmedia.com":{s:".notifications-manager{display:none !important}"},"cumberland.co.uk":{s:".Notice{display:none !important}"},"inverto.tv":{s:"body > .section{display:none !important}"},"gryna2.pl":{c:"2"},"blog200porcento.com":{s:"#consent_200{display:none !important}"},"wyld.de":{s:".optin{display:none !important}"},"bl.uk":{c:"2"},"dazeddigital.com":{s:"#cookie-view{display:none !important}"},"zacks.com":{s:".disclosure-fixed-slab{display:none !important}"},"imvu.com":{j:"5"},"weber.ee":{c:"89"},"figyelo.hu":{c:"16"},"bancobpi.pt":{s:'div[id^="webcarePopup"] > div[id^="bbo_"]{display:none !important}'},"vip-usedom.de":{s:"#confirmation{display:none !important}"},"tf1.fr":{s:'div[id^="msgctrw"]{display:none !important}'},"csmarket.pt":{s:'body > div[style*="black"]{display:none !important}'},"isaca.org":{s:"#isaca-consent-wrapper{display:none !important}"},"nrj-games.fr":{c:"2"},"best-bottrop.de":{s:'.mm-slideout > div[style*="fixed"]{display:none !important}'},"musicglue.com":{s:".CookieFooter{display:none !important}"},"fool.de":{s:"#dogfish,#consent-modal{display:none !important}"},"fool.co.uk":{s:"#dogfish,#consent-modal{display:none !important}"},"maison-laborie.fr":{s:"ion-toast{display:none !important}"},"samebug.io":{s:"#__next > div > .fixed{display:none !important}"},"zoo.wroclaw.pl":{s:"#okno_18only{display:none !important}"},"picnic-supermarkt.nl":{s:"#switch2{display:none !important}"},"faidateshop.eu":{c:"7"},"krankenkassen-direkt.de":{s:"#cbanner{display:none !important}"},"delock.com":{s:"#cookie_private{display:none !important}"},"digitalocean.com":{s:"#DO_CC_PANEL{display:none !important}"},"weatherbug.com":{s:"notification-footer{display:none !important}"},"rewolucjawoc.pl":{s:".footer + .copy{display:none !important}"},"santacruzbicycles.com":{s:".alert-header{display:none !important}"},"postermywall.com":{s:"#user-consent-form{display:none !important}"},"pogodynka.pl":{s:"#accept{display:none !important}"},"livvin.com":{j:"5"},"firstdraftnews.org":{s:".welcome-message{display:none !important}"},"similarweb.com":{s:".sw-notification{display:none !important}"},"technics.com":{j:"6"},"q-park.de":{s:".service-messages{display:none !important}"},"crazyhairs.de":{c:"2"},"distance.to":{c:"16"},"peugeottalk.de":{s:"#ptalkcookie{display:none !important}"},"romwe.com":{s:".c-privacy-module{display:none !important}"},"balls.ie":{s:'body > div[style*="transparent"]{display:none !important}'},"scalemates.com":{s:"#prv{display:none !important}"},"proximustv.be":{j:"6"},"werksite.nl":{j:"5"},"duolingo.com":{j:"6"},"blackfire.io":{s:"#about-trackers{display:none !important}"},"bygghemma.se":{s:'#header ~ div[class]:not([id]):not([class*="_"]){display:none !important}'},"toolband.com":{s:"#important-notice{display:none !important}"},"endless-space.com":{s:'div[id^="cookies-policy"]{display:none !important}'},"findicons.com":{s:".navbar-qards{display:none !important}"},"engelbert-strauss.at":{c:"7"},"metalshop.cz":{s:"#nextcreBotDialog{display:none !important}"},"sailboatowners.com":{j:"6"},"teoria.com":{s:".alert-danger{display:none !important}"},"zamunda-net.com":{s:".ipc-window-overlay{display:none !important}"},"davinotti.com":{s:".privacy-nav{display:none !important}"},"webinarjam.com":{s:".bs-example{display:none !important}"},"diil.ee":{s:".header__notice{display:none !important}"},"o2.cz":{s:".o2x-cookiebar-wrapper{display:none !important}"},"blv.no":{s:'body > div[class*="prompt"]{display:none !important}'},"allbinos.com":{j:"5"},"peoplenet.dk":{s:'.pum[data-popmake*="cookies"]{display:none !important}'},"max.se":{j:"5"},"honda.com.br":{s:".info-notification{display:none !important}"},"fear-the-wolves.com":{s:"#cookies-interface{display:none !important}"},"picmonkey.com":{j:"6"},"uk-yankee.com":{s:"#announcement,#announcement ~ #overlay{display:none !important}"},"loliv.com":{s:".noti_full{display:none !important}"},"freetrackplans.com":{s:".topbarBox{display:none !important}"},"newstalk.com":{j:"5"},"finnairshop.com":{s:".js-consent-popup{display:none !important}"},"mcdonalds.fr":{s:"abtasty-modal{display:none !important}"},"mazeikiai.lt":{s:".alert-info{display:none !important}"},"filehorst.de":{c:"2"},"sadem.it":{c:"2"},"robertplant.com":{s:"#cookieplugin{display:none !important}"},"online.no":{j:"5"},"modelrailwaysdirect.co.uk":{s:".notice-wrap{display:none !important}"},"mql5.com":{s:".float-vertical-panel{display:none !important}"},"aeiou.pt":{s:"#aeiou-barrier-wrapper{display:none !important}"},"thunderhead.com":{s:"#js-thcb-banner{display:none !important}"},"alaraby.co.uk":{s:".privacy_prompt{display:none !important}"},"befestigungsfuchs.de":{s:"#disclaimer_bg{display:none !important}"},"malopolska.pl":{s:'div[id*="cookieinfoarticle"]{display:none !important}'},"foodkombi.de":{s:".warning-app{display:none !important}"},"cjponyparts.com":{j:"6"},"vivus.dk":{s:".global-notification{display:none !important}"},"vergleich.org":{s:".legal-note{display:none !important}"},"uni-goettingen.de":{s:".legal_footer{display:none !important}"},"matchbook.com":{s:'div[class^="Cookies__cookies"]{display:none !important}'},"epdf.tips":{s:"#EPDFTIPS_cookie_box{display:none !important}"},"openpli.org":{j:"5"},"ii.co.uk":{s:"#site-content-container ~ div{display:none !important}"},"myg21.com":{s:"#policymodal{display:none !important}"},"upctv.ch":{s:".notifications-manager{display:none !important}"},"varden.no":{s:'body > div[class*="isSimple"]{display:none !important}'},"freemeteo.hu":{c:"2"},"lucidchart.com":{s:".lucid-cookie-compliance{display:none !important}"},"cursbnr.ro":{s:"#avert_all_page{display:none !important}"},"sportingbet.com":{s:".info-message.summaries{display:none !important}"},"mudrunner-spintires.com":{s:"#cookies-interface{display:none !important}"},"ville-ideale.fr":{c:"2"},"bostadoliv.se":{s:".uk-notify{display:none !important}"},"wsieciprawdy.pl":{s:"#rdModal{display:none !important}"},"juke.nl":{j:"6"},"veritasbooksonline.com":{s:".notice-wrap{display:none !important}"},"220.ro":{s:"#popup-versiune-2018{display:none !important}"},"cifas.org.uk":{c:"2"},"parrucchieri-italia.it":{s:".policy-modal{display:none !important}"},"aceandtate.com":{j:"6"},"pamiec.pl":{c:"71"},"mazowieckie.pl":{c:"71"},"csp.edu.pl":{c:"71"},"mzkjastrzebie.com":{c:"71"},"wios.warszawa.pl":{s:".JSWrapper,#kuki{display:none !important}"},"wp.pl":{j:"5"},"vlan.be":{s:"#modalCookie{display:none !important}"},"ww-ag.com":{s:".WW-cookiemodul{display:none !important}"},"bicyclette-verte.fr":{s:'div[class*="cookies"]{display:none !important}'},"magazine.campingtrend.nl":{j:"6"},"tantra-massage-prague.cz":{s:".window_foot{display:none !important}"},"city-sightseeing.com":{s:".footer-legal-textB{display:none !important}"},"domenovecentrum.cz":{c:"17"},"rapidonline.com":{s:"#cookieErrorMessageDiv + .column{display:none !important}"},"damianharriscycles.co.uk":{s:"#info-message{display:none !important}"},"heureka.cz":{s:".l-header-container__section{display:none !important}"},"investmap.pl":{s:".cookie,.popup-back,.popup-rodo{display:none !important}"},"musica.com":{s:"#priv{display:none !important}"},"monedo.pl":{s:".NotificationBar{display:none !important}"},"dotacedestovka.cz":{s:"fnx-cc{display:none !important}"},"uncomo.com":{s:".consent,.app_gdpr--2{display:none !important}"},"wallhere.com":{s:".policy-info{display:none !important}"},"loot.io":{s:"#app > main > div:first-child{display:none !important}"},"mvhs.de":{s:".cookie-usgae{display:none !important}"},"nextbike.de":{s:".nb-cookie{display:none !important}"},"thehamradio.website":{s:"body > p{display:none !important}"},"ciklum.com":{s:".b-cookies{display:none !important}"},"glose.media":{s:"body > span{display:none !important}"},"qixxit.com":{s:".policy-container{display:none !important}"},"redbet.com":{c:"36"},"wmeentertainment.com":{c:"36"},"idea-bank.ro":{c:"36"},"delfortgroup.com":{c:"36"},"bertil.com":{c:"36"},"salvaunbambino.it":{c:"27"},"isathens.gr":{c:"27"},"imunify360.com":{c:"27"},"cassoni-usati.it":{c:"27"},"camara.net":{c:"27"},"akeebabackup.com":{s:"#akeeba-dccc-banner-container{display:none !important}"},"bose.com":{s:".bottom_banner{display:none !important}"},"favre-leuba.com":{j:"6"},"luisaviaroma.com":{s:".privacy-box{display:none !important}"},"westword.com":{s:".compliance{display:none !important}"},"iper.it":{j:"6"},"rain-alarm.com":{j:"5"},"shouldianswer.co.uk":{c:"16"},"zurich.de":{s:".mod-notification-teaser{display:none !important}"},"rockhard.de":{s:"#yt-message{display:none !important}"},"myth-weavers.com":{s:"#consent_container{display:none !important}"},"sportskeeda.com":{s:".consent-pop-up{display:none !important}"},"tzorg.nl":{c:"36"},"bluelagoon.com":{j:"5"},"bitzarium.com":{s:"#textBox,#masque,#BoutClose{display:none !important}"},"greengenius.lt":{s:".cookies-sticky{display:none !important}"},"modelle-hamburg.de":{j:"6"},"frognews.bg":{s:".hover-mask,.gdpr-blk{display:none !important}"},"dekk1.no":{s:".ModuleGroup.name_infobar{display:none !important}"},"mesampoulesgratuites.fr":{c:"9"},"rockstarcoders.com":{s:"#myAlert{display:none !important}"},"aeriagames.com":{s:'body > div[style*="fixed"]{display:none !important}'},"ricaud.com":{s:".hamon{display:none !important}"},"ereading.cz":{c:"53"},"atwonline.com":{c:"53"},"oxygen.com":{c:"53"},"palmknihy.cz":{c:"53"},"tipp24.com":{c:"53"},"elevensports.it":{j:"5"},"anothermag.com":{s:"#cookie-view{display:none !important}"},"skoda-kariera.cz":{s:".page__wrap ~ div[class]:not([id]){display:none !important}"},"pjmedia.com":{s:"#policy-warning-container{display:none !important}"},"sax.co.uk":{s:".notify{display:none !important}"},"lendo.se":{j:"6"},"autokostencheck.de":{s:"#footerSlideContainer{display:none !important}"},"ferrariparts.co.uk":{s:"#system_message{display:none !important}"},"bitcatcha.com":{s:".site-notification{display:none !important}"},"ps.com.pl":{s:"#ckInfo{display:none !important}"},"voat.co":{s:".eppnotice{display:none !important}"},"dina.se":{s:".dina-cookiebanner{display:none !important}"},"capterra.com":{s:".welcome-banner{display:none !important}"},"vuecinemas.nl":{j:"6"},"findaphd.com":{j:"5"},"cliquojeux.com":{s:"#cook_aff{display:none !important}"},"enmark2.com":{c:"2"},"audio-parts.de":{s:".popup_notification{display:none !important}"},"jewish-places.de":{s:'div[class*="CookiesFooter__Banner"]{display:none !important}'},"predathor.pl":{s:".spu-bg,.spu-box{display:none !important}"},"akamai.com":{j:"5"},"rocketleague.com":{s:"#privmessage,#message{display:none !important}"},"brennstoffboerse.de":{s:".cs-info-wrapper,.cs-info-wrapper-spacer{display:none !important}"},"strandhotel.se":{s:"#mb_modules_popups_Container{display:none !important}"},"bcb-online.nl":{s:".jqibox{display:none !important}"},"twojesoczewki.com":{s:".popup_bg{display:none !important}"},"factmag.com":{s:"#vf-pop{display:none !important}"},"warrobots.net":{s:"#app-root > div > footer ~ div{margin-top:0 !important}"},"fightful.com":{j:"6"},"heureka.sk":{s:".l-header-container__section{margin-top:0 !important}"},"mtmad.es":{j:"5"},"e-tron.audi":{s:".e-tron-cookies-notice{display:none !important}"},"quake.com":{c:"36"},"thefamouspeople.com":{s:".ppreloaded_lightbox,.preloaded_m_lightbox{display:none !important}"},"jamesgalway.com":{c:"39"},"ford-maiwald.de":{s:"#popupDiv,#overlayDiv{display:none !important}"},"momsport.hu":{s:"#slider{display:none !important}"},"solwininfotech.com":{s:".sol-cookie-cover{display:none !important}"},"photocamera.bg":{c:"2"},"nationalpost.com":{c:"8"},"art.pl":{s:"#mnp_cookie_confirmation{display:none !important}"},"ville-rail-transports.com":{s:"#cookies_b{display:none !important}"},"foodetective.co":{j:"6"},"electrokit.com":{s:"#top-bar{display:none !important}"},"hmb-gorzow.pl":{s:"aside.widget{display:none !important}"},"werum.com":{s:".c-callout{display:none !important}"},"shadycharacters.co.uk":{s:"#banner-sidebar{display:none !important}"},"todopvr.com":{j:"5"},"pxhere.com":{s:".policy-info{display:none !important}"},"air-austral.com":{s:"#legalconcerns{display:none !important}"},"freemeteo.nl":{c:"2"},"yola.com":{c:"36"},"rideapart.com":{s:".m1-footer-messages{display:none !important}"},"artwizz.com":{s:".aw2-nav-top-cookie{display:none !important}"},"pro-tools-expert.com":{c:"39"},"skrattsajten.com":{s:".cookieScript{display:none !important}"},"europe-pharm.com":{s:".ep_cookies{display:none !important}"},"kolding.dk":{s:"#jGrowl{display:none !important}"},"finance-angels.de":{s:"body > div > div > [jsmodel]{display:none !important}"},"stedwards.edu":{s:".region-alert-section{display:none !important}"},"tv5.ca":{s:".top-alertes{display:none !important}"},"youronlinechoices.com":{s:".fl-page.dnone,.mainContentInside .info{display:none !important}"},"tourtel-twist.fr":{c:"2"},"utopya.fr":{s:".banner-header{display:none !important}"},"clusterr.io":{j:"5"},"nec.com":{s:".func-cookie{display:none !important}"},"amcharts.com":{s:"#notices{display:none !important}"},"indusface.com":{s:".disclaimer_block{display:none !important}"},"framtid.se":{s:"#siteflash{display:none !important}"},"seazon.fr":{s:"#root > div > .flexRow{display:none !important}"},"massivum.de":{s:".cn_box{display:none !important}"},"e-cooline.de":{s:"#privacy-protection{display:none !important}"},"paulmccartney.com":{s:".pmc-cookie-consent-block{display:none !important}"},"schneider-umformen.de":{j:"5"},"arubanetworks.com":{s:"#aruba_cookie_privacy_popup{display:none !important}"},"schaeffler.com":{s:"#dataprotection{display:none !important}"},"troax.com":{s:".troax-messages{display:none !important}"},"mapal.com":{s:"#ctrlck{display:none !important}"},"prestosoft.com":{s:"#consent-footer{display:none !important}"},"swishmax.pl":{s:'#main-container-home ~ div > div[style*="fixed"]{display:none !important}'},"halifax.dk":{s:"#page-cookies{display:none !important}"},"cityexpress.com":{s:".ctn-cookies{display:none !important}"},"crans-montana.ch":{s:'.mm-page > div[style*="fixed"]{display:none !important}'},"diabeter.nl":{j:"5"},"bip.um.wroc.pl":{c:"2"},"hd.se":{c:"53"},"toldot.ru":{s:"#prbl{display:none !important}"},"haewa.de":{s:".occ-lock,.occ-overlay{display:none !important}"},"lincolnelectric.com":{s:"#cp_wrapper{display:none !important}"},"okian.ro":{s:".HCCC__container--style{display:none !important}"},"wddty.com":{s:"#SiteMessageWrap{display:none !important}"},"varian.com":{s:"#varian-gdpr-consent{display:none !important}"},"hrkgame.com":{j:"6"},"kempenhaeghe.nl":{s:".overlay2{display:none !important}"},"texmania.sk":{s:"#note-holder{display:none !important}"},"bodypak.pl":{c:"2"},"gooienom.nl":{s:"#notification_area{display:none !important}"},"onedayonly.nl":{s:"#ods_modal_action,#ods_modal_fade{display:none !important}"},"logistik-express.com":{j:"5"},"thevinylfactory.com":{s:"#vf-pop{display:none !important}"},"qualenergia.it":{s:"#cookies-win{display:none !important}"},"fusion.tv":{s:".blockCookies{display:none !important}"},"powerreviews.com":{s:".prd-wrap{display:none !important}"},"liesegang-projects.com":{s:"#lpcookies{display:none !important}"},"news5.de":{s:"#privacyContainer{display:none !important}"},"gamblejoe.com":{s:".c-area{display:none !important}"},"tti.at":{c:"2"},"uchicago.edu":{s:".js_gdpr{display:none !important}"},"bambergfacts.de":{s:'div[id^="cookiebar"]{display:none !important}'},"backpackerguide.nz":{s:"#fbGroupMini{display:none !important}"},"swisslife.fr":{s:".mod-disclaimer{display:none !important}"},"trennung.de":{s:"#allowCookie{display:none !important}"},"kramp.com":{j:"5"},"oebv.net":{c:"75"},"bien-dans-mon-train.com":{s:".cookiecall{display:none !important}"},"quandoo.at":{j:"6"},"xg1.li":{s:"#privacy-footer{display:none !important}"},"nrjmobile.fr":{s:"#ei_cookie{display:none !important}"},"kiwi.com":{s:'div[class*="CookiesConsentContainer"]{display:none !important}'},"d-secour.de":{s:"#importantMessages{display:none !important}"},"dupuis.com":{s:".dp-cookie-legal{display:none !important}"},"metal-shop.eu":{s:"#nextcreBotDialog{display:none !important}"},"negrini.com":{s:"#cksModal{display:none !important}"},"best-sound.com":{c:"72"},"dartinfo.nl":{s:'body > div[class^="app"]{display:none !important}'},"the-match-factory.com":{s:"#infoBar{display:none !important}"},"botify.com":{s:".fixed.pin-l.pin-b.z-10.flex{display:none !important}"},"pacesuite.com":{s:"#notification-cont{display:none !important}"},"getfilecloud.com":{s:"#gdpr_accept{display:none !important}"},"priberam.org":{s:".pb-cookies{display:none !important}"},"provantage.com":{s:"#PP{display:none !important}"},"grotekleren-webwinkel.nl":{c:"16"},"broadleyautomotive.co.uk":{s:"#esc-wrapper{display:none !important}"},"bip.piaseczno.eu":{c:"2"},"rotterdam.info":{c:"2"},"daf.co.uk":{c:"77"},"onboarding.daf.com":{c:"77"},"daf.nl":{c:"77"},"oskolaf.pl":{j:"5"},"papyrus.com":{s:"#consentManager,#cookieConsentAreaModal,.modal-backdrop{display:none !important}.modal-open{overflow:visible !important}"},"prvikvadrat.hr":{j:"5"},"routereflector.com":{s:".modal,.modal-backdrop{display:none !important}.modal-open{overflow:visible !important}"},"salter.es":{s:"#modal-start,.modal-backdrop{display:none !important}.modal-open{overflow:visible !important;padding-right:0 !important}"},"walserprivatbank.com":{s:".block_consent{display:none !important}"},"keenfootwear.com":{s:".notice-top{display:none !important}"},"sega.co.uk":{s:".cp-wrap{display:none !important}"},"globalpetrolprices.com":{c:"2"},"phoenixcontact.com":{s:"#infoBoxFrame{display:none !important}"},"blogs.timesofisrael.com":{c:"67"},"grouperf.com":{j:"6"},"cff.ch":{s:".messageBar{display:none !important}"},"carglass.it":{j:"5"},"sinonimos.com.br":{c:"51"},"aquacoimbra.com":{s:"#cookiescontainer{display:none !important}"},"musikzirkus.eu":{s:".infobox{display:none !important}"},"domotex.de":{s:".user-notes-notification{display:none !important}"},"annualreviews.org":{s:".ar-news-footer{display:none !important}"},"isidewith.com":{s:".overlayBG,.overlayContent{display:none !important}"},"csu.de":{s:".mod-layer{display:none !important}"},"voria.gr":{s:"#cookies_area{display:none !important}"},"praktiker.ro":{s:".cookie-form{display:none !important}"},"vova.com":{s:".activity-cookie{display:none !important}"},"rebirth-hannover.de":{s:".c-callout{display:none !important}"},"parkindigo.com":{s:"idg-cookie-info-bar{display:none !important}"},"vw.com.br":{s:"#warning{display:none !important}"},"ms.gov.pl":{s:'#MS[style*="block"]{display:none !important}'},"warszawa.so.gov.pl":{c:"2"},"mkidn.gov.pl":{j:"5"},"archiwa.gov.pl":{s:"#message_box{display:none !important}"},"gdansk.wios.gov.pl":{j:"5"},"monitoring.krakow.pios.gov.pl":{s:".a-footer{display:none !important}"},"purepla.net":{j:"5"},"imagine-r.com":{c:"2"},"henryschein.at":{s:".hs-block-ui,.hs-dialog{display:none !important}"},"paypal-community.com":{j:"5"},"patience-is-a-virtue.org":{s:"#copy > p{display:none !important}"},"opi.org.pl":{s:"jsa-cookie{display:none !important}"},"bloomandwild.com":{s:".bwCookieMessage{display:none !important}"},"devart.com":{s:".popup-wrapper{display:none !important}"},"isa.org":{s:"#simplemodal-container,#simplemodal-overlay{display:none !important}"},"pfeiffer-vacuum.com":{s:"#pfCookieNotice{display:none !important}"},"malmo.se":{j:"5"},"asroma.com":{s:".s-navigation-tool-panel-disclaimer{display:none !important}"},"wavesplatform.com":{j:"5"},"picload.org":{c:"2"},"benu.cz":{s:".info-bar{display:none !important}"},"pb.edu.pl":{c:"2"},"ad.win.nl":{j:"5"},"bpsa.co.uk":{s:"#terms_container{display:none !important}"},"arridgegaragedoors.co.uk":{s:".small-cookie-notice .tingle-modal{display:none !important}"},"insidebruegel.net":{j:"6"},"berentzen-gruppe.de":{s:"#notifications{display:none !important}"},"kiplinger.com":{j:"5"},"suelo.pl":{s:"#modalCookies{display:none !important}"},"bazarcom.cz":{s:".colorbox-agreement{display:none !important}"},"forum.snsbank.nl":{s:"#clcback,#consentdiv{display:none !important}"},"digminecraft.com":{c:"16"},"unifilm.de":{s:".form-dsgvo{display:none !important}"},"thelanguagehouse.net":{s:".site-cookie{display:none !important}"},"rabobank.com":{j:"5"},"cifempleo.com":{c:"2"},"edingershops.de":{s:".bggrey,.alertbox{display:none !important}"},"gnhm.gr":{c:"53"},"robens-dn.de":{j:"5"},"zora.bg":{s:".bottom-freezed-bar{display:none !important}"},"exki.be":{s:".lang-cookie{display:none !important}"},"hotelquickly.com":{s:'#app > div > div[style*="height"]{display:none !important}'},"elempleo.com":{s:".politics_cookie{display:none !important}"},"everything5pounds.com":{s:'.__ADORIC__[style*="fixed"]{display:none !important}'},"ring.com":{s:"#teconsent{display:none !important}"},"netflix-nederland.nl":{s:'body > div[class^="app"]{display:none !important}'},"sothebys.com":{s:"#NotificationOverlay{display:none !important}"},"srf.ch":{s:".personalizationMessageWrapper{display:none !important}"},"retailtrends.nl":{j:"5"},"rusmeteo.net":{s:".alert-danger.in{display:none !important}"},"programiz.com":{s:".privacy-policy{display:none !important}"},"rofl-nerd.net":{j:"5"},"buzzpeoplemag.com":{s:".sca.block{display:none !important}"},"zeek.me":{s:".zk-footer ~ div{display:none !important}"},"ideo.com":{s:'.App > div[class*="Fixed"]{display:none !important}'},"planningwiz.com":{j:"5"},"bad-mergentheim.de":{s:".popupbox{display:none !important}"},"ing.com":{j:"5"},"qxl.no":{c:"2"},"coinomi.com":{s:'.dialog[data-dialog-id="cookies"]{display:none !important}'},"cocoscope.com":{s:".alert-info{display:none !important}"},"royalenfield.com":{j:"5"},"jobrad.org":{s:".generic-note{display:none !important}"},"teenmegaworld.net":{j:"5"},"hasselblad.com":{s:".prompt-content{display:none !important}"},"morticeandgreensashwindowrepairs.co.uk":{s:".b-modal,.pps-popup{display:none !important}"},"online.auktionsverket.se":{c:"29"},"ming-fahrschull.de":{s:'.notification[data-cookie*="cookies_demo"]{display:none !important}'},"bsdforen.de":{s:".notices{display:none !important}"},"ckib.de":{s:".tve-leads-ribbon{display:none !important}"},"calendarpedia.com":{c:"8"},"triglavzdravje.si":{s:"#cookie_module{display:none !important}"},"pmmp.io":{s:"#remindTos{display:none !important}"},"paks-bayern.weebly.com":{j:"5"},"cubbit.net":{s:"#root > div > footer ~ div{display:none !important}"},"lesara.de":{c:"36"},"light.co":{s:"#gdpr-modal{display:none !important}"},"hackerone.com":{s:".footer-popup{display:none !important}"},"asdinfowales.co.uk":{c:"7"},"recevoirlatnt.fr":{c:"22"},"dormezbien.fr":{c:"22"},"air-cosmos.com":{c:"22"},"villeneuve92.com":{c:"22"},"chassis-en-bois.fr":{c:"22"},"bourse-immobilier.fr":{c:"22"},"tinkco.com":{c:"22"},"fontenayenscenes.fr":{c:"22"},"hardstyle-industry.com":{c:"22"},"cestfrais.fr":{c:"22"},"sucredorge.com":{c:"22"},"iseki.fr":{c:"22"},"moncompte.sodexopass.fr":{c:"22"},"bitrise.io":{s:"bitrise-cookie-tab{display:none !important}"},"robots.ox.ac.uk":{s:".slidingDiv{display:none !important}"},"imobie.com":{s:".fixedbot{display:none !important}"},"szukajwarchiwach.pl":{j:"6"},"techvorace.com":{s:"#tfade,#tlight{display:none !important}"},"ftg-frankfurt.de":{s:"#dataInfoBox{display:none !important}"},"winkel.parool.nl":{s:".modal__bg{display:none !important}"},"epidemicsound.com":{s:'div[class*="cookieBar"]{display:none !important}'},"iradio.ie":{j:"5"},"arukhaza.com":{c:"7"},"lpexpress.lt":{s:"#cookies-block{display:none !important}"},"blockchainsecurity.services":{s:".infobar{display:none !important}"},"factorymarket.de":{s:".header-notification{display:none !important}"},"austria.info":{s:".header-notification{display:none !important}.header-notification-active .inner-wrap{padding-top:0 !important}"},"damuels.travel":{s:".header-notification{display:none !important}body.header-notification-active div.w2{margin-top:0 !important}"},"paladins.com":{s:"section.footer ~ div{display:none !important}"},"webyog.com":{s:"#top-banner{display:none !important}"},"fran.si":{c:"8"},"datarecoverynederland.nl":{s:"#cookie-contest{display:none !important}"},"onehowto.com":{s:".consent,.app_gdpr--2{display:none !important}"},"screenseven.com":{s:"#gamigoCookie{display:none !important}"},"bonkersabouttech.com":{s:".legal-info{display:none !important}"},"holadoctor.com":{s:".gdpr-space{display:none !important}"},"hegau-archers.de":{c:"7"},"about.me":{s:'.bubble[class*="cookie_notice"]{display:none !important}'},"amerisourcebergen.com":{s:".legal-acknowledgement{display:none !important}"},"buydifferent.it":{c:"7"},"chordify.net":{j:"5"},"aerospace-lab.de":{s:".themify-popup{display:none !important}"},"jow.fr":{j:"6"},"check.toys":{s:"#COO{display:none !important}"},"ered.gr":{s:".coucou{display:none !important}"},"alanus.edu":{s:".stoerer-wrapper{display:none !important}"},"realmroyale.com":{s:".footer + div{display:none !important}"},"beardbrand.com":{j:"5"},"jointcommission.org":{j:"5"},"usehoney.io":{s:'iframe[src*="usehoney.io/embed/widget/"]{display:none !important}'},"schwarzberlin.com":{c:"2"},"itrack.it":{s:"#ga-accept{display:none !important}"},"nats.io":{s:"#main_gdpr{display:none !important}"},"moveforwardpt.com":{s:"#stickyMessage{display:none !important}"},"mediaplus.com":{s:".fixed_top{display:none !important}"},"pixflow.net":{s:".privacy-popup{display:none !important}"},"pmg-mainz.de":{s:"#footer > section{display:none !important}"},"movimento5stelle.it":{s:"#disclaimerC{display:none !important}"},"global.brother":{j:"6"},"accorhotels.jobs":{s:"#cookiesAccorJobs{display:none !important}"},"myworkdayjobs.com":{s:'div[data-automation-id="legalNotice"]{display:none !important}'},"digi-animalworld.tv":{s:"#gdpr,#gdpr-modal{display:none !important}"},"dmc-watch.com":{s:".promo-bar-container{display:none !important}"},"tshirt-corner.com":{s:".tc-cnil{display:none !important}"},"modesens.com":{s:"#tip_container{display:none !important}"},"max.fr":{s:".notice-cook{display:none !important}"},"act-store.com":{s:"#POPUPS_WRAPPER{display:none !important}"},"kartunsy.pl":{s:"#ait-infobar{display:none !important}"},"kurfuerstenschaenke-dresden.de":{s:"#POPUPS_ROOT{display:none !important}"},"huaweipolska.pl":{s:".huawei-cookie{display:none !important}"},"carrando.com":{s:"#dsg{display:none !important}"},"sportraw.pl":{s:'body > div[id^="tws"]:not(.toplayerSpecialClass),#topLayerBackDrop{display:none !important}'},"rail-sim.de":{s:".popupBase.notification{display:none !important}"},"noir.pl":{c:"2"},"tutoriauxpc.com":{c:"7"},"speckproducts.co.uk":{s:".ui-widget-overlay{display:none !important}"},"chess.org":{s:".messages{display:none !important}"},"sticksnsushi.com":{s:'div[data-module="CookieBanner"]{display:none !important}'},"krasniykarandash.ru":{s:".site-footer + div[class]:not([id]){display:none !important}"},"ratedpeople.com":{s:'div[class*="cookie-acceptance-banner"]{display:none !important}'},"telecinco.es":{j:"6"},"portalsamorzadowy.pl":{j:"5"},"dplay.fi":{s:'div[class^="notification"]{display:none !important}'},"virginmediastore.com":{s:".notification-bar{display:none !important}"},"mobilepay.fi":{s:'div[class*="cookie-dialog"]{display:none !important}'},"e-fo.fr":{s:"#spanLien > div:first-child{display:none !important}"},"pip.gov.pl":{s:"#privacyOverlay{display:none !important}"},"mesago.de":{s:"#privacy_overlay{display:none !important}"},"panattasport.com":{s:".notification-block{display:none !important}"},"conforti.it":{s:"#ll_banner,#ll_info,.ll_link_bottom{display:none !important}"},"spectacles.com":{c:"36"},"kerbalspaceprogram.com":{j:"5"},"wiki.kerbalspaceprogram.com":{s:"#my-js-modal,#cover{display:none !important}"},"mquadr.at":{s:"#info{display:none !important}"},"truevalue.es":{s:".cookies-lay{display:none !important}"},"pharmindex-online.hu":{j:"5"},"egmnow.com":{s:".egm-cookie-flyout{display:none !important}"},"tennis-warehouse.com":{s:"#data_protection{display:none !important}"},"goodhoodstore.com":{s:".cc_msg{display:none !important}"},"hastens.com":{s:"#consent-modal{display:none !important}"},"easterngraphics.com":{c:"7"},"zaliastotele.lt":{s:"#wrapperCookie{display:none !important}"},"serpstat.com":{s:".gdpr-tab{display:none !important}"},"derkonzert.de":{s:"footer ~ div:last-child{display:none !important}"},"bekendeburen.nl":{s:"#AVG-message{display:none !important}"},"minijob-zentrale.de":{s:"#tracker-optin{display:none !important}"},"mspy.com":{s:".cookie-l{display:none !important}"},"brainpop.com":{s:"#announcment_alert{display:none !important}"},"close-up.it":{s:".stickyFooter{display:none !important}"},"remosoftware.com":{s:".visitornotice{display:none !important}"},"autotrader.nl":{j:"5"},"lunchtime.de":{s:".overlay_gray_bg{display:none !important}"},"pluralsight.com":{c:"72"},"adata.com":{s:"#chk_remark{display:none !important}"},"tupperware.de":{s:".is-cookie-bar .flyout,.is-cookie-bar .header,.is-cookie-bar .page-content,.is-cookie-bar .search{animation:none !important}"},"rems71.ru":{s:'body > div[id^="div"]{display:none !important}'},"aurubis.com":{j:"5"},"fullscreenmedia.co":{c:"72"},"hsl.fi":{s:"#messageBar{display:none !important}"},"septima.dk":{s:".septimacc{display:none !important}"},"teldust.com":{s:".cookies-tab{display:none !important}"},"medicshop.de":{s:"#cookiemedic{display:none !important}"},"hpinfomedia.de":{s:"#dataPrivacy{display:none !important}"},"gpgroot.nl":{s:"#ckc_hdr{display:none !important}"},"tvasta.pl":{j:"5"},"powiatslubicki.pl":{j:"5"},"techonthenet.com":{c:"16"},"gea.com":{s:".language-detection__cookie{display:none !important}"},"metcheck.com":{s:"#EUModal,.reveal-modal-bg{display:none !important}"},"agar.io":{j:"5"},"sbsr.fm":{s:'.bl-block[data-bl-name="CokiesWrap"]{display:none !important}'},"nox-xtreme.com":{s:"#root > div > div[class]:not([data-reactid]){display:none !important}"},"iam8bit.com":{s:".alertify{display:none !important}"},"letgo.si":{s:"#container > div{display:none !important}"},"astro-seek.com":{c:"37"},"spiking.io":{s:".PopupCookies{display:none !important}"},"mount10.ch":{s:".ck-bn{display:none !important}"},"sociall.io":{s:"mat-dialog-container{display:none !important}"},"crackwatch.com":{s:".Overlay{display:none !important}"},"dinamalar.com":{s:".quickslide{display:none !important}"},"f1racing.pl":{j:"5"},"vivaldi.com":{j:"5"},"iqoption.com":{s:'div[data-test-id="notification-position-container-block"]{display:none !important}'},"coop.co.uk":{s:"footer ~ div{display:none !important}"},"flows.be":{s:"#flows-cookie-compliance-popup{display:none !important}"},"netflixinbelgie.be":{s:'body > div[class^="app"]{display:none !important}'},"fansbreak.com":{c:"2"},"pipelife.at":{s:"#coo{display:none !important}"},"infosecurity.nl":{j:"5"},"klassikradio.de":{j:"6"},"ricominciodaquattro.com":{s:"#cbox-notice{display:none !important}"},"zurzeit.eu":{j:"5"},"re.is":{s:".cookiemodal{display:none !important}"},"infotorg.no":{s:".sticky-footer-banner{display:none !important}"},"brendon.hu":{c:"29"},"acronymfinder.com":{c:"7"},"newrelic.com":{s:"#intercom-container{display:none !important}"},"timberfarm.de":{s:"#block-timberfarm-cms-cookie{display:none !important}"},"labor-stephansplatz.de":{s:"#bho_infobar{display:none !important}"},"curiouscat.me":{s:".consentWrapper{display:none !important}"},"webstaurantstore.com":{j:"5"},"sterrenoptv.nl":{s:'body > div[class^="app"]{display:none !important}'},"mirantis.com":{c:"88"},"americares.org":{s:".snipe-banner{display:none !important}"},"portfoliospreadsheets.com":{s:"snack-bar-container{display:none !important}"},"architecture.com":{s:".info-bar{display:none !important}"},"moneyonline.gr":{s:"#cookies-shell{display:none !important}"},"spreds.com":{s:'.u-marginless[data-react-props*="cookies"]{display:none !important}'},"outsphera.it":{c:"27"},"stockhouse.com":{j:"5"},"wolterskluwer.pl":{s:"#wk-brg-cookie-info{display:none !important}"},"orange.be":{s:".zpWinThemeBanner{display:none !important}"},"sibur.ru":{s:"#privacyPolicy{display:none !important}"},"fis-ski.com":{s:".s-navigation-tool-panel-disclaimer{display:none !important}"},"popuz.com":{s:"#privacyPolicy{display:none !important}"},"supermemo.com":{s:"app-cookie{display:none !important}"},"redlight.net":{c:"7"},"raceface.com":{s:"#privacy,#cookies{display:none !important}"},"hamburgsud.com":{s:".m-cookie__content{display:none !important}"},"stundin.is":{s:".bottom-banner{display:none !important}"},"galileo.tv":{s:"#cookieBannerGTV{display:none !important}"},"myaustrianblog.at":{s:".cop{display:none !important}"},"go1a.de":{s:".mod-layer{display:none !important}"},"1aautoservice.de":{s:".mod-layer{display:none !important}"},"visaquarium.nl":{s:".tb{display:none !important}"},"awattar.com":{s:"#agree{display:none !important}"},"nettrading.ro":{s:".header-banner{display:none !important}"},"agroarbo.nl":{s:".cookie,.lights--out{display:none !important}"},"new-rock-france.com":{s:"#brl-cookie{display:none !important}"},"bright-products.com":{s:"#ncm.ncm-collapsed.ncm-ready{display:none !important}"},"vpeag.com":{s:".Footer + .BottomLine{display:none !important}"},"aripaev.ee":{s:'div[class*="CookieBar"]{display:none !important}'},"meldpuntwegen.be":{j:"5"},"sfendocrino.org":{j:"6"},"crowdestate.eu":{j:"5"},"agcocorp.com":{s:".disclaimerpopup{display:none !important}"},"explaineverything.com":{s:"footer + div{display:none !important}"},"ludwig.guru":{s:'div[class*="__disclaimer"]{display:none !important}'},"soldaatvanoranje.nl":{s:".overlay{display:none !important}"},"groen.be":{c:"4"},"gorillasports.de":{c:"4"},"gamingoase.de":{c:"4"},"elektrotresen.de":{c:"4"},"bitmoji.com":{c:"4"},"kaffee-melangerie.de":{c:"4"},"liveradio.ie":{c:"4"},"letsdeal.no":{s:'div[class^="gdpr-panel"]{display:none !important}'},"letsdeal.se":{s:'div[class^="gdpr-panel"]{display:none !important}'},"transitionnetwork.org":{s:"#tofino-notification{display:none !important}"},"wotinfo.net":{s:"#coo{display:none !important}"},"find.com.tr":{s:"#KVK_Cerez{display:none !important}"},"fctwente.nl":{j:"5"},"ittrend.hu":{s:"#suti{display:none !important}"},"rocketleagueesports.com":{c:"67"},"kon-boot.com":{s:"#myModal,.modal-backdrop{display:none !important}"},"makita.fr":{c:"4"},"jmmgc.com":{s:"#cnotice{display:none !important}"},"pipe-organ-recordings.com":{s:".cookies--container{display:none !important}"},"carhartt.com":{s:"#consentModal,.reveal-modal-bg{display:none !important}"},"operadeparis.fr":{s:".bloc-notifications{display:none !important}"},"shadertoy.com":{s:"#compliance{display:none !important}"},"ipla.tv":{j:"5"},"zanotti.com":{s:"#ll_banner,#ll_info,.ll_link_bottom{display:none !important}"},"shrm.org":{s:".shrm-gdpr{display:none !important}"},"tcroomburg.nl":{j:"5"},"mvagusta.com":{s:'div[class^="bannerContainer"]{display:none !important}'},"mediafour.com":{s:"#wpnb-bar{display:none !important}"},"messe-kassel.de":{s:".note{display:none !important}"},"askthepsych.com":{s:"#cks{display:none !important}"},"iboysoft.com":{s:"#user_popup{display:none !important}"},"hepster.com":{j:"5"},"durszlak.pl":{s:".privacy-layer{display:none !important}"},"globallogic.com":{s:"#ac-wrapper{display:none !important}"},"milanos.pl":{s:"#rodo-pop{display:none !important}"},"watispilling.nl":{s:".fancybox-overlay{display:none !important}"},"ruba535.ca":{s:"#disclaimer-box{display:none !important}"},"humbersideairport.com":{c:"2"},"wasserklinik.com":{s:"#snppopup-welcome{display:none !important}"},"romedic.ro":{s:"#cookbox{display:none !important}"},"skechers.com":{s:"#cookiep{display:none !important}"},"okpal.com":{j:"5"},"martinus.cz":{j:"5"},"ivet.pl":{s:"#popup1{display:none !important}"},"clubheldvanhetjaar.nl":{s:"#SiteWrapper > .wp > .wp + .wp{display:none !important}"},"vox.pl":{j:"5"},"jobmensa.de":{s:".js-usermessage{display:none !important}"},"nouw.com":{s:"#ConsentBanner{display:none !important}"},"pizza.de":{s:'div[data-qa*="notification"]{display:none !important}'},"wiertz.com":{j:"5"},"mx.recepedia.com":{c:"8"},"ruedesplantes.com":{s:'div[class^="cookies"]{display:none !important}'},"sdrplugins.com":{s:".widget-footer > section > div:not([class]){display:none !important}"},"appi.org":{j:"6"},"laptopsystem.hu":{c:"8"},"pallottinum.pl":{c:"7"},"bock-kunststofftechnik.de":{s:'div[id^="cookielaw_"]{display:none !important}'},"niveamen.co.uk":{c:"9"},"mcsuk.org":{s:"#a3prompt{display:none !important}"},"biblio.co.uk":{c:"92"},"results.decisiondeskhq.com":{c:"4"},"colormango.com":{s:".setprivacy{display:none !important}"},"hik-connect.com":{s:".coverShow{display:none !important}"},"twentemilieu.nl":{s:".balloon_notification{display:none !important}"},"e-conomic.dk":{c:"72"},"mijndomein.nl":{s:"#dd_overlay,#dd_popup{display:none !important}"},"corso-saunamanufaktur.com":{s:"#dataprotection{display:none !important}"},"rdvconso.org":{j:"5"},"live365.com":{s:'.site > div[class*="root"] > div:not(.action-bar){display:none !important}'},"tipsyelves.com":{j:"5"},"egym.com":{s:".egym-prompt{display:none !important}"},"totaljs.com":{s:".ui-cookie2{display:none !important}"},"riot.im":{s:".mx_MatrixToolbar{display:none !important}"},"gruene-bundestag.de":{c:"98"},"waff.at":{s:".en-pn-bar.en-notification{display:none !important}"},"alldent-zahnzentrum.de":{s:"#dialog{display:none !important}"},"dana.at":{s:".theCookie{display:none !important}"},"thefreelibrary.com":{c:"7"},"ams.at":{s:".ams-m-cookie-warning{display:none !important}"},"receiver.de":{s:".legalAdvice{display:none !important}"},"66.ru":{s:".t-i-agree{display:none !important}"},"schmidtnorm.at":{s:"#infoleiste > .container > .row > .col-12:not(.text-md-right){display:none !important}"},"codra.net":{j:"5"},"flamcogroup.com":{s:".stn-cookies,.stn-cookies-enlarge{display:none !important}"},"icebug.se":{s:"#root > div > [delay]{display:none !important}"},"keskeces.com":{s:"#cook,#cook2{display:none !important}"},"hostkey.com":{s:"#collectData{display:none !important}"},"fliesenoutlet.com":{c:"4"},"reifen-service-rostock.de":{s:"#my_cw_label{display:none !important}"},"propellets.at":{c:"37"},"dipisoft.com":{s:".accookie{display:none !important}"},"infodent24.pl":{j:"5"},"kidioui.fr":{j:"5"},"wps.com":{c:"53"},"skargards.com":{s:"#cc_dialog{display:none !important}"},"casopis-rozmaryna.cz":{s:"#fucktheEU{display:none !important}"},"comhem.se":{s:'div[class*="CookieBar"]{display:none !important}'},"pacsun.com":{s:"#pptou-sticky{display:none !important}"},"milliman.com":{j:"5"},"vk.se":{s:".ReactModal__Overlay--after-open{display:none !important}"},"liander.nl":{s:"#webLianderCookieBanner{display:none !important}"},"stofa.dk":{s:'div[class*="CookieDisclaimer"]{display:none !important}'},"toluna.com":{s:".notification-center{display:none !important}"},"ticketmarket.lt":{c:"16"},"yealink.com":{s:".cookie-go{display:none !important}"},"webwinkel.ad.nl":{s:".modal__bg{display:none !important}"},"webwinkel.ed.nl":{s:".modal__bg{display:none !important}"},"webwinkel.pzc.nl":{s:".modal__bg{display:none !important}"},"webwinkel.bndestem.nl":{s:".modal__bg{display:none !important}"},"webwinkel.gelderlander.nl":{s:".modal__bg{display:none !important}"},"webwinkel.destentor.nl":{s:".modal__bg{display:none !important}"},"webwinkel.volkskrant.nl":{s:".modal__bg{display:none !important}"},"poe.de":{c:"88"},"ozcouponscode.com":{s:".policy_footer{display:none !important}"},"onlinetvrecorder.com":{s:'#footerdiv > div[style*="z-index"]{display:none !important}'},"drivetribe.com":{s:'#root > div ~ div[class*=" "]{display:none !important}'},"ibm.com":{s:".ibm-canada-notice,.ibm-canada-notice-button{display:none !important}"},"infomir.eu":{s:"#cb{display:none !important}"},"bdew.de":{s:".bdew__cookiebanner{display:none !important}"},"brainandlife.org":{s:".breaking-container{display:none !important}"},"vivanta.es":{s:".dv-cookies{display:none !important}"},"si-vreme.com":{s:"#siv_cookieBanner{display:none !important}"},"loteriainpost.pl":{s:"#pop_up{display:none !important}"},"gadzetomania.pl":{j:"5"},"mojoreads.com":{s:'div[class*="cookiesPolicy"]{display:none !important}'},"online2pdf.com":{s:"#privacy_msg{display:none !important}"},"laznevbechyni.cz":{s:".fixed-box{display:none !important}"},"mee.com":{s:"#cboxOverlay{display:none !important}"},"strefakursow.pl":{s:".b-cookies{display:none !important}"},"satakunnanautotalo.fi":{s:".AVS-evasteseloste-container{display:none !important}"},"psicologia-online.com":{c:"16"},"ben.nl":{j:"5"},"medlibrary.org":{s:"#cks{display:none !important}"},"cathaypacific.com":{s:".system-alert-wrapper{display:none !important}"},"wylecz.to":{j:"5"},"generali.pl":{c:"2"},"gab-umweltservice.de":{s:"#rcpm{display:none !important}"},"nasze-kino.tv":{c:"2"},"bettyblocks.com":{s:"#ageNotification{display:none !important}"},"hansvanwijk.nl":{s:"#cookiewall-modal{display:none !important}"},"bn.ru":{s:".cookie--form{display:none !important}"},"noritake-itron.jp":{s:"#gdpr_nav{display:none !important}"},"guitaretab.com":{c:"7"},"tsuldotejo.pt":{s:"#cookieDiv{display:none !important}"},"themagpiesalute.com":{s:"#important-notice{display:none !important}"},"metatrader4.com":{s:"#float-vertical-panel{display:none !important}"},"aboardtheworld.com":{s:".popmake{display:none !important}"},"enzopennetta.it":{s:".popmake{display:none !important}"},"penseurope.com":{s:'.container[role="alert"]{display:none !important}'},"eonline.com":{s:".view-gdpr{display:none !important}"},"lloyd.com":{s:"#globalerror{display:none !important}"},"hario.com":{s:"#sample-dialog.dialog{display:none !important}"},"ads.nipr.ac.jp":{s:".backdrop{display:none !important}"},"urbia.de":{s:".layer-confirm-bottom{display:none !important}"},"lactalisfoodservice.es":{s:".LSSI{display:none !important}"},"hoteldiamant.cz":{s:".nl_cookies{display:none !important}"},"gewinnspiel.toom.de":{c:"36"},"shotsdeciencia.com":{s:'.x-el[data-ux="Widget"][class*="widget-footer-footer"]{display:none !important}'},"united.com":{s:'div[class*="cookiedisclaimer"]{display:none !important}'},"domi.com":{s:"#CoockiesPage{display:none !important}"},"dreamworksanimation.com":{s:".dwa-embed-cookie-consent-container{display:none !important}"},"theburgerhouse.com":{s:"#close-cookies{display:none !important}"},"euromaxx.nu":{c:"29"},"mybiclighter.com":{c:"2"},"stokokkino.gr":{s:"#popupform1{display:none !important}"},"peugeotscooters.pt":{s:".policy-window{display:none !important}"},"foundry.com":{s:".EUc{display:none !important}"},"apps-drones.com":{c:"22"},"sww.de":{s:"#cookieadd{display:none !important}"},"e-sochaczew.pl":{j:"5"},"norgips.pl":{j:"5"},"modr.pl":{s:".region-gdpr{display:none !important}"},"gazetapraca.pl":{s:"#overlayJS{display:none !important}"},"sightseeing-kontor.de":{s:"#sk-info{display:none !important}"},"nationalezorggids.nl":{s:".cookieModal{display:none !important}"},"nginx.com":{s:'div[id*="nx_gdpr_modal"]{display:none !important}'},"mareespeche.com":{c:"2"},"bergische-energie.de":{c:"7"},"bestlivecamsites.com":{s:".ntfc-bar{display:none !important}"},"fast-mirror.de":{s:"body > div[align]{display:none !important}"},"shoppable.com":{j:"5"},"kaliber.pl":{j:"5"},"travelchannel.co.uk":{j:"5"},"letssingit.com":{j:"6"},"lyricsbox.com":{j:"6"},"doc.fr":{j:"6"},"sites.google.com":{j:"5"},"etletstalk.com":{s:'body > div[id^="ulp-"]{display:none !important}'},"zenhotels.com":{s:".zen-privacypolicypopup{display:none !important}"},"db.com":{s:".dbe-content_cookie.alert{display:none !important}"},"payscale.com":{j:"6"},"skolakov.eu":{s:"#cookieslista{display:none !important}"},"semanticscholar.org":{s:".copyright-banner{display:none !important}"},"advatus.pl":{s:".myModal-box{display:none !important}"},"ip-sa.pl":{s:".myModal-box{display:none !important}"},"fabrykacukiernika.pl":{j:"5"},"totalcasino.pl":{j:"5"},"tmz.com":{j:"6"},"worldsbiggestchat.com":{s:"#nomnom{display:none !important}"},"lycoschat.com":{s:"#nomnom{display:none !important}"},"kleiderkreisel.de":{c:"69"},"checkdomain.de":{s:"#notifications-container{display:none !important}"},"dik.se":{s:".consent-dialog{display:none !important}"},"canadiansolar.com":{c:"2"},"royaldesign.no":{j:"6"},"trubendorffer.nl":{j:"5"},"hessnatur.com":{s:".actionbarWrapper{display:none !important}"},"jobserve.com":{j:"5"},"toto.com":{s:".cookieSection{display:none !important}"},"smarturl.it":{s:"#consent-block{display:none !important}"},"aignes.com":{s:"#aignescookie{display:none !important}"},"unive.nl":{j:"5"},"sydsvenskan.se":{c:"53"},"mjamjam-petfood.de":{s:".cookie5,.cookie5 + .allover{display:none !important}"},"vicisitudysordidez.com":{s:".lwpcngNotice{display:none !important}"},"eneco.nl":{j:"5"},"hotel.de":{s:'div[class*="cookieWrapper"]{display:none !important}'},"pieseauto.ro":{j:"5"},"mafiadoc.com":{s:"#MAFIADOCCOM_cookie_box{display:none !important}"},"aamuset.fi":{c:"7"},"kult-portal.com":{s:".infobar{display:none !important}"},"wallpapershome.com":{s:".cc-dialog{display:none !important}"},"fotocommunity.de":{c:"46"},"urraeroi.it":{c:"2"},"wurth.es":{j:"5"},"spinnaker-watches.com":{s:".fixedbar{display:none !important}"},"superpedestrian.com":{s:'.sp-overlay[ng-show="!showApp"]{display:none !important}'},"castbox.fm":{s:".cookies-conf{display:none !important}"},"pkspolonus.pl":{s:"#popek{display:none !important}"},"bein.net":{s:'.app-container > div[class]:not(.app-content):not([class*=" "]){display:none !important}'},"youngsseafood.co.uk":{c:"46"},"arlestourisme.com":{c:"2"},"conan-kolekcja.pl":{c:"2"},"dkl24.pl":{s:"#cookies_accepted{display:none !important}"},"antyczek.pl":{s:".header-banner{display:none !important}"},"humanoffice.pl":{s:"#cookie_cointer{display:none !important}"},"mobilier-mirjan24.ro":{s:"#window_overlay{display:none !important}"},"midas.co.za":{j:"5"},"checkyourmath.com":{c:"16"},"harper-adams.ac.uk":{c:"2"},"devhut.net":{s:".ht-notification-text .su-note{display:none !important}"},"engelsrufer.de":{s:"#backcolorcookies{display:none !important}"},"mcafeestore.com":{s:".cookie_module{display:none !important}"},"nperf.com":{c:"16"},"canadacomputers.com":{s:".privacy-modal{display:none !important}"},"alivecolors.com":{c:"46"},"goodvibes.com":{s:"#bottomAlert{display:none !important}"},"asnbank.nl":{j:"5"},"red-carparts.de":{c:"4"},"carlovalentini.it":{s:"#footer-widget-area{display:none !important}"},"streamcraft.com":{s:".privacy-wraper{display:none !important}"},"helemaalshea.nl":{s:".fancybox-overlay{display:none !important}"},"voidu.com":{j:"5"},"razer.com":{s:".component-sticky-dialog{display:none !important}"},"cv-sanitairkorting.nl":{c:"29"},"redaccionmedica.com":{s:".iframe_cookies{display:none !important}"},"helmet.fi":{s:".notification,.notifier_warning{display:none !important}"},"yourbaroness.com":{s:"#important-notice{display:none !important}"},"commsec.com.au":{s:".announcements{display:none !important}"},"lavalleedestortues.fr":{j:"5"},"changelly.com":{s:".clly-notification{display:none !important}"},"breakplan.pl":{s:".cookie_logo{display:none !important}"},"herni-svet.cz":{c:"81"},"durs.si":{s:"#trCookie{display:none !important}"},"smartshop.hu":{j:"5"},"higherlowergame.com":{s:".app-store-icons ~ section{display:none !important}"},"new-life-soundmagazine.com":{c:"29"},"educazionesanitaria.com":{s:".privacy_check{display:none !important}"},"tkmaxx.com":{j:"6"},"alpin-chalets.com":{j:"5"},"morningstar.fr":{s:".audienceTypeConfirmPopupContentCss,#dialog-mask{display:none !important}"},"wko.at":{j:"5"},"siemens.co.uk":{s:"#c-info,.cm-banner{display:none !important}"},"medischcontact.nl":{s:".cc-popup{display:none !important}"},"fimfiction.net":{j:"5"},"nos.io":{s:'div[class*="gdprBanner"]{display:none !important}'},"builds.gg":{c:"16"},"lot.com":{c:"2"},"bakken.nl":{j:"5"},"lawine.at":{s:".header-notification{display:none !important}"},"ipax.at":{s:"#ipaxCC{display:none !important}"},"acehighradio.com":{s:".widget-footer section > div:not([class]){display:none !important}"},"grandswissbangkok.com":{s:".footer-fix-popup{display:none !important}"},"kafeteria.pl":{j:"5"},"ritzau.dk":{s:".footer__notification{display:none !important}"},"utlandssvenskar.com":{s:"#my-welcome-message{display:none !important}"},"fotosik.pl":{s:".modal-backdrop,#rodo-info{display:none !important}"},"grand-seiko.com":{s:".blk-Cookie{display:none !important}"},"designwebkit.com":{s:".cookie_block{display:none !important}"},"apidura.com":{s:"#hiddenCookie{display:none !important}"},"arcolresistors.com":{s:"#close-me{display:none !important}"},"extreme-d0wn.net":{s:"#a-cn-wrapper{display:none !important}"},"worditout.com":{s:"body > #g{display:none !important}"},"thread.com":{s:"thread-cookie-notice{display:none !important}"},"marktguru.de":{s:".bottom-alert{display:none !important}"},"dobreprogramy.pl":{j:"5"},"thelily.com":{j:"5"},"mapsofworld.com":{s:"#dialog{display:none !important}"},"saurclient.fr":{c:"2"},"nowness.com":{s:".ns-info-bar{display:none !important}"},"swiftkey.com":{s:".alert-banner{display:none !important}"},"quizme.pl":{j:"5"},"o2family.cz":{s:"#o2fCookieConsentDialog{display:none !important}"},"super.ee":{s:".header__notice{display:none !important}"},"capitalone.ca":{s:"#alert-privacy-update{display:none !important}"},"eutelsat.com":{s:"#header_higher{display:none !important}"},"kurzgesagt.org":{s:".cb-wrapper{display:none !important}"},"cylance.com":{s:".cylance-mod-cookiebanner{display:none !important}"},"webd.pl":{s:"#cffc{display:none !important}"},"hs-kl.de":{s:".alert-info{display:none !important}"},"ntbinfo.no":{s:".footer__notification{display:none !important}"},"leech360.com":{s:"#cookie-required{display:none !important}"},"wsis.pt":{s:"#termosdiv{display:none !important}"},"cdkeys.com":{s:"#cookieCDkeys{display:none !important}"},"tor.com":{s:"#entry-content__footer-popup{display:none !important}"},"booking-channel.com":{s:'#sta-cookies ~ div[class*="tpl-cookies"]{display:none !important}'},"instituteforgovernment.org.uk":{s:".popup-text{display:none !important}"},"ninkasi.fr":{s:".nq-c-rgpdBar{display:none !important}"},"ukmotorists.com":{s:".csent{display:none !important}"},"k-mag.pl":{j:"5"},"tetley.fr":{s:".topFix{display:none !important}#PublicWrapper{margin-top:0 !important}"},"pagellapolitica.it":{c:"46"},"2fast4buds.com":{s:".popup_secure{display:none !important}"},"pacman.io":{s:"#priv_notice{display:none !important}"},"spartagym.hr":{s:".floatton-btn,.floatton-container{display:none !important}"},"fotoblogia.pl":{j:"5"},"epom.com":{c:"7"},"jazzradio.com":{s:"#terms-message-region{display:none !important}"},"gea-waldviertler.at":{c:"46"},"campana-schott.com":{s:"#cookie-copy{display:none !important}"},"nieuwspoort.nl":{j:"5"},"sumup.de":{s:'.su-footer ~ div[class*="css"]{display:none !important}'},"htmlcolorcodes.com":{s:"#js-alert{display:none !important}"},"flybe.com":{j:"5"},"spd-einbeck.de":{s:".spd-cookie{display:none !important}"},"chinesenewyear.net":{s:".js-alert{display:none !important}"},"gqitalia.it":{s:'.app > div[class^="FadeWrap"]{display:none !important}'},"bustle.com":{s:'body > div > header ~ div[class*=" "]{display:none !important}'},"antenna.gr":{c:"16"},"rwjf.org":{s:".masthead__message{display:none !important}"},"staatsschauspiel-dresden.de":{s:".dataprotection{display:none !important}"},"sexvideoall.com":{s:".fixed-nav-bar{display:none !important}"},"marklogic.com":{s:"#marklogic-eucl-notice{display:none !important}"},"sklepkoszykarza.pl":{c:"7"},"toothbrushbattery.com":{s:".woocommerce-store-notice{display:none !important}"},"bitdefender.ru":{s:".mtsnb-top{display:none !important}"},"cashconverters.be":{j:"5"},"buzz.ie":{j:"5"},"mopolis.de":{c:"16"},"qantas.com":{s:"#bottomAlert{display:none !important}"},"rjwatches.com":{j:"5"},"cortefiel.com":{s:"#general-popup,.euCookiesPolicy{display:none !important}"},"wizbii.com":{s:'aside[class*="gdpr_banner"]{display:none !important}'},"contractix.de":{j:"5"},"moontracks.com":{s:"#dropinboxv2cover{display:none !important}"},"startsmarthome.de":{j:"5"},"investintech.com":{s:"#geoPolicy{display:none !important}"},"nationalbooktokens.com":{s:'div[id*="UpdatePanelCookie"]{display:none !important}'},"expertoanimal.com":{c:"16"},"citusdata.com":{s:"#consentBox{display:none !important}"},"hech.be":{j:"5"},"pekao.com.pl":{j:"6"},"alfred.com":{s:".privacy-policy.content{display:none !important}"},"protegerse.com":{s:"#cook{display:none !important}"},"ontinet.com":{s:"#cook{display:none !important}"},"dafmuseum.nl":{s:".modal-backdrop,.page-overlay{display:none !important}"},"rpguides.de":{s:"#pitchblack{display:none !important}"},"geotrust.com":{s:"#toolbar{display:none !important}"},"mindennapkonyv.hu":{s:'#wrapper > div[style*="fixed"]{display:none !important}'},"zattoo.com":{j:"6"},"houseoftracks.com":{s:".overflow-container{display:none !important}"},"lojasrenner.com.br":{c:"36"},"getcomposting.com":{s:"#top-notice{display:none !important}"},"skoleporten.dk":{s:"#jGrowl{display:none !important}"},"hondanews.eu":{j:"5"},"cameo.com":{j:"5"},"gr8.com":{s:'div[data-editable="boxCookieNotification"]{display:none !important}'},"vandebron.nl":{j:"5"},"livescore.com":{s:"#ls_cpa{display:none !important}"},"freetorrent.tk":{s:"#alert_system_notice{display:none !important}"},"nederpix.nl":{j:"5"},"birdpix.nl":{j:"5"},"gebuhrenfrei.com":{s:".cc_wrapper{display:none !important}"},"allelectronics.com":{j:"5"},"kickresume.com":{s:'div[class*="CookieConsentBanner"]{display:none !important}'},"purehelp.no":{s:"#consent_popup,.modal-backdrop{display:none !important}"},"l2db.info":{s:".access-cookies{display:none !important}"},"hetzner.com":{j:"6"},"evengreener.com":{s:"#top-notice{display:none !important}"},"flyingflowers.co.uk":{s:".overlayTxtDiv{display:none !important}"},"dclaw.co.uk":{j:"5"},"voguebusiness.com":{s:'.app > div[class*="FadeWrap"]{display:none !important}'},"jcacinemes.com":{s:"body > .overlay{display:none !important}"},"kicks.fi":{s:'#container > div > div > div > div > div[style*="opacity"][style*="height"]{display:none !important}'},"eatbu.com":{s:'.mod-cookie-consent{display:none !important}body[style*="padding"]{padding:0 !important}'},"tapatalk.com":{s:".slideout-panel > #pp_b,#gdpr_b{display:none !important}"},"ferragamo.com":{s:".cc-customdialog{display:none !important}"},"zorgdirect.nl":{j:"5"},"ing.nl":{j:"6"},"bosch-mobility-solutions.com":{j:"5"},"tidal.com":{s:'div[data-test="GDPRNotification"]{display:none !important}'},"studio-eight.com":{j:"5"},"grodkow.pl":{s:"#jbar-push,#jbar{display:none !important}"},"salidzini.lv":{s:"#consent-box{display:none !important}"},"ryzerobotics.com":{s:'footer > div[class*="pop-up"]{display:none !important}'},"tayyar.org":{s:"#popUpModelID{display:none !important}"},"tenzingtravel.nl":{s:".fancybox-overlay,.fancybox-wrap{display:none !important}"},"alexamaster.net":{s:".alert-info{display:none !important}"},"babylonhealth.com":{s:".web-app__GlobalAlert__globalAlert{display:none !important}"},"tmdn.org":{j:"5"},"prevision.io":{s:"#legal-banner{display:none !important}"},"rituals.com":{j:"5"},"zlm.nl":{j:"5"},"mmogames.com":{s:".mmogames_cookie_modal{display:none !important}"},"pd-f.de":{s:"#matomo_info{display:none !important}"},"gosh.no":{j:"5"},"filmfront.no":{s:".pvern{display:none !important}"},"bokadirekt.se":{j:"5"},"321auto.com":{c:"2"},"appzio.com":{s:".modal-mask-class{display:none !important}"},"skionline.pl":{s:"#popup_rodo,#popup_tlo{display:none !important}"},"gashendel.nl":{j:"4"},"iotransfer.net":{s:".fl-accept{display:none !important}"},"guitartabs.cc":{s:"#main_content ~ div{display:none !important}"},"dictionnaire-academie.fr":{s:"#blocCookies{display:none !important}"},"china-certification.com":{s:".blueline-content-popup{display:none !important}"},"apprrr.hr":{s:".dialog-widget{display:none !important}"},"hrblock.com":{j:"5"},"jomy.com":{s:"#jomy-header-dialog-cookie-consent{display:none !important}"},"crossfit.com":{s:'#app ~ #modal,body.games > div[style*="fixed"]{display:none !important}'},"analog.com":{j:"5"},"mz.gov.pl":{s:".popup-bg{display:none !important}"},"n11.com":{s:".warningAlert{display:none !important}"},"fc2.com":{s:'body > div[style=""]{display:none !important}'},"wso2.com":{s:".cGDPR{display:none !important}"},"mallorca312.com":{c:"2"},"boticas23.com":{c:"2"},"crex24.com":{s:'div[class*="cookies_block"]{display:none !important}'},"taskmanagement24.com":{s:"#cookiesBlock{display:none !important}"},"thezoereport.com":{s:'body > div > div[class*=" "]{display:none !important}'},"jumbo.com":{s:".jum-cookie-message{display:none !important}"},"labvolution.de":{s:".user-notes-notification{display:none !important}"},"nfs.as":{c:"65"},"szybko.pl":{c:"65"},"lafrancaise-am-partenaires.com":{c:"65"},"guess.eu":{c:"65"},"familycarebadanti.it":{c:"65"},"lostintheusa.fr":{c:"65"},"startnext.com":{c:"65"},"domeble.com":{c:"65"},"ilovepdf.com":{c:"65"},"nautic-way.com":{c:"65"},"mygon.com":{c:"65"},"toradex.com":{c:"65"},"iloveimg.com":{c:"65"},"mimanchitu.it":{c:"65"},"broadnet.no":{c:"65"},"kundalini.it":{c:"65"},"szybkopraca.pl":{c:"65"},"homenet.no":{c:"65"},"tellshell.shell.com":{c:"65"},"sotec-consulting.com":{c:"33"},"stodola.pl":{c:"33"},"wakelet.com":{j:"5"},"r-studio.com":{s:"#pp-info{display:none !important}"},"cheapsslsecurity.com":{s:".popuphome{display:none !important}"},"notariat-schoeffmann.at":{c:"7"},"wallpaperup.com":{j:"6"},"nimbusweb.me":{s:".ncp1-message{display:none !important}"},"brieffreund-gesucht.de":{c:"47"},"vouchers.dailyselect.co.uk":{c:"47"},"e-codepromo.fr":{c:"47"},"emezeta.com":{c:"47"},"explicite.info":{c:"47"},"domuswire.com":{c:"47"},"mieszko.pl":{c:"47"},"spectrumled.pl":{c:"47"},"portal.dsv.com":{c:"47"},"boxtal.com":{c:"47"},"bka.de":{c:"47"},"karmy.com.pl":{c:"47"},"prevac.eu":{c:"47"},"bmjv.de":{c:"47"},"antyweb.pl":{j:"6"},"intact-batterien.de":{s:".notes{display:none !important}"},"atticadps.gr":{c:"2"},"learnosm.org":{s:"#optout-form{display:none !important}"},"lexika.hu":{c:"2"},"trucoswindows.com":{s:".modalCookies{display:none !important}"},"fmstream.org":{s:"#cookieDiv{display:none !important}"},"pepperworldhotshop.com":{s:"#OM-popups-container{display:none !important}"},"mon-horoscope-du-jour.com":{s:"#rgpd{display:none !important}"},"aldi-blumen.de":{j:"5"},"archief.amsterdam":{j:"6"},"blanco-germany.com":{s:".privacyTop{display:none !important}"},"smtvsanmarino.sm":{s:".privacy-top{display:none !important}"},"fidelidade.pt":{c:"2"},"plume.com":{s:'#root > div[class*="GDPR"]{display:none !important}'},"versobooks.com":{c:"72"},"giz.berlin":{j:"5"},"sadzawka.pl":{c:"3"},"jemogfix.dk":{c:"3"},"lawebdelprogramador.com":{c:"3"},"m4sport.hu":{c:"3"},"naturo.pl":{c:"3"},"nimbus-lighting.com":{c:"3"},"supernet.hr":{c:"3"},"wypad.com.pl":{c:"3"},"sklep.zielonyfront.pl":{c:"3"},"yesgolive.com":{c:"5"},"megawrzuta.pl":{s:".slickModal.isActive,.notification{display:none !important}"},"zaplo.dk":{c:"36"},"supremecard.se":{c:"36"},"electan.com":{c:"5"},"denic.de":{c:"36"},"agendapompierului.ro":{s:"#notifications{display:none !important}"},"pelit.fi":{c:"36"},"puregym.com":{c:"36"},"mymicroinvest.com":{c:"36"},"brandalley.co.uk":{c:"36"},"der-audio-verlag.de":{c:"5"},"beko.com":{s:".sayfaIcDiv > .row300{display:none !important}"},"altaprofits.com":{c:"5"},"aujourdhui.com":{c:"5"},"checkpoint.com":{c:"5"},"cm.be":{s:".new-notification{display:none !important}"},"bk.com":{j:"5"},"gla.ac.uk":{s:"#consent,#editconsent{display:none !important}"},"eyeonspain.com":{c:"68"},"dsm.com":{c:"68"},"1mot.net":{c:"68"},"bytom.com.pl":{s:"byt-cookie-law-info{display:none !important}"},"qsrinternational.com":{c:"53"},"cypruspolicenews.com":{s:".modal{display:none !important}"},"lyricstraining.com":{j:"5"},"infotrafic.com":{s:"app-snack-bar{display:none !important}"},"lifemiles.com":{s:'div[class*="CookiesBrowserAlert"]{display:none !important}'},"wallpaperdirect.com":{s:"footer ~ .fixed-bottom{display:none !important}"},"anzdoc.com":{s:"#ANZDOCCOM_cookie_box{display:none !important}"},"shootingtimes.com":{j:"5"},"gunsandammo.com":{j:"5"},"wikieventi.it":{s:"#corpo > div:not([id]){display:none !important}"},"pizzacasa.hu":{c:"3"},"vacancesbleues.fr":{s:".vb-cnil--banner{display:none !important}"},"revenue.ie":{s:".darker{display:none !important}"},"drupal.org":{s:"#drupalorg-crosssite-gdpr{display:none !important}"},"gosu.ai":{s:"gosu-notification{display:none !important}"},"coinsquare.com":{s:"#body ~ div{display:none !important}"},"mapy.geoportal.gov.pl":{j:"5"},"starmoney.de":{s:".footer-banner-wrap{display:none !important}"},"prudential.co.za":{s:".investor-type-box .cookie-policy-text{display:none !important}"},"lhotellerie-restauration.fr":{s:"#lhr-cookie{display:none !important}"},"bravotv.com":{c:"53"},"portalspozywczy.pl":{j:"5"},"marseille.fr":{s:'#app > div > div[style*="fixed"] > div > div[role="alertdialog"]{display:none !important}'},"mallorca-wandern-trekking.com":{s:"#iwcookies{display:none !important}"},"kuebler-hallenheizungen.de":{s:"#consent_info{display:none !important}"},"ruhrbarone.de":{c:"3"},"brfares.com":{c:"16"},"about.clasohlson.com":{c:"65"},"ituudised.ee":{s:'div[class*="CookieBar"]{display:none !important}'},"add0n.com":{c:"3"},"mayflower.org.uk":{s:".bottomBanner{display:none !important}"},"transparency.org":{s:".mk-c-modal{display:none !important}"},"printn1.ru":{s:"#info-bott-message{display:none !important}"},"hautesavoiexperience.fr":{s:"#globalWarning{display:none !important}"},"mckp.uj.edu.pl":{s:"#cookie_filter{display:none !important}"},"kiddle.co":{j:"5"},"programyzadarmo.net.pl":{s:".notice--primary{display:none !important}"},"mcdonalds.be":{j:"5"},"qpony.pl":{s:".rodo-wrapper{display:none !important}"},"sklep.polberis.pl":{c:"3"},"miliboo.ch":{s:".m-milibooCookie{display:none !important}"},"westjet.com":{s:".wj-header-usercookies{display:none !important}"},"projects.newforma.com":{c:"72"},"winstar.com.tw":{s:".cookie-sec{display:none !important}"},"homebrewing.pl":{s:".rodo-popupbox{display:none !important}"},"pilz.com":{c:"3"},"patchstorage.com":{s:'body > div[style*="fixed"]{display:none !important}'},"jastrzebieonline.pl":{s:"#rodo_popup{display:none !important}"},"aerobilet.ru":{s:"#dialog.is-fixed-box{display:none !important}"},"synerghetic.net":{s:".tracking-modal{display:none !important}"},"livrariaalfarrabista.com":{s:"#cook{display:none !important}"},"eb2b.com.pl":{s:"#footer ~ .x-css-shadow,#footer ~ .x-window{display:none !important}"},"freebooksummary.com":{s:".header-banner{display:none !important}"},"motocms.com":{s:".cookie_block{display:none !important}"},"snowmagazine.com":{s:"#mixcookies{display:none !important}"},"ivi.tv":{s:".lowest-teaser{display:none !important}"},"aze.com.pl":{c:"3"},"zorg-en-ict.nl":{j:"5"},"mircscripts.net":{s:"#corner{display:none !important}"},"planner5d.com":{s:"#modal-cookies-policy{display:none !important}"},"netology.ru":{s:'#app > div > div[class*="cookies"]{display:none !important}'},"md5hashing.net":{s:".pp-footer{display:none !important}"},"lucasentertainment.com":{c:"36"},"naklejkomania.eu":{s:"#tlo_cookie{display:none !important}"},"technoarena.bg":{s:".bottom-freezed-bar{display:none !important}"},"flanco.ro":{s:"#cc-wrapper{display:none !important}"},"bogijn.nl":{s:"#cc-wrapper{display:none !important}"},"optoma.com":{s:"#optomaCookieWrap{display:none !important}"},"sfr.re":{s:"body > .cc{display:none !important}"},"cryptohopper.com":{s:".notifyjs-consent-base{display:none !important}"},"decalgirl.com":{s:".cookieBubble{display:none !important}"},"preferred411.com":{s:".toasterCookie{display:none !important}"},"desmo-racing.com":{s:'body > div[class*="cookies"]{display:none !important}'},"idw-online.de":{s:"#idwcookie{display:none !important}"},"aktionen.payback.de":{c:"36"},"vizrt.com":{s:'div[data-module="CookieBanner"]{display:none !important}'},"badtaste.it":{s:".premium-float-footer{display:none !important}"},"weblium.com":{s:".weblium-notify{display:none !important}"},"taboola.com":{s:"#tbp-consent{display:none !important}"},"bauder.de":{j:"5"},"hs-wismar.de":{s:".hswBannerOverlay{display:none !important}"},"mousqueton.eu":{s:"cookie{display:none !important}"},"hanos.be":{j:"5"},"dinstation.dk":{s:'#root > div > div > div[style*="fixed"]{display:none !important}'},"hitachiaircon.pl":{s:".cookies-modal{display:none !important}"},"webmail.unity-mail.de":{c:"53"},"ipgphotonics.com":{s:".alert-box{display:none !important}"},"worldbookday.com":{s:".section--alert-panel{display:none !important}"},"surplus-lemarsouin.com":{j:"5"},"oetztaler-radmarathon.com":{s:'div[class*="CookieAlert"]{display:none !important}'},"esea.net":{j:"6"},"ridikul.hu":{c:"3"},"thesting.com":{s:'div[class*="CookieNotification"]{display:none !important}'},"plugshare.com":{c:"3"},"hollandse-hoogte.nl":{s:"#ctr-cookies{display:none !important}"},"slatersplastikard.com":{c:"2"},"tgp.com.ph":{s:".section__consent{display:none !important}"},"reimmaschine.de":{c:"3"},"clo3d.com":{c:"72"},"hankook-promotion.de":{s:"#privacy_layer{display:none !important}"},"ostrzegamy.online":{j:"5"},"cheeca.com":{s:"#hebs-consent{display:none !important}"},"teramind.co":{s:"#teramind_cookies_message{display:none !important}"},"gn-online.de":{s:"#gn_maxlayer{display:none !important}"},"mustangandfords.com":{s:"#mod-banned-users-popup{display:none !important}body{overflow:visible !important}"},"thetranet.fr":{s:".TelerikModalOverlay,#RadWindowWrapper_ctl00_CPH1_RdWRgpd{display:none !important}"},"atlasruraldegrancanaria.com":{c:"2"},"spacebrowser.io":{s:"#overlay-wrapper{display:none !important}"},"regio15.nl":{s:'body > div[class*="app"] > div[class*="popup"]{display:none !important}'},"worldarchitecture.org":{j:"5"},"azartgaming6u.com":{s:".sidebar-cookie{display:none !important}"},"bcc.nl":{j:"5"},"wufoo.com":{s:"#wufoo-privacy-banner{display:none !important}"},"enviolo.com":{s:"#app > div > main ~ div:not([data-reactid]){display:none !important}"},"fanlink.to":{s:".link-terms{display:none !important}"},"pz.gov.pl":{s:"#gdprPopup{display:none !important}"},"cebit.com.pl":{c:"2"},"pna.ro":{s:".ui-sidebar.ui-widget{display:none !important}"},"sensorsmag.com":{s:'body > div[id*="pronto"]{display:none !important}'},"icims.com":{s:"#multy-lang-betanotifier{display:none !important}"},"bynco.com":{j:"5"},"przypinka.pl":{c:"3"},"holmesplace.com":{j:"5"},"cfd.dk":{s:"#cn_footerSlideContainer{display:none !important}"},"nomenclator.org":{s:"#barrack{display:none !important}"},"allegorithmic.com":{s:"#root > div > div > .ui.container > .ui.inverted.segment{display:none !important}"},"klickmal.at":{j:"5"},"meteored.com.ar":{c:"97"},"ilmeteo.net":{c:"97"},"tempo.pt":{c:"97"},"antena3.ro":{c:"97"},"quag.com":{c:"97"},"meteored.pe":{c:"97"},"yourweather.co.uk":{c:"97"},"klei.com":{c:"97"},"bit-tech.net":{c:"97"},"litscape.com":{c:"97"},"amazeta.com":{c:"97"},"filmnow.ro":{c:"97"},"internetspeedtracker.com":{c:"97"},"branah.com":{c:"97"},"boredbutton.com":{c:"97"},"datalounge.com":{c:"97"},"meteored.mx":{c:"97"},"kleientertainment.com":{c:"97"},"t2informatik.de":{s:"#sidebar-divibar{display:none !important}"},"quirion.de":{c:"46"},"tierisch-wohnen.de":{s:".m-cc{display:none !important}"},"idopontfoglalo.kh.gov.hu":{c:"3"},"finect.com":{s:'div[class*="CookiesPartials"]{display:none !important}'},"datasystem.ru":{s:".specialAlert{display:none !important}"},"cmore.se":{j:"6"},"iceland.co.uk":{s:".policy-dialog{display:none !important}"},"karum.pl":{c:"3"},"tunnelbear.com":{s:".banner-wrap{display:none !important}"},"tygodniksiedlecki.com":{s:".rodo-bg{display:none !important}"},"private.com":{c:"2"},"siemoneit-racing.de":{s:"#getnoticeData{display:none !important}"},"moneymaven.io":{s:".consent-ui{display:none !important}"},"3t.no":{c:"5"},"means.media":{s:'section[class*="Gdpr"]{display:none !important}'},"lrt.lt":{s:".consent-block{display:none !important}"},"herdt-campus.de":{s:"body > .container-fluid.bg-white > .container{display:none !important}"},"omnimoto.it":{s:".m1-footer-messages{display:none !important}"},"superelectronic2000.ro":{s:"#lbMain,#lbOverlay{display:none !important}"},"mobiquity.amsterdam":{s:'div[class*="CookieWarning"]{display:none !important}'},"zamowienia.gov.pl":{s:"#footer ~ .x-css-shadow,#footer ~ .x-window{display:none !important}"},"unisa.edu.au":{s:".__gdpr-container{display:none !important}"},"gruenderservice.at":{j:"5"},"gamesaver.pl":{c:"3"},"tymit.co.uk":{s:".main_cookie_view{display:none !important}"},"flinkscykel.se":{c:"36"},"lrytas.lt":{s:'#lrytas-fe-root > div[class*="root"]{display:none !important}'},"mercedes-benz.dk":{s:".dim{display:none !important}"},"thewirecutter.com":{j:"5"},"detecon.com":{s:'div[class*="CookieNote"]{display:none !important}'},"wealthx.com":{s:"#wx-gdpr-message-box{display:none !important}"},"hypovbg.at":{s:".hlv-cookie{display:none !important}"},"forin.gr":{s:".cc-dialog{display:none !important}"},"zemskidki.ru":{j:"5"},"tuz.pl":{s:"#for-cookies-container{display:none !important}"},"thriveglobal.com":{s:'div[class*="notificationBar"]{display:none !important}'},"sauber-waldpreis.de":{c:"46"},"mesosphere.com":{s:".banner-alert{display:none !important}"},"iota.org":{s:"#__next > main > div:not(.page){display:none !important}"},"audi.co.uk":{j:"5"},"rideshimano.com":{c:"67"},"choosist.com":{j:"6"},"schweinfurt.de":{s:"#chint{display:none !important}"},"watchadvisor.com":{j:"5"},"camh.ca":{s:".alert-container{display:none !important}"},"liberal-international.org":{s:".footer-message{display:none !important}"},"cubbit.io":{s:'div[class*="StyledCookie"]{display:none !important}'},"eanuncios.com":{s:".ue-accept-bg{display:none !important}"},"getgrover.com":{s:".snackbar-enter-done{display:none !important}"},"grover.com":{s:".snackbar-enter-done{display:none !important}"},"deas.dk":{c:"3"},"mtglotusvalley.com":{j:"5"},"ip-info.org":{s:"#divbottom01{display:none !important}"},"noventis.cz":{s:'body > div[id*="object"]{display:none !important}'},"elements-show.pl":{s:"#popup_container{display:none !important}"},"51degrees.com":{s:"#pop-wrapper{display:none !important}"},"jpost.com":{s:'body > div[class*="ADORIC"] > div[style*="111"]{display:none !important}'},"apracas.pt":{c:"7"},"ccs.utc.com":{c:"3"},"powietrze.katowice.wios.gov.pl":{s:".a-footer{display:none !important}"},"depo-diy.lt":{s:".depo-cookies{display:none !important}"},"nettbuss.se":{s:".header__banner{display:none !important}"},"florsheim.eu":{s:".cookiesMask{display:none !important}"},"canyon.com":{j:"5"},"talparadio.nl":{j:"5"},"doctolib.fr":{s:".dl-drawer-bottom{display:none !important}"},"which.co.uk":{s:'body > div[data-which-id="eprivacy-banner"]{display:none !important}'},"fssprus.ru":{s:".user-data-fixed{display:none !important}"},"marathonfitness.de":{s:".wpfront-fixed{display:none !important}"},"toyota-media.de":{s:"#footer-box{display:none !important}"},"rimowa.com":{s:'.b-modal,.b-modal ~ div[class*="privacy"]{display:none !important}'},"jigsawplanet.com":{s:".ts-msg{display:none !important}"},"sapphiretech.com":{s:'div[data-component-class*="GdprWidget"]{display:none !important}'},"otodom.pl":{s:"#root > footer ~ div{display:none !important}"},"aeroport.fr":{s:"#cookiesfr{display:none !important}"},"komorkomania.pl":{j:"5"},"geoportal-bw.de":{s:"#gdibw-cookie{display:none !important}"},"autoscuolacatelli.it":{s:"#d_cook{display:none !important}"},"bigbigchannel.com.hk":{j:"5"},"scubaland.fr":{s:'body > div[class^="cookies"]{display:none !important}'},"icl-group.de":{s:"#drkf5_overlay{display:none !important}"},"somatex.com":{s:".notification-system{display:none !important}"},"kranten.com":{s:"#whatever{display:none !important}"},"lifeworks.com":{s:'div[class*="cookie-law-module"]{display:none !important}'},"asap-gmbh.de":{c:"3"},"zev-energie.de":{s:"#bauch-binder{display:none !important}"},"neoness.fr":{c:"2"},"rockstarenergy.com":{c:"6"},"mp4bolt.hu":{s:"body > .ct{display:none !important}"},"ps.be":{j:"5"},"madison.nl":{s:".avg-toaster{display:none !important}"},"trachten.de":{s:'.page-wrap > div[class*="cookie"]{display:none !important}'},"man-es.com":{s:"#cookieDiv{display:none !important}"},"soesterberg.nu":{j:"5"},"internationale-computerspielesammlung.de":{s:".mod_lafli_notification_bar{display:none !important}"},"yousee.dk":{s:'.app > div[data-radium] > div[data-radium][style*="fixed"]{display:none !important}'},"go4convert.com":{c:"6"},"ghostlyhaks.com":{c:"27"},"anyfin.com":{s:'div[class*="CookieDisclaimer"]{display:none !important}'},"artscolumbia.org":{s:".header-banner{display:none !important}"},"erste-hilfe-fuer-kinder.de":{s:".txBsdCookie{display:none !important}"},"fluidui.com":{j:"5"},"fotowien.at":{j:"5"},"usefyi.com":{j:"5"},"klugo.de":{s:'div[class*="CookieHint"]{display:none !important}'},"billigflieger.de":{s:"#Notifications{display:none !important}"},"viennaticketoffice.com":{s:"#hinweis{display:none !important}"},"gewinnspiele-markt.de":{s:"#cono{display:none !important}"},"happy-spots.de":{s:"#cono{display:none !important}"},"ezys.lt":{j:"6"},"devon.gov.uk":{c:"3"},"sdamgia.ru":{s:'body > div[style*="silver"]{display:none !important}'},"axway.com":{s:'div[id*="cookiePolicyWarning"]{display:none !important}'},"questdiagnostics.com":{s:"#bodycontent > table{display:none !important}"},"athenesaccueil.com":{c:"7"},"subzero-wolf.com":{s:".footer-announcement{display:none !important}"},"soakandsleep.com":{s:"#wagento-cp-wrap{display:none !important}"},"reimageplus.com":{j:"6"},"saxion.edu":{j:"5"},"patient.info":{j:"5"},"atlants.lv":{s:".atlants_cook_wrapper{display:none !important}"},"mcvities.co.uk":{c:"3"},"bca.uk.com":{c:"3"},"shueisha.co.jp":{s:'#app > div > div[class*="styles"] > div[class*="yellow"],#app > div > div[class*="styles"] > div[class*="yellow"] ~ *{display:none !important}'},"kalenderwoche.de":{j:"6"},"msasafety.com":{s:".region-alert-wrapper{display:none !important}"},"royalora.hu":{s:"#cc-holder{display:none !important}"},"milanoo.com":{s:"#remember_cookie{display:none !important}"},"apacer.com":{s:"#cookie_lightbox{display:none !important}"},"linfodurable.fr":{c:"3"},"lejournaldesarts.fr":{c:"3"},"any.run":{c:"2"},"vifa-recht.de":{s:"#tracking-info{display:none !important}"},"staatsbibliothek-berlin.de":{s:"#tracking-info{display:none !important}"},"kotimikro.fi":{s:".afubar-top{display:none !important}"},"treated.com":{s:"#gdprTreated{display:none !important}"},"blog.bankinter.com":{c:"2"},"beinsports.com":{s:".app-container > div:not(.app-content){display:none !important}"},"gizmodo.com":{s:"#privacypolicy .privacy-box{display:none !important}"},"falriver.co.uk":{c:"97"},"immo24.direct":{s:".uk-first-column > .uk-text-center ~ .uk-panel{display:none !important}"},"radarvirtuel.com":{c:"22"},"bankhapoalim.co.il":{s:".cookieClass{display:none !important}"},"imobiliare.ro":{j:"5"},"manufaktur-bavaria.de":{c:"4"},"prestigeelectriccar.com":{s:"#acept_todo{display:none !important}"},"poolia.se":{j:"6"},"esn-tt.de":{s:"#CookieInformations{display:none !important}"},"iobit.com":{s:".float-bar.active{display:none !important}"},"boomlibrary.com":{j:"5"},"suncorp.com.au":{s:".sg-Box--neutral.one-pixel-margin-bottom{display:none !important}"},"ca-mobile.com":{s:"#bannerDiv{display:none !important}"},"azoresgetaways.com":{j:"5"},"researchgate.net":{j:"6"},"bango.com":{s:'#__next > div > div > div > div[style*="height"]{display:none !important}'},"tl.net":{c:"7"},"lalena.ro":{s:"#consent-ui{display:none !important}"},"optus.com.au":{s:".ux-header-conformation{display:none !important}"},"abv.bg":{s:"#abv-GDPR-frame{display:none !important}"},"galeria-kaufhof.de":{s:'react-root[data-component="PRIVACY_SETTINGS"]{display:none !important}'},"axa-corporatesolutions.com":{j:"5"},"collegetimes.com":{s:'body > div[style*="transp"]{display:none !important}'},"data-modul.com":{s:".js_consent{display:none !important}"},"biogo.pl":{c:"3"},"festicket.com":{s:'#root > main > div[class*="styles"]{display:none !important}'},"fitmart.de":{s:"#n_pop_overlayer,#n_cookie-popup{display:none !important}"},"eltim.eu":{c:"16"},"luga.ch":{s:"#cookiegdpr{display:none !important}"},"buoyant.io":{s:"#apoptin{display:none !important}"},"ausschreibungen-deutschland.de":{s:"#am_pop-up{display:none !important}"},"versus.com":{s:'div[class*="cookiebanner"]{display:none !important}'},"poperblocker.com":{s:"body > .dialog-widget{display:none !important}"},"lasillavacia.com":{s:".cuadro{display:none !important}"},"ericom.com":{c:"3"},"gutscheinsammler.de":{s:".gs-privacy-policy-widget{display:none !important}"},"eigene-ip.de":{j:"5"},"yithlibrary.com":{c:"46"},"teamliquid.com":{c:"8"},"buoyhealth.com":{s:"#___gatsby #solutions ~ div,#search > section ~ div[class]{display:none !important}"},"american-historama.org":{s:"#outer-consent{display:none !important}"},"moderne-landwirtschaft.de":{j:"5"},"westmarine.com":{s:".privacy-disclaimer-wrapper{display:none !important}"},"tangent.co.uk":{s:'div[class*="CookieMsg"]{display:none !important}'},"realassetmgt.co.uk":{c:"27"},"markertek.com":{s:"#Privacy_Popup{display:none !important}"},"shore.com":{s:"#root > div:first-child{display:none !important}"},"cindicator.com":{j:"6"},"historysearch.com":{s:".hs-state-left{display:none !important}"},"opensport.es":{c:"2"},"drjacobs-shop.de":{j:"5"},"sqlgate.com":{s:".popup.download-page{display:none !important}"},"zwickautourist.de":{s:"#bauch-binder{display:none !important}"},"archimag.com":{j:"5"},"insideevs.com":{s:".m1-footer-messages{display:none !important}"},"foramax.hu":{s:"body > .ct,body > .cc{display:none !important}"},"coin360.com":{s:".Popup{display:none !important}"},"greentechmedia.com":{s:'body > div[style*="transp"]{display:none !important}'},"the-beam.com":{s:".privacy-policy{display:none !important}"},"hop-on-hop-off-bus.com":{s:".ckPol{display:none !important}"},"topclassactions.com":{s:".CampaignType--floating{display:none !important}"},"renasterea.ro":{s:".spu-bg,.spu-box{display:none !important}"},"informatica.com":{s:".tms-fixed-footer{display:none !important}"},"tixr.com":{j:"5"},"bd.com":{c:"46"},"petdrugsonline.co.uk":{s:"#checkout-loader,.loading-mask{display:none !important}"},"puydufou.com":{j:"5"},"almirall.de":{s:".popupCookies{display:none !important}"},"nationallighting.co.uk":{s:".nlcookies-bottom{display:none !important}"},"alanboswell.com":{s:".ab_notification{display:none !important}"},"bsi-software.com":{s:".we-love-cookies{display:none !important}"},"chatra.io":{s:'div[id^="yeps"]{display:none !important}'},"yeps.io":{s:'div[id^="yeps"]{display:none !important}'},"samsaraubud.com":{s:"#bottom-fixed{display:none !important}"},"studymoose.com":{s:".header-banner{display:none !important}"},"praca.gov.pl":{s:"#klauzula-background{display:none !important}"},"betterhelp.com":{j:"6"},"cheapoair.com":{s:"#gdprWrap{display:none !important}"},"kokoroe.fr":{j:"5"},"dayz.xam.nu":{c:"16"},"gbaweather.net":{c:"53"},"admagazine.ru":{s:".modal--bottom-right.bg-color-dark{display:none !important}"},"vitacost.com":{s:"#cookieJar{display:none !important}"},"draftium.com":{s:"#cta ~ div,#cta ~ section{display:none !important}"},"cesifo-group.de":{s:"#cob{display:none !important}"},"badlion.net":{s:"#root > .Flex > .__react_component_tooltip ~ .Flex ~ .Block{display:none !important}"},"pitax.pl":{c:"3"},"skoda-auto.com":{s:"#MessageArea{display:none !important}"},"moovielive.com":{s:".sticky_footer{display:none !important}"},"otr-max.de":{s:'body > div[style*="scroll"]{display:none !important}'},"dogma-nekretnine.com":{c:"88"},"artuk.org":{s:"#top-notice{display:none !important}"},"bladi.info":{c:"19"},"bauhaus-nl.com":{c:"19"},"cgtrader.com":{c:"19"},"dublininquirer.com":{c:"19"},"exposition-osiris.com":{c:"19"},"boundingbox.klokantech.com":{c:"19"},"motorvision.tv":{c:"19"},"outsideonline.com":{c:"19"},"theatrechampselysees.fr":{c:"19"},"tassimo.at":{s:"#overlay-off-banner{display:none !important}"},"homelyfe.com":{s:"#root > div > div > .center-horizontal:not(.undefined){display:none !important}"},"passbase.com":{s:"#gdpr-modal{display:none !important}"},"milliescookies.com":{s:"privacy-settings{display:none !important}"},"gtarcade.com":{s:"#agreement-box{display:none !important}"},"tapperuse.nl":{j:"5"},"wabtec.com":{s:".forceCommunityVisualforcePage{display:none !important}"},"startupnamecheck.com":{s:".snotify-confirm{display:none !important}"},"ostsee.de":{c:"3"},"naslovi.net":{c:"97"},"fideliti.co.uk":{j:"5"},"spaste.com":{s:"#resultPolicyDatap{display:none !important}"},"dellmont.com":{j:"5"},"norbar.com":{c:"36"},"alarmanlagen-osnabrueck.de":{s:"#cookieclaim{display:none !important}"},"guggenheim.org":{s:".guggen-consent{display:none !important}"},"hrsonline.org":{c:"9"},"diconium.com":{s:".diconium-site-cookie{display:none !important}"},"di.fm":{s:"#terms-message-region{display:none !important}"},"asix.com.tw":{s:"#PrivacyNotes{display:none !important}"},"warehouse2.de":{c:"4"},"blueflag.global":{c:"39"},"kontaktbazar.at":{j:"6"},"hoernews.de":{j:"6"},"myswitzerland.com":{s:"#notification_alert{display:none !important}"},"ltsh.de":{s:".mm-page > .header{display:none !important}"},"lagenhetsbyte.se":{s:".snackbar{display:none !important}"},"gelmar.co.za":{j:"5"},"lechia.pl":{s:"#rodo-wrapper{display:none !important}"},"fotoc.dk":{j:"6"},"stopad.io":{s:".js-gdpr-modal{display:none !important}"},"mediaklikk.hu":{s:".resultCookie{display:none !important}"},"talkshop.live":{s:'.notifications-wrapper ~ div[style*="black"]{display:none !important}'},"marcotec-shop.de":{c:"3"},"datev-community.de":{s:"#datev-cookie-disclaimer{display:none !important}"},"hagerzplan.de":{j:"5"},"strefakierowcy.pl":{s:"#notice_bar{display:none !important}"},"riderarmourmoto.com":{s:".widget-footer{display:none !important}"},"klopfers-web.de":{s:"#kwcookieconsent{display:none !important}"},"itt.bg":{c:"16"},"etsglobal.org":{s:"#ets_popup_cookie_modal{display:none !important}"},"bagira.bg":{c:"16"},"mein-schauinsland.de":{s:".popup-top-header{display:none !important}"},"swann-morton.com":{s:"#easyNotification{display:none !important}"},"brcauto.eu":{s:".cookies_law{display:none !important}"},"arhivanalitika.hr":{c:"3"},"boilerguide.co.uk":{s:".consent-bar{display:none !important}"},"atro-provita.de":{j:"6"},"cm-fima.com":{c:"3"},"polskieradio24.pl":{s:".rodo-modal{display:none !important}"},"fretlink.com":{c:"2"},"kuehlschrank.com":{s:".legalAdvice{display:none !important}"},"wisemushroom.org":{s:"#site_notice{display:none !important}"},"parc-marais-poitevin.fr":{s:"#aci{display:none !important}"},"seasonpros.com":{c:"2"},"mortgageafterlife.com":{s:"#lawdiv{display:none !important}"},"sklep.wodbud.com.pl":{c:"3"},"gezondeideetjes.nl":{j:"5"},"runland.cz":{s:"#user-info-banner{display:none !important}"},"ipc.be":{j:"5"},"ernieball.com":{c:"97"},"kombiverkehr.de":{s:"#ntcc{display:none !important}"},"unicheck.com":{j:"6"},"debex-potsdam.de":{c:"3"},"4clik.com":{s:".kHolder{display:none !important}"},"strikermanager.com":{s:"body > #ue{display:none !important}"},"mic.com":{s:'body > div > div[class*=" "]{display:none !important}'},"celly.com":{s:'app-footer ~ div[style*="fixed"]{display:none !important}'},"wellcard.cc":{c:"3"},"stadtreiniger.de":{s:".note{display:none !important}"},"gefran.com":{j:"5"},"shop4mama.nl":{j:"5"},"steviaproducts.be":{j:"5"},"pcdiscounter.eu":{j:"5"},"framar.bg":{c:"16"},"giraffetongueorchestra.com":{c:"16"},"plasico.bg":{c:"16"},"bostools.nl":{c:"12"},"doctor-telephone.fr":{c:"12"},"mp.pl":{c:"12"},"safedns.com":{c:"12"},"evolutrans.fr":{c:"2"},"weforum.org":{j:"5"},"fonds-im-fokus.de":{s:".footer #slider{display:none !important}"},"sugarsync.com":{s:"#agreementBar{display:none !important}"},"digitale-schule.nrw":{s:".bottom-sheet,.bottom-sheet ~ .modal-overlay{display:none !important}"},"novema-nova.hr":{c:"3"},"instock.nl":{j:"5"},"treinenweb.nl":{s:"#cb{display:none !important}"},"meteoblue.com":{j:"6"},"aia.gr":{j:"5"},"finreport.sk":{s:'div[id*="CookieInfoWrapper"]{display:none !important}'},"tff.se":{s:".component-cookie{display:none !important}"},"agria.se":{s:'body > div > div[class*="Collapse"]{display:none !important}'},"unideb.hu":{s:"#unideb-gdpr-block{display:none !important}"},"reise-zikaden.de":{s:"#ConsentLayerWrapper{display:none !important}"},"mathematiques-lycee.com":{c:"7"},"racezone.pl":{s:"#sky-cookies{display:none !important}"},"handy-games.com":{s:".bugme{display:none !important}"},"cquand.fr":{s:"footer > div{display:none !important}"},"onetravel.com":{s:".gdpr-wraper{display:none !important}"},"agenttravel.es":{c:"2"},"maps.arcgis.com":{j:"5"},"yorn.net":{s:"#main-nudge{display:none !important}"},"magentatv.at":{s:".notifications-manager{display:none !important}"},"zone.msn.com":{s:"#cdmDiv{display:none !important}"},"ucsusa.org":{s:"#ucs-cookie-notice{display:none !important}"},"limscave.com":{c:"4"},"apogeum.com.pl":{c:"3"},"textbroker.de":{s:".tb-cookie{display:none !important}"},"tnt-click.it":{j:"5"},"welcomemrbaby.com":{j:"5"},"bremen.de":{s:"body > div.js-vue-app,body > #privacy-popup{display:none !important}"},"stalderag.ch":{c:"2"},"yamahawaverunners.com":{s:".modal--popover.us-popover{display:none !important}"},"tiger.nl":{j:"5"},"gberardi.com":{j:"6"},"wirexapp.com":{s:"wx-cookie-policy-notification{display:none !important}"},"electricireland.ie":{s:"#eiCookie{display:none !important}"},"ockovacicentrum.cz":{s:"#notificationBox{display:none !important}"},"market24hclock.com":{s:"#cookiespp{display:none !important}"},"ediclube.com":{c:"2"},"vietnamairlines.com":{j:"5"},"amnesty.nl":{s:"#cw{display:none !important}"},"globelink.co.uk":{s:".gl_cookies{display:none !important}"},"gebag.de":{c:"3"},"b12.io":{c:"53"},"make-it-in-germany.it":{s:"#nagscreen{display:none !important}"},"solidwoodendoors.com":{s:"#myModalCookies,.modal-backdrop{display:none !important}"},"ausschreibungen-oesterreich.at":{s:"#am_pop-up{display:none !important}"},"lykke.com":{s:'main ~ div[class*="Banner"]{display:none !important}'},"osa.org":{s:".maintenance-popup{display:none !important}"},"saevioapps.com":{s:"div[data-cookie-path]{display:none !important}"},"choiceandmedication.org":{j:"6"},"fiaworldrallycross.com":{j:"6"},"michael-martin.de":{s:"#coo_note{display:none !important}"},"finanze.it":{s:"#bannerInfo{display:none !important}"},"arbetsmarknadsnytt.se":{s:"#warning{display:none !important}"},"ornox.fr":{c:"92"},"mbc.net":{s:"#DGPR{display:none !important}"},"pansci.asia":{j:"6"},"swimming.org":{s:".asa-cookie-notification{display:none !important}"},"topsecretrecipes.com":{s:".ui-widget-overlay,.gdpr-terms-popup{display:none !important}"},"slewo.com":{s:".cookie_ack{display:none !important}"},"cherwellsigns.co.uk":{s:"#cookieOut{display:none !important}"},"bmw-hebergement.fr":{s:"#xpr_banner{display:none !important}"},"sveip.no":{s:".kake_wrap{display:none !important}"},"gardets.nu":{s:".cookies-field{display:none !important}"},"windows-love.de":{s:"#wl-cookie-datenschutz-message{display:none !important}"},"lactostop.de":{s:"#datencookie{display:none !important}"},"kita-chinderschloessli.ch":{s:"body > div > div > div[jsname] + div[jsmodel]{display:none !important}"},"business.google.com":{j:"6"},"medicines.org.uk":{s:".privacyouterwrapper{display:none !important}"},"gotokyo.org":{s:"#tmp_local_bar{display:none !important}"},"accobrands.com":{s:".Promotional-corner,.gdpr--popup{display:none !important}"},"meineabgeordneten.at":{s:'#privatBanner h2 ~ div[style*="center"] ~ *{display:none !important}'},"infozona.hr":{s:".popup-overlay{display:none !important}"},"shoestring.de":{s:"#privacyDisclaimer{display:none !important}"},"ritdye.com":{s:'.footer ~ div[class*="peach-300"]{display:none !important}'},"racquetballwarehouse.com":{s:"#data_protection{display:none !important}"},"elegantthemes.com":{s:".et_cookie_consent{display:none !important}"},"kvvks.de":{s:"footer .note{display:none !important}"},"subscribercounter.com":{s:'#app > div > div[class*="ModalContainer"]{display:none !important}'},"gewusst-wo.de":{s:"#permission_request_box{display:none !important}"},"calciomercato.com":{s:"#gdpr-law{display:none !important}"},"globe.com.ph":{c:"35"},"refinitiv.com":{s:".dismissible-banner{display:none !important}"},"gazeo.pl":{s:"#rodo_accept,#cookies_all{display:none !important}"},"gtalfh.com":{c:"46"},"newspaperdirect.com":{s:"#dialog_cookies{display:none !important}"},"oferty-dom.pl":{s:"#dspcookie{display:none !important}"},"selectel.ru":{s:".ui-cookies{display:none !important}"},"nbcsports.com":{s:'#activation-form ~ div[style*="fixed"]{display:none !important}'},"scentre.pl":{c:"16"},"mariobarthtattoo.com":{s:"#POPUPS_WRAPPER{display:none !important}"},"veloenfrance.fr":{j:"5"},"xn--nringslivnorge-0ib.no":{j:"5"},"nextgentel.no":{s:".blocker{display:none !important}"},"parliament.scot":{s:".projects-takeover{display:none !important}"},"flikflak.com":{j:"5"},"crello.com":{s:'div[class*="footerNotification"]{display:none !important}'},"kwantum.nl":{s:".cc-wrapper{display:none !important}"},"carl-walther.de":{s:"#disclaimer-bar{display:none !important}"},"salesforce.com":{s:'.slds-notify_container,.toast-success,div[class*="GlobalBanner__Wrapper"]{display:none !important}'},"dwell.com":{j:"6"},"rpgrealm.nl":{j:"5"},"norma-ammunition.com":{s:".on-screen-messages{display:none !important}"},"pentagon-group.co.uk":{c:"3"},"renault-koenig.de":{s:"#cook{display:none !important}"},"renaultfinanciacion.es":{j:"5"},"dewilgo.de":{c:"27"},"allemagne-romantique.fr":{s:"#myModal{display:none !important}"},"rogerfederer.com":{s:"#data_protection{display:none !important}"},"growthtechnology.com":{s:"#popupbanner{display:none !important}"},"f-secure.com":{s:".fs-consent{display:none !important}"},"meurthe-et-moselle.fr":{j:"5"},"fwg-vg-linz.de":{s:'body > div[style*="fixed"]{display:none !important}'},"smart-digital.at":{s:"#policy-popup{display:none !important}"},"e3expo.com":{j:"5"},"birchbox.es":{s:'div[class*="CookieNotice"]{display:none !important}'},"akasha.org":{s:"#___gatsby > div > div:first-child{display:none !important}"},"rome2rio.com":{s:"#alert-banner{display:none !important}"},"usz.ch":{s:".consentManagement{display:none !important}"},"zbmath.org":{c:"3"},"drkehayov.com":{s:".notice-tou{display:none !important}"},"rossmann.de":{s:"#nagme{display:none !important}"},"ticketingcine.fr":{s:"#ctCookie{display:none !important}"},"saudia.com":{j:"5"},"kaffepaussi.fi":{c:"7"},"aliciagame.com":{s:".region-inner > #block-system-main ~ .block{display:none !important}"},"zkl.hr":{c:"2"},"fullscreen.com":{s:"body > .banner{display:none !important}"},"kube.no":{c:"3"},"creative.com":{s:".ck-notiz{display:none !important}"},"improbable.io":{s:'div[class*="CookieBarstyled"]{display:none !important}'},"binance.je":{j:"5"},"weymuller.fr":{s:"#tracker-warning{display:none !important}"},"nordkurier.de":{s:"#nk-cookie-consent{display:none !important}"},"casadellibro.com":{j:"5"},"ezvizlife.com":{s:".footer ~ .coverShow{display:none !important}"},"pepboys.com":{s:"#ccContainer{display:none !important}"},"online-store.mercedes-benz.de":{j:"5"},"aktion.mercedes-benz.de":{j:"6"},"salesmanago.pl":{c:"9"},"thermostaat.eu":{s:".fancybox-overlay{display:none !important}"},"ricelake.com":{s:"snack-bar-container{display:none !important}"},"ncsc.gov.uk":{s:".pcf-cookie{display:none !important}"},"hirado.hu":{j:"5"},"sapo.ao":{s:".bsu-v2-ntfs{display:none !important}"},"webwinkel.tubantia.nl":{s:".modal__bg{display:none !important}"},"proteum.co.uk":{c:"2"},"saa.nl":{j:"5"},"e-scooter.co":{s:"#gdpr-w,#gdpr-o{display:none !important}"},"xn--ko-roller-z7a.de":{s:"#gdpr-w,#gdpr-o{display:none !important}"},"misterfly.com":{s:"#i-cook{display:none !important}"},"mltracker.co.uk":{j:"5"},"ibeesoft.com":{c:"2"},"typeform.com":{s:'div[class*="CookieWrapper"]{display:none !important}'},"rosewe.com":{s:"#accept_agree{display:none !important}"},"arlingtoncemetery.mil":{c:"77"},"bighorn.no":{c:"16"},"hidive.com":{s:"#siteMsgSlideUpBG{display:none !important}"},"voxi.co.uk":{s:'#root > div[data-reactroot] > div > div[style*="opacity"]{display:none !important}'},"biketech24.de":{s:".cookies_apply{display:none !important}"},"spanishunicorn.com":{s:'.pum[data-popmake*="cookies"]{display:none !important}'},"anydesk.com":{s:"#any-cookieBar{display:none !important}"},"otpportalok.hu":{j:"5"},"radiovlna.sk":{s:".b-cookies{display:none !important}"},"filati.cc":{c:"3"},"sudouest.fr":{s:"#gsoi-cmp{display:none !important}"},"willitclassic.com":{j:"6"},"bienvenue-a-la-ferme.com":{j:"5"},"sakharov-center.ru":{s:"#kuk{display:none !important}"},"dna.fi":{s:"#dna-gdpr-info{display:none !important}"},"truecaller.com":{s:"footer ~ .fixed{display:none !important}"},"wedos.cz":{s:".dialog-message{display:none !important}"},"infovojna.sk":{s:"#gpCookie{display:none !important}"},"camelcamelcamel.com":{s:"#cmp-ui-iframe{display:none !important}"},"criticker.com":{s:"#i_cookies{display:none !important}"},"warka.com.pl":{s:"#rodo_env,.cookies{display:none !important}"},"dialight.com":{c:"19"},"depo.lv":{s:".depo-cookies{display:none !important}"},"2ask.de":{s:"#cadvise_bar{display:none !important}"},"story.tl":{s:'div[class*="CookieConsent"]{display:none !important}'},"rohan.co.uk":{s:"#ccpop{display:none !important}"},"assura.ch":{s:"#__next > div > div[width]{display:none !important}"},"gog.com":{s:'body > div[data-editable="boxCookieNotification"]{display:none !important}'},"lisa.ru":{s:".disclamer{display:none !important}"},"arte.tv":{j:"5"},"a2s.pl":{s:".cookieForm{display:none !important}"},"skanetrafiken.se":{c:"3"},"trendsales.dk":{s:"#main > .inner ~ div[class]{display:none !important}"},"speedof.me":{s:".cc-dialog-pane,.cc-window-banner{display:none !important}.body-margin-top{margin-top:0 !important}"},"thule.com":{j:"5"},"olymp.com":{s:".legal-banner{display:none !important}"},"bergstraesserwinzer.de":{s:".cp-dialog{display:none !important}"},"cip.nl":{j:"5"},"jm.se":{j:"5"},"ovfietsbeschikbaar.nl":{s:"#CookieModal{display:none !important}"},"blackvue.com":{s:".allreadycookie{display:none !important}"},"motofaktor.pl":{j:"5"},"pactcoffee.com":{j:"5"},"kikatek.com":{s:"#Piper-Consent{display:none !important}"},"danishfamilysearch.com":{j:"5"},"intentmedia.net":{s:".IM_cb.IM_show{display:none !important}"},"motoscout24.ch":{s:"main ~ .global-banner{display:none !important}"},"alkam-security.pl":{s:"#spop{display:none !important}"},"carbonite.com":{c:"88"},"wuestenrot.cz":{j:"5"},"cote.co.uk":{s:"#root > div > .fixed{display:none !important}"},"decathlon.com.br":{s:".cookie-policies{display:none !important}"},"decathlon.fr":{s:"#app > .privacy,.rgpd_message,.rgpd_message + .rgpd_box{display:none !important}"},"opusteno.rs":{s:"#conditions-l{display:none !important}"},"erleben-im-alltag.de":{c:"14"},"tus-almena.de":{c:"14"},"tokuweb.de":{c:"14"},"kbaur-gmbh.com":{c:"14"},"gestaltamwerk.de":{c:"14"},"ajs-bw.de":{c:"14"},"medicijnnodig.nu":{j:"5"},"hetweeractueel.nl":{c:"21"},"achteruitkijkspiegel.nl":{c:"21"},"recordplanet.nl":{c:"21"},"fdu.org.ua":{s:"#pd_popup{display:none !important}"},"telehit.com":{s:".Privacy.Telehit{display:none !important}"},"voetbalnederland.nl":{s:'body > div[style*="border"]{display:none !important}'},"walmart.ca":{j:"5"},"pearlizumi-eu.com":{s:".cc_notification{display:none !important}"},"byggshop.se":{j:"6"},"seaheroquest.gr":{s:".tab-cookies{display:none !important}"},"awwapp.com":{s:"#bottom-notification{display:none !important}"},"911tabs.com":{c:"7"},"dieharke.de":{s:"#cookieblack{display:none !important}"},"audiondemand.com":{s:".axs-md-cookie,aod-cookie-consent{display:none !important}"},"lvr.de":{c:"3"},"frankenmarkter.at":{s:".c-window{display:none !important}"},"graco.com":{s:"#alertbox{display:none !important}"},"nyan.ax":{c:"53"},"msr.ch":{s:".msr-cookie-notification{display:none !important}"},"momox-shop.fr":{s:"#cookietroll{display:none !important}"},"rodoviariadooeste.pt":{j:"5"},"hscollective.org":{j:"5"},"eurocirc.org":{s:"#msgBox_error{display:none !important}"},"jax.hr":{c:"88"},"podravski.hr":{s:".dialog-widget{display:none !important}"},"ghetaldus.hr":{c:"2"},"chocolateminecraft.com":{s:"#popup1{display:none !important}"},"hapih.hr":{s:".dialog-widget{display:none !important}"},"reddingo.ch":{c:"35"},"reddingo.com":{c:"35"},"blockstack.org":{j:"6"},"mypolacy.de":{j:"6"},"volksblatt.li":{s:".cookie_rolldown{display:none !important}.main_cookies{position:static !important}.main_cookies .subheader{top:0 !important}"},"morfars.dk":{s:'body > span[style*="transform"]{display:none !important}'},"cruise.jobs":{j:"6"},"swinton.co.uk":{s:"#app > div > header > small{display:none !important}"},"swissict.ch":{s:"#dpcc-wrapper{display:none !important}"},"contarcaracteres.com":{s:".top-header{display:none !important}"},"elsate.com":{j:"5"},"portwell.com.tw":{s:'.ui-dialog[aria-describedby="dialog-confirm"],.ui-widget-overlay{display:none !important}'},"ventilation-system.com":{s:".cookie-wr{display:none !important}"},"dzone.com":{s:'body > div[id^="om-"]{display:none !important}'},"landg.com":{s:"#st_box{display:none !important}"},"waterfordinyourpocket.com":{s:".ntm_optin_popup{display:none !important}"},"itinari.com":{s:'#app > footer ~ div[class^="root"]{display:none !important}'},"jobup.ch":{s:".c-alert{display:none !important}"},"testmy.net":{s:"#overlay{display:none !important}"},"yodiz.com":{s:"#footMsgYodiz{display:none !important}"},"formidable.com":{s:".formidaCookie{display:none !important}"},"noriel.ro":{j:"5"},"gofundme.com":{j:"5"},"macway.com":{s:"#grpd-consent{display:none !important}"},"amtempo.de":{c:"9"},"bilety.mazowieckie.com.pl":{j:"6"},"molecaten.nl":{s:"#cookies_modal{display:none !important}"},"linnaleht.ee":{s:".style-wrapper > .ntf-container{display:none !important}"},"lekiosk.com":{s:"btb-app > banner{display:none !important}"},"trzemeszno.pl":{c:"7"},"buro247.hr":{s:"#subscriptionPopupBottom{display:none !important}"},"klix.ba":{s:".consent_wrapper{display:none !important}"},"kink.nl":{j:"6"},"vinbanken.se":{j:"5"},"dailyhive.com":{s:"#cookies-module{display:none !important}"},"holidayfactory.co.za":{s:"#polgpr{display:none !important}"},"sporttotal.tv":{s:'#root > div[role="navigation"] ~ div{display:none !important}'},"qioz.fr":{j:"5"},"ericeirasurfskate.pt":{s:".footer-fixed-bar{display:none !important}"},"union.nl":{j:"5"},"melcloud.com":{j:"5"},"parallels.com":{s:".notification.orange{display:none !important}"},"dane.gov.pl":{j:"5"},"tugramy.pl":{c:"2"},"autoscout24.ch":{s:".global-banner{display:none !important}"},"vakantieveilingen.nl":{j:"5"},"cafpi.fr":{s:".warning{display:none !important}"},"epapern.present-perfect.de":{j:"6"},"totum.com":{j:"5"},"frosmo.com":{s:"#frosmoPopup{display:none !important}"},"aquaphor.ru":{s:"#modal-kuki{display:none !important}"},"tribunesandtriumphs.org":{s:"#outer-consent{display:none !important}"},"ing.be":{j:"6"},"multikino.pl":{j:"6"},"heavenhr.com":{s:"#fullDarkVeil,#compliAcceptCookies{display:none !important}"},"mmafighting.com":{j:"5"},"theverge.com":{j:"5"},"krefting.de":{j:"5"},"kk.no":{s:'#__next > main:first-child > div:last-of-type[class^="css"]{display:none !important}'},"newegg.ca":{j:"6"},"newegg.com":{j:"6"},"focus-arztsuche.de":{s:".tracking-box{display:none !important}"},"scrabble-triche.fr":{s:".cookie-wr{display:none !important}"},"packtpub.com":{s:"#packt_gdpr_container{display:none !important}"},"mlexmarketinsight.com":{s:".banner-message-cpopup{display:none !important}"},"start.me":{s:".app__main-layout > .app__message{display:none !important}"},"hometree.co.uk":{s:".ht-nav-cookienotification{display:none !important}"},"tvplayer.com":{j:"5"},"portugalforum.org":{j:"6"},"imobily.eu":{s:".gmt_gdpr{display:none !important}"},"slovenia.info":{j:"6"},"commonsensemedia.org":{s:".region.region-top{display:none !important}"},"tarifhaus.de":{s:"#data-protection-regulation{display:none !important}"},"visitwales.com":{s:".m-noticeBar{display:none !important}"},"usercontrol.co.uk":{j:"5"},"shellenergy.co.uk":{s:"#js-footer > div{display:none !important}"},"greatist.com":{j:"5"},"777score.ru":{s:".PolicyNotifications{display:none !important}"},"esselunga.it":{c:"3"},"aktionsfinder.at":{j:"6"},"viberate.io":{j:"5"},"bosch-climate.be":{j:"6"},"ffonts.net":{c:"38"},"domhouse.pl":{j:"6"},"bandsintown.com":{s:'#main > div > div[class*="index"]:first-child{display:none !important}'},"gyakorikerdesek.hu":{j:"6"},"volvic.fr":{s:"#_legal{display:none !important}"},"vergleichen-und-sparen.de":{s:"#vs-cookiehinweis{display:none !important}"},"cruisebare.com":{j:"6"},"ortograf.ws":{s:"#cd{display:none !important}"},"clubdelzapato.com":{c:"2"},"listesdemots.com":{s:"#cd{display:none !important}"},"opticaldiscount.com":{s:"#cookie-authorization{display:none !important}"},"agroneo.com":{j:"6"},"myscience.org":{s:"#footer ~ .block{display:none !important}"},"jsonquerytool.com":{s:".navbar.fixed-bottom{display:none !important}"},"stadtfeste-in-deutschland.de":{s:"#cono{display:none !important}"},"spatiicomerciale.ro":{j:"5"},"migliori-siti-di-incontri.it":{c:"6"},"park-skocjanske-jame.si":{s:"#all ~ div{display:none !important}"},"coolbet.com":{s:"#main-layout > .main-container ~ div{display:none !important}"},"sciencex.com":{c:"36"},"sainsburysenergy.com":{c:"3"},"tunnelmb.net":{s:"#app-root > footer ~ div{display:none !important}"},"cryps.info":{s:"#cook{display:none !important}"},"mforos.com":{s:"body > style + div[id][class]:not([style]){display:none !important}"},"bmihealthcare.co.uk":{s:"body.cookie-overlay__dark::after{content:none !important}"},"snyk.io":{j:"5"},"vaneesterenmuseum.nl":{j:"6"},"e-horyzont.pl":{j:"6"},"resources.techcommunity.microsoft.com":{j:"5"},"cesanta.com":{c:"7"},"littlethings.com":{s:'#___gatsby > div[role="group"] .headroom-wrapper + div[class^="css"]{display:none !important}'},"elca.ch":{s:".elca-gdpr{display:none !important}"},"tikkio.com":{j:"5"},"support.onepeloton.com":{c:"72"},"igvault.com":{s:".header-perm{display:none !important}"},"stratoscale.com":{s:".CampaignType--floating{display:none !important}"},"tricentis.com":{s:".site-banner{display:none !important}"},"ipaddress.com":{j:"5"},"ip-adress.com":{s:"#cc-wrapper{display:none !important}"},"tuttishop.ch":{c:"30"},"farnhammaltings.com":{c:"30"},"ledluxor.com":{c:"30"},"sammic.fr":{c:"30"},"swdec.de":{c:"30"},"knowledgecottonapparel.com":{c:"37"},"keolis.com":{s:"vad-cookie{display:none !important}"},"viatransilvanica.com":{s:"#accept-popup{display:none !important}"},"legebatterijen.nl":{c:"3"},"atom8.com":{s:"#LandingPopUp{display:none !important}"},"robinwieruch.de":{s:'#___gatsby div[class^="AnalyticsFooter"]{display:none !important}'},"zoomin.tv":{s:"#privacyoverlay{display:none !important}"},"airtel.in":{c:"3"},"binary.com":{s:"#dialog_notification{display:none !important}"},"bandi.pl":{c:"3"},"myscript.com":{s:".notifications{display:none !important}"},"cartegie.com":{s:"#modal-overlay{display:none !important}"},"framatube.org":{s:".row.privacy-concerns{display:none !important}"},"insurancebusinessmag.com":{s:".notification_strip{display:none !important}"},"architecturalrecord.com":{j:"6"},"friv-games.com":{s:".privacy-popup{display:none !important}"},"regione.vda.it":{s:"#disclaimer-box{display:none !important}"},"italiarail.com":{s:'body > div[style*="block"]{display:none !important}'},"wsj.com":{s:"#cx-notification{display:none !important}"},"avanza.se":{s:"aza-cookie-message{display:none !important}"},"wofox.com":{s:".main-privacy-popup{display:none !important}"},"suzukimoto.pt":{s:".policy-window{display:none !important}"},"horizon.tv":{s:".notifications-manager{display:none !important}"},"comptabilisation.fr":{s:"#message_wrap{display:none !important}"},"hiberworld.com":{s:"#__next > main > div:first-child:not(.outer){display:none !important}"},"hario.jp":{s:"#sample-dialog{display:none !important}"},"normandiealaferme.com":{j:"5"},"24h-pflege-check.de":{c:"31"},"viewsonic.com":{c:"31"},"ukpressonline.co.uk":{c:"31"},"pianetadragonball.altervista.org":{c:"31"},"m-a.org.uk":{c:"31"},"futbolenlatv.es":{c:"31"},"fgh-info.de":{c:"31"},"efinancialcareers.com":{c:"31"},"askdifference.com":{c:"31"},"materialdistrict.com":{j:"5"},"dreamhack.com":{s:"body > span{display:none !important}"},"schaapcitroen.nl":{s:"#cookie-wall{display:none !important}"},"volcanoteide.com":{s:".cc-grower{display:none !important}"},"alan.com":{j:"5"},"himsa.com":{s:".cookieApprove{display:none !important}"},"elsevier.com":{j:"5"},"niceareas.co.uk":{s:".rayAlertBox{display:none !important}"},"foxrenderfarm.com":{s:'#gatsby-focus-wrapper > div[class*="Contact"] ~ div{display:none !important}'},"ifema.es":{c:"2"},"singellooputrecht.nl":{s:".cc-wrapper{display:none !important}"},"miles-and-more-kreditkarte.com":{s:".stoerer{display:none !important}"},"tiershop.de":{c:"65"},"chess24.com":{j:"5"},"weinfeste-in-deutschland.de":{s:"#cono{display:none !important}"},"veka.es":{s:"#darkener_cookie{display:none !important}"},"weerplaza.nl":{c:"41"},"corbby.com.pl":{j:"5"},"e-plytki.eu":{c:"3"},"copperconcept.org":{s:".coco-cookiebar{display:none !important}"},"ftm.nl":{c:"41"},"phphulp.nl":{c:"2"},"turismo.gal":{s:".bandaAceptacion{display:none !important}"},"ensingerplastics.com":{c:"41"},"cube3x3.com":{s:"#stickyCookie{display:none !important}"},"lonewolfonline.net":{j:"6"},"teltarif.de":{s:".ttconsent{display:none !important}"},"configcat.com":{s:"#configcat-consent{display:none !important}"},"liigume.ee":{s:".style-wrapper > .ntf-container{display:none !important}"},"ohtuleht.ee":{s:".style-wrapper > .ntf-container{display:none !important}"},"digitalrisks.co.uk":{s:"#app > div > .fixed.left{display:none !important}"},"mazdahandsfree.com":{s:".gdprbox,.gdprbox + .modal-overlay{display:none !important}"},"german-pavilion.com":{s:"#privacy-flyout{display:none !important}"},"marsh.com":{s:"#modalWindow.alt-opt-secure,.reveal-modal-bg-white{display:none !important}"},"astridlindgrensvarld.se":{s:".bottom__footer__text-container ~ div{display:none !important}"},"luxmeble.eu":{c:"3"},"dagbladet.no":{s:'#__next > main:first-child > div:last-of-type[class^="css"],body[class*="Body"] #__next > div{display:none !important}'},"dinside.no":{s:'#__next > main:first-child > div:last-of-type[class^="css"],body[class*="Body"] #__next > div{display:none !important}'},"elbil24.no":{s:'#__next > main:first-child > div:last-of-type[class^="css"],body[class*="Body"] #__next > div{display:none !important}'},"seher.no":{s:'#__next > main:first-child > div:last-of-type[class^="css"],body[class*="Body"] #__next > div{display:none !important}'},"sol.no":{s:'#__next > main:first-child > div:last-of-type[class^="css"],body[class*="Body"] #__next > div{display:none !important}'},"start.no":{s:'#__next > main:first-child > div:last-of-type[class^="css"],body[class*="Body"] #__next > div{display:none !important}'},"vi.no":{s:'#__next > main:first-child > div:last-of-type[class^="css"],body[class*="Body"] #__next > div{display:none !important}'},"pietsmiet.de":{s:"#main ~ .fixed{display:none !important}"},"pof.com":{s:"#gatsby-focus-wrapper > div:not([id]) > div{display:none !important}"},"boligsiden.dk":{j:"5"},"cfos.de":{j:"5"},"newstral.com":{c:"41"},"bookchoice.com":{j:"6"},"kitchenplanner.ikea.com":{j:"6"},"ikea.com":{s:"#ikeaTermsConsentModal,.footer ~ .toast-container,#cookies-legislation,.IKEA-Module-Notification-Notification{display:none !important}"},"labor28.de":{c:"41"},"gev-online.com":{s:"#cookies-convention{display:none !important}"},"beamerleinwande.de":{s:'body > div[style*="z-index"]{display:none !important}'},"codementor.io":{j:"6"},"lg-academy.de":{s:".cp-dialog{display:none !important}"},"agronews.gr":{c:"2"},"cogentoa.com":{s:".legal-banner{display:none !important}"},"labour.org.uk":{s:".alert-bar-footer{display:none !important}"},"kingslandscapes.com":{s:".themify-popup.bottom-center{display:none !important}"},"filmon.com":{s:"#design-switcher{display:none !important}"},"jenksgroup.co.uk":{s:'body > div[class^="cookie"],#mySidenav{display:none !important}'},"weldricks.co.uk":{c:"2"},"lifeinkrakow.pl":{s:"#rodo-popup{display:none !important}"},"arcteryx.com":{j:"5"},"itsfoss.com":{s:".CampaignType--floating{display:none !important}"},"vogue.com.tr":{s:".cookie-item{display:none !important}"},"pihlajalinna.fi":{s:'#root > div[role="alert"]{display:none !important}'},"nullaostalavoro.dlci.interno.it":{s:"#panel{display:none !important}"},"joma-sport.com":{s:"#modal-policy{display:none !important}"},"hilditchandkey.co.uk":{s:"#shopify-section-disclaimer{display:none !important}"},"signavio.com":{s:".disclaimer-container{display:none !important}"},"addons.prestashop.com":{c:"3"},"ziggogo.tv":{s:".notifications-manager{display:none !important}"},"dokterdokter.nl":{j:"5"},"youglish.com":{s:"#gdprModal{display:none !important}"},"messingschlager.com":{s:"#modalCookie{display:none !important}"},"tru-thoughts.co.uk":{c:"41"},"sttinfo.fi":{s:'footer > [class*="notification"]{display:none !important}'},"simba-dickie-group.com":{s:".cookie_block{display:none !important}"},"bob-emploi.fr":{s:'#app > div > div > div > div > nav ~ div[style*="hidden"] > div > section ~ div{display:none !important}'},"fathers-4-justice.org":{s:"#snppopup-welcome{display:none !important}"},"streamlabs.com":{s:".s-callout--cookies{display:none !important}"},"openwire.tv":{s:"#popup-container{display:none !important}"},"tierpark-ueckermuende.de":{s:".cookie-einwilligung{display:none !important}"},"varma.fi":{s:'.ng-scope[ng-controller="CookieCtrl"]{display:none !important}'},"rote-liste.de":{s:"jhi-main > div > .banner{display:none !important}"},"ziekenhuis.nl":{j:"5"},"limango.de":{j:"6"},"limango.pl":{j:"6"},"caricos.com":{s:"#cookiediv{display:none !important}"},"pimido.com":{s:".privacy_policy_sec{display:none !important}"},"gamercortex.com":{s:".gc-cookies{display:none !important}"},"alfred.camera":{s:".noty_layout{display:none !important}"},"atomizer.gr":{c:"92"},"ateliertuffery.com":{s:"#pmtv-cookie{display:none !important}"},"pantaflix.com":{s:'div[class^="CookieBar"],.panta-js-cookieNotificationBar{display:none !important}'},"hayu.com":{s:'div[class^="styled__AlertsContainer"]{display:none !important}'},"imovirtual.com":{s:"#root > footer ~ div{display:none !important}"},"riccos-camera.de":{s:"#cookieholder{display:none !important}"},"bunq.com":{j:"5"},"restaurant-liris.lu":{s:".coockies{display:none !important}"},"motor1.com":{s:".m1-footer-messages{display:none !important}"},"eon.de":{j:"5"},"labor-staber.de":{s:"#lwcook{display:none !important}"},"cloudvps.com":{j:"5"},"brainly.com.br":{s:".brn-cookie-policy-wrapper{display:none !important}"},"primocanale.it":{c:"3"},"calovo.de":{s:".ga-opt-in{display:none !important}"},"endesaclientes.com":{s:"#GeneralCookies{display:none !important}"},"techpulse.be":{s:'#eucookie + header[role="banner"]{top:0 !important}'},"nebo.app":{s:".app-notifications{display:none !important}"},"my5.tv":{s:'body > .view > .view > .view > .view[style*="black"]{display:none !important}'},"lethalpass.com":{s:".global-notif{display:none !important}"},"delfino.cr":{s:"#__next > #modal ~ div{display:none !important}"},"kitsound.co.uk":{j:"5"},"best2serve.com":{s:".cc_notification{display:none !important}"},"apemans.com":{s:".xpop{display:none !important}"},"mulesoft.com":{s:".gdpr-row,.gdpr.show{display:none !important}"},"skip-me.top":{j:"5"},"leticketdesexperts.fr":{c:"2"},"atea.ee":{c:"3"},"nitrohouse.com":{s:".iCookie{display:none !important}"},"fachinfo.de":{s:".row.banner{display:none !important}"},"sanistaal.com":{s:".info-message{display:none !important}"},"elisaviihde.fi":{s:".ea-cookie-disclaimer{display:none !important}"},"amsterdam-dance-event.nl":{s:".ade-cookie-bar{display:none !important}"},"hermann.bio":{c:"88"},"cssociety.org":{s:".icd-overlay{display:none !important}"},"redbubble.com":{s:".ds-theme-find-your-thing ~ .Toastify{display:none !important}"},"schufa-ombudsmann.de":{s:"#AC_layout{display:none !important}"},"ziggo.nl":{s:".cookiewall__wrapper{display:none !important}"},"abczdrowie.pl":{j:"5"},"disneyplus.com":{s:"#webAppFooter ~ div{display:none !important}"},"paradoxplaza.com":{j:"5"},"verkeerplaza.nl":{c:"41"},"bigfishgames.com":{s:"#bfg-cookie-policy-banner-shim{display:none !important}"},"lovense.com":{s:".u-cookie{display:none !important}"},"stellarium-web.org":{s:".v-snack{display:none !important}"},"kk.org":{s:"body > .modal-footer{display:none !important}"},"komtet.ru":{s:"#alert-users{display:none !important}"},"actionaid.fr":{s:".rgpd{display:none !important}"},"costillasalhorno.com":{c:"2"},"nfumutual.co.uk":{s:'section[aria-describedby="cookiedesc"]{display:none !important}'},"r-wipe.com":{s:"#pp-info{display:none !important}"},"epdf.pub":{s:"#EPDFPUB_cookie_box{display:none !important}"},"sfanytime.com":{s:"#rp > div:not(.page-wrapper){display:none !important}"},"1plus1.video":{s:".cookies.is-shown{display:none !important}.show-cookies{padding-top:0 !important}.show-cookies .header{top:0 !important}"},"go.com":{s:'body[data-ad_system] > div[style*="fixed"],.terms-alert-fixed{display:none !important}'},"espn.com":{s:".Tooltip--fixed.Tooltip--fixed-bottom,.alert.alert--fixed{display:none !important}"},"baywa-re.it":{s:".gg_cookie{display:none !important}"},"wikifixes.com":{s:"#privacy-popup{display:none !important}"},"government.is":{s:".session-text.active{display:none !important}"},"geeklectic.io":{c:"16"},"mara.photos":{s:"#pothos_cookie_consent_dialog{display:none !important}"},"pantip.com":{s:".pt-snackbar{display:none !important}"},"activate-here.com":{s:".alert-dismissable{display:none !important}"},"medicalnewstoday.com":{j:"5"},"qobuz.com":{s:".alert.alert-info,.alert.alert-cnil{display:none !important}"},"boilerroom.tv":{s:'#app > div[class^="Dialogs"] > div[class^="Dialog"]{display:none !important}'},"orange.fr":{s:"#o-cookie,#o-cookie-mobile,#o-cookie-consent-wrapper,#w2cb{display:none !important}"},"amazingmarvin.com":{s:"#live-chat-banner{display:none !important}"},"endemolshine.de":{c:"2"},"automatyka.istore.pl":{c:"3"},"radpdf.com":{s:"#pdfe_cmp{display:none !important}"},"wifimap.io":{s:"#__next > div:first-child{display:none !important}"},"cosmote.gr":{s:"#modalCookie,#cookies-one{display:none !important}"},"emmamerch.de":{s:".CookieHeader{display:none !important}"},"keepass.info":{s:"#consent_c{display:none !important}"},"cookiewall.vice.com":{j:"5"},"streema.com":{s:".footer ~ .alert{display:none !important}"},"trusted.de":{j:"5"},"radioaustria.at":{j:"6"},"sonymobile.com":{s:".bnw-module.header{margin-top:0 !important}"},"ecoreporter.de":{s:"#cookieTop{display:none !important}"},"skd.se":{c:"16"},"ichip.ru":{s:".disclamer{display:none !important}"},"cookies.mediahuis.nl":{j:"4"},"i-fundusze.pl":{c:"77"},"columbia.edu":{s:".sticky-notice-wrap{display:none !important}"},"webhint.io":{c:"4"},"rambus.com":{j:"5"},"blonded.co":{s:".FooterNotice{display:none !important}"},"coselpalais-dresden.de":{s:"#POPUP_ROOT{display:none !important}"},"rosbank.ru":{s:"#personal-data-processing{display:none !important}"},"celle-uelzennetz.de":{c:"3"},"edenred.cz":{s:".Footer .InfoBar{display:none !important}"},"conrad-katalog.at":{s:"#nagme{display:none !important}"},"bs-ffb.de":{j:"5"},"e-syntagografisi.gr":{j:"6"},"bankintercomite.es":{s:".cajatxt{display:none !important}"},"coinmarketcap.com":{s:"#cmc-cookie-policy-banner{display:none !important}"},"fundamenta.hu":{s:"#fund-cookie-info-layer{display:none !important}"},"ingelheimer-marktplatz.de":{s:"#dsgvo_once{display:none !important}"},"rubart.de":{s:"#newShopAttention{display:none !important}"},"fjshop.dk":{j:"6"},"planbusstib.be":{c:"41"},"biblio.com":{c:"92"},"kayak.pl":{j:"5"},"rockymountainatvmc.com":{s:".cookieText,.cookieMon{display:none !important}"},"advodan.dk":{j:"6"},"bakker.com":{s:"#footerDiv{display:none !important}"},"pubgesports.com":{s:'body > div > div > div > [class^="view__ModalWindowContainer"]{display:none !important}'},"awo.org":{s:"#kekse{display:none !important}"},"g-sport.si":{s:".fff{display:none !important}"},"weihnachtsmaerkte-in-deutschland.de":{s:"#cono{display:none !important}"},"werkenbijhanos.nl":{j:"6"},"berkshirecommunities.com":{s:".sticky-banner{display:none !important}"},"portfolium.com":{s:"pf-gdpr-snackbar{display:none !important}"},"megustaleer.com":{s:".cookie,.cookie_mobile{display:none !important}"},"klaxoon.com":{s:".banner-wrapper.is-active{display:none !important}"},"estjob.com":{s:".rgpd{display:none !important}"},"tv7.com":{s:"#gsoi-cmp{display:none !important}"},"das.co.uk":{s:".cookie,.secnav-links__item:last-child{display:none !important}"},"daslaw.co.uk":{s:".cookie,.secnav-links__item:last-child{display:none !important}"},"dasinsurance.co.uk":{s:".cookie,.secnav-links__item:last-child{display:none !important}"},"strefawalut.pl":{c:"20"},"pyur.com":{c:"20"},"10-4.dk":{c:"20"},"dia.es":{c:"20"},"daparto.de":{c:"20"},"dalmatinskiportal.hr":{c:"20"},"alcampo.es":{c:"20"},"technetium.pl":{c:"20"},"karatekyokushin.hu":{c:"20"},"trafiken.nu":{c:"20"},"schaffrath.com":{c:"20"},"bug.hr":{c:"20"},"sportmaster.dk":{c:"20"},"upc.cz":{c:"20"},"nationalcircus.org.uk":{c:"20"},"fischer.de":{c:"20"},"macorlux.pt":{c:"20"},"techmart.bg":{c:"20"},"oetkercollection.com":{c:"20"},"happywithyoga.com":{c:"20"},"skiline.cc":{c:"20"},"ulsterbank.ie":{c:"20"},"roncadin.it":{c:"20"},"spartanien.de":{c:"20"},"dutchcarparts.nl":{c:"20"},"dirk.nl":{c:"20"},"allekabels.nl":{c:"20"},"model-kartei.de":{c:"20"},"otouczelnie.pl":{c:"20"},"ceramicspeed.com":{c:"20"},"negozicuorebio.it":{c:"20"},"szerszamoutlet.hu":{c:"20"},"findbolig.nu":{c:"20"},"rbs.com":{c:"20"},"pildyk.lt":{c:"20"},"utilities.nl":{c:"20"},"del.org":{c:"20"},"18virginsex.com":{c:"20"},"sense.org.uk":{c:"20"},"wannawork.com":{c:"20"},"signal-iduna.de":{c:"20"},"twitchstrike.com":{c:"20"},"agromedia.rs":{c:"20"},"oldgoesyoung.com":{c:"20"},"vigszinhaz.hu":{c:"20"},"akme.hu":{c:"20"},"borgware.de":{c:"20"},"quelpneu.com":{c:"20"},"onlineszerszam.hu":{c:"20"},"virtualtrucker.pl":{c:"20"},"karls-shop.de":{c:"20"},"conferencemanager.dk":{c:"20"},"stoffe-hemmers.de":{c:"20"},"jeffery-west.co.uk":{c:"20"},"autourdebebe.com":{c:"20"},"guthaben.de":{c:"20"},"autoreisen.com":{c:"20"},"kodi.de":{c:"20"},"union.hu":{c:"20"},"machinestock.com":{c:"20"},"ombudsman-services.org":{c:"20"},"dermashop.hu":{c:"20"},"amnesty.org.uk":{c:"20"},"anybus.com":{c:"20"},"neon-service.pl":{c:"20"},"draytek.com":{c:"20"},"dis.rs":{c:"20"},"matratzen-concord.ch":{c:"20"},"everysize.com":{c:"20"},"youtubedownloadersite.com":{c:"20"},"tutti-pizza.com":{c:"20"},"markel.com":{c:"20"},"engbers.com":{c:"20"},"prodir.com":{c:"20"},"unumotors.com":{c:"20"},"necgroup.co.uk":{c:"20"},"knuffmann.de":{c:"20"},"axioart.com":{c:"20"},"hiya.com":{c:"20"},"techem.de":{c:"20"},"mazowieckie.com.pl":{c:"20"},"sprawdzonyfizjoterapeuta.pl":{c:"20"},"parat.com":{c:"20"},"youtubedownload.altervista.org":{c:"20"},"medianauka.pl":{c:"20"},"munich-business-school.de":{c:"20"},"rientiestuinmachines.nl":{c:"20"},"tacklifetools.com":{c:"20"},"rutoken.ru":{c:"20"},"sleek-mag.com":{c:"20"},"allobebe.fr":{c:"34"},"wilko.com":{c:"34"},"kafelanka.cz":{c:"34"},"auto10.com":{c:"34"},"omaweetraad.nl":{c:"34"},"singulart.com":{c:"34"},"previssima.fr":{c:"34"},"cp.pt":{c:"34"},"makandracards.com":{c:"34"},"mabanqueprivee.bnpparibas":{c:"34"},"sexipedia.gr":{c:"34"},"mobylines.de":{c:"34"},"mobylines.fr":{c:"34"},"moby.it":{c:"34"},"onderdelenlijn.nl":{c:"34"},"365.bank":{c:"34"},"ukmail.com":{c:"34"},"conforama.pt":{c:"34"},"bezux.com":{c:"34"},"moldurashergon.es":{c:"34"},"unian.ua":{c:"34"},"selfhost.de":{c:"34"},"intermarche.be":{c:"34"},"gheed.com":{c:"34"},"crytek.com":{c:"34"},"teletorium.pl":{c:"34"},"farecompare.com":{c:"34"},"conforama.es":{c:"34"},"reifenlehmann.de":{c:"34"},"lost24.eu":{c:"34"},"plodine.hr":{c:"34"},"veggiecommunity.org":{c:"34"},"carowall.com":{c:"34"},"success.ivanti.com":{c:"34"},"epresse.fr":{c:"34"},"coopbank.dk":{c:"34"},"omdenken.nl":{c:"34"},"zadovoljstvozaposlenika.hr":{c:"34"},"fitpatrol.pl":{c:"34"},"maxchocolatier.com":{c:"34"},"inagrm.com":{c:"34"},"nederlandsebrouwers.nl":{c:"34"},"lunamum.de":{c:"34"},"free3dbase.com":{c:"34"},"hyundai.es":{c:"34"},"lelieuunique.com":{c:"34"},"srazenazver.cz":{c:"34"},"sudzibas.lv":{c:"34"},"tuenti.es":{c:"34"},"dvdmax.pl":{c:"34"},"abbeylegal.com":{c:"34"},"magniflex.cz":{c:"34"},"francecars.fr":{c:"34"},"kliniken-koeln.de":{c:"34"},"used.jaguar.co.uk":{c:"34"},"sunstargum.com":{c:"34"},"huntshowdown.com":{c:"34"},"tuplus.com.co":{c:"34"},"autempoeuropie.pl":{c:"34"},"distilnetworks.com":{c:"34"},"lakelucerne.ch":{c:"34"},"hotel-spider.com":{c:"34"},"m.brettspielwelt.de":{c:"34"},"vizologi.com":{c:"34"},"almasi.sk":{c:"34"},"forsettlement.com":{c:"34"},"netia.pl":{c:"34"},"xxe.fr":{c:"34"},"kalfor.dk":{c:"34"},"cbeci.org":{c:"34"},"egyptair.com":{c:"34"},"taylorandfrancis.com":{c:"34"},"indepth.dev":{c:"34"},"livretzesto.fr":{c:"34"},"dur.ac.uk":{c:"34"},"vogue.pt":{c:"34"},"o2online.es":{c:"34"},"mitsubishi-motors.fr":{c:"34"},"wybory.gov.pl":{c:"34"},"topvintage.net":{c:"34"},"arsene50.brussels":{c:"34"},"shots.net":{c:"34"},"udruga-gradova.hr":{c:"34"},"zoom.earth":{c:"34"},"userinyerface.com":{c:"34"},"cosmosmagazine.com":{c:"41"},"lightinthebox.com":{s:".pop_has_cookies{display:none !important}"},"reifen-dinser.de":{c:"34"},"tang-freres.fr":{s:".welcome{display:none !important}"},"spotify.com":{s:"#main > .Root > section,.mh-message-bar{display:none !important}"},"ovplaza.nl":{c:"41"},"spox.com":{s:".spxcib.open{display:none !important}"},"scholieren.com":{c:"41"},"asket.com":{s:".site-notice{display:none !important}"},"scummvm.org":{c:"41"},"soliver.de":{j:"5"},"web-axioma.ru":{s:".confform{display:none !important}"},"parenting.pl":{j:"5"},"lcsc.com":{s:".footer-privacy{display:none !important}"},"imaginanet.com":{c:"34"},"otwarteklatki.pl":{j:"5"},"clubmed.co.uk":{s:".Line-container > .fixed.shadow{display:none !important}"},"adelaida.ro":{s:"#barwrap{display:none !important}"},"mikronis.hr":{c:"34"},"buket.hr":{s:".kukip{display:none !important}"},"hoval.hr":{s:"#pageAlertBox{display:none !important}"},"triglav.hr":{s:"#cookie_module{display:none !important}"},"035portal.hr":{s:".privatnost{display:none !important}"},"webuy.com":{s:".cookies_div{display:none !important}"},"shopstyle.co.uk":{s:".cdk-overlay-container{display:none !important}"},"explo.hu":{s:"#marketingConsent{display:none !important}"},"aniflix.tv":{c:"41"},"comixology.eu":{s:"body > div > .overlay{display:none !important}"},"shop.rema1000.dk":{c:"20"},"thingsmobile.com":{c:"20"},"lelivrescolaire.fr":{s:".Cookie_modal{display:none !important}"},"vboxxcloud.nl":{c:"3"},"gulfstream.com":{c:"88"},"erdinger.de":{j:"5"},"regain.us":{j:"6"},"luxortheater.nl":{j:"5"},"beko-technologies.com":{s:"#info-overlay{display:none !important}"},"travelmatters.ro":{c:"97"},"environmental-finance.com":{s:".modal-dialog{display:none !important}"},"goodlight.co.uk":{s:".cp-slidein{display:none !important}"},"enbw.com":{j:"5"},"slagelse.info":{j:"5"},"quick.be":{j:"6"},"roseburnbar.co.uk":{s:"#POPUP_ROOT{display:none !important}"},"milkywire.com":{j:"6"},"join-the-crew.com":{s:'footer ~ div > div[role="alertdialog"]{display:none !important}'},"soundtoys.com":{s:'.content-info ~ section[style*="background"]{display:none !important}'},"oekk.ch":{s:".mod-disclaimer{display:none !important}"},"puma.com":{s:"puma-cookie-banner{display:none !important}"},"stadt-kuehlungsborn.de":{j:"5"},"alapblog.hu":{s:".sutiSzorny{display:none !important}"},"sklep.regmot.com.pl":{j:"5"},"woningnetregioamsterdam.nl":{s:".growlcontainer{display:none !important}"},"woningnetregiomiddenholland.nl":{s:".growlcontainer{display:none !important}"},"engie-energie.nl":{j:"5"},"monety.it":{c:"6"},"boxcryptor.com":{s:'.mdl-layout__inner-container > .mdl-layout__header ~ div[style*="transform"]{display:none !important}'},"hilleberg.com":{s:"#subBar{display:none !important}"},"renaultretailgroup.es":{c:"34"},"alsa.es":{s:"#cookies-app,.modal-backdrop{display:none !important}.modal-open{overflow:visible !important}"},"tacklewarehouse.com":{s:"#data_protection{display:none !important}"},"theblackfriday.com":{s:".fixed.legal-text{display:none !important}"},"compteur.fr":{j:"6"},"walkers.co.uk":{s:".pepsi-Cookies{display:none !important}"},"tastemade.co.uk":{s:".legal-change-banner{display:none !important}"},"forever21.com":{j:"5"},"kivipaberkaarid.ee":{c:"20"},"speedy.bg":{s:"#system_message{display:none !important}"},"bottle.li":{s:".coockies{display:none !important}"},"proglib.io":{c:"3"},"marketfinance.com":{c:"97"},"bpost.be":{c:"34"},"spellshelp.com":{s:".consent_breadcrumbs{display:none !important}"},"buelow-palais.de":{s:"#confirmation{display:none !important}"},"toyexpress24.com":{c:"3"},"adac-shop.de":{j:"5"},"einsteinkultur.de":{s:".page-cn.cn-active{display:none !important}"},"atos.net":{c:"68"},"planplus.rs":{s:".cookie-consent2,.cookie-consent{display:none !important}"},"issuu.com":{s:".icc-Root{display:none !important}"},"manporn.xxx":{s:".copyrights ~ .black-bg{display:none !important}"},"bito.com":{c:"20"},"smartclinic.hu":{s:"#gdprModal,.modal-backdrop{display:none !important}"},"akvis.com":{s:".awarning{display:none !important}"},"linkmenuezerai.lt":{s:".cookies-hold{display:none !important}"},"qv.co.nz":{s:".bootbox,.modal-backdrop{display:none !important}"},"m.economictimes.com":{j:"5"},"resume.se":{j:"5"},"supplementa.com":{s:"body > div[data-ez-module-cookiedirective],body > div[data-ez-overlay]{display:none !important}"},"personal.natwest.com":{c:"20"},"3djuegos.com":{s:"#avc{display:none !important}"},"andinet.de":{s:".coo.show{display:none !important}"},"forum.suunto.com":{c:"41"},"mondo-tech.it":{j:"6"},"starnow.co.uk":{s:".popup__entrance{display:none !important}"},"tulodz.pl":{s:"#modalCookies{display:none !important}"},"autozine.nl":{c:"3"},"decrypt.co":{j:"6"},"web-factory.at":{s:".cookie-outter{display:none !important}"},"webmd.com":{j:"5"},"ostsee-charter-yacht.de":{c:"3"},"wetter.team":{j:"6"},"dobbies.com":{s:".alert-dismissable{display:none !important}"},"henderson.ru":{s:".politica{display:none !important}"},"bubble.ru":{s:".notifications{display:none !important}"},"coffeecollective.dk":{j:"6"},"ztm.waw.pl":{s:".page-consent{display:none !important}"},"indonesia-publisher.id":{j:"6"},"nordpass.com":{s:"#gatsby-focus-wrapper > div > .fixed{display:none !important}"},"stenstroms.com":{s:"#currentPageContent + div + div + div:last-child{display:none !important}"},"deondernemer.nl":{j:"5"},"eponuda.com":{c:"20"},"die-ip-adresse.de":{s:"#cbar{display:none !important}"},"nextapro.hu":{c:"3"},"dlapacjenta.pl":{s:"#topbar{display:none !important}"},"dacter.pl":{s:"#topbar{display:none !important}"},"krovni-nosaci.hr":{s:".topbarBox{display:none !important}"},"myshiptracking.com":{s:".alert_bar{display:none !important}"},"uni-tech.pl":{s:"#topbar{display:none !important}"},"mobil.com":{c:"10"},"crpa.it":{s:".fancybox-overlay,.fancybox-wrap{display:none !important}"},"biomet.lt":{c:"10"},"centreceramique.nl":{c:"10"},"deutschebank.nl":{c:"10"},"manetti.com":{s:".fancybox-overlay,.fancybox-wrap{display:none !important}"},"stw.berlin":{c:"4"},"clementoni.com":{c:"4"},"casaleggio.it":{s:"#disclaimerC{display:none !important}"},"eestiloto.ee":{s:".disclaimer-wrapper{display:none !important}"},"greybox.com":{c:"4"},"amundi.pl":{s:"#disclaimer_amundi{display:none !important}"},"biodiv.be":{c:"4"},"prevenzioneatavola.it":{s:"#disclaimerC{display:none !important}"},"overunity.com":{s:"#ecl_outer{display:none !important}"},"brettspiel-angebote.de":{s:"#privacyhint{display:none !important}"},"polstor.pl":{c:"20"},"distrokid.com":{j:"6"},"wtp.waw.pl":{s:".page-consent{display:none !important}"},"musescore.com":{s:"body > div:not([id]):not([class]):not([style]),body > section > section{display:none !important}"},"financenancy.com":{s:"#lawdiv{display:none !important}"},"marusik.cz":{s:".CA{display:none !important}"},"fitnessclubs4.pl":{c:"20"},"pepco.hu":{c:"34"},"tadeevo.com":{c:"3"},"linuxcompatible.org":{s:".alert-block{display:none !important}"},"signatur.frontlab.com":{j:"5"},"mercedesamgf1.com":{s:".cLayer{display:none !important}"},"mymuesli.com":{j:"5"},"springlane.de":{j:"5"},"trans-missions.eu":{j:"5"},"zoomagazin.eu":{s:"#cookieForm{display:none !important}"},"dunense.com":{c:"25"},"budgetinsurance.com":{c:"25"},"blocksite.co":{c:"25"},"correctiv.org":{c:"25"},"funnelytics.io":{c:"25"},"schwabenhaus.de":{c:"25"},"selle-proust.fr":{c:"25"},"stoppub.fr":{c:"25"},"golder.com":{s:".popcookies{display:none !important}"},"amara.com":{s:"#consent-modal{display:none !important}"},"r-tt.com":{s:"#pp-info{display:none !important}"},"grainsystems.com":{s:".disclaimerpopup{display:none !important}"},"warmbat.nl":{c:"20"},"wasted.fr":{c:"2"},"rotterdammersvoorelkaar.nl":{j:"5"},"stylefile.de":{s:".ui-dialog{display:none !important}"},"chainethermale.fr":{j:"5"},"engvig.no":{c:"3"},"layerstack.com":{s:".promotion-footer{display:none !important}"},"accor.com":{s:"#cookiesAccorJobs{display:none !important}"},"pazienti.it":{s:".pz-disclaimer--cookie{display:none !important}"},"dealz.pl":{s:".jet-popup{display:none !important}"},"nfpa.org":{s:"#fixed_footer{display:none !important}"},"moveon4.de":{c:"41"},"bakkt.com":{j:"6"},"orthopaedie-mediapark.de":{s:".consentOverlay{display:none !important}"},"lunii.fr":{j:"5"},"mtva.hu":{s:".resultCookie{display:none !important}"},"diplon.net":{c:"92"},"radiofamily-sound.de":{s:".jq-toast-single.jq-icon-warning{display:none !important}"},"bodum.com":{s:"#gdpr-popup-modal{display:none !important}"},"blitzhangar.com":{j:"5"},"pipedrive.com":{c:"20"},"comparium.app":{s:".sticky-message__wrap{display:none !important}"},"creativecommunity.fr":{s:".cookie-nav{display:none !important}"},"arcadja.com":{s:"#headerTopLog > center{display:none !important}"},"metolijf.nl":{s:"#popup-container{display:none !important}"},"mybodepro.com":{c:"29"},"photobite.uk":{s:".pb19_gdpr{display:none !important}"},"agenda.brussels":{c:"34"},"big5sportinggoods.com":{c:"16"},"translated.net":{c:"12"},"mychildcarevouchers.co.uk":{s:"#divBanner{display:none !important}"},"allgeier-experts.com":{s:".site-cookie{display:none !important}"},"healthsoul.com":{j:"5"},"sintaxis.org":{s:"#hsup{display:none !important}"},"montecryptoscasino.com":{s:".cookie-button{display:none !important}"},"hartfordbusiness.com":{j:"6"},"resideo.com":{s:"#HOMESEUCookie-Banner{display:none !important}"},"inetprint.cz":{s:"#stickyFooter{display:none !important}"},"nspcc.org.uk":{c:"3"},"szklarskaporeba.pl":{c:"2"},"solmax.com":{s:"._bloc_cookies{display:none !important}"},"sonax.de":{s:".snx-notification{display:none !important}"},"psycom.net":{s:"#vhn{display:none !important}"},"zepsute.pl":{s:"#overlay_uv,#ov_panel{display:none !important}"},"vostron.com":{j:"6"},"nastopy.pl":{s:".rodo,.rodo ~ .mask{display:none !important}"},"flens.de":{j:"6"},"iberiaexpress.com":{j:"5"},"exponea.com":{s:".exp-cookies{display:none !important}"},"monespaceclient.cnp.fr":{c:"3"},"lahtipro.pl":{s:"#alert_bar{display:none !important}"},"pnp.be":{s:"#upGDPR{display:none !important}"},"i-trekkings.net":{s:".trekk-barre-pied-de-page{display:none !important}"},"lebenslauf.com":{s:'div[class*="CookieConsent"]{display:none !important}'},"recharge.fr":{c:"20"},"toruniak.pl":{j:"5"},"krakusik.pl":{j:"5"},"monsieur-meuble.com":{c:"34"},"nederlandseloterij.nl":{s:"#nlportal-cookie-consent{display:none !important}"},"ebi.ac.uk":{s:'#interpro-root > div[style*="fixed"]{display:none !important}'},"gknpm.com":{s:"clients-cookie-policy{display:none !important}"},"alfabank.ru":{s:"#alfa > .platform > noindex,#agreement-popup{display:none !important}"},"ncalculators.com":{c:"16"},"valais.ch":{c:"36"},"stayfriends.de":{c:"20"},"enjoynu.com":{s:"#coookie{display:none !important}"},"vanderpoelmontage.nl":{s:".cookie-settings{display:none !important}"},"kvb.de":{s:"#cc_hint,#cc_technical,#cc_statistical{display:none !important}"},"getdigital.de":{s:".privacy-wrapper{display:none !important}"},"pdfescape.com":{s:"#pdfe_cmp{display:none !important}"},"cgtn.com":{s:".cg-tools-dialog{display:none !important}"},"schwab.de":{s:".cj-privacy-settings{display:none !important}"},"mall.tv":{s:".privacy-wrapper.flex-wrap{display:none !important}"},"hogrefe.de":{j:"5"},"shop.hfo.pl":{c:"3"},"bbcchildreninneed.co.uk":{j:"5"},"mclaren.com":{s:".messages.show{display:none !important}"},"getrad.co":{s:".cookie-policy-modal{display:none !important}"},"scad.edu":{s:".consent-footer{display:none !important}"},"sbonline.net":{s:"#footer.tekst{display:none !important}"},"my.dhlparcel.nl":{j:"6"},"mytheresa.com":{s:"#privacy-overlay,#privacy-container{display:none !important}"},"primaryhomeworkhelp.co.uk":{s:'body > table:first-child tr[bgcolor="#CCFF99"]{display:none !important}'},"airbank.cz":{c:"2"},"friendsfit.cz":{c:"34"},"tutu.ru":{s:".style__disclaimer{display:none !important}"},"steamgriddb.com":{s:"#noty_layout__bottomRight{display:none !important}"},"nekedterem.hu":{s:".cookie_sav{display:none !important}"},"basecamelectronics.com":{s:"#agreement-alert{display:none !important}"},"kreafunk.com":{s:".l-notifications{display:none !important}"},"garesys.com":{s:".js-go-notification{display:none !important}"},"immigroup.com":{s:"#ccdiv{display:none !important}"},"electroholic.gr":{s:".modal-dialog.fix-bottom{display:none !important}"},"oneal.eu":{j:"5"},"cotic.co.uk":{s:"#promptdialogue{display:none !important}"},"generali.co.uk":{s:".cookies-container-uk{display:none !important}"},"mozgo.com":{s:"#app > .w-full.fixed{display:none !important}"},"ifi-audio.com":{s:".l-cookie{display:none !important}"},"owlcatgames.com":{s:".GPRD,.cookies{display:none !important}"},"alberabike.fr":{s:".cookies_v16{display:none !important}"},"hardwareparadijs.nl":{s:"#cookieWall{display:none !important}"},"remorepair.com":{s:".visitorcookie{display:none !important}"},"zone5g.com":{c:"7"},"mulders-opel.nl":{j:"5"},"consumer.org.nz":{s:".consent-confirmation-banner{display:none !important}"},"kruizinga.nl":{s:".c-header{display:none !important}.contentwrapper--cookie{margin-top:0 !important}"},"merida.nl":{s:".c-header{display:none !important}.header--cookie{margin-top:0 !important}"},"mydraw.com":{c:"20"},"succesagenda.com":{s:".notification-wrapper{display:none !important}"},"javlibrary.com":{s:"#adultwarningmask{display:none !important}"},"diplomatie.be":{s:".ui-pnotify{display:none !important}"},"parfuemerie.de":{j:"5"},"justhype.co.uk":{c:"37"},"mobileshop.eu":{s:".fixed-warning{display:none !important}"},"eaglemoss.com":{s:"privacy-settings.pos-fixed,main-overlay{display:none !important}"},"brightree.com":{c:"19"},"wearebo.co.uk":{j:"6"},"eluniverso.com":{s:".block-eluniverso-gdpr{display:none !important}"},"monzo.com":{s:'#___gatsby div[class*="Alert-module"]{display:none !important}'},"gestoriaverdugo.es":{c:"20"},"sharafdg.com":{c:"34"},"fijiairways.com":{s:".dumbBoxWrap.terms-of-use{display:none !important}"},"lucky7bonus.com":{j:"6"},"aigle.com":{s:".CookiesLayer{display:none !important}"},"filmboxlive.com":{j:"5"},"reshade.me":{c:"27"},"paecklipunkt.ch":{s:"pp-cookie-dialog{display:none !important}"},"rankersta.com":{c:"20"},"nissannews.com":{s:"#privacyModal{display:none !important}}"},"android.com":{s:"snack-bar-container{display:none !important}"},"lastminutetravel.com":{s:".weUseCookies{display:none !important}"},"leti.com":{s:".NoticesBox{display:none !important}"},"fmscan.org":{s:"#cookieDiv{display:none !important}"},"govirtuo.com":{s:'#__next > div[style*="bottom"]{display:none !important}'},"depo-diy.ee":{s:".depo-cookies{display:none !important}"},"laurentwillen.be":{s:"#overlay-bg{display:none !important}"},"waterfordwhispersnews.com":{s:".wwn-gdpr-modal{display:none !important}"},"novaline.de":{c:"14"},"addgene.org":{s:".alert-info{display:none !important}"},"alpedhuez.com":{c:"25"},"saverioriotto.it":{s:"#policy_id{display:none !important}"},"bec-oglasi.com":{s:".cookie-uslovi{display:none !important}"},"formulare-bfinv.de":{s:"#datenschutz{display:none !important}"},"lubimyczytac.pl":{j:"6"},"seitenbacher.de":{s:"#sb-cookie-compliance-overlay{display:none !important}"},"lagermaulwurf.de":{s:".mfp-bg,.mfp-wrap{display:none !important}"},"olimerca.com":{j:"5"},"bondex.de":{c:"41"},"siea.sk":{s:"#cac{display:none !important}"},"artisansdegeneve.com":{s:"#popup-disclaimer{display:none !important}"},"dazn.com":{s:'aside[class*="cookie-banner"],div[class*="cookieDisclaimer"]{display:none !important}'},"reportz.io":{s:".rp-CookiesConsent{display:none !important}"},"roche.com":{s:"#myDataPrivacyPopup,.modal-backdrop{display:none !important}"},"zorgbaar.be":{c:"19"},"unbound.com":{s:"#js-cookies{display:none !important}"},"fallentitans.com":{s:".footer{display:none !important}"},"refurbished.sk":{c:"34"},"player.pl":{s:".modal-rodo{display:none !important}"},"howardrecords.com":{j:"5"},"legalstart.fr":{s:"#pop{display:none !important}"},"global.commerce-connector.com":{j:"5"},"halfmooninn.com":{s:"#hebs-consent{display:none !important}"},"hammarinsahko.fi":{s:"#cookie-conset-bar{display:none !important}"},"iplogger.org":{c:"67"},"fitx.de":{j:"5"},"wannonce.com":{s:".jconfirm{display:none !important}"},"speisebaron.de":{s:".navbar.fixed-bottom{display:none !important}"},"boyden.ca":{s:"#site-terms{display:none !important}"},"bgee.org":{s:"#bgee_privacy_banner{display:none !important}"},"commonsense.org":{s:"#cse-cookie-consent-message{display:none !important}"},"arthrex.com":{s:"#cookie-disclaimer-modal,.modal-backdrop{display:none !important}"},"lamium.io":{s:".lamium-cookie-consent{display:none !important}"},"heinemanngalabau.de":{s:".popup_anchor .Container.wp-panel-active{display:none !important}"},"netbet.de":{s:"section#NBCookieWarning{display:none !important}"},"videobolt.net":{s:".cookieBlock{display:none !important}"},"flexport.com":{s:"#gatsby-focus-wrapper ~ div{display:none !important}"},"nerim.com":{j:"5"},"epiroc.com":{s:"#cookieDiv{display:none !important}#navigationDivBusiness{margin-top:0 !important}"},"ugenr.dk":{j:"5"},"energyavenue.com":{j:"5"},"lemoncode.net":{c:"39"},"disk-o.cloud":{s:'#root div[class^="src-ui-Cookie"]{display:none !important}'},"contasconnosco.pt":{j:"5"},"otomoto.pl":{j:"6"},"slideshare.net":{s:".lms-notice-wrapper{display:none !important}"},"myfitnessplace.pl":{s:"#wizjo-cookies{display:none !important}"},"theawesomer.com":{j:"5"},"kiwipress.hu":{c:"20"},"2020.anderzorg.nl":{s:"#ckb-container{display:none !important}"},"tenniswarehouse-europe.com":{s:"#data_protection{display:none !important}"},"heineken.hr":{j:"6"},"doctolib.de":{s:".dl-drawer-bottom{display:none !important}"},"searchpeoplefree.com":{s:".cookie-terms{display:none !important}"},"stoffenshop.eu":{j:"5"},"ethereumprice.org":{s:".zxc-msg{display:none !important}"},"e-dewocjonalia.eu":{c:"3"},"cct.hu":{c:"20"},"informazione.it":{s:"#cmp-tb{display:none !important}"},"darricau.com":{c:"9"},"pfefferhaus.de":{c:"4"},"smartystreets.com":{c:"53"},"vodafonetvonline.es":{j:"5"},"eyeque.com":{c:"6"},"clipper-teas.com":{s:'.v--modal-overlay[data-modal="cookie"]{display:none !important}'},"ortsdienst.de":{c:"16"},"teenage.engineering":{s:"#te-layer{display:none !important}"},"mundoclasico.com":{s:".jconfirm{display:none !important}"},"nowystylgroup.com":{s:".nsg--notification.nsg--cookies{display:none !important}"},"bancobpm.it":{s:"#footer ~ div{display:none !important}"},"outbyte.com":{s:"#privacy-popup{display:none !important}"},"taleo.net":{s:"#taleo-cookie-law,#modal_cookie-law{display:none !important}"},"myparcel.me":{s:".card.fixed-bottom{display:none !important}"},"hackintoshpro.com":{s:"footer ~ .pop{display:none !important}"},"kastinger.com":{s:".cache-notice{display:none !important}"},"gp-ddws.com":{s:".dataprivacy{display:none !important}.is-dataprivacy-active .header{margin-top:20px !important}"},"viasana.nl":{s:".Cookie__container{display:none !important}"},"bitpanda.com":{s:"bpc-cookie-banner{display:none !important}"},"admiral.at":{s:"asw-cookie-acceptance-overlay{display:none !important}"},"edicionesobelisco.com":{s:"#sticky_header-sticky-wrapper{display:none !important}"},"smplayer.info":{j:"5"},"peoplesproblems.org":{s:"#myModal{display:none !important}"},"saloppe.de":{c:"2"},"cimri.com":{j:"6"},"unify.com":{c:"68"},"hazelbrugger.com":{s:"footer ~ div{display:none !important}"},"ado1szazalek.com":{s:"#layout_advertising_bottom{display:none !important}"},"puzzleyou.be":{j:"5"},"fotondo.cz":{j:"5"},"fun.com":{s:".cookieSettings{display:none !important}"},"terracaching.com":{s:".warning_banner{display:none !important}"},"btv.at":{s:"body > .cc{display:none !important}"},"gzcss.co.uk":{s:".cookie-flash{display:none !important}"},"lebens.guru":{j:"6"},"live.globalplayer.com":{j:"5"},"globalplayer.com":{j:"6"},"win2day.at":{j:"5"},"gruntwork.io":{s:"#gruntyCookie{display:none !important}"},"diwaro.de":{s:"#opt-in-modal,.modal-backdrop{display:none !important}"},"urmet.fr":{s:"#privacyPolicy{display:none !important}"},"laborx.io":{s:".header-index.with-cookie{display:none !important}"},"urteile-gesetze.de":{s:"#stickyFooter{display:none !important}"},"mojedenred.sk":{s:"edn-cookie{display:none !important}"},"make-it-in-germany.com":{s:"#nagscreen{display:none !important}"},"przystanekhistoria.pl":{c:"71"},"d2m-summit.de":{j:"5"},"knative.dev":{j:"5"},"careers.yardi.com":{j:"5"},"montecarlosbm.com":{s:"#cookieLab{display:none !important}"},"paperlessmovement.com":{c:"25"},"hardware.info":{j:"5"},"profilculture.com":{c:"20"},"transferwise.com":{s:"#twcc__mechanism{display:none !important}"},"persoonlijkegezondheidscheck.nl":{c:"3"},"santatracker.google.com":{s:"santa-notice{display:none !important}"},"uktaxcalculators.co.uk":{c:"7"},"pixiv.net":{s:"#root > div:first-child > div:only-child{display:none !important}"},"corvusbelli.com":{s:"app-cookies-message,mdb-modal-backdrop{display:none !important}"},"playpilot.com":{c:"41"},"swindi.de":{j:"5"},"dinsakerhet.se":{c:"2"},"morhipo.com":{s:"#legal-alert{display:none !important}"},"speedwaynews.pl":{s:"#myModal,.modal-backdrop{display:none !important}"},"drogisterij.net":{s:"#simple-modal{display:none !important}"},"digitalrealty.com":{s:"#__next > aside{display:none !important}"},"lifecell.net":{j:"5"},"bodybuilding.com":{s:'body > div[style*="transparent"]{display:none !important}'},"hausinfo.ch":{s:".m-privacy{display:none !important}"},"funkypigeon.com":{s:".fp_cookies{display:none !important}"},"british-legal-centre.com":{s:"#targetDiv{display:none !important}"},"ciustekno.me":{j:"6"},"cocinaabuenashoras.com":{c:"2"},"devdocs.io":{j:"5"},"roland-rechtsschutz.de":{s:".mod-alert{display:none !important}"},"abschied-nehmen.info":{s:".tscUiNotificationWrapper{display:none !important}"},"chainreactioncycles.com":{s:".crc_cookie_overlay,.crc_cookie_opt_in{display:none !important}"},"livejasmin.com":{j:"6"},"livesexasian.com":{j:"6"},"stib-mivb.be":{c:"20"},"naekranie.pl":{j:"5"},"blick.ch":{j:"5"},"captrader.com":{s:".informationContainer{display:none !important}"},"kreuzwerker.de":{c:"34"},"independent.com.mt":{s:".privacy-policy-container{display:none !important}"},"lycos.social":{s:"#nomnom{display:none !important}"},"amazingfables.com":{s:"#cookie_consent ~ #overlay{display:none !important}"},"bouwinfo.be":{s:'div[class^="bi-cookie-alert"]{display:none !important}'},"sanuslife.com":{s:'footer ~ div[class^="cookie"]{display:none !important}'},"konsument.at":{s:"#cc-overlay{display:none !important}"},"citifirst.com":{s:"#popup-disclaimer{display:none !important}"},"we-worldwide.com":{j:"5"},"currencyrate.today":{s:".cc-alert{display:none !important}"},"rp.pl":{j:"5"},"parkiet.com":{j:"5"},"teb.pl":{j:"5"},"technikum.pl":{j:"5"},"credit-agricole.it":{s:'section[class^="Cookies_dck-manager"]{display:none !important}'},"auva.cz":{s:"#cookiediv{display:none !important}"},"wallpaperhub.app":{s:"body > div > div > .dropshadow > p{display:none !important}"},"cwm.edu.pl":{s:"#cookies-glass{display:none !important}"},"gensdeconfiance.fr":{s:'div[class^="CookieRibbon__Wrapper"]{display:none !important}'},"rocketbank.ru":{s:"#modal-root{display:none !important}"},"adalo.com":{s:"#consentPopup{display:none !important}"},"iriedaily.de":{j:"5"},"pamgolding.co.za":{s:"#popi-notification{display:none !important}"},"posao.ba":{s:"#posaoba-footer + div + div{display:none !important}"},"advfn.com":{s:"#cnwrapper{display:none !important}"},"apartmenttherapy.com":{j:"5"},"hpb.com":{s:"#ccpa-notice{display:none !important}"},"interspar.at":{j:"5"},"spar.at":{j:"5"},"spar.hu":{j:"5"},"spar.hr":{j:"5"},"spar.si":{j:"5"},"telink-semi.com":{s:".b--cookie-window{display:none !important}"},"olavshallen.no":{c:"2"},"xn--30-wka.de":{s:"#privacy-bar{display:none !important}"},"tigase.net":{s:".MuiSnackbar-root{display:none !important}"},"civey.com":{s:'#__next > div[class^="notifications"]{display:none !important}'},"hightech-summit-bayern.de":{c:"3"},"cointelegraph.com":{s:".b-privacy-policy,.privacy-policy{display:none !important}"},"meinauto.de":{s:".MaCookieLayer{display:none !important}"},"irishrail.ie":{s:"body > .m34{display:none !important}"},"skincity.se":{s:"#promotion-alert{display:none !important}"},"skruvat.se":{c:"41"},"engelbert-strauss.se":{c:"7"},"engelbert-strauss.cz":{c:"7"},"wacom.com":{j:"5"},"ganinex.com.pl":{j:"5"},"entrepreneur.com":{s:"#noticepolicy{display:none !important}"},"schuttetweewielers.nl":{s:".popup-wrapper--bottom-fw{display:none !important}"},"bosincasso.nl":{c:"2"},"achat-or-et-argent.fr":{c:"34"},"konbini.com":{j:"5"},"lescommis.com":{j:"5"},"bewustnieuwbouw.nl":{s:"#c-bar{display:none !important}"},"crtm.es":{j:"6"},"cookieservice.aginsurance.be":{j:"5"},"arzttermine.de":{s:".cc_dialog_box{display:none !important}"},"sanego.de":{s:".cc_dialog_box{display:none !important}"},"jelszo.co":{s:".cookie-back{display:none !important}"},"bimedis.com":{s:".b-cookie-text{display:none !important}"},"hasura.io":{j:"5"},"stingray.com":{s:"#tracking-popup{display:none !important}"},"newmotion.com":{s:".homepage-hero ~ div:last-child{display:none !important}"},"laboiteauxparoles.com":{s:".dialogue-fixe.nuisance{display:none !important}"},"interface.com":{s:"#myModal{display:none !important}"},"tirerack.com":{j:"5"},"itsnicethat.com":{j:"5"},"ebookfriendly.com":{s:"#ecmr{display:none !important}"},"greenenergyuk.com":{s:".divPrivacy{display:none !important}"},"cirrus.com":{s:".page-canvas .links-are-reversed{display:none !important}"},"arc.dev":{s:"#__next > div > header ~ div[class]:last-child{display:none !important}"},"redislabs.com":{s:"#gdpr-modal{display:none !important}"},"yello.de":{j:"5"},"badminton.de":{s:"#cookieGradient,#cookiePrivacy{display:none !important}"},"altima-sfi.com":{s:"#politica{display:none !important}"},"picdumps.com":{s:"#pcdc{display:none !important}"},"pewdiepie.store":{j:"5"},"sberbank.com":{s:".personal-data-warning{display:none !important}"},"caldigit.com":{s:".elementor-location-popup{display:none !important}"},"jbl.de":{s:".uim .overlay,.uim .overlay ~ .container.basic-modal{display:none !important}"},"bytbil.com":{j:"5"},"pacjent.gov.pl":{s:"#cookies,#zgoda.sekcja-ciasteczka{display:none !important}"},"hp.com":{s:"#privacy-notification{display:none !important}"},"key4biz.it":{s:"#consent-toolbar{display:none !important}"},"camperscaravans.nl":{s:'div[id^="cookieConsentForm"]{display:none !important}'},"inshared.nl":{j:"5"},"deutsche-anwaltshotline.de":{s:"#dah-consent-manager-overlay{display:none !important}"},"iheart.com":{s:".component-legal-notice{display:none !important}"},"pointblankmusicschool.com":{j:"5"},"werkenbijpathe.nl":{j:"5"},"mla.org":{s:".donate-banner{display:none !important}"},"gatestoneinstitute.org":{s:".float-bar{display:none !important}"},"kempen.com":{j:"5"},"gaia.com":{s:".blocks.layer-modal-footer{display:none !important}"},"d4t4solutions.com":{s:"#privacy-overlay{display:none !important}"},"ada.com":{s:"#page-wrap ~ aside{display:none !important}"},"rapidtables.com":{c:"72"},"auktionssuche.de":{c:"86"},"ingtechpoland.com":{c:"47"},"ervaringensite.nl":{s:"#header-coockie{display:none !important}"},"ikeafamily.eu":{s:"#ikeaTermsConsentModal{display:none !important}"},"lightyear.one":{s:'#___gatsby > div[role="group"] > div > div:first-child{display:none !important}'},"influencermarketingforum.de":{j:"5"},"smile.io":{s:".smile-cookie-notification-container{display:none !important}"},"wuestenrot.at":{j:"5"},"bonuszbrigad.hu":{s:"#newASZFLayer{display:none !important}"},"voli-diretti.it":{j:"5"},"itau.com.br":{s:"#marcoCivil{display:none !important}"},"caser.es":{s:"#gdpr-modal > div{display:none !important}"},"alltombostad.se":{s:"#pop_contact{display:none !important}"},"pinkvilla.com":{s:'body > div[class^="ccc"]{display:none !important}'},"officiallondontheatre.com":{j:"5"},"comelelettroforniture.it":{s:'body > div[id^="kitgdpr"]{display:none !important}'},"roomiapp.com":{s:'#react-root > div > div[class^="jss"]:first-child + div[class^="jss"]{display:none !important}'},"tripinview.com":{s:"#tiv-cookie-bar{display:none !important}"},"upc.sk":{c:"20"},"pocketracy.com":{s:".dsclmr{display:none !important}"},"foodhub.co.uk":{c:"34"},"schuldnerhilfe-neuesleben.de":{s:"#idDatenschutzText{display:none !important}"},"ferienwohnungen-ferienhaeuser-weltweit.de":{j:"5"},"zolecka.pl":{j:"5"},"sumcumo.com":{c:"34"},"biorender.com":{j:"5"},"nassauparadiseisland.com":{s:"https://www.ahliunited.com.kw/ar/about/special-needs.greyCookie{display:none !important}"},"usabilitest.com":{c:"31"},"ixxat.com":{c:"20"},"ahliunited.com.kw":{s:".greyCookie{display:none !important}"},"httpstatus.io":{s:".snackbar{display:none !important}"},"maxmind.com":{s:"#mm-ccpa-notice{display:none !important}"},"computertotaal.nl":{j:"6"},"ozon.ru":{s:"#__nuxt > .layout-page > div:last-child:not([class]){display:none !important}"},"head-fi.org":{s:".notices{display:none !important}"},"tradingview.com":{s:'div[class^="toast-positioning-wrapper"]{display:none !important}'},"pcmweb.nl":{j:"5"},"webastoconnect.com":{s:".alert.ecc.show-ecc{display:none !important}"},"jobnet.dk":{j:"5"},"toptal.com":{s:"#modal-host ~ div{display:none !important}"},"tune.de":{s:".notification-bar{display:none !important}"},"ts.fi":{c:"7"},"begindot.com":{c:"25"},"infineon.com":{j:"5"},"ntp.msn.com":{s:".cookieWallBanner-1,.ComplianceHyperlink-1{display:none !important}"},"inatural.com.pl":{c:"3"},"netze-bw.de":{j:"5"},"astroeder.com":{s:"#acceptDisclaimer{display:none !important}"},"wikia.com":{c:"32"},"wikia.org":{c:"32"},"fandom.com":{c:"32"},"telia.no":{s:"#cookie-consent-form-container{display:none !important}body{overflow:visible !important}"},"winemag.com":{s:"#wmg-cookie-consent{display:none !important}"},"webaslan.com":{s:".cookie-text{display:none !important}"},"mazda-autohaus-seifert-pinneberg.de":{s:'#root > div:not([class*=" "]){display:none !important}'},"mazda-autohaus-butz-und-muehlbach-andernach.de":{s:'#root > div:not([class*=" "]){display:none !important}'},"mazda-autohaus-gollan-hamm.de":{s:'#root > div:not([class*=" "]){display:none !important}'},"knaf.nl":{s:"#cp-wrap{display:none !important}"},"my.games":{s:".ph-cookies,#app header .gdpr{display:none !important}"},"ikea.es":{c:"33"},"lobos.pl":{c:"34"},"meteo-parapente.com":{j:"5"},"cyberpowerpc.com":{s:"#pp_cookie{display:none !important}"},"cyberpowersystem.co.uk":{s:"#pp_cookie{display:none !important}"},"spiele-offensive.de":{s:".facebookfrage{display:none !important}"},"blackmoreops.com":{s:".snp-subscribeform{display:none !important}"},"olesnica24.com":{j:"5"},"korsokolbuszowskie.pl":{j:"5"},"2x45.info":{c:"2"},"adainfo24.eu":{c:"2"},"atriumsystem.eu":{c:"2"},"ladulle.fi":{s:"gdpr{display:none !important}"},"respresso.io":{s:"#gdpr{display:none !important}"},"kulturbolaget.se":{s:".c-messages{display:none !important}"},"evermotion.org":{s:".full-overlay{display:none !important}"},"asecos.com":{s:"#hinweis{display:none !important}"},"vodafoneziggo.nl":{j:"6"},"naturocoaching.fr":{s:'body > div[style*="red"]{display:none !important}'},"getzen.cash":{s:"#privacy-notification{display:none !important}"},"marktomarket.io":{j:"5"},"forum.mediathekview.de":{c:"41"},"every-tuesday.com":{s:"#et-gdpr-popup{display:none !important}"},"lagazettedemontpellier.fr":{j:"5"},"airvpn.org":{s:"#air_cookielaw_container{display:none !important}"},"daidometal.com":{s:"#announcement{display:none !important}"},"vvebelang.nl":{j:"5"},"krebsinformationsdienst.de":{s:"#quickhint-wrapper{display:none !important}"},"eboo.lu":{j:"5"},"mediaarena.pl":{c:"3"},"ziptransfers.com":{s:".dvcookie{display:none !important}"},"workforce.com":{s:".cookie__modal{display:none !important}"},"eurochrom.hu":{s:'.notification[data-options*="Cookiek"]{display:none !important}'},"opngo.com":{j:"5"},"thw-handball.de":{s:'body > footer ~ div:not([class]) > div[style*="fixed"],body > .js-slide-in.is-active{display:none !important}'},"moteurnature.com":{j:"5"},"esn.com":{s:"#n_pop_overlayer,#n_cookie-popup{display:none !important}"},"hierhoudenwevan.nl":{c:"20"},"m.ugc.fr":{s:".md-dialog-container{display:none !important}"},"nuxeo.com":{j:"5"},"bottegaverde.it":{c:"34"},"campagne.krant.nl":{j:"5"},"antjeroessler.de":{s:".lawbar{display:none !important}"},"zappi.io":{j:"5"},"findmypast.com":{s:"#appRoot > div > div > div{display:none !important}"},"econt.com":{j:"5"},"whatson.is":{s:".elementor-location-popup{display:none !important}"},"mitsubishimotors.com.br":{s:".cookies-header{display:none !important}"},"qitec.de":{s:"#QiCookieOptin{display:none !important}"},"bafa.de":{c:"47"},"player.hr":{s:".popup_hr{display:none !important}"},"e-turysta.pl":{s:"#et-cookies-info{display:none !important}"},"dsdollrobotics.com":{j:"5"},"algarveholidayvillas.com":{s:".cm-notice{display:none !important}"},"personaldienstleister.de":{s:'div[id*="cookie_consent"]{display:none !important}'},"medicaltravelcompared.co.uk":{s:".cookie-options{display:none !important}"},"opendataforafrica.org":{s:"#gdpr{display:none !important}"},"newsletter2go.it":{s:"#hidecookien2go{display:none !important}"},"buyorbye.pl":{c:"3"},"kronehit.at":{j:"6"},"replika.ai":{j:"5"},"knoema.com":{s:"#gdpr{display:none !important}"},"electrovoice.com":{c:"31"},"baldursgate3.game":{c:"34"},"frankfurt.de":{j:"6"},"jostchemical.com":{j:"5"},"ffm.to":{j:"5"},"tilda.cc":{s:'#t-footer > div > div[data-storage-item*="cookie"]{display:none !important}'},"falter.at":{j:"5"},"download-manager.online":{s:".cookie-bottom{display:none !important}"},"faire.fr":{s:"#cookieLab{display:none !important}"},"hackerrank.com":{j:"6"},"powershellgallery.com":{s:".banner-notice{display:none !important}"},"dreammachines.pl":{s:"#qkies_info,.modal-backdrop{display:none !important}"},"mcdirect.com":{j:"5"},"pressdemocrat.com":{s:".cph-ccpa_banner{display:none !important}"},"blackstonefootwear.com":{j:"5"},"dallasnews.com":{s:'#fusion-app > div[class^="app_banners"]{display:none !important}'},"consensys.net":{s:'div[class*="notificationBar"]{display:none !important}'},"eko-motorwear.com":{j:"5"},"alugha.com":{s:"#root > div > footer ~ div{display:none !important}"},"mpbio.com":{s:"#cookies-modal{display:none !important}"},"ghiseul.ro":{s:".g-consent{display:none !important}"},"murata.com":{s:"#murata_gdpr_popup,#murata_gdpr_background{display:none !important}"},"playboy.com":{s:'#__next > div[style*="flex"]{display:none !important}'},"televisa.com":{s:"section.Privacy{display:none !important}"},"smartloop.be":{j:"5"},"calorieking.com":{s:"footer ~ .MuiPaper-root{display:none !important}"},"motocombo.pl":{j:"5"},"biker.wroclaw.pl":{s:"#cookies_apl{display:none !important}"},"burncoose.co.uk":{s:"#cNotice{display:none !important}"},"fleetyards.net":{j:"5"},"ing.lu":{j:"5"},"on.cc":{s:"#acceptDisclaimer{display:none !important}"},"elakolije.rs":{s:"#kolacic{display:none !important}"},"kundoc.com":{s:"#KUNDOCCOM_cookie_box{display:none !important}"},"erd.hu":{c:"53"},"print-idee.de":{s:"#CookieQuery{display:none !important}"},"thinktankphoto.com":{s:"#ttp-gdpr{display:none !important}"},"arclegal.co.uk":{s:".pecr-message{display:none !important}"},"constantin-entertainment.de":{s:"#zcookie{display:none !important}"},"hohesalve.at":{s:".c-window{display:none !important}"},"ukphonebook.com":{s:".cookie-lightbox{display:none !important}"},"carsale24.com":{c:"2"},"zeta-producer.com":{s:"#consent,#consenttoggle{display:none !important}"},"moto-car.com.pl":{s:"#privacy-info-container{display:none !important}"},"alasatakunta.fi":{c:"7"},"volvopartswebstore.com":{s:".notificationsDisplay{display:none !important}"},"reacapital.de":{c:"7"},"kfc.ru":{j:"6"},"waarmaarraar.nl":{s:"body > .container > div[style]{display:none !important}"},"ipill.de":{s:"#cookie-message ~ .design{display:none !important}"},"beep.es":{c:"2"},"speisekarte24.de":{s:"#dasu{display:none !important}"},"europa-vrachtwagens.nl":{c:"3"},"fh-muenster.de":{s:"#matomo-wrapper{display:none !important}"},"usedom.de":{s:"#header-notification{display:none !important}"},"geovelo.fr":{s:"snack-bar-container{display:none !important}"},"raygun.com":{s:".popup-overlay{display:none !important}"},"bity.com":{s:".notification-bar{display:none !important}"},"11teamsports.com":{s:"#TrackingTipp{display:none !important}"},"schneehoehen.de":{c:"3"},"redhat.com":{s:".redhat-cookie-banner{display:none !important}"},"herefordshire.gov.uk":{s:".hc-cookies{display:none !important}"},"2plus2.ua":{s:"#page-2plus2.show-cookies{padding-top:0 !important}#page-2plus2.show-cookies .header{top:0 !important}"},"ecmguide.de":{c:"16"},"foodgroot.com":{s:"#POPUPS_ROOT{display:none !important}"},"notebookinfo.de":{c:"16"},"oberlo.es":{s:"#oberloGdpr{display:none !important}"},"trumpf.com":{s:"#popup-privacy{display:none !important}"},"nalogia.ru":{s:".b-person-data{display:none !important}"},"thawte.de":{s:"#toolbar{display:none !important}"},"thawte.com":{s:"#toolbar{display:none !important}"},"britrail.net":{s:"#overlay{display:none !important}"},"unaparolaalgiorno.it":{c:"20"},"xfarma.it":{s:"#overlay{display:none !important}"},"getresponse.com":{c:"41"},"poneranuncios.com":{s:"#index_cookies{display:none !important}"},"medlon.nl":{s:"#globalmessage_holder{display:none !important}"},"villaguardia.co.it":{c:"3"},"pcx.hu":{s:".cookieFlyer{display:none !important}"},"paper.li":{s:"#info_banner,.MuiSnackbar-root{display:none !important}"},"wohr.com.au":{c:"3"},"digitick.com":{s:".bloc-notifications{display:none !important}"},"reallygoodemails.com":{j:"5"},"huiles-et-sens.com":{s:'body > div[id^="webp_popup_banner"]{display:none !important}'},"ssi.dk":{c:"20"},"newsday.com":{s:".policy-alert{display:none !important}"},"milestonesrl.com":{s:".uk-notification{display:none !important}"},"wisdy.co":{s:"#__next > .modal{display:none !important}"},"bellflight.com":{s:".bg-gold.active{display:none !important}"},"mysimpleshow.com":{j:"5"},"dfinity.org":{s:"#gdpr-panel{display:none !important}"},"kirchengemeindeverband-koenigslutter.de":{s:"#hinweis{display:none !important}"},"activtrak.com":{c:"53"},"dziennikwschodni.pl":{s:".rodo-modal{display:none !important}"},"russellscanlan.com":{s:"#wp-notification{display:none !important}"},"podbean.com":{c:"7"},"neff-home.com":{j:"5"},"the12volt.com":{j:"5"},"maje.com":{s:".donottrackBanner{display:none !important}"},"radiodienste.de":{j:"6"},"indicator.be":{s:".cpolicy{display:none !important}"},"matrixgames.com":{s:".globalAnnouncement,.blockingOverlay{display:none !important}"},"slitherine.com":{s:".globalAnnouncement,.blockingOverlay{display:none !important}"},"thinglink.com":{s:"#tlCommonGdprBanner{display:none !important}"},"gfoe-conference.de":{s:"#sb-container{display:none !important}"},"specialdeal.at":{c:"20"},"wbkidsgo.com":{s:"#onetrust-outer{display:none !important}"},"anaciroma.it":{s:".w2t-banner{display:none !important}"},"speicherguide.de":{c:"16"},"tvmalbork.pl":{j:"5"},"buffalo-grill.fr":{s:"main ~ footer ~ div{display:none !important}"},"codesignal.com":{c:"25"},"cyfronika.com.pl":{c:"3"},"tiermaker.com":{s:"#agreementMessage{display:none !important}"},"oberharz.de":{s:".consent-popup--bg,.consent-popup{display:none !important}"},"amw.com.pl":{c:"34"},"cherryservers.com":{s:".cherry-cookies{display:none !important}"},"ggmgastro.com":{s:"ggm-cookie-hint{display:none !important}"},"rigb.org":{c:"20"},"horesta.dk":{c:"3"},"edge.pse.com.ph":{c:"35"},"hit-electronics.com":{c:"16"},"donauversicherung.at":{s:".cookies,app-cookie{display:none !important}"},"xel.nl":{c:"41"},"wer-kennt-wen.net":{s:".CookieLayout{display:none !important}"},"informiert.at":{s:".CookieLayout{display:none !important}"},"odmladzanienasurowo.com":{s:"#POPUPS_ROOT{display:none !important}"},"radiologie-dachau.de":{s:"#zcookie{display:none !important}"},"metrofixings.co.uk":{c:"34"},"heycar.co.uk":{s:'#app div[class*="ConsentManager"]{display:none !important}'},"larosiere.net":{c:"3"},"megasvet.cz":{c:"25"},"pkobp.pl":{s:"#pko-cookie-rodo,.js-ajax-overlay{display:none !important}"},"ichbindeinauto.de":{s:".v-banner--sticky{display:none !important}"},"ass-team.net":{s:".v-banner--sticky{display:none !important}"},"bardonecchiaski.com":{s:".jconfirm{display:none !important}"},"nik.gov.pl":{s:".informationBar{display:none !important}"},"verkehrsinformation.de":{s:".growl-bottom .alert{display:none !important}"},"londonreal.tv":{s:"#notify-consent{display:none !important}"},"pineline.fi":{c:"31"},"wieisdemol.be":{s:"#cover-div{display:none !important}"},"xometry.com":{s:"#lo-privacy-banner{display:none !important}"},"comau.com":{s:".cookie__wrap{display:none !important}"},"print24.com":{s:".cookie__wrap{display:none !important}"},"animalchannel.co":{s:".consent-box{display:none !important}"},"hallofbrands.gr":{s:"#gdpr-modal,.modal-backdrop{display:none !important}"},"marokko.nl":{j:"5"},"universiteitleiden.nl":{j:"5"},"icould.com":{j:"5"},"sofifa.com":{s:".wrapper .bp3-callout.bp3-intent-danger{display:none !important}"},"stryker.com":{j:"5"},"direktno.rs":{s:"#saglasnost-container{display:none !important}"},"secunews.be":{s:".pix-wrapper.pix-accept{display:none !important}"},"otto-office.com":{s:"#top-notification_accept-machmichweg-guidelines,.ooB-black-overlay-machmichweg{display:none !important}"},"culture.ru":{s:".js-notify-bar{display:none !important}"},"spoonflower.com":{s:".b-text-box.x-global-dialog{display:none !important}"},"htc.com":{c:"41"},"atramentowka.com":{c:"3"},"econsteel.de":{c:"3"},"eumobil.hu":{c:"20"},"bonpreuesclat.cat":{s:'.site--content > div[class*="toast"]{display:none !important}'},"propaganda.co.uk":{s:"#wpfront-notification-bar-spacer{display:none !important}"},"e-reporter.pl":{s:"#wpfront-notification-bar-spacer{display:none !important}"},"zh.ch":{s:"agb-bar{display:none !important}"},"onbeperktinbeweging.nl":{s:".cookie__wall{display:none !important}"},"angouleme.fr":{c:"26"},"gokarting.com.pl":{c:"26"},"hallo-meinung.de":{c:"26"},"intothegrave.nl":{c:"26"},"kijkonderzoek.nl":{c:"26"},"meaculpa.gr":{c:"26"},"poesslforum.de":{c:"26"},"rover.nl":{c:"26"},"superconstellation.org":{c:"26"},"cityoflondon.gov.uk":{s:".container-floating-notifications{display:none !important}"},"fusemagazine.com":{s:".sqs-widget{display:none !important}"},"womex.com":{j:"5"},"kivra.se":{j:"5"},"scandalbeauties.com":{s:"#attention-msg{display:none !important}"},"theater-altenburg-gera.de":{s:"#cookie-row{display:none !important}"},"theaterhagen.de":{s:"#cookie-row{display:none !important}"},"ebz-bildung.de":{c:"20"},"fbhvc.co.uk":{c:"2"},"hackdoor.io":{s:".snackbar{display:none !important}"},"fh-dortmund.de":{c:"2"},"lifebutiken.se":{s:"#top-anchor ~ div ~ div:last-child{display:none !important}"},"cafe.se":{c:"41"},"psychicmonday.com":{s:"#lawdiv{display:none !important}"},"beuc.eu":{s:".beuc-cookie{display:none !important}"},"ischias.se":{s:"#consent-wrap{display:none !important}"},"baza.io":{c:"34"},"toctoc.me":{s:".toctoc-cookie{display:none !important}"},"dailymail.co.uk":{s:".dailymailcouk-cookie-notification{display:none !important}"},"challengethebrain.com":{s:"#outer-consent{display:none !important}"},"gaffelamdom.de":{c:"20"},"so-magazyn.pl":{j:"5"},"9292.nl":{s:"#genericModal,.modal-backdrop{display:none !important}.modal-open{overflow:visible !important;padding-right:0 !important}"},"scrum.org":{s:".privacy-toast{display:none !important}"},"fanatical.com":{s:".cookie-collapsible{display:none !important}"},"metallumnovum.lt":{s:"#parent-container-idgy{display:none !important}"},"dplay.nl":{s:"#header-wrapper ~ dialog{display:none !important}"},"umcutrecht.nl":{j:"5"},"werkenbijumcutrecht.nl":{c:"2"},"utrop.no":{s:".wppopups-whole{display:none !important}"},"techcafe.nl":{j:"5"},"skb.si":{j:"5"},"papajohns.es":{s:'#root > div > div[class*="snackbar"]{display:none !important}'},"episerver.de":{c:"41"},"codeherent.tech":{s:"snack-bar-container{display:none !important}"},"newscientist.com":{s:".prompt--modal.section{display:none !important}"},"bbb.org":{s:"body > .MuiDrawer-root{display:none !important}"},"gadventures.com":{s:".privacy-control{display:none !important}"},"teleticketservice.com":{s:".ts-header-message{display:none !important}"},"siepomaga.pl":{c:"2"},"nodecheck.io":{s:"footer > .fixed-bottom{display:none !important}"},"1blu.de":{j:"5"},"bonify.de":{s:'#__next [class*="UserConsent"]{display:none !important}'},"krunker.io":{j:"5"},"creditkarma.co.uk":{j:"6"},"dofsimulator.net":{j:"6"},"bankcomat.org":{s:".cucheck{display:none !important}"},"naukri.com":{s:".privacyPolicy{display:none !important}"},"refoweb.nl":{j:"5"},"canaldigital.se":{j:"5"},"studienstiftung.de":{j:"5"},"vdk.de":{s:"#DSE{display:none !important}"},"lektury.gov.pl":{j:"5"},"androidapplications.ru":{s:".user-agreement{display:none !important}"},"hawle.de":{j:"5"},"scamadviser.com":{s:".cookie-nav{display:none !important}"},"omictools.com":{j:"5"},"steller.co":{s:"#root > div[class]{display:none !important}"},"trombocyter.se":{s:"#consent-wrap{display:none !important}"},"grunerundjahr.de":{c:"20"},"nytco.com":{s:".a-cookie{display:none !important}"},"keesvanderspek.nl":{c:"2"},"vier-pfoten.de":{j:"5"},"rhymes.org.uk":{s:"#outer-consent{display:none !important}"},"etos.nl":{j:"5"},"aucoffre.com":{j:"5"},"fino.hr":{c:"3"},"beres.hu":{s:"#cookieContent,#cookieBtn{display:none !important}"},"mygovid.ie":{s:".mygovid-overlay{display:none !important}"},"bazzar.hr":{j:"5"},"player.fm":{j:"5"},"gamer.nl":{j:"5"},"dehn.de":{j:"6"},"pzonline.com":{s:".disclaimers{display:none !important}"},"inexio.net":{s:"app-popup{display:none !important}"},"hettalentenhuis.nl":{j:"5"},"tecnolatte.it":{s:"#page_hider{display:none !important}"},"marikakonyhaja.hu":{s:"#cookieblokk{display:none !important}"},"dn.no":{s:"#dninvestor-cookie-info{display:none !important}"},"telekom-dienste.de":{j:"5"},"future-x.de":{j:"5"},"wargaming.net":{s:".warning-bar{display:none !important}"},"faidatehobby.it":{j:"5"},"queengarnet.com":{s:"header ~ .is-active{display:none !important}"},"cottonon.com":{j:"5"},"flintbek.de":{s:"#note{display:none !important}"},"surewise.com":{s:"#disclosure{display:none !important}"},"stat.si":{j:"5"},"quectel.com":{c:"34"},"gsk-gebro.at":{j:"5"},"m.bancopopular.com":{j:"5"},"wealdtech.com":{s:"#weald-gdpr-container{display:none !important}"},"portal.lanis-system.de":{c:"31"},"zeit.de":{j:"5"},"astro.com":{s:".botbanner,#priv.dsmessage{display:none !important}"},"magyarorszag.hu":{j:"6"},"zee5.com":{j:"5"},"overdrive.com":{j:"5"},"thefork.it":{s:"#root > div > p{display:none !important}"},"strawpoll.me":{j:"5"},"onrc.ro":{s:".cc-container{display:none !important}"},"alldomains.hosting":{s:"#adh-cookie-dnt,#adh-cookie-accept{display:none !important}"},"hosteurope.de":{j:"5"},"openuserjs.org":{c:"31"},"hobbyfarms.com":{s:".cookieTkd{display:none !important}"},"condor.com":{s:".cookie__bg{display:none !important}"},"helloclue.com":{s:"#gatsby-focus-wrapper > section:first-child{display:none !important}"},"coolmath.com":{j:"5"},"thegoodnessproject.co.uk":{s:"#cookies_enabled{display:none !important}"},"gruener-punkt.de":{j:"5"},"starmix.de":{s:"#muffin{display:none !important}"},"staedteregion-aachen.de":{s:"#cookiehuhu{display:none !important}"},"fega-schmitt.de":{j:"5"},"astro.hr":{j:"5"},"wins.pl":{j:"5"},"oberlo.com":{s:"#oberloGdpr{display:none !important}"},"steinhandel.no":{s:"#topbar{display:none !important}"},"dfds.com":{j:"6"},"idp.funktionstjanster.se":{j:"5"},"playvalorant.com":{s:".riotbar-alert{display:none !important}"},"formyrights.eu":{c:"77"},"oster-gewinnspiele.de":{s:"#cono{display:none !important}"},"hwbox.gr":{s:".uk-notification{display:none !important}"},"top10vpn.com":{s:"#notification-bar{display:none !important}"},"pioneerdj.com":{c:"34"},"tides4fishing.com":{c:"2"},"leszno.pl":{c:"2"},"edgeent.com":{s:"#caja_flotante{display:none !important}"},"edgeent.fr":{s:"#caja_flotante{display:none !important}"},"tanie-leczenie.pl":{s:"#notice_bar{display:none !important}"},"regnauer.de":{c:"6"},"catchandrelease.com":{s:"#react-container > main > footer{display:none !important}"},"asustor.com":{s:"#gdpr_wrap{display:none !important}"},"getabstract.com":{s:".notifybar--note{display:none !important}"},"akatronik.at":{s:"#cookieDiv{display:none !important}"},"motionvfx.com":{s:".cookies-modal{display:none !important}"},"izotcomputers.com":{s:'body [id^="aiva"]{display:none !important}'},"akvarista.cz":{s:"#topcookies{display:none !important}"},"consent.talpanetwork.com":{j:"5"},"theguardian.com":{s:'#app > div > main ~ footer ~ div,div[data-island="cookie-banner"],#cmpContainer,body > #cmp,#bottom-banner,div[x-data*="showCookieBanner"]{display:none !important}'},"theguardian.com.":{s:'#app > div > main ~ footer ~ div,div[data-island="cookie-banner"],#cmpContainer,body > #cmp,#bottom-banner,div[x-data*="showCookieBanner"]{display:none !important}'},"ristorantino.no":{s:".privacy-policy-container{display:none !important}"},"deviantart.com":{s:"#root > div ~ div:last-child:not([id]){display:none !important}"},"datacamp.com":{s:".dc-cookie-banner-wrapper{display:none !important}"},"gezondheidsplein.nl":{j:"5"},"photoeffets.com":{s:"#TopSubscriptionPopUpBg1{display:none !important}"},"photoeffekte.com":{s:"#TopSubscriptionPopUpBg1{display:none !important}"},"leds-boutique.fr":{s:"#event_banner{display:none !important}"},"sosoitaly.com":{s:"#event_banner{display:none !important}"},"lacoste.com":{s:".ensPrivacy-overlay{display:none !important}"},"versailles.fr":{c:"22"},"king.com":{s:"#SiteMessages{display:none !important}.hasInfoHeader #PageContainer{top:0 !important}"},"planetkey.de":{s:".alert-box{display:none !important}"},"setn.com":{s:".privacy-area{display:none !important}"},"foxnews.com":{s:".notification-banner{display:none !important}"},"revistainforetail.com":{j:"5"},"turn-keytechnologies.com":{s:".b--cookies{display:none !important}"},"n26.com":{j:"5"},"arbeiterkammer.at":{j:"5"},"alphr.com":{j:"5"},"videomapster.com":{s:".privacy-box{display:none !important}"},"wunderground.com":{s:"snack-bar-container{display:none !important}"},"swietawdomu.pl":{j:"5"},"linuxhandbook.com":{s:".CampaignType--floating{display:none !important}"},"tarnkappe.info":{j:"6"},"bbc.co.uk":{s:'#root > #header-content > div > div[class*="DialogBackdrop"]{display:none !important}'},"werkenindelandentuinbouw.nl":{c:"29"},"myki.com":{c:"3"},"hanover.com":{j:"5"},"delibio.fr":{c:"20"},"dollargeneral.com":{s:"#myModal{display:none !important}"},"patook.com":{s:"#cookies_subtext{display:none !important}"},"hpicheck.com":{s:"#toasts-container{display:none !important}"},"clubmed.fr":{s:".Layout > .fixed{display:none !important}"},"xsports.lv":{j:"5"},"pvcvoordeel.nl":{j:"5"},"latestdeals.co.uk":{s:"#root > div > main + div{display:none !important}"},"audirvana.com":{c:"25"},"dvb-t2-portal.de":{s:"#coPolicyMain{display:none !important}"},"countwordsfree.com":{c:"6"},"kqed.org":{s:"#getsitecontrol{display:none !important}"},"s2studio.cz":{c:"34"},"genesis-mining.com":{c:"3"},"octapharma.com":{j:"5"},"rttshirts.de":{s:".ec-notices{display:none !important}"},"alfabusinessweek.ru":{s:'#t-footer > div[style*="padd"]{display:none !important}'},"511tactical.com":{j:"5"},"skoledo.com":{s:".avg{display:none !important}"},"spor.dk":{c:"2"},"uwafot.de":{c:"26"},"akasha.world":{s:"#gatsby-focus-wrapper > div{display:none !important}"},"mate-tee.de":{s:".cc-container{display:none !important}"},"certideal.com":{j:"5"},"rp-giessen.de":{s:"footer .note{display:none !important}"},"kaggle.com":{s:"#site-content ~ div{display:none !important}"},"vakmedianet.nl":{j:"5"},"healthifyme.com":{s:"#popup-wrapper{display:none !important}"},"dlford.io":{s:"#gatsby-focus-wrapper > div > footer{display:none !important}"},"buerger.de":{s:"#consent-modal,.reveal-modal-bg{display:none !important}"},"ncov2019.live":{s:"#dcon-gdpr-container{display:none !important}"},"all-hashtag.com":{s:".disclaimer-container{display:none !important}"},"natuurfotografie.nl":{s:"#cookieSettings{display:none !important}"},"fastighetsbyran.com":{s:"#root > div > section > div > .w-full{display:none !important}"},"belsat.eu":{j:"5"},"gazetabilgoraj.pl":{j:"5"},"medirect.com.mt":{j:"5"},"medirect.be":{j:"5"},"justhalal.dk":{s:"#fullscreen-container{display:none !important}"},"123gold.de":{s:"#OptOut{display:none !important}"},"gp-tuning.at":{j:"5"},"weblager.dk":{j:"5"},"kentbank.hr":{s:"#overlayCookie,#overlayContentCookie,.otvori_cookie_dialog{display:none !important}"},"monolith.xyz":{s:"#root > main > footer > div:first-child{display:none !important}"},"ideal-versicherung.de":{s:"#content-top{display:none !important}"},"nortonrosefulbright.com":{s:".nrf-disclaimer{display:none !important}.nrf-disclaimer + .fixed-top{top:0 !important}"},"medeqstars.ru":{s:"#use-cookies{display:none !important}"},"vassla.com":{s:"#gatsby-focus-wrapper > .fixed{display:none !important}"},"famework.io":{s:".notifications{display:none !important}"},"aioinissaydowa.eu":{c:"2"},"fesztivalonkentes.hu":{s:".fo-cookie{display:none !important}"},"granice.pl":{j:"5"},"antiquite-neuvillefranck.fr":{j:"5"},"tego.fr":{s:".fixed-bottom{display:none !important}"},"2x2tv.ru":{s:".cook-web{display:none !important}"},"sufilog.com":{j:"5"},"bien-zenker.de":{j:"5"},"icontext.ru":{s:".policy-disclaimer{display:none !important}"},"travelrepublic.co.uk":{s:".sc-c-panel--offset.sc-c-panel--disable-gutters-x{display:none !important}"},"thewinecellarinsider.com":{j:"5"},"sparkassen-direkt.de":{j:"5"},"zst-tarnow.pl":{j:"5"},"celo.org":{j:"6"},"kognitio.com":{j:"5"},"readymag.com":{s:".widget-rm-cookies{display:none !important}"},"test-achats.be":{j:"5"},"cloudeng.it":{s:".commons-alert-box,.commons-alert-overlay{display:none !important}"},"bearable.app":{c:"25"},"caixabank.cat":{s:".cookies-region{display:none !important}"},"caixabank.es":{s:".cookies-region{display:none !important}"},"sixt.co.uk":{s:".cro-background-shadow{display:none !important}"},"pruadviser.co.uk":{j:"5"},"uslugi.gov.mk":{c:"53"},"axa-im.fr":{j:"5"},"specialarad.ro":{c:"2"},"designingbuildings.co.uk":{s:"#overlay-designingBuildingsAnywhere{display:none !important}"},"unitedway.org":{s:".footer-notification{display:none !important}"},"epri.com":{s:".cookie-sheet,.md-scroll-mask{display:none !important}"},"moddrop.com":{s:"#app > .cm-row{display:none !important}"},"weerstatistieken.nl":{s:"#darker{display:none !important}"},"weather-gb.com":{j:"5"},"silicagel.de":{c:"7"},"verkuendung-bayern.de":{s:".vkp-cookie-message{display:none !important}"},"brugge.be":{j:"5"},"clipartlogo.com":{s:".navbar-qards{display:none !important}"},"clipart.me":{s:".navbar-qards{display:none !important}"},"toestemming.ndcmediagroep.nl":{j:"5"},"freeletics.com":{j:"6"},"rynek-turystyczny.pl":{j:"5"},"der-farang.com":{j:"5"},"sweet.tv":{s:"#privacy_policy{display:none !important}"},"enzahome.com.tr":{s:".kvkkFixed{display:none !important}"},"eduelo.pl":{j:"6"},"homeairguides.com":{s:"#wpfront-notification-bar-spacer{display:none !important}"},"wunderino.com":{s:'#root div[class*="Snackbar"]{display:none !important}'},"everettspharmacy.co.uk":{s:"body > div[class]:not([style]):not([id]){display:none !important}"},"po-bandzie.com.pl":{c:"25"},"mesenzo.com":{s:"#OneTimePopupDialog,.OneTimePopupDialog-overlay{display:none !important}"},"diplomeo.com":{c:"41"},"bankgiroloterij.nl":{s:"#avgDialog{display:none !important}"},"norwegianreward.com":{j:"5"},"bsd.net":{s:'div[data-which-id="eprivacy-banner"]{display:none !important}'},"hudy.cz":{s:".info-bar{display:none !important}"},"top-trails-of-germany.de":{s:"footer .note{display:none !important}"},"neatorobotics.com":{s:"#neato_cp_notice{display:none !important}"},"geers.pl":{s:".ConsentWrapper{display:none !important}"},"oney.pt":{j:"5"},"jacob.de":{s:"#jcc-consent{display:none !important}"},"portel.pl":{s:"#rodoCover{display:none !important}"},"clausporto.com":{s:"#gdpr-popup-modal{display:none !important}"},"onassis.org":{s:"#js-content > div > .relative > .bg-blue{display:none !important}"},"puppet.com":{s:".pm-gdpr,.puppet-cookie-banner{display:none !important}"},"atal.pl":{j:"5"},"freudtools.com":{s:".x-consent{display:none !important}"},"sanook.com":{s:"#__next > div > footer ~ div{display:none !important}"},"atu.de":{s:"#App .notificationBar{display:none !important}"},"prodyna.com":{j:"6"},"prodyna.ch":{j:"6"},"prodyna.at":{j:"6"},"prodyna.co.uk":{j:"6"},"icscards.nl":{s:'body > [style*="brightness(50%)"]{filter:brightness(100%) !important}'},"magio.tv":{s:"#root > div[style]:not([class]):not([id]){display:none !important}"},"mnisek.cz":{j:"5"},"udemy.com":{s:".ud-component--footer--eu-cookie-message{display:none !important}"},"financialexpress.com":{s:'div[id^="google_ads_iframe"][id*="GDPR"]{display:none !important}'},"coinloan.io":{c:"34"},"wolframalpha.com":{s:"#__next > div > section:last-child{display:none !important}"},"nettbuss.no":{s:".header__banner{display:none !important}"},"vodi.cc":{c:"2"},"work-discount.de":{c:"7"},"zawady19.pl":{c:"31"},"computacenter.com":{s:".consent-container{display:none !important}"},"sentinelprotocol.io":{s:".consent-container{display:none !important}"},"raumausbeute.de":{s:".ec-notices{display:none !important}"},"lecourrierdelatlas.com":{s:".cda_oic{display:none !important}"},"tacobot.tf":{s:".cdk-overlay-container{display:none !important}"},"divvydiary.com":{s:"footer ~ .fixed{display:none !important}"},"zwolen.pl":{j:"5"},"boursorama.fr":{c:"3"},"superdrug.com":{j:"5"},"yoump3.app":{j:"5"},"gorillasports.co.uk":{c:"4"},"keideltherme.de":{c:"41"},"pancernik.eu":{c:"3"},"electromag.pl":{c:"3"},"fimportal.de":{c:"3"},"zeoob.com":{j:"5"},"nokautmoto.pl":{s:"#plugin-agree-Plugin,#GDPRModal{display:none !important}"},"nokaut.pl":{s:"#plugin-agree-Plugin,#GDPRModal{display:none !important}"},"talonai.lt":{s:"#root ~ div{display:none !important}"},"tracker.com":{s:".ccModal{display:none !important}"},"pocztapolska24.pl":{j:"5"},"cooptravel.co.uk":{s:".mailmunch-topbar{display:none !important}"},"studio.benq.com":{j:"5"},"adameve.com":{j:"5"},"hit.ro":{s:".cookie_2019{display:none !important}"},"audiocite.net":{s:'div[class*="fondcookies"]{display:none !important}'},"ldlc-pro.be":{s:"#privacy{display:none !important}"},"mixtools.pl":{c:"34"},"aktiefonline.nl":{s:"#avg-container{display:none !important}"},"spolem.olawa.pl":{c:"25"},"yespresso.it":{s:".ec-notices{display:none !important}"},"conradconnect.com":{j:"5"},"budapestbank.hu":{j:"5"},"cupsell.pl":{j:"5"},"ergonbike.com":{s:"#tracking-modal{display:none !important}"},"cloudhealthtech.com":{j:"5"},"icomjapan.com":{c:"3"},"maklarf.se":{s:".uk-notify{display:none !important}"},"visionsdureel.ch":{c:"20"},"getsitecontrol.com":{s:"#getsitecontrol{display:none !important}"},"puressentiel.com":{j:"5"},"booksy.com":{s:'#page > footer ~ div[class^="purify"]{display:none !important}'},"roms-download.com":{j:"5"},"sherwin-williams.com":{s:"#termsModal{display:none !important}"},"makelaarsland.nl":{s:".is-cookie-notice::before{display:none !important}"},"botmasterlabs.net":{s:".privacy-policy{display:none !important}"},"ello.co":{s:".AppContainer > nav + div{display:none !important}"},"devrans-schwelm.de":{c:"20"},"coolbird.nl":{c:"34"},"militarne.pl":{c:"3"},"distractify.com":{s:"#_ConsentBanner{display:none !important}"},"aave.com":{s:".LegalBanner{display:none !important}"},"reference-gaming.com":{s:"#appMountPoint-cookies{display:none !important}"},"create-connectivity.com":{s:".rstbox{display:none !important}"},"kieskeurig.nl":{j:"5"},"forumactif.org":{j:"6"},"bienwaldfitness.de":{j:"5"},"wissensnetz.dosb.de":{c:"2"},"store.leica-camera.com":{j:"5"},"leica-camera.com":{s:".fullscreen{display:none !important}"},"lightblock.me":{s:"#div-policy-acception{display:none !important}"},"lickd.co":{s:"#root > div > div:last-child{display:none !important}"},"defiexplore.com":{s:"#privacy-popup{display:none !important}"},"jejsklep.pl":{s:"#tws_i_100000,#topLayerBackDrop{display:none !important}"},"adrenaline.pl":{s:"#tws_i_100000,#topLayerBackDrop{display:none !important}"},"kolarzyk.pl":{s:"#cookie_info_kl{display:none !important}"},"virginbet.com":{s:".virginbetSportsRoot > div > div:last-child{display:none !important}"},"dnb.com":{s:"header .banner{display:none !important}"},"matines.com":{j:"5"},"advaniadc.com":{s:".adc__cookie-consent{display:none !important}"},"premiumkino.de":{j:"5"},"classification.gov.au":{s:'.views-row > div[style*="F6C257"]{display:none !important}'},"abc.com":{s:'body > div[style*="fixed"]{display:none !important}'},"heiligenfeld.de":{j:"5"},"tw-calc.net":{c:"20"},"solutions-numeriques.com":{c:"2"},"xn--strungsauskunft-9sb.de":{s:"#welcome{display:none !important}"},"alcatelmobile.com":{s:'.elementor-location-footer ~ div[class*="astra"],.acepta-cookies{display:none !important}'},"domodi.pl":{j:"5"},"telekom.de":{s:"#cookies.bounceInDown,.pi-notification{display:none !important}"},"proxyparts.com":{c:"34"},"top-dent.cz":{s:"body > .CA{display:none !important}"},"montersi.pl":{s:".motersi-cookie-notice{display:none !important}"},"anhaenger-bayern.de":{s:"#privacyPolicyWindow{display:none !important}"},"betsson.com":{s:"snack-bar-container{display:none !important}"},"pubpub.org":{s:".legal-banner-component{display:none !important}"},"voterrecords.com":{s:".tosbox-container{display:none !important}"},"bonami.ro":{s:".productWatchdog + .rcic{display:none !important}"},"audiofan.eu":{c:"3"},"rylko.com":{c:"31"},"mp4repair.org":{s:"#light,#fade{display:none !important}"},"iproeb.ro":{s:"#gg{display:none !important}"},"ponovnauporaba.si":{c:"34"},"svo.aero":{c:"20"},"rodekruis.be":{j:"5"},"citizenticket.co.uk":{s:'#haveacookie[action*="cookie-policy"]{display:none !important}'},"geefvoorzorgverleners.nl":{j:"5"},"austrianairlines.ag":{s:".ym-wrapper > .cop{display:none !important}"},"igbce.de":{j:"5"},"techguard.ie":{c:"9"},"arenamall.hu":{s:"#cp-bg,#cp-content{display:none !important}"},"virginholidays.co.uk":{s:".mvh-gdpr-banner{display:none !important}"},"portuguesemask.com":{s:'.bl-section[data-bl-name*="cookies"]{display:none !important}'},"flevoland.nl":{c:"41"},"altomdinhelse.no":{j:"5"},"kioskbt.ru":{s:".info-massage{display:none !important}"},"monterail.com":{s:".topbar__cta_full,.extended-topbar .topbar{display:none !important}"},"polarbackup.com":{s:".cp-slidein-popup-container{display:none !important}"},"fotav.hu":{s:".consent__dialog{display:none !important}"},"ocs.fr":{j:"5"},"apqs.com":{s:".cookieable{display:none !important}"},"lm.be":{j:"5"},"swipbox.com":{j:"5"},"omnifurgone.it":{s:".m1-footer-messages{display:none !important}"},"ercomer.pl":{c:"3"},"mobilpakke.dk":{s:".menuCookie{display:none !important}"},"4gamers.be":{j:"5"},"t-mobile.nl":{j:"5"},"rpcs3.net":{s:".menu-con-cookies{display:none !important}"},"betvictor.com":{s:".bvs-overlay{display:none !important}"},"m.leroymerlin.pl":{j:"5"},"extraessay.com":{s:".cc_info{display:none !important}"},"vitra.com":{j:"6"},"stormkit.io":{s:".modal-overlay.fixed{display:none !important}"},"mind-ware.nl":{s:".dcd-avg-banner,.dcd-avg-banner-bg{display:none !important}"},"eyescan.nl":{s:".cookie-cta{display:none !important}"},"wiesenhof-online.de":{s:".wsh-cookie-overlay{display:none !important}"},"themisbar.com":{j:"5"},"josephmoog.com":{s:"#POPUPS_ROOT{display:none !important}"},"kup.pl.canalplus.com":{c:"34"},"vils.at":{s:".cookieErrorBox{display:none !important}"},"e-marcom.pl":{s:"#cook{display:none !important}"},"bielawa.pl":{s:"#wiadomosccookie{display:none !important}"},"educationplatform.co.uk":{s:'#App > div > .container ~ div[class^="Wrap"]:last-child{display:none !important}'},"onmsft.com":{j:"6"},"mi-home.no":{c:"3"},"correosexpress.pt":{j:"5"},"correosexpress.com":{j:"5"},"cexpr.es":{j:"5"},"stoiximan.gr":{s:".sticky-notification{display:none !important}"},"muenzenwert.de":{s:"#callout{display:none !important}"},"usi.it":{j:"6"},"changehero.io":{s:".privacy-notify{display:none !important}"},"northamptonshiresurprise.com":{s:"#popupbanner{display:none !important}"},"vias.be":{j:"5"},"animade.tv":{s:'body > div[data-react-class="Cookies"]{display:none !important}'},"localsearch.ch":{s:"#root > div:first-child{display:none !important}"},"orcd.co":{j:"5"},"mobilevikings.be":{j:"5"},"gyproc.it":{c:"6"},"gokom.eu":{s:"#gokom-cookies{display:none !important}"},"gfycat.com":{s:'.toast-notification[class*="privacy"],.announcement-banner{display:none !important}'},"onecall.no":{j:"5"},"mycall.no":{j:"5"},"xercise4less.co.uk":{j:"6"},"joeallen.co.uk":{s:"#wp-notification{display:none !important}"},"nhc.no":{s:"#dpm-consent-form{display:none !important}"},"inyourarea.co.uk":{j:"6"},"gardeningknowhow.com":{c:"16"},"sato.fi":{s:"#app-container > div > .hide-on-print > div{display:none !important}"},"aide.fi":{c:"92"},"bonprix.pl":{s:"#JOISH987_bar{display:none !important}"},"wakacje.pl":{s:"#__next > div > div:first-child{display:none !important}"},"grenscorridorn69.nl":{s:".cdk-overlay-container{display:none !important}"},"polskikoszyk.pl":{s:"body.cookie .topbar{top:0 !important}"},"play.pl":{s:".cookies-mine{display:none !important}"},"acerta.be":{j:"5"},"hearingaidknow.com":{c:"53"},"coolors.co":{s:".banner.is-visible{display:none !important}"},"popnable.com":{s:"#roar-alert{display:none !important}"},"hansaplast.ch":{c:"9"},"hansaplast.hu":{c:"9"},"hansaplast.de":{c:"9"},"hansaplast.es":{c:"9"},"hansaplast.nl":{c:"9"},"hansaplast.it":{c:"9"},"hansaplast.com":{c:"9"},"lg.com":{s:"#cookieAllPc,.dimmed{display:none !important}"},"minnemi.no":{s:".popup-overlay{display:none !important}"},"dideo.ir":{s:".youtube-terms-banner{display:none !important}"},"claptzu.de":{s:"#cp-inner{display:none !important}"},"wolfgangkrebs.com":{c:"25"},"belarus24.by":{c:"34"},"kuntarekry.fi":{c:"9"},"theregister.com":{s:"#RegCTBWF{display:none !important}"},"switcher-shop.ch":{s:".ec-notices{display:none !important}"},"contofacto.it":{j:"5"},"kawasaki.de":{j:"5"},"pldspace.com":{c:"26"},"tum.de":{s:".in2-modal__blackbox{display:none !important}"},"loading.io":{s:'.position-fixed[ld-scope="cookie-consent"]{display:none !important}'},"lohi.de":{s:"#lohiConsent{display:none !important}"},"opti-wohnwelt.de":{s:'.accContentWrapper div[class*="gdprBar"]{display:none !important}'},"123stahl-shop.de":{s:"#cookieholder{display:none !important}"},"quickappninja.com":{s:"#qan-cookie-policy-gdpr{display:none !important}"},"halebop.se":{j:"5"},"packback.co":{j:"5"},"e-armet.pl":{c:"3"},"cb500.net":{s:"#keks{display:none !important}"},"ronproject.com":{s:".consent-box{display:none !important}"},"schuhe-mustang.at":{c:"3"},"india.com":{s:"#co-container{display:none !important}"},"vapstore.de":{s:"#header-promo{display:none !important}"},"ueberlingen-bodensee.de":{s:"#__next > footer ~ div{display:none !important}"},"redbook.com.au":{j:"5"},"ipass4sures.com":{s:"#blockCookie{display:none !important}"},"polskieradio.pl":{s:".rodo,.footer ~ .termsOfUse,.rodo-modal{display:none !important}"},"radkutsche.de":{s:"#pc{display:none !important}"},"vrporn.com":{s:".noticepopup{display:none !important}"},"yodot.com":{s:".yodotcookienotice{display:none !important}"},"moonpig.com":{s:"#__next > div:not([data-testid]):first-child{display:none !important}"},"forum-generationmobiles.net":{s:"#fb-root ~ div[id]:not(class){display:none !important}"},"tacticasdechoque.com":{s:".jet-popup{display:none !important}"},"lemondeencommun.info":{c:"25"},"mysuzuki.hu":{j:"5"},"indkast.dk":{s:"#hp_cc{display:none !important}"},"nordictelecom.cz":{s:".kukhorni{display:none !important}"},"radiogdansk.pl":{s:"#rodoModal{display:none !important}"},"mondedommagementnavigo.com":{s:"#app > div > .text-center{display:none !important}"},"markets.com":{j:"5"},"yavitrina.ru":{c:"20"},"edimax.com":{j:"5"},"sportiva.com":{j:"5"},"huisjetehuur.nl":{s:"#home ~ div[id]:not([class]){display:none !important}"},"booli.se":{s:"#app > main ~ div{display:none !important}"},"mi.com":{s:'div[class^="policy"],.agree-tokens-modal,.top-notify{display:none !important}'},"voyageforum.com":{j:"5"},"vattenfalleldistribution.se":{s:"vfdso-cookie-consent{display:none !important}"},"mortonsalt.com":{s:".ms-privacy-disclaimer{display:none !important}"},"apiko.com":{j:"5"},"badewanneneinstieg.at":{j:"5"},"tonerpartner.cz":{s:".CookiesOk{display:none !important}"},"vansforbands.co.uk":{s:".cookie2019-settings-icon,.cookie2019-settings-icon-inner,#mySidenav{display:none !important}"},"ciasteczka.org.pl":{s:"#ciasteczka\\.org\\.pl{display:none !important}"},"motherless.com":{s:".motherless-cookie-wrapper{display:none !important}"},"securitywizardry.com":{s:".uk-position-relative{display:none !important}"},"hari.ca":{s:".disclaimer-container{display:none !important}"},"poolandspacentre.co.uk":{c:"31"},"sen360.sn":{c:"31"},"salesmate.io":{s:".footer-popup{display:none !important}"},"pandahurt.pl":{s:".panda_cookies_accept{display:none !important}"},"fm-systeme.de":{j:"5"},"signupgenius.com":{s:".sug-notice--privacy{display:none !important}"},"bibliotheque.toulouse.fr":{j:"5"},"alltube.tv":{j:"5"},"alltube.pl":{j:"5"},"dubplate.be":{j:"5"},"husqvarna-bicycles.com":{j:"5"},"anpost.ie":{s:"#scg_banner{display:none !important}"},"fysikoaerioellados.gr":{j:"5"},"zamika.pl":{c:"7"},"carrefour.pl":{j:"6"},"carrefour.fr":{s:".m-alert-privacy{display:none !important}"},"stadiblidene.lv":{s:"#mrcoockie{display:none !important}"},"amewi.com":{j:"5"},"norwegian.no":{j:"5"},"finanze.gov.it":{s:"#bannerInfo{display:none !important}"},"mailchi.mp":{s:".mcnTemplatePageBanner{display:none !important}"},"freenet-energy.de":{j:"5"},"die-region.de":{c:"46"},"oneled.pl":{c:"3"},"wroled.pl":{c:"3"},"lajtit.pl":{c:"3"},"rebelwisdom.co.uk":{s:".uk-notification{display:none !important}"},"bstbk.de":{j:"5"},"cardzmania.com":{c:"16"},"levelwork.mx":{s:"#sticky-notice{display:none !important}"},"welovedevs.com":{j:"6"},"befit-fitness.com":{s:".modal.undefined{display:none !important}"},"informatiabucuresti.ro":{s:"mg5-cookie-notice{display:none !important}"},"membermojo.co.uk":{s:".mm2-cookiepref{display:none !important}"},"seewarte-schwerin.de":{s:"#mc-consent-window{display:none !important}"},"himla.com":{s:'main > div > div > div[style*="fixed"]{display:none !important}'},"gurock.com":{s:"#gk-cookie-wrapper{display:none !important}"},"hypnose-raum.com":{s:".blueline-content-popup{display:none !important}"},"asse.tv":{s:"#app_root ~ div{display:none !important}"},"backhaus-mildenberger.de":{c:"26"},"schott.com":{s:"#coo-box{display:none !important}"},"quixel.com":{s:'#app-page ~ div[class*="css"],#react-app > div[style*="hidden"] ~ div[class*="css"]{display:none !important}'},"feed-the-beast.com":{s:".home > .container > .is-relative > div:first-child{display:none !important}"},"epantofi.ro":{j:"5"},"ecipo.hu":{j:"5"},"eobuwie.com.pl":{j:"5"},"chaussures.fr":{j:"5"},"eschuhe.de":{j:"5"},"caseable.com":{s:".data-privacy-panel{display:none !important}"},"rudrastyh.com":{c:"3"},"skitenis.pl":{j:"5"},"tureckisklep.pl":{j:"6"},"holdentalesklep.eu":{j:"5"},"polska6.pl":{j:"5"},"odbiory.pl":{s:".uk-position-relative{display:none !important}"},"ekocell.pl":{s:"#darkBg,#noticeLayer{display:none !important}"},"przp.pl":{s:".module-abovebox{display:none !important}"},"beautyart.pl":{s:"#header-bar{display:none !important}"},"noiz.gr":{s:".bottom_notice{display:none !important}"},"legend.rs":{c:"20"},"malcoded.com":{j:"5"},"diablotools.com":{s:".x-consent{display:none !important}"},"fiksaa.fi":{s:".site-notification{display:none !important}"},"tradeville.eu":{s:"#AccCooTab{display:none !important}"},"alternative.me":{s:'#footer > div[style*="fixed"]{display:none !important}'},"goodfood.bg":{s:"#private_info{display:none !important}"},"lebara.com":{j:"5"},"positronx.io":{c:"3"},"mcdonalds.pt":{s:".notificationBar{display:none !important}"},"mijn-artikel.nl":{c:"29"},"fanina.pl":{c:"3"},"brady.de":{s:".CampaignType--floating{display:none !important}"},"romo-tonder.dk":{c:"25"},"monasuniversum.se":{s:'#___gatsby main ~ div,button[name*="legal information"]{display:none !important}'},"maistendencia.com":{s:".cnt-cookies{display:none !important}"},"siemensgamesa.com":{s:".sg-cookie-policy{display:none !important}"},"billiger-aufladen.de":{j:"5"},"newsandnews.com":{s:".bottom-popup{display:none !important}"},"sfera.com":{s:"#dis_cookie.cab_cookies{display:none !important}"},"stein.world":{s:"#stein-cookie-disclaimer-container{display:none !important}"},"niko.eu":{j:"5"},"geek17.com":{c:"7"},"my-meteo.com":{c:"2"},"wienholding.at":{j:"5"},"systweak.com":{s:".footer-info{display:none !important}"},"promocjada.pl":{j:"5"},"peaks.com":{j:"5"},"peaks.nl":{j:"5"},"cashper.de":{j:"5"},"volkswagen-we.com":{s:".system-notification{display:none !important}"},"tutolino.net":{c:"25"},"niveau-huile.com":{s:".modal{display:none !important}"},"verein-vpt.at":{s:"#announcement_popup{display:none !important}"},"spbtv.online":{s:"#agreeC{display:none !important}"},"costesfashion.com":{s:"header > div:first-child{display:none !important}"},"budni.de":{s:"#__next > div > footer ~ div{display:none !important}"},"duh.de":{s:"body > .cc{display:none !important}"},"leica-enthusiast.de":{c:"25"},"byutv.org":{c:"65"},"lehmanns.de":{s:".cc_dialog{display:none !important}"},"rosatomflot.ru":{c:"6"},"cibusnordic.com":{s:".popup-overlay{display:none !important}"},"east.wtf":{s:"#overlay{display:none !important}"},"unogs.com":{s:'div[data-bind*="eucookie"]{display:none !important}'},"cancercentrum.se":{j:"5"},"onlinesim.ru":{s:"#termsbox{display:none !important}"},"arconvert.it":{s:"#reveal-cookies,.reveal-modal-bg{display:none !important}"},"lagazettedenimes.fr":{j:"5"},"storaenso.com":{s:".overlay-wrapper{display:none !important}"},"bittrex.com":{c:"36"},"vy.no":{s:"#App .page > section,#center > section{display:none !important}"},"covid19awareness.sa":{j:"5"},"mecindo.se":{s:"#c-bar{display:none !important}"},"comtradeshop.com":{c:"7"},"yoyogames.com":{j:"5"},"interamt.de":{s:".ia-m-cookie-flyout{display:none !important}"},"hitachiaircon.ru":{s:".cookies-modal{display:none !important}"},"euroclear.com":{j:"6"},"myvalue.com":{s:".chivato.uso_cookies{display:none !important}"},"bippit.com":{s:"#POPUPS_ROOT{display:none !important}"},"discobag.de":{s:"#CookieQuery{display:none !important}"},"paragon-drivers.com":{s:".b-psg-cookie{display:none !important}"},"baltnews.lt":{s:"#policy-warning{display:none !important}"},"salonynoma.pl":{s:"body > .alert-container.show-pp-alert{display:none !important}"},"bemo-dent.pl":{s:".pravate_policy_popup{display:none !important}"},"one-insurance.com":{s:".one-c-privacy{display:none !important}"},"app.one-insurance.com":{j:"5"},"esska.de":{c:"16"},"mini.de":{j:"5"},"118.lt":{j:"5"},"netcraft.app":{s:"#consent-form{display:none !important}"},"netcraft.com":{s:"#consent-form{display:none !important}"},"estendo.it":{s:".jconfirm{display:none !important}"},"polskicaravaning.pl":{s:"#myModalpol{display:none !important}"},"goplextor.com":{s:"#notebox2{display:none !important}"},"morningstar.de":{s:"#divAudienceConfirmation #investmentInUK ~ div{display:none !important}"},"hundeschmuck.store":{j:"5"},"troyestore.com":{s:"._ed_cerez{display:none !important}"},"singaporeair.com":{j:"5"},"seikowatches.com":{s:".blk-Disclaimer,.disclaimer{display:none !important}"},"regus.com":{j:"6"},"amcongmbh.de":{c:"16"},"voi-noi.gr":{s:".bottombar{display:none !important}"},"gestionaleopen.org":{s:"#gdpr{display:none !important}"},"unikrn.com":{j:"5"},"pcformat.pl":{s:"#iframePopupContainer{display:none !important}"},"lenovo.com":{s:".banner_alert,.cookies{display:none !important}"},"dhvseminare.de":{s:".cel-info-box .cel-cookies{display:none !important}"},"devias.io":{j:"6"},"idealo.de":{s:'.App > div:first-child:not([class*="header"]){display:none !important}'},"curiousconcept.com":{s:".notification.is-consent{display:none !important}"},"bonopoly.de":{s:"#hinweis_button{display:none !important}"},"daviddarling.info":{c:"3"},"insidegamer.nl":{j:"5"},"uni-lj.si":{s:"body > .dark{display:none !important}"},"sourcenaturals.com":{s:"#policy_div{display:none !important}"},"sanslicark.com":{s:".v-snack{display:none !important}"},"samaritans.org":{s:'#footer ~ div[class*="root"]{display:none !important}'},"ooma.com":{j:"5"},"trontv.com":{s:".jw-popups{display:none !important}"},"bad-reichenhaller.de":{s:".vex-overlay,.preferences-alert{display:none !important}"},"tech-elektro.pl":{c:"3"},"dobrzenwielki.pl":{s:".page-cookie{display:none !important}"},"przemysl.pl":{s:".page-cookie{display:none !important}"},"tomford.co.uk":{s:".ui-widget-overlay,.newsletter-signup{display:none !important}"},"masiaelaltet.com":{c:"2"},"magic.gg":{s:"#primary-area main ~ div,#primary-area article ~ div{display:none !important}"},"blasmusik-burgenland.at":{j:"5"},"caberstore.com":{c:"2"},"time-to-question.com":{c:"34"},"l-bank.de":{j:"5"},"crowdlitoken.ch":{j:"5"},"calameo.com":{j:"5"},"verifyemailaddress.org":{j:"5"},"upwork.com":{s:"up-cookie-banner{display:none !important}"},"80.lv":{s:"#__next > div:last-child:not(:only-child){display:none !important}"},"ross-simons.com":{s:".lbh_privacy_alert{display:none !important}"},"uniroyal.pl":{j:"5"},"isbank.com.tr":{s:".blogCookieCover{display:none !important}"},"stiftung-managerohnegrenzen.de":{j:"5"},"musikguru.de":{s:"#CookieBox{display:none !important}"},"edecaformacion.com":{s:"#contenidoCookies{display:none !important}"},"foodtribe.com":{s:"#root > div[class]:last-child:not(:only-child){display:none !important}"},"neuefische.de":{j:"6"},"heimkinoraum.de":{s:'div[id^="mod_cookie"]{display:none !important}'},"zakonyprolidi.cz":{s:".modal-banner{display:none !important}"},"laboratoire-cellmade.fr":{j:"5"},"ryneklazienek.pl":{s:"#axnBodyContainer{display:none !important}"},"stationsdeski.net":{j:"5"},"shimano.com":{s:".message.fixed{display:none !important}"},"brusletto.no":{c:"3"},"ao.com":{s:'#ao-cb[data-tag-section*="cookie_banner"]{display:none !important}'},"safedrivingforlife.info":{s:".block-tso-cookie-preferences,.notification-banner-container,.shield{display:none !important}"},"freeimmo.de":{s:"#ourcookies{display:none !important}"},"taschen.com":{j:"5"},"budgetmobiel.nl":{s:"#cookie-wall{display:none !important}"},"hsv.de":{s:".dsgvo-modal-overlay,.dsgvo-modal{display:none !important}"},"flex-tools.com":{j:"5"},"sklep.bialyklasztor.pl":{s:"#growls{display:none !important}"},"socialdemokraterna.se":{s:".sos-cookie{display:none !important}"},"fanfiktion.de":{j:"5"},"simplilearn.com":{s:".eu-container,.sticky-footer-gdpr{display:none !important}"},"tennis24.bg":{s:"#private_info{display:none !important}"},"tenniskafe.com":{s:"#bar-message{display:none !important}"},"joingoodcompany.nl":{j:"5"},"nordaccount.com":{s:"#app > div > .bg-grey-lighter{display:none !important}"},"cinkciarz.pl":{j:"5"},"vecteezy.com":{s:'.ta-dm[data-qa="dm-Layer"]{display:none !important}'},"arriach.gv.at":{c:"7"},"webhallen.com":{c:"41"},"axminstertools.com":{s:".axmcookie-notice-container,.axmcookie-notice-conatiner{display:none !important}"},"ikea.gr":{c:"34"},"dailyfx.com":{j:"5"},"puritan.com":{s:".p-cookies{display:none !important}"},"calovo.com":{s:".ga-opt-in{display:none !important}"},"spreadshirt.dk":{s:".container ~ div > .small{display:none !important}"},"delo.si":{c:"19"},"telegram.hr":{c:"6"},"elfuturoesapasionante.vodafone.es":{c:"2"},"pacma.es":{j:"5"},"philasearch.com":{j:"5"},"tipp3.at":{s:".t3-app__overlay,.t3-privacyprotection{display:none !important}"},"aviationweek.com":{s:".awn-cookie-compliance{display:none !important}"},"icscards.de":{s:'body > [style*="brightness(50%)"]{filter:brightness(100%) !important}'},"siberianhealth.com":{s:".top-informer-container{display:none !important}"},"glossika.com":{c:"53"},"sunny.co.uk":{j:"5"},"edu.ch":{s:".mbdialog{display:none !important}"},"mam-bricolaj.ro":{s:".footer_notif{display:none !important}"},"qsc.de":{s:".cc-overlay{display:none !important}"},"vindeurgent.ro":{s:".bottom_notice{display:none !important}"},"papajohns.pl":{s:'footer ~ div[style*="bottom"]{display:none !important}'},"wapex.pl":{j:"5"},"24opony.pl":{s:".easyNotificationBck{display:none !important}"},"sportmaniac.ro":{j:"5"},"technikmuseum.berlin":{j:"5"},"telekom.hu":{j:"5"},"backl.ink":{j:"5"},"textlocal.com":{s:"#dallas-optin{display:none !important}"},"servocode.com":{s:".coockies{display:none !important}"},"hartz.info":{s:"#privacy_policy{display:none !important}"},"limemergency.co.uk":{s:"#consentPopup{display:none !important}"},"piw.pl":{j:"5"},"storia.ro":{s:"#root > footer ~ div{display:none !important}"},"designisthis.com":{s:".gppr-panel{display:none !important}"},"makc.ru":{s:"#bottom-notification{display:none !important}"},"rezanie-betonu.sk":{s:".cc_disclaimer{display:none !important}"},"sparebank1.no":{s:"#opt-in{display:none !important}"},"drugstore.bg":{c:"16"},"joker.es":{c:"34"},"zuckerjagdwurst.com":{s:'#gatsby-focus-wrapper > div[class^="index"],#gatsby-focus-wrapper > div[class^="index"] + div{display:none !important}'},"colors-effects.eu":{j:"5"},"acast.com":{s:".acast-cookie-consent-portal,#app-root > footer ~ div > aside{display:none !important}"},"radnickafronta.hr":{c:"34"},"eurobuch.de":{s:"#consentBanner1{display:none !important}"},"rku-it.de":{j:"5"},"radio17.pl":{s:".v-overlay,.v-dialog__content{display:none !important}"},"hardees.com":{s:".notice-window{display:none !important}"},"starwindsoftware.com":{s:"#privacyPopup{display:none !important}"},"irebu.pl":{s:"#COOKIE{display:none !important}"},"sp34.waw.pl":{s:".clause-top{display:none !important}"},"vectra.pl":{s:".l-cookies,#root > div > footer ~ div{display:none !important}"},"norwegian.com":{j:"5"},"thesiteoueb.net":{s:"#page ~ div{display:none !important}"},"vejdirektoratet.dk":{j:"5"},"audemarspiguet.com":{j:"5"},"notrehistoire.ch":{s:'#top > [data-promo*="cookie"]{display:none !important}'},"dsag.de":{s:"#dsag-cookie-compliance-overlay{display:none !important}"},"lbry.tv":{s:".nag{display:none !important}"},"genesis-zone.com":{c:"3"},"session.de":{s:"#overlay-optin,#opt_in_modal{display:none !important}"},"vi.com":{s:"#site-content ~ #footerData{display:none !important}"},"mycujoo.tv":{s:"#GDPRModal{display:none !important}"},"plusserver.com":{s:"#ps-coockie-confirm{display:none !important}"},"sf.gr":{s:"#cookiesManagement{display:none !important}"},"unwetterzentrale.de":{c:"7"},"tsn.ua":{s:".c-notification__box{display:none !important}"},"itproger.com":{c:"2"},"ageas.co.uk":{j:"5"},"rainforest-alliance.org":{s:"#modalOverlay{display:none !important}"},"wholesalescout.co.uk":{s:'.mpp-box[class*="right"]{display:none !important}'},"kbs.co.kr":{s:".chrome_pick{display:none !important}"},"chatfuel.com":{s:"#cf-gdpr-popup{display:none !important}"},"amarilisonline.com":{c:"2"},"agglo2b.fr":{s:"#tracker-warning{display:none !important}"},"kufar.by":{j:"6"},"minecraft.net":{j:"6"},"gramatica-alemana.es":{j:"5"},"bazilik.media":{s:".bz-cookie{display:none !important}"},"luebecker-bucht.guide":{s:"#app-container > div > div:not([id]){display:none !important}"},"peek-cloppenburg.at":{j:"5"},"peek-cloppenburg.de":{j:"5"},"hopenergie.com":{s:".cosa{display:none !important}"},"movilcelular.es":{c:"53"},"rayjetlaser.com":{s:".c-window{display:none !important}"},"medis.pt":{j:"5"},"zdnet.com":{j:"5"},"xn--rzte-fr-aufklrung-pqbn68b.de":{s:"#root > div > main ~ div{display:none !important}"},"mercadao.pt":{s:"pdo-cookies-policy{display:none !important}"},"jufa.eu":{s:'.en-mdl-eye_catcher[data-en-tags*="cookie"]{display:none !important}'},"wonderplugin.com":{s:".wonderplugin-box{display:none !important}"},"hanau.de":{s:"#pirvate_policy{display:none !important}"},"remontnik.ru":{s:"rtk-cookies-notice{display:none !important}"},"3sairbrushkunst.be":{s:".cookie__block{display:none !important}"},"pacogames.com":{s:"#awagon_gdpr_bar{display:none !important}"},"brabilligt.se":{s:".uk-notification{display:none !important}"},"ehrana.si":{s:".cookies_holder{display:none !important}"},"discoveryfrance.fr":{c:"25"},"rigips.sk":{c:"6"},"wzorniki.eu":{c:"3"},"lanko.pl":{s:".module-abovebox{display:none !important}"},"shelblock.com":{s:"#cc_overlay{display:none !important}"},"celiac.com":{s:".cAnnouncements{display:none !important}"},"testzentrale.de":{j:"5"},"evileg.com":{j:"5"},"openx.com":{j:"5"},"edzl.lv":{s:".privacy{display:none !important}"},"premier.one":{s:".notifications-container{display:none !important}"},"octotree.io":{c:"20"},"koi-company.de":{s:".cmnstr{display:none !important}"},"urbex-tour.com":{c:"25"},"coperion.com":{j:"5"},"texels.nl":{j:"5"},"persy.jobs":{s:".cookies-confirmation-frame{display:none !important}.cookies-confirmation--body-hotfix{overflow:visible !important}"},"albahotelravenna.it":{c:"3"},"ivd.ru":{s:".disclamer{display:none !important}"},"joborgame.ru":{s:".style__disclaimer{display:none !important}"},"evai.pl":{s:"#cffc{display:none !important}"},"onwebchange.com":{j:"5"},"chartoo.de":{j:"5"},"chartoo.fr":{j:"5"},"chartoo.at":{j:"5"},"chartoo.ch":{j:"5"},"chartoo.co.uk":{j:"5"},"chartoo.in":{j:"5"},"chartoo.com":{j:"5"},"adoc.tips":{s:"#ADOCTIPS_cookie_box{display:none !important}"},"bladehq.com":{s:".message-accept-container{display:none !important}"},"novado.de":{j:"5"},"varfurdo.hu":{c:"7"},"ticketco.events":{s:"#tcCookiesMessage{display:none !important}"},"komplettbank.se":{j:"5"},"tvtv.us":{s:".MuiSnackbar-root{display:none !important}"},"sixthcontinent.com":{s:".MuiSnackbar-root{display:none !important}"},"patronite.pl":{j:"5"},"vom-achterhof.de":{j:"5"},"furnitex.pl":{s:".bottomWarning{display:none !important}"},"linergy.de":{s:"#linergy-cookie-accept{display:none !important}"},"rareaquaticplants.com":{s:".art-postcontent > p:first-child{display:none !important}"},"euroelektronik.pl":{c:"34"},"autokult.pl":{j:"5"},"llamaya.com":{j:"5"},"popsockets.de":{s:".modal-backdrop,.veil{display:none !important}"},"popsockets.com":{s:".modal-backdrop,.veil{display:none !important}"},"shisha-brettl.de":{s:"#root > div > main ~ div{display:none !important}"},"surveytandem.com":{j:"5"},"burgopapers.com":{s:".floatFooter{display:none !important}"},"botentekoop.nl":{s:'div[id*="cookieConsentForm"]{display:none !important}'},"boten.nl":{s:"#cookieConsentForm33{display:none !important}"},"hitman.com":{s:'div[class*="cookie-banner"]{display:none !important}'},"yourkit.com":{s:"#terms-wrapper-id{display:none !important}"},"petcure.be":{c:"10"},"owasp.org":{s:"#disclaimer-container{display:none !important}"},"360.cymru":{s:"#negesCaniatad{display:none !important}"},"s4c.cymru":{s:".s4c-cookie-alert{display:none !important}"},"yow.ca":{s:"#sticky{display:none !important}"},"dotomi.com":{j:"5"},"spk.no":{s:".MuiDialog-root{display:none !important}"},"sky.de":{s:".top-notification-container{display:none !important}"},"karriere.de":{s:".c-notification{display:none !important}"},"candysims.com":{s:"#POPUPS_ROOT{display:none !important}"},"edelweiss-nauders.at":{s:"#cookiePrivacy{display:none !important}"},"arcgames.com":{s:"#gdpr-wall{display:none !important}"},"erdbeerprofi.de":{j:"5"},"ufurnish.com":{s:'footer > [class^="Bottom"]{display:none !important}'},"leningrad.top":{s:".page-notification{display:none !important}"},"bbr.ru":{s:".is-message-ppd{display:none !important}"},"kapucyni.pl":{s:".ofmcap-cookies,.top-screen{display:none !important}"},"tableau.com":{s:".cTableau_CookieConsent{display:none !important}"},"niceshop.co":{s:'div[class*="InformationModal"]{display:none !important}'},"mycare.de":{j:"5"},"ndzperformance.com":{s:".footer #myModal{display:none !important}"},"adventurecorner.de":{s:"#ac-consent-overlay{display:none !important}"},"hijobs.net":{s:".snackbar-container{display:none !important}"},"advanzia.com":{c:"3"},"christopherward.com":{s:".veil{display:none !important}"},"nyx-arch.ch":{s:"#ab-pop-up{display:none !important}"},"dark.netflix.io":{j:"5"},"mfs.com":{s:"#cookies-policies{display:none !important}"},"nestorparis.com":{s:"#gatsby-focus-wrapper > div > div[data-baseweb] ~ div[data-baseweb]:last-child{display:none !important}"},"emearecruitment.eu":{s:".ns-type-notice{display:none !important}"},"180grader.dk":{j:"5"},"mensjournal.com":{j:"5"},"dallmayr.com":{s:".cc-overlay{display:none !important}"},"vl.ru":{s:"#app-wrapper ~ section{display:none !important}"},"gns3.com":{s:"#container > div > div + div + div:last-child{display:none !important}"},"plex.tv":{j:"6"},"champagne.fr":{c:"2"},"quermania.de":{s:"#cookiefeld{display:none !important}"},"libertex.com":{s:".disclaimer__item.center-md{display:none !important}"},"arkadbudapest.hu":{s:"#mdl-overlay,.mdl-modal{display:none !important}"},"switcher.com":{s:".ec-notices{display:none !important}"},"reisacher.de":{s:".ch_banner-wrapper{display:none !important}"},"betway.se":{j:"5"},"ichhabediewahl.de":{s:"#idCP33Message{display:none !important}"},"indianexpress.com":{s:'div[id*="google_ads_iframe"][id*="GDPR"]{display:none !important}'},"waldlandwelt.de":{j:"6"},"950bergen.no":{s:".v-overlay,.v-dialog__content{display:none !important}"},"teichdiscount24.de":{s:".v-overlay,.v-dialog__content{display:none !important}"},"servsafe.com":{s:"#ppID{display:none !important}"},"aut.cc":{s:"#viewlet-disclaimer{display:none !important}"},"alternate.de":{j:"5"},"timebreak.eu":{s:'.must-hide[style*="ececec"]{display:none !important}'},"fireandflower.com":{s:"#main > footer ~ div{display:none !important}"},"jeunesseglobal.com":{s:"#toast-container{display:none !important}"},"ivnosys.com":{s:".mpp-container-position-top-bar{display:none !important}"},"usecrypt.com":{s:".cookies-ct{display:none !important}"},"toshiba-memory.com":{s:".cookiesWrap{display:none !important}"},"pluto.tv":{j:"6"},"iobroker.net":{s:'.App > div[class*="jss"] + div[class*="jss"]:last-child{display:none !important}'},"nichtohneuns.de":{s:"#root > div > main ~ div{display:none !important}"},"abicrash.com":{c:"3"},"cw.no":{s:".cw-cookie-confirmation{display:none !important}"},"html-css-js.com":{s:"#hcjCookies{display:none !important}"},"neubaukompass.de":{c:"77"},"stockcharts.com":{s:"#sccCookieBanner{display:none !important}"},"radarbox.com":{s:"#privacy-popup{display:none !important}"},"qliro.com":{s:"#react-app > div > [open]{display:none !important}"},"play-games.com":{s:".privacy-popup{display:none !important}"},"diffnow.com":{s:'#root > div[style*="fixed"]{display:none !important}'},"learningnetworkstore.cisco.com":{s:".cookie-modal{display:none !important}"},"kaspersky.com":{s:".notification-bar,#banner-region,.disclaimer.wrapper,#app header ~ section[data-t]{display:none !important}"},"niedziela.pl":{c:"34"},"waven-game.com":{s:".privacy-notification{display:none !important}"},"hetwkz.nl":{j:"5"},"heinz.st":{j:"5"},"credit-suisse.com":{j:"5"},"dplay.es":{s:'#app dialog[class*="notification"]{display:none !important}'},"got-it.ai":{s:".gi-Cookie{display:none !important}"},"swstrings.com":{s:".notification-container{display:none !important}"},"truefittandhill.co.uk":{c:"16"},"joker.com":{s:".v-snack,.v-dialog--persistent{display:none !important}"},"metrobankonline.co.uk":{s:".metro-cookiebar__block{display:none !important}"},"m-strana.ru":{s:".agreement-cookie{display:none !important}"},"crfashionbook.com":{j:"5"},"pudelek.pl":{j:"5"},"regmag.pl":{c:"3"},"donald.pl":{s:"#__next > footer ~ div{display:none !important}"},"scottevest.com":{c:"20"},"barclaycard.co.uk":{s:".app-wrapper > [data-wrap]{display:none !important}"},"interfriendship.de":{j:"5"},"dissept.com":{c:"25"},"katsbotanicals.com":{s:".conv_type_bar{display:none !important}"},"mazda-autohaus-schwenke-duisburg.de":{j:"5"},"weltbild.de":{j:"5"},"voo.be":{s:".pastry{display:none !important}"},"verksamhetslokaler.se":{j:"5"},"get-in-it.de":{s:"#GetIn_CookieConsentBox{display:none !important}"},"uni-ulm.de":{s:".in2-modal__blackbox{display:none !important}"},"zapisanisobie.pl":{s:"#kremowka{display:none !important}"},"mehilainen.fi":{j:"5"},"audioboom.com":{j:"5"},"rdlfitness.com":{c:"25"},"compresss.com":{s:".alert-dismissable{display:none !important}"},"square-enix.com":{s:'div[class^="notice_Notices"]{display:none !important}'},"denizbank.com":{s:"#fixedFooterBar{display:none !important}"},"pibank.es":{j:"5"},"stabila.com":{j:"5"},"trdevents.no":{s:".warning-message{display:none !important}"},"autoweek.nl":{j:"5"},"besteproduct.nl":{j:"5"},"converse.com":{j:"5"},"bol.com":{j:"5"},"efootwear.eu":{j:"5"},"goteborgenergi.se":{s:".Ge-Msg--cookie{display:none !important}"},"binumi.com":{j:"6"},"ravi.pl":{j:"6"},"system.t-mobilebankowe.pl":{j:"5"},"regnest.com":{c:"34"},"vigo-krankenversicherung.de":{s:"#cwarning{display:none !important}"},"lkh.de":{s:".cc-blur,.cc-overlay{display:none !important}"},"mercedes-creditcard.de":{c:"3"},"indiearenabooth.com":{j:"5"},"greenweez.com":{j:"5"},"molotov.tv":{s:'#app > div > div + div:not([class*=" "]){display:none !important}'},"sachsen-fernsehen.de":{j:"5"},"carlsjr.com":{s:".notice-window{display:none !important}"},"tvtv.ca":{s:".MuiSnackbar-root{display:none !important}"},"kristeligt-dagblad.dk":{c:"16"},"nedsecure.co.za":{s:"#divnedbankretailcookie{display:none !important}"},"cropp.com":{j:"5"},"shpock.com":{j:"5"},"speedtest.net":{s:".privacy-update,.notification-container{display:none !important}"},"ctshop.rs":{c:"7"},"radio-trausnitz.de":{j:"5"},"thunderfulgames.com":{s:".uk-notification{display:none !important}"},"babanet.hu":{c:"3"},"landsend.de":{j:"5"},"generaltire.com":{s:".gt-privacy-popup{display:none !important}"},"litebit.eu":{j:"5"},"nebenan.de":{s:"#main > .c-layout > article{display:none !important}"},"linksfraktion-nordsachsen.de":{c:"6"},"fastcompany.com":{s:".privacyPolicyPopup{display:none !important}"},"l-bank.info":{j:"5"},"deka.de":{j:"5"},"lbbw.de":{j:"5"},"timhortons.co.uk":{s:".user-permission{display:none !important}"},"montanacolors.com":{j:"5"},"wetransfer.com":{j:"5"},"revolver.news":{c:"19"},"gongfm.de":{j:"5"},"newrepublic.com":{s:".popup-consent{display:none !important}"},"gmu.edu":{s:"#mason-cookie-banner{display:none !important}"},"finanzia.no":{s:".theme-privacy-container{display:none !important}"},"cookpad.com":{s:'.flex[data-id="cookie_dialog"]{display:none !important}'},"gmx.net":{j:"5"},"web.de":{j:"5"},"gmx.ch":{j:"5"},"gmx.at":{j:"5"},"gmx.com":{j:"5"},"gezond.nl":{j:"5"},"reiseversicherung.de":{s:"#erv-cookie{display:none !important}"},"leagueoflegends.com":{s:".riotbar-alert{display:none !important}"},"thecycleverse.com":{j:"6"},"codility.com":{c:"34"},"abo.faz.net":{s:".veil{display:none !important}"},"onzetaal.nl":{s:".consent{display:none !important}"},"mindmeister.com":{s:"#cb-wrapper{display:none !important}"},"music.yandex.ru":{j:"5"},"music.yandex.com":{j:"5"},"yandex.ru":{s:'.gdpr,div[data-react-widget-id="Gdpr"],.lc-gdpr{display:none !important}'},"testo.com":{c:"23"},"latendresseencuisine.com":{s:".mdc-snackbar{display:none !important}"},"fashionunited.de":{s:".mdc-snackbar{display:none !important}"},"realm667.com":{j:"5"},"mediathekviewweb.de":{j:"5"},"virginaustralia.com":{j:"5"},"nordcheckout.com":{s:"#__next > .App > div{display:none !important}"},"cnam-bretagne.fr":{s:".ojc_consent{display:none !important}"},"sendgb.com":{j:"5"},"hemdenbox.de":{j:"5"},"expressen.se":{s:".site-wrapper > .pa-dialog{display:none !important}"},"vectorizer.io":{c:"46"},"biker-boarder.de":{s:".settings-parent{display:none !important}"},"police-auction.org.uk":{j:"5"},"aromatico.de":{s:".js--overlay{display:none !important}"},"handy-deutschland.de":{j:"5"},"uniqa.at":{j:"5"},"yatego.com":{s:"#ycwBg,#ycwMo{display:none !important}"},"weltbild.at":{j:"5"},"lausitznews.de":{s:"#modal_cookie-consent{display:none !important}"},"backstagepro.de":{j:"5"},"radioeins.com":{j:"5"},"imoradar24.ro":{j:"5"},"quooker.de":{j:"5"},"sicomputers.nl":{s:"#mm-cc-wrap{display:none !important}"},"jus.com.br":{c:"53"},"continental-reifen.de":{j:"5"},"andreaminini.com":{s:".privacy{display:none !important}"},"ufz.de":{j:"5"},"ambientedirect.com":{s:".ConsentOverlay,.ModalBackground{display:none !important}"},"esanum.de":{s:"esn-cookie-disclaimer{display:none !important}"},"ti.com":{s:"#tiGDPRecModal{display:none !important}"},"travelbags.nl":{s:".snackbar-container{display:none !important}"},"vtb.ru":{s:"#cookiemsgoffpls{display:none !important}"},"regio-tv.de":{j:"5"},"frontaliers-grandest.eu":{c:"2"},"ofisitebg.com":{s:".bottom-freezed-bar{display:none !important}"},"droneacademy.com":{c:"25"},"pagetiger.com":{j:"6"},"idoc.eu":{j:"5"},"curve.com":{s:"nav#nav > div:not([id]){display:none !important}"},"regioactive.de":{j:"5"},"rittal.com":{j:"5"},"modelmanagement.com":{s:"#cookie_exp{display:none !important}"},"schwaebisch-hall.de":{j:"5"},"td-csk.ru":{s:".cociess{display:none !important}"},"radio-bamberg.de":{j:"5"},"komoedie-steinstrasse.de":{s:"#cookie-row{display:none !important}"},"bo.de":{j:"5"},"fashionid.de":{j:"5"},"minpension.se":{s:"mip-cookie-banner{display:none !important}"},"pepephone.com":{j:"2"},"gezeitenfisch.com":{c:"2"},"umicore.com":{j:"5"},"paylogic.com":{s:"ks-cookie-banner.d-block{display:none !important}"},"unikol.com.pl":{c:"3"},"ibutikk.no":{s:".cookies-message_old{display:none !important}"},"cocktaildatenbank.de":{j:"5"},"nkbv.nl":{c:"20"},"ebike-bausatz.eu":{s:"#modal_cct,.modal-backdrop{display:none !important}"},"dunlop.eu":{s:".cmp-responsivegrid--behavior-cookie{display:none !important}"},"songsterr.com":{j:"5"},"uvex-safety.com":{j:"5"},"autism-society.org":{s:".featherlight{display:none !important}"},"noovo.ca":{s:"#over-politique{display:none !important}"},"neliosoftware.com":{j:"5"},"ultimaker.com":{s:".consent-bar,.um-consent-bar{display:none !important}"},"myfabrics.co.uk":{j:"5"},"stoffe.de":{j:"5"},"heilsteinwelt.de":{j:"5"},"12xl.de":{j:"5"},"xrisiavgi.com":{s:".uk-notification{display:none !important}"},"anacom.pt":{s:'div[id^="cookieDiv"]{display:none !important}'},"etepetete-bio.de":{j:"5"},"tv-trwam.pl":{j:"6"},"spielexikon.de":{j:"5"},"supermenu.com.pl":{s:".spu-box{display:none !important}"},"nypost.com":{s:".nyp-sitewide-notice{display:none !important}"},"jelenia.tv":{j:"5"},"calcolosconto.it":{s:".panel-footer{display:none !important}"},"ls-tc.de":{j:"5"},"nieuwsmotor.nl":{s:".uk-position-bottom{display:none !important}"},"duvel.com":{j:"5"},"legia.com":{j:"5"},"ewinner.pl":{s:".cookiesComponent{display:none !important}"},"care-club.com":{s:".cookie-blocker{display:none !important}"},"notaris.be":{j:"5"},"adler-farbenmeister.com":{j:"5"},"mubi.pl":{s:'.cookies,header ~ div[aria-label*="Cookie"]{display:none !important}'},"tdcx.com":{s:'#___portal > div > [class^="s-mod"]{display:none !important}'},"ns.nl":{j:"5"},"tigota.it":{s:"#ckInfo{display:none !important}"},"cluvens.net":{c:"53"},"karriere.nrw":{s:"#popup{display:none !important}"},"kasuwa.de":{j:"5"},"drogariaspacheco.com.br":{s:".rnk-componente-lgpd{display:none !important}"},"unit4.es":{s:"#cookies-law{display:none !important}"},"larepublica.co":{c:"34"},"agronegocios.co":{c:"34"},"asuntoslegales.com.co":{c:"34"},"bio-rad.com":{s:"#overlay-shadow{display:none !important}"},"vobox.ru":{s:".vb-cookies-bar{display:none !important}"},"elnaro.pl":{c:"3"},"canaldigital.no":{j:"5"},"surelighttech.com":{s:"#growls-br{display:none !important}"},"biosyn.de":{s:"#consent{display:none !important}"},"wabu-care.com":{s:"#root > div > main ~ div{display:none !important}"},"clubsim.com.hk":{c:"20"},"ktn.gv.at":{s:"#l42-cc__body{display:none !important}"},"prohardver.hu":{s:"#accept-container{display:none !important}"},"logout.hu":{s:"#accept_container{display:none !important}"},"express.pl":{s:".newWebsite{display:none !important}"},"ego4u.de":{s:"#consent{display:none !important}"},"tripadvisor.com":{c:"28"},"tripadvisor.fr":{c:"28"},"tripadvisor.de":{c:"28"},"tripadvisor.com.mx":{c:"28"},"tripadvisor.com.ar":{c:"28"},"tripadvisor.cl":{c:"28"},"tripadvisor.co":{c:"28"},"tripadvisor.com.pe":{c:"28"},"tripadvisor.com.ve":{c:"28"},"tripadvisor.co.uk":{c:"28"},"tripadvisor.it":{c:"28"},"tripadvisor.es":{c:"28"},"tripadvisor.se":{c:"28"},"tripadvisor.nl":{c:"28"},"tripadvisor.dk":{c:"28"},"tripadvisor.ie":{c:"28"},"tripadvisor.cz":{c:"28"},"tripadvisor.at":{c:"28"},"tripadvisor.com.gr":{c:"28"},"tripadvisor.fi":{c:"28"},"tripadvisor.co.hu":{c:"28"},"tripadvisor.pt":{c:"28"},"tripadvisor.ch":{c:"28"},"tripadvisor.sk":{c:"28"},"tripadvisor.be":{c:"28"},"tripadvisor.co.za":{c:"28"},"dzbank-derivate.de":{s:"#screen-overlay{display:none !important}"},"secondsol.com":{j:"5"},"qiwi.com":{s:'div[class*="cookies-self"]{display:none !important}'},"zkteco.com":{s:"#cmsg{display:none !important}"},"stapler.de":{j:"5"},"thegapdecaders.com":{c:"25"},"matratzen-concord.de":{c:"20"},"monese.com":{j:"5"},"wwdmag.com":{s:'.intercom-snippet > [class*="gdpr"]{display:none !important}'},"xsplit.com":{s:".Toastify{display:none !important}"},"widiba.it":{s:".wd-cookies{display:none !important}"},"kupredudominulosti.cz":{s:"#ktCookieStatement{display:none !important}"},"guesty.com":{s:".guesty-cookie-notice{display:none !important}"},"startdevchange.com":{s:".cookies-nav{display:none !important}"},"ponte.hu":{c:"53"},"officiallifeintheuk.co.uk":{s:'.shield,div[id*="cookie-preferences"]{display:none !important}'},"henschel-schauspiel.de":{j:"5"},"tieranwalt.at":{j:"5"},"voltadol.at":{j:"5"},"trustmate.io":{s:'div[class*="CookiesWrapper"]{display:none !important}'},"k15t.com":{j:"5"},"birminghammidshires.co.uk":{s:"#cookies{display:none !important}"},"motor-stickers.com":{s:".notification-wrapper{display:none !important}"},"svenskakyrkan.se":{j:"5"},"bebocommunication.fr":{c:"25"},"wackler-group.de":{s:".z7cmbnr{display:none !important}"},"rbinternational.com.pl":{s:"#cms-cookie-approvment{display:none !important}"},"nettbil.no":{s:".nb-cookie-bar{display:none !important}"},"brandwatch.com":{s:"#bw-cookie-sys-active{display:none !important}"},"kunstsammlung.de":{c:"3"},"f8.com":{s:".v-snack--top{display:none !important}"},"eredivisie.pl":{s:'[id^="viewCookies"]{display:none !important}'},"euroleague.net":{j:"6"},"famobi.com":{j:"5"},"ergon.nl":{s:"#ergcb{display:none !important}"},"carinthia.eu":{s:".dcCookieModal{display:none !important}"},"indigogames.xyz":{s:".toast{display:none !important}"},"akelius.com":{j:"5"},"costain.com":{c:"34"},"winfuture.mobi":{s:"#message_id{display:none !important;top:999999px}"},"finantia.com":{j:"6"},"finantia.es":{j:"6"},"qz.com":{s:"#main ~ div{display:none !important}"},"getraenke089.de":{s:".DS_banner_wrapper{display:none !important}"},"vodafone.de":{j:"5"},"mantel.com":{j:"5"},"magdalena24.pl":{c:"3"},"volleybal.nl":{j:"5"},"hondoscenter.com":{j:"5"},"solaranlagen-portal.com":{s:".cookie-consent-modal{display:none !important}"},"outdooractive.com":{j:"5"},"forsea.de":{s:'[id*="fuer_cookie"]{display:none !important}'},"enviam.de":{j:"6"},"restaurant-kitty-leo.de":{j:"5"},"tre.se":{j:"5"},"crowdfinder.be":{c:"20"},"cnet.com":{j:"5"},"vaadin.com":{s:"#haas-cookie-dialog{display:none !important}"},"bus-pvl.kz":{s:"#useragreement{display:none !important}"},"mihoyo.com":{s:".mihoyo-cookie-tips{display:none !important}"},"asgardia.space":{s:"#app > div:first-child > div:first-child,#app > div > button{display:none !important}"},"bodaskins.com":{c:"34"},"unimax.com.tw":{c:"20"},"designerdata.nl":{s:".consent{display:none !important}"},"newser.com":{s:"#divCM{display:none !important}"},"gv.at":{j:"5"},"transparenzportal.gv.at":{s:"#privacypolicy{display:none !important}"},"parlament.gv.at":{s:".popupOverlay{display:none !important}"},"schauhoehle-breitscheid.de":{s:".uk-notification{display:none !important}"},"retrosix.co.uk":{s:".ec-notices{display:none !important}"},"visionexpress.pl":{s:"#bpr_cookie-alert{display:none !important}"},"vibez.pl":{j:"5"},"drogeriedepot.de":{s:"#light-box-bg{display:none !important}"},"cleanmymac.com":{s:".bottom-banner{display:none !important}"},"fastforwardscience.de":{j:"5"},"adventurespiele.net":{j:"5"},"widewalls.ch":{s:".ww-c-cookies__container{display:none !important}"},"intercom.com":{s:"#intercom-cookie-consent-banner{display:none !important}"},"wera.de":{s:'[id^="dsgvo-modal"]{display:none !important}'},"era.int":{s:"#__COOKIE_CONFIRM__{display:none !important}"},"simplybook.me":{c:"34"},"alpenrose.net":{s:".skd-cookie-banner{display:none !important}"},"dieallianzdesguten.com":{j:"5"},"vuejsdevelopers.com":{s:".navbar.is-fixed-bottom{display:none !important}"},"digas.gr":{s:"#tc-pnl{display:none !important}"},"lewissilkin.com":{c:"20"},"elektroversand-schmidt.de":{j:"5"},"archivespasdecalais.fr":{c:"34"},"gmx.es":{j:"5"},"poppulo.com":{c:"19"},"antennaweb.org":{s:'#__next > div > div > [class*="TosCheck"]{display:none !important}'},"prosa.dk":{j:"5"},"buchbinder-auktion.de":{s:"#cookieSettings,#cookieBlur{display:none !important}"},"andyhayler.com":{c:"20"},"iperdi.de":{s:"#consent_info{display:none !important}"},"silentmaxx.de":{j:"5"},"allfirewalls.de":{j:"5"},"uptain.de":{s:"#overlay{display:none !important}"},"mail.com":{j:"5"},"itis.swiss":{j:"5"},"kmweg.de":{c:"23"},"raiffeisen-immobilien.at":{j:"5"},"yuumari.com":{s:"footer ~ .banner-container{display:none !important}"},"fenb.be":{j:"5"},"claravital.de":{s:"#consentmanager{display:none !important}"},"linz.de":{s:"#sfCookie{display:none !important}"},"werkenbijcalco.nl":{j:"5"},"cliffordchance.com":{s:"#div_cc_cc{display:none !important}"},"quiziniere.com":{j:"5"},"happypancake.fi":{s:"#__next > div > .bar{display:none !important}"},"happypancake.se":{s:"#__next > div > .bar{display:none !important}"},"happypancake.nl":{s:"#__next > div > .bar{display:none !important}"},"unedtenerife.es":{j:"5"},"gcorelabs.com":{s:".confirmed_cookie{display:none !important}"},"targoversicherung.de":{j:"5"},"alexmor.ru":{s:".b-accept-cookie{display:none !important}"},"cetelem.es":{s:"#modalCookies{display:none !important}"},"schnelle-online.info":{s:"#container-banner{display:none !important}"},"takko.com":{j:"5"},"rgu.ac.uk":{s:"#cc-modal{display:none !important}"},"amareluna.com":{c:"41"},"foxford.ru":{s:"#cc_container{display:none !important}"},"vacuubrand.com":{s:"#cc_container{display:none !important}"},"tariffuxx.de":{s:"#cc_container,.modal-backdrop{display:none !important}"},"nacex.es":{j:"5"},"startpagina.nl":{s:"body{top:0 !important}"},"myswisslife.fr":{s:"mysl-cookies{display:none !important}"},"eurocupbasketball.com":{j:"6"},"edeka-foodservice.de":{j:"5"},"abo24.de":{j:"5"},"lapaweb.com":{s:".privacy{display:none !important}"},"envoituresimone.com":{j:"5"},"truepartnercapital.com":{j:"5"},"brk.de":{s:"#zcookie{display:none !important}"},"deepstash.com":{s:".Toaster{display:none !important}"},"strummerradio.com":{c:"26"},"dopravnakarta.sk":{s:"#CookieAgree{display:none !important}"},"poplab.mx":{s:"app-cookie{display:none !important}"},"lipapromet.hr":{s:".coockiediv{display:none !important}"},"yna.co.kr":{s:"#layerAgree{display:none !important}"},"frischteigwaren-huber.de":{j:"5"},"aranafansub.moe":{s:"body > div[id][class]{display:none !important}"},"blot.fr":{s:"#tracker-warning{display:none !important}"},"ferienchecker.at":{j:"5"},"justjoin.it":{j:"5"},"playmagnus.com":{s:".pm-header + .pm-black-background{display:none !important}"},"reviewmeta.com":{j:"5"},"dielinke-queer.de":{c:"6"},"plurall.net":{s:"#oPrivallyApp-Bar{display:none !important}"},"lecourrier.es":{s:"#times-legal-notice{display:none !important}"},"freiewaehler.eu":{s:"#myCookie{display:none !important}"},"pixel-offers.com":{s:".v-cookie-policy{display:none !important}"},"ambiance.be":{j:"5"},"connexion-emploi.com":{s:"#privacy-info{display:none !important}"},"connexion-francaise.com":{s:"#privacy-info{display:none !important}"},"aqua-medic.de":{s:"#privacy-info{display:none !important}"},"monheim.de":{j:"5"},"hs-coburg.de":{s:".in2-modal__blackbox{display:none !important}"},"aaal.org":{s:".c-alert-one-time{display:none !important}"},"2gis.ru":{s:"#confirm,#confirm ~ footer{display:none !important}"},"maengelmelder.de":{j:"5"},"xn--mngelmelder-l8a.de":{j:"5"},"emisora.org.es":{c:"41"},"godbolt.org":{j:"5"},"gulbenkian.pt":{j:"5"},"lotto-brandenburg.de":{s:"footer > div,footer > form{display:none !important}"},"brf.be":{s:"#cookieDashboard{display:none !important}"},"dungeondice.it":{s:"#yn-gdpr{display:none !important}"},"eden.de":{s:".cc-blur,.cc-overlay{display:none !important}"},"organzabeutel24.de":{s:".cc-overlay{display:none !important}"},"gardenplaza.de":{s:"#cc_window{display:none !important}"},"larian.com":{c:"34"},"theorg.com":{s:"#app > span{display:none !important}"},"brujulea.net":{s:"#bckie{display:none !important}"},"aramido.de":{s:".banner{display:none !important}"},"ep.de":{j:"5"},"uniroma1.it":{s:".cookie-background{display:none !important}"},"podcloud.fr":{s:"#rgpd-modal{display:none !important}"},"adtinnova.ch":{s:"#popup{display:none !important}"},"figurelist.co":{j:"5"},"careercross.com":{c:"31"},"nextmarkets.com":{s:"nm-cookie-dialog{display:none !important}"},"findino.ch":{s:".CookieView{display:none !important}"},"thairath.co.th":{s:"main > div > footer ~ div{display:none !important}"},"insighttimer.com":{s:"#footer ~ .rounded{display:none !important}"},"piranha.de":{j:"5"},"optikplus.de":{j:"5"},"risekombucha.com":{s:"body > .widget{display:none !important}"},"rechtslupe.de":{s:"#dsChoice{display:none !important}"},"bgbasket.com":{s:"#private_info{display:none !important}"},"yuden.co.jp":{s:'[id^="yuden_gdpr"]{display:none !important}'},"poscielrodzinie.pl":{c:"3"},"danskemedier.dk":{j:"5"},"ardmediathek.de":{s:'#root > div > div > [class*="Root"] > [class*="Message"]{display:none !important}'},"wegedetektiv.de":{j:"5"},"nexthink.com":{s:"c-community-cookie-consent-banner{display:none !important}"},"studiobookr.com":{j:"5"},"mobiliperufficio.com":{c:"34"},"camellia.plc.uk":{s:".sitealert{display:none !important}"},"thameswater.co.uk":{s:".ico-compliance-plugin{display:none !important}"},"toolstation.nl":{j:"5"},"toolstation.fr":{j:"5"},"classic.co.uk":{c:"41"},"healthinsight.ca":{j:"5"},"blocket.se":{j:"5"},"phish-test.de":{j:"6"},"yobetit.com":{s:".CookiesContainer{display:none !important}"},"giantswarm.io":{s:"#consent_dialog{display:none !important}"},"puiklokaal.nl":{j:"5"},"lumeo.chip.de":{j:"5"},"apps112.com":{s:"#s112_accept_cookies{display:none !important}"},"diebayerische.de":{j:"5"},"wohnmobilforum.de":{j:"5"},"wohnen-im-alter.de":{j:"5"},"astroreveal.com":{s:".EU2018{display:none !important}"},"kobietaxl.pl":{s:".cookie_al{display:none !important}"},"swissre.com":{s:".Notification{display:none !important}"},"weeronline.nl":{j:"5"},"kbv.de":{s:".layer-cookie{display:none !important}"},"vitalsource.com":{j:"5"},"wissenstexte.de":{s:"body > dialog{display:none !important}"},"aquanox.com":{c:"3"},"diaexpert.de":{s:".dx_cookiebanner{display:none !important}"},"assetstore.unity.com":{j:"5"},"adomino.net":{s:"#cf__widget-outer{display:none !important}"},"apothekia.de":{j:"5"},"peek-cloppenburg.nl":{j:"5"},"thecrag.com":{s:".banner-message{display:none !important}"},"sea-seek.com":{j:"6"},"geef.nl":{s:"geef-cookie-settings{display:none !important}"},"vpnunlimitedapp.com":{s:".badge_privacy{display:none !important}"},"keepsolid.com":{s:".badge_privacy{display:none !important}"},"vpnlite.net":{s:".badge_privacy{display:none !important}"},"modellbau-metz.com":{j:"5"},"abetterrouteplanner.com":{s:'div[data-e2e="menu-button"] + div:not([data-e2e]){display:none !important}'},"feinewerkzeuge.de":{s:"#cookiefeinewerkzeuge{display:none !important}"},"fine-tools.com":{s:"#cookiefeinewerkzeuge{display:none !important}"},"utensiliprofessionali.com":{s:"#cookiefeinewerkzeuge{display:none !important}"},"tvo.de":{j:"5"},"nowonline.com.br":{s:'div[id^="cookies"]{display:none !important}'},"fiftysix.nl":{j:"5"},"tyg.se":{j:"5"},"easycookasia.de":{c:"25"},"elekta.com":{j:"5"},"spectyou.com":{s:"snack-bar-container{display:none !important}"},"dajar.cz":{j:"6"},"der-schumacher.de":{s:"#kruemel.cookieConfig{display:none !important}"},"donanimhaber.com":{s:".cookie-kutu{display:none !important}"},"neonmob.com":{s:".nm-tips{display:none !important}"},"bestdrive.fr":{j:"5"},"comprovendolibri.it":{s:"#CVLR_AdvPrivacy,#CVLR_AdvPrivacy ~ table{display:none !important}"},"vuweb.vu.nl":{j:"5"},"magentagaming.com":{j:"5"},"soft8soft.com":{s:".total-plus-privacy-policy{display:none !important}"},"spiel.digital":{s:"#root > div:not([style]){display:none !important}"},"kartoteka.by":{s:".privacy-popup{display:none !important}"},"pc-college.de":{s:"#clayer{display:none !important}"},"langeland.nl":{j:"5"},"vinidex.com.au":{s:"#tde-gdpr{display:none !important}"},"stoffen-hemmers.nl":{c:"20"},"riteintherain.com":{s:"#screen-overlay-white{display:none !important}"},"fantasy.motogp.com":{s:"#root > div{display:none !important}"},"info-retraite.fr":{c:"34"},"was-reimt-sich-auf.de":{s:"#cookies-modal,#cookies-backdrop{display:none !important}"},"jimdosite.com":{s:"main ~ div{display:none !important}"},"okpedia.it":{s:".privacy{display:none !important}"},"uswitch.com":{s:"#us-cookies{display:none !important}"},"surveymonkey.com":{s:".mds-gdpr-cookie-banner,.wds-overlay{display:none !important}"},"think-cell.com":{s:"body{margin-top:0 !important}"},"frameworktraining.co.uk":{s:".fwt_cookie{display:none !important}"},"aarsfjv.dk":{s:"dffedb-cookie-consent{display:none !important}",j:"5"},"uniroyal.de":{j:"5"},"megascena.pl":{c:"2"},"evaair.com":{j:"5"},"optima.hr":{c:"34"},"troha-dil.hr":{s:"#kvnotice{display:none !important}"},"tokic.hr":{c:"20"},"deceuninck.hr":{s:".page-wrapper > .popup{display:none !important}"},"7mind.de":{c:"20"},"pizzahut.pl":{s:"#__next > div > div + div:last-child{display:none !important}"},"qinetiq.com":{j:"5"},"greenflagaward.org":{c:"77"},"lotto.pl":{j:"5"},"clasebcn.com":{c:"2"},"pracownia.org.pl":{s:".rodo{display:none !important}"},"frankenfernsehen.tv":{j:"5"},"lurker.pl":{s:".uk-alert{display:none !important}"},"mrgugu.com":{s:'div[data-hook="optanon"]{display:none !important}'},"isc2.org":{s:".notice--general{display:none !important}"},"einstel.pl":{c:"3"},"jelonka.com":{s:".prywatnosc{display:none !important}"},"qwic.de":{j:"5"},"aia.com.my":{s:".alert-dismissable{display:none !important}"},"baeckerladen-ottensen.de":{s:"main ~ div{display:none !important}"},"jobalert.ie":{j:"6"},"motorsportz.nl":{s:".overlay_div,.alert_wrapper{display:none !important}"},"ilmarinen.fi":{j:"5"},"didaxis.fr":{s:"#overlay-coockie{display:none !important}"},"madametussauds.com":{s:".cme-container{display:none !important}"},"allibo.com":{s:"#ck_warn{display:none !important}"},"pas-hammerl.de":{c:"41"},"spielemax.de":{s:"#sukhvir-cookie-bar{display:none !important}"},"mamiweb.de":{s:"#consent{display:none !important}"},"mymusictaste.com":{s:"#__MoaiPortal__Outmost__{display:none !important}"},"openjobmetis.it":{j:"5"},"puzzlemaster.ca":{s:".toast{display:none !important}"},"bansdiving.de":{s:".uk-notification{display:none !important}"},"cliverton.co.uk":{s:".popup-wrapper{display:none !important}"},"besplatka.ua":{s:"#cookie-bottom{display:none !important}"},"eurobuch.com":{s:"#consentBanner1{display:none !important}"},"yello.com":{s:".cookieplaceholder{display:none !important}"},"daemmen-und-sanieren.de":{s:".cookie-consent-modal{display:none !important}"},"foxtons.co.uk":{j:"5"},"phc-muenchen.de":{s:"#cookie_banner_modal,.modal-backdrop{display:none !important}"},"whiskybase.com":{s:".cookie-question{display:none !important}"},"yourstory.com":{j:"6"},"bang-olufsen.com":{j:"5"},"rtlplay.be":{s:".app__content ~ div{display:none !important}"},"sg-zertifikate.de":{j:"5"},"poenvoorgroen.nl":{s:".cc-layer{display:none !important}"},"reimbursement.institute":{s:"#bla{display:none !important}"},"alba.info":{c:"23"},"sued.aldi-liefert.de":{c:"77"},"beamtic.com":{j:"5"},"qrd.by":{s:".keckse{display:none !important}"},"proman-emploi.fr":{j:"5"},"storiepoesie.it":{s:"#stpo_cookielaw_banner{display:none !important}"},"lavoro-over40.it":{s:".lo40-cookie-div{display:none !important}"},"volkswagen.co.uk":{s:"#bannerOverlay{display:none !important}"},"waze.com":{s:".wz-cc-container{display:none !important}"},"konversionskraft.de":{s:".kkcb_portal{display:none !important}"},"commentreparer.com":{j:"5"},"esanum.fr":{s:"esn-cookie-disclaimer{display:none !important}"},"mytime.de":{s:".modal--cookie-notice{display:none !important}.modal__opened{overflow:visible !important}"},"combi.de":{j:"5"},"mathaeser.de":{j:"5"},"kinopolis.de":{j:"5"},"itopvpn.com":{s:".footer ~ .content{display:none !important}"},"gmx.co.uk":{j:"5"},"i-posciel.pl":{c:"3"},"servicestatus.net":{s:".cf__visible{display:none !important}"},"nanu-nana.de":{s:"#overlay{display:none !important}"},"begroting-2021.nl":{j:"5"},"kaliszak.pl":{j:"5"},"lebegesund.de":{s:"lgv-cookie-manager{display:none !important}"},"mazury24.eu":{j:"5"},"tarnobrzeg.info":{j:"5"},"blackboard.com":{j:"5"},"shsu.blackboard.com":{s:".lb-overlay,.lb-wrapper-absolute{display:none !important}"},"unitedwardrobe.com":{s:"#__next > section{display:none !important}"},"herkules-transporte.de":{s:"main ~ div{display:none !important}"},"kontaktlinsenforum.de":{s:".m-cookie{display:none !important}"},"skyfoxlabs.com":{s:".m-cookie{display:none !important}"},"profi-reifen.at":{s:".m-cookie{display:none !important}"},"sehen.de":{s:".m-cookie{display:none !important}"},"hotel-neue-post.de":{s:".evconsent-dialog-container{display:none !important}"},"nibcdirect.de":{j:"5"},"claudiakookt.nl":{s:"#sticky{display:none !important}"},"elexgame.com":{c:"3"},"cc.com":{s:"#balaMainContainer,.module-container-bala{display:none !important}"},"real.de":{j:"5"},"appyshop.co.uk":{c:"34"},"netztest.at":{j:"6"},"mazda-autohaus-schreier-biebergemuend-bieber.de":{j:"5"},"speakout7eleven.ca":{s:"#speakout-cookie-template{display:none !important}"},"financial-ombudsman.org.uk":{s:"#wrap{margin-top:0 !important}"},"antenne.at":{s:".cdk-overlay-container{display:none !important}"},"greakariert.at":{s:"main ~ div{display:none !important}"},"ar-packaging.com":{c:"4"},"gumtree.com":{s:".notification-box{display:none !important}"},"gamefreak.gr":{s:".notification-wrapper{display:none !important}"},"spbtvonline.ru":{s:"#agreeC{display:none !important}"},"ab-m.de":{j:"5"},"swrag.de":{j:"5"},"nzxt.com":{c:"41"},"ogrzewanie-domu.pl":{c:"3"},"autohaus24.de":{j:"5"},"keramiko.pl":{s:"#popAdvertising{display:none !important}"},"fzone.cz":{s:".sys-alert{display:none !important}"},"supergres.com":{s:"#mk-cookie{display:none !important}"},"lavoroeconcorsi.com":{s:"#mk-cookie{display:none !important}"},"eplan.si":{c:"10"},"eplan.bg":{c:"10"},"eplan.com.cn":{c:"10"},"eplan.hr":{c:"10"},"eplan.ro":{c:"10"},"eplan.ch":{c:"10"},"eplan-sk.sk":{c:"10"},"eplan.hu":{c:"10"},"eplan.com.tr":{c:"10"},"eplan.blog":{j:"5"},"pschyrembel.de":{s:"#cbAlert{display:none !important}"},"vivo.com":{s:".common-prompt-privacy-bg,.common-prompt-cookie-bg{display:none !important}"},"celonis.com":{j:"5"},"hygiene-onlineshop.de":{s:'div[id^="ecomas-scch"]{display:none !important}'},"ableton.com":{s:"#biscuits-overlay{display:none !important}"},"ebuyer.com":{s:".cookies-not-accepted{display:none !important}"},"craftsportswear.com":{s:".slide-in.bottom{display:none !important}"},"next-decision.fr":{c:"27"},"media.pl":{s:".ui-notificationbar{display:none !important}"},"dkv-euroservice.com":{s:".ui-widget-overlay{display:none !important}"},"html5games.com":{j:"5"},"meistertask.com":{s:"#cb-wrapper{display:none !important}"},"cooklybookly.com":{s:"main ~ div{display:none !important}"},"jsitor.com":{j:"5"},"idec.org.br":{s:"#block-system-main-menu ~ div + div{display:none !important}"},"psychiatry.org":{s:"#dvPrivacy{display:none !important}"},"dalbyherald.com.au":{s:"#pp-notice{display:none !important}"},"foto-lambertin.de":{j:"5"},"spaceapegames.com":{s:"#root > nav ~ div + div{display:none !important}"},"mcg-digital.de":{c:"25"},"boulderholisticvet.com":{c:"25"},"gutscheine.welt.de":{s:".wlt-privacy-policy-widget{display:none !important}"},"gmx.fr":{j:"5"},"freiwald.com":{j:"5"},"catpublications.com":{s:"#gtmAlert{display:none !important}"},"solid-thueringen.de":{c:"6"},"tvn24.pl":{j:"5"},"mcrent.de":{j:"5"},"wiltmann.de":{s:"#cde{display:none !important}"},"juitnow.com":{j:"5"},"homebook.pl":{s:".hb-layout ~ div{display:none !important}"},"plein.nl":{j:"5"},"etsy.com":{s:'.ui-toolkit[class*="policy-update"],.wt-alert--fixed-bottom{display:none !important}',j:"5"},"wschowa.info":{j:"5"},"seriea.pl":{s:'[id^="viewCookies"]{display:none !important}'},"undo.net":{s:"#fullpersonal,#fullboxpersonal{display:none !important}"},"packlink.com":{s:".snack-bar{display:none !important}"},"deandavid.at":{s:".v-overlay,.v-dialog__content{display:none !important}"},"pee.place":{j:"6"},"postboxmap.com":{j:"6"},"nearest.place":{j:"6"},"boley.de":{s:".ckmsg{display:none !important}"},"totallywicked-eliquid.co.uk":{c:"20"},"sebgroup.com":{s:".disclaimer-container{display:none !important}"},"reidl.de":{j:"5"},"greenpandagames.com":{s:".snackbar{display:none !important}"},"deces-en-france.fr":{s:".s-app-cookies{display:none !important}"},"ultraedit.com":{s:"#pp_b{display:none !important}"},"systemkamera.one":{s:"#privacyopt{display:none !important}"},"asv-grosskrotzenburg.de":{s:"#mb_boxcookie_banner,.bbody{display:none !important}"},"truefire.com":{s:".alert{display:none !important}"},"heldenlounge.de":{j:"5"},"agirc-arrco.fr":{s:".cdk-overlay-container{display:none !important}"},"samengezond.nl":{j:"5"},"manpowergroup.at":{j:"5"},"neuseeland-haus.de":{j:"5"},"uber.com":{s:'body > [data-baseweb="toaster"]{display:none !important}'},"xscode.com":{s:"xsc-cookies-consent{display:none !important}"},"oliverfischer.de":{s:".fullContainer.bgNoRepeat.noBorder{display:none !important}"},"amix.pl":{s:"#policy{display:none !important}"},"hagergroup.com":{s:".cookie-hint-container + #header{top:0 !important}.index__cookie__body + #header + section:first-of-type,.index__cookie__body + #header + a + section:first-of-type{padding-top:0 !important}"},"playboyrussia.com":{s:".disclamer{display:none !important}"},"zaochnik.ru":{s:".agree[data-agreement]{display:none !important}"},"holzhandlung-bremerhaven.de":{s:"#cp-inner{display:none !important}"},"dehn.at":{j:"5"},"eronity.com":{s:"#wantcookies{display:none !important}"},"gaana.com":{j:"6"},"keltican-forte.de":{j:"5"},"greengo.com":{c:"20"},"getraenke-news.de":{j:"5"},"conseil-national.medecin.fr":{j:"5"},"die-akademie.de":{s:"#__next > div:last-child{display:none !important}"},"magoshare.com":{s:"#user_popup{display:none !important}"},"fiction-addiction.com":{c:"41"},"discoverbooks.com":{s:"#privacy_div{display:none !important}"},"ing.it":{s:"#sticky-page-top-cnt,.topalertbanner2{display:none !important}"},"ing.ru":{s:".glass,.dialog{display:none !important}"},"allnet-flat-vergleich-24.de":{s:"#ax_consent_inform{display:none !important}"},"beckett.com":{s:".cookieTkd{display:none !important}"},"bezuzyteczna.pl":{c:"34"},"gesundheitsterminal.de":{s:".jmg-googlemaps-dsgvo-notification{display:none !important}"},"dewalt.ru":{s:".test-mode__wrap{display:none !important}"},"plcnext-community.net":{s:".overlay{display:none !important}"},"lablue.de":{c:"41"},"bvkaiserslautern.de":{c:"2"},"crowd1.com":{s:".cookie-concent{display:none !important}"},"burg-bentheim.de":{s:".DSbox{display:none !important}"},"abramsbooks.com":{s:"#abr_cookie_modal{display:none !important}"},"raiffeisen-laborservice.de":{s:".nptbccm{display:none !important}"},"szekelyhon.ro":{s:"#page-mask{display:none !important}"},"envialia.com":{s:".tco-content-dock{display:none !important}"},"byclickeat.fr":{s:".cdk-overlay-container{display:none !important}"},"wago.com":{s:".wg-modal__overlay{display:none !important}"},"medidata.ch":{c:"20"},"gannikus-original.de":{c:"34"},"wsz-marburg.de":{s:"#js-cookie-text{display:none !important}"},"sharewise.com":{j:"5"},"weilburger.com":{s:".lus-cookie{display:none !important}"},"opito.com":{s:"#app > footer ~ div{display:none !important}"},"xn---43-9cdulgg0aog6b.xn--p1ai":{j:"6"},"onlinezugangsgesetz.de":{j:"5"},"zonmw.nl":{s:".header-notice{display:none !important}"},"aditum.de":{s:"#c_bg{display:none !important}"},"haus-des-meeres.at":{j:"5"},"novadb.com":{s:"#gatsby-focus-wrapper > footer ~ div{display:none !important}"},"gamingonlinux.com":{j:"5"},"alfakassan.se":{c:"2"},"esv-schwenger.de":{j:"5"},"elrongmbh.de":{j:"5"},"dnvgl.com":{c:"41"},"bonami.pl":{j:"5"},"tvaktuell.com":{j:"5"},"dhl.ru":{s:"#modcookie{display:none !important}"},"gehrplastics.com":{s:".module-dataprotection{display:none !important}"},"gehr.de":{s:".module-dataprotection{display:none !important}"},"kwyk.fr":{j:"5"},"canbeuseful.com":{c:"2"},"thenakedpharmacy.com":{c:"20"},"qbilon.net":{c:"20"},"ffr.fr":{j:"5"},"tu-clausthal.de":{s:"#accessibility-selector{display:none !important}"},"playstation.com":{s:'.psw-bottom-left[data-qa="gdpr-setting"]{display:none !important}'},"atozmath.com":{s:"#consentframe{display:none !important}"},"medcalc.org":{s:"#consentframe{display:none !important}"},"labyrinthos.co":{s:".floating.bottom{display:none !important}"},"esmarket.gr":{s:"#mstm-cookie{display:none !important}"},"cleanairgm.com":{j:"6"},"cajeando.com":{c:"34"},"guckaistuben-poppenhausen.de":{s:"main ~ div{display:none !important}"},"cbc.ca":{s:"#alert_modal.privacy{display:none !important}"},"aromatika.com.pl":{c:"3"},"onsite.fun":{s:".MuiSnackbar-root{display:none !important}"},"twe.no":{s:"body > div > div:last-child{display:none !important}"},"supermedia.pl":{c:"3"},"bild-online.dk":{s:"#fixedDiv2{display:none !important}"},"spbtv.com":{s:'#app > div > div > [class*="container"]{display:none !important}'},"easypark.fr":{s:'.header > [style*="visible"]{display:none !important}'},"makeproaudio.com":{j:"5"},"buchcopenhagen.dk":{j:"5"},"dragonshop.gr":{s:".header-banner{display:none !important}"},"medici-stomatologi.ro":{s:"#cookbox{display:none !important}"},"multibook.pl":{c:"3"},"sozialleistungen.info":{s:".toast{display:none !important}"},"techoral.com":{s:"#myCoockie,.modal-backdrop{display:none !important}.modal-open{overflow:visible;padding:0}"},"notebookgalerie.de":{s:".loading-mask{display:none !important}"},"e-fundresearch.com":{j:"6"},"niunuernberg.de":{s:"main ~ div{display:none !important}"},"howsmart.pl":{c:"25"},"spw.ru":{s:".confidential-block{display:none !important}"},"sembella.pl":{s:".rodo{display:none !important}"},"nobilia.de":{j:"5"},"bde.es":{s:"#dvCookies{display:none !important}"},"motorsportmarkt.de":{j:"5"},"sheego.de":{j:"5"},"audacity-kurs.de":{s:".elo-snackbar{display:none !important}"},"search.itaa.be":{j:"5"},"feldbusse.de":{s:".show-cookie .footer{display:none !important}"},"edyoda.com":{s:'.App [class*="UserConsentBox"]{display:none !important}'},"ktr.com":{j:"5"},"eloboost24.eu":{c:"20"},"xiao-mi.fr":{c:"26"},"popsugar.co.uk":{j:"5"},"brusarul.com":{c:"2"},"hidrive.com":{j:"5"},"klaviano.com":{s:"#cooki_box{display:none !important}"},"cookmedical.eu":{s:".cook-cookie-banner{display:none !important}"},"bonarkacitycenter.pl":{c:"2"},"faktograf.hr":{c:"25"},"antarestech.com":{s:"#consent{display:none !important}"},"deceuninck.cz":{s:".popup.block.next-top{display:none !important}"},"hoklartherm.de":{s:".grey_ovarlay{display:none !important}"},"fashionunited.com":{s:".mdc-snackbar{display:none !important}"},"nxtbookmedia.com":{s:"#gdpr-pop{display:none !important}"},"nxm.ro":{s:".footer_notif{display:none !important}"},"rondel.pl":{s:"#rondelpl_cookies{display:none !important}"},"apricon.se":{s:"#glass,#approvebox{display:none !important}"},"hotelsbarriere.com":{j:"5"},"huss-licht-ton.de":{j:"5"},"brico.be":{s:".mxd-new-cookie-bar{display:none !important}"},"o2.fr":{j:"5"},"schindelhauerbikes.com":{s:"#etrpop{display:none !important}"},"trainsweateat.com":{s:"#root > div > div:first-child > div + div:last-child{display:none !important}"},"actionsport-rainbowdivers.de":{j:"5"},"vivaconagua.org":{s:"#sccBanner{display:none !important}"},"112groningen.nl":{j:"5"},"amd.com":{s:"#privacy-popup{display:none !important}"},"nedeljnik.rs":{s:"#kuki_upozorenje{display:none !important}"},"wohnkonzept.co.at":{s:".ConsentBanner{display:none !important}"},"playsnake.org":{c:"34"},"playtictactoe.org":{c:"34"},"schellenberg.de":{j:"5"},"content.de":{s:'div[id*="hinweis-cookie"]{display:none !important}'},"livexlive.com":{s:".tos-footer{display:none !important}"},"kissnofrog.com":{j:"5",s:".nt-cc{display:none !important}"},"konzerthaus-dortmund.de":{j:"5"},"egumenita.ro":{c:"34"},"dellrefurbished.com":{j:"5"},"spandidos-publications.com":{s:".footer > #navbar{display:none !important}"},"promondo.de":{j:"5"},"jobbsafari.se":{s:'#__next > [class^="Ufti"]{display:none !important}'},"grdf.fr":{s:"#cookie,.modal-backdrop{display:none !important;visibility:hidden}"},"plaster-miodu.pl":{s:"#growls-br{display:none !important}"},"dialdirect.co.uk":{c:"25"},"leica-microsystems.com":{j:"5"},"centogene.com":{j:"5"},"affairenmarktplatz.com":{s:"#overlay-content{display:none !important}"},"i-parcel.com":{s:".iparCookieNotice{display:none !important}"},"luftreinigung24.de":{s:"main ~ div{display:none !important}"},"computeruniverse.net":{s:".c-consentLayer__drop{display:none !important}"},"hero-wars.com":{s:".modal-cookie{display:none !important}"},"javea.com":{s:"#dcip-cookies{display:none !important}"},"camtasia-training.de":{s:"#lscookr_form{display:none !important}"},"fleurop.nl":{s:".app-info{display:none !important}"},"immobilien-zeitung.de":{s:"iz-cookie-banner{display:none !important}"},"surveymonkey.de":{s:".mds-gdpr-cookie-banner,.wds-overlay{display:none !important}"},"groupelaposte.com":{s:"#root > div > div{display:none !important}"},"bremerhaven.de":{j:"5"},"schoenbrunn.at":{s:"#modal-cookie-notice,.modal-backdrop{display:none !important}"},"gerarddarel.com":{s:"#cookieLab{display:none !important;z-index:-1}"},"kitchentime.no":{c:"20"},"kitchentime.se":{c:"20"},"kitchentime.fi":{c:"20"},"kitchentime.dk":{c:"20"},"kitchentime.de":{c:"20"},"kitchentime.com":{c:"20"},"telesec.de":{j:"5"},"kiloo.com":{s:".cmp-main{display:none !important}"},"zebrapen.ca":{s:".spu-box{display:none !important}"},"linfusion.fr":{s:".modal-cookie{display:none !important}"},"swapcard.com":{s:'div[class*="StyledCookie"]{display:none !important}'},"ankerbrot.at":{j:"5"},"bigmeatlove.de":{s:"#consent{display:none !important}"},"idera.com":{s:".idCookiePolicyBanner{display:none !important}"},"nikkei.com":{s:".k-privacy,#ccpa-block{display:none !important}"},"dreame-technology.com":{s:".jsFixedMessage{display:none !important}"},"shadowofwar.com":{j:"5"},"bretagne.bzh":{s:"#cnil-container{display:none !important}"},"bikemag.hu":{s:"#_ning_gdpr_approve{display:none !important}"},"dangenentertainment.com":{j:"5"},"vedes.com":{s:"#ch{display:none !important}"},"vedes.de":{s:"#ch{display:none !important}"},"trixie.de":{s:".modal_cookie_banner,#DOMWindowOverlay{display:none !important}"},"keb.de":{j:"5"},"vytenio4.lt":{s:".cookie-cover{display:none !important}"},"dresdner-fachanwaelte.de":{j:"5"},"phoenix.de":{j:"3"},"targeo.pl":{j:"5"},"systembolaget.se":{j:"6"},"seekube.com":{s:"#app > div:nth-child(2):not(:last-child){display:none !important}"},"celeraone.com":{j:"5"},"breitbandmessung.de":{j:"5"},"jokers.de":{j:"5"},"ostufer.net":{s:'div[id^="popdown"]{display:none !important}'},"tohotheater.jp":{s:".optIn{display:none !important}"},"peachnewmedia.com":{s:".ui-widget-overlay{display:none !important}"},"profilcultura.it":{c:"20"},"dhlparcel.co.uk":{c:"34"},"die23er.de":{s:"#ot_consent{display:none !important}"},"darting.de":{s:".acookie{display:none !important}"},"ahrsteig.de":{s:".modal{display:none !important}"},"falano.de":{s:"#overlay{display:none !important}"},"rexel.fr":{c:"77"},"rexel.de":{c:"77"},"vanbeekkappers.nl":{s:"main ~ div{display:none !important}"},"genickbruch.com":{s:'body > div > div[style*="fixed"]{display:none !important}'},"feuertrutz-katalog.de":{j:"5"},"r-raymon-bikes.com":{j:"5"},"hw-zuschuss.daimler.com":{s:".cdk-overlay-container{display:none !important}"},"xentry.daimler.com":{s:".xf-cookie-hint-color{display:none !important}"},"espadrij.com":{j:"5"},"mazda-autopark-rath-duesseldorf.de":{j:"5"},"uelzener.de":{j:"5"},"bausep.de":{j:"5"},"cataloxy.es":{s:"#cookies_cond{display:none !important}"},"nigiara.it":{s:".privacy{display:none !important}"},"blitzortung.org":{s:"#topdiv{display:none !important}"},"flotte.de":{s:"#rodo{display:none !important}"},"mesvoisins.fr":{s:'.c-layout-wrap ~ [class*="goodhood"]{display:none !important}'},"cleveron.com":{s:".cookie-accept-modal{display:none !important}"},"fandomauth.gamepedia.com":{j:"5"},"sportpirate.com":{s:"#lawdiv{display:none !important}"},"cyclad.org":{s:".bandeauninfo{display:none !important}"},"spektrumsports.com":{c:"20"},"xenofit.de":{s:".xenofit-cookiebar{display:none !important}"},"solcom.de":{j:"5"},"sigma-foto.de":{s:".cc-popup-wrapper{display:none !important}"},"werkspot.nl":{s:"#__next > div > div:first-child{display:none !important}"},"reputationup.com":{c:"25"},"museenkoeln.de":{s:"#ac_cookiebanner{display:none !important}"},"job-impulse.com":{j:"5"},"speedmeter.sk":{s:"#w_notice{display:none !important}"},"pasteleria-jr.es":{j:"5"},"osborn.com":{s:".ob-home-gdpr-banner-widget{display:none !important}"},"forumfree.it":{s:".jnote,body > .note{display:none !important}"},"eltasat.cz":{s:".shadow.ov{display:none !important}"},"farmer.pl":{j:"5"},"basenio.de":{j:"5"},"laboutiqueharibo.fr":{s:".js-HarCookie{display:none !important}"},"peoplesenergy.co.uk":{s:"#prefs{display:none !important}"},"flowkey.com":{s:'#gatsby-focus-wrapper > [role="alert"]{display:none !important}'},"cassart.co.uk":{s:".global-promotion{display:none !important}"},"model-bazar.cz":{c:"3"},"germany.travel":{j:"5"},"privacy.net":{s:".di-cookie-consent-pop{display:none !important}"},"innsbruck-airport.com":{j:"5"},"psiquiatria.com":{j:"5"},"helpucover.co.uk":{s:"#consent{display:none !important}"},"finex.cz":{s:".finex-cookiebar{display:none !important}"},"prosenectute.ch":{c:"3"},"dlawas.info":{j:"5"},"infostrow.pl":{j:"5"},"halowawa.pl":{j:"5"},"popsockets.co.uk":{s:".veil,.modal-backdrop{display:none !important}"},"largenet.de":{s:"#largenet_consent{display:none !important}"},"tw.de":{s:".uk-notification{display:none !important}"},"techpackmobileandgadgetcover.co.uk":{s:"body > .alert:nth-of-type(1){display:none !important}"},"boords.com":{s:"body > div > .fixed{display:none !important}"},"zs1mm.home.pl":{c:"7"},"astleyclarke.com":{s:"#ac-cookie-notice{display:none !important}"},"polskieskarby.pl":{c:"34"},"meble-4you.pl":{j:"5"},"roztoczanskipn.pl":{j:"5"},"parentclub.scot":{c:"20"},"rte.ie":{j:"5"},"cimetieres-de-france.fr":{s:"#js-header-cookie{display:none !important}"},"calimove.com":{s:"#overlay{display:none !important}"},"kartell.com":{s:"#gdprPopup{display:none !important}"},"orderbird.com":{s:"#modal{display:none !important}"},"toggl.com":{s:".toggl-cw-body,.consent-wrapper{display:none !important}"},"kora.fr":{c:"20"},"leirovins.be":{j:"5"},"zurich.co.uk":{s:"#opnotification{display:none !important}"},"whitepages.com":{s:".v-snack__wrapper{display:none !important}"},"jiosaavn.com":{s:".c-toast{display:none !important}"},"wegrow.info":{c:"77"},"clickandtoner.es":{s:"#beapp_cookies{display:none !important}"},"britannica.com":{s:".bk-cookie-alert-snackbar{display:none !important}"},"clip-zip.com":{c:"42"},"diamantor.fr":{c:"42"},"lamaletaintima.com":{c:"42"},"lasvinotecas.es":{c:"42"},"norskuniform.no":{c:"42"},"plaidissimo.fr":{c:"42"},"grupovaughan.com":{c:"42"},"ehs.tv":{c:"42"},"smaer.ro":{c:"42"},"todoesled.com":{c:"42"},"porezna-uprava.hr":{s:"#cookie,.modal-cookie{display:none !important}"},"playmagic.com.mt":{s:"#POPUPS_ROOT{display:none !important}"},"taxi-point.co.uk":{s:".powr-popup{display:none !important}"},"wizconnected.com":{s:".wiz-cookie-policy{display:none !important}"},"vitall.co.uk":{s:"#gdpr-modal{display:none !important}"},"point-s.de":{c:"34"},"oneal-b2b.com":{j:"5"},"second-hand-ikea.com":{j:"5"},"tbs-aachen.de":{s:".new_cooky_layer{display:none !important}"},"surfacescan.co.uk":{c:"25"},"natuurmonumenten.nl":{j:"5"},"binance.com":{j:"5"},"ewebtrans.com":{s:"#webtrans_cookie_bar{display:none !important}"},"schullv.de":{j:"5"},"sync.me":{c:"2"},"futbollab.com":{s:"#overbox-politica{display:none !important}"},"ivideon.com":{s:'.iv-ui-website-cookie-compliance,.iv-persistent-notification[data-id*="cookie"],.iv-ui-q2a-cookie-compliance{display:none !important}'},"oxi-corp.com":{s:".cookies-modal{display:none !important}"},"cam4.com":{s:"#promptArea{display:none !important}"},"cam4.es":{s:"#promptArea{display:none !important}"},"cam4.fr":{s:"#promptArea{display:none !important}"},"holodilnik.ru":{s:".alert-compliance{display:none !important}"},"geekjack.net":{s:"#gdpr{display:none !important}"},"vitesse-waterontharder.com":{j:"5"},"meder-frankfurt.de":{s:"#ch{display:none !important}"},"portalnovosti.com":{c:"34"},"amministrazionicomunali.it":{j:"5"},"schaecke.at":{c:"77"},"impulse.de":{j:"5"},"rechtsanwaelte-pesch.de":{s:"#privacy{display:none !important}"},"spirou.com":{s:".modal-cookies{display:none !important}"},"vr-expert.nl":{c:"25"},"dish.com":{s:".ccpa{display:none !important}"},"webdamdb.com":{j:"5"},"totallymoney.com":{s:".tm-cookie-banner__spacer{display:none !important}"},"freeyou.ag":{j:"5"},"tickets.motorsport-total.com":{s:"#app > div:last-child:not(:only-child){display:none !important}"},"insomnia.gr":{s:"#elInsomniaCookieBar{display:none !important}"},"consolewars.de":{s:".cookies_dim{display:none !important}"},"blanco.com":{s:"#cookie-layer{display:none !important}"},"brightstar.com":{j:"5"},"fitnessraum.de":{s:".cc-gdpr-modal,.modal-backdrop{display:none !important}"},"algolia.com":{s:"footer ~ .pos-fixed{display:none !important}"},"chargemyhyundai.com":{j:"5"},"elkem.com":{j:"6"},"poessl4you.de":{c:"3"},"praxis.nl":{s:".mxd-new-cookie-bar{display:none !important}"},"tonershop.at":{j:"6"},"coinmarket.network":{s:"#policymodal{display:none !important}"},"virtual-railroads.de":{s:".gdpr_hook{display:none !important}"},"bistro-pavillon.de":{s:"main ~ div{display:none !important}"},"golfmonkeyz.com":{s:"main ~ div{display:none !important}"},"formula1game.com":{s:"#root > div:not([class]) > div{display:none !important}"},"heizung-solar24.de":{s:".becc-ol{display:none !important}"},"scandinavianphoto.no":{s:'#content-container ~ [style*="height:0"] ~ div{display:none !important}'},"devmedia.com.br":{s:".termos-politica{display:none !important}"},"verce.me":{j:"6"},"cheapenergy24.de":{j:"5"},"ujam.com":{s:".ujam-cookie-consent{display:none !important}"},"yoko.de":{j:"5"},"rs-online.com":{s:'.cookie-consent,#__next > div > div > div[class^="banner"],#__next > div[class^="_"]:first-child{display:none !important}'},"ricochet.com":{s:"#ricochet-cookie-bar{display:none !important}"},"wwz.ch":{j:"5"},"emarketer.com":{s:".emgdpr-cookies{display:none !important}"},"kochen-und-design.de":{c:"7"},"napaonline.com":{s:".CCPA{display:none !important}"},"quooker.be":{j:"5"},"kofc.org":{s:"kc-cookie-consent{display:none !important}"},"france24.com":{j:"5"},"spalwart.com":{s:"#wa-message-container{display:none !important}"},"die-medienanstalten.de":{j:"5"},"porttechnology.org":{c:"25"},"taiga.io":{s:".landend-infobar-dark{display:none !important}"},"velkaepocha.cz":{s:".machr-cookie-message{display:none !important}"},"larpmachen.de":{s:"main ~ div{display:none !important}"},"wanted.law":{j:"5"},"urgibl.de":{j:"5"},"kunzbaumschulen.ch":{j:"5"},"ptc-auto.hu":{s:"#hCookiePanel{display:none !important}"},"ridero.ru":{s:'#app > [class*="cont"],.b-root > [class*="layout"] > [class*="cont"]{display:none !important}'},"adventuregamestudio.co.uk":{c:"2"},"puritech.be":{s:'div[id*="cookie__modal"]{display:none !important}'},"geolive.org":{j:"5"},"microchip.com":{s:".cookieSettings,.mchp-cookie{display:none !important}"},"karkkikuja.fi":{s:"#cp_popup{display:none !important}"},"indiatimes.com":{s:".consent-container,.du_consent,.cookie_stng{display:none !important}"},"stwbs.de":{j:"5"},"beertasting.com":{s:".bts-cookie-notice{display:none !important}"},"legomastersloteria.pl":{s:"#cookies_modal{display:none !important}"},"urlaubsgruss.com":{s:".dscheck{display:none !important}"},"balkdragers.com":{s:".stn-cookies{display:none !important}"},"computerprofi.com":{j:"5"},"asiawok-langwasser.de":{s:"main ~ div{display:none !important}"},"lepona.de":{j:"5"},"foxxshirts.de":{j:"5"},"textil-grosshandel.eu":{j:"5"},"sekwens.com":{s:"#module-aboveBox{display:none !important}"},"ventocom.at":{j:"5"},"resultsbase.net":{j:"5"},"hot.at":{j:"5"},"hot.si":{j:"5"},"hot.dk":{s:"#scw{display:none !important}"},"rba.hr":{s:"#cd-module-main{display:none !important}"},"rbainvest.hr":{s:"#cd-module-main{display:none !important}"},"mathem.se":{j:"5"},"nicequest.com":{s:"#footer ~ div{display:none !important}"},"orange.pl":{s:'#__next > div > section[role="region"],.opl-cookie-control{display:none !important}'},"stadt-galerie-hameln.de":{s:"#mdl-overlay{display:none !important}"},"lifepointspanel.com":{j:"5"},"pitstop.de":{j:"5"},"schaeffler.fr":{s:".scha__cookie-banner{display:none !important}"},"auchan.ru":{s:"#root > div > footer ~ div{display:none !important}"},"no-q.info":{s:"main ~ div{display:none !important}"},"migusto.migros.ch":{s:'[data-js-module*="cookie-banner"]{display:none !important}'},"hbs.hu":{s:"#sapper > footer{display:none !important}"},"ids-imaging.com":{s:"#privacycheck{display:none !important}"},"jateknet.hu":{s:"#profiling-accept{display:none !important}"},"esko-catering.de":{c:"20"},"agrarshop-online.com":{s:"#darkBack{display:none !important}"},"ztedevices.com":{s:".cookies_tips{display:none !important}"},"fernsehturm-stuttgart.de":{s:"#modalCookie,#cookieManagment{display:none !important}"},"dstreet.pl":{s:"#ToplayerCover,#ToplayerConsent{display:none !important}"},"athlinks.com":{s:"#footer-container ~ div{display:none !important}"},"skysails-marine.com":{s:".am-notification{display:none !important}"},"checkmyfile.com":{s:"#messageBanner{display:none !important}"},"matspar.se":{j:"5"},"shpr.fr":{s:"#script_analytics{display:none !important}"},"drewag.de":{s:".mcfCookieAcceptanceContainer{display:none !important}"},"zekur.nl":{j:"5"},"mitgas.de":{j:"5"},"norddeutsch-gesund.de":{j:"5"},"regionalnetze-linzgau.de":{s:"#backgroundMessagebox{display:none !important}"},"services.gov.gr":{s:".MuiSnackbar-root{display:none !important}"},"clargesmayfair.com":{j:"5"},"kingstoncentre.co.uk":{j:"5"},"moomoo.io":{j:"5"},"datasite.com":{s:".policybar{display:none !important}"},"dow.com":{s:".screenBlockOverlay{display:none !important}"},"fichier-pdf.fr":{j:"5"},"petit-fichier.fr":{j:"5"},"checkmate.gr":{s:".uk-notification{display:none !important}"},"helium.com":{s:"article > footer ~ div{display:none !important}"},"mausefallemuelheim.info":{s:"main ~ div{display:none !important}"},"invk.nl":{j:"5"},"it-shop24.pl":{c:"3"},"degum.de":{s:"#cookiemanager{display:none !important}"},"lignoshop.de":{j:"5"},"nespresso.com":{s:"#nes_cookie_banner_wrapper{display:none !important}"},"regione.lombardia.it":{j:"5"},"surfachem.pl":{s:".rcsc-popup{display:none !important}"},"ogladajanime.pl":{j:"5"},"tri-shop24.de":{c:"20"},"osehero.pl":{j:"5"},"dell-xps.chip.de":{j:"5"},"pronovabkk.de":{j:"5"},"thincast.com":{j:"5"},"sprintersports.com":{s:".cookies-settings{display:none !important}"},"ryanair.com":{s:"rooms-cookies-policy,.trboModuleContainer,.ryr-cookie-popup{display:none !important}"},"robe-materiel-medical.com":{s:".w3-container{display:none !important}"},"digitfoto.de":{s:"#cookieds,#cookiedsdetails,#bodygrau{display:none !important}"},"bim.yaskawa.com":{s:".pop{display:none !important}"},"brwahl.de":{j:"5"},"betriebsrat.de":{j:"5"},"snp-online.de":{j:"5"},"verla.de":{j:"5"},"madalinliviu.ro":{c:"34"},"stadtwerke-stuttgart.de":{s:".modal--cookies{display:none !important}"},"magazineexchange.co.uk":{c:"29"},"jaimeattendre.com":{s:".p_CookieConsent{display:none !important}"},"turbozentrum.de":{s:"#consentmanager{display:none !important}"},"oventrop.com":{j:"5"},"jurnalul.ro":{s:"#gdpr{display:none !important}"},"audiotop.pl":{c:"3"},"medicina.ru":{s:"#policy{display:none !important}"},"avid.com":{j:"5"},"houthandelonline.nl":{c:"77"},"neucamed.pl":{s:".cookiesactive .main{margin-top:0 !important}"},"mcl.de":{j:"5"},"mahindra.com":{s:".privacy-warning{display:none !important}"},"romshub.com":{j:"5"},"neilpatel.com":{s:"#bottom-bar{display:none !important}"},"lcp.uk.com":{c:"41"},"theos-imbiss.de":{s:"main ~ div{display:none !important}"},"perfumesclub.com":{c:"34"},"medimax.de":{j:"5"},"ruegenwalder.de":{s:'body > [id*="csdialog"]{display:none !important}',j:"5"},"developpement-informatique.com":{s:".gdpr-settings{display:none !important}"},"fass.se":{s:"#cookie-dialog-sidebar{display:none !important}#main-content{margin-left:0 !important}"},"merrell.pl":{j:"5"},"powercolor.com":{s:".Privacy{display:none !important}"},"hofer.at":{s:"#c-modal,.modal-backdrop{display:none !important}"},"radio8.de":{j:"5"},"celticfc.com":{s:".popup{display:none !important}"},"deutschertourismuspreis.de":{j:"5"},"markt-oberstdorf.de":{j:"5"},"tramino.de":{j:"5"},"ok-bergbahnen.com":{j:"5"},"hotel-mohren.de":{j:"5"},"alpinschule-oberstdorf.de":{j:"5"},"oberstdorf.de":{j:"5"},"isny.de":{j:"5"},"kjell.com":{j:"6"},"arteradio.com":{j:"5"},"fil-luge.org":{j:"5"},"timeshop4you.co.uk":{c:"3"},"schloss-arkaden.de":{s:"#mdl-overlay{display:none !important}"},"codeblick.de":{c:"20"},"smelettronica.com":{s:".notification-wrapper{display:none !important}"},"algoriddim.com":{s:"#consent{display:none !important}"},"pruefungshelden.de":{j:"6",s:".elo-btn{display:none !important}"},"elopage.com":{j:"6",s:".elo-btn{display:none !important}"},"anhinternational.org":{j:"5"},"4webs.es":{s:"#cookiesdiv{display:none !important}"},"abfallwirtschaft-loerrach-landkreis.de":{s:"#advertArea{display:none !important}"},"boohooman.com":{j:"5"},"karenmillen.com":{j:"5"},"amzpecty.com":{j:"5"},"m-plan.com":{s:".modal{display:none !important}"},"wienenergie.at":{j:"5"},"oxinst.com":{j:"5"},"szkolnenaklejki.pl":{c:"3"},"bueffelbill.com":{s:".cn{display:none !important}"},"stiftungsland.de":{c:"6"},"matkahuolto.fi":{s:"#gatsby-focus-wrapper > div > div > div{display:none !important}"},"eufylife.com":{s:"#app > div:last-child{display:none !important}"},"jk-sportvertrieb.de":{j:"5"},"austrian-standards.at":{s:".as-consent-wrapper{display:none !important}"},"hawe.com":{c:"23"},"aha-buch.de":{s:".bg{display:none !important}"},"obd2-elm327.es":{s:".KS-cookies-div{display:none !important}"},"glavcom.ua":{s:".kyk_menu{display:none !important}"},"nindo.de":{s:"article > div:first-child,article > .center,article > .box-shadow{display:none !important}"},"iif.com":{s:".Popup-overlay{display:none !important}"},"telekom.com":{j:"5"},"highlight-led.de":{s:"#PrivacyCategoryAlert,.modal-backdrop{display:none !important}"},"pizzabakeren.no":{s:".politics_box{display:none !important}"},"pizza-baker.com":{s:".politics_box{display:none !important}"},"pizzabaker.co.uk":{s:".politics_box{display:none !important}"},"zomato.com":{s:"#root > div:first-child:not(:only-child){display:none !important}"},"pizza-markdorf.de":{c:"20"},"pizza-pepe-volkach.de":{j:"5"},"toni-maccaroni.de":{j:"5"},"aldiventskalender.de":{s:".cookie-consent-nord-app{display:none !important}"},"electrogarden.pl":{c:"3"},"tammah.com":{s:".slideInUp{display:none !important}"},"bundesanzeiger.de":{j:"5"},"unternehmensregister.de":{j:"5"},"covid19.gov.lv":{s:".gdpr_discplaimer{display:none !important}"},"data.gov.lv":{s:"#AnalyticsPrompt{display:none !important}"},"gov.lv":{j:"5"},"riga.lv":{j:"5"},"iq.com":{j:"5"},"farmina.com":{c:"2"},"rum21.no":{s:"#root > div:last-child > span{display:none !important}"},"warehousefashion.com":{j:"5"},"pracuj.pl":{s:".cookie-agreements{display:none !important}"},"harvard.edu":{s:"#osmyModal{display:none !important}"},"lindenberg-bringts.de":{j:"5"},"hellospain.de":{c:"42"},"pushsquare.com":{s:".dgp-consent{display:none !important}"},"bike-components.de":{j:"5"},"unimi.it":{s:"body > .container > .alert{display:none !important}"},"searchengines.guru":{s:".float-vertical-panel{display:none !important}"},"d-power-modellbau.com":{j:"5"},"mcmusic.ro":{s:"#ccContainer{display:none !important}"},"schwarzlicht.de":{c:"2"},"dji.com":{s:'#cookie-tip,div[class*="style__cookie-policy"],.cc-bar,.cc-window{display:none !important}'},"allgeier-it.de":{s:"#cookieconsentmodal,.modal-backdrop{display:none !important}"},"grainesdecurieux.com":{s:"main ~ div{display:none !important}"},"myfactory.com":{s:"body > div:first-child{display:none !important}"},"royaldanishacademy.com":{s:".b14cc{display:none !important}"},"dailybest.it":{s:"#bcc-black,#bcc-consent{display:none !important}"},"rockit.it":{s:"#bcc-black,#bcc-consent{display:none !important}"},"monalbumphoto.fr":{s:".arc3-cookie-bar{display:none !important}"},"wetaca.com":{s:".main > div ~ div:last-child{display:none !important}"},"gurtshop.de":{s:".sticky-wrapper{display:none !important}"},"aimotive.com":{j:"6"},"volkswohnung.com":{s:".vw-cookiebanner{display:none !important}"},"tsouvelas.gr":{s:".glcn_accept_cookie{display:none !important}"},"lsvd.de":{s:"#consent-request{display:none !important}"},"victoriananursery.co.uk":{c:"2"},"mobilepay.dk":{s:'div[class*="cookie-dialog"]{display:none !important}'},"filecleaner.com":{s:".cs{display:none !important}"},"schaeffler.de":{s:".scha__cookie-banner{display:none !important}"},"intexty.com":{c:"20"},"toby.ink":{s:"#cookie_kwan{display:none !important}"},"ellexgk.cz":{s:".CA{display:none !important}"},"generali.si":{s:".cd-overlay,.cd-module{display:none !important}"},"boxeez.no":{s:".bz-no-click{display:none !important}"},"finansavisen.no":{s:"#finansavisen-gdpr-disclaimer{display:none !important}"},"kapital.no":{s:"#finansavisen-gdpr-disclaimer{display:none !important}"},"vzajemna.si":{c:"3"},"akubiz.biz":{c:"3"},"biotechusa.hu":{j:"5"},"biotechusa.fr":{j:"5"},"sixt-neuwagen.de":{j:"5"},"sixt-leasing.de":{j:"5"},"gov.br":{s:"#lgpd-cookie-banner-janela,#politicaPrivacidade{display:none !important}"},"csub.edu":{s:"#consent-box{display:none !important}"},"heinrich-heine-schule.net":{s:"#consent{display:none !important}"},"mocopinus.com":{c:"6"},"bhw.de":{j:"5"},"aptoide.com":{j:"5"},"co.aptoide.com":{s:"#news{display:none !important}"},"deno.land":{s:".bg-black > .max-w-screen-xl{display:none !important}"},"aquaristic.net":{j:"5"},"ekosklad.si":{c:"3"},"manus-zeitforum.de":{s:"#cookie-shit{display:none !important}"},"everydaymarksman.co":{c:"25"},"norres.com":{j:"5"},"editalo.pro":{c:"25"},"skagerak.dk":{s:".popup-msg{display:none !important}"},"tattoodo.com":{s:'#js-root > div > div > div > div[style*="min-height"] > div:first-child:not([id]){display:none !important}'},"gw2mists.com":{s:".gm-cookie-consent{display:none !important}"},"grzejemy.pl":{c:"3"},"carrefour.it":{j:"5"},"dahag.de":{s:"#dah-consent-manager-overlay{display:none !important}"},"photoephemeris.com":{s:'#root > [style*="fixed"]{display:none !important}'},"bestinver.es":{s:"#bst-cookie-alert{display:none !important}"},"tantris.de":{j:"5"},"doleasingu.com":{j:"5"},"puratos.pl":{j:"5"},"viennahouse.com":{j:"5"},"khw-ortenau.de":{s:"#bottom_popup{display:none !important}"},"hamburgische-buergerschaft.de":{s:"#hbCookieLayer{display:none !important}"},"meteovista.co.uk":{s:"#info-bar{display:none !important}"},"meteovista.de":{s:"#info-bar{display:none !important}"},"meteovista.com":{s:"#info-bar{display:none !important}"},"foreignaffairs.com":{s:".alert--hedwig-banner{display:none !important}"},"legs.com.pl":{c:"20"},"findmypast.co.uk":{s:'#skip-to-content-link + div > [style*="transform"],#skip-to-content-link ~ [style*="transform"] {display:none !important}'},"crew-united.com":{j:"5"},"national-lottery.co.uk":{s:"#cu_k_modal_main_box{display:none !important}"},"cosmos.network":{s:"#app > div > .banner-wrapper{display:none !important}"},"t-online.de":{s:".consent::before,.Tfwc::after{display:none !important}"},"tele2.de":{j:"5"},"leireg.de":{j:"5"},"orbiprime.com":{s:"#privacy{display:none !important}"},"phonemore.com":{c:"53"},"ihreapotheken.de":{j:"5"},"correos.com":{s:"#myCookies{display:none !important}"},"campusjaeger.de":{j:"5"},"aral.de":{j:"5"},"simplyhealth.co.uk":{s:"#sh-cookie-banner{display:none !important}"},"indacoin.com":{s:'#root > div[style*="block"]{display:none !important}'},"116117.de":{s:".layer-cookie{display:none !important}"},"narzedziawarszawa.pl":{c:"3"},"islandfreund.de":{j:"5"},"nickles.de":{j:"5"},"kronikaonline.ro":{s:"#page-mask{display:none !important}"},"parcel2go.com":{j:"6"},"lotosnavigator.pl":{c:"31"},"lemonade.com":{j:"5"},"brimfinancial.com":{s:".statement_block{display:none !important}"},"bgvbruck.at":{j:"5"},"schauspiel.koeln":{s:".dataprotection{display:none !important}"},"loebbeshop.de":{j:"5"},"parkster.com":{j:"5"},"wedoogift.com":{s:"wdgg-cookies-preferences-banner{display:none !important}"},"buffer.com":{s:'#__next > div > [class*="Banner"]{display:none !important}'},"enercoop.fr":{s:"#cookieLab{display:none !important}"},"hifi-schluderbacher.de":{s:"#cookies-modal{display:none !important}"},"ponal.de":{j:"5"},"studentbeans.com":{s:'body > div[data-hypernova-key^="Pages"] > div:not([style]){display:none !important}'},"mercedes-benz.com":{s:'.cLayer,[class*="vs-cookie-layer"],#cLayer,.bottom.notice,#emb-cp-overlay,#emb-cp-dialog,#cPageOverlay{display:none !important}'},"toc.mercedes-benz.com":{j:"5"},"rspb.org.uk":{s:".cookie-preferences{display:none !important}"},"selgros.de":{s:"#overlay-oiljs{display:none !important}"},"radio886.at":{j:"5"},"vomar.nl":{s:"sw-cookiemessage{display:none !important}"},"primrose.co.uk":{c:"2"},"pizza-david.at":{s:"#app > .v-overlay,#app > .v-dialog__content{display:none !important}"},"intelligencefusion.co.uk":{c:"20"},"aiways-u5.nl":{j:"5"},"esquinarayuela.es":{j:"5"},"actiris.brussels":{s:".cl-banner{display:none !important}"},"ledepartement66.fr":{s:".cookie-bottom{display:none !important}"},"worldbank.org":{s:".privacy-widget{display:none !important}"},"circuitmess.com":{s:"#main-app-container ~ div + div{display:none !important}"},"draco.de":{j:"5"},"buchbinder.de":{j:"5"},"nooch.ch":{c:"34"},"av-atlas.org":{j:"5"},"sportradio360.de":{s:"#toast-container{display:none !important}"},"electronieto.es":{j:"5"},"controlewiki.be":{c:"3"},"deutschland-gegen-corona.org":{s:'#___gatsby > div > main > div[style*="fixed"]{display:none !important}'},"skagenfondene.no":{s:".skagen-consent{display:none !important}"},"ybs-home-insurance.co.uk":{s:"#app > .container-fluid{display:none !important}"},"simplybook.it":{s:"#sb_cookies_block{display:none !important}"},"native-instruments.com":{j:"5"},"senmotic-shoes.eu":{j:"5"},"jobruf.de":{j:"5"},"city-center-chorweiler.de":{s:".mdl-modal__backdrop,#mdl-overlay{display:none !important}"},"viataverdeviu.ro":{c:"3"},"brplynx.com":{s:"#consent-dialog{display:none !important}"},"wsldp.com":{c:"19"},"romertopfwinkel.nl":{s:"#wizkom-js-app > .fixed{display:none !important}"},"humboldtforum.org":{j:"5"},"hochparterre.ch":{c:"20"},"tvprograma.lt":{s:".cookieBubble{display:none !important}"},"bcu.ac.uk":{s:".action-bar{display:none !important}"},"publikations-plattform.de":{j:"5"},"e-coop.it":{c:"34"},"thermengutscheine.at":{s:"#cmp-container{display:none !important}"},"festivo.de":{j:"5"},"campingwiesenbek.de":{j:"5"},"mercateo.sk":{s:"#header-popup-info{display:none !important}"},"ihtsdotools.org":{j:"5"},"fan.com.pl":{c:"3"},"ubs.com":{s:".lightbox__container{display:none !important}"},"werkzeughandel-roeder.de":{j:"5"},"moto-opinie.info":{c:"23"},"jobst-mobile.de":{s:"#datenschutzBalgeNew{display:none !important}"},"half-the-battle.de":{s:'div[data-editable*="CookieNotif"]{display:none !important}'},"dewalt.global":{s:"#block-privacypopup{display:none !important}"},"maereservation.sport2000.fr":{j:"5"},"strasbourg-europe.eu":{c:"25"},"technomarket.bg":{j:"5"},"asociacion-domitila.es":{j:"5"},"ntg24.de":{s:".consent-wrapper{display:none !important}"},"diamantschleifer.net":{s:".avia-popup{display:none !important}"},"prenumerata24.pl":{c:"3"},"money.pl":{j:"5"},"rtvseaport.nl":{s:".sgcc-main-wrapper{display:none !important}"},"diana-klinik.de":{s:".asktracking{display:none !important}"},"argutus.de":{j:"5"},"galeriabaltycka.pl":{s:".mdl-modal__backdrop,#mdl-overlay{display:none !important}"},"fotopuzzle.de":{j:"5"},"regen.network":{s:"#gatsby-focus-wrapper > div:not([class]) + div{display:none !important}"},"geiger-edelmetalle.de":{s:'div[class*="cookie-consent"]{display:none !important}'},"honeygain.com":{s:"#root > footer ~ div,#root > div + div + div:last-child{display:none !important}"},"castforward.de":{s:".footer-box ~ div{display:none !important}"},"imkerei-immenstolz.de":{s:"main ~ div{display:none !important}"},"g2a.com":{j:"6"},"g2a.co":{j:"6"},"swatch.com":{j:"5"},"greatis.com":{s:"#cookie-greatis{display:none !important}"},"medtronic-diabetes.nl":{s:".block-medtronic-cookie{display:none !important}"},"forget.finance":{s:"#root > .MuiBox-root{display:none !important}"},"wissenschaft-shop.de":{j:"5"},"perfectpetinsurance.co.uk":{s:"#root > div > div:first-child:not(:only-child){display:none !important}"},"matthys.net":{j:"5"},"dictionnaire-synonyme.com":{c:"34"},"eam.de":{j:"5"},"eam-netz.de":{j:"5"},"faberkabel.de":{j:"5"},"alfredflechtheim.com":{s:".SetNewMessageForUser{display:none !important}"},"postcodeloterij.nl":{s:"#container ~ [class]{display:none !important}"},"dyclassroom.com":{s:"#dy-cookieInfo-container{display:none !important}"},"jeffwhitemotors.co.uk":{s:"#ctw-implied-consent{display:none !important}"},"tipser.co":{s:"#tnw_cookieconsent{display:none !important}"},"severin.de":{s:".veil{display:none !important}"},"mariecurie.org.uk":{s:".cookie__menu__overlay{display:none !important}"},"deutsche-buchhandlung.de":{s:".bg{display:none !important}"},"finanzpartner.de":{s:"#cc-button{display:none !important}"},"eon-highspeed.com":{j:"5"},"interestuff.com":{c:"7"},"sherwin-williams.com.br":{j:"5"},"graphs.ro":{s:"#cookietop{display:none !important}"},"geox-shop.de":{s:"#P_Consent_Manager{display:none !important}"},"melkshaminsurance.co.uk":{c:"3"},"bastler-zentrale.de":{s:"#dsok,#coplh{display:none !important}"},"choice.npr.org":{j:"5"},"jeugdbrandweer.nl":{j:"5"},"solvo.nl":{j:"5"},"vivat.de":{s:".cs-cookie__wrapper{display:none !important}"},"zoo-leipzig.de":{s:".cs-cookie__wrapper{display:none !important}"},"gamesfull.org":{c:"34"},"adtpostales.com":{s:".loadingCookies{display:none !important}"},"veygo.com":{j:"5"},"periodex.co":{s:".p-banner{display:none !important}"},"permettezmoideconstruire.fr":{s:".alert-overlay{display:none !important}"},"moser.com":{c:"34"},"coopcad.it":{s:"#Banner{display:none !important}"},"vakcinainfo.gov.hu":{s:"app-cookie{display:none !important}"},"steamstatus.io":{s:".modal-bg{display:none !important}"},"turbotsallo.de":{s:"main ~ div{display:none !important}"},"polder.se":{s:".sd-surface-top > .sd-object-if{display:none !important}"},"fastweb.it":{s:".ck_if{display:none !important}"},"miniatures.com":{s:"#complianceBar{display:none !important}"},"restaurant-tribeca.com":{c:"25"},"walloniebelgiquetourisme.be":{s:".block--cookie{display:none !important}"},"stadtenergie.de":{j:"5"},"otzyvua.net":{s:"#gdpr{display:none !important}"},"almar-products.nl":{s:"main ~ div{display:none !important}"},"cs.money":{s:"#notifications{display:none !important}"},"wiki.cs.money":{s:"#modal{display:none !important}"},"siriusxm.com":{s:'#UserAgreement[data-componenttype="CookieBar"]{display:none !important}'},"boerse-stuttgart.de":{s:".bsg-cookie-layer{display:none !important}",j:"5"},"traderfox.com":{j:"5"},"finanzen.net":{j:"5"},"rebrainme.com":{s:".cookie-push{display:none !important}"},"moparshop.com":{s:"#moparshop--cookie-consent-manager{display:none !important}"},"bitamp.com":{s:".welcome-popup{display:none !important}"},"bim.com.tr":{s:".cookie-window-select{display:none !important}"},"loading.com.br":{c:"25"},"easylife.co.uk":{s:".cookieControl{display:none !important}"},"photoshop-kopona.com":{s:".message-alert{display:none !important}"},"track-trace.com":{j:"5"},"pakkesporing.no":{j:"5"},"forstasidorna.se":{j:"5"},"forsidene.no":{j:"5"},"hitachivantara.com":{s:".hv_privacy_prompt,.cPLAcceptCookies{display:none !important}"},"rbc.ua":{s:"#privasypolicy-info,.privacy{display:none !important}"},"garantie-direkt.de":{s:".ncoi---behind{display:none !important}"},"wieland.com":{s:".ncoi---behind{display:none !important}"},"k65-system.com":{s:".ncoi---behind{display:none !important}"},"zmienolej.pl":{j:"5"},"hotels-insolites.com":{c:"3"},"99app.com":{j:"5"},"spyflix.com":{s:"#consentPopup{display:none !important}"},"altin.in":{s:"#kvkk{display:none !important}"},"activobank.pt":{c:"2"},"ghostery.com":{s:"#ghostery-consent{display:none !important}"},"fotooehlmann.com":{s:"#modal_cct,.modal-backdrop{display:none !important}"},"embl.org":{s:".vf-banner{display:none !important}"},"zodio.fr":{s:".zo-cookie__banner{display:none !important}"},"friedrich-maik.com":{j:"5"},"adchitects.co":{c:"34"},"corona.fo":{s:"#__qookies_habitat{display:none !important}"},"politikon.es":{c:"3"},"lamoda.ua":{s:".page > .vue-widget{display:none !important}"},"atlant.by":{s:".confirm-panel{display:none !important}"},"teamaretuza.com":{j:"5"},"lahitapiola.fi":{s:"#cookieTopCOntainer{display:none !important}"},"golfpass.com":{s:".PolicyBanner{display:none !important}"},"orleans-metropole.fr":{s:".cookie_enabled{display:none !important}"},"bitcoin.org":{s:'#root > .flex > div[class*="max"]{display:none !important}'},"feld-eitorf.de":{s:".feld-cookienotice{display:none !important}"},"feld-eitorf.at":{s:".feld-cookienotice{display:none !important}"},"monespaceclient.immo":{j:"5"},"hotels.com":{s:"#root > footer ~ section{display:none !important}"},"lottofy.com":{s:"#alertsMarquee{display:none !important}"},"ose.gov.pl":{j:"5"},"beckmann-kg.de":{s:"#consentLayer{display:none !important}"},"homeful.ly":{s:"#__next > .container{display:none !important}"},"schauinsland-reisen.de":{s:"#block-trackinginformationen{display:none !important}"},"patrickholford.com":{c:"2"},"tryggivann.no":{s:"#panCookiedisc{display:none !important}"},"honeywellhome.com":{s:".homes-bp-cookiebanner{display:none !important}"},"what-matters.fr":{s:"#__next > div:last-child > div:last-child{display:none !important}"},"computerbase.de":{j:"5"},"keepersecurity.com":{j:"5"},"concrete-jungle.de":{s:".banner{display:none !important}"},"readly.com":{j:"5"},"infovac.ch":{s:".eb-acc{display:none !important}"},"onb.ac.at":{s:".notification-wrapper{display:none !important}"},"sass-ag.de":{s:".ccp{display:none !important}"},"adoc.pub":{s:"#ADOCPUB_cookie_box{display:none !important}"},"beautywelt.de":{j:"5"},"auto-motor.at":{s:"#footer ~ #myModal{display:none !important}"},"dementedarego-merch.com":{s:"main ~ div{display:none !important}"},"ditto.fm":{j:"5"},"paninimania.com":{s:"#id_acco{display:none !important}"},"twisto.pl":{s:".notification-banner{display:none !important}"},"staedtler.com":{s:"staedtler-cookie-banner{display:none !important}"},"onepiecewt100.com":{c:"53"},"sun-world-immobilien.com":{s:".wrap__cookie{display:none !important}"},"drogarianovaesperanca.com.br":{s:".dgf-cookies{display:none !important}"},"dascom.co.uk":{c:"6"},"damensein.com":{s:".welcome-modal{display:none !important}"},"krediidiraportid.ee":{s:".kred-cookiemessage{display:none !important}"},"nationalprivacytest.org":{s:"#__next > div > .fixed{display:none !important}"},"365scores.com":{s:".is-gdpr-visible ~ .toaster{display:none !important}"},"brandenburg.de":{s:".ckb{display:none !important}"},"theheinekencompany.com":{j:"5"},"exporterhub.io":{s:'main > div > section > [style*="fixed"]{display:none !important}'},"howmanyfps.com":{s:".ReactModalPortal{display:none !important}"},"88nightmarket.com":{c:"34"},"weople.space":{j:"5"},"onzeveilingonline.nl":{c:"20"},"cioreview.com":{s:"#footerr{display:none !important}"},"webdeasy.de":{s:".privacy-popup{display:none !important}"},"checkrobin.com":{s:"#privacybox{display:none !important}"},"die-plank.de":{s:"main ~ div{display:none !important}"},"wearetennis.bnpparibas":{j:"5"},"teliacompany.com":{s:".tc-modal{display:none !important}"},"explore.porto.pt":{j:"5"},"kurzurlaub.de":{j:"5"},"xpay.de":{s:"#xpCookieBanner{display:none !important}"},"knubel.de":{s:"#ConsentMsg.NotYetSelected{display:none !important}"},"foodengineeringmag.com":{j:"5"},"pcimag.com":{j:"5"},"assemblymag.com":{j:"5"},"securitymagazine.com":{j:"5"},"openfoodnetwork.org.uk":{j:"5"},"oetker.de":{s:".pd-main{display:none !important}"},"5ingredients15minutes.com":{s:".gpdr-agreement{display:none !important}"},"altmarkt-galerie-dresden.de":{s:".mdl-modal__backdrop,#mdl-overlay{display:none !important}"},"shop.teekampagne.de":{c:"7"},"travelski.com":{s:"#tf-cookie{display:none !important}"},"kraehe.de":{s:".nav-cookie{display:none !important}"},"medienzentrumonline.eu":{c:"77"},"worstbassist.com":{s:"main ~ div{display:none !important}"},"tredy-fashion.de":{j:"5"},"entsoe.eu":{j:"5"},"krant.volkskrant.nl":{j:"3"},"krant.dg.nl":{j:"3"},"krant.demorgen.be":{j:"3"},"krant.trouw.nl":{j:"3"},"krant.ad.nl":{j:"3"},"krant.parool.nl":{j:"3"},"krant.ed.nl":{j:"3"},"zencare.org":{c:"25"},"huber.de":{j:"5"},"freudenberg.com":{j:"5"},"sklep.3mk.pl":{c:"3"},"newpharma.be":{j:"5"},"sabinastore.com":{j:"5"},"xiaomiromania.com":{j:"5"},"city-sightseeing.it":{s:".csi-cookie-banner{display:none !important}"},"iys.org.tr":{s:".cerezall{display:none !important}"},"propb.ru":{s:".cooke{display:none !important}"},"risingtide-foundation.org":{s:"#fcCookie{display:none !important}"},"vwg.de":{s:".wgc-cookie-box{display:none !important}"},"pfeffi.com":{j:"5"},"3daimtrainer.com":{s:".cookiemodal{display:none !important}"},"struttandparker.com":{s:".important-message-banner{display:none !important}"},"affittapresto.it":{s:"#cookie-dett{display:none !important}"},"paylax.de":{s:"#app > div > div:first-child{display:none !important}"},"halsoresurs.se":{s:".cookie-mess{display:none !important}"},"guard.io":{s:"#gatsby-focus-wrapper > footer ~ div{display:none !important}"},"freeontour.com":{j:"5"},"rtlmost.hu":{s:".app__content ~ div > .not-empty{display:none !important}"},"pc-canada.com":{s:".acceptance{display:none !important}"},"dat.de":{j:"5"},"daa.de":{j:"5"},"dnzb.nl":{s:"main ~ div{display:none !important}"},"tosdr.org":{s:".toast.fixed-bottom{display:none !important}"},"powercord.dev":{s:"#react-root > footer ~ div{display:none !important}"},"grugliasco.to.it":{c:"3"},"rsj.com":{c:"34"},"pazarluk.com":{j:"5"},"vorteilshop.com":{j:"5"},"personalshop.com":{j:"5"},"boohoo.com":{j:"5"},"chromeenterprise.google":{s:".ce-cookie-banner{display:none !important}"},"subwayrewards.fr":{s:"#root > div > .green-link{display:none !important}"},"subwayrewards.at":{s:"#root > div > .green-link{display:none !important}"},"subwayrewards.de":{s:"#root > div > .green-link{display:none !important}"},"lhv.ee":{j:"5"},"goin.app":{s:"#__next > [style]{display:none !important}"},"jeanfil.fr":{s:".modal-cookie{display:none !important}"},"apollographql.com":{s:"#gatsby-focus-wrapper > .body ~ div{display:none !important}"},"toner.shop":{s:".CookiesOk{display:none !important}"},"artemiskliniken.de":{s:"#myCookie{display:none !important}"},"minitab.com":{s:"#cpToaster{display:none !important}"},"aukcije.hr":{j:"5"},"severeweather.wmo.int":{c:"53"},"dzieje.pl":{c:"2"},"steigmiller.bio":{j:"6"},"vastelastenbond.nl":{s:".vlb-cookies{display:none !important}"},"standardlife.co.uk":{s:".cookie-policy-modal{display:none !important}"},"webmotors.com.br":{s:"#root > div{display:none !important}"},"e-mobile.ch":{s:".site_notification{display:none !important}"},"herbiolys.fr":{c:"42"},"ag-visuell.de":{s:".animating-screenIn-exit{display:none !important}"},"posttoday.com":{s:"#box-policy{display:none !important}"},"foodora.se":{s:".top-banner-container{display:none !important}"},"foodora.no":{s:".top-banner-container{display:none !important}"},"foodora.fi":{s:".top-banner-container{display:none !important}"},"coingate.com":{s:".MuiSnackbar-root{display:none !important}"},"gettyimages.nl":{s:"#toaster-modal{display:none !important}"},"gettyimages.de":{s:"#toaster-modal{display:none !important}"},"eltern-bildung.at":{c:"88"},"crosscall.com":{s:".consent-tracking{display:none !important}"},"werraenergie.de":{s:"#smartweb-eucookie-werra{display:none !important}"},"framer.com":{j:"5"},"nordusdecospan.com":{s:".gdprForm{display:none !important}"},"geenstijl.nl":{j:"5"},"futurezone.at":{j:"5"},"profil.at":{j:"5"},"kurier.at":{j:"5"},"omroepbrabant.nl":{j:"5"},"cloudvps.nl":{j:"5"},"transip.nl":{j:"5"},"transip.eu":{j:"5"},"luftfahrtmuseum-wernigerode.de":{s:".uk-notification{display:none !important}"},"dom-buchhandlung.de":{s:".ui-widget-overlay{display:none !important}"},"buch-zur-heide.de":{s:".ui-widget-overlay{display:none !important}"},"ratemyprofessors.com":{s:"#ccpa-footer,.reveal-modal-bg{display:none !important}",j:"5"},"forcepoint.com":{c:"41"},"mietz.app":{j:"5"},"ratatype.es":{s:".alert-bottom{display:none !important}"},"syntusoverijssel.nl":{s:".hc-banner{display:none !important}"},"eglue.it":{s:'div[style*="inherit"] > div > div > div[style*="92"]{display:none !important}'},"admiral.com":{s:"hub-gdpr-popup{display:none !important}"},"cryptoquant.com":{s:"#__next > div > .ant-row{display:none !important}"},"sporx.com":{s:"#consentdiv{display:none !important}"},"phpipam.net":{c:"3"},"meine-bankid.de":{s:".cdk-overlay-container{display:none !important}"},"vodafonemail.de":{s:"#cmpWrapper{display:none !important}"},"2020.swatch.com":{s:".reveal-modal-bg{display:none !important}"},"edding.com":{s:".e-note__cookies{display:none !important}"},"wiesenhaus-koeln.de":{s:"main ~ div{display:none !important}"},"personalideal.de":{j:"5"},"sanko-solar.de":{s:".avg-bar{display:none !important}"},"waterfall-d-mannose.com":{s:"#cc-cont{display:none !important}"},"emb-gmbh.de":{j:"5"},"entschuldigung.net":{s:"#divModalScreen{display:none !important}"},"charleslandaudentistry.co.uk":{s:"#cc-container{display:none !important}"},"eurozine.com":{c:"34"},"paschal.de":{s:"#decker{display:none !important}"},"togetherall.com":{s:".light--MuiSnackbar-root{display:none !important}"},"notebookitalia.it":{c:"26"},"glassnode.com":{s:"#root > div:last-child{display:none !important}"},"glorian.org":{c:"26"},"mts.ru":{s:".is-cookie-alert{display:none !important}"},"derkarton.net":{j:"5"},"dnb.no":{s:"#divconsent-modal{display:none !important}",j:"5"},"telemarket24.ru":{s:".disklay-box{display:none !important}"},"lysa.se":{s:".snackbar-wrapper{display:none !important}"},"filmstreaming-de.life":{s:".notifier{display:none !important}"},"mroom.com":{s:"#cookies-check{display:none !important}"},"my.mroom.com":{j:"5"},"pickup.de":{j:"5"},"estadao.com.br":{s:".lgpd-modal-content{display:none !important}"},"evarazdin.hr":{j:"5"},"gc.ca":{s:".CookieModal{display:none !important}"},"5miles.com":{j:"5"},"okpedia.org":{s:".privacy{display:none !important}"},"lizak-partner.at":{j:"5"},"file2send.eu":{j:"5"},"trendmedic.de":{j:"5"},"scamner.com":{c:"34"},"schulze-immobilien.de":{j:"5",s:".wrap__undone{display:none !important}"},"ihk-nuernberg.de":{s:"#overlay{display:none !important}"},"townsmith.de":{s:".cdk-overlay-container{display:none !important}"},"gemu-group.com":{c:"5"},"ace-ace.com":{j:"5"},"99airdrops.com":{s:".legal-notice{display:none !important}"},"strato.de":{j:"5"},"noodweer.be":{j:"5"},"videoload.de":{j:"5"},"magentatv.de":{j:"5"},"billomat.com":{j:"5"},"teutoburger-muenzauktion.de":{j:"5"},"traxmag.com":{j:"5"},"generation-s.fr":{j:"5"},"bati-info.be":{s:'div[class*="cookie-alert"]{display:none !important}'},"tecedo.at":{s:".msg-banner{display:none !important}"},"lsdlibri.it":{s:"#inibisci_sfondo,.fullscreen_box_legale{display:none !important}"},"ubuntu18.com":{c:"19"},"xalingo.com.br":{s:"#wrng-agrmnt{display:none !important}"},"joyn.de":{j:"5"},"prosieben.de":{j:"5"},"burg-lindenfels.de":{c:"3"},"numuki.com":{s:"#consent{display:none !important}"},"inwerk.de":{j:"5"},"bioplanete.com":{j:"5"},"metradar.ch":{s:"#closeonaction{display:none !important}"},"eib.org":{s:"#eib-popup-policy{display:none !important}"},"purexbox.com":{s:".dgp-consent{display:none !important}"},"instantartz.com":{s:"main ~ div{display:none !important}"},"taste-of-koroni.de":{s:"#consent{display:none !important}"},"etowine.com":{c:"3"},"imagelinenetwork.com":{j:"5"},"swoodie.de":{s:'.module-wrap[data-label="Popup"].showPopup,.gf-popupOverlay{display:none !important}'},"laver.co.uk":{c:"2"},"factoryoficina.com":{c:"42"},"pharmazeutische-zeitung.de":{j:"5"},"digitalland.de":{s:"#ccm{display:none !important}"},"getir.com":{s:'#__next > [class*="Drawer"]{display:none !important}'},"teambank.de":{s:"cookie-layer,.cdk-overlay-container{display:none !important}"},"kupzidle.cz":{s:"body > .shadow{display:none !important}"},"what3words.com":{j:"5"},"independent.ie":{s:'body > a[onclick*="Didomi"]{display:none !important}'},"bancaditalia.it":{j:"5"},"scaleway.com":{s:"#gatsby-focus-wrapper > footer ~ div{display:none !important}"},"campbellsoup.co.uk":{c:"34"},"biathlonresults.com":{s:"popup-container{display:none !important}"},"prawdziwyonline.pl":{s:"#pp-consent{display:none !important}"},"kinoheld.de":{j:"6"},"orizonstore.gr":{s:".notification-wrapper{display:none !important}"},"alexanderhall.co.uk":{j:"5"},"modrykonik.sk":{j:"5"},"pdf-archive.com":{j:"5"},"besthomepageever.com":{s:"#modalCookie1,.modal-backdrop{display:none !important}"},"arcor.de":{s:"#cmpWrapper{display:none !important}"},"kanebo.com":{s:".tmp-privacyNotice{display:none !important}"},"poppen.de":{j:"5"},"bafin.de":{j:"5"},"corona-kvwl.de":{s:".m-react-ccm{display:none !important}"},"automobilwoche.de":{s:"#ccm{display:none !important}"},"5vor12.de":{s:".consent_banner{display:none !important}"},"jimenezmovilidad.es":{c:"2"},"fetisch.de":{j:"5"},"calm.com":{j:"6"},"otv.de":{j:"5"},"nordicbet.dk":{s:"snack-bar-container{display:none !important}"},"nordicbet.com":{s:"snack-bar-container{display:none !important}"},"resursbank.se":{j:"6"},"urbanista.de":{j:"5"},"chiptehnika.si":{s:".noty_cont{display:none !important}"},"theweathernetwork.com":{s:".woahbar{display:none !important}"},"meteomedia.com":{s:".woahbar{display:none !important}"},"warp2search.net":{s:".alert-warning{display:none !important}"},"doopla.pl":{s:"div[cmp]{display:none !important}"},"elektriker-wissen.de":{s:"#f_cookie{display:none !important}"},"amway.it":{j:"5"},"amway.es":{j:"5"},"planet-beruf.de":{s:".coo-con{display:none !important}"},"cae.com":{c:"34"},"bienmanger.com":{j:"5"},"arburg.com":{s:"#field_popup{display:none !important}"},"virustotal.com":{j:"6"},"nmhh.hu":{j:"5"},"milenapreradovic.com":{s:"main ~ div{display:none !important}"},"gay.de":{j:"5"},"pelix-media.de":{j:"5"},"parship.de":{s:"uc-custom-layer{display:none !important}"},"windtre.it":{c:"2"},"xn--80aafey1amqq.xn--d1acj3b":{s:".footer ~ .confirm{display:none !important}"},"dopportal.ru":{s:".footer ~ .confirm{display:none !important}"},"spoferan.com":{s:".fixed.overlay--active{display:none !important}"},"codit.eu":{s:".langSelector{display:none !important}"},"ketnet.be":{s:"#root > div > div:last-child{display:none !important}"},"valitor.is":{c:"6"},"droptica.com":{j:"5"},"hejto.pl":{s:"footer ~ .fixed{display:none !important}"},"hrt.hr":{s:"#__next > div > .fixed{display:none !important}"},"prestaexpert.com":{j:"5"},"bridgestone.gr":{s:'div[class*="cookiebar"]{display:none !important}'},"genesis.com":{s:".privacy-dialog{display:none !important}"},"3dprinting.com":{s:".mdl-js-bigsnackbar{display:none !important}"},"sammyspizza.de":{s:".responsiveFooterBar{display:none !important}"},"oishisushi.club":{s:".responsiveFooterBar{display:none !important}"},"eversports.de":{j:"5"},"eversports.fr":{j:"5"},"eversports.at":{j:"5"},"exali.de":{j:"5"},"airmates.eu":{j:"6"},"daffer.sk":{s:"footer + div + div{display:none !important}"},"landes.cloud":{s:"main ~ div{display:none !important}"},"airam.fi":{j:"5"},"fgov.be":{s:"cookie-law{display:none !important}"},"chiptuning-express-tirol.at":{j:"5"},"bulthaup.com":{s:".bulthaup-cookie-notice{display:none !important}"},"realme.com":{j:"5"},"sportium.es":{s:".overlay{display:none !important}"},"nasz-gabinet.pl":{s:".message-window.show{display:none !important}"},"fabasoft.com":{s:".tracking-alert{display:none !important}"},"blog2social.com":{s:".cookie-cover{display:none !important}"},"astra-bier.de":{j:"5"},"tele2.nl":{j:"5",s:"#targetedPopupFrame{display:none !important}"},"aefinfo.fr":{s:".bandeau_cgv{display:none !important}"},"hetcontact.nl":{c:"34"},"pott.de":{s:".legacy{display:none !important}"},"nzbindex.com":{j:"5"},"winnicalidla.pl":{s:".privacy-popup{display:none !important}"},"imgw.pl":{s:"#rodo{display:none !important}"},"garten.ac":{c:"86"},"baumpflege.ac":{c:"86"},"swt.de":{s:"#COOKIE_POLICY{display:none !important}"},"twl.de":{j:"5"},"billiger.de":{j:"5"},"l2central.info":{s:".notice_footer_right{display:none !important}"},"spieletastisch.de":{s:".pageloading-mask{display:none !important}"},"axisbank.com":{s:"#HomePageStrip{display:none !important}"},"ingatlanbazar.hu":{s:".ib-cookie-bar{display:none !important}"},"localyzeapp.com":{s:".banner-container{display:none !important}"},"laposte.fr":{s:"#navigation_cookies{display:none !important}"},"valuetech.de":{s:"#GDPR{display:none !important}"},"ofertasinternet.net":{s:"#melindres{display:none !important}"},"dawonia.de":{j:"5"},"uptodate.com":{s:".isDesktop.gdprBanner #appContainer > header{top:0 !important}"},"sika.com":{j:"5"},"dbna.com":{s:".consentbar{display:none !important}"},"mag.dbna.com":{j:"5"},"intersystems.com":{s:".docscookie-notification{display:none !important}"},"sofatutor.com":{j:"5"},"sofatutor.ch":{j:"5"},"sofatutor.at":{j:"5"},"innovaphone.com":{s:"#disableBackground{display:none !important}"},"constantcontact.com":{j:"5"},"svitla.com":{s:".agree-popup{display:none !important}"},"e-wie-einfach.de":{j:"5"},"e-wie-einfach.at":{j:"5"},"andyguitar.co.uk":{s:".v-overlay,.v-dialog__content{display:none !important}"},"ansons.de":{j:"5"},"mentimeter.com":{j:"6"},"engelvoelkers.com":{j:"5"},"went.at":{j:"5"},"zappn.tv":{j:"5"},"kinocheck.de":{j:"5"},"eubos.de":{s:"#frameModalBottom,.modal-backdrop{display:none !important}"},"kohlhammer.de":{j:"5"},"kiusys.net":{j:"5"},"hoyer.de":{s:'#app > [class*="backdrop"]{display:none !important}'},"usave.co.uk":{s:".toast{display:none !important}"},"topographic-map.com":{s:".popup{display:none !important}"},"fembio.org":{s:"#my-modal,.bg-wg-modal{display:none !important}"},"eddler.se":{s:".dk-header-info-message{display:none !important}"},"le-fleuriste-22.fr":{s:"#rgpd_bouton,#rgpd_demande{display:none !important}"},"slantastoffe.de":{s:".overlay{display:none !important}"},"solaredge.com":{s:"#se-cookies-usage-bar{display:none !important}"},"kennisnet.nl":{s:"#cookies{display:none !important}#cookies ~ #top,#cookies ~ #menu,#cookies ~ #search,#cookies ~ #banner,#cookies ~ #footer::before{margin-top:0}"},"winkelparade.nl":{s:"#notification-bar{display:none !important}"},"comstern.de":{s:"#cookit{display:none !important}"},"hutwiller.de":{s:"main ~ div{display:none !important}"},"mellerud.de":{s:"#popup{display:none !important}"},"augenchirurgie.clinic":{c:"34"},"weglot.com":{c:"25"},"notizieinunclick.com":{s:"body > .elementor-popup-modal{display:none !important}.dialog-prevent-scroll{overflow:visible !important;max-height:auto !important}"},"magnetmaskenhalter.com":{s:"main ~ div{display:none !important}"},"msg.com":{s:"#app > div > div:not([id]):not([class]){display:none !important}"},"nonstop2k.com":{s:"#consentFooter{display:none !important}"},"sh-mueller.de":{s:"#notify{display:none !important}"},"cameranu.nl":{s:".stick-to-bottom{display:none !important}"},"durstexpress.de":{s:".amgdprcookie-modal-container{display:none !important}"},"mhra.gov.uk":{s:"#__next > button,#__next > aside{display:none !important}"},"barclays.net":{s:"#modal-pecr{display:none !important}"},"kromsnavelgedrag.nl":{s:"main ~ div{display:none !important}"},"simsdom.com":{s:"#policies{display:none !important}"},"baukobox.de":{j:"6"},"wirtschaftsagentur.at":{j:"5"},"amsterdamlightfestival.com":{j:"5"},"gitlab.com":{s:".privacy-announcement{display:none !important}"},"proelectronic.rs":{s:".cookies-holder{display:none !important}"},"kristo-friseure.de":{s:".cookies-holder{display:none !important}"},"adac.de":{s:".cookie--layer{display:none !important}"},"sheldrickwildlifetrust.org":{c:"20"},"quorn.co.uk":{j:"5"},"quorn.ch":{j:"5"},"quorn.se":{j:"5"},"quorn.ie":{j:"5"},"quorn.nl":{j:"5"},"quorn.be":{j:"5"},"quorn.dk":{j:"5"},"quorn.no":{j:"5"},"quorn.fi":{j:"5"},"antwerpen.be":{s:"aui-cookie-consent{display:none !important}"},"rtvnoord.nl":{j:"5"},"wehkamp.nl":{s:"#header > aside{display:none !important}"},"stationhq.com":{s:"#getsitecontrol{display:none !important}"},"vsninfo.de":{j:"5"},"stadtwerke-weilburg.de":{j:"5"},"novibet.gr":{s:".setCookies{display:none !important}"},"samsung.com":{s:'#root [data-testid="notice-footer"]{display:none !important}'},"elektro-met.pl":{c:"3"},"estetic-dent-sklep.pl":{c:"3"},"ebonline.be":{j:"5"},"21shares.com":{s:"cookie-control{display:none !important}"},"ab.gr":{j:"5"},"mega-image.ro":{j:"5"},"maxi.rs":{j:"5"},"jpmorgan.com":{s:".jpm-wm-general-cookie-banner{display:none !important}"},"oktawave.com":{j:"5"},"possmann.de":{s:"main ~ div{display:none !important}"},"yoigo.com":{j:"5",s:".bw-overlay-cookies,.bw-overlay-cookies ~ div{display:none !important}"},"kontra.hu":{s:"#consent{display:none !important}"},"julesmumm.de":{s:"toujou-consent-widget{display:none !important}"},"portofrotterdam.com":{s:".block-por-cookies{display:none !important}"},"emporium.si":{s:"#grayOut{display:none !important}"},"info-cooperazione.it":{s:".my-cookies{display:none !important}"},"mixable.de":{s:"#ccDialog{display:none !important}"},"selectminds.com":{s:"#notify-banner,#cboxOverlay,#colorbox{display:none !important}"},"cooltura24.co.uk":{j:"5"},"bi-polska.pl":{j:"5"},"bbcrewind.co.uk":{s:"#root > .fixed{display:none !important}"},"alarmstuferot.info":{s:"main ~ div{display:none !important}"},"fctables.com":{s:"#privacy-optin{display:none !important}"},"learndutch.org":{j:"5"},"xuite.net":{s:"#privacyDeclare{display:none !important}"},"listaspam.com":{c:"34"},"der-arzneimittelbrief.de":{s:"#LabelAnzeigeCookie,#LinkButtonDatenschutz,#ButtonAnzeigeSchließen{display:none !important}"},"stokke.com":{s:".sk-cookie-message{display:none !important}"},"awesun.com":{s:".privacy{display:none !important}"},"darmstadt.de":{j:"5"},"webo.hosting":{s:"#kt_cookies{display:none !important}"},"soka-onlineshop.de":{s:"main ~ div{display:none !important}"},"torneum.com":{s:"tor-gdpr-banner-dialog,.cdk-overlay-backdrop{display:none !important}"},"easyswimportal.com":{j:"5"},"euprava.gov.rs":{s:"#bottom-popup{display:none !important}"},"itv4.de":{s:".cookieModal{display:none !important}"},"banknorwegian.dk":{j:"5"},"gartencenter-seebauer.de":{j:"5"},"onlineradiobox.com":{s:".modal--cookies{display:none !important}"},"jesse.trade":{s:"#app > section > div > .fixed,#app > section > .fixed{display:none !important}"},"asmonaco.com":{s:".asm-rgpd-bar{display:none !important}"},"aventics.com":{s:".avts-global-cookie{display:none !important}"},"olympiasports.net":{s:".consent-notification{display:none !important}"},"orbassano.to.it":{c:"3"},"paybyphone.fr":{j:"5",s:'.MuiBox-root[data-testid="cookies-box"]{display:none !important}'},"uvex-safety-shop.de":{s:"uvex-cookie-banner{display:none !important}"},"mobileroadie.com":{c:"3"},"merkurmarkt.at":{j:"5"},"penny.at":{j:"5"},"stoxenergy.com":{j:"5"},"institutfrancais.de":{s:".cookie-fn{display:none !important}"},"delta.app":{j:"6"},"dkb.de":{s:"#footer ~ .banner,.cookie{display:none !important}"},"harry-gerlach.de":{j:"5",s:".wrap__undone{display:none !important}"},"tonhalle.de":{s:"#CookieModal{display:none !important}"},"arm.com":{s:".fixedPolicyBox,.c-policies{display:none !important}"},"pff.se":{j:"5"},"boomerang-tv.pl":{j:"5"},"asr.nl":{s:"ebc-notification-info{display:none !important}"},"sonicstate.com":{s:"#concord-banner-container{display:none !important}"},"edealinfo.com":{s:'div[id*="showFTCMessage"]{display:none !important}'},"nv.ua":{s:".cookie-label{display:none !important}"},"kent.ac.uk":{s:"#kent-cookie-bar{display:none !important}"},"campingandcaravanningclub.co.uk":{s:"#ml_banner{display:none !important}"},"hidemy.name":{s:"#gdpr-block{display:none !important}"},"solidarietaveneto.it":{c:"3"},"vibus.de":{s:"#cw{display:none !important}"},"centreforaviation.com":{s:".cookieConsent_consent_geb{display:none !important}"},"antiquariat.de":{s:".confirm-cookie{display:none !important}"},"orange.jobs":{s:".dgt-opt-inout{display:none !important}"},"leparfait.fr":{j:"5"},"prothomalo.com":{s:"#gdpr-policy{display:none !important}"},"sphinxcomputer.de":{s:"#sphinxcookie{display:none !important}"},"programmitv.it":{j:"3"},"allegro.eu":{s:".idm-cookie-overlay,.idm-cookie-policy{display:none !important}"},"kayak.fr":{j:"6"},"provostvet.co.uk":{j:"5"},"myfamilyvets.co.uk":{j:"5"},"patisserie-cabosse.fr":{s:".cabosseadsbottom{display:none !important}"},"grifols.com":{s:"#cookie-intro-modal,.aui-overlay{display:none !important}"},"verve5.de":{s:"#lux-cookie-dialog,#lux-cookie-show-modal-dialog,.backdrop,._dialog_overlay{display:none !important}"},"al.to":{s:"#app > div:first-child > div{display:none !important}"},"ybs.co.uk":{s:"#fullpage-filter{display:none !important}"},"zentia.com":{s:".enigmaint_cookie-notice{display:none !important}"},"textil-mode.de":{s:".vtm-cookiebanner{display:none !important}"},"takarekbank.hu":{j:"5"},"comfortclick.com":{s:".footer ~ div{display:none !important}"},"hof-lenze.de":{s:"main ~ div{display:none !important}"},"bb-service.info":{s:"main ~ div{display:none !important}"},"haarem.de":{s:"#consent{display:none !important}"},"susanneeisenmann.de":{s:"#bbcdBanner{display:none !important}"},"vodafone.nl":{j:"5"},"simplydhl.com":{s:"#ixp-gate-frame{display:none !important}"},"parrotcoffee.com":{s:"#growls{display:none !important}"},"huzaro.pl":{c:"3"},"5ka.ru":{s:"#app > .message{display:none !important}"},"palazzogroep.nl":{j:"5"},"oed.com":{s:".cookies-attention{display:none !important}"},"open-office.es":{c:"2"},"elperiodicodeaqui.com":{s:"#infop{display:none !important}"},"voip.ms":{c:"53"},"mrowka.com.pl":{s:".cookies-header{display:none !important}"},"tweakbit.com":{s:"#privacy-popup{display:none !important}"},"mio.se":{s:"div[data-am-cookiesdisclaimer]{display:none !important}"},"latam.com":{j:"5"},"faszination-suedostasien.de":{s:"#legal-notice{display:none !important}"},"abmotorcycles.de":{s:".uk-notification{display:none !important}"},"uniprot.org":{s:"#privacy-panel{display:none !important}"},"nexus.gg":{j:"3"},"fdp.de":{j:"5"},"freiheit.org":{j:"5"},"freie-demokraten.de":{j:"5"},"growney.de":{s:".block-07-cookie-banner{display:none !important}"},"rodopchani.bg":{s:"#abck{display:none !important}"},"daab.de":{s:"#damn_background_overlay,#damn_cookieconsent_banner{display:none !important}"},"shadow.tech":{s:'#___gatsby div[class*="CookiesComponent"],#root > main ~ div:last-child{display:none !important}'},"tasaciones-rasal-perytec.com":{j:"5"},"enidine.com":{c:"41"},"akcelo.de":{s:"#consent{display:none !important}"},"bioprocessintl.com":{s:".ig_bottom{display:none !important}"},"ericdepaoli.com":{s:".ig_bottom{display:none !important}"},"benjamindubuc.fr":{s:".ig_bottom{display:none !important}"},"edizioni-gabriele.com":{s:".ig_bottom{display:none !important}"},"wo-ist-greta.de":{c:"6"},"sonofatailor.com":{j:"5"},"pixlr.com":{s:".policies,#agreement-wrapper{display:none !important}"},"lamoda.ru":{s:'.page > [class*="widget"],#vue-root > .width-wrapper ~ .vue-widget{display:none !important}'},"mitsubishielectric.com":{j:"5"},"mea.com":{j:"5"},"info.pl":{j:"5",s:".zgody-popup,.head-page-information{display:none !important}"},"bnext.es":{c:"2"},"c24.de":{j:"5"},"solaris-store.com":{c:"2"},"racing-planet.de":{j:"5"},"cafeszaidin.es":{j:"5"},"bricomart.es":{j:"5"},"bricoman.fr":{j:"5"},"bricomarche.pt":{c:"34"},"slerp.com":{s:"#root > div > div + div ~ div:last-child{display:none !important}"},"ecwid.com":{s:".gdpr-window,.ec-notices{display:none !important}"},"easyparkitalia.it":{s:".rah-static{display:none !important}"},"x-kom.pl":{j:"6"},"pegasproductions.com":{c:"34"},"arena.pl":{s:"#__next > footer ~ div{display:none !important}"},"beesafe.pl":{s:"#root > div > div > div > .MuiGrid-root{display:none !important}"},"liquidweb.com":{s:".lw-cookie-banner{display:none !important}"},"bitfineon.com":{s:'#root ~ div > [class*="StyledLayer"]{display:none !important}'},"mein-saunashop.de":{s:".v-overlay,.v-dialog__content{display:none !important}"},"tu-darmstadt.de":{j:"5"},"tu-onlinedays.tu-darmstadt.de":{s:"#root > div:first-child{display:none !important}"},"koupelny-sen.cz":{c:"3"},"dish.co":{s:".mod-cookie-consent{display:none !important}",j:"5"},"mediamarkt.es":{s:"#mms-consent-portal-container{display:none !important}"},"poool.tech":{s:"#app > .fade-in-enter-done{display:none !important}"},"poool.fr":{s:"#app > .fade-in-enter-done{display:none !important}"},"tme.eu":{j:"5"},"tme.com":{j:"5"},"txone-networks.com":{s:"#cookies_msak{display:none !important}"},"eldirectorio.co":{s:"#gdpr{display:none !important}"},"ferchau.com":{j:"5"},"able-group.de":{j:"5"},"discordtemplates.com":{s:".consent-card{display:none !important}"},"holidu.de":{s:"#cookie-selector{display:none !important}"},"answear.ro":{j:"5"},"zoot.ro":{s:".gpdr{display:none !important}"},"coregames.com":{s:'.open [class*="modalBottom"]{display:none !important}'},"fibreglassdirect.co.uk":{s:".activedemand-popup{display:none !important}"},"tcf.org":{s:".modal{display:none !important}"},"metro.de":{j:"5"},"metro.fr":{j:"5"},"metro.hu":{j:"5"},"makro.nl":{j:"5"},"metro.it":{j:"5"},"metro.co.uk":{j:"5"},"bajajauto.com":{s:".disclaimerCommon{display:none !important}.topPosCss header{top:0 !important}"},"rnf.de":{j:"5"},"ravenind.com":{s:".hello-bar{display:none !important}"},"costomovil.es":{j:"5"},"litebringer.com":{s:"#cookie-app{display:none !important}"},"dailybuzz.nl":{j:"5"},"museum.nl":{s:".overlay{display:none !important}"},"aloys.news":{s:"#jbcookies{display:none !important}"},"hostgreen.com":{s:"#obal{display:none !important}"},"lmt.lv":{j:"5"},"masmovil.es":{j:"5"},"masmovil.com":{j:"5"},"elkar.eus":{s:"#cookie_oharra{display:none !important}"},"sigma-photo.fr":{s:".choc-banner{display:none !important}"},"avfc.co.uk":{s:".footer ~ .popup-wrapper{display:none !important}"},"music-city.cz":{s:"#js-agreement-stripe{display:none !important}"},"technischesmuseum.at":{j:"5"},"klett.de":{j:"5"},"forgeofempires.com":{j:"6"},"elvenar.com":{j:"6"},"deincamchat.de":{s:"#age-verification{display:none !important}"},"rammes-gruenland.com":{j:"5"},"turtlewax.com":{s:".cozy-crd__modal-bar{display:none !important}"},"nils-bollenbach.de":{s:"main ~ div{display:none !important}"},"lotteriadegliscontrini.gov.it":{s:"#coockie{display:none !important}"},"csirt.gov.it":{s:"footer ~ .fixed{display:none !important}"},"liceisgf.gov.it":{s:"#zf--alerts-panel{display:none !important}"},"theweather.com":{s:"#gpdr{display:none !important}"},"fdp-rlp.de":{j:"5"},"psg.fr":{j:"5"},"theathletic.com":{j:"6"},"darksearch.io":{s:".application--wrap > .blue--text{display:none !important}"},"radio-plassenburg.de":{j:"5"},"poolebaypharmacy.co.uk":{j:"5"},"gira.de":{s:"#consent-dialog-wrapper,#cms-element-ac,#ac_frame{display:none !important}"},"gira.com":{s:"#consent-dialog-wrapper,#cms-element-ac{display:none !important}"},"yestersen.com":{s:"main > .d-print-none{display:none !important}"},"pri.org":{s:'#__next [class*="CtaMessage"],#cta_prompt_bottom{display:none !important}'},"healthline.com":{j:"5"},"realitysandwich.com":{c:"25"},"filmmakers.de":{s:".Aligner{display:none !important}"},"kytta.at":{s:'button[class*="dc-cookie"]{display:none !important}'},"generali.at":{j:"5"},"conjunctconsulting.org":{c:"25"},"rosepartner.de":{s:"#rp-cookie-consent{display:none !important}"},"campusonline.com":{s:".ui-pnotify{display:none !important}"},"kottenstedte.com":{s:"#agever{display:none !important}"},"zehnthof-weickert.de":{s:"#agever{display:none !important}"},"volbers.com":{s:"#agever{display:none !important}"},"gamecaster.com":{s:'nav ~ [class*="growl"]{display:none !important}'},"vorteile.net":{j:"5"},"kayak.co.uk":{j:"6"},"orangebank.fr":{s:"#ob-cookie-banner-modal{display:none !important}"},"surveyjs.io":{s:".surveyjs-cookie-info{display:none !important}"},"kremer-pigmente.com":{s:"#cclayer{display:none !important}"},"eichsfeld.de":{c:"5"},"tk.de":{j:"5"},"fnatic.com":{j:"5"},"msa.fr":{s:"#consent-cookies{display:none !important}"},"expert.de":{s:".widget-EyeCatcher---preset-fixed{display:none !important}"},"lufthansagroup.careers":{j:"5"},"z-immobilien.at":{j:"5"},"penny.hu":{j:"5"},"penny.cz":{j:"5"},"inwestinfo.pl":{s:'#up ~ [style*="fixed"]{display:none !important}'},"joolz.com":{s:".jlz-cookie-consent--background-blur::before{display:none !important}"},"quixa.it":{s:"snack-bar-container{display:none !important}"},"supermicro.com":{s:"#alert-container,#privacy-popup-agree{display:none !important}"},"puzzlegarage.com":{s:".modal--cookies{display:none !important}"},"rzeszow.pl":{s:"#__next > .fixed{display:none !important}"},"lifevantage.com":{j:"5"},"heatable.co.uk":{c:"34"},"pdfforge.org":{j:"5"},"learnattack.de":{j:"5"},"oberstdorf2021.com":{j:"5"},"alex-soze.nl":{s:"main ~ div{display:none !important}"},"cobasi.com.br":{s:".lgpd{display:none !important}"},"mojoreads.de":{s:"main + div > div:first-child{display:none !important}"},"la-palma24.info":{s:".dvcookies{display:none !important}"},"scitanie.sk":{s:".c-banner{display:none !important}"},"lvhn.org":{s:"#block-lvhnconsentpopup{display:none !important}"},"vacuumclinic.ie":{s:".ec-notices{display:none !important}"},"st1.fi":{s:".cookie-consent-modal,.backdrop{display:none !important}"},"st1.se":{s:".cookie-consent-modal,.backdrop{display:none !important}"},"coder.com":{s:'#__next > [style*="opacity"]{display:none !important}'},"tt2-compendium.com":{s:"#cover,#consntcook{display:none !important}"},"cataloxy.co.uk":{s:"#cookies_cond{display:none !important}"},"motaclarity.co.uk":{c:"3"},"postimees.ee":{j:"5"},"jasmin.com":{s:'#cookie_container ~ div[style=""]:not([id]){display:none !important}'},"gesundheit-nordhessen.de":{j:"5"},"mymoria.de":{j:"6"},"restaurantdepot.com":{s:"#consent-dialog{display:none !important}"},"mcdelivery.de":{j:"5"},"happiness-festival.de":{s:"#privacy-footer{display:none !important}"},"escueladesaludmurcia.es":{s:'.ui-dialog-mask,body > div[style*="center"]{display:none !important}'},"gamigo.net":{s:"#stayhome{display:none !important}"},"moviestillsdb.com":{s:'#app > [style*="fixed"]{display:none !important}'},"gasteig.de":{s:"#gasConsent{display:none !important}"},"helloasso.com":{s:".BannerTrackers{display:none !important}"},"peticie.com":{j:"6"},"pro-housing.nl":{s:".accept-alert{display:none !important}"},"octoparse.com":{s:"#snackbar{display:none !important}"},"baden-tv.com":{j:"5"},"viata-medicala.ro":{s:"#app_notice{display:none !important}"},"riprovelox.it":{s:"main ~ div{display:none !important}"},"farnell.com":{s:"#mktg_Cookie_Wrap,#STOP_EVERYTHING{display:none !important}"},"kupbilecik.pl":{j:"5"},"kupbilecik.de":{j:"5"},"kupbilecik.com":{j:"5"},"macmagazine.com.br":{s:".adp-popup{display:none !important}"},"stockx.com":{s:'#root > [style*="visible"]{display:none !important}'},"studienwahl.de":{j:"5"},"fedex.com":{s:"fedex-cookie-consent,fdx-caas-cookie-consent,.fxg-alert__fdx_cookie_notice{display:none !important}"},"teamtailor.com":{j:"5"},"youmail.com":{s:".policy-notification{display:none !important}"},"netapp.com":{s:"n-cookie-notification{display:none !important}"},"stickerapp.de":{s:"#cookie-consent-modal,.modal-backdrop{display:none !important}"},"stickerapp.com":{s:"#cookie-consent-modal,.modal-backdrop{display:none !important}"},"inkoma.com":{s:"#eatcoockies{display:none !important}"},"shopsmartfoods.com":{s:".privacy{display:none !important}"},"gradesfixer.com":{s:"#warning_popup{display:none !important}"},"njpw1972.com":{s:"#gdpr{display:none !important}"},"quadlockcase.eu":{s:".ip_cookie{display:none !important}"},"quadlockcase.co.uk":{s:".ip_cookie{display:none !important}"},"musicalfreedom.com":{s:".terms-and-policy-layer{display:none !important}"},"justanswer.com":{s:".Banner__container{display:none !important}"},"houtwormboktor.com":{s:".cc-popup{display:none !important}"},"marken-media.net":{s:"main ~ div{display:none !important}"},"stubai.at":{j:"5"},"go-fit.es":{s:"#barra-informativa{display:none !important}"},"rankia.com":{c:"2"},"lilly.gr":{s:".consent-message{display:none !important}"},"portalnow.com":{s:"snack-bar-container{display:none !important}"},"deurbeslag-expert.nl":{s:"#js-app > .fixed{display:none !important}"},"hacknplan.com":{s:'.application-footer[ng-class*="hasAcceptedCookies"]{display:none !important}'},"nanopay.net":{s:".gdrp{display:none !important}"},"esv.info":{j:"5"},"tedquality.bg":{s:".notification-wrapper{display:none !important}"},"beyondthebox.it":{c:"25"},"museot.fi":{s:'#body_area > [id*="cookie_ilmoitus"]{display:none !important}'},"vr.de":{s:".yt-activator__wrapper{display:none !important}"},"wolterskluwer.nl":{s:"#udtCookiebox,#udtDark,#udtWhite{display:none !important}"},"otpbanka.hr":{j:"5"},"stockmann.com":{j:"5"},"cdu-fraktion.berlin.de":{j:"5"},"burnleyfootballclub.com":{s:"footer ~ div > .fixed{display:none !important}"},"ipn.gov.pl":{s:".JSWrapper{display:none !important}"},"reiff-zuschnitt-konfigurator.de":{j:"5"},"reichelt-garten.de":{c:"26"},"muycomputer.com":{s:"#CSneak{display:none !important}"},"muycomputerpro.com":{s:"#CSneak{display:none !important}"},"tgz-ol.de":{j:"6"},"deily.hr":{s:".basel_cookie_bar{display:none !important}"},"coolblue.nl":{j:"5"},"coolblue.be":{j:"5"},"coolblue.de":{j:"5"},"robert-thomas.de":{s:".cookie--consent{display:none !important}"},"i4wifi.cz":{s:'div[role="EuCookiesBar"]{display:none !important}'},"fishbrain.com":{s:"#root > div > .fixed{display:none !important}"},"ipper.ru":{c:"7"},"case-score.de":{j:"5"},"akces-markt.pl":{c:"3"},"academictimes.com":{s:"#euPopup{display:none !important}"},"karriere-jet.de":{j:"5"},"bewerbung-tipps.com":{j:"5"},"lindner-group.com":{s:".cn-layer{display:none !important}"},"compravo.de":{j:"5"},"perpedale.de":{j:"5"},"gamestar.de":{j:"5"},"jetcost.com":{j:"5"},"jetcost.co.uk":{j:"5"},"jetcost.de":{j:"5"},"jetcost.pt":{j:"5"},"blendtec.com":{s:"#pixelpop{display:none !important}"},"themilitarystore.co.uk":{s:"#pixelpop{display:none !important}"},"dunhamssports.com":{j:"6"},"bandainamcoent.eu":{j:"5"},"ricmais.com.br":{s:"#privacy_site{display:none !important}"},"malergeschaeft-eisenloeffel.de":{s:"#bottom_popup{display:none !important}"},"mediakits.com":{j:"5"},"evangelisch.de":{j:"6"},"santanderconsumer.at":{s:".sliding-popup-bottom{display:none !important}"},"a3quattro.de":{s:"#popup{display:none !important}"},"gps-viewer.com":{s:".popup{display:none !important}"},"skfbearingselect.com":{j:"5"},"or.at":{s:"#cookie_shown,body > #coo{display:none !important}"},"or.th":{s:"#alert-policy{display:none !important}"},"fit4projects.at":{s:"#setcookie{display:none !important}"},"zoopla.co.uk":{j:"5"},"talktalk.co.uk":{j:"5"},"die-linke-grundeinkommen.de":{c:"6"},"fdpbt.de":{j:"5"},"epravda.com.ua":{s:"#checkUPcookies{display:none !important}"},"sigma-global.com":{s:".c-info-pane{display:none !important}"},"akutbolig.dk":{s:"#app ~ div[class]:not([id]){display:none !important}"},"evangelisch-hochtaunus.de":{s:".readcookie{display:none !important}"},"barum-reifen.de":{j:"5"},"sofort.com":{s:"#Cookietext{display:none !important}"},"c-dating.fr":{j:"5"},"singles50.it":{j:"5"},"be2.it":{j:"5"},"justspices.de":{s:".cookie_overlay::before{display:none !important}"},"leaseweb.com":{j:"5"},"rubberduckvba.com":{j:"5"},"plutogaming.net":{s:".toast{display:none !important}"},"centrumwedkarstwa.pl":{s:"body > .no_print{display:none !important}"},"oversightboard.com":{j:"5"},"fressnapf.hu":{s:".grey-popup-layer{display:none !important}"},"fuckstudies.com":{s:".cookie{display:none !important}.cookies .main{top:0 !important}"},"rawcouples.com":{s:".cookie{display:none !important}.cookies .main{top:0 !important}"},"money2gocard.de":{j:"5"},"kyero.com":{s:'div[data-component="cookies_policy_modal"],.fixed[data-cookie-toast]{display:none !important}'},"6play.fr":{j:"5"},"macrosat.pl":{s:"#footer ~ .top{display:none !important}"},"hostingsdc.pl":{s:"#informationbar{display:none !important}"},"tupowstalapolska.pl":{s:"#menusDiv{display:none !important}"},"geoportal.muenchen.de":{c:"20"},"muenchen.tv":{j:"5"},"ridersguide.nl":{j:"5"},"mondenissin.com":{c:"25"},"100.football":{s:".bladzy-popup-agreement-modal,.modals-overlay{display:none !important}"},"peek-cloppenburg.pl":{j:"5"},"hombresevolucionantes.com":{c:"25"},"rse-get-it-right.org.uk":{c:"25"},"cocktails.de":{j:"5"},"podoplus.be":{c:"36"},"kastner-oehler.at":{j:"5"},"kastner-oehler.ch":{j:"5"},"gigasport.at":{j:"5"},"gigasport.ch":{j:"5"},"frollein-frisoese.de":{s:"main ~ div{display:none !important}"},"navigium.de":{j:"5"},"bankelf.de":{j:"5"},"bta-international.com":{s:".cc-layer{display:none !important}"},"apllogistics.com":{c:"6"},"wit.edu.pl":{j:"5"},"ubi2.wit.edu.pl":{j:"6"},"fonq.nl":{s:".modal.tracking-consent-popup{display:none !important}"},"themcelroy.family":{s:"#gdpr{display:none !important}"},"evapolar.com":{s:'footer ~ [style*="fixed"]{display:none !important}'},"aldi-sued.de":{j:"5"},"customessaymeister.com":{c:"20"},"mifas.cat":{j:"5"},"jetzendorf.de":{s:"#privacy-container{display:none !important}"},"lansberg.de":{j:"5"},"ria.com":{s:".gdprShow{display:none !important}"},"viamedica.pl":{s:".dark-background::after{display:none !important}"},"buzzaar.eu":{s:".cookies-modal{display:none !important}"},"intelligentinsurer.com":{s:".privacyLaw{display:none !important}"},"popeyeschicken.ca":{s:'#main ~ div[class*="Container"]{display:none !important}'},"icarros.com.br":{s:"#isView{display:none !important}"},"teijin.com":{s:"#assistClone{display:none !important}"},"fernwaerme-gemeinschaft.de":{s:".cookie-overlay::before{display:none !important}"},"lovehoney.co.uk":{s:".dis_message{display:none !important}"},"lovehoney.com.au":{s:".dis_message{display:none !important}"},"tamss.at":{s:"main ~ div{display:none !important}"},"europe-mountains.com":{c:"3"},"chemrxiv.org":{s:'header > [role="alert"]{display:none !important}'},"artsper.com":{s:'.ui-pnotify[aria-role*="alert"]{display:none !important}'},"gidsingezondheid.nl":{s:"footer ~ .popup_overlay{display:none !important}"},"goldenline.pl":{j:"5"},"hagengrote.de":{j:"5"},"hagengrote.at":{j:"5"},"idagio.com":{j:"5"},"app.klarna.com":{j:"3"},"pushkin.institute":{s:".beono-flashmessage{display:none !important}"},"seedrs.com":{s:"#__next > div:first-child,#root-header > div{display:none !important}"},"giffits.de":{s:".overlay{display:none !important}"},"tata.com":{s:".overlayPop{display:none !important}"},"berendsen.pl":{s:".site--wrapper ~ div{display:none !important}"},"mediamarkt.at":{s:"#mms-consent-portal-container{display:none !important}"},"la7.it":{j:"5"},"delhaize.be":{j:"5"},"outandaboutlive.co.uk":{j:"6"},"syncfusion.com":{c:"3"},"rfo.de":{j:"5"},"tecnocasa.it":{s:".cookie-status{display:none !important}"},"pwabuilder.com":{s:"#gdprDiv{display:none !important}"},"bruns.de":{j:"5"},"spainhouses.net":{s:".persistentMessage{display:none !important}"},"wearemarketing.com":{c:"2"},"antilinkynord.fr":{s:".accookie{display:none !important}"},"hallhuber.com":{j:"5"},"facultas.at":{s:".bmcookie{display:none !important}"},"rupertusbuch.at":{s:".bmcookie{display:none !important}"},"nhs.uk":{s:'.global-footer p ~ p,body > div[style*="E7E"],#nhsuk-cookie-banner,#cookie-banner ~ .notification{display:none !important}'},"nhs.wales":{s:'.mura-cta__item[aria-describedby="Cookie notice"]{display:none !important}'},"green-circle.co":{s:'body > [style*="fixed"]{display:none !important}'},"revistabula.com":{s:"#consent-box{display:none !important}"},"happycow.net":{s:"body > .fixed{display:none !important}"},"muehlenapotheken.de":{s:"#bg-datenschutz,.icon.cookies.cookies-aktivieren{display:none !important}"},"datenlogger-store.de":{j:"5"},"kaminofen-shop.de":{j:"5"},"nova-motors.de":{j:"5"},"direct.de":{j:"5"},"wakingup.com":{s:'#___gatsby ~ div:not([id]):not([class]),#root > div[style*="transform"]{display:none !important}'},"patreon.com":{j:"5"},"psd-rhein-ruhr.de":{s:"#cookieContent{display:none !important}"},"societegenerale.fr":{s:"#c-message{display:none !important}"},"aerolineas.com.ar":{s:"#c-message{display:none !important}"},"researchaffiliates.com":{j:"5"},"scleracontacts.com":{s:"#pushwix-popover-container.slide-down{display:none !important}"},"nineambell.com":{c:"25"},"hemnet.se":{j:"5"},"promosejours.com":{s:".privacy{display:none !important}"},"timberland.com.tw":{s:".container-component > .dialog ~ div:last-child{display:none !important}"},"tibber.com":{j:"5",s:".privacyButton{display:none !important}"},"tesa.com":{j:"6"},"tapir-store.de":{s:".cs-cookie__wrapper{display:none !important}"},"quora.com":{s:'#root .q-box > .q-flex[class*="Banner"]{display:none !important}'},"material.io":{s:"mio-cookie-notice{display:none !important}"},"bricomarche.com":{j:"5"},"kh.hu":{j:"5"},"yubico.com":{s:".MuiSnackbar-root,#yubi-root > .bottom-pop-up-container{display:none !important}"},"gainesvillecoins.com":{s:"#jsGDRP{display:none !important}"},"barnebys.se":{s:"#__next > div + div:last-child{display:none !important}"},"brookes.ac.uk":{s:"#PopUp{display:none !important}"},"brookesalumni.co.uk":{s:"#PopUp{display:none !important}"},"eltima.com":{s:".float-message__wrap{display:none !important}"},"aboalarm.de":{j:"5"},"tomorrow.one":{j:"5"},"kdanmobile.com":{s:'#__next > div[style*="overflow"] > div[class*="ContentWrap"],#__next > div[class*="ContentWrap"],#gdpr-wrapper{display:none !important}'},"rademacher.de":{s:".widget-Container ~ .widget-EyeCatcher{display:none !important}"},"rblx.trade":{s:".card.fixed-bottom{display:none !important}"},"okazii.ro":{j:"5"},"blockchain.com":{j:"5"},"turboimagehost.com":{j:"6"},"free.fr":{j:"5"},"emons.de":{j:"5"},"selectos.eu":{s:"#selectos-cookie-background{display:none !important}"},"e-fellows.net":{s:"#efnCookieConsent{display:none !important}"},"ionos.de":{j:"5"},"ionos.at":{j:"5"},"ionos.fr":{j:"5"},"uchi.ru":{s:"._UCHI_COOKIE__widget{display:none !important}"},"foter.com":{s:".fo4-cookie{display:none !important}"},"vestel-germany.de":{s:"#custom-modal-cookie{display:none !important}"},"warsztat.pl":{j:"5"},"bell-labs.com":{s:"#n-cookie-notice{display:none !important}"},"flightradar24.com":{j:"5"},"forum.brasil-web.de":{j:"5"},"fxhome.com":{s:'.elementor-location-footer[data-elementor-type="section"]{display:none !important}'},"change.org":{j:"5"},"tesco.pl":{s:"#privacyOuterContainer{display:none !important}"},"tesco.com":{s:"#sticky-bar-wrapper{display:none !important}"},"danskebank.se":{j:"5"},"danskebank.dk":{j:"5"},"danskebank.no":{j:"5"},"danskebank.fi":{j:"5"},"danskebank.co.uk":{j:"5"},"danskeci.com":{j:"5"},"danicapension.dk":{j:"5"},"knowunity.de":{s:"main ~ [data-nosnippet]{display:none !important}"},"conso.ro":{j:"5"},"mubi.com":{j:"6"},"albaparty.org":{c:"4"},"lilies-diary.com":{s:".lld-cookieconsentbanner{display:none !important}"},"powerspreadsheets.com":{s:".thrv-ribbon,.thrv-leads-slide-in{display:none !important}"},"eurosportplayer.com":{s:'#app div[class^="cookie-policy"]{display:none !important}'},"hessen.de":{c:"31"},"gartencenter-bergerhoff.de":{j:"5"},"zonky.cz":{s:".cookie-consent-shown .application > .flex{display:none !important}"},"farfetch.com":{s:'div[data-testid*="gdpr-banner"]{display:none !important}'},"kraken.com":{s:".kraken-cookie-warning,.kraken-cookie-warning.show{display:none !important}"},"the-germanz.de":{j:"5"},"lovehoney.com":{s:".dis_message{display:none !important}"},"lovehoney.eu":{s:".dis_message{display:none !important}"},"stanley.ru":{s:".test-mode__wrap{display:none !important}"},"danica.no":{j:"5"},"bopla.de":{s:"#privacy-consent{display:none !important}"},"antenasgsm.com":{c:"34"},"laschensky.at":{j:"5"},"dynavap.com":{c:"3"},"trouva.com":{s:"#__next > div > div:first-child{display:none !important}"},"urzadzamy.pl":{j:"5"},"cypress.com":{s:"#complianceoverlay.complianceoverlay{display:none !important}"},"sportsoft.co.uk":{s:"#toast-container{display:none !important}"},"tomgarten.de":{j:"5"},"singleboersen-vergleich.de":{j:"5"},"preplounge.com":{j:"5"},"autocentrum.pl":{j:"5"},"beiersdorf.de":{s:"form > .popup{display:none !important}"},"beiersdorf.ch":{s:"form > .popup{display:none !important}"},"lemonde.fr":{j:"5"},"nouvelobs.com":{j:"5"},"trekpleister.nl":{j:"5"},"evavonangern.de":{c:"6"},"airsoft.ch":{s:".cb{display:none !important}"},"ticket.io":{j:"5"},"courrierinternational.com":{j:"5"},"mediapart.fr":{s:".cc-modal{display:none !important}"},"icabanken.se":{s:"#blockbackground,#removeOnClose{display:none !important}"},"canalplus.com":{c:"34"},"qmee.com":{s:".dashboard-disclaimer + div{display:none !important}"},"labellevie.com":{s:"#confidentiality{display:none !important}"},"lcd-compare.com":{j:"5"},"billa.at":{j:"5"},"rnbee.ru":{s:"#yw-cookie-gdpr{display:none !important}"},"jeanscentre.nl":{s:"#gatsby-focus-wrapper > div:last-child{display:none !important}"},"zoom.nl":{j:"5"},"centrumtenisa.pl":{j:"5"},"jetbluevacations.com":{j:"5"},"impericon.com":{j:"5"},"otelo.de":{j:"5"},"live.com":{j:"5"},"ikbenfrits.nl":{j:"5"},"diefabrik-sundern.de":{j:"5"},"nablawave.com":{j:"5"},"uni-tuebingen.de":{s:".in2-modal__blackbox,#privacy-background,#privacy-container{display:none !important}"},"eifel-antik.de":{s:".jmg-googlemaps-dsgvo-notification{display:none !important}"},"green-24.de":{j:"5"},"markilux.com":{j:"5"},"salomon.com":{j:"5"},"flyrotax.com":{s:"#CookieSettingsContainer{display:none !important}"},"amorespossiveis.com.br":{s:"#idLGPD{display:none !important}"},"freiewelt.net":{s:"#cmmodal{display:none !important}"},"kruidvat.nl":{j:"5"},"kruidvat.be":{j:"5"},"allocine.fr":{j:"5"},"bankmillennium.pl":{s:"wc-cookies-marketing{display:none !important}"},"handelsbanken.se":{s:"shb-cookie-consent,.js-shb-inss-login__cookie-consent{display:none !important}"},"handelsbanken.nl":{s:"shb-cookie-consent{display:none !important}"},"ageofempires.com":{s:".popup.disable-screen{display:none !important}"},"ultimatecourses.com":{s:".uc-cookies{display:none !important}"},"royalmail.com":{j:"5"},"mauk-gartenwelt.de":{j:"5"},"streamelements.com":{j:"3"},"3gimmobilier.com":{j:"5"},"ihk-akademie.de":{s:"#privacy-statement{display:none !important}"},"ontariocolleges.ca":{s:"#privacy-statement{display:none !important}"},"digimobil.es":{s:"#infocookies2,.modal-overlay,.modal-cookies-warning,.modal-cookies-info{display:none !important}"},"dekra-norisko.fr":{s:".dekra-gdpr{display:none !important}"},"starcar.de":{s:"#modal-overlay{display:none !important}"},"service.gov.uk":{s:".cbanner-govuk-cookie-banner,#dm-cookie-banner{display:none !important}"},"passport.service.gov.uk":{j:"5"},"tierarzt24.de":{s:".vet_cookies{display:none !important}"},"loewe.tv":{s:".cookey-pop{display:none !important}"},"iconscout.com":{s:"#__layout > div > .rounded{display:none !important}"},"pngimg.com":{j:"5"},"verktygsboden.se":{s:"header > div:nth-child(2) .sd-surface-subtop > .sd-object-if{display:none !important}"},"kaufland.de":{j:"5"},"tinyurl.com":{c:"31"},"mcfit.com":{s:"#app ~ [opacity]{display:none !important}"},"scinapse.io":{s:"#react-app > div:last-child{display:none !important}"},"educative.io":{s:"#__next > .ed-grid ~ div{display:none !important}"},"cover-4-less.com":{c:"25"},"clem.mobi":{j:"5"},"gnosis.io":{s:"#consent{display:none !important}"},"tingstad.com":{s:".cookie-manager{display:none !important}"},"7plus.com.au":{s:'#app > [class*="cookieContainer"]{display:none !important}'},"juhu.auto":{j:"5"},"sportsbikeshop.co.uk":{j:"5"},"jumingo.com":{j:"5"},"tuigroup.com":{s:"#tui-cc{display:none !important}"},"werkenbijlidl.nl":{j:"5"},"hoyavision.com":{j:"5"},"kino.dk":{j:"5"},"apotal.de":{s:"#footer::after{display:none !important}"},"focustaiwan.tw":{s:"#jsGDPR{display:none !important}"},"onleihe.de":{j:"5",c:"20"},"paravol.org":{j:"5"},"verfassungsblog.de":{s:".tve-leads-ribbon{display:none !important}"},"cbtnuggets.com":{s:'#__next [class*="BannerContainer"]{display:none !important}'},"baer-schuhe.de":{j:"5"},"baer-shoes.com":{j:"5"},"ersatzteilshop.de":{j:"6"},"keimling.de":{j:"5"},"swisse.nl":{j:"5"},"arctic.de":{j:"5"},"arctic.ac":{j:"5"},"radonline.de":{j:"5"},"skapetze.com":{j:"5"},"picnic.app":{s:".cookies,#modal{display:none !important}"},"iew.be":{j:"5"},"quicktest.se":{j:"5"},"funshop.ch":{s:".ds_cookiebar_container{display:none !important}"},"gumenadom.si":{c:"34"},"backmomente.de":{j:"5"},"zeroco2.eco":{s:"#loadingShadow{display:none !important}"},"oxxio.nl":{j:"5"},"cnbc.com":{j:"5"},"elavon.pl":{j:"5"},"zeg-holz.de":{s:"#ucShadowRoot{display:none !important}"},"xeev.net":{j:"5"},"claras-apotheke.de":{j:"5"},"mimibabytielt.be":{j:"5"},"stepstone.se":{j:"5"},"oculus.com":{j:"5"},"bullionvault.com":{s:".navigation__cookies{display:none !important}"},"bullionvault.it":{s:".navigation__cookies{display:none !important}"},"thenextcloset.com":{s:'div[data-react-class*="CookieConsentBanner"]{display:none !important}'},"plushbezlimitu.pl":{s:".modal-overlay{display:none !important}"},"dhbbank.nl":{j:"5"},"play.google.com":{s:'#gb iframe[src*="ogs.google."][src*="widget/callout"]{display:none !important}'},"support.google.com":{s:'#gb iframe[src*="ogs.google."][src*="widget/callout"]{display:none !important}'},"studyspace.eu":{j:"5"},"gamersgate.com":{j:"5"},"vsv.be":{j:"5"},"veiligverkeer.be":{j:"5"},"nike.com":{j:"5"},"esports.com":{j:"5"},"withings.com":{j:"5"},"mein-apothekenmanager.de":{s:"#cn-wrapper{display:none !important}"},"ikarus.de":{j:"5"},"ntb.no":{s:".footer__notification{display:none !important}"},"debenhams.com":{j:"5"},"corona-impfung.nrw":{j:"5"},"videosmile.ru":{s:"#accept_q{display:none !important}"},"workwise.io":{j:"5"},"taxfix.de":{j:"5"},"mit-dem-rad-zur-arbeit.de":{j:"5"},"akpool.de":{s:"#consent{display:none !important}"},"penguinrandomhouse.de":{s:".cl-window-bg{display:none !important}"},"maiia.com":{j:"5"},"myrobotcenter.de":{j:"5"},"myrobotcenter.at":{j:"5"},"myrobotcenter.co.uk":{j:"5"},"ifaa.de":{s:".cmnstr-outer{display:none !important}"},"bakecaincontrii.com":{s:".alert.fixed-bottom{display:none !important}"},"allekringloopwinkels.nl":{j:"5"},"placedumarche.fr":{s:".sky-cookies-banner{display:none !important}"},"xmlgold.eu":{s:".cookie-window{display:none !important}"},"kedglobal.com":{s:".cookies_layer{display:none !important}"},"dbb.de":{s:"#dbb-gdpr{display:none !important}"},"ga.de":{j:"5"},"mifcom.de":{j:"5"},"satrucker.co.za":{s:'div[id*="cookie-notice"]{display:none !important}'},"daad.de":{j:"5"},"fok.nl":{j:"5"},"almedina.net":{s:".footer-fixed-bar{display:none !important}"},"lifesum.com":{j:"3"},"23degrees.io":{s:"consent-toast{display:none !important}"},"best-butcher.de":{s:"main ~ div{display:none !important}"},"jku.at":{j:"5",s:".ccpopup{display:none !important}"},"atlasformen.de":{s:".cookie-modal,.modal-backdrop{display:none !important}"},"atlasformen.co.uk":{s:"#divBottomStickyLayer{display:none !important}"},"partssource.com":{s:"#divBodyContainer > div > div > .justify-content-center{display:none !important}"},"voeazul.com.br":{s:".az_cookie{display:none !important}"},"sanitarium.com.au":{s:".cookie--modal{display:none !important}"},"sanitarium.co.nz":{s:".cookie--modal{display:none !important}"},"autosolar.es":{s:".cookie-configuration{display:none !important}"},"techbone.de":{j:"5"},"crosig.hr":{s:"co-message{display:none !important}"},"desarrolloweb.com":{s:"dile-cookies-consent{display:none !important}"},"homecine-compare.com":{j:"5"},"ulysse.com":{s:".shadow-cookie{display:none !important}"},"oekt.de":{j:"5"},"pcsoft.fr":{j:"5"},"pnrtscr.com":{j:"5"},"shirtlabor.de":{j:"5"},"bit-electronix.eu":{j:"5"},"berndes.com":{j:"5"},"steingemachtes.de":{j:"5"},"moebel-fundgrube.de":{j:"5"},"wuerdinger.de":{j:"5"},"avl-ludwigsburg.de":{s:".page-overlay{display:none !important}"},"ma-calculatrice.fr":{s:"#manger-des-gateaux{display:none !important}"},"recordsale.de":{s:".personalization-request{display:none !important}"},"servihabitat.com":{s:'.portlet-boundary[class*="condiciones"]{display:none !important}'},"calendly.com":{j:"5",s:'#gdpr-region ~ [data-component="sticker"]{display:none !important}'},"correos.es":{s:".correosCookies,.sc-correos-cdk-cookies-module{display:none !important}"},"liverpoolfc.com":{s:"#LfcCookieContent{display:none !important}"},"pdfcoffee.com":{s:"#PDFCOFFEECOM_cookie_box{display:none !important}"},"extradom.pl":{j:"5"},"aldeparty.eu":{c:"4"},"remove.bg":{s:".banner.fixed-bottom{display:none !important}"},"terveyskirjasto.fi":{j:"5"},"leboncoin.info":{j:"5"},"dagenssamhalle.se":{s:"#__next > div:last-child{display:none !important}"},"vermieterverein.de":{j:"5"},"censor.net":{s:"#usage_notice,#usage-notice-message{display:none !important;visibility:hidden}"},"designmynight.com":{j:"5"},"oead.at":{j:"5"},"rcibanque.de":{s:'.ng-scope[ui-view="cookie"]{display:none !important}'},"tuttitalia.it":{j:"5"},"brabus.com":{j:"5"},"miltenyibiotec.com":{j:"5"},"events.google.com":{j:"5"},"immoscout24.ch":{s:'section[class*="SeoLinks"] ~ div[class*="Box"]{display:none !important}'},"argent.xyz":{s:"#gatsby-focus-wrapper > div:not([id]):last-of-type{display:none !important}"},"thsrc.com.tw":{j:"5"},"haix.de":{j:"5"},"notebooksbilliger.de":{j:"5"},"shop.mercedes-benz.com":{j:"5"},"login.nos.pt":{j:"5"},"pensjonistforbundet.no":{j:"5"},"oceanmata.com":{s:".banner{display:none !important}"},"vr.fi":{j:"5"},"jamiebalfour.scot":{c:"2"},"bolighed.dk":{s:".cookie__manager{display:none !important}"},"creampie-angels.com":{s:".cookie{display:none !important}body.cookies{padding-top:0 !important}body.cookies header.main{top:0 !important}"},"moveyouroffice.io":{j:"5"},"digital-affin.de":{j:"5"},"chimpify.de":{j:"5"},"scoodleplay.be":{j:"3"},"euplf.eu":{j:"5"},"audiofanzine.com":{s:".af-cookies,.af-cookies-background{display:none !important}"},"chess.com":{s:".bottom-banner-component{display:none !important}"},"dailymotion.com":{j:"5"},"heizoel24.de":{j:"5"},"heizoel24.at":{j:"5"},"stihl.de":{j:"5"},"stihl.com":{j:"5"},"bethesda.net":{j:"5"},"splu-engineers.com":{s:"#frontpage-banner-cover{display:none !important}"},"a10.com":{j:"5"},"gry.pl":{j:"5"},"footroll.pl":{j:"5",c:"7"},"easycredit.de":{s:"cookie-layer{display:none !important}"},"cykelgear.dk":{j:"5"},"allround-pc.com":{j:"5"},"digikey.com":{s:"body.gdpr{margin-top:0 !important;background-position:initial !important}#header__storage{top:0 !important}"},"boschbad.nl":{j:"5"},"teikeicoffee.org":{j:"5"},"pocketbook.de":{j:"5"},"skatteverket.se":{s:"skv-cookie-banner{display:none !important}"},"kvk.nl":{j:"5"},"jobs.at":{j:"5"},"karriere.at":{j:"5"},"share-now.com":{s:".banner-placeholder{display:none !important}"},"gittigidiyor.com":{s:"#__next main > div:not([class]),.policy-alert-v2.show-policy{display:none !important}"},"touslesprix.com":{j:"5"},"telenor.se":{j:"5"},"alo.bg":{s:"#consent_main{display:none !important}"},"figuya.com":{j:"3"},"fafit24.de":{j:"5"},"bbc.com":{s:'#main-wrapper > header[role="banner"] > div:first-child{display:none !important}',j:"5"},"rtl.hr":{s:".app__content ~ div{display:none !important}",j:"5"},"fernsehserien.de":{j:"5"},"nivea.pl":{s:".policy-info{display:none !important}"},"supercast.tech":{c:"41"},"correios.com.br":{s:"#cookiesId{display:none !important}"},"citilink.ru":{s:".PersonalDataConfirm{display:none !important}"},"auchan.pl":{j:"5"},"auchan.hu":{j:"5"},"werkstars.de":{s:".wsr--data-protection{display:none !important}"},"jacobin.de":{s:'#__next > [class*="Cookie"]{display:none !important}'},"kobo.com":{s:'body > div[id^="cki"]{display:none !important}'},"lambdatest.com":{s:".cookiesdiv{display:none !important}"},"dofus.com":{s:".ak-modal-wrapper,.ui-widget-overlay{display:none !important}"},"modrinth.com":{s:".container > .banner{display:none !important}"},"jadlonomia.com":{s:".cbar-container{display:none !important}"},"twitch.tv":{j:"5"},"senec.com":{j:"5"},"taschenhirn.de":{j:"5"},"wuerth.de":{c:"77"},"strefakonsumencka.pl":{c:"34"},"deutsche-diabetes-gesellschaft.de":{j:"5"},"awwwards.com":{j:"5"},"focus-home.com":{s:"#app > nav + div{display:none !important}"},"wayofleaf.com":{s:"#cpop{display:none !important}"},"crucial.com":{s:'.app-light > div[style*="fixed"]{display:none !important}'},"concursosnobrasil.com.br":{s:"#lgpd{display:none !important}"},"uol.com.br":{s:".ntv-lgpd-consent,.ms-footer-message{display:none !important}"},"autopunkt.pl":{j:"5"},"euromobil.com.pl":{j:"5"},"euromotor.pl":{j:"5"},"koreamotors.pl":{j:"5"},"japanmotors.pl":{j:"5",c:"20"},"pgd.pl":{j:"5"},"eforia.pl":{j:"5"},"nordiskporselen.com":{s:"#kjeks{display:none !important}"},"rueducommerce.fr":{j:"5"},"3suisses.fr":{j:"5"},"lass-tanzen.de":{j:"5"},"camping.info":{j:"5"},"belgium.be":{c:"34"},"globaldata.pt":{j:"5"},"noblechairs.de":{j:"5"},"noblechairs.fr":{j:"5"},"volksfreund.de":{j:"5"},"smitegame.com":{s:".page > .is-visible{display:none !important}"},"ryd.one":{s:".xy-consent{display:none !important}"},"burton.co.uk":{j:"5"},"dorothyperkins.com":{j:"5"},"onepercentclub.com":{s:".notification-bar-container{display:none !important}"},"samenvoordebuurt.nl":{s:".notification-bar-container{display:none !important}"},"investmentpunk.academy":{j:"5"},"meteored.com.ec":{j:"5"},"tameteo.nl":{j:"5"},"tameteo.com":{j:"5"},"mapillary.com":{j:"5"},"voltus.de":{s:"#c4sCookieOneClickModal{display:none !important}"},"123rf.com":{s:".AgreementBanner__wrapper{display:none !important}"},"smythstoys.com":{j:"5"},"ccoo.es":{j:"5"},"eprimo.de":{s:".Usercentrics{display:none !important}"},"istockphoto.com":{s:".banner.warning{display:none !important}"},"airtel.com":{s:".cookie__wrap{display:none !important}"},"ford-weege-bad-salzuflen.de":{j:"5"},"1881.no":{s:".adn-window{display:none !important}"},"waggel.co.uk":{j:"5"},"yle.fi":{j:"5"},"webscale.fi":{j:"5"},"pingback.com":{s:".cookies-modal{display:none !important}"},"treinaweb.com.br":{s:'div[c_data="c_cookie_main"]{display:none !important}'},"billiger-mietwagen.de":{s:".cmp-container{display:none !important}"},"nettolohn.de":{s:'div[id*="hinweis-cookie"]{display:none !important}'},"translit.ru":{j:"5"},"translit.net":{j:"5"},"wetter.com":{j:"5"},"talktomeinkorean.com":{s:"#wpfront-notification-bar-spacer{display:none !important}"},"gorillas.io":{s:"#cookie-settings{display:none !important}"},"dpam.com":{j:"5"},"sylvania-automotive.com":{j:"5"},"valdemarne.fr":{j:"5"},"mercedes-benz.nl":{j:"5"},"pu.nl":{j:"5"},"ringana.com":{j:"5"},"hampel-auctions.com":{s:"#consentmanager{display:none !important}"},"compress-or-die.com":{s:".module_consent__main{display:none !important}"},"theater-essen.de":{s:".dataprotection{display:none !important}"},"spotlightstores.com":{j:"5"},"anacondastores.com":{j:"5"},"akkushop.de":{j:"5"},"akkushop-austria.at":{j:"5"},"akkushop-schweiz.ch":{j:"5"},"batterie-boutique.fr":{j:"5"},"mfa.bg":{c:"2"},"platforma-karaulov.ru":{s:".using-cookie{display:none !important}"},"plus.pl":{s:".modal-overlay,.topup-cookie{display:none !important}"},"a2mobile.pl":{s:".topup-cookie{display:none !important}"},"green.hr":{c:"25"},"ebike-connect.com":{j:"5"},"kontrast.dk":{j:"5"},"drawabox.com":{j:"5"},"adfc.de":{s:"body > .ember-view > .ember-view:first-child{display:none !important}"},"totalmoney.pl":{j:"5"},"10015.io":{s:".Toastify ~ div{display:none !important}"},"de.vanguard":{j:"5"},"merckgroup.com":{s:".new-cookie__modal{display:none !important}"},"fruugo.fr":{j:"5"},"pspdfkit.com":{s:".pspdfCookieDialog{display:none !important}"},"ovh.com":{j:"5"},"erkul.games":{j:"5"},"taimweser.com":{j:"5"},"konsumenternas.se":{s:"#tc-consent{display:none !important}"},"fusswerkmuenchen.de":{s:"main ~ div{display:none !important}"},"pepeenergy.com":{s:".modal-cookie{display:none !important}",j:"5"},"ratbacher.de":{j:"5"},"sava-osiguranje.hr":{j:"5"},"zav-sava.si":{j:"5"},"inselradio.com":{j:"5"},"migros-shop.de":{j:"5"},"futterhaus.de":{j:"5"},"elasticemail.com":{s:"#elastic-cookie-notice{display:none !important}"},"incibeauty.com":{j:"5"},"churchs.com":{s:"#ccpa{display:none !important}"},"lojabuettner.com.br":{s:".eula-bg{display:none !important}"},"mobilarena.hu":{s:"#rules-accept{display:none !important}"},"medspa.bg":{s:".popup-policy{display:none !important}"},"elevensports.com":{s:'#__next ~ div[class^="css"]{display:none !important}'},"elevensports.pl":{j:"5"},"hek.de":{j:"5"},"inp-gruppe.de":{j:"5"},"altoetting.de":{j:"5"},"hema.nl":{s:".no-scroll{position:relative !important}.has-cookie-message{padding-top:0 !important}"},"chregister.ch":{s:".ui-notificationbar{display:none !important}"},"synology.com":{s:".syno_cookie_element{display:none !important}"},"retroplace.com":{j:"5"},"aptekagemini.pl":{j:"5"},"r7.com":{s:".toolkit-privacy-box{display:none !important}"},"skillbox.ru":{c:"34"},"autoalkatreszonline24.hu":{s:".block-cookies{display:none !important}"},"saarbruecker-zeitung.de":{j:"5"},"bernau-bei-berlin.de":{j:"5"},"england.de":{s:"#apc{display:none !important}"},"mallorca.com":{s:"#apc{display:none !important}"},"voordeeluitjes.nl":{j:"5"},"hyundai-entdecken.de":{s:"#COOKIE_POLICY{display:none !important}"},"cilgro.nl":{j:"5"},"takealot.com":{s:'div[class*="cookie-banner"]{display:none !important}'},"adtipp.de":{j:"5"},"handelsregister.de":{j:"5"},"newdaycards.com":{s:"#cookie-consents{display:none !important}"},"niagara-pu.ru":{s:'div[data-storage-item*="cookiename"]{display:none !important}'},"mu.se":{s:'div[data-storage-item*="cookiename"]{display:none !important}'},"mega.io":{j:"5"},"mega.nz":{j:"5"},"mega.be":{j:"5"},"benify.se":{j:"5"},"benify.com":{j:"5"},"g2g.com":{s:".q-page ~ div > .fixed-bottom{display:none !important}"},"tempo.com":{j:"5"},"bulletin.com":{j:"5"},"huk24.de":{j:"5"},"huk.de":{j:"5"},"myminifactory.com":{s:".footerBottom ~ div{display:none !important}"},"findhs.codes":{s:"#PrivacyAlert{display:none !important}"},"group.rwe":{j:"5"},"rwe.com":{j:"5"},"festo.com":{j:"5"},"animeschedule.net":{s:"#consent-popup-wrapper{display:none !important}"},"sberbankdirect.de":{s:".cm{display:none !important}"},"toner-dumping.de":{s:".js--overlay{display:none !important}"},"ticketswap.com":{s:"reach-portal + ticketswap-portal{display:none !important}"},"ticketswap.nl":{s:"reach-portal + ticketswap-portal{display:none !important}"},"ticketswap.fr":{s:"reach-portal + ticketswap-portal{display:none !important}"},"rackstore.be":{j:"5"},"fello.se":{j:"5"},"bazarchic.com":{s:"#react-footer > div > div:not([class]){display:none !important}"},"lotuscars.com":{s:"#consent-modal{display:none !important}"},"ajax.nl":{j:"5"},"deadbydaylight.com":{j:"5"},"edclub.com":{s:".__CC_popup{display:none !important}"},"idoctors.it":{j:"5"},"vastervik.se":{c:"34"},"tarifcheck.de":{j:"5"},"armedangels.com":{j:"5"},"paysend.com":{j:"5"},"schloss-gluecksburg.de":{j:"5"},"vcu.edu":{j:"5"},"webflow.com":{s:"#consent-container{display:none !important}"},"amplerbikes.com":{s:".ab-cookies-banner{display:none !important}"},"softzone.es":{j:"5"},"motorola.com.br":{s:"#motorola-cookies{display:none !important}"},"mav.hu":{s:"app-cookie{display:none !important}"},"yokanavi.com":{s:".agreement{display:none !important}"},"manutd.com":{j:"5"},"fotor.com":{s:'div[class*="UseCookie"]{display:none !important}'},"mym.fans":{j:"5"},"wacomstore.com.br":{s:"#privacy-popup{display:none !important}"},"g-star.com":{j:"5"},"sbermarket.ru":{s:".alerts + div{display:none !important}"},"redenacionalderadio.com.br":{s:"#viewlet-disclaimer{display:none !important}"},"moebel.de":{j:"5"},"eqmac.app":{j:"3"},"reddit.com":{s:'#SHORTCUT_FOCUSABLE_DIV > div> div > section > [style*="Toaster"]{display:none !important}'},"dvdoo.dk":{j:"5"},"altibox.no":{j:"5"},"minaftale.dk":{j:"5"},"babysam.dk":{j:"5"},"sj.no":{s:"#root header nav + .MuiBox-root,.experiencefragment > .MuiContainer-root:first-child{display:none !important}"},"vitrado.de":{s:"app-google-consent{display:none !important}"},"cinch.co.uk":{s:'#___gatsby > [data-testid="overlay"],#___gatsby > div > [data-testid="cookie-banner"]{display:none !important}'},"gutscheine.computerbild.de":{s:'div[data-testid="CookieBanner"]{display:none !important}'},"golem.de":{j:"5"},"bold.dk":{j:"5"},"bike-bild.de":{j:"5"},"cosmopolitan.de":{j:"5"},"gravitycoach.com":{s:".elo-snackbar{display:none !important}"},"barzahlen.de":{j:"5"},"biblioteka.wroc.pl":{j:"5"},"fulhamfc.com":{j:"5"},"restegourmet.de":{j:"6"},"onatera.com":{j:"5"},"xe.com":{s:'#__next div[class*="ConsentBanner"]{bottom:-100% !important}'},"aion.eu":{j:"5"},"jovempan.com.br":{s:".custom-container-lgpd{display:none !important}"},"thecompleteuniversityguide.co.uk":{s:".cookie_lbox{display:none !important}"},"zyro.com":{s:".zyro-cookies{display:none !important}"},"vinos.de":{s:".consent-cookie-box--lightbox{display:none !important}"},"flipsnack.com":{c:"77"},"tiempo.com":{j:"5"},"poettinger.at":{j:"5"},"pflanze2000.de":{j:"5"},"winfuture.de":{j:"5"},"1001spiele.de":{j:"5"},"tunein.com":{j:"5"},"reuters.com":{j:"5"},"eurogamer.net":{j:"5"},"eurogamer.pl":{j:"5"},"eurogamer.cz":{j:"5"},"eurogamer.de":{j:"5"},"eurogamer.es":{j:"5"},"eurogamer.it":{j:"5"},"eurogamer.nl":{j:"5"},"eurogamer.pt":{j:"5"},"rtlxl.nl":{j:"5"},"check24.de":{j:"5"},"chargify.com":{c:"53"},"airwallex.com":{s:"main > footer ~ div{display:none !important}"},"vetzoo.se":{j:"5"},"animail.se":{j:"5"},"vivobarefoot.de":{s:"#cookieNote{display:none !important}"},"apothekerkammer.at":{j:"5"},"easycosmetic.de":{s:".overlay{display:none !important}"},"easycosmetic.be":{s:".overlay{display:none !important}"},"easycosmetic.ch":{s:".overlay{display:none !important}"},"easycosmetic.at":{s:".overlay{display:none !important}"},"mol.hu":{j:"5"},"continental.com":{j:"5"},"webcontinental.com.br":{s:".wc-accept-cookies{display:none !important}"},"sentry.io":{s:"#sentry-consent-widget{display:none !important}"},"mapcarta.com":{s:".consent{display:none !important}"},"diesiedleronline.de":{j:"5"},"quantum-inspire.com":{c:"20"},"direct-assurance.fr":{j:"5"},"starlingbank.com":{j:"5"},"buecher.de":{s:"#klaro{display:none !important}"},"nur-positive-nachrichten.de":{s:"#klaro{display:none !important}"},"nunido.de":{s:"#klaro{display:none !important}"},"infopedia.pt":{s:"#klaro-pe-window,#klaro-pe-overlay{display:none !important}"},"paulcamper.de":{s:'.mainContainer > [class*="banner"]{display:none !important}'},"brandvital.eu":{s:".config-messages{display:none !important}"},"motorismo.com.pl":{s:".config-messages{display:none !important}"},"agrojd.com":{s:".config-messages{display:none !important}"},"aspel.com.pl":{s:".config-messages{display:none !important}"},"dozamel.pl":{s:".config-messages{display:none !important}"},"bosch.com.pl":{s:".config-messages{display:none !important}"},"estetiq.pl":{s:".config-messages{display:none !important}"},"galerialazienek.pl":{s:".config-messages{display:none !important}"},"ksiegarniarubikon.pl":{s:".config-messages{display:none !important}"},"papier24h.pl":{s:".config-messages{display:none !important}"},"papieryczerpane.pl":{s:".config-messages{display:none !important}"},"agro-eko.com.pl":{s:".config-messages{display:none !important}"},"balcamp.pl":{s:".config-messages{display:none !important}"},"mebloart.eu":{s:".config-messages{display:none !important}"},"phalanxgames.pl":{s:".config-messages{display:none !important}"},"rol-mech.pl":{s:".config-messages{display:none !important}"},"stalco.pl":{s:".config-messages{display:none !important}"},"tayama.pl":{s:".config-messages-background{display:none !important}"},"spawalniczy-sklep.pl":{s:".config-messages{display:none !important}"},"swiatkoralikow2.pl":{s:".config-messages{display:none !important}"},"tvprodukt.pl":{s:".config-messages{display:none !important}"},"workstyle.pl":{s:".config-messages{display:none !important}"},"tychy.pl":{s:".configMessages{display:none !important}"},"arx.pl":{s:".configMessages{display:none !important}"},"agrospec.pl":{s:".configMessages{display:none !important}"},"babysensepolska.pl":{s:".configMessages{display:none !important}"},"e-oazakrakow.pl":{s:".configMessages{display:none !important}"},"elabrick24.pl":{s:".configMessages{display:none !important}"},"haczykowo.pl":{s:".configMessages{display:none !important}"},"kopalniasrebra.com":{s:".configMessages{display:none !important}"},"abydos.pl":{s:".configMessages{display:none !important}"},"budowniczy.com.pl":{s:".configMessages{display:none !important}"},"kotrak.com":{s:".configMessages{display:none !important}"},"miodyapis.pl":{s:".configMessages{display:none !important}"},"salvatti.pl":{s:".configMessages{display:none !important}"},"texasclub.pl":{s:".configMessages{display:none !important}"},"mammut.com":{j:"5"},"romeo.com":{j:"5"},"toysrus.ca":{s:".cookie-modal{display:none !important}"},"turn-on.de":{j:"5"},"premierinn.com":{j:"5"},"dwd.de":{j:"5"},"nerdstar.tv":{j:"5"},"dagvandewetenschap.be":{j:"5"},"jankarres.de":{j:"5"},"devowl.io":{j:"5"},"wp-ninjas.de":{j:"5"},"der-windows-papst.de":{j:"5"},"4kfilme.de":{j:"5"},"marketing-zauber.de":{j:"5"},"tvfindr.com":{j:"5"},"drweb.de":{j:"5"},"cruisetricks.de":{j:"5"},"tinder.com":{s:".App > [data-nosnippet],#___gatsby > [data-nosnippet]{display:none !important}"},"stec.es":{j:"5"},"cnnbrasil.com.br":{s:"#pop__gdpr{display:none !important}"},"kudyznudy.cz":{s:".sx-cookies{display:none !important}"},"tp-link.com":{s:"#tp-cookie{display:none !important}"},"musik-produktiv.de":{j:"5"},"musik-produktiv.at":{j:"5"},"musik-produktiv.fr":{j:"5"},"musik-produktiv.ch":{j:"5"},"musik-produktiv.com":{j:"5"},"intersport.hr":{j:"5"},"intersport.si":{j:"5"},"intersport.rs":{j:"5"},"intersport.ba":{j:"5"},"intersport.gr":{j:"5"},"pikapolonica.si":{s:".gdpr-modal-wrapper,.modals-overlay{display:none !important}"},"order.fiveguys.de":{j:"5"},"order.fiveguys.es":{j:"5"},"order.fiveguys.fr":{j:"5"},"order.fiveguys.co.uk":{j:"5"},"asfinag.at":{j:"5"},"afar.com":{s:'.preloaded_lightbox[style*="overflow"]{display:none !important}'},"autohero.com":{j:"5"},"polsatgo.pl":{j:"5"},"ulefone.com":{s:".footermsg{display:none !important}"},"unicajabanco.es":{s:".CC05:not(.cc05-privada) #cookieModalStart{display:none !important}",j:"5"},"detmir.ru":{s:"#app-container footer ~ div{display:none !important}"},"br.de":{s:'#brCookieBanner,#__next > .fixed,#__next [class*="CookieContainer"]{display:none !important}'},"mycinema.pro":{s:"footer + div ~ div[class]{display:none !important}"},"anwb.nl":{s:".TRCO-application,.critical-dialog{display:none !important}"},"chip.com.tr":{s:"efilli-riza{display:none !important}"},"petz.com.br":{s:".policy-warning-banner{display:none !important}"},"scapino.nl":{j:"5"},"unwetterhilfen.de":{s:".App > div > .banner{display:none !important}"},"screenbud.com":{s:".ccWrapper{display:none !important}"},"flightspots.co":{s:"body > .FloatingGroup{display:none !important}"},"wiresoft.com":{s:".Cookie{display:none !important}"},"chipsaway.co.uk":{j:"5"},"glashuette-original.com":{s:"#js_dataNnoticeBtns{display:none !important}"},"svt.se":{s:".svt-cookie-message{display:none !important}"},"le-jackpot-des-medailles-safti.fr":{s:'div[c_data="c_cookie_main"]{display:none !important}'},"robinhood.com":{j:"5"},"elblandkliniken.de":{s:"#Datenschutz{display:none !important}"},"ryobitools.eu":{s:'div[class*="OneTrustOverlay"]{display:none !important}'},"answear.ua":{j:"5"},"mustijamirri.fi":{j:"5"},"unitedutilities.com":{j:"5"},"bagaggio.com.br":{s:".lgpd{display:none !important}"},"lineheart.lu":{s:"#policy_banner,.policy-banner-overlay{display:none !important}"},"deutsches-sportabzeichen.de":{j:"5"},"oekolandbau.de":{j:"5"},"frag.jetzt":{j:"5"},"particify.de":{j:"5"},"creality3dofficial.com":{s:".pub-tip{display:none !important}"},"zig-star.com":{s:".md-consent{display:none !important}"},"kvno.de":{j:"5"},"xetra-gold.com":{j:"5"},"aok.de":{s:'.csm[data-module="cookie-manager-dialog"]{display:none !important}',j:"5"},"aoc.com":{c:"34"},"waitrose.com":{j:"6"},"isawitfirst.com":{s:'.main-cpu[data-pu*="cookies"]{display:none !important}'},"simstime.net":{j:"5"},"chinahighlights.com":{s:".web_cookie{display:none !important}"},"animaute.fr":{j:"5"},"onleihe.com":{j:"5"},"fertighaus.de":{s:".BannerWrapper{display:none !important}"},"sslplus.de":{s:"#ccmRoot{display:none !important}"},"wu.ac.at":{j:"5"},"nytimes.com":{j:"5",s:".free-form-content > .banner__container,.CookieBanner > .banner__container,#alertBannerMount{display:none !important}"},"canto.com":{j:"5"},"prisma.de":{j:"5"},"sportshop.com":{s:"#solar-app ~ div{display:none !important}"},"stoertebeker.com":{s:"#overlay{display:none !important}"},"cv.fr":{s:"#toast-container{display:none !important}"},"dhl.de":{j:"5"},"qastack.fr":{j:"5"},"qastack.it":{j:"5"},"qastack.com.de":{j:"5"},"qa-stack.pl":{j:"5"},"uvex-sports.com":{s:".as__cookie-banner{display:none !important}"},"atlasobscura.com":{j:"5"},"ohmydev.pl":{s:'#__next > [style*="transform"]{display:none !important}'},"porterbuddy.com":{j:"5"},"womodoc.de":{s:"main ~ div{display:none !important}"},"ankerkraut.de":{j:"5"},"dava.dk":{s:"#CookieModal{display:none !important}"},"polsatboxgo.pl":{j:"5"},"tulli.fi":{s:'#root [aria-label="Cookie banner"]{display:none !important}'},"olhardigital.com.br":{s:"#lgpd_optall{display:none !important}"},"liveagent.com":{j:"5"},"hl.co.uk":{j:"5"},"terra.com.br":{s:'.navbar-disclaimer[data-button-url*="cookies"]{display:none !important}'},"terra.bio":{s:'#root [aria-label="cookie consent banner"]{display:none !important}'},"myunidays.com":{j:"5",s:".toast{display:none !important}"},"bibliotheques-specialisees.paris.fr":{s:'div[role="alertdialog"]{display:none !important}'},"paris.fr":{j:"5",s:".paris-cookies-banner{display:none !important}"},"naturgenussfestival.de":{c:"6"},"janto.es":{s:"#Transparente,#widgetCookiesPpal{display:none !important}"},"auditoriodetenerife.com":{s:"#Transparente,#widgetCookiesPpal{display:none !important}"},"lush.com":{j:"5"},"dare2compete.com":{s:".cookies-save{display:none !important}"},"allfinanz.ag":{j:"5"},"dvag.de":{j:"5"},"pccomponentes.com":{s:"main ~ div{display:none !important}"},"montafon.at":{j:"5"},"termeszetjaro.hu":{j:"5"},"teutonavigator.com":{j:"5"},"engadin.ch":{j:"5"},"tourenplaner-rheinland-pfalz.de":{j:"5"},"wanderservice-schwarzwald.de":{j:"5"},"alpenvereinaktiv.com":{j:"5"},"nakedwines.com":{s:"nkd-cookie-banner{display:none !important}"},"hellowatt.fr":{s:"#cookie-modal__container{display:none !important}"},"unchained-horizon.com":{s:"main ~ div{display:none !important}"},"ptvtelecom.com":{j:"5"},"fancentro.com":{s:".MuiContainer-root > div > header ~ div{display:none !important}"},"yoys.no":{s:"#section-cookies{display:none !important}"},"cirklo.io":{s:"snack-bar-container{display:none !important}"},"veikkaus.fi":{j:"5"},"bund.de":{j:"5",s:"#bfr-cookielaw,.datahint{display:none !important}"},"shopfacil.com.br":{s:".modal-lgpd__wrapper{display:none !important}"},"finanzchef24.de":{j:"5"},"wittgas.com":{j:"5"},"malighting.com":{j:"5"},"stahlportal.com":{j:"5"},"tiktok.com":{s:".tiktok-sdk-cookie-banner{display:none !important}"},"sudoku-aktuell.de":{j:"5"},"sourceforge.net":{j:"5"},"bobsys.com":{j:"5"},"badische-zeitung.de":{j:"5"},"bt.com":{s:"#cookiePreference{display:none !important}"},"pcorcloud.com":{j:"5"},"communityfibre.co.uk":{j:"5"},"tweakers.net":{j:"5",s:"#koekjeBar{display:none !important}"},"easyname.at":{j:"5"},"easyname.de":{j:"5"},"easyname.fr":{j:"5"},"easyname.com":{j:"5"},"yougov.co.uk":{s:".vwo-overlay{display:none !important}"},"yougov.com":{s:".vwo-overlay{display:none !important}"},"airbnb.org":{s:'div[data-application="true"] div[data-theme] > div > div > div > section{display:none !important}'},"maniac.de":{j:"5"},"ilmanifesto.it":{s:".panel--bottom.open,.hype--bottom{display:none !important}"},"finanzwende.de":{s:".cn-wrapper{display:none !important}"},"statik.be":{j:"5"},"wooclap.com":{s:'span[aria-labelledby*="cookie-banner"]{display:none !important}'},"lyst.com":{j:"5"},"lyst.co.uk":{j:"5"},"lyst.de":{j:"5"},"lyst.at":{j:"5"},"lyst.fr":{j:"5"},"ima.it":{j:"5"},"phase-6.de":{j:"5"},"goldbet.it":{s:"#drop-cookie,.cookieOC{display:none !important}"},"lcp.fr":{j:"5"},"wizards.com":{s:'#primary-area ~ .vue-portal-target ~ div,#app nav > .fixed,#wizardCookieBanner,div[data-fetch-key*="CookiePrompt"],#__layout footer ~ .vue-portal-target ~ [data-fetch-key]{display:none !important}'},"pciconcursos.com.br":{s:"#lgpd{display:none !important}"},"digitalife.com.mx":{s:"#cookieModal{display:none !important}"},"mandmdirect.de":{s:"#cookieModal{display:none !important}"},"faminino.de":{j:"5"},"domstol.se":{j:"5"},"rhb.ch":{s:"#consent{display:none !important}"},"ing.fr":{s:".ing-CookieManagementNext{display:none !important}"},"ing.jobs":{j:"5"},"oscaro.com":{j:"5"},"bayernlb.de":{s:".lg-backdrop{display:none !important}"},"vulkansauna.de":{j:"5"},"dbvis.com":{s:".uk-notification{display:none !important}"},"aok-erleben.de":{s:'.csm[data-module="cookie-manager-dialog"]{display:none !important}'},"hyser.ua":{s:".privacy-policy{display:none !important}"},"rsts.cz":{s:".CookieBubble{display:none !important}"},"eperearstikeskus.ee":{j:"5"},"aqara.com":{s:"#modal-agreement{display:none !important}"},"volleyball.nrw":{j:"5"},"printer-care.de":{s:".wwwschutz_cmp_showing{display:none !important}"},"mydealz.de":{j:"5"},"dealabs.com":{j:"5"},"hotukdeals.com":{j:"5"},"preisjaeger.at":{j:"5"},"chollometro.com":{j:"5"},"pepper.com":{j:"5"},"pepper.it":{j:"5"},"pepper.pl":{j:"5"},"pelando.com.br":{s:"main ~ div{display:none !important}"},"pirolam.pl":{s:'body > div[style*="100%"]{display:none !important}'},"buildup.group":{j:"5"},"devexpress.com":{s:'#wsMsgWnd[msgid*="cookie-info"]{display:none !important}'},"foursquare.com":{j:"5"},"skd.museum":{j:"5"},"schweinske.de":{j:"5",s:"#usercentrics-root{display:none !important}"},"fortisclothing.co.uk":{c:"25"},"inwork.cz":{s:".fixed-cookie{display:none !important}"},"aukey.com":{s:".fixed-cookie{display:none !important}"},"trendmicro.com":{s:".cookie_verif{display:none !important}"},"vauen.de":{s:"#cookieman-modal{display:none !important}"},"immunspender.com":{s:"#cookieman-modal{display:none !important}"},"easybell.de":{s:"#cookieman-modal{display:none !important}"},"haema.de":{s:"#cookieman-modal{display:none !important}"},"derstandard.de":{j:"5"},"derstandard.at":{j:"5"},"bsh-group.com":{j:"5"},"bosch-home.com":{j:"5"},"bosch-home.fr":{j:"5"},"bosch-home.se":{j:"5"},"bosch-home.nl":{j:"5"},"bosch-home.fi":{j:"5"},"bosch-home.at":{j:"5"},"bosch-home.ro":{j:"5"},"bosch-home.lu":{j:"5"},"bosch-home.es":{j:"5"},"bosch-home.be":{j:"5"},"bosch-home.dk":{j:"5"},"bosch-home.no":{j:"5"},"bosch-home.lt":{j:"5"},"bosch-home.bg":{j:"5"},"bosch-home.pt":{j:"5"},"bosch-home.ee":{j:"5"},"constructa.com":{j:"5"},"balay.es":{j:"5"},"home-connect.com":{j:"5"},"reebok.com":{j:"5"},"reebok.co.uk":{j:"5"},"reebok.it":{j:"5"},"reebok.de":{j:"5"},"reebok.nl":{j:"5"},"reebok.fr":{j:"5"},"reebok.be":{j:"5"},"reebok.pl":{j:"5"},"reebok.se":{j:"5"},"reebok.at":{j:"5"},"reebok.es":{j:"5"},"reebok.cz":{j:"5"},"reebok.com.br":{j:"5"},"adidas.co.uk":{j:"5"},"adidas.de":{j:"5"},"adidas.it":{j:"5"},"adidas.fr":{j:"5"},"adidas.es":{j:"5"},"adidas.se":{j:"5"},"adidas.nl":{j:"5"},"adidas.pl":{j:"5"},"adidas.sk":{j:"5"},"adidas.at":{j:"5"},"adidas.pt":{j:"5"},"adidas.dk":{j:"5"},"adidas.no":{j:"5"},"adidas.ie":{j:"5"},"adidas.ru":{j:"5"},"adidas.be":{j:"5"},"adidas.com":{j:"5"},"adidas.fi":{j:"5"},"adidas.ca":{j:"5"},"adidas.cz":{j:"5"},"koupitvstupenku.cz":{s:"#sprivacy{display:none !important}"},"domaintools.com":{s:".cookie-modal{display:none !important}"},"findamasters.com":{j:"5"},"mirells.se":{j:"5"},"dbschenker.com":{j:"5"},"i-motion.de":{j:"5"},"migros.com.tr":{s:"fe-product-cookie-indicator{display:none !important}"},"codeeurope.pl":{j:"5"},"nrc.nl":{s:".user-confirmation-screen{display:none !important}"},"oe24.at":{j:"5"},"clark.de":{j:"5"},"sbk.org":{j:"5"},"ottobock.de":{s:"#ottobock-usercentrics{display:none !important}"},"sport.pl":{j:"5"},"today.ua":{s:".politic_confidel{display:none !important}"},"home24outlet.de":{s:"main ~ div{display:none !important}"},"tutorela.com":{s:".snackbar{display:none !important}"},"pricerunner.dk":{j:"5"},"pricerunner.se":{j:"5"},"pricerunner.com":{j:"5"},"dfmg.de":{s:'div[id^="ro_cookie"]{display:none !important}'},"sellpy.de":{j:"5"},"sellpy.se":{j:"5"},"sellpy.com":{j:"5"},"thomas-krenn.com":{j:"5"},"world4you.com":{s:"#xtxNavigationOffCookiePolicy{display:none !important}"},"shopee.pl":{j:"5"},"avcesar.com":{j:"5"},"livelo.com.br":{s:".notifi{display:none !important}"},"foerch.de":{s:".anonymous-consent-banner{display:none !important}"},"home.barclays":{c:"34"},"italotreno.it":{s:"#cookie-row{display:none !important}"},"ledlenser.ru":{s:".alerting{display:none !important}"},"canva.com":{j:"5"},"stern.de":{j:"5"},"kevag-telekom.de":{j:"5"},"hotroxuk.com":{s:".dot_cookies{display:none !important}"},"quantifycrypto.com":{j:"5"},"packrafting-store.de":{s:"#basharModal{display:none !important}"},"gloria-palast.de":{j:"5"},"ft.com":{j:"5"},"red-gate.com":{c:"41"},"laenderbahn.com":{s:".cc-overlay{display:none !important}"},"dobrzemieszkaj.pl":{s:".rodo{display:none !important}"},"webfail.com":{j:"5"},"modepark.de":{j:"5"},"extract.pics":{j:"5"},"hotcleaner.com":{s:"footer + div + noscript ~ div[class],footer + noscript ~ div[class]{display:none !important}"},"iol.im":{j:"5"},"alko-garden.de":{s:"#divDisabledBackground{display:none !important}"},"alko-garden.hu":{s:"#divDisabledBackground{display:none !important}"},"alko-garden.pl":{s:"#divDisabledBackground{display:none !important}"},"alko-garden.it":{s:"#divDisabledBackground{display:none !important}"},"frp.no":{j:"5",s:".gdpr__btn{display:none !important}"},"ihk-krefeld.de":{s:"#overlay{display:none !important}"},"notaire.be":{j:"5"},"jooble.org":{s:'#root div[data-test-name="_termsOfServices"]{display:none !important}'},"resistance-mondiale.com":{j:"5"},"musti.no":{j:"5"},"wasakredit.se":{j:"5"},"kikkoman.de":{s:".kik-cookiebanner{display:none !important}"},"lojadomecanico.com.br":{s:".box-termo-lgpd{display:none !important}"},"wells.pt":{s:".modal-backdrop,.veil{display:none !important}"},"silmaasema.fi":{s:".modal-backdrop,.veil{display:none !important}"},"icelandair.com":{s:'#root > [class*="assets_container"]{display:none !important}'},"occrp.org":{s:".occrp-cookie-overlay,.cookie{display:none !important}"},"linztourismus.at":{j:"5"},"cinemotion-kino.de":{s:"#cookie-layer{display:none !important}"},"sex.com":{j:"5"},"handyhuellen.de":{j:"5"},"floragard.de":{j:"5"},"2ip.ru":{j:"5"},"arabicpost.net":{s:".cookie-modal{display:none !important}"},"cualesmiip.com":{j:"5"},"powys.gov.uk":{s:"#cookie-consent-prompt{display:none !important}"},"sunderland.gov.uk":{j:"5"},"ozeaneum.de":{j:"5"},"sellmylivestock.com":{s:"#app > .fixed{display:none !important}"},"storececotec.com":{j:"5"},"beate-protze-immobilien.de":{s:".wrap__cookie{display:none !important}"},"routex.com":{j:"5"},"samsonite.ch":{j:"5"},"samsonite.de":{j:"5"},"samsonite.fr":{j:"5"},"samsonite.nl":{j:"5"},"samsonite.cz":{j:"5"},"samsonite.it":{j:"5"},"samsonite.es":{j:"5"},"samsonite.at":{j:"5"},"samsonite.pl":{j:"5"},"samsonite.be":{j:"5"},"samsonite.co.uk":{j:"5"},"samsonite.ro":{c:"34"},"restore.co.uk":{s:".restorealertBar{display:none !important}"},"pokemoncenter.com":{s:"footer > div ~ div{display:none !important}"},"pnp.co.za":{s:".policiesPopup{display:none !important}"},"mmo-sankar.de":{j:"5"},"opositatest.com":{s:".otcn{display:none !important}"},"sparda.de":{j:"5"},"sparda-n.de":{j:"5"},"sparda-bw.de":{j:"5"},"sparda-hessen.de":{j:"5"},"rp-online.de":{j:"5"},"tonies.com":{c:"2"},"depop.com":{j:"5"},"autotrader.com":{s:"#mountNode > .fixed-bottom{display:none !important}"},"noobguides.de":{j:"5"},"ae.com":{j:"5"},"artigercek.com":{s:".user-consent{display:none !important}"},"get-in-engineering.de":{j:"5"},"theathletic.co.uk":{s:'div[class*="StickyBottomBanner"]{display:none !important}'},"primevideo.com":{s:'.DVWebNode[class*="wrapper"][class*="cookie"]{display:none !important}'},"otcmarkets.com":{s:"#userAgreementBanner{display:none !important}"},"zutobi.com":{s:'div[class*="ModalCookies"]{display:none !important}'},"leeway.tech":{j:"5"},"santediscount.com":{j:"5"},"regionalimmobilien24.de":{j:"5"},"amazon-affiliate.eu":{s:".cookie-consent{display:none !important}"},"polarstern-energie.de":{j:"5"},"nordnet.dk":{s:".cookie-consent{display:none !important}"},"certificat-covid.gov.ro":{s:".bottom-banner{display:none !important}"},"aviva.fr":{j:"5",s:".ccb-sticky{display:none !important}"},"salto.fr":{j:"5"},"56aktuell.de":{j:"5"},"reisetopia.de":{j:"5"},"radiomuseum.org":{j:"5"},"vergoelst.de":{j:"5"},"clipchamp.com":{s:"main + div ~ div{display:none !important}"},"lichtblick.de":{s:"#uc_layer{display:none !important}"},"promobit.com.br":{s:"#__next > div:last-child{display:none !important}"},"sbb-deutschland.de":{j:"5"},"volimzmenu.cz":{c:"34"},"petlove.com.br":{s:".card-bottom{display:none !important}"},"rockmods.net":{s:"#cookies-iki{display:none !important}"},"foussier.fr":{j:"5"},"farmaciasdirect.com":{s:".fd-cookies{display:none !important}"},"emmi-kaltbach.com":{j:"5"},"posti.fi":{s:"#consent-popup{display:none !important}"},"e-volt.es":{s:'div[c_data="c_cookie_main"]{display:none !important}'},"tresorit.com":{s:"main ~ aside,sticky-notification{display:none !important}"},"bandaancha.eu":{s:".euCk{display:none !important}"},"hertz.ca":{s:'div[class*="PrivacyPolicyBanner"]{display:none !important}'},"sagepub.com":{s:'header [role="alert"]{display:none !important}'},"stromnetz.berlin":{j:"5"},"edukatico.org":{j:"5"},"theartnewspaper.com":{s:"#__next > div > .fixed{display:none !important}"},"coinbase.com":{s:'#root > div[class*="Layout"] ~ div[class^="sc"]:last-child,#page_content > div + div:last-child,div[class*="ContentHub__FooterWrapper"] ~ div:last-child,#root > div[class^="Flex"] > div > [data-testid="step-loaded-active"] > [class^="sc"]:last-child{display:none !important}'},"mitid.dk":{j:"5"},"yopmail.com":{j:"5"},"people.cn":{s:"#shengmingTip{display:none !important}"},"cinemaxx.de":{j:"5"},"bipandgo.com":{s:".ucm_wrapper{display:none !important}"},"uktv.co.uk":{j:"5"},"benq.eu":{j:"5",s:"#cookie-fullscreen{display:none !important}"},"plusmobile.fr":{c:"53"},"weddyplace.com":{j:"5"},"caimmo.com":{j:"5"},"smashurandompicker.web.app":{j:"5"},"svd.se":{s:"#schibsted-data-controller-sticky{display:none !important}"},"aftenposten.no":{s:"#data-controller-sticky{display:none !important}"},"bt.no":{s:"#data-controller-sticky{display:none !important}"},"volkswagen-newsroom.com":{s:'body[style*="hidden"]{overflow:visible !important}'},"inwx.com":{j:"5"},"inwx.de":{j:"5"},"inwx.at":{j:"5"},"traderepublic.com":{s:".consentCard{display:none !important}"},"europa.eu":{s:"#edp-cookies-banner,.customCookie{display:none !important}"},"dlr.de":{s:".ccm-root{display:none !important}"},"grile-rezidentiat.ro":{j:"5"},"tfwm.org.uk":{s:".wmnds-cookies-banner{display:none !important}"},"foodwatch.org":{s:".cn-banner{display:none !important}"},"amazon.com":{j:"5"},"newsworthy.se":{s:".Snack{display:none !important}"},"mobrog.com":{j:"5"},"metro.ca":{c:"41"},"metro.pe":{j:"5"},"avtomobilizem.com":{s:".c-notice{display:none !important}"},"actual.at":{s:".c-notice{display:none !important}"},"xing.com":{j:"5"},"techopital.com":{j:"5"},"ticsante.com":{j:"5"},"sandro-paris.com":{j:"5"},"feuvert.fr":{j:"5"},"wifi-ooe.at":{j:"5"},"wifiwien.at":{j:"5"},"wifi.at":{j:"5"},"atlatszo.hu":{s:"#the_popup{display:none !important}"},"cm.games":{c:"3"},"mtvuutiset.fi":{j:"5"},"treasure.cloud":{j:"5"},"liftango.com":{s:".fs-cc-symbol{display:none !important}"},"specscart.co.uk":{c:"20"},"tommy.com":{j:"5",c:"20"},"joom.com":{s:'div[class*="footer"] ~ div[class*="container"]{display:none !important}'},"consumentenbond.nl":{s:'.w-full[data-test="consent-banner"]{display:none !important}'},"galaxus.de":{s:"#__next > div[aria-hidden]:not([data-layout-container]){display:none !important}"},"galaxus.at":{s:"#__next > div[aria-hidden]:not([data-layout-container]){display:none !important}"},"video.corriere.it":{j:"5"},"gouv.fr":{s:'ensap-cookies,#cookieLab,header[class^="ants"] + div > div > div + div:last-child,app-cookie,app-core ~ [class*="gdpr_consent"],.eu-popup,dd1pnds-ng-bandeau{display:none !important}'},"moncompteformation.gouv.fr":{j:"5"},"curiositystream.com":{s:"main ~ div{display:none !important}"},"brewdog.com":{s:"#segment-consent-banner{display:none !important}"},"fupro.de":{c:"77"},"host-unlimited.de":{j:"5"},"fujifilm.com":{s:".m-cookie-confirm{display:none !important}"},"mezoko.com":{c:"3"},"gibgas.de":{j:"5"},"iebschool.com":{s:".content-bottom-drawer{display:none !important}"},"deichmann.com":{j:"5"},"smule.com":{j:"5"},"mydpd.at":{j:"5"},"2ip.io":{j:"5"},"cellbes.no":{j:"5"},"cellbes.cz":{j:"5"},"cellbes.dk":{j:"5"},"cellbes.ee":{j:"5"},"cellbes.fi":{j:"5"},"cellbes.lv":{j:"5"},"cellbes.pl":{j:"5"},"cellbes.sk":{j:"5"},"cellbes.se":{j:"5"},"mondverlauf.de":{s:"#cc_div{display:none !important}"},"sonnenverlauf.de":{s:"#cc_div{display:none !important}"},"etipolam.com.pl":{c:"53"},"ivolta.pl":{j:"5"},"kickbooster.me":{s:".kb__cookie-consent{display:none !important}"},"thisinterestsme.com":{s:"#ww-blackout{display:none !important}"},"aerztezeitung.de":{j:"5"},"seb.lt":{j:"5"},"seb.ee":{j:"5"},"pr0gramm.com":{j:"5"},"pensionikeskus.ee":{s:"#gdpr-confirm{display:none !important}"},"nasdaqbaltic.com":{s:"#gdpr-confirm{display:none !important}"},"lalettrea.fr":{j:"5"},"africaintelligence.fr":{j:"5"},"nintendo.com":{s:".o_p-membership-cookie-law-message{display:none !important}",j:"5"},"nintendo.ch":{j:"5"},"nintendo.de":{j:"5"},"nintendo.fr":{j:"5"},"nintendo.at":{j:"5"},"nintendo.nl":{j:"5"},"nintendo.es":{j:"5"},"nintendo.pt":{j:"5"},"nintendo.it":{j:"5"},"nintendo.ru":{j:"5"},"nintendo.co.uk":{j:"5"},"nintendo.be":{j:"5"},"nintendo.co.za":{j:"5"},"fromsmash.com":{s:".cgu-cookie-overlay-shadow{display:none !important}"},"schraubenkasten.de":{s:"#CookiePlus,.modal-backdrop{display:none !important}"},"destillatio.eu":{s:"#CookiePlus,.modal-backdrop{display:none !important}"},"omg.de":{s:"#CookiePlus,.modal-backdrop{display:none !important}"},"pro-alarm.nl":{s:".mgz-flex-position-bottom-center{display:none !important}"},"cpanel.net":{s:".consent-container{display:none !important}"},"portainer.io":{j:"5"},"hollisterco.com":{s:'.flash-message[data-flash-message-group-id*="cookie"]{display:none !important}'},"xn--bafa-frderung-nmb.de":{j:"5",s:".CookieEButton{display:none !important}"},"brack.ch":{s:"#b2c-consent{display:none !important}"},"enpara.com":{s:".enpara-web-cookie{display:none !important}"},"copenhagenstudios.com":{s:"#cookie-layer{display:none !important}"},"hevert.com":{s:"#cookie-options{display:none !important}"},"partech.nl":{s:".cookies-gradient{display:none !important}"},"contabilizei.com.br":{s:".modal-cookie{display:none !important}"},"xn--80aesfpebagmfblc0a.xn--p1ai":{s:".cv-cookie-banner__inner{display:none !important}"},"mudes.org.br":{c:"25"},"baufi24.de":{s:"#modal-cookies{display:none !important}"},"pornpics.com":{s:"#cookie-contract{display:none !important}"},"dnbeiendom.no":{j:"5"},"ntcompatible.com":{s:'script[src*="consent"] + .alert{display:none !important}'},"eportugal.gov.pt":{s:"#section-cookies{display:none !important}"},"arbeitsagentur.de":{j:"5"},"molcesko.cz":{j:"5"},"slovnaft.sk":{j:"5"},"doppelherz.de":{j:"5"},"doppelherz.com":{j:"5"},"doppelherz.pl":{j:"5"},"hey.car":{j:"5"},"gold.de":{j:"5"},"goldpreis.de":{j:"5"},"formel-sammlung.de":{j:"5"},"silber.de":{j:"5"},"materialeducativomk.com":{j:"5"},"visitmalta.com":{j:"5"},"pure.app":{s:"#__next main ~ div{display:none !important}"},"cbsnews.com":{j:"5"},"cbslocal.com":{j:"5"},"dominospizza.pl":{j:"5"},"bbvaapimarket.com":{j:"5"},"boc24.de":{s:".cookie-layer{display:none !important}"},"bkkgs.de":{s:".cookie-layer{display:none !important}"},"bicycles.de":{s:".cookie-layer{display:none !important}"},"rockstargames.com":{s:"main ~ footer ~ div{display:none !important}"},"livemaster.ru":{s:".cookieconsent-ru{display:none !important}"},"adrecord.com":{j:"5"},"rugbyworldcup.com":{j:"5"},"world.rugby":{j:"5"},"premierleague.com":{j:"5"},"mp.br":{s:"#termo-uso{display:none !important}"},"burton.com":{j:"5"},"audiovision.de":{j:"5"},"basic-tutorials.de":{s:'body > div[style*="fixed"]{display:none !important}'},"hotcoursesabroad.com":{s:"#ckieOvrlayDiv{display:none !important}"},"markt-lichtenau.de":{s:"#ck-overlay{display:none !important}"},"energijaplus.si":{s:"#ck-overlay{display:none !important}"},"telia.lt":{j:"5"},"telia.se":{j:"5"},"mobile.de":{s:"#mde-consent-modal-container{display:none !important}"},"metapop.com":{j:"5"},"douglas.de":{j:"5"},"douglas.at":{j:"5"},"douglas.ch":{j:"5"},"douglas.pl":{j:"5"},"douglas.nl":{j:"5"},"douglas.be":{j:"5"},"concursolutions.com":{j:"5"},"tripit.com":{j:"5"},"proximus.be":{j:"5"},"forbes.com":{j:"5"},"fortune.com":{j:"5"},"formula1.com":{j:"5"},"rhein-kreis-neuss.de":{s:".rkn-row-footer-cookie-notice{display:none !important}"},"smallpdf.com":{j:"5"},"clickbus.com.br":{s:"#footer-policy{display:none !important}"},"linkaband.com":{s:"app-cookie-modal{display:none !important}"},"blokas.io":{s:"#__layout > div .bg-success{display:none !important}"},"cognex.com":{j:"5"},"vw-shop-zubehoer.de":{j:"5"},"audi-ingolstadt-shop.de":{j:"5"},"lth.se":{s:".alert.fixed-bottom{display:none !important}"},"hotter.com":{s:".enhanced-cookies__modal{display:none !important}"},"lci.fr":{j:"5"},"centauro.com.br":{j:"5"},"rgs.ru":{s:".cookie,#rgs-main-context-bar{display:none !important}"},"acogo.pl":{c:"25"},"kyoceradocumentsolutions.eu":{j:"5"},"kyoceradocumentsolutions.de":{j:"5"},"kyoceradocumentsolutions.ru":{j:"5"},"kyoceradocumentsolutions.ch":{j:"5"},"kyoceradocumentsolutions.fr":{j:"5"},"kyoceradocumentsolutions.it":{j:"5"},"kyoceradocumentsolutions.co.uk":{j:"5"},"kyoceradocumentsolutions.us":{j:"5"},"kyoceradocumentsolutions.es":{j:"5"},"focus-entmt.com":{s:"#app > nav + div{display:none !important}"},"max-academy.de":{j:"5"},"apksmods.com":{j:"5"},"bolagsverket.se":{c:"34"},"martha-maria.de":{s:"mama-cookie-banner{display:none !important}"},"futurzwei.org":{j:"5"},"gitbook.io":{j:"5"},"autoglass.co.uk":{j:"5"},"c-klasse-forum.de":{s:"#consentBoxWrapper{display:none !important}"},"dekkmann.no":{j:"5"},"journalist.de":{s:"#cc{display:none !important}"},"ecouter-en-direct.com":{s:"#cc{display:none !important}"},"radioemu.com":{s:"#cc{display:none !important}"},"neuwagenduft.de":{s:"#cc{display:none !important}"},"languagelab.nl":{s:"#cc{display:none !important}"},"camerapricebuster.co.uk":{s:"#cc{display:none !important}"},"djv.de":{s:"#cc{display:none !important}"},"bjr.de":{s:"#cc{display:none !important}"},"bundesanzeiger-verlag.de":{s:"#cc{display:none !important}"},"fairtrade.at":{s:"#cc{display:none !important}"},"hey.bayern":{s:"#cc{display:none !important}"},"actu-environnement.com":{s:"#cookies_preferences{display:none !important}"},"perekrestok.ru":{s:".cookie-content{display:none !important}"},"ariaspa.it":{s:"#cookieAria{display:none !important}"},"eplaque.fr":{s:"#rgpd{display:none !important}"},"openreach.com":{j:"5"},"jobs.ch":{j:"5"},"online.sberbank.ru":{s:"footer > div > div + div{display:none !important}"},"sberbank.si":{j:"5"},"daswetter.com":{j:"5"},"daswetter.at":{j:"5"},"radio1.ch":{c:"3"},"jeremylikness.com":{j:"5"},"stooq.pl":{j:"5"},"stooq.com":{j:"5"},"etonline.com":{j:"5"},"heise.de":{j:"5"},"leyuzu.nl":{s:"main ~ div{display:none !important}"},"sportoutlet.no":{s:".main-layout > .fixed{display:none !important}"},"wirtualnemedia.pl":{j:"5"},"avaloniaui.net":{j:"5"},"kinderaerzte-moelln.de":{s:".wrapper-confirmation-privacy{display:none !important}"},"ouraring.com":{s:".tailwind > .fixed{display:none !important}"},"bike24.de":{j:"5"},"bike24.at":{j:"5"},"bike24.com":{j:"5"},"tumblr.com":{j:"5"},"iltalehti.fi":{j:"5"},"autotalli.com":{j:"5"},"tekniikkatalous.fi":{j:"5"},"mediuutiset.fi":{j:"5"},"e-kontakti.fi":{j:"5"},"tivi.fi":{j:"5"},"mikrobitti.fi":{j:"5"},"uusisuomi.fi":{j:"5"},"kauppalehti.fi":{j:"5"},"deepl.com":{s:"#dl_cookieBanner{display:none !important}"},"teknikkdeler.no":{c:"34"},"gymgrossisten.com":{s:".overlay-banner{display:none !important}"},"marc-o-polo.com":{j:"5"},"sparda-west.de":{j:"5"},"e-rolety.eu":{c:"3"},"micronfrance.fr":{j:"5"},"babil.com":{s:".bbl-cookie-consent{display:none !important}"},"ecoplus.at":{j:"5"},"bobshop.com":{s:".ccm-root{display:none !important}"},"frisco.pl":{j:"5"},"atresplayer.com":{j:"5"},"bayern.de":{s:"#cookie,#matomoCookieNotification{display:none !important}",j:"5"},"avg.com":{s:"#bottomBar #gdpr{display:none !important}"},"mediaexpert.pl":{s:".layout > .wrapper{display:none !important}"},"smartpost.ee":{j:"5"},"auszug.at":{j:"5"},"mozio.com":{s:"#container > .desktop ~ div{display:none !important}"},"svenskaspel.se":{j:"6"},"lokaleportalen.dk":{j:"5"},"bostadsdeal.se":{j:"5"},"cargoboard.com":{s:"body > .fixed-bottom.bg-gray{display:none !important}"},"pvs-studio.com":{s:".personal-data-confirm{display:none !important}"},"shop4nl.com":{j:"5"},"365games.co.uk":{j:"5"},"passeidireto.com":{s:"pd-cookie-banner{display:none !important}"},"verema.com":{c:"2"},"cfainstitute.org":{s:"#privacyWarning{display:none !important}"},"excellent-hemd.de":{j:"5",s:'.fixed-bottom .btn[onclick*="cookieModal"]{display:none !important}'},"estrategiaconcursos.com.br":{s:"#getsitecontrol{display:none !important}"},"libelium.com":{j:"5"},"euroimmun.de":{j:"5"},"corona-reframed.de":{j:"5"},"action.com":{s:"body > .section:first-of-type{display:none !important}"},"revolut.com":{s:'div[class*="Modal__OverlayBox"][aria-label*="cookie"],div[class*="Modal__OverlayBox"][aria-label*="Cookie"],div[role="dialog"][aria-label="Cookie preferences"]{display:none !important}'},"myinvestor.es":{c:"34"},"labuenavidalg.es":{s:"#CookiesLayer{display:none !important}"},"otpbank.ro":{j:"5"},"e-shelter.de":{j:"5"},"anadibank.com":{j:"5"},"bitbrain.com":{j:"5"},"motorflash.com":{s:".cookiesNew{display:none !important}"},"cornelsen.de":{j:"5"},"lawinsider.com":{s:"#header ~ .light-blue-bordered-card{display:none !important}"},"strawpoll.de":{s:"#consent-overlay{display:none !important}"},"mitsubishi-motors.ca":{s:".cookiemodal{display:none !important}"},"eika.no":{s:".no-eika-cookieconsent{display:none !important}"},"elbphilharmonie.de":{s:"#consent-modal{display:none !important}"},"searchforsites.co.uk":{s:"#cookieConsent,#modal-overlay{display:none !important}"},"flaschenpost.de":{j:"5"},"fvg.it":{s:"#cookieModal{display:none !important}"},"tsuche.com":{s:"#c-c{display:none !important}"},"lionsroar.com":{c:"25"},"schuurman-schoenen.nl":{j:"5"},"sazka.cz":{s:".consent-bar{display:none !important}"},"burgerking.fr":{s:"main > div:last-child{display:none !important}"},"burgerking.co.uk":{s:'#main ~ div[class*="Container"]{display:none !important}'},"0800repair.com":{s:"#wp-notification{display:none !important}"},"ecologi.com":{s:"#modal-root ~ div{display:none !important}"},"steambuy.com":{s:"#sb-privacy-policy{display:none !important}"},"dbk.de":{s:"#cc{display:none !important}"},"schlauerlernen.de":{s:"#cookiereminder{display:none !important}"},"postfinance.ch":{j:"5"},"mcc.live":{c:"34"},"gettr.com":{j:"3"},"videogameschronicle.com":{j:"5"},"aktin.cz":{j:"5"},"supermiro.lu":{s:"#lightbox-gdpr{display:none !important}"},"supermiro.com":{s:"#lightbox-gdpr{display:none !important}"},"nsinternational.com":{j:"5"},"serasa.com.br":{s:'div[aria-labelledby="m-acc-title"]{display:none !important}'},"vtwonen.nl":{s:".modal.tracking-consent-popup{display:none !important}"},"bv-activebanking.de":{j:"5"},"inet.se":{s:".top-nav-bar-filler ~ .container ~ div{display:none !important}"},"whatsapp.com":{j:"5"},"linuxserver.io":{j:"5"},"italki.com":{s:'div[class*="cookie_root"]{display:none !important}'},"ogulo.com":{j:"5"},"objektiv-berater.de":{j:"5"},"dr-gumpert.de":{s:"#cookie_modal_container{display:none !important}"},"lego.com":{j:"5",s:'div[class*="CookieDisclaimer"],#footer ~ [class*="emotion-cache"],#prompt-footer{display:none !important}'},"ahaan.co.uk":{s:".MuiSnackbar-root{display:none !important}"},"rlxos.dev":{j:"5"},"bascom-kameras.de":{j:"5"},"le-livre.fr":{s:"#showcookie{display:none !important}"},"radioleipzig.de":{s:".radioplayer-anno{display:none !important}"},"leoschilbach.de":{s:"main ~ div{display:none !important}"},"argeles-sur-mer.com":{s:".cookies-global{display:none !important}"},"modivo.gr":{j:"5"},"pharmasimple.com":{s:"#pharmabiscuit-popin{display:none !important}"},"ibisahome.com":{c:"2"},"oxen.io":{j:"5"},"investify.com":{j:"5"},"skuola.net":{j:"5"},"ubereats.com":{j:"5"},"century21.fr":{j:"5"},"gunfinder.de":{j:"5"},"westend61.de":{s:"#cookie_Modal{display:none !important}"},"aliexpress.ru":{s:'#__aer_root__ > div > [class*="styles_footer"] ~ div,p[class*="PrivacyPolicyBanner"],#ae-ru-privacy-banner{display:none !important}'},"aliexpress.com":{s:'.ui-mask,.gdpr-dialog-class,#j-aliexpress-notice,#container-for-smart-banner ~ div:not([id]):not([class*=" "]):not([style]):nth-last-child(2),#voyager-gdpr,.site-notice-header{display:none !important}'},"aromes-et-liquides.fr":{s:"#rgpdcookie{display:none !important}"},"just-eat.no":{s:'div[data-qa="privacy-settings"]{display:none !important}'},"just-eat.fr":{s:'div[data-qa="privacy-settings"]{display:none !important}'},"lieferando.at":{s:'div[data-qa="privacy-settings"]{display:none !important}'},"boomin.com":{s:'div[data-testid*="cookie-modal"]{display:none !important}'},"worldofsweets.de":{j:"5"},"panasonicproclub.com":{s:"#over{display:none !important}"},"kontist.com":{s:'#__next > .fixed[class*="bg"],#__next > .fixed[class*="bottom"]{display:none !important}'},"medpets.fr":{s:'.tw-fixed[ref="cookie-modal"]{display:none !important}'},"tavex.dk":{j:"5"},"tavex.pl":{j:"5"},"pzu.pl":{j:"5"},"limaeasy.com":{s:'.rstbox.eb-custom.eb-bottom-left[data-options*="EngageBox"]{display:none !important}'},"pikolinos.com":{j:"5"},"kolejeslaskie.com":{s:"#cookie-law{display:none !important}"},"sncf.com":{s:"#cookie-law{display:none !important}",j:"5"},"extrabux.com":{s:".ccpabar{display:none !important}"},"timma.fi":{s:"#alert-root{display:none !important}"},"allegro.pl":{j:"5"},"winamp.com":{c:"34"},"beatstars.com":{s:"mp-cookies-snackbar{display:none !important}"},"solicitor.info":{s:"#msgbg{display:none !important}"},"fintraffic.fi":{j:"5"},"sl.se":{s:'body > div[class*="header"] > div > div:first-child:not([class]){display:none !important}'},"headspace.com":{s:"#gatsby-focus-wrapper > div:last-child{display:none !important}"},"airfleets.net":{s:"#blur{display:none !important}"},"redis.com":{s:"#gdpr-modal{display:none !important}"},"bdz.bg":{j:"5"},"earlybird.delivery":{s:".policy-notice{display:none !important}"},"conqblade.com":{s:".gw-cookies{display:none !important}"},"dekamarkt.nl":{c:"20"},"psy.pl":{s:"#infoPopup,.modal-backdrop{display:none !important}"},"tldallas.com":{c:"2",j:"5"},"kupplung.de":{j:"5"},"keldoc.com":{j:"5"},"food-detektiv.de":{s:".cookie-modal{display:none !important}"},"mekongpackraft.com":{c:"25"},"gritija.lt":{s:".gdprModal{display:none !important}"},"mkb.hu":{j:"5"},"bnpparibas.com":{s:"cts-disclaimer-cookies{display:none !important}"},"eurogarages.com":{s:"#cp-overlay{display:none !important}"},"bodohavn.no":{s:".privacy{display:none !important}"},"catho.com.br":{j:"5"},"pyroweb.de":{j:"5"},"cire.pl":{j:"6"},"familieretshuset.dk":{j:"5"},"ouedkniss.com":{j:"5"},"onair-appbuilder.com":{j:"5"},"kisailu.net":{j:"5"},"ittweak.de":{j:"5"},"ditzozorg.nl":{j:"5"},"wgv.de":{j:"5"},"nordicnest.com":{s:"#container > footer ~ div{display:none !important}"},"nordicnest.es":{s:"#container > footer ~ div{display:none !important}"},"nordicnest.de":{s:"#container > footer ~ div{display:none !important}"},"nordicnest.dk":{s:"#container > footer ~ div{display:none !important}"},"nordicnest.fi":{s:"#container > footer ~ div{display:none !important}"},"nordicnest.fr":{s:"#container > footer ~ div{display:none !important}"},"nordicnest.kr":{s:"#container > footer ~ div{display:none !important}"},"nordicnest.nl":{s:"#container > footer ~ div{display:none !important}"},"nordicnest.no":{s:"#container > footer ~ div{display:none !important}"},"nordicnest.se":{s:"#container > footer ~ div{display:none !important}"},"magazineluiza.com.br":{s:'section[style="grid-area:footer"] > [width="100%"]{display:none !important}'},"studocu.com":{s:"#main-wrapper ~ div:not([id]):not([class]){display:none !important}"},"caseking.de":{j:"5"},"augen-lasern-vergleich.de":{j:"5"},"inrs.fr":{j:"5"},"disclose.ngo":{c:"3"},"infobox.ru":{s:".ibx-coockie-agree{display:none !important}"},"oi.com.br":{s:'.info-bar,#root [class*="BannertContainer"]{display:none !important}'},"etf1.de":{j:"5"},"losteria.de":{j:"5"},"audiototaal.com":{c:"3"},"signalshares.com":{j:"5"},"universidadeuropea.com":{s:'#modal_footer[class*="cookies"]{display:none !important}'},"mcdonalds.at":{j:"5"},"membersuite.com":{j:"5"},"viva.gr":{j:"5"},"wesendit.com":{j:"5"},"grander.com":{j:"5"},"messmer.de":{j:"5"},"portaleds.com":{s:"body > .cke{display:none !important}"},"googlewatchblog.de":{j:"5"},"100giornidaleoni.it":{j:"5"},"grab.com":{s:"#gr-cookie-notice-banner{display:none !important}"},"nocowanie.pl":{s:"#site-navigation ~ div{display:none !important}"},"dresden-elbland.de":{j:"5"},"teliacarrier.com":{s:"#modal-cookies-general{display:none !important}"},"lokinn.com":{s:"#toast-container{display:none !important}"},"kfcvisit.com":{s:"#toast-container{display:none !important}"},"nuri.com":{j:"5"},"app.nuri.com":{s:"#root > div:not([style]):last-child{display:none !important}"},"erc-ingolstadt.de":{j:"5"},"livevacancies.co.uk":{j:"5"},"dr-braunger.de":{s:".tx-dm-cookies{display:none !important}"},"hunqz.com":{j:"5"},"nano.org":{c:"41"},"liste-finanzamt.de":{s:"#dsgvo{display:none !important}"},"fairgarage.com":{s:"#dsgvo{display:none !important}"},"koegel-touristik.de":{s:"#dsgvo,#dsgvo_bglayer{display:none !important}"},"workplace.com":{j:"5"},"topfarmacia.it":{s:".gdprModal{display:none !important}"},"cotswoldoutdoor.com":{j:"5"},"cotswoldoutdoor.ie":{j:"5"},"asadventure.com":{j:"5"},"asadventure.fr":{j:"5"},"asadventure.nl":{j:"5"},"asadventure.lu":{j:"5"},"bever.nl":{j:"5"},"runnersneed.com":{j:"5"},"snowandrock.com":{j:"5"},"ntng.gr":{s:".prvmodal{display:none !important}"},"intezer.com":{s:".site-notification-message{display:none !important}"},"mujionline.eu":{s:"#cokbar{display:none !important}"},"napster.com":{j:"5"},"elearningindustry.com":{j:"5"},"huawei.com":{s:".huawei-convergent-cookie,#cookieTipOut,.hwid-bannerBox-portal,.privacy-dialog.is-show,.browsehappy.ReadPolicy,.huawei-app-cookie,.huawei-bootom-cookie{display:none !important}"},"onebrandssweepstakes.com":{s:".GDPR{display:none !important}"},"elring.com":{j:"5"},"elring.ae":{j:"5"},"elring.cn":{j:"5"},"elring.com.tr":{j:"5"},"elring.de":{j:"5"},"elring.fr":{j:"5"},"elring.it":{j:"5"},"elring.pl":{j:"5"},"elring.pt":{j:"5"},"elring.ru":{j:"5"},"stemi.education":{s:'.app > [class*="Notification"]{display:none !important}'},"itv.com":{s:'.cp_cookie-dialog,.app-modals__overlay,.modal--cookie,.cp_app-wrapper > .cp_dialog,.site__alert[data-qa="site.alert"],.cp_app__alert-content,#itv-glob-cookie-policy-holder{display:none !important}'},"sevdesk.de":{j:"5"},"stark-watzinger.de":{j:"5"},"mathsisfun.com":{s:"#cookOK{display:none !important}"},"riigipilv.ee":{s:".r-gdpr-popup{display:none !important}"},"groovy.bot":{s:"#__layout > div > .fixed{display:none !important}"},"hydra.bot":{s:"#__layout > div > .fixed{display:none !important}"},"awilime.com":{s:".afcoo{display:none !important}"},"bike-transalp.de":{s:"#cookie-clicker{display:none !important}"},"visnos.com":{c:"7"},"spiderfoot.net":{c:"34"},"suzuki-alkatreszek.hu":{s:"#cookieC{display:none !important}"},"zuendstoff-clothing.de":{s:".ConsentOverlay,.ModalBackground{display:none !important}"},"konzoluzlet.hu":{s:".cookie_inform{display:none !important}"},"fixedfloat.com":{s:".reminder{display:none !important}"},"bauermedia.co.uk":{j:"5"},"wincofoods.com":{s:"mct-templater-cookie-consent{display:none !important}"},"multibonus.ru":{s:'#root > div > header[color="info"]{display:none !important}'},"h24finance.com":{j:"5"},"headforpoints.com":{s:".ancr-pos-bottom{display:none !important}"},"bbva.it":{j:"5"},"bbva.pt":{j:"5"},"bbva.es":{j:"5"},"catawiki.com":{j:"5"},"catawiki.nl":{j:"5"},"catawiki.de":{j:"5"},"catawiki.eu":{j:"5"},"catawiki.fr":{j:"5"},"catawiki.es":{j:"5"},"catawiki.pl":{j:"5"},"catawiki.it":{j:"5"},"catawiki.se":{j:"5"},"teacheconomy.de":{j:"5",s:".cookie-banner-button{display:none !important}"},"zdrofit.pl":{s:"#cookies,#backdrop{display:none !important}"},"bosch-diy.com":{j:"5"},"configure.bmw.ca":{j:"5"},"skandia.se":{s:"#kakhylla,#kakoverdrag{display:none !important}"},"trox.de":{s:".trox-consent-manager{display:none !important}"},"schutzhuellenprofi.de":{j:"5"},"smdv.de":{j:"5"},"digitalo.de":{j:"5"},"voelkner.de":{j:"5"},"getgoods.com":{j:"5"},"supremenewyork.com":{s:"#top_notice{display:none !important}"},"thesettlersonline.com":{j:"5"},"thesettlersonline.pl":{j:"5"},"krone.bz":{s:'div[class*="cookie-banner"]{display:none !important}'},"fahrrad-xxl.de":{s:".fxxl-cookie-mainmodal,.modal-overlay{display:none !important}"},"cartodebat.fr":{c:"88"},"roonlabs.com":{c:"25"},"mod.io":{s:"#achtung-overlay{display:none !important}"},"permisecole.com":{s:"#rgpd{display:none !important}"},"elisa.fi":{s:".react-navi-ea-cookie-disclaimer,.ea-cookie-disclaimer{display:none !important}"},"medienportal-sachsen-anhalt.de":{s:".hinweis{display:none !important}"},"gartentraeume-sachsen-anhalt.de":{s:'.vcModalOverlay[for="overlayPrivacySwitch"],.vcModalOverlay[for="overlayPrivacySwitch"] ~ .vcModal{display:none !important}'},"cafe-royal.com":{s:"body{overflow:visible !important}"},"daneurope.org":{j:"5"},"abconcerts.be":{j:"5"},"trasferirsiallecanarie.info":{j:"5"},"meinbildkalender.de":{j:"5"},"gitpod.io":{s:"#svelte > .bottom{display:none !important}"},"essent.nl":{j:"5"},"energiewonen.nl":{j:"5"},"verpackungsregister.org":{j:"5"},"leoprinting.fr":{j:"5"},"argenta.be":{j:"5"},"barcelonaled.fr":{j:"5"},"ivaucher.pt":{j:"5"},"pilot-frixion.uk":{c:"3"},"pilot-frixion.fr":{c:"3"},"global.bible":{s:"#root > section + div:not(:last-child){display:none !important}"},"sainsburysmagazine.co.uk":{s:"#CookieTool{display:none !important}"},"mediaset.it":{j:"5"},"kotipizza.fi":{s:".notification-bottom{display:none !important}"},"eneba.com":{s:"#app > div:first-child{display:none !important}"},"eutraining.eu":{s:"#eutraining-cookibar{display:none !important}"},"olafneumann.org":{s:"#rg_container_cookie{display:none !important}"},"brp.com":{s:"#consent-dialog{display:none !important}"},"min.io":{s:".footer__banner{display:none !important}"},"rundfunkbeitrag.de":{s:"#optInId{display:none !important}"},"pizzafan.gr":{j:"5"},"mathaus.ro":{s:"#cookieOptionsFooter{display:none !important}"},"lagerbox.com":{s:".modal-outer,.cookie-modal{display:none !important}"},"msp360.com":{s:".use-cookie{display:none !important}"},"jcb.com":{s:".jcb-cookie-disclaimer{display:none !important}"},"rocrivor.nl":{j:"5"},"sfirmware.com":{j:"5"},"lg-firmwares.com":{j:"5"},"call-a-pizza.de":{j:"5"},"telepizza.de":{j:"5"},"hellojoko.com":{j:"5"},"copmadrid.org":{s:"#div_cookies_nueva{display:none !important}"},"packster.de":{s:".page-overlay{display:none !important}"},"hdg.de":{s:"#cookiebg,#hdg-cookie-accept{display:none !important}"},"zeitzeugen-portal.de":{s:"#cookiebg,#hdg-cookie-accept{display:none !important}"},"bitrefill.com":{s:"#consentDialog{display:none !important}"},"assurland.com":{s:"#consentManagementPlatform,.modal-backdrop{display:none !important}"},"travelsupermarket.com":{j:"5"},"bonami.hu":{j:"5"},"iobroker.pro":{j:"5"},"dunelm.com":{j:"5"},"web.dev":{s:"web-snackbar{display:none !important}"},"pagespeed.web.dev":{s:'c-wiz > div > div > div > div[jscontroller][jsaction$=");"]{display:none !important}'},"backmarket.com":{j:"5"},"backmarket.fr":{j:"5"},"backmarket.de":{j:"5"},"backmarket.it":{j:"5"},"backmarket.es":{j:"5"},"backmarket.be":{j:"5"},"backmarket.at":{j:"5"},"backmarket.fi":{j:"5"},"backmarket.pt":{j:"5"},"backmarket.co.uk":{j:"5"},"thebackmarket.nl":{j:"5"},"kraemer.de":{s:"#consentLayer{display:none !important}"},"landkreis-ostallgaeu.de":{c:"3"},"doordash.com":{j:"5"},"gordonua.com":{s:".cookie-label{display:none !important}"},"extpose.com":{j:"5"}};

var javascriptFixes = {
    0: `(function() {

	let searchPairs = {
		'.message-container': [
			'.sp_choice_type_12',
			'.sp_choice_type_SAVE_AND_EXIT',
			'div:only-of-type > .sp_choice_type_ACCEPT_ALL',
			'.privacy-manager-tcfv2 + div > .sp_choice_type_ACCEPT_ALL'
		],

		'.mfp-wrap.mfp-ready': [
			'.cookieselection-confirm-selection',
			'#gdpr_understandBtn',
			'#cookiebanner .button-row > :not(.consentToAll)',
			'#cookiebanner .confirmSelection',
			'#cookieConsent .btn[data-cookie="accepted"]',
			'.avia-cookie-close-bar',
			'.cookies-save-and-close-btn'
		],

		'.reveal-overlay[style*="block"]': [
			'[data-cookieman-save]:not([data-cookieman-accept-all]):not(.hide)',
			'#CookieModalStrictOnlyLink',
			'#dsgvoLayer[style*="block"] #dsgvo_deny'
		],

		'.cc-window:not(.cc-invisible)': [
			'.cc-checkboxes-container .cc-allow',
			'.cc-privacy-settings .cc-privacy-settings-compliance:last-child .cc-btn',
			'.accept-as-is'
		],

		'.fancybox-lock': [
			'.fancybox-opened .bcGDPR .bcOpenPrivacySettings',
			'.fancybox-opened .bcGDPR .bcRadioRefuse',
			'.fancybox-opened .bcGDPR #bcSubmitConsent',
			'.fancybox-opened .bcGDPR .bcpConsentCancelButton',

			'.fancybox-opened.cookie-gdpr-wrap .btn[data-action="deny-all"]'
		],

		'.fancybox-is-open': [
			'#cookie-consent .cc-page-2 #cc-set-cookie'
		],

		'.pum-open': [
			'.pum-active[data-popmake*="slug\\":\\"cookie"] .pum-close',
			'.pum-active[data-popmake*="rodo"] .pum-close',
			'.pum-active[data-popmake*="cookie-policy"] .pum-close',
			'.pum-active[data-popmake*="cookie-zustimmung"] .pum-close',
			'.pum-active[data-popmake*="cookie-consent"] .pum-close',
			'.pum-active[data-popmake*="uso-cookie"] .pum-close',
			'.pum-active[data-popmake*="cookie-notice"] .pum-close',
			'.pum-active[data-popmake*="cookie-banner"] .pum-close',
			'.pum-active[data-popmake*="cookie-pop"] .pum-close',
			'.pum-active[data-popmake*="cookies-pop"] .pum-close',
			'.pum-active[data-popmake*="informativa-cookie"] .pum-close',
			'.pum-active[data-popmake*="assenso-cookie"] .pum-close',
			'.pum-active[data-popmake*="pryvatnast"] .pum-close'
		],

		'.modal-open': [
			'#PrivacyCategoryAlert[style*="block"] .btn[data-id="ConfirmSettings"]',
			'#cookie-control-modal[style*="block"] .js-toggle-cookie-control',
			'.kmt-ckextmodal[style*="block"] .btn[href*="accept"]',
			'.cookie-alert[style*="block"] .btn-info[data-dismiss]',
			'#cookiesplus-bas[style*="block"] .btn[name="save-basic"]',
			'#mndCookieModal[style*="block"] ~ .modal .mnd-btn-save-settings',
			'#modal-cookie-notice[style*="block"] .accept-settings',
			'.modal.show button[id*="cookie-consent-accept-selected"]'
		],

		'.modal[style*="block"]': [
			'#btn-cookie-config',
			'#btn-save-config',

			'#btn-configure-cookies',
			'#user_cookies_form_save + #refuse-all-cookies',

			'#cookieConsentAcceptOnlyFunctional',
			'.cookie_actions .btn[onclick*="saveBasic"]',
			'#btnCookieSettingsSaveSettings',
			'#cookie-setselected',
			'#rodo_form .btn',
			'#cookieNoticeForm #saveCookies',
			'.btn[onclick*="saveCookieSettings"]',
			'.btn.set_essential_cookies',
			'.btn.js-offcanvas-cookie-submit',
			'.btn#cookie-save-selected',
			'.bcee-cookies-manager-deny-all',
			'.consent-banner-confirmation-button.btn-default',
			'a[onclick="setConsentSelect()"]',
			'.container_acceptcookies .btn[name="save"]',
			'#cookieSelectForm .btn[type="submit"]',
			'button[data-tracking="ACCEPT_REQUIRED_COOKIES"]',
			'#aceptarCookiesObligatorias',
			'.btn[href="#cookieman-settings"]',
			'[data-cookieman-settings-trigger-button]',
			'[data-cookieman-save]:not([data-cookieman-accept-all]):not([style*="none"])',
			'.cookie-manager-save',
			'.adapt-cookies .js-save-preferences',
			'#btnDeny.js-gdpr-submit',
			'#manageCookies ~ #confirmCookies',
			'a[href*="acceptOnlyEssentinal"]',
			'.modal-cookie #submitSelected',
			'#btn_cookie_save',
			'.btn[onclick*="SetEssentialCookies"]',
			'#cookie-consent-button-submit-selection',
			'.btn[data-bind*="modal.cookie_consent.save"]',
			'button[id*="cookie-consent-accept-selected"]',
			'.cookieselection-confirm-selection'
		]
	};

	let searchGroups = [
		'.qc-cmp2-summary-buttons button[mode="secondary"],\
		.qc-cmp2-buttons-desktop > button:first-child,\
		#accept_consent_box a[onclick*="_sp_.loadPrivacyManagerModal"],\
		.OffsetContainer div[data-component="ConsentLayer"] a[href="#sp_privacy_manager"],\
		#didomi-host .didomi-button-highlight:not([class*="paywall"]),\
		#CookieModal.in .btn[data-dismiss],\
		#rgpd_video .rgpd-mask a[data-rgpd-consent],\
		.js--modal[style*="block"] .cookie-permission--accept-button,\
		.gdpr-modal-rider .btn-cookieaccept,\
		.js-cookiewall #sel-test-accept-cookies-button,\
		#mpo[style*="block"] .submit.modal-privacy__btn[onclick*="privacyframe.accept"],\
		.lightbox--cookie-consent .btn-cta,\
		.lightbox.cookie-consent .cookie-consent-button-decline,\
		.js-modal-gdpr.is-active .btn[data-level="2"],\
		#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection,\
		#cookieNotificationModal.in .btn.accept-cookie,\
		.has-ccwindow .cc-compliance .cc-dismiss,\
		.ds2-cookie-disclaimer--slidedown .ds2-cookie-disclaimer-js--submit,\
		#mdlCookieCompliance.in .cookieClose,\
		#cookieModal.in .js-acceptDefaultCookie,\
		.c-cookiebutton .c-cookiebutton__close,\
		#normativa_cookies.in .btn,\
		#cookiewall.in .btn-primary,\
		.outerCookieBar .EuCookieBar__cookieButton,\
		#TOS-POPUP .rhododendron-popup__button--agree,\
		#cookie-wall #accept-cookies,\
		#popup-wrapper .button[href*="/cookies.consent.php"],\
		.body-wrapper[style*="faktor-fingerprint"] #acceptAll,\
		.reveal.cookies[style*="block"] button[click*="aceptaCookies"],\
		.mnd-cookie-modal[style*="block"] .btn.is--primary,\
		.cookieHandler.cookieHandler--modalOpen #acceptAllCookies,\
		.gdpr-modal--active .btn--primary,\
		#dpi-banner:not(.hidden) #btn-agree-cookie,\
		.gh-banner.gh-banner-active #gh-cookiebanner-close,\
		#mrktpref.notification-bar .btn-success,\
		#PopinGDPRCookie[style*="block"] .jsbd-popin-ok,\
		#modal-rodo.in .btn-primary,\
		.cookie-compliance-modal.in .btn-primary,\
		.cookieconsent.show .btn[data-dm*="accept"],\
		.cookie-wall-modal.in .btn.ja,\
		#ccm_notification .ccm_col_content_cookieitem-radiowrap .ccm_col_content_cookieitem-radio:first-child input,\
		#ccm_notification .ccm_btn,\
		#modal-consent.in .modal-consent-accept,\
		.rodo #cookies.in .btn-primary,\
		.js-cookie-alert.in .js-cookie-alert-accept,\
		#modal_gdpr_intro_popup.in #gdpr-modal-btn-ok-agree,\
		#consentButtonContainer > button[onclick*="sendAndRedirect"],\
		#eu-consent[style*="block"] .btn.yes,\
		.modal--gdpr.is-open .js-gdpr-consent,\
		#cookiePopupModal.in .cookiepopup-agreed,\
		.polityka-cookie-rodo[style*="block"] .button-zgoda,\
		.ui-dialog.consent-modal[style*="block"] .js-btn-agree,\
		#up-cookie.active .button[onclick*="setCookiePreference"],\
		.RodoModal.in .close,\
		.consent-popup form[action*="cookie-consent"] .consent-popup__button,\
		#consent form[action*="cookie-consent"] .one-btn,\
		#cookiewall-wrapper .button[href*="accept"],\
		#cookieChoiceButtonAccept,\
		.mod-cookie-consent[style*="block"] .btn-all-cookies,\
		.c-layer--consent .layer-button--accept,\
		.button.button-ok[onclick*="acceptAVG"],\
		#meredithGdprConsentFormButton,\
		#advanced-cookie-modal.in .cookie-accept,\
		.show-modal .cookie-settings-manager-container .initial-dialog .js-accept-button,\
		.cookie-settings-manager-container .initial-dialog[style*="block"] .js-accept-button,\
		.gdprLightbox[data-module="gdprLightbox"] ._type_gdpr_agree,\
		.cookie.showa #Row1_Column1_Cell1_CookieSettings_AdvancedSaveAccept,\
		#core-cookie-container[style*="block"] .btn--agree,\
		.cookie-consent-modal._show .action-primary,\
		#dsgvoModal.show #dsvgo-banner__button,\
		.basicLightbox--visible #accept-all-gdpr,\
		#gdpr-modal.in .gdpr-modal__btn--accept,\
		.cookiehint .btn.cookieagree,\
		#cookiealert .modal.in .btn[href*="accept"],\
		#lml-data-consent-accept,\
		#privacymodal.in #accall,\
		#CBCookieMsg.in .btn[onclick*="approveCookies"],\
		#cookiewall-container .button[name="submit"],\
		#cookie_disclaimer.in .cookie_disclaimer_button,\
		.m-cookie.iziModal[style*="block"] .m-cookie__save2.button,\
		kamino-cookie-policy .mat-raised-button,\
		#surbma-gpga-modal[style*="block"] button,\
		#GDPR.overlayBox .menuButton,\
		#cookiebar .cookie-selection-button.accept,\
		.modal.in .btn.close-modal-cookie,\
		#consent-module[style*="block"] #consent-module-text-button,\
		.modal #consentButton,\
		#consent-modal[style*="block"] .lm_modal__modal__content__body__buttons__ok,\
		.cookiesOverlay3Box #cookiesConsentOK,\
		.bemCookieOverlay--activePopup .bemCookieOverlay__btn--save,\
		#cookieNoticeModal.vrm-reveal[style*="block"] .vrm-reveal__icon--close',

		'#cookie-modal.in .btn[onclick*="setCookie"],\
		div[class^="sp_veil"] + div[id^="sp_message"] > div[class^="sp_message"] > div[id^="sp_message_panel"]:first-child div[class^="sp_choices"] button:not([aria-label]):first-child,\
		div[class^="sp_veil"] + div[id^="sp_message"] #sp-tabindex-focus + div div[class^="sp_choices"] button[aria-label]:first-child + button,\
		#privacyPolicyInfo.active #acceptPrivacyPolicy,\
		.fade.in .btn.cookie-yes,\
		#cookie-disclaimer[style*="block"] .cc_btn_accept_all,\
		.reveal-overlay[style*="block"] #dsgvo .cc_btn_accept_all,\
		.reveal-overlay[style*="block"] #reveal-cookies .btn[data-save],\
		#manageCookieConsentDialog.in #btn-cookie-agreed,\
		.fancybox-opened #gdpr-yes,\
		#cookie_form #accepted,\
		#PrivacySettings.in .bootstrap-switch-id-PrivacySettingsAgreeToAll .bootstrap-switch-default,\
		#PrivacySettings.in .btn-privacy-settings--save,\
		#ccc[open] #ccc-recommended-settings,\
		form[action*="cookiewall"] .button-accept-cookies,\
		#dtcookie-container.is-on .dtcookie__accept,\
		.approve-btn[href*="setCookieAndRedirect"],\
		button[data-qa-entity="cookies.button"],\
		#_evidon_banner[style*="flex"] #_evidon-accept-button,\
		#_evidon_banner[style*="block"] #_evidon-accept-button,\
		#_evidon-banner[style*="block"] #_evidon-banner-acceptbutton,\
		.cookiewall .cookiewallBody .btn-approve,\
		#cookiewallModal.in .btn-approve,\
		.js-gdpr-consent-container .js-gdpr-consent-agree,\
		.qc-cmp-showing .qc-cmp-button[onclick],\
		.page-cookie-wall .cookie-wall__form .btn,\
		form[action*="cookieconsent"] #SubmitButton,\
		.md-content.show .tm-cookies-consent-accept,\
		.md-show.cookies-consent .tm-cookies-consent-accept,\
		.modal-window #gdpr-modal-agree,\
		.privacy-overlay.ui-dialog .button.confirm-button,\
		.wrapper.show-plack .top-view .button-wrapper .btn,\
		.cookie_btn_accept_all,\
		button#cookies-accept-button,\
		#cmp-message .cmp-button[onclick*="cookieAccept"],\
		#ppms_cm_agree-to-all,\
		.template-gdpr .gdpr[data-api*="onetrust.com"] .gdpr-form .btn,\
		.dialog .cookie-banner__btn-accept,\
		button#btn-accept-consent,\
		button#gdpr-consent-accept,\
		#modal-ley-cookies.in .button-text-ley-cookies,\
		.remodal-wrapper[style*="block"] .cookie-notice .remodal-close,\
		#cookie-wall:not([hidden]) #cookie-wall-accept,\
		#gdpr.modal.active #gdprNotice #accept,\
		.btn-accecpt-cookie,\
		#js-gdpr-accept:not(.cta),\
		.ck-modal--cookieModalMain .ck-Button__primary,\
		.ReactModal__Overlay--after-open .cookie-notice button + button,\
		.ReactModal__Overlay--after-open .UPM__PrivacyModal button[type="submit"],\
		.privacyInformationDiv .cookie-agree,\
		#__tealiumGDPRecModal #privacy_pref_optin,\
		#__tealiumGDPRecModal #consent_prompt_submit,\
		#__tealiumGDPRcpPrefs #selectAllCheckboxes,\
		.modal.fade.in #acceptCookie,\
		.button[value="accept-all"][data-gtm="basic-consent/accept-all/button"],\
		#js-modal-consent .js-consent-accept,\
		#cookie-warning.show #cookie-accept,\
		.html-consent .cc-overlay-submit,\
		.c-cookie-consent-button-wrapper .c-cookie-consent__button,\
		#accept-cookie-policy.btn,\
		.privacywall-overview .js-privacywall-agree,\
		.privacywall-overlay .js-privacywall-agree,\
		#cookie_consent_layer .btn[onclick*="acceptAllCookies"],\
		#gdprModal #restaccept,\
		#gdprModal .primary[onclick*="Accept"],\
		.gdrpbox.in .btn[onclick*="gdrpSetCookie"],\
		#cookie-notification .modal-footer .btn,\
		#cookieManagerFooter #anwbrGiveConsent,\
		#cookie-wall-modal .btn-primary,\
		#cookie.popup .button.accept,\
		.dot-cc-wrapper .dot-heading ~ .dot-button-container .dot-btn-1,\
		.dot-cc-wrapper .dot-hide-cc-wrapper,\
		#my-content-cookielaw .cookie-btn,\
		#modalCookie .accept-cookie,\
		#modalCookie.shown .button[data-action="accept-cookies"],\
		.modal.cookie .btn[onclick*="setCookie"],\
		#cookiesbanner #hidecookiesbanner,\
		#cookiewall-buttons .accept-cookies,\
		form[action*="cookieservice.rtl.nl/consent"] .accept-button,\
		.buttonComp.cookieAccept,\
		.c-cookie-info .c-button.cookieAccept,\
		#btnAcceptCookies,\
		form[name="cookieconsent"] input[name="consent"],\
		.cookie-consent .box__button,\
		.modal #cookiewarning .button--accept,\
		.modal-cookie .btn[onclick*="setCookiepopup"],\
		.cookie-wall__button button,\
		#notification-allowCookies button,\
		#sanoma-consent-accept-button',

		'#rodo.in .button[href*="accept"],\
		#gdpr_popin[style*="block"] .gdpr-agree,\
		form[action*="cookieservice"] #acceptButton,\
		#cookiescript_injected #cookiescript_accept,\
		#js-cookie-wall[style*="block"] #js-cookie-wall-accept,\
		#termsandconds.in #acceptterms,\
		.ui-dialog.open #CookiePopup form .btn,\
		#modalCookie.show .cookie-accept,\
		#cookieform input.modal__submit,\
		#accept_koe.btn,\
		form[action*="cookie"] .melding #btnYes,\
		#cookie-consent-form input[type="submit"],\
		.cookiebar-actions #grantPermissionButton,\
		.cookiewall #TOL_link1,\
		.cookie-wrap[style] #TOL_link1,\
		#cookieConsentPopup[style*="block"] .btn,\
		#cadre_alert_cookies .popup-modal-dismiss,\
		#cookieConsentModal .success,\
		#privacy_statement_pop.in .btn[onclick*="close"],\
		.cookie-accept-block .cookie-accept-block-button .btn,\
		#cookieConsent.remodal-is-opened #acceptAllCookies,\
		.template--cookiewall .js-accept-cookies.btn,\
		.modal-cookie.show .js-accept-cookies.btn,\
		.state-visible .js-accept-cookies.btn,\
		#btn-allow-cookie,\
		.modal-cookie-warning .modal-close,\
		.cookiemessage__button--accept,\
		.cookieWallContent .ok-cookies,\
		#cookie-master #acceptCookies,\
		.cookie-wall .cookie-button,\
		#cookiebar_wrapper .accept-button:not(.sanoma-consent-change-settings-button),\
		.cookieallowbutton,\
		#js-cookie-message #js-accept-cookie,\
		.popup-cookie--buttons .popup-cookie--save,\
		.cookie-box #cookie-button,\
		#cookie-acceptance .btn.allow,\
		#acceptcookies.btn,\
		#cookiewet_NL .btn[href*="acceptcookie"],\
		.cadre_inner_texte_alert_cookies .popup-modal-dismiss,\
		.cookiewall button.allow_cookies,\
		#agree_with_cookie_terms,\
		.cookie-compliance-ok-btn,\
		a.cookieControlAccept,\
		button#cookie_accept,\
		.close.uiDismissCookiePolicy,\
		.fancybox-opened #cookiePolicy .info-close,\
		input[name="bw-cookie-consent-agree"] + input[type="submit"],\
		.js-cookie-info-accept-button,\
		#cookiePopup .btn-primary,\
		.modal .button[href*="accepteer-cookies"],\
		#cookie-modal .accept-cookies,\
		.popupframe input[name="cookieconsent_agreed"],\
		#ucCookiePolicy_btnCookiePolicyDismiss,\
		.alternetCookieMessage .alternetCookieAnswerLink,\
		#cookie-modal #cookie-consent-btn,\
		#cookies .button.CookiesOK,\
		.m-cookie-disclaimer .s-btn-close,\
		.consenso a[href*="accept-cookies"],\
		.button_submit[title="I accept the cookies"],\
		.accept-cookies a[onclick*="acceptCookies"],\
		.as_cookies_block_buttons a,\
		#btn-give-cookie-consent,\
		.cookie-info .btn-primary.cookie-accept,\
		.modal-open #cookie-modal .cookie-accept,\
		#js-cookie-popup.magnificPopup .btnSave,\
		#melding .ja,\
		.cookie_banner[data-module="cookie_banner"]:not(.xs-hide) .btn-close,\
		.cookie-notification-wrapper[style*="block"] .btn-primary,\
		.window-cookiewall .cookie-button,\
		#cookieModal .btn-icon-primary,\
		.wall #form_save,\
		.consent #button_yes,\
		.CookieSplashPage #NextButton,\
		#cookieconsent1.accept,\
		#jakoekies,\
		.btn-accept[href*="coockie"],\
		.btn-accept[href*="cookie"],\
		.btn-accept[href*="Cookie"],\
		.page--cookiewall .button[href*="acceptcookies"],\
		.layout--cookiewall .fjs-accept,\
		#cookies__modal .btn[href*="AcceptCookie"],\
		.btnAccept[href*="Cookies"],\
		#cookie-wall .btn-accept-cookies,\
		#cookiebox-nieuw .btn-cookie,\
		.cookiecontainer button[name="accept"],\
		.btn--accept[href*="cookiewall"],\
		.button--accept[href*="cookiewall"],\
		form[name="cookieconsent"] .consent.btn,\
		body.background .footer button#form_save.button[name="form[save]"],\
		.cookie-modal .btn.accept-cookies-button[href^="/Cookie/HasConsent"],\
		.view-cookie .js-cta-accept-cookie,\
		.main-header [data-module="cookie-notice"] .buttons[class*="primary"],\
		.c-cookie-consent form[name="cookie-consent"] input[type="submit"],\
		.c-cookie-consent .c-cookie-consent__button',

		'.fancybox-overlay[style*="block"] #cookie-consent-simple .cookie__btn--primary,\
		ab-cookie-wall modal-footer .btn,\
		.cookie-policy-popup[style*="block"] .button[data-cookie-policy-accept],\
		.cookie-consent-modal.ui-modal_open .cookie-consent-modal__accept-button,\
		#cookiewizard[style*="block"] #accept-all-cookies,\
		.AST-banner > div[style*="block"] .AST-accept,\
		#cookie_constent_submit,\
		.cookielayer[style*="block"] .cookielayer__optinbtn .btn--primary,\
		.modal.in .btn[onclick*="accept"][onclick*="gdpr"],\
		.Dialog--gdprCookieConsent.Dialog--open .GDPRCookieConsent__button,\
		#consentContainer .raised-btn[href*="granted"],\
		.reveal-overlay[style*="block"] #phg_cookies_modal .phgcookies_label_okay,\
		#cookielaw.in #cookie-accept,\
		.module.consent > .ok[type="button"],\
		body[class*="tiki"] #cookie_consent_div:not([style*="display: none"]) #cookie_consent_button,\
		body[class*="tiki"] #cookie_consent_div:not([style*="display: none"]) #cookie_consent_checkbox,\
		body[class*="tiki"] #cookie_consent_div:not([style*="display: none"]) input[name="cookie_consent_checkbox"],\
		.cookiesOverlay2Box #cookiesConsentOK,\
		#myCookieModal.in .cookie-button,\
		div[data-cookie-path] a[href*="technologies/cookies"] + div'
	];


	// Search loop function

	let searchGroupsLength = searchGroups.length,
		searchPairsKeys = Object.keys(searchPairs),
		searchPairsJoinedKeys = searchPairsKeys.join(','),
		timeoutDuration = 300;

	function searchLoop(counter) {
		setTimeout(function() {

			document.querySelectorAll(searchPairsJoinedKeys).forEach(function(box) {
				searchPairsKeys.forEach(function(selector) {
					if (box.matches(selector)) {
						box.querySelectorAll(searchPairs[selector].join(',')).forEach(function(button) {
							if (button.click && !button.classList.contains('idcac')) {
								button.classList.add('idcac');

								if (typeof chrome == 'object' && chrome.runtime)
									chrome.runtime.sendMessage({command: "cookie_warning_dismissed", url: document.location.href});

								button.click();

								setTimeout(function() {
									if (button) button.click();
								}, 500);

								timeoutDuration += 500;
							}
						});
					}
				});
			});

			document.querySelectorAll(searchGroups[counter%searchGroupsLength]).forEach(function(e) {
				if (e.click && !e.classList.contains('idcac')) {
					e.classList.add('idcac');

					if (typeof chrome == 'object' && chrome.runtime)
						chrome.runtime.sendMessage({command: "cookie_warning_dismissed", url: document.location.href});

					e.click();

					setTimeout(function() {
						if (e) e.click();
					}, 500);

					timeoutDuration += 500;
				}
			});

			if (counter < 100*searchGroupsLength)
				searchLoop(counter+1);

		}, timeoutDuration);

		timeoutDuration += 20;
	}

	var start = setInterval(function() {
		var html = document.querySelector('html');

		if (!html || /idc0_335/.test(html.className))
			return;

		html.className += ' idc0_335';
		searchLoop(0);
		clearInterval(start);
	}, 500);
})();`,
	4: `var t = 0;

var i = setInterval(function(){
	var e = document.querySelector('.CookiesOK');
	t++;

	if (e)
		e.click();

	if (e || t == 200)
		clearInterval(i);
}, 500);`,
	5: `const classname = Math.random().toString(36).replace(/[^a-z]+/g, '');

function _parent(e) {
	if (e && e.parentNode)
		return e.parentNode;

	return false;
}

function _id(s) {
	return document.getElementById(s);
}

function _sl(s, c) {
	if (s.startsWith('//'))
		return _ev(s, false, true);

	return (c || document).querySelector(s);
}

function _ev(selector, container, full) {
	return document.evaluate(
		(typeof full == 'undefined' ? '//' : '') + selector,
		container || document,
		null,
		XPathResult.ANY_TYPE, null
	).iterateNext();
}


let currentChainElement = 0;

function _chain() {
	let e, l = arguments.length;
	let flagUnique = false, flagOptional = false;

	for (let i=currentChainElement; i<l; i++) {

		// An argument can be a list of flags valid for all the following arguments

		if (/^FLAG\:/.test(arguments[i])) {
			arguments[i].split(':')[1].split(',').forEach(function(flag) {
				if (flag == 'UNIQUE')
					flagUnique = true;
				else if (flag == 'OPTIONAL')
					flagOptional = true;
				else if (flag == 'REQUIRED')
					flagOptional = false;
			});

			continue;
		}

		if (flagUnique)
			arguments[i] += ':not(' + classname + ')';

		if (i == l-1)
			return arguments[i];

		e = _sl(arguments[i]);

		if (!e) {
			if (flagOptional) {
				currentChainElement++;
				continue;
			}

			return false;
		}

		currentChainElement++;

		if (flagUnique)
			e.classList.add(classname);

		e.click();
	}

	return false;
}


function _if(condition, ...selectors) {
	return (_sl(condition) ? _chain(...selectors) : false);
}


function getSelector(host) {
	let e = false;


	// Network domain parts approach (min length: 4)

	if (host.long)
	{
		for (let i = 0; i < host.long.length; i++)
		{
			switch (host.long[i])
			{
				// BEGIN These rules have a duplicate

				case 'backmarket': return _if('div[aria-modal="true"] a[href*="/terms/cookies"]', 'div[aria-modal="true"] button.underline, div[aria-modal="true"] button:first-child:not(.underline) + button[data-qa="accept-cta"]');

				case 'cotswoldoutdoor':
				case 'asadventure':
					return _chain('div[data-hypernova-key="AEMScenes_CookieMessage"] .as-t-box + .as-a-btn--link', '.as-m-popover .as-m-group button');

				// END


				case 'reebok':
				case 'adidas':
					return _chain('.gl-modal--active button[data-auto-id*="consent-manage"]', 'FLAG:OPTIONAL', 'div[data-auto-id*="group__option-2"] .gl-checkbox--checked input', 'div[data-auto-id*="group__option-1"] .gl-checkbox--checked input', 'FLAG:REQUIRED', 'button[data-auto-id*="consent-options-save"]');

				case 'fiveguys':
					e = _sl('.v-dialog--active');
					return (e && _ev("*[contains(., 'cookie')] | *[contains(., 'Cookie')]", e) ? _sl('.v-card__actions:last-child button', e) : false);

				case 'doppelherz': return (_sl('.bg-coolgray') ?  _ev('footer/following-sibling::div/div[contains(@class, "fixed")]//button[contains(@aria-label, "Akzeptieren")]') : _sl('.cookie-inquiry-wrapper.show .cookie-inquiry--configuration .button'));
				case 'musik-produktiv': return '.mp-modal[style*="block"] .consent-save-settings';
				case 'intersport': return '.gdpr-modal-wrapper._show .allow-necessary, #cookies-modal-id[style*="block"] .save-cookies';
				case 'qastack': return '.modal[style*="block"] #cookies-accept';
				case 'douglas': return _chain('.uc-banner-modal .button__link', '.uc-list-button__deny-all');
				case 'easyname': return _chain('.overlay--cookie-modal .choose-settings', '.choose-settings:first-child');
				case 'lyst': return _chain('.ReactModal__Overlay--after-open img[src*="cookie-consent"] ~ div button + button', '.ReactModal__Overlay--after-open #finished-link');
				case 'derstandard': return '.message-component[title*="Einverstanden"], .privacywall-overlay .js-privacywall-agree';
				case 'bosch-home': return '.cookielaw-modal-layer.is-active .js-accept';
				case 'pricerunner': return '#consent button + button';
				case 'sellpy': return _chain('button[label*="cookies"][color="blue"] + button, button[label*="Cookies"][color="blue"] + button', 'div[role="dialog"] > button:last-child');
				case 'myrobotcenter': return '.ec-gtm-cookie-modal._show .decline';
				case 'samsonite': return '.overlay-wrapper--visible .cookie-consent-overlay__actions .btn--primary';
				case 'inwx': return '.consent-background[style*="block"] .reject-all';
				case 'cellbes': return _ev('p[./a[contains(@href, "cookie") or contains(@href, "kupsis") or contains(@href, "sikdatne")]]/parent::div/following-sibling::button');
				case 'nintendo': return '.plo-overlay--is-open .plo-cookie-overlay__reject-btn, .CookiePolicyModal .Modal:not([style*="none"]) .btn + .btn, .cookie-banner[style*="block"] .cookie-reject-button';
				case 'kyoceradocumentsolutions': return host.parts.indexOf('academy') != -1 ? '.modal[style*="block"] .cookiee-agree' : _chain('.-is-visible[data-gdpr-manage-cookies-popup] button[data-gdpr-review-cookies]', 'button[data-gdpr-accept-reviewed]');
				case 'stooq': return '.fc-consent-root .fc-cta-consent';
				case 'bike24': return _if('.cookie-consent-modal', 'FLAG:UNIQUE', '.cookie-consent-modal div:first-child > button', '.cookie-consent-modal div:first-child > button');
				case 'tavex': return _if('.modaal-wrapper[data-source*="cookie-initial"]', '.js-cookie-save-preferences');
				case 'elring': return '#modal-cookie-info[style*="block"] .btn-dismiss';
				case 'bbva': return '.cookiesgdpr:not(.cookiesgdpr--hidden) .cookiesgdpr__chooseallbtn--reject';
				case 'catawiki': return _if('.cookie-bar-is-visible', '.fe-cookie-form button');
			}
		}

		host.long = false;
	}


	switch (host.full)
	{
		case 'youtube.com': return '#lightbox[class*="ytd-consent-bump"] .buttons ytd-button-renderer:last-child, .consent-bump-v2-lightbox .button-renderer:last-child:not(.show-more-button) button';

		case 'm.facebook.com':
		case 'mapillary.com':
			return _chain('.hasCookieBanner [data-cookiebanner*="manage"]', 'button[data-cookiebanner*="accept"]');

		case 'whatsapp.com':
			return _chain('.hasCookieBanner [data-cookiebanner*="manage"]', 'button[data-cookiebanner*="agree"]');

		case 'facebook.com':
		case 'bulletin.com':
		case 'fb.com':

			if (/^\/user_cookie_prompt\//.test(document.location.pathname))
				return _chain('FLAG:UNIQUE', 'div:not(:only-child):first-child > div[role="button"]', 'div:not(:only-child):first-child > div[role="button"]');
			else if (/\/dialog\/cookie_consent\//.test(document.location.pathname))
				return 'button[name="__CONFIRM__"]';

			e = _sl('.__fb-light-mode div[role="dialog"] a[href*="/policies/cookies"], .__fb-dark-mode div[role="dialog"] a[href*="/policies/cookies"]');
			return (e ? _chain('div[role="dialog"] div[aria-hidden="true"] + [role="button"]', 'div[role="dialog"] [tabindex="-1"] > div > div:last-child [role="button"]') : _chain('.hasCookieBanner [data-cookiebanner*="manage"]', 'button[data-testid="cookie-policy-manage-dialog-accept-button"]'));

		case 'messenger.com':
			if (/^\/user_cookie_prompt\//.test(document.location.pathname))
				return _chain('FLAG:UNIQUE', 'div:not(:only-child):first-child > div[role="button"]', 'div:not(:only-child):first-child > div[role="button"]');

			e = _sl('.uiLayer:last-child button[data-cookiebanner*="accept"]');
			if (e) e.click();
			return _sl('.hasCookieBanner button[data-cookiebanner*="accept"], #accept-cookie-banner-label');

		case 'oversightboard.com':
			return _sl('.hasCookieBanner button[data-cookiebanner*="accept"], #accept-cookie-banner-label');

		case 'oculus.com':
		case 'workplace.com':
			return 'div[data-testid="cookie-policy-dialog"] button[data-cookiebanner*="accept"]';

		case 'instagram.com':
			e = _sl('#react-root ~ [role] a[href*="cookies"]');
			return (e ? _sl('#react-root ~ [role] button:first-of-type') : _sl('.hasCookieBanner button[data-cookiebanner*="accept"], #accept-cookie-banner-label'));

		case 'privacymanager.io': return _sl('#manageSettings ~ #save, .noDenyButton .accept-all'); // new and old button, just in case
		case 'sp-prod.net': return _sl('.cmp-cta-accept, .message-button:not(.cmp-cta-accept) + .message-button');

		case 'consent-pref.trustarc.com': return (_sl('.pdynamicbutton') ? _chain('.pdynamicbutton .shp', '.pdynamicbutton .submit') : '.iab_managePanel .rejectAll');

		case 'privacy-mgmt.com':
		case 'golem.de':
		case 'bike-bild.de':
		case 'cosmopolitan.de':
		case 'heise.de':
			return _sl('.sp_choice_type_11');

		case 'o2.pl':
		case 'money.pl':
		case 'open.fm':
		case 'gadzetomania.pl':
		case 'kafeteria.pl':
		case 'dobreprogramy.pl':
		case 'fotoblogia.pl':
		case 'pudelek.pl':
		case 'komorkomania.pl':
		case 'autokult.pl':
		case 'abczdrowie.pl':
		case 'parenting.pl':
		case 'so-magazyn.pl':
		case 'domodi.pl':
		case 'vibez.pl':
		case 'autocentrum.pl':
		case 'extradom.pl':
		case 'totalmoney.pl':
			return _ev("button[contains(., 'PRZECHODZ')]");

		case 'octapharma.com':
			e = _sl('#assistant-paper button');
			return (e && _ev("span[contains(., 'I agree')]", e) ? e : false);

		case 'rp.pl':
		case 'parkiet.com':
			return _sl('#rodo-popup button:last-child');

		case 'blick.ch':
			e = _sl('div[id^="sp_message"][class^="sp_message_container"]:not(.idcac)');
			if (e) e.className += " idcac";
			return e;

		case 'wacom.com':
			e = _sl('#consent_blackbar:not(.idcac)');
			if (e) e.className += " idcac";
			return e;

		case 'motocombo.pl':
			e = _sl('#topInfoContainer0:not(.idcac)');
			if (e) e.className += " idcac";
			return e;

		case 'wp.pl':
			document.cookie = 'WP-cookie-info=1'; // wiadomosci
			return _ev("button[contains(., 'PRZECHODZ')]");

		case 'blikopzeewolde.nl':
		case 'socialmediaacademie.nl':
		case 'petsie.nl':
			return _sl('.jBlockerAccept');

		case 'fifa.com':
			e = _sl('#root > div > div > svg');
			if (e) e.dispatchEvent(new Event("click", {bubbles:true}));
			return (e ? e : _sl('.mdl-overlay .close'));

		case 'tallsay.com':
		case 'plazilla.com':
			return _sl('.buttonblue[name="cookieok"]');

		case 'interspar.at':
		case 'spar.at':
			return _sl('.has-cookie-notification .cookie-notification__confirm');

		case 'spar.hu':
		case 'spar.hr':
			return _sl('.has-cookie-notification .cookie-notification__accept');

		case 'spar.si':
			return _sl('.has-cookie-notification .cookie-notification__accept, .has-cookie-notification .cookie-notification__select-all');

		case 'rain-alarm.com':
			e = _id('privacypolicyAnalyticsYes');
			if (e) e.click();
			return _id('dialogButtonNo');

		case 'watchadvisor.com':
			e = _sl('#wa-base-gdpr-consent-form #edit-consent-cookies');
			if (e) e.click();
			return _sl('#wa-base-gdpr-consent-form #edit-submit');

		case 'biorender.com':
			e = _sl('#___gatsby > div > div > div > div > div > div > div > a[href*="/privacy"]');
			return (e ? e.parentNode.nextSibling.firstChild : false);

		case 'puzzleyou.be':
		case 'fotondo.cz':
			return _id('cookies-consent-accept-all');

		case 'match.com':
			e = _parent(_sl('a[data-cookie-no-optin][href*="cookie"]'));
			return (e ? e.nextSibling : false);

		case 'neu.de':
			e = _parent(_sl('.js-cookie-no-optin'));
			return (e ? e.nextSibling : false);

		case 'kringloopapp.nl':
			e = _ev("h4[contains(., 'Cookies')]");
			return (e ? _id('modal-close') : false);

		case 'marokko.nl':
			e = _sl('.cookiealert .button');
			if (e) e.dispatchEvent(new Event("mousedown"));
			return false;

		case 'totum.com':
			e = _sl('.modal.active a[href*="cookie-policy"]');
			return (e ? _sl('a', e.parentNode.nextSibling) : false);

		case 'plt.nl':
		case 'amphion.nl':
			return _sl('.site-image .accept');

		case 'thelily.com':
			e = _sl('.gdpr-wall[style] .agree-checkmark');
			if (e) e.click();
			return _sl('.gdpr-wall[style] .continue-btn');

		case 'maps.arcgis.com': // s-leipzig
			e = _sl('.jimu-widget-splash .jimu-checkbox');
			if (e) e.click();
			return _sl('.jimu-widget-splash .jimu-btn');

		case 'nederpix.nl':
		case 'birdpix.nl':
			return _sl('#cookieSettings[style*="block"] #cookieAccept');

		case 'track-trace.com':
		case 'pakkesporing.no':
		case 'forstasidorna.se':
		case 'forsidene.no':
			return _sl('.tingle-modal--visible .tingle-btn--primary');

		case 'portalsamorzadowy.pl':
		case 'infodent24.pl':
		case 'portalspozywczy.pl':
		case 'promocjada.pl':
		case 'farmer.pl':
			return _sl('.rodo.open .button');

		case 'shootingtimes.com':
		case 'gunsandammo.com':
			return _sl('.lity-opened #consent .lity-close');

		case 'wko.at':
		case 'gruenderservice.at':
			return _sl('#cookiehint .cookieagree');

		case 'cideon.de':
		case 'eplan.blog':
			return _sl('.modal[style*="block"] .m-content-cideon-cookie-consent__accept');

		case 'metro.de':
		case 'metro.fr':
		case 'metro.hu':
		case 'makro.nl':
			return _sl('#footer div[style*="block"] .field-accept-button-name, .cookie-banner-overlay.noscroll a[test-target="cookie-modal-accept"]');

		case 'metro.it': return _sl('.modal[style*="block"] #cookieLawAgreeBtn');
		case 'metro.co.uk': return _sl('body > div[class^="app"][data-project="mol-fe-cmp"] button + button');

		case 'footroll.pl':
		case 'wirtualnemedia.pl':
			return _chain('div[class^="app_gdpr"] button[class*="manage"]', '#managePurposes + div [class*="switch_switch"]', 'div[class^="app_gdpr"] button[class*="save_changes"]:not([disabled])');

		case 'merckmanual.nl':
		case 'msdmanuals.nl':
			return _sl('.cookies + form .button');

		case 'steviaproducts.be':
		case 'pcdiscounter.eu':
		case 'shop4mama.nl':
			return _sl('.ui-dialog[style*="block"] #OneTimePopupDialog + .ui-dialog-buttonpane button:last-child');

		case 'welcomemrbaby.com':
			e = _sl('.mfp-ready .dont-show-me');
			if (e) e.click();
			return _sl(".mfp-ready .dont-show-label ~ a");

		case 'moderne-landwirtschaft.de':
		case 'thule.com':
			return _sl('#cookieModal.in .btn');

		case 'transip.nl':
		case 'transip.eu':
		case 'cloudvps.nl':
			return _sl("#consent-modal .one-btn, .consent-popup__button");

		case 'healthline.com':
		case 'greatist.com':
		case 'medicalnewstoday.com':
			e = _sl('#modal-host button:not(.backdrop)');
			return (e && _ev("span[contains(., 'ACCEPT')]", e) ? e : false);

		case 'reallygoodemails.com':
			e = _sl('#__next > div > .container');
			return (e ? _ev("button[contains(., 'Okay')]", e) : false);

		case 'mitsubishielectric.com':
		case 'mea.com':
			return _sl('.cookie_policy .btn-cookie-yes, .gs18-HasCookieAlert .gs18-CookieAlert .gs18-ButtonLink');

		case 'bienvenue-a-la-ferme.com':
		case 'normandiealaferme.com':
		case 'lagazettedemontpellier.fr':
		case 'sufilog.com':
		case 'igbce.de':
		case 'bibliotheque.toulouse.fr':
		case 'lagazettedenimes.fr':
		case 'pcsoft.fr':
			return _sl('.orejimeBody-WithModalOpen .orejime-Button--save, .orejime-Layer-show .orejime-Button--save');

		case 'bsh-group.com':
		case 'balay.es':
		case 'constructa.com':
		case 'home-connect.com':
		case 'neff-home.com':
			return '.cookielaw-modal-layer.is-active .js-accept';

		case 'wakelet.com': return _sl('#cookie-banner:not([hidden]) .close__icon', _sl('wk-ui-cookier-banner', _sl('my-app').shadowRoot).shadowRoot);
		case 'arcteryx.com': return _sl('.cookies-disclaimer-bar[style*="auto"] .cookies-disclaimer-bar-close', _id('header-host').shadowRoot);

		case 'badische-zeitung.de':
		case 'schweinske.de':
		case 'worldofsweets.de':
			e = _id('usercentrics-root');
			return (e && e.shadowRoot ? _sl('button[data-testid="uc-accept-all-button"]', e.shadowRoot) : e);

		case 'bobsys.com':
			e = _id('usercentrics-root');
			return (e && e.shadowRoot ? _sl('button[data-testid="uc-deny-all-button"]', e.shadowRoot) : e);

		case 'prosieben.de':
		case 'joyn.de':
		case 'esports.com':
			e = _sl('cmp-banner');
			e = e && e.shadowRoot ? _sl('.banner:not(.banner--hidden) cmp-dialog', e.shadowRoot) : false;
			e = e && e.shadowRoot ? _sl('cmp-button[variant="primary"]', e.shadowRoot) : false;
			return (e && e.shadowRoot ? _sl('.button--primary', e.shadowRoot) : false);

		case 'trusted.de':
			e = _sl('trd-cookie-note', _id('trd-app').shadowRoot);
			return (e ? _sl('.ok', e.shadowRoot) : false);

		case 'm.economictimes.com':
			e = _id('dut_agree');
			if (e) e.click();
			return e ? e.parentNode.nextSibling.nextSibling : false;

		case 'gezondheidsplein.nl':
		case 'ziekenhuis.nl':
			return _sl('#cookieModalIntro[style*="block"] .button');

		case 'mmafighting.com':
		case 'theverge.com':
			return _sl('#privacy-consent button');

		case 'techopital.com':
		case 'ticsante.com':
		case 'sandro-paris.com':
		case 'feuvert.fr':
			return '#cookieConsent[style*="block"] #consentRefuseAllCookies';

		case 'eschuhe.de':
		case 'chaussures.fr':
		case 'eobuwie.com.pl':
		case 'epantofi.ro':
		case 'ecipo.hu':
		case 'efootwear.eu':
			return _sl('.no-scroll .popup .button[data-testid="permission-popup-accept"]');

		case 'kerbalspaceprogram.com':
		case 'bs-ffb.de':
			return _sl('.wmpci-popup-close');

		case 'krakusik.pl':
		case 'toruniak.pl':
		case 'kaliszak.pl':
			return _sl('#js_rodo_window[style*="block"] .yes-to-all');

		case 'theawesomer.com':
			e = _ev("span[contains(., 'Sounds Good, Thanks')]");
			return (e ? e.parentNode : false);

		case 'sava-osiguranje.hr':
		case 'zav-sava.si':
			e = _sl('#frmAgree[style*="block"]');
			if (e) {_sl('input', e).click(); _sl('#btn-agree-go', e).click();}
			return _sl('.modal[style*="block"] #btn-cookie-man-save');

		case 'smdv.de':
		case 'voelkner.de':
		case 'digitalo.de':
		case 'getgoods.com':
			return '.reveal__overlay[style*="block"] .cookie_consent [data-close]';

		case 'teb.pl':
		case 'technikum.pl':
			return _sl('#cookieModal[style*="block"] #rodo_accept');

		case 'd2m-summit.de':
		case 'influencermarketingforum.de':
			return _sl('#dialogBox[style*="block"] #submitConsent');

		case 'jetcost.com':
		case 'jetcost.co.uk':
		case 'jetcost.de':
		case 'jetcost.pt':
		case 'voli-diretti.it':
			return '#ck-modal-container .btn';

		case 'olesnica24.com':
		case 'korsokolbuszowskie.pl':
		case 'cooltura24.co.uk':
			return _sl('.modal[style*="block"] .btn[data-accept]');

		case 'sfirmware.com':
		case 'lg-firmwares.com':
			return '.fancybox-is-open #gdpr-accept';

		case 'dsdollrobotics.com':
			e = _sl('.pum-active[data-popmake*="eu-cookie"] .pum-close');
			if (e) e.click();
			return _sl('.pum-active[data-popmake*="one-more-thing"] .pum-close');

		case 'danskemedier.dk':
			return _sl('#gdpr-cookie-message:not([style*="none"]) #gdpr-cookie-accept');

		case 'biotechusa.hu':
		case 'biotechusa.fr':
			return _sl('div[class*="modal-is-opened"] #accept-cookie-settings');

		case 'call-a-pizza.de':
		case 'telepizza.de':
			return _chain('.fancybox-opened .js_cookies_extended', '.js_cookies_save');

		case 'montafon.at':
		case 'termeszetjaro.hu':
		case 'teutonavigator.com':
		case 'engadin.ch':
		case 'tourenplaner-rheinland-pfalz.de':
		case 'wanderservice-schwarzwald.de':
		case 'dresden-elbland.de':
			return '.oax-cookie-consent-select-necessary';

		case 'outdooractive.com':
		case 'alpenvereinaktiv.com':
			return '.oax-cookie-consent-select-all';

		case 'kastner-oehler.at':
		case 'kastner-oehler.ch':
		case 'gigasport.at':
		case 'gigasport.ch':
			return _sl('#quickview_cookie_settings.en_is_active a.tao_button_cookie_settings');

		case 'pcmweb.nl':
		case 'techcafe.nl':
		case 'gamer.nl':
		case 'insidegamer.nl':
			return _sl('#cookie-wall:not([hidden]) .cookie-wall-accept');

		case 'moomoo.io':
		case 'krunker.io':
			return _sl('#consentBlock[style*="block"] .termsBtn[onclick*="1"]');

		case 'zee5.com':
			e = _sl('app-cookies-check-popup .AcceptButton');
			if (e) e.click();
			return _sl('app-cookies-check-popup .Accept');

		case 'idp.funktionstjanster.se':
			e = _sl('.cookieContainer #ccbx');
			return (e && !e.checked ? e : false);

		case 'betriebsrat.de':
		case 'snp-online.de':
		case 'verla.de':
		case 'brwahl.de':
			return _sl('.cookielayermodal[style*="block"] button');

		case 'alphr.com': return _sl('div[id^="sp_message"] div[class*="sp_choices"] button:nth-child(2)');

		case 'eurogamer.net':
		case 'eurogamer.pl':
		case 'eurogamer.cz':
		case 'eurogamer.de':
		case 'eurogamer.es':
		case 'eurogamer.it':
		case 'eurogamer.nl':
		case 'eurogamer.pt':
		case 'rtlxl.nl':
		case 'zdnet.com':
		case 'mensjournal.com':
		case 'crfashionbook.com':
		case 'autoweek.nl':
		case 'landsend.de':
		case 'gmx.com':
		case 'gmx.es':
		case 'gmx.fr':
		case 'gmx.co.uk':
		case 'mail.com':
		case 'cbsnews.com':
		case 'cbslocal.com':
		case 'etonline.com':
		case 'cnet.com':
		case 'assetstore.unity.com':
		case 'kruidvat.nl':
		case 'kruidvat.be':
		case 'trekpleister.nl':
		case 'tvn24.pl':
		case 'popsugar.co.uk':
		case 'rte.ie':
		case 'sika.com':
		case 'merkurmarkt.at':
		case 'boomerang-tv.pl':
		case 'billa.at':
		case 'cnbc.com':
		case 'bethesda.net':
		case 'a10.com':
		case 'gry.pl':
		case 'sport.pl':
		case 'mtvuutiset.fi':
			return _sl('#onetrust-banner-sdk:not([style*="none"]) #onetrust-accept-btn-handler');

		case 'reisetopia.de': return _chain('#onetrust-banner-sdk:not([style*="none"]) #onetrust-pc-btn-handler', '.save-preference-btn-handler');
		case 'winfuture.de': return _chain('#onetrust-banner-sdk:not([style*="none"]) .cookie-setting-link', '.save-preference-btn-handler');
		case 'dhl.de': return _if('#onetrust-pc-sdk[style*="block"]', '#ot-group-id-C0002', '#confirm-choices-handler');
		case 'reuters.com': return '#onetrust-pc-sdk:not([style*="none"]) .ot-pc-refuse-all-handler';

		case 'tunein.com':
		case 'oe24.at':
			return '#onetrust-banner-sdk:not([style*="none"]) #onetrust-reject-all-handler';

		case '1001spiele.de': return _chain('#onetrust-banner-sdk:not([style*="none"]) .cookie-setting-link', '.ot-pc-refuse-all-handler');
		case 'aerztezeitung.de': return _if('a[href*="/Service/Datenschutzerklaerung-"] ~ a:not([href])', '//button[text()="Akzeptieren und weiter"]');

		case 'medirect.be':
		case 'medirect.com.mt':
			return _id('idCookiePolicy');

		case 'goetzmoriz.com':
		case 'moelders.de':
		case 'mahler.de':
		case 'gillet-baustoffe.de':
		case 'shop.bauwelt.eu':
		case 'kipp.shop':
		case 'stewes.de':
			return '.modal[style*="block"] .modal-cookie #submitSelected';

		case 'wiertz.com':
		case 'oney.pt':
			return _sl('.accept-cookies');

		case 'zwolen.pl':
			e = _sl('#g_toplayer[style*="block"] .close');
			if (e) e.click();
			return _sl('#cook:not([style*="none"]) > a');

		case 'studio.benq.com':
		case 'adameve.com':
		case 'poppen.de':
		case 'fetisch.de':
		case 'gay.de':
			return _sl('.modal[style*="block"] #btn-accept-cookies');

		case 'hscollective.org':
		case 'geefvoorzorgverleners.nl':
			return _sl('.cookie-consent__button--accept');

		case 'cexpr.es':
		case 'correosexpress.com':
		case 'correosexpress.pt':
			return _sl('.fullscreen-container[style*="block"] #cookieAceptar');

		case 'rodekruis.be':
		case 'vias.be':
		case 'umicore.com':
			return _sl('#cookies-banner[style*="block"] .btn-accept-all');

		case 'ffm.to':
		case 'orcd.co':
		case 'backl.ink':
		case 'ditto.fm':
			return _sl('.privacy-notice-gdpr .accept-cookies');

		case 'onecall.no':
		case 'mycall.no':
			return _sl('.modal--cookie-consent[style*="block"] [data-target="acceptCookies"]');

		case 'edimax.com':
			e = _sl('#world_lang_map[style*="block"] .cookies_close_btn span');
			if (e) _sl('#world_lang_map[style*="block"] .cookies_check').click();
			return e;

		case 'apiko.com':
			e = _sl('#gatsby-focus-wrapper > div:last-child a[href*="gdpr"]');
			return (e ? e.parentNode.nextSibling : false);

		case 'heiligenfeld.de':
		case 'fm-systeme.de':
			return _sl('.cookie-hint #tx_cookies input[type="submit"]');

		case 'alltube.tv':
		case 'alltube.pl':
			e = _sl('#cookies > span');
			if (e) e.click();
			return _sl('#rodo-popup[style*="block"] #rodo-accept');

		case 'skitenis.pl':
		case 'holdentalesklep.eu':
		case 'zmienolej.pl':
			return _sl('.fancybox-opened .acceptCondition');

		case 'ionos.de':
		case 'ionos.at':
		case 'ionos.fr':
			return _chain('.privacy-consent--active .privacy-consent--modal .footer-config-link', '#confirmSelection.privacy-consent--button');

		case 'peaks.com':
		case 'peaks.nl':
			return _sl('#cookie-modal.show .bubble');

		case 'mnisek.cz':
		case 'covid19awareness.sa':
		case 'ambiance.be':
		case 'figurelist.co':
			return _sl('.elementor-popup-modal:not([style*="none"]) .elementor-button[href*="close"]');

		case 'crowdlitoken.ch':
			e = _sl('#root > .shadow a[href*="privacy-policy"]');
			return (e ? e.previousSibling : false);

		case 'eigene-ip.de':
		case 'verifyemailaddress.org':
			return _sl('main > .flex > #accept');

		case 'toolstation.nl':
		case 'toolstation.fr':
			return _sl('.modal[style*="block"] #eu-cookies-notice-yes');

		case 'peek-cloppenburg.at':
		case 'peek-cloppenburg.de':
		case 'peek-cloppenburg.nl':
		case 'peek-cloppenburg.pl':
		case 'greenweez.com':
		case 'fashionid.de':
		case 'ansons.de':
			return _sl('.show #accept-all-cookies');

		case 'chartoo.de':
		case 'chartoo.fr':
		case 'chartoo.at':
		case 'chartoo.ch':
		case 'chartoo.co.uk':
		case 'chartoo.in':
		case 'chartoo.com':
			e = _sl('body > div > div:last-child a[href*="/privacy"]');
			return (e ? _sl('[id] + [class] + [id] + [class] + [id]', e.parentNode.nextSibling) : false);

		case 'cropp.com':
			return _sl('#pageHeader div[data-selen-group="cookies-bar"] button');

		case 'coolblue.nl':
		case 'coolblue.be':
		case 'coolblue.de':
			return _sl('.button[name="accept_cookie"]');

		case 'inwerk.de':
		case 'bioplanete.com':
		case 'brabus.com':
			return _sl('#modal-cookie[style*="block"] #saveCookies');

		case 'ab.gr':
		case 'delhaize.be':
		case 'mega-image.ro':
		case 'maxi.rs':
			return _sl('.js-cookies-modal:not(.hidden) .js-cookies-accept-all, button[data-testid="cookie-popup-accept"]');

		case 'isny.de':
		case 'oberstdorf.de':
		case 'alpinschule-oberstdorf.de':
		case 'hotel-mohren.de':
		case 'ok-bergbahnen.com':
		case 'tramino.de':
		case 'markt-oberstdorf.de':
		case 'deutschertourismuspreis.de':
		case 'oberstdorf2021.com':
			return _sl('.TraminoConsent.show .settings [value="acceptConsent"]');

		case 'system.t-mobilebankowe.pl':
			e = _ev("span[contains(., 'Zamknij')]");
			return (e ? e.parentNode.parentNode.parentNode : false);

		case 'sachsen-fernsehen.de':
		case 'radio-trausnitz.de':
		case 'radioeins.com':
		case 'regio-tv.de':
		case 'radio-bamberg.de':
		case 'tvo.de':
		case 'frankenfernsehen.tv':
		case 'tvaktuell.com':
		case 'radio8.de':
		case 'otv.de':
		case 'rnf.de':
		case 'radio-plassenburg.de':
		case 'baden-tv.com':
		case 'muenchen.tv':
		case 'rfo.de':
			return _sl('.cmms_cookie_consent_manager.-active .-confirm-selection');

		case 'gongfm.de':
			return _sl('.cmms_cookie_consent_manager.-active .-confirm-all, #radioplayer-cookie-consent .cookie-consent-button');

		case 'l-bank.de':
		case 'l-bank.info':
			return _sl('#bmLayerCookies.AP_st-visible .AP_mdf-all');

		case 'wetransfer.com':
			e = _sl('.welcome--tandc .button.welcome__agree');
			if (e) e.click();

			return _sl('#tandcs[style*="block"] #accepting.enabled, .transfer__window.terms-conditions .transfer__button, .infobar--terms .button, .welcome__cookie-notice .welcome__button--accept');

		case 'gmx.net':
		case 'gmx.ch':
		case 'gmx.at':
		case 'web.de':
			return _sl('#cmp #save-all-conditionally');

		case 'music.yandex.ru':
		case 'music.yandex.com':
			return _sl('.gdpr-popup__button');

		case 'virginaustralia.com':
		case 'mediathekviewweb.de':
			return _id('cookieAcceptButton');

		case 'weltbild.de':
		case 'weltbild.at':
		case 'jokers.de':
			return _sl('.reveal-overlay[style*="block"] .dsgvoButton');

		case 'backstagepro.de':
		case 'regioactive.de':
			return _sl('#dialogconsent[style*="block"] #acceptall');

		case 'stoffe.de':
		case 'myfabrics.co.uk':
		case 'tyg.se':
			return _sl('body[style*="fixed"] #cookieOverlay .cookie-accept');

		case '12xl.de':
		case 'heilsteinwelt.de':
		case 'elektroversand-schmidt.de':
		case 'optikplus.de':
		case 'heldenlounge.de':
		case 'lignoshop.de':
		case 'wissenschaft-shop.de':
		case 'derkarton.net':
			return _sl('.modal[style*="block"] #saveCookieSelection');

		case 'tvmalbork.pl':
		case 'jelenia.tv':
			return _sl('#rodoModal[style*="block"] .btn-success');

		case '6play.fr':
			e = _sl('body[style*="hidden"] > div > aside .is-primary:first-child');
			if (e) setTimeout(function(){e.click();}, 1000);
			return e;

		case 'canaldigital.se':
		case 'canaldigital.no':
			return _sl('.cookieconsentv2--visible .js-accept-cookies-btn');

		case 'tarifcheck.de':
		case 'check24.net':
			return '.modal--show .btn[data-cookie-save-settings]';

		case 'henschel-schauspiel.de':
			e = _sl('#approveform .arrlink');
			if (e) _id('cconsentcheck').click();
			return e;

		case 'gsk-gebro.at':
		case 'voltadol.at':
			return _sl('.cookie-banner--visible .cookie-banner__button--accept');

		case 'restaurant-kitty-leo.de':
		case 'dieallianzdesguten.com':
			return _sl('main ~ div a[draggable]');

		case 'dpam.com':
		case 'sylvania-automotive.com':
			return _sl('#consent-tracking[style*="block"] .decline');

		case 'silentmaxx.de':
		case 'allfirewalls.de':
			return _sl('#trocookie-cookiebox[style*="block"] button:last-child');

		case 'auchan.hu':
		case 'auchan.pl':
			return _sl('.cookie-modal__button--accept');

		case 'inp-gruppe.de':
		case 'altoetting.de':
			return '#colorbox[style*="block"] .js_cm_consent_essentials_only';

		case 'alpin-chalets.com':
		case 'frischteigwaren-huber.de':
			return _sl('.overlay.active[data-overlay="privacy"] .overlay_close');

		case 'campusjaeger.de':
			e = _sl('.ReactModal__Overlay--after-open');
			return (e && _ev("h4[contains(., 'Cookies')]") ? _sl('button + button', e) : false);

		case 'oxxio.nl':
			e = _sl('.c-modal__content--after-open');
			return (e && _ev("span[contains(., 'cookiebeleid')]", e) ? _sl('button', e) : false);

		case 'monheim.de':
		case 'maengelmelder.de':
		case 'xn--mngelmelder-l8a.de':
			return _sl('.v--modal-overlay[data-modal="cookie-consent"] .btn-primary');

		case 'womex.com':
		case 'piranha.de':
			return _sl('.modal[style*="block"] #accept-cookies-all');

		case 'datenlogger-store.de':
		case 'kaminofen-shop.de':
		case 'nova-motors.de':
			return _sl('.amgdprcookie-modal-container._show .-save');

		case 'direct.de': return _chain('.amgdprcookie-bar-template .-settings', '.amgdprcookie-done');

		case 'sofatutor.ch':
		case 'sofatutor.at':
		case 'sofatutor.com':
			e = _sl('.reveal-overlay[style*="block"] .tracking-consent-popup .js-customize');
			if (e) e.click();
			return _sl('.reveal-overlay[style*="block"] .tracking-consent-customization-popup .js-accept-selected');

		case 'lumeo.chip.de':
		case 'dell-xps.chip.de':
		case 'puiklokaal.nl':
			return _sl('#cookie-wall .buttons-wrapper > div:last-child .im-button');

		case 'fiftysix.nl':
			e = _id('cookie_advertising--false');
			if (e) e.click();
			return _sl('.cookiePopup .bttn');

		case 'openjobmetis.it':
			e = _id('cookie_msg');
			if (e) e.className += " idcac";
			return e;

		case 'kinopolis.de':
		case 'mathaeser.de':
		case 'gloria-palast.de':
			return _sl('#consent[style*="block"] #accept-selected-button');

		case 'wittgas.com':
		case 'malighting.com':
		case 'stahlportal.com':
			return _sl('.cs-cookie__open .js-save-cookie-settings');

		case 'mazda-autohaus-schwenke-duisburg.de':
		case 'mazda-autohaus-schreier-biebergemuend-bieber.de':
		case 'mazda-autopark-rath-duesseldorf.de':
			return _sl('button[name="Akzeptieren"]');

		case 'famobi.com':
		case 'html5games.com':
			return _sl('.consent-box-holder:not([style*="none"]) .consent-box-button');

		case 'sourceforge.net':
		case 'sudoku-aktuell.de':
			return '#cmpbox[style*="block"] .cmpboxbtnsave';

		case 'webfail.com': return '#cmpbox[style*="block"] .cmpboxbtnno';

		case 'bafin.de':
		case 'onlinezugangsgesetz.de':
			return _sl('.mfp-ready #cookiebanner .js-close-banner');

		case 'elrongmbh.de':
		case 'esv-schwenger.de':
			return _id('cookie_opt_in_btn_basic');

		case 'vom-achterhof.de':
		case 'motorsportmarkt.de':
		case 'espadrij.com':
		case 'schutzhuellenprofi.de':
			return '.cookie--popup[style*="block"] .cookie--preferences-btn';

		case 'modellbau-metz.com':
		case 'huss-licht-ton.de':
		case 'd-power-modellbau.com':
			return _id('cookie_all_accept');

		case 'allelectronics.com':
		case 'dellrefurbished.com':
			return _sl('#simplemodal-container #cookie-consent-accept');

		case 'targeo.pl':
			e = _sl('body > div > div > span > a[href*="regulamin"]');
			return (e ? e.parentNode.nextSibling.firstChild : false);

		case 'centogene.com':
		case 'leica-microsystems.com':
			return _sl('.modal[style*="block"] #cookie-settings-btn-apply');

		case 'husqvarna-bicycles.com':
		case 'r-raymon-bikes.com':
			return _sl('universal-cookie-consent .ucc-button--primary');

		case 'strawpoll.me':
		case 'fandomauth.gamepedia.com':
			return _sl('body > div > [data-tracking-opt-in-overlay] [data-tracking-opt-in-accept]');

		case 'dlawas.info':
		case 'infostrow.pl':
		case 'halowawa.pl':
			return _sl('.modal[style*="block"] .btn-rodo-accept');

		case 'baer-schuhe.de':
		case 'baer-shoes.com':
			return _chain('.modal[style*="block"] #cookieConsentGroupHeader2 .switch-slider', '#cookieConsentGroupHeader3 .switch-slider', '#cookieConsentGroupHeader4 .switch-slider', '#cookieConsentAcceptButton');

		case 'swisse.nl':
			return _chain('.modal[style*="block"] #cookieConsentGroupHeader2 .switch-slider', '#cookieConsentGroupHeader3 .switch-slider', '#cookieConsentGroupHeader4 .switch-slider', '#cookieConsentGroupHeader5 .switch-slider', '#cookieConsentAcceptButton');

		case 'radonline.de':
			return _chain('.modal[style*="block"] #cookieConsentGroupHeader2 .switch-slider', '#cookieConsentGroupHeader3 .switch-slider', '#cookieConsentGroupHeader4 .switch-slider', '#cookieConsentGroupHeader5 .switch-slider', '#cookieConsentGroupHeader6 .switch-slider', '#cookieConsentAcceptButton');

		case 'keimling.de':
		case 'arctic.ac':
		case 'arctic.de':
		case 'skapetze.com':
		case 'migros-shop.de':
		case 'messmer.de':
			return '.modal[style*="block"] #cookieConsentAcceptButton';

		case 'meble-4you.pl':
		case 'roztoczanskipn.pl':
			return _sl('#rodo-modal[style*="block"] .btn-primary');

		case 'oneal.eu':
		case 'oneal-b2b.com':
			return _sl('#cookie_settings:not([style*="none"]) .button2');

		case 'binance.com':
			e = _sl('#__APP ~ div > div > a[href*="privacy"]');
			return (e ? e.parentNode.nextSibling : false);

		case 'volleybal.nl':
		case 'vitesse-waterontharder.com':
			return _sl('.show-cookie-overlay .js-save-all-cookies');

		case 'danskebank.dk':
		case 'danskebank.se':
		case 'danskebank.no':
		case 'danskebank.fi':
		case 'danskebank.co.uk':
		case 'danskeci.com':
		case 'danicapension.dk':
		case 'danica.no':
			return _sl('.cookie-consent-banner-modal:not([style*="none"]) #button-accept-necessary, .cookie-consent-banner-modal:not([style*="none"]) #button-accept-all');

		case 'webdamdb.com':
			e = _sl('.cookie-save-btn');
			if (e) {_id('cookie-cat-0').click(); _id('cookie-cat-1').click();}
			return e;

		case 'quooker.de':
		case 'quooker.be':
			return _sl('#cookie_wrapper:not([style*="none"]) .cookie_close');

		case 'lepona.de':
		case 'foxxshirts.de':
		case 'textil-grosshandel.eu':
			return _sl('#gdpr[style*="block"] a[onclick*="gdprform"]');

		case 'hot.at':
		case 'ventocom.at':
			return _sl('.modal[style*="block"] .js-saveAllCookies');

		case 'fdp.de':
		case 'freiheit.org':
		case 'freie-demokraten.de':
		case 'fdp-rlp.de':
		case 'fdpbt.de':
		case 'stark-watzinger.de':
			return '#uv-gdpr-consent-necessary-form #edit-submit--2';

		case 'bing.com':
			e = _id('bnp_btn_preference');
			if (e) e.click();
			return _sl('#cookie_preference[style*="block"] .mcp_savesettings a');

		case 'urgibl.de':
		case 'bruns.de':
		case 'kunzbaumschulen.ch':
		case 'gartencenter-seebauer.de':
		case 'rammes-gruenland.com':
		case 'gartencenter-bergerhoff.de':
		case 'tomgarten.de':
		case 'mauk-gartenwelt.de':
		case 'pflanze2000.de':
		case 'floragard.de':
			return _sl('#CookieMessage[style*="block"] #SaveBtnnn');

		case 'clargesmayfair.com':
		case 'kingstoncentre.co.uk':
			return _sl('.gdpr-cookie-control-popup.fancybox-is-open .consent-required');

		case 'fichier-pdf.fr':
		case 'petit-fichier.fr':
		case 'pdf-archive.com':
			return _sl('#ModalCookies[style*="block"] .btn');

		case 'shirtlabor.de':
		case 'bit-electronix.eu':
		case 'berndes.com':
		case 'steingemachtes.de':
		case 'moebel-fundgrube.de':
		case 'wuerdinger.de':
		case 'fafit24.de':
			return _sl('.offcanvas.is-open .js-offcanvas-cookie-submit');

		case 'ep.de':
		case 'medimax.de':
			return _sl('.cookielayer-open .cookies-overlay-dialog__save-btn');

		case 'gva.be':
		case 'talktalk.co.uk':
			return _sl('.cookie-banner button');

		case 'jankarres.de':
		case 'devowl.io':
		case 'wp-ninjas.de':
		case 'der-windows-papst.de':
		case '4kfilme.de':
		case 'marketing-zauber.de':
		case 'tvfindr.com':
		case 'drweb.de':
		case 'cruisetricks.de':
		case 'maniac.de':
		case 'faminino.de':
		case 'resistance-mondiale.com':
		case 'mmo-sankar.de':
		case 'noobguides.de':
		case '56aktuell.de':
		case 'sbb-deutschland.de':
		case 'audiovision.de':
		case 'corona-reframed.de':
		case 'objektiv-berater.de':
		case 'onair-appbuilder.com':
		case 'ittweak.de':
		case 'etf1.de':
			e = _sl('body > div[style*="block"] div[id^="bnnr-body-rightSide"] > div:nth-of-type(3)');
			return (e ? e.previousSibling.firstChild : _sl('body > div[style*="block"] div[id^="bnnr-body-rightSide"] > div'));

		case 'karenmillen.com':
		case 'boohooman.com':
		case 'warehousefashion.com':
			return _sl('.cookie_hint_gdpr .visible .js-accept-all-button');

		case 'toni-maccaroni.de':
		case 'pizza-pepe-volkach.de':
			return _sl('.fancybox-opened .cookiemessage .button');

		case 'bundesanzeiger.de':
		case 'unternehmensregister.de':
			return _sl('#cc[style*="block"] #cc_banner > .cc_commands .btn');

		case 'leireg.de': return _sl('#cc[style*="block"] #cc_dialog_1 .btn-primary');
		case 'publikations-plattform.de': return _sl('#cc[style*="block"] #cc_banner > .cc_commands .button input');

		case 'gov.lv':
		case 'riga.lv':
			return _sl('#cookieConsent .cookie-accept');

		case 'fortune.com': return '#truste-consent-track[style*="block"] #truste-consent-required';

		case 'forbes.com':
		case 'formula1.com':
			return '#truste-consent-track[style*="block"] .trustarc-manage-btn';

		case 'sixt-neuwagen.de':
		case 'sixt-leasing.de':
			return _sl('.coo button:first-child, pl-button[data-e2e="cookie-agree-all"]');

		case 'badewanneneinstieg.at':
		case 'bgvbruck.at':
			return _sl('._brlbs-btn[data-borlabs-cookie-unblock]');

		case 'jk-sportvertrieb.de':
		case 'loebbeshop.de':
		case 'werkzeughandel-roeder.de':
		case 'trendmedic.de':
			return _sl('#cookie-manager-window[style*="block"] #accept-selected');

		case 'pasteleria-jr.es':
		case 'esquinarayuela.es':
		case 'electronieto.es':
		case 'asociacion-domitila.es':
		case 'tasaciones-rasal-perytec.com':
		case 'cafeszaidin.es':
			return _sl('.cookies-modal[style*="block"] .cookies-modal-config-button-save');

		case 'buchbinder.de':
		case 'draco.de':
			return _sl('.modal-open #cookieSettings .cookie-settings__submit');

		case 'hetwkz.nl':
		case 'umcutrecht.nl':
			return _sl('#cookieConsent .button[data-cookie*="yes"]');

		case 'campingwiesenbek.de':
		case 'festivo.de':
			return _sl('#cockieModal[style*="block"] .btn');

		case 'technomarket.bg': return _sl('tm-terms-settings button.mat-primary');
		case 'av-atlas.org': return _sl('gdpr-bottom-sheet .mat-primary');
		case 'akelius.com': return _sl('web-cookie-manager-dialog .mat-primary');


		case 'haix.de':
		case 'notebooksbilliger.de':
			return _id('uc-btn-accept-banner');

		case 'shop.mercedes-benz.com': return _id('uc-btn-deny-banner');
		case 'mercedes-benz.nl': return _sl('.missing-consent-placeholder .accept-consent');

		case 'eam.de':
		case 'eam-netz.de':
			return _sl('.om-cookie-panel.active .button_save');

		case 'jeugdbrandweer.nl':
		case 'solvo.nl':
			return _sl('.cookiewall .button');

		case 'boerse-stuttgart.de':
		case 'traderfox.com':
		case 'finanzen.net':
			return _id('tfcookie-accept-selected');

		case 'knative.dev':
		case 'porto.pt':
			return _sl('#cookieModal[style*="block"] .btn[onclick*="accept"]');

		case 'foodengineeringmag.com':
		case 'pcimag.com':
		case 'assemblymag.com':
		case 'securitymagazine.com':
			return _sl('.gdpr-policy ~ form[action*="gdpr-policy"] .button[value="Accept"]');

		case 'huber.de':
		case 'freudenberg.com':
			return _sl('.cookie-consent--present .cookie-consent:not(.cookie-consent--hidden) .jsCookieAccept');

		case 'xiaomiromania.com':
		case 'sabinastore.com':
			return _sl('.fancybox-opened .cp-accept');

		case 'dat.de':
		case 'daa.de':
			return _sl('#cookienotice_box.initialised #cookienotice_box_close');

		case 'vorteilshop.com':
		case 'personalshop.com':
			return _sl('.modal[style*="block"] .btn[onclick*="cookiebanner/speichern"]');

		case 'slagelse.info':
		case 'personalideal.de':
			return _sl('.hustle-show .hustle-optin-mask ~ .hustle-popup-content .hustle-button-close');

		case 'videoload.de':
		case 'magentatv.de':
			return _id('OVERLAY-CONFIRM');

		case 'traxmag.com':
		case 'generation-s.fr':
			return _sl('.popin-overlay--cookie.show .btn.accept');

		case 'altibox.no':
		case 'dvdoo.dk':
			return '#coiOverlay[style*="flex"] #coiPage-2 .coi-banner__accept';

		case 'babysam.dk':
		case 'minaftale.dk':
			return '#coiOverlay[style*="flex"] #declineButton';

		case 'modrykonik.sk':
			e = _sl('.redux-toastr + div a[href*="cookie-policy"]');
			return (e ? e.parentNode.nextSibling : false);

		case 'amway.it':
		case 'amway.es':
			return _sl('.amw-dialog-wrapper--visible button[class*="cookies-popup---saveAndClose"]');

		case 'eversports.de':
		case 'eversports.fr':
		case 'eversports.at':
		case 'exali.de':
			return _sl('.modal[style*="block"] #confirmSelection');

		case 'gp-tuning.at':
		case 'chiptuning-express-tirol.at':
			return _sl('#dsgvo-cookie-popup .accept');

		case 'dawonia.de':
			e = _sl('.cookie-overlay-open #necessaryCookies');
			if (e) e.click();
			return _sl('.cookie-overlay-open .btn-cookie');

		case 'e-wie-einfach.de':
		case 'e-wie-einfach.at':
			return _sl('.js_modal_cookie[style*="block"] .js_btn_set_specific');

		case 'quorn.co.uk':
		case 'quorn.ch':
		case 'quorn.se':
		case 'quorn.ie':
		case 'quorn.nl':
		case 'quorn.be':
		case 'quorn.dk':
		case 'quorn.no':
		case 'quorn.fi':
			return _sl('.cmp-btn[onclick*="save"]');

		case 'vsninfo.de':
		case 'stadtwerke-weilburg.de':
			return _sl('#cookiehinweis .deny');

		case 'akkushop.de':
		case 'akkushop-austria.at':
		case 'akkushop-schweiz.ch':
		case 'batterie-boutique.fr':
			return '.is--open .cookie-consent--save-button';

		case 'schulze-immobilien.de':
		case 'harry-gerlach.de':
			return _sl('#cookie-banner #level1');

		case 'provostvet.co.uk':
		case 'myfamilyvets.co.uk':
			return _sl('.consent-wrapper.show button[id*="accept"]');

		case 'sonofatailor.com':
			e = _sl('.ui-soat');
			return (e ? _ev("a[contains(., 'Accept and Continue')]", e) : false);

		case 'bricoman.fr':
		case 'bricomart.es':
			return _sl('.cookie-accept .q-btn[data-cy*="accept"]');

		case 'tme.eu':
		case 'tme.com':
			return _sl('.o-modal-wrapper--active .c-rodo-modal__footer-button');

		case 'ferchau.com':
		case 'able-group.de':
			return _sl('.modal .cookie__buttons button[type="submit"]');

		case 'masmovil.es':
		case 'masmovil.com':
			return _sl('.MuiDialog-root button[data-hook="cookies-modal-btn-accept-all"], .gmm-cookies.basic .gpb-accept-all');

		case 'lizak-partner.at':
		case 'z-immobilien.at':
			return _sl('.modal[style*="block"] .gdpr-accept-selected');

		case 'penny.hu':
		case 'penny.cz':
			return _sl('.modal[style*="block"] #cookie-consent-button');

		case 'pdfforge.org':
			e = _ev("span[contains(., 'Accept all')]");
			return (e ? e.parentNode : e);

		case 'mydealz.de':
		case 'dealabs.com':
		case 'hotukdeals.com':
		case 'preisjaeger.at':
		case 'chollometro.com':
		case 'pepper.com':
		case 'pepper.it':
		case 'pepper.pl':
			return '.popover--oreo-message.popover--visible button[data-t-a*="continueWithoutAccepting"]';

		case 'karriere-jet.de':
		case 'bewerbung-tipps.com':
			return _chain('.fancybox-is-open #cookie-permission--configure-button', '.fancybox-is-open #setcookiepermissions button');

		case 'compravo.de':
		case 'perpedale.de':
			return _sl('#newCookieJar:not([style*="none"]) .button_default');

		case 'kupbilecik.pl':
		case 'kupbilecik.de':
		case 'kupbilecik.com':
			return _chain('.remodal-is-opened #cookie-custom', '.remodal-is-opened #cookie-save');

		case 'uniroyal.pl':
		case 'uniroyal.de':
		case 'barum-reifen.de':
		case 'continental-reifen.de':
			return _chain('.is-cookiebanner-visible .ci-cookie-link', '.is-settings-view .js-cookie-accept');

		case 'c-dating.fr':
		case 'singles50.it':
		case 'be2.it':
			return _sl('.ipx_cookie_overlay:not([style*="none"]) button, #cookie-consent-overlayer-v2:not([style*="none"]) button');

		case 'rubberduckvba.com':
		case 'leaseweb.com':
			return _sl('.modal[style*="block"] #acceptCookies');

		case 'cashper.de':
		case 'money2gocard.de':
			return _sl('.cookie-modal[style*="block"] .btn-primary');

		case 'hagengrote.de':
		case 'hagengrote.at':
			return _sl('.modal[style*="block"] #cookieStart .btn-primary');

		case 'patreon.com':
			e = _sl('div[aria-live="polite"] a[href*="policy/cookies"]');
			return (e ? _parent(_parent(_parent(_parent(e)))).nextSibling.firstChild : e);

		case 'rtl.hr':
		case 'fernsehserien.de':
		case 'bbc.com':
			return '.fc-consent-root .fc-confirm-choices';

		case 'juhu.auto':
			e = _sl('#overlayOuter[style*="block"]');
			return (e ? _ev("button[contains(., 'Alle ablehnen')]", e) : false);

		case 'hoyavision.com':
		case 'kino.dk':
			return _id('CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll');

		case 'the-germanz.de':
		case 'iew.be':
		case 'quicktest.se':
			return _sl('.modal-cacsp-open .modal-cacsp-btn-save');

		case 'veiligverkeer.be':
		case 'vsv.be':
			return _sl('.cookieconsent-active .btn.accept-necessary');

		case 'gold.de':
		case 'goldpreis.de':
		case 'formel-sammlung.de':
		case 'silber.de':
		case 'materialeducativomk.com':
		case 'apksmods.com':
			return '.force--consent.show--consent #cs_save__btn, .force--consent.show--consent #s-sv-bn';

		case 'workwise.io':
			e = _sl('.ReactModal__Overlay--after-open');
			return (e && _ev("span[contains(., 'Alle akzeptieren')]", e) ? _chain('.ReactModal__Overlay--after-open button', '.ReactModal__Overlay--after-open button') : false);

		case 'rp-online.de':
		case 'volksfreund.de':
		case 'ga.de':
		case 'saarbruecker-zeitung.de':
			return _id('consentAccept');

		case 'moveyouroffice.io':
		case 'digital-affin.de':
		case 'chimpify.de':
			return _if('.chimpify-popup .content > a[href*="datenschutz"]', '.chimpify-popup .content > a[href^="jav"]');

		case 'heizoel24.de':
		case 'heizoel24.at':
			return _sl('.modal[style*="block"] button + a[href*="cookies"], #save-cc');

		case 'yle.fi':
		case 'webscale.fi':
			return _chain('.ycd-consent-buttons__select-consents', '.ycd-consent-buttons__accept-selected');

		case 'rueducommerce.fr':
		case '3suisses.fr':
			return _chain('.modal.is-open #rgpd-btn-index-parameters', '#rgpd-frequentation-no', '#rgpd-marketing-no', '#rgpd-personnalization-no', '#rgpd-btn-parameters-choices');

		case 'senec.com':
		case 'taschenhirn.de':
		case 'pyroweb.de':
			return _chain('.cookie-notice .cm-link', '.cm-btn-accept');

		case 'autopunkt.pl':
		case 'euromobil.com.pl':
		case 'euromotor.pl':
		case 'koreamotors.pl':
		case 'japanmotors.pl':
		case 'pgd.pl':
		case 'eforia.pl':
			return _chain('#modal-cookies[style*="block"] + #modal-cookies-settings input[name="cookie-analytics"]', 'input[name="cookie-remarketing"]', '.cookie-adv-save', '#modal-cookies[style*="block"] .cookie-save');

		case 'globaldata.pt':
		case 'noblechairs.de':
		case 'noblechairs.fr':
			return _sl('.ck-user-cookie-consent-modal #js-save-cookie-settings');

		case 'burton.co.uk':
		case 'dorothyperkins.com':
			return _sl('#consent-dialog.m-visible .b-notification_panel-step_second button');

		case 'nablawave.com':
		case 'mediaset.it':
			return '.iubenda-cs-accept-btn';

		case 'mediakits.com':
		case 'investmentpunk.academy':
		case 'ptvtelecom.com':
		case 'vulkansauna.de':
			return _sl('.elementor-popup-modal:not([style*="none"]) .elementor-button[href*="settings"]');

		case 'tameteo.nl':
		case 'tameteo.com':
		case 'meteored.com.ec':
		case 'tempo.com':
		case 'tiempo.com':
		case 'daswetter.com':
		case 'daswetter.at':
			return _chain('#sendSetGdpr', '.consent-reject', '.save.enabled');

		case 'translit.ru':
		case 'translit.net':
			return _sl('.tPechenkiInfoblock input[onclick*="nocookies"]');

		case 'anacondastores.com':
		case 'spotlightstores.com':
			return '.modal[style*="block"] .cookie-notify-closeBtn';

		case 'adtipp.de':
		case 'handelsregister.de':
			return _sl('#cookie-popup button[onclick*="cookieOk"]');

		case 'mega.io':
		case 'mega.nz':
			return _sl('.cookie-dialog:not(.hidden) .save-settings');

		case 'benify.se':
		case 'benify.com':
			return _chain('.modal[style*="block"] a[onclick*="showAdvancedCookieSettings"]', '.modal[style*="block"] .btn[onclick*="saveCookieConsentSettings"]');

		case 'huk24.de':
		case 'huk.de':
			return _chain('.cookie-consent__button:first-child', '.cookie-consent__button[type="submit"]');

		case 'group.rwe':
		case 'rwe.com':
			return _sl('.cb--active .cb__button--select-lvl');

		case 'moebel.de':
			e = _ev("button[contains(., 'Einstellungen')]");
			if (e) e.click();
			return (e ? _ev("button[contains(., 'speichern')]") : false);

		case 'barzahlen.de':
			return '.cookie-notice-visible #cn-refuse-cookie';

		case 'check24.de': return '.c24-cc-visible a[onclick*="giveMarketingConsent"], .c24m-cc-visible a[onclick*="getConfiguredConsent"], .c24m-cc-visible a[onclick*="giveMarketingConsent"]';
		case 'reifen.check24.de': return _chain('.c24-cookie-config', '.c24-cookie-config');

		case 'vetzoo.se':
		case 'animail.se':
		case 'mustijamirri.fi':
		case 'musti.no':
			return _chain('#cookie_consent[style*="block"] #cookie_settings', '#submit_privacy_consent');

		case 'de.vanguard':
			e = _ev('button[contains(text(), "Cookies zulassen")]/following::button');
			if (e) e.click();
			return _sl('div[data-cy="CookieConsentDialog"] button[data-cy*="Accept"] ~ button');

		case 'deutsches-sportabzeichen.de':
		case 'oekolandbau.de':
			return _chain('.modal.show button[aria-controls="cookieman-settings"]', '[data-cookieman-save]');

		case 'kvno.de':
		case 'xetra-gold.com':
			return '.csm.-open[data-module="cookie-manager-dialog"] button[data-cookie-settings-manager="selectSelected"]';

		case 'aok.de': return _sl('.js-cookie-consent-popup-visible .js-cookie-consent-button-accept-selection');
		case 'meine.aok.de': return _chain('.modal.d-block .cookie-popup-page .btn-select', '.cookie-button-group .btn-primary');

		case 'onleihe.de':
		case 'onleihe.com':
			return '.cookiePopup[style*="block"] .privacyAcceptChoice';

		case 'dvag.de':
		case 'allfinanz.ag':
			return _chain('.dva-state-active .dva-m-cookie-overlay__btn--more-info', '.dva-state-active .dva-m-cookie-settings-overlay__btn--save');

		case 'arbeitsagentur.de':
			e = _sl('bahf-cookie-disclaimer, bahf-cookie-disclaimer-dpl3');
			e = e && e.shadowRoot ? e.shadowRoot : e;
			return (e ? _sl('.modal.in .ba-btn-contrast, .modal-open .ba-btn-contrast', e) : _sl('#cookieDialog[style*="block"] .ba-btn-contrast'));

		case 'clark.de':
			e = _sl('cms-webpage');

			if (e && e.shadowRoot)
			{
				e = _sl('cookie-banner', e.shadowRoot);

				if (e && e.shadowRoot) {
					e = _sl('site-button', e.shadowRoot);
					e.dispatchEvent(new Event("buttonClick", {bubbles:true}));
				}
			}

			return e && e.nodeName == 'SITE-BUTTON' ? e : _sl('button[class*="cookie-banner-opt-in"]');

		case 'rugbyworldcup.com':
		case 'world.rugby':
			return _ev('div[contains(@class, "tcf-cmp")][string-length(@class) > 40]//button[contains(@class, "reject")]');

		case 'premierleague.com': return _ev('div[contains(@class, "tcf-cmp")][string-length(@class) > 40]//button[contains(@class, "save-and-close")]');

		case 'sparda.de':
		case 'sparda-n.de':
		case 'sparda-bw.de':
		case 'sparda-hessen.de':
		case 'sparda-west.de':
			return '#cookieLayer:not([style*="none"]) #tmart-cookie-layer-choice';

		case 'wifi-ooe.at':
		case 'wifiwien.at':
		case 'wifi.at':
			return _chain('.modal[style*="block"] .js-cookie-overlay-trigger', '.modal[style*="block"] .js-cookie-finish:not([class*="dismiss"])');

		case 'video.corriere.it':
			e = _id('_cpmt-iframe');
			if (e) e.setAttribute('onclick', 'cpmt.accept();');
			return e;

		case 'seb.ee':
		case 'seb.lt':
			return '.seb-cookie-consent:not(.hidden) .accept-selected';

		case 'lalettrea.fr':
		case 'africaintelligence.fr':
			return '#modalCookieConsent[style*="block"] .btn-continue';

		case 'molcesko.cz':
		case 'slovnaft.sk':
			return _chain('.popup2-opened #gdpr1', '#gdprbtn');

		case 'fello.se':
		case 'telia.se':
			return _chain('#cookie-preferences-make-choice-button', '#cookie-preferences__confirm-button');

		case 'vw-shop-zubehoer.de':
		case 'audi-ingolstadt-shop.de':
		case 'erc-ingolstadt.de':
			return '#sf_cookie_button_select';

		case 'futurzwei.org':
			e = _sl('#cookie-consent:not([closed])', _sl('f2-app').shadowRoot);
			return (e && e.shadowRoot ? _sl('#disable', e.shadowRoot) : false);

		case 'portainer.io':
		case 'gitbook.io':
		case 'avaloniaui.net':
		case 'linuxserver.io':
		case 'rlxos.dev':
		case 'oxen.io':
		case 'extpose.com':
			return _if('#animatedComponent', '//div[@id="animatedComponent"]//span[text()="Reject all"]');

		case 'vergoelst.de':
		case 'dekkmann.no':
			return _chain('.ReactModalPortal div[class*="cookieConsent"] button:not([class*="accept"])', 'div[class*="cookieSettings"] button[class*="ghost"]');

		case 'tumblr.com':
			e = _sl('#cmp-app-container iframe');
			return (e ? _sl('.cmp__dialog-footer-buttons button.is-secondary', e.contentWindow.document) : e);

		case 'iltalehti.fi':
		case 'autotalli.com':
		case 'tekniikkatalous.fi':
		case 'mediuutiset.fi':
		case 'e-kontakti.fi':
		case 'tivi.fi':
		case 'kauppalehti.fi':
		case 'mikrobitti.fi':
		case 'uusisuomi.fi':
			return '#almacmp-modalConfirmBtn';

		case 'lokaleportalen.dk':
		case 'bostadsdeal.se':
			return '.modal-wrapper.shown form[action*="CookiesAgreement"] .button[name="UpdateSelected"]';

		case 'shop4nl.com':
		case '365games.co.uk':
			return '#xbcc_modal.uk-open ~ #xbcc_modal_customise .cookie-consent-submit';

		case 'grander.com':
		case 'membersuite.com':
			return '.cc-window:not(.cc-invisible) .cc-btn';

		case 'googlewatchblog.de':
		case '100giornidaleoni.it':
			return '.cmplz-blocked-content-container > .cmplz-accept-marketing';

		case 'thesettlersonline.com':
		case 'thesettlersonline.pl':
			return '#consentNotification .dark + .light';

		case 'essent.nl':
		case 'energiewonen.nl':
			return _chain('.modal[style*="block"] #cookie-statement-show-settings', '.modal[style*="block"] #cookie-statement-accept-cookies-1');

		case 'doordash.com': return '#cassie-widget[style*="block"] #cassie_reject_all_pre_banner';
		case 'dunelm.com': return _chain('div[data-testid="cookie-consent-modal"] button[data-testid*="settings"]', 'button[data-testid="cookie-consent-preferences-save"]');
		case 'vr.fi': return _chain('div[data-testid="cookie-consent-modal"] button[data-testid="settings"]', 'button[data-testid="CookieConsentSettings__updateButton"]');
		case 'iobroker.pro': return _ev('div[./div/p[text()="This website uses cookies"]]//button');
		case 'bonami.hu': return _if('body > div > div > div > p > a[href*="cookie-szabalyzat"]', '//p[./a[contains(@href, "cookie-szabalyzat")]]/following-sibling::a');
		case 'travelsupermarket.com': return _chain('.fixed[aria-describedby*="cookiePreference"] button + button', '.fixed[aria-describedby*="cookiePreference"] dialog > header ~ div > button:first-child');
		case 'hellojoko.com': return _if('div[aria-modal="true"]', '//div[text()="PERSONNALISER LES CHOIX"]', '//div[text()="ENREGISTRER MES CHOIX"]');
		case 'rocrivor.nl': return _if('#cookiewall[style*="block"]', '#id_third_party_cookies_1', '#cookiewall button');
		case 'pizzafan.gr': return '.modal[style*="block"] #cookieButtonsContainer .button[onclick*="rangeSetPolicy"]';
		case 'ivaucher.pt': return '#cookieConsentModal[style*="block"] .btn';
		case 'barcelonaled.fr': return '#cookieConsentModal[style*="block"] .btn';
		case 'argenta.be': return '#cookieConsentModal:not([aria-hidden]) #acceptCookiesBtn';
		case 'leoprinting.fr': return _chain('.modal[style*="block"] input[name="analyticsCookies"][value="no"]', '#cookieConsentModal[style*="block"] #saveButton');
		case 'verpackungsregister.org': return '#cookieConsentModal[style*="block"] .cookie-close-btn';
		case 'meinbildkalender.de': return '.modal[style*="block"] #cookieNotify .btn-secondary';
		case 'trasferirsiallecanarie.info': return _if('#idconsent[style*="block"]', '#cons_ena_stat', '#cons_ena_mark', '#do_consent_check');
		case 'daneurope.org': return '#cookie-consent-modal[style*="block"] button';
		case 'configure.bmw.ca': return _sl('.cookie-button.button-primary', _sl('con-overlay-cookies', _sl('con-overlay-logic', _sl('con-app').shadowRoot).shadowRoot).shadowRoot);		case 'bosch-diy.com': return '.BoschPrivacySettingsV2.is-open button[data-save-button]';
		case 'teacheconomy.de': return _chain('FLAG:UNIQUE', '.cookie-banner footer button + button', '.cookie-banner footer button + button');
		case 'h24finance.com': return '.modal[style*="block"] .validate_disclmaier';
		case 'sevdesk.de': return '.cookie-banner .c-btn--secondary.cookie-button, .cookie-consent-modal[style*="block"] .btn[ng-click*="secondarySaveAction"]';
		case 'napster.com': return _if('.info_box[style*="block"] a[href*="cookies"]', '.info_box .close');
		case 'hunqz.com': return _if('.ReactModal__Content[aria-label*="cookies"]', 'FLAG:UNIQUE', '.ReactModal__Content button:not([id])', '.ReactModal__Content button:not([id])');
		case 'livevacancies.co.uk': return '.v-dialog__content--active .jk--cookie-msg-text button';
		case 'nuri.com': return '#cookie-consent-modal[style*="block"] button + button';
		case 'signalshares.com': return '.modal[style*="block"] [type="submit"][name="agreeCookies"]';
		case 'losteria.de': return '.cookies-information-modal[style*="block"] ~ .modal .btn[data-rel="cookies-accept-choise"]';
		case 'augen-lasern-vergleich.de': return '#alvconsent-selection-box .btn-link';
		case 'caseking.de': return _chain('.consent-modal #settings-button', '.consent-modal #save-button');
		case 'wgv.de': return '#cookie_overlay[style*="block"] .button';
		case 'ditzozorg.nl': return '.c-asr-cookie-bar__button';
		case 'kisailu.net': return '.cdk-overlay-container app-dialog-privacy button + button';
		case 'ouedkniss.com': return '.v-dialog--active a[href*="cookies"] ~ button';
		case 'familieretshuset.dk': return '.CookieDisclaimerButton + button';
		case 'catho.com.br': return _if('footer ~ [class*="Overlay"]', '//button[contains(., "Preferência de cookies")]', '//button[contains(., "Salvar")]');
		case 'allianz.de': return '.cdk-overlay-container #cookieModal .continueButton';
		case 'mkb.hu': return '.cookie-modal[style*="block"] button[ng-click="$ctrl.submit()"]';
		case 'keldoc.com': return '.nehs-cookie-scroll-lock .nehs-cookie #ncc-reject';
		case 'kupplung.de': return _chain('#cookieNotice.uk-open a[data-target="settings"]', '#cookieSettings.uk-open a[data-target="save"]');
		case 'tldallas.com': return '#privacy-notice[style*="block"] > .hide-privacy-notice';
		case 'bdz.bg': return '#cookieWarning[style*="block"] .cw-close';
		case 'fintraffic.fi': return _if('div[role="presentation"]', '//div[@role="presentation"]//button[contains(., "Vain välttämättömät evästeet")]');
		case 'allegro.pl': return _chain('.opbox-sheet button[data-role="accept-consent"] + button', 'button + button[data-role="accept-consent"]');
		case 'sncf.com': return 'div[class*="CookieModal"] button:nth-child(2)';
		case 'pikolinos.com': return '#cookieBlock.is-open ~ #cookiesModal #saveCookie';
		case 'pzu.pl': return '#cookie-consent-banner:not(.hide) a[onclick*="advancedSettingsSaved"]';
		case 'royalmail.com': return _if('.MuiDialog-root a[href*="cookie"][href*="policy"]', '.MuiDialog-root button');
		case 'gunfinder.de': return _chain('.modal[style*="block"] .btn[data-action="click->cookies#more"]', '.btn[data-action="click->cookies#decline"]');
		case 'century21.fr': return '.has-cookie-banner .js-the-cookie-button[data-actions="deny-all, save"]';
		case 'skuola.net': return '.iubenda-cs-visible .iubenda-cs-accept-btn, #cookie-banner.show #cookie-banner-close';
		case 'ubereats.com': return 'div[data-baseweb="toaster"] a[data-tracking-name="cookie-banner-gdpr-opt-out"]';
		case 'investify.com': return _if('.MuiDialog-root', '//button[contains(., "Nur ausgewählte Cookies übernehmen")]');
		case 'modivo.gr': return _chain('#marketing-approvals .tertiary', '#psb_footer_cookies_policy', '.modal-footer .secondary');
		case 'bascom-kameras.de': return '.jscb-card-deny';
		case 'lego.com': return 'button[class*="CookieConsent"] + button, button[data-test="cookie-necessary-button"]';
		case 'ogulo.com': return '.cdk-overlay-container #cookie--essentials';
		case 'nsinternational.com': return _chain('.t-cookie-overlay__modal__footer__adjust-options', '.t-cookie-overlay__modal__footer__save');
		case 'aktin.cz': return '.mw--slide-alert[id*="cookie"] a[href*="accept"]';
		case 'videogameschronicle.com': return _chain('.ccc-notify-buttons .ccc-notify-link', '.optional-cookie:first-child input', '#ccc-close');
		case 'postfinance.ch': return _if('.cookie_consent_banner:not(.is-hidden)', '#input_analyse', '#input_marketing', '.cookie_consent_banner--modal-accept');
		case 'schuurman-schoenen.nl': return '.show-modal .btn-select-cookies';
		case 'flaschenpost.de': return _if('.fp_modal', '//button[text()="Weitere Einstellungen"]', '.cc_footer .ghost_button');
		case 'cornelsen.de': return _chain('.cvcm-consent-settings__bar dkp-link-button[class*="more"]', '.cvcm-cookie-consent-settings-detail__footer-button:first-child');
		case 'bitbrain.com': return _sl('.eu-cookie-compliance-banner-wrapper[style*="block"] .accept-cookies');
		case 'otpbank.ro': return '.eu-cookie-compliance-banner .agree-button';
		case 'e-shelter.de': return '#sliding-popup .agree-button';
		case 'anadibank.com': return _chain('.eu-cookie-compliance-banner .find-more-button', '.save-preferences-cookies');
		case 'conradconnect.com': return '.cookie-agreement-popup.active #cookie-save-button';
		case 'euroimmun.de': return '.mfp-ready .popup-modal-optin';
		case 'libelium.com': return '.gdprshow #cookie_action_reject';
		case 'excellent-hemd.de': return '.modal[style*="block"] .btn[name="consent_cookie"][value="decline"]';
		case 'smartpost.ee': return '#cookieConsent[style*="block"] .save';
		case 'auszug.at': return '#cookieConsent[style*="block"] .btn-secondary';
		case 'bayern.de': return '.modal[style*="block"] .cookie-footer .btn-danger';
		case 'atresplayer.com': return 'sibbo-cmp-layout a[data-accept-all]';
		case 'frisco.pl': return _chain('.cookies-consents_actions .secondary', '.cookies-consents_actions .comfort');
		case 'ecoplus.at': return '.modal[style*="block"] .cookie-overlay-list .btn';
		case 'micronfrance.fr': return '.lpsgdprcookie-active .lpsgdprcookieallrejectlink';
		case 'marc-o-polo.com': return '.overlay--opened #button-use-all-cookies';
		case 'jeremylikness.com': return '.modal[style*="block"] #consentOptOut';
		case 'sberbank.si': return '.cookiesModal[style*="block"] .btn[data-name="button-allow"]';
		case 'openreach.com': return '.cookie-popup-show .button-save-prefs';
		case 'autoglass.co.uk': return '#dialog[aria-hidden="false"] #button_confirm_advanced';
		case 'max-academy.de': return _if('.MuiDialog-root a[href*="privacy"]', '.MuiDialog-root button + button');
		case 'centauro.com.br': return _ev('div[./span[text()="Nós respeitamos sua privacidade"]]/following-sibling::button');
		case 'smallpdf.com': return _chain('//div[@id="app"]/div/div/div[./div[contains(text(), "cookies")]]/following-sibling::div/button[2]', '//div[@id="app"]/div/div/div[./div[contains(text(), "cookies")]]/following-sibling::div/button[1]');
		case 'metapop.com': return '.modal-cookie-consent ui-button[ng-click*="accept"]';
		case 'telia.lt': return _chain('.modal[style*="block"] .js-cookie-modal-settings', '.js-cookie-modal-confirm');
		case 'burton.com': return '.gdpr-lightbox.opened .js-accept';
		case 'adrecord.com': return _chain('#cookie-disable a[data-target*="Modal"]', '.modal[style*="block"] #allCookies', '.modal[style*="block"] .btn-secondary');
		case 'bbvaapimarket.com': return '#cookieModal:not(.hidden) #saveConfigCookies';
		case 'dominospizza.pl': return '.cookies-visible .m-Cookies .closePopup';
		case 'visitmalta.com': return _if('.jet-popup--show-state a[href*="cookie-policy"]', '.jet-popup--show-state .jet-popup-action-button a');
		case 'xn--bafa-frderung-nmb.de': return '.modal[style*="block"] .MehrEinstellungenCC[onclick*="nein"]';
		case 'draeger.com': return _chain('.cookie-consent .settings', '.cookie-consent .button.secondary');
		case '2ip.io': return _chain('.consent__notice .notice__container__settings', '#app-item-googleAnalytics', '.cm-btn-accept');
		case 'mydpd.at': return _chain('#cookieModal[style*="block"] #cookies_settings', '#cookies_settings');
		case 'smule.com': return _chain('//button[text()="Manage Cookies"]', '//button[text()="Confirm My Choices"]');
		case 'gibgas.de': return '.modal[style*="block"] button[onclick="Cookies.save()"]';
		case 'host-unlimited.de': return _chain('div[class*="MuiPaper-root"] a[href*="/privacy"] + button', 'div[class*="MuiPaper-root"] li:last-child label', 'div[class*="MuiPaper-root"] a[href*="/privacy"] + button');
		case 'moncompteformation.gouv.fr': return _if('.cdk-overlay-container', '//button[./span[contains(text(), "Tout refuser et fermer")]]');
		case 'tommy.com': return _chain('.ReactModal__Overlay--after-open .cookie-notice button[data-testid="show-more-button"]', '.ReactModal__Overlay--after-open .cookie-notice .cookie-notice__more-button');
		case 'treasure.cloud': return '.cdk-overlay-container #manage-cookie-action + button';
		case 'xing.com': return _chain('#consent-settings-button', '#checkbox-accept-button');
		case 'metro.pe': return _if('.swal2-shown', '//button[text()="Configuración de Cookies"]', '//button[text()="Solo las funcionales"]');
		case 'mobrog.com': return '#overlay[style*="block"] #cookiesubmit';
		case 'amazon.com': return '#stencil-modal-body[data-test-id*="consent"] button';
		case 'grile-rezidentiat.ro': return _chain('.cookie-popup-modal[style*="block"] .btn[ng-click*="show_config"]', '.cookie-popup-modal[style*="block"] .btn[ng-click*="cookie_save()"]');
		case 'smashurandompicker.web.app': return _if('.swal2-show', '//div[contains(@class, "swal2-show")][//div[contains(text(), "cookies")]]//button[contains(@class, "cancel")]');
		case 'caimmo.com': return '#supi__overlay:not(.hide) #supi__dismiss';
		case 'weddyplace.com': return '.core-modal.open .cookie-accept-close';
		case 'uktv.co.uk': return '.cookie-notice #cookie-accept-link, .cookie-consent #cookie-agree';
		case 'yopmail.com': return '#cons-pop:not([style*="none"]) #necesary';
		case 'mitid.dk': return '#button-accept-cookie-policy';
		case 'edukatico.org': return '.cookie:not(.cookie-hidden) .js-cookie-save';
		case 'stromnetz.berlin': return '.show-cookie-disclaimer .js-acceptcookie .js-acceptselection';
		case 'emmi-kaltbach.com': return '.state-o-overlay--open .js-m-gpr-settings__custom-button';
		case 'foussier.fr': return _chain('.ReactModal__Content--after-open div[data-modal="cookie-consent"] .modal-footer a', '.ReactModal__Content--after-open div[data-modal="cookie-configure"] .modal-footer .btn-outlined');
		case 'radiomuseum.org': return '#cm[aria-hidden="false"] ~ #s-cnt #s-rall-bn';
		case 'salto.fr': return 'body > div[tabindex] button + a + button';
		case 'aviva.fr': return '.ccb-popin:not([style*="none"]) .ccb-popin-button:not([id])';
		case 'polarstern-energie.de': return '#cookie-consent-submit-button';
		case 'regionalimmobilien24.de': return 'div[class*="ftbox_cmd_1"] button';
		case 'santediscount.com': return _chain('.modalOmniphar-open .cmpt_customer--cookie--customize', '.cmpt-btn.as-secondary.as-sm');
		case 'leeway.tech': return '.cookie-warning .btn-primary';
		case 'get-in-engineering.de': return '.cookie-consent-modal[style*="block"] .btn-save';
		case 'depop.com': return _chain('button[data-testid*="manageCookies"]', 'button[data-testid="cookieModal__acceptButton"]');
		case 'routex.com': return '.modal-cookies.is-active .btn-optin';
		case 'storececotec.com': return _ev('button[./span[text()="Aceptar cookies"]]');
		case 'ozeaneum.de': return '.data-consent[open] button[value="accept"]';
		case 'sunderland.gov.uk': return '#cookie-consent-prompt.dialog--active .btn--cancel';
		case 'cualesmiip.com': return '.dc-cmp-ui-showing #dc-cmp-cancel';
		case '2ip.ru': return _chain('.notice__container__settings', '#app-item-googleAnalytics', '.cm-btn-accept');
		case 'handyhuellen.de': return _chain('#consent a[href*="preferences"]', '#consent a[href*="save"]');
		case 'sex.com': return '.sx-consent-to-cookies button';
		case 'linztourismus.at': return '#f__privacy-cookie-manager a[class*="accept-selection"]';
		case 'wasakredit.se': return '#integrity-modal[style*="block"] .btn[onclick*="acceptCustomized"]';
		case 'notaire.be': return '.c-bar--cookie[style*="block"] .js-cookie-button';
		case 'frp.no': return '.gdpr.active .gdpr__click--grey';
		case 'iol.im': return '.modal[style*="block"] #btnAcceptCookieLaw';
		case 'extract.pics': return _if('.fixed a[href*="privacy"]', '//button[./span[text()="Accept selected"]]');
		case 'modepark.de': return _if('.vex', '.vex .modal-dialog[data-init*="cookienotenotification"] .kmt-btn[href="#open"]', '.vex .modal-dialog[data-init*="cookienoteform"] .kmt-btn[href="#save"]');
		case 'ft.com': return '.mba-position-bottom-left[class*="show"] a[href*="cookies"] ~ div .mba-button-success';
		case 'quantifycrypto.com': return _if('.v-dialog--active', '//div[contains(@class, "v-dialog--active")][//a[contains(text(), "Cookies")]]//button');
		case 'kevag-telekom.de': return '#fullScreenLockBlockOverlayKp .notConfirmKp';
		case 'canva.com': return _if('body > div:not([id]) a[href*="cookie"]', '//button[//span[contains(text(), "cookie") or contains(text(), "Cookie")]]/following-sibling::button', '//div[@role="dialog"]//h3/following-sibling::button[last()] | //div[@role="dialog"]//h3/following-sibling::node()[last()]/button');
		case 'avcesar.com': return '.rgpdWarning[style*="block"] .rgpdAccept';
		case 'shopee.pl': return _ev('div[./h4[contains(text(), "cookie")]]//button');
		case 'sbk.org': return _chain('.cookie-layer--main.is-open #mmsCookieLayerSettingsButton', '.cookie-layer--settings.is-open #saveCookieSettings');
		case 'codeeurope.pl': return _chain('button[class*="noticeAccept"] + button[class*="noticeConfigure"]', 'button[class*="saveSettings"]');
		case 'i-motion.de': return '#cookieEinstellungen[style*="block"] span[name="selection"]';
		case 'dbschenker.com': return '.dialog--open button[data-reject-all-privacy-settings], es-privacy-modal button.secondary';
		case 'mirells.se': return _if('.v-dialog--active', '//div[contains(@class, "v-dialog--active")][//div[contains(text(), "tredjepartcookies")]]//button');
		case 'findamasters.com': return '#cookieModal[style*="block"] .btn';
		case 'lci.fr': return '#popin_tc_privacy_button_2';
		case 'skd.museum': return '.skd_cookie__dialog--open button[data-cookie-settings-manager="selectSelected"]';
		case 'buildup.group': return _ev('ngb-modal-window[contains(@class, "show")][//a[contains(@href, "privacypolicy")]]//div[@class="modal-body"]//button');
		case 'volleyball.nrw': return '.cookie-consent-wrap.fancybox-opened .btn[data-action*="save"]';
		case 'eperearstikeskus.ee': return '#page_privacy_footer.ui-page-active #page_privacy_footer_accept';
		case 'oscaro.com': return '.popin-cookie button[data-qa="cookie-block-refuse-btn"]';
		case 'domstol.se': return _ev('button[./span[text()="Acceptera nödvändiga cookies"]]');
		case 'lcp.fr': return _chain('.cookiesjsr-settings', '.cookiesjsr-service.group-video input', '.cookiesjsr-layer--actions .cookiesjsr-btn:nth-child(2)');
		case 'phase-6.de': return '#acceptAllCookies';
		case 'ima.it': return _chain('#cookieBanner[style*="block"] .showPrefs', '.acceptCookie');
		case 'statik.be': return '#cookiebanner[style*="block"] ~ div .js-modal-close';
		case 'pcorcloud.com': return '#rcc-decline-button';
		case 'communityfibre.co.uk': return '#rcc-confirm-button';
		case 'finanzchef24.de': return _if('aside[role="dialog"] img[alt*="cookies"]', 'aside[role="dialog"] a[href="#"]', 'aside[role="dialog"] div + button');
		case 'veikkaus.fi': return '.cookies-modal-overlay .necessary-cookies';
		case 'myunidays.com': return _chain('.js-cookie-banner-active .button.tertiary', '#Page_CookieSettings .js-save-preferences');
		case 'lush.com': return _chain('#portal-cookie-banner button:first-child', '#portal-cookie-banner ~ div[id^="portal"] footer button');
		case 'hl.co.uk': return _chain('.-cb-open #AOCookieToggle', '#TPCookieToggle', '#updateCookieButton');
		case 'liveagent.com': return '.Kolaciky.show .Kolaciky__button--yes';
		case 'polsatboxgo.pl': return _ev('span[text()="Nie, przejdź do serwisu"]/parent::node()');
		case 'ankerkraut.de': return '.cookies-banner[style*="flex"] button[onclick*="Decline"]';
		case 'porterbuddy.com': return _ev('div[contains(text(), "Vi benytter informasjonskapsler")]/following::node()/button[last()]');
		case 'qa-stack.pl': return '.modal[style*="block"] #cookies-accept';
		case 'prisma.de': return _ev('button[text()="Akzeptieren und weiter"]');
		case 'canto.com': return '.cc-notice .btn-light + .btn-light';
		case 'wu.ac.at': return '.cookie-notice-modal.in .save-cookie-settings';
		case 'animaute.fr': return _if('#cookie-modal1[style*="block"]', '#cookie-stats-refuse', '#cookie-ads-refuse', '#cookie-mesure-refuse', '#cookie-device-refuse', '#cookie-modal1');
		case 'simstime.net': return '#popup #accept_cookies';
		case 'frag.jetzt': return 'app-cookies .primary-confirm-button';
		case 'unitedutilities.com': return '.c-cookie-preferences.is-active .js-manage-panel .c-button-primary';
		case 'answear.ua': return _chain('span[class*="cookiesInfoBtnWrapperButton"]', 'span[class*="CookiesSettings__closePopUp"]');
		case 'robinhood.com': return _if('#__next > div a[href*="privacy"]', '#__next > div button');
		case 'chipsaway.co.uk': return '.cookie-modal-shown #disallowAllCookies';
		case 'scapino.nl': return '#cookies-component.is-active .button';
		case 'unicajabanco.es': return '.iframe-page .aceptarCookiesPrivada';
		case 'polsatgo.pl': return _ev('span[contains(text(), "Nie, przejdź do serwisu")]/parent::node()');
		case 'autohero.com': return _chain('button[data-qa-selector="cookie-consent-configure"]', 'button[data-qa-selector="cookie-consent-configure"]');
		case 'asfinag.at': return '#cookieOverlayModal.is-open .btn[data-no-cookies], #modalCookieInfo[style*="block"] button + button';
		case 'hondoscenter.com': return '#cookies-modal-id[style*="block"] .js-accept';
		case 'stec.es': return '#cookieModal[style*="block"] ~ div .aceptar_cookies_personalizadas';
		case 'dagvandewetenschap.be': return _chain('#cookiebanner:not(.hidden) .js-cookie-settings', '#cookieModal form ~ div .btn');
		case 'nerdstar.tv': return '.cookies #cookieok';
		case 'dwd.de': return '#cookiebanner .close';
		case 'premierinn.com': return '#manageCookieModal[style*="block"] #save-settings-button';
		case 'turn-on.de': return '#default-cookie-consent-banner[style*="block"] #cf-ccm-save-btn';
		case 'romeo.com': return _chain('.ReactModal__Content--after-open button[title="Cookie Settings"]', 'button[title="Save Settings"]');
		case 'mammut.com': return 'aside[class*="CookiePopup"][class*="visible"] div > button';
		case 'starlingbank.com': return _chain('button[data-testid="manageButton"][class*="CookieModal"]', 'button[class*="CookieModal"]:only-of-type');
		case 'direct-assurance.fr': return '._cc_bannerActive ._cc_banner_buttons ._cc_close:first-child';
		case 'diesiedleronline.de': return '#consentNotification .dark + button';
		case 'continental.com': return '.c-cookiebanner__visible .c-cookiebanner__settings-actions-submit';
		case 'mol.hu': return _chain('#modalCookie.is-visible .btn + .btn', '#modalCookie button:only-of-type');
		case 'benq.eu': return '.benq_cookiebar_modal._show .close-button';
		case 'apothekerkammer.at': return '.modal[style*="block"] .btn[data-gdcc-select="-"]';
		case 'poettinger.at': return '.mfp-ready a[onclick*="RejectCookie"]';
		case 'aion.eu': return '.cookies-notification.active #recommended-cookies';
		case 'onatera.com': return '#rgpd:not([class*="hidden"]) form .rgpd-button--green';
		case 'fulhamfc.com': return _if('.popup a[href*="cookie-policy"]', '.popup__button--decline');
		case 'biblioteka.wroc.pl': return '.cookies-gutter #cn-accept-cookie';
		case 'g-star.com': return '.blur-cookiewall-bg .js-cookieAccept';
		case 'mym.fans': return '.cookie.is-open #cookie-accept';
		case 'manutd.com': return '.cookie-policy-message[style*="block"] ~ .cookie-setting-message #cancel-btn';
		case 'softzone.es': return '.cl-consent-visible ~ div a[data-role="b_save"]';
		case 'vcu.edu': return '#notification-done-link';
		case 'schloss-gluecksburg.de': return '.consent-popup--dismiss';
		case 'paysend.com': return '.js__cookie_close_button';
		case 'armedangels.com': return _chain('.modal[style*="block"] .cookie-permission-configure-btn', '.js-offcanvas-cookie-submit');
		case 'idoctors.it': return '#modal-cookies[style*="block"] + .modal .btn[href*="conferma"]';
		case 'deadbydaylight.com': return '.full-privacy-popup[style*="block"] #refuse-full-gdpr-button';
		case 'ajax.nl': return _chain('#a_gebruikerservaring_refuse', '#b_e-mail_refuse', '#c_advertising_refuse', '#dySubmitConsent');
		case 'rackstore.be': return '.cdk-overlay-container app-dialog-cookie button';
		case 'festo.com': return _chain('div[class*="cookie-flyout-modal"] button[class*="open"]', 'div[class*="settings-open"] button[class*="save"]');
		case 'cilgro.nl': return '.framework-lock .framework-cookies-bottom [onclick="framework_cookie.save()"]';
		case 'voordeeluitjes.nl': return '.new-ck-disclaimer a[ng-click*="reject"]';
		case 'bernau-bei-berlin.de': return '.vcModalSwitch:checked + .vcModalTarget .vcModal #vcPrivacySetupSubmit';
		case 'retroplace.com': return '.modal[style*="block"] #cookies-selected';
		case 'hek.de': return '#colorbox[style*="block"] .js_cm_consent_submit + .js_cm_consent_submit';
		case 'elevensports.pl': return '.rodo-button--cancel';
		case 'incibeauty.com': return '.modal[style*="block"] #consent-save';
		case 'futterhaus.de': return '.cookiebox.active .js-cookiebox-just-close-button';
		case 'inselradio.com': return '.modal[style*="block"] .cookie-consent-none';
		case 'bund.de': return '.mfp-wrap.mfp-ready #cookiebanner .button-row > :not(.consentToAll)';
		case 'ratbacher.de': return '.modal[style*="block"] [data-cookieman-custom-settings]';
		case 'jku.at': return _sl('#cookieman-modal > div[style*="block"] .cookie_save');
		case 'pepeenergy.com': return '.gmm-cookies.basic .gpb-accept-all';
		case 'erkul.games': return '.cdk-overlay-container app-policy .mat-accent:not(.mat-button-disabled)';
		case 'ovh.com': return '.modal[style*="block"] .cookie-policy-modal oui-button[data-ng-click*="deny"]';
		case 'fruugo.fr': return '.consent-modal .modal[style*="block"] .js-consent-btn-decline';
		case 'drawabox.com': return '.notification[style*="block"] .agree-c';
		case 'kontrast.dk': return _ev("button[contains(., 'Kun nødvendige')]");
		case 'ebike-connect.com': return '#cookieConsent-button';
		case 'ringana.com': return '.ccn-preferences-footer__button.ccn-button--tertiary';
		case 'pu.nl': return _if('div[class*="dialog_box"] a[href*="privacy"]', 'div[class*="dialog_box"] button');
		case 'valdemarne.fr': return _chain('.modal[style*="block"] #consent_fs-1', '#consent_rs-1', '#consent_ga-2', '.btn.consentcookies:not(.disabled)');
		case 'waggel.co.uk': return '.button[data-test="closeCookieBanner"]';
		case 'ford-weege-bad-salzuflen.de': return _chain('#gdpr-bar[style*="block"] .btn-customize', '#gdpr-performance', '#gdpr-functional', '.gdpr-save');
		case 'lass-tanzen.de': return '.reveal-modal[style*="block"] .btnRestOk-js';
		case 'awwwards.com': return '#lightbox-cookies.open .js-save-cookies';
		case 'deutsche-diabetes-gesellschaft.de': return '.cn-banner__opt-out__accept';
		case 'stern.de': return _sl('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection, .message-component[title*="Zustimmen"]');
		case 'telenor.se': return '.cookie-consent-modal .cookie-consent-modal__footer button';
		case 'touslesprix.com': return '.tlp-modal[style*="block"] #consent-accept';
		case 'karriere.at': return '.k-blockingCookieModal__button';
		case 'jobs.at': return '.c-cookie-modal__button';
		case 'jobs.ch': return _chain('#modal[data-cy="cookie-consent"] button[data-cy="modal-secondary"]', '#modal[data-cy="cookie-consent-options-modal"] button[data-cy="modal-secondary"]');
		case 'kvk.nl': return '.ReactModal__Overlay--after-open #cookie-consent button[name="Opslaan"]';
		case 'pocketbook.de': return _sl('.message.show .notice-consents-block-allow-necessary');
		case 'teikeicoffee.org': return _sl('#ar-cookie-modal[style*="block"] .btn[onclick*="confirm_selection"]');
		case 'boschbad.nl': return _chain('.colorboxCookies #ChkOptCookies', '.cookieAgree');
		case 'tweakers.net': return _sl('#cookieAcceptForm button');
		case 'cykelgear.dk': return _sl('#cookieDisclaimer:not(.ninja) #cgDenyOrAccept');
		case 'stihl.de': return _chain('cookie-layer-component .btn_standard', '.cookie-settings__btn--confirm');
		case 'stihl.com': return _sl('.modal[style*="block"] app-cookie-modal .button-grey');
		case 'dailymotion.com': return _sl('button[class*="TCF2ContinueWithoutAccepting"]');
		case 'euplf.eu': return _chain('#cookieConsentSettingsBtn', '#cookieConsentSettingsSaveBtn');
		case 'pensjonistforbundet.no': return _chain('div[class*="cookieConsent"] button + button', 'div[class*="cookieConsent"] form button');
		case 'login.nos.pt': return _sl('#cookiebanner[style*="block"] .btn[onclick*="acceptLevelPreferences"]');
		case 'thsrc.com.tw': return _sl('#dialogCookieInfo:not([style*="none"]) #btn-confirm');
		case 'events.google.com': return _ev("button[contains(., 'Ok, got it')]");
		case 'miltenyibiotec.com': return _sl('.modal[style*="block"] .cookie--actions .acceptSelection');
		case 'tuttitalia.it': return _id('cookieChoiceDismiss');
		case 'oead.at': return _sl('#cookie-notice[style*="block"] a[data-dismiss]:not([data-allowall])');
		case 'designmynight.com': return _sl('dmn-cookies .btn[ng-click*="deny"]');
		case 'vermieterverein.de': return _sl('.dialog-area:not([style*="none"]) .btn-info[onclick*="cookie_loader"]');
		case 'leboncoin.info': return _sl('.modal.active .cookie-consent .negative');
		case 'terveyskirjasto.fi': return _chain('#general-cookies-modal[style*="block"] .btn-secondary', '#edit-cookies-modal[style*="block"] .btn-tk-blue');
		case 'calendly.com': return _if('#gdpr-region ~ div[aria-modal] a[href*="privacy"]', '#gdpr-region ~ div[aria-modal] button');
		case 'pnrtscr.com': return _sl('#overlay #accept-button');
		case 'oekt.de': return _sl('#modalPrivacy[style*="block"] .btn[data-yes]');
		case 'homecine-compare.com': return _sl('.modal[style*="block"] #cmp-noconsent');
		case 'techbone.de': return _sl('#cookie_banner[style*="block"] .btn-light');
		case 'fok.nl': return _sl('.cookieRequired .cookieButton');
		case 'daad.de': return _sl('.qa-cookie-consent-accept-required');
		case 'mifcom.de': return _chain('#js-cookienotice #detailExpand', '#cookieSaveChoice');
		case 'salomon.com': return _sl('.-active .cookie-decline-all');
		case 'allekringloopwinkels.nl': return _sl('.cbar[style*="block"] button');
		case 'maiia.com': return _chain('.MuiDialog-root [data-cy*="cookies-manage"]', '.MuiDialog-root [data-cy*="cookie-manage-validation"]');
		case 'mit-dem-rad-zur-arbeit.de': return _sl('.modal[style*="block"] #btn_auswahl_uebernehmen');
		case 'taxfix.de': return _sl('.cookie-consent-banner button[id*="accept"]');
		case 'twitch.tv': return _if('.ReactModal__Overlay--after-open a[href*="cookie-policy"]', '.ReactModal__Overlay--after-open button');
		case 'corona-impfung.nrw': return _sl('.modal.show app-confirm-cookies-dialog button');
		case 'pr0gramm.com': return '#overlay[style*="block"] #save-consent';
		case 'debenhams.com': return _sl('button[data-test-id="cookie-accept-all"]');
		case 'ikarus.de': return _sl('#amgdpr-cookie-block:not([style*="none"]) .amgdpr-button--secondary');
		case 'bv-activebanking.de': return '#root-modal [aria-label="Meldung"] button';
		case 'withings.com': return _sl('.cookie_consent_withings:not(.hidden) #cookieBtnSelected');
		case 'nike.com': return _sl('.is-active #hf_cookie_label_done');
		case 'gamersgate.com': return _id('accept_gdpr_button');
		case 'studyspace.eu': return _sl('#CookiePolicyBanner button');
		case 'stepstone.se': return _sl('#ufti_modal[style*="block"] .btn-primary');
		case 'mimibabytielt.be': return _sl('#cookieModal[style*="block"] #ok-close-button');
		case 'claras-apotheke.de': return _sl('.wacg-modal__container:not(.hidden) .cc-config-save');
		case 'xeev.net': return _sl('#privacyModalCenter[style*="block"] .btn-success');
		case 'elavon.pl': return _sl('.cookiePopupOpen .acceptCookieButton');
		case 'backmomente.de': return _chain('.ReactModal__Overlay--after-open img[src*="custom-options"] ~ button', '.ConsentOverlay--option-reject-all');
		case 'werkenbijlidl.nl': return _sl('body[style*="hidden"] #CybotCookiebotDialog.opened .cookie-alert-extended-button-secondary');
		case 'jumingo.com': return _id('acceptCookiesBtn');
		case 'sportsbikeshop.co.uk': return _sl('#cookie_policy[style*="block"] #save');
		case 'clem.mobi': return _sl('.cdk-overlay-container app-cookie button');
		case 'kaufland.de': return _sl('#consentOverlay #consentSubmit');
		case 'pngimg.com': return _sl('.modal[style*="block"] .decline_cookie');
		case '3gimmobilier.com': return _sl('.modal[style*="block"] .buttonCookies[onclick*="refusAll"]');
		case 'allocine.fr': return _sl('.jad_cmp_paywall_button-cookies');
		case 'markilux.com': return _chain('.MuiDialog-root #COOKIES ~ div .MuiButton-containedSecondary', '.MuiDialog-root .MuiButton-containedPrimary');
		case 'green-24.de': return _sl('.uk-open .uk-button[onclick*="eu_cookie_remoteaccept"]');
		case 'impericon.com': return _if('.modal a[href*="service-imprint"]', '.modal button + button');
		case 'otelo.de': return _if('.GlobalDialogs a[href*="datenschutz?set-consent"]', '.GlobalDialogs .TextLink--buttonFilled');
		case 'live.com': return _if('.ms-Layer--fixed a[href*="privacy.microsoft"]', '.ms-Layer--fixed .ms-Button--primary');
		case 'ikbenfrits.nl': return _if('.ant-modal-root a[href*="cookiestatement"]', '.ant-modal-root .btn.green');
		case 'diefabrik-sundern.de': return _if('#POPUPS_ROOT a[href*="datenschutz"]', '#POPUPS_ROOT div[role="button"]');
		case 'jetbluevacations.com': return _if('.cdk-overlay-container a[href*="/legal/privacy"]', '.cdk-overlay-container button[mat-dialog-close]');
		case 'centrumtenisa.pl': return _if('.modal .policy', '.modal .close');
		case 'zoom.nl': return _if('div[class*="dialog-cookie-consent"]', 'div[class*="dialog_box"] button');
		case 'lcd-compare.com': return _sl('.modal[style*="block"] #cmp-save');
		case 'courrierinternational.com': return _sl('.cmp-ban-nocookie-media-button-read');
		case 'ticket.io': return _sl('.modal-cookie[style*="block"] .btn-text');
		case 'preplounge.com': return _sl('.modal-cookie-privacy-settings.active .js-accept');
		case 'singleboersen-vergleich.de': return _sl('.consentbanner-displaynone .consentbanner-button-extern a');
		case 'urzadzamy.pl': return _sl('.filter-modal-background[id*="consent"] .slide-modal-top > div[style*="none"] > div + button');
		case 'conso.ro': return _chain('.modal[style*="block"] #gdprCookieOptions', '.modal[style*="block"] #gdpr-analytics', '#gdprCookieAcceptCustom');
		case 'forum.brasil-web.de': return _sl('.js-privacy-consent-banner__button');
		case 'flightradar24.com': return _sl('.important-banner--is-open .btn[data-testid*="cookie-consent"]');
		case 'emons.de': return _chain('cookie-alert-dialog-component .button-outline', 'cookie-detail-dialog-component button');
		case 'free.fr': return _chain('.cookiesMgmt.is-active button:first-child', '.cookiesMgmt.is-active footer button');
		case 'blockchain.com': return _sl('#__next > div:last-child button[aria-label="OK"]');
		case 'tomorrow.one': return _chain('footer ~ .fadingIn button + button', '#consent-item-video', '#consent-item-podcast', '.settings-visible button + button');
		case 'kh.hu': return _sl('.cookie-dialog .save-cookie-settings-button');
		case 'bricomarche.com': return _chain('.Body-lockedScroll .CookieParameters-btn', '#cookieAudience', '.CookieParameters-validation button');
		case 'researchaffiliates.com': return _sl('#cookieDialog.dialog-visible .disclaimer-accept-button');
		case 'hallhuber.com': return _chain('.modal--visible .cookie-box__button-settings', '.cookie-box__button-accept-some');
		case 'deichmann.com': return '#consent-layer-modal.show button[data-key*="notagree"]';
		case 'paris.fr': return _sl('.has-cookies-message .paris-cookies-button');
		case 'idagio.com': return _sl('.ReactModal__Overlay--after-open [class*="consent-manager"] button:first-child');
		case 'lansberg.de': return _sl('#cookieNotice[style*="block"] .btn-success');
		case 'mifas.cat': return _sl('.cookienator--visible button[data-btn-accept-all]');
		case 'aldi-sued.de': return _sl('.google-maps-tooltip .google-maps-cookie-enabled');
		case 'wit.edu.pl': return _sl('.modal[style*="block"] #rodoModalConsent');
		case 'bankelf.de': return _sl('.cdk-global-scrollblock app-cookie .btn-akzept');
		case 'navigium.de': return _sl('.modal[style*="block"] .hidden .btn[onclick*="akzeptieren"]');
		case 'cocktails.de': return _sl('.modal[style*="block"] .cookie-buttons .confirm-selection');
		case 'ridersguide.nl': return _sl('.ci-sticky-bar .agree-button');
		case 'zoopla.co.uk': return _sl('#ui-cookie-consent-overlay-wrap:not([hidden]) button[data-responsibility="save"]');
		case 'skfbearingselect.com': return _sl('.privacy-notice button');
		case 'bandainamcoent.eu': return _sl('.modal[style*="block"] #closeCookiesObligatoriesPopUpBtn');
		case 'case-score.de': return _sl('.modal[style*="block"] #implement-cookie-settings');
		case 'reiff-zuschnitt-konfigurator.de': return _sl('.privacy-policy-dialog[style*="flex"] #prot-note-btn-sec');
		case 'cdu-fraktion.berlin.de': return _sl('#cookie-disclaimer[style*="block"] #cookiesel');
		case 'esv.info': return _sl('#cookieBannerModal[style*="block"] #select_bare_minimum');
		case 'teamtailor.com': return _chain('.modal[class*="CookieConsent"] .modal-window--open div[class*="CookieConsent__buttonsRow"] button:first-child', '.modal[class*="CookieConsent"] div[class*="CookieConsent__buttonWithWarning"] button');
		case 'studienwahl.de': return _sl('#mrm_gdpr .__buttons_accept_partial');
		case 'mcdelivery.de': return _sl('.optanon-alert-box-wrapper:not([style*="none"]) .accept-cookies-button');
		case 'gesundheit-nordhessen.de': return _sl('.tarteaucitron-modal-open #tarteaucitronSave');
		case 'learnattack.de': return _sl('.ccmodal:not([style*="none"]) .ui-dialog-buttonset button');
		case 'lifevantage.com': return _sl('.terms-of-use-modal.show button');
		case 'lufthansagroup.careers': return _sl('.modal[style*="block"] .btn[data-hook="cc-ccc-btn-confirm-selection"], .modal.show .btn-confirm-selected');
		case 'mein-wohndesign24.de': return _sl('.v-dialog__content--active .ui-cookie-consent button.primary');
		case 'tibber.com': return _chain('#__next .Consent .save', '#__next .Consent .save');
		case 'vorteile.net': return _sl('.consent-modal--show .js-accept');
		case 'generali.at': return _sl('.cookies-container ~ div #cookieSettingsSaveButton');
		case 'poolebaypharmacy.co.uk': return _sl('div[data-sort="0000000"][data-static-id="0"][data-visible="1"] div[class*="cross"]');
		case 'psg.fr': return _sl('.modal.is-showing .btn[data-accept-cookies]');
		case 'lmt.lv': return _sl('.lmt-cookies.show .btn[data-cookie-approve="checked"]');
		case 'costomovil.es': return _sl('.aio-gdpr #accept-button');
		case 'answear.ro': return _sl('.modal--cookies .btn[class*="btn"]');
		case 'tu-darmstadt.de': return _sl('#cookie-modal[style*="block"] .btn[aria-label*="Speichern"], .fancybox-opened #cookie-modal button[onclick="acceptCookies(false)"]');
		case 'racing-planet.de': return _sl('.modal[style*="block"] #consent_frm .btn-default');
		case 'info.pl': return _sl('#privacy_info_content .btn-primary');
		case 'latam.com': return _sl('.cookie-terms-overlay:not([class*="closed"]) .cookie-terms-modal__button');
		case 'palazzogroep.nl': return _sl('.cookie__wall.visible .cookie__inner__btn--accept');
		case 'takarekbank.hu': return _sl('.cookie-accept-visible .cookie-accept .c-button');
		case 'leparfait.fr': return _sl('.modal[style*="block"] .btn[onclick*="tarteaucitron.userInterface.respondAll(true)"]');
		case 'pff.se': return _sl('#cookieModal:not(.c-cookieModal-hide) button');
		case 'stoxenergy.com': return _sl('#___gatsby div[class*="ConsentManagerDisplay"] button + button');
		case 'penny.at': return _sl('.v-dialog--active #btnOK');
		case 'paybyphone.fr': return _sl('div[data-testid="agreeAndContinue-button"] button');
		case 'banknorwegian.dk': return _id('approveAllCookies');
		case 'smythstoys.com': return _sl('#cookieLoad[style*="block"] ~ .modal .savePreference, #colorbox.cookie-popup[style*="block"] .cookie-btn-yes');
		case 'easyswimportal.com': return _sl('.btn_accept_cookies');
		case 'darmstadt.de': return _sl('#wdw-cookie-consent .btn-primary');
		case 'learndutch.org': return _sl('.videoWrapper .wpca-btn-accept');
		case 'bi-polska.pl': return _sl('.modal-opened[data-control="cookieinfo"] .btn[data-accept]');
		case 'yoigo.com': return _sl('.thor-modal--open .thor-cookies-popup__button, .cookies-info-modal .cookie-accept');
		case 'oktawave.com': return _sl('#gdprbox .secondary');
		case 'apothekia.de': return _sl('.ant-modal-root button');
		case 'ebonline.be': return _sl('.modal[aria-labelledby*="cookie-warning"][style*="block"] .btn-primary');
		case 'camping.info': return _sl('.v--modal-overlay[data-modal="CiCookieLayer"] .order-2 + .order-2');
		case 'amsterdamlightfestival.com': return _sl('#cookie-consent-app .cookie-consent__btn');
		case 'wirtschaftsagentur.at': return _id('LSCookieConsent_btn_ok');
		case 'kiusys.net': return _sl('#dialogCookies.in .btn-primary');
		case 'kohlhammer.de': return _sl('.show-cookienotice #cookienotice_box_close');
		case 'kinocheck.de': return _sl('.video-gdpr-consent button');
		case 'zappn.tv': return _sl('#fd-cookies.show .accept-partly');
		case 'went.at': return _sl('#cookiebar[style*="block"] .save');
		case 'constantcontact.com': return _sl('.cookie-wall.open .accept-all-cookies');
		case 'billiger.de': return _sl('#cookie-banner-overlay .accept, #cookie-banner-orange-overlay:not([style*="none"]) .accept');
		case 'twl.de': return _sl('.modal[class*="gdpr-consent"][style*="block"] .btn.true');
		case 'nzbindex.com': return _sl('.form-horizontal[action*="/disclaimer?"] .btn-primary');
		case 'astra-bier.de': return _sl('.agecheck[style*="block"] #accept_cookies');
		case 'realme.com': return _sl('.r-cookie:not([style*="none"]) .r-btn--primary');
		case 'airam.fi': return _sl('.cookie-consent .scylla-btn--primary');
		case 'prestaexpert.com': return _sl('.modal:not(.d-none) .btn[onclick*="btnRgpdClose"]');
		case 'droptica.com': return _sl('.d-gtm-scripts-modal-wrapper--is-open #d-gtm-scripts-save-settings');
		case 'pelix-media.de': return _sl('#cookie-modal[style*="block"] .opt-in');
		case 'bienmanger.com': return _sl('.modal[style*="block"] .bm-ok');
		case 'wesendit.com': return '.cc-visible .cc-dismiss';
		case 'urbanista.de': return _sl('#cookie-bar[style*="block"] #cookie-bar-button');
		case 'okazii.ro': return _sl('#cookie-bar[style*="block"] .js-cookie-bar-close');
		case 'alexanderhall.co.uk': return _sl('#cookie_consent[style*="block"] .cookie_option');
		case 'bancaditalia.it': return _sl('#banner-privacy button');
		case 'what3words.com': return _sl('.CookieNotice-Button');
		case 'imagelinenetwork.com': return _sl('.modal[style*="block"] .accept-selected-cookies');
		case 'teutoburger-muenzauktion.de': return _sl('.reveal-overlay[style*="block"] #phila-cookie-modal .button.clear');
		case 'noodweer.be': return _sl('#cookie-notice-modal.modal[style*="block"] .btn--light');
		case 'ace-ace.com': return _sl('.cookie-select-popup-view #cookie-form-submit');
		case 'ccoo.es': return _sl('.snigel-cmp-framework #sn-b-save');
		case 'file2send.eu': return _sl('#consent-dialog-title ~ div button');
		case '5miles.com': return _sl('#cookie-remind .close');
		case 'evarazdin.hr': return _sl('.cookie-warning-active .gdpr_submit_all_button');
		case 'pickup.de': return _sl('.modal[style*="block"] .btn[cookie-submit]');
		case 'my.mroom.com': return _sl('#consent-popup-container .main-cta-btn');
		case 'emb-gmbh.de': return _sl('css-modal-cookie .btn');
		case 'mietz.app': return _sl('.cookie-dialog__accept-button');
		case 'ratemyprofessors.com': return _sl('.ReactModal__Overlay--after-open button[class*="CCPA"]');
		case 'framer.com': return _sl('div[class*="CookiesBanner"] .button.variant-primary');
		case 'aukcije.hr': return _sl('.reveal-overlay[style*="block"] #cookieAccept');
		case 'lhv.ee': return _sl('.mfp-ready #acceptPirukas');
		case 'freeontour.com': return _sl('.fancybox-opened .btn[dusk="reject-button-cookie-consent"]');
		case 'pfeffi.com': return _sl('.consent-widget #consentSaveButton');
		case 'dnbeiendom.no': return _chain('#gtm-cookie-velg-selv', '.dnb-checkbox__input[title*="Marked"]', '.dnb-checkbox__input[title*="Intern"]', '#gtm-cookie-godkjenne-valg');
		case 'newpharma.be': return _sl('#js-cookie-policy-popup .js-cookie-policy-ok-btn');
		case 'entsoe.eu': return _sl('.ui-dialog[style*="block"] #welcome-popup .ui-button');
		case 'tredy-fashion.de': return _sl('.ui-dialog[style*="block"] #cookieFlyout button[onclick*="submit"]');
		case 'openfoodnetwork.org.uk': return _sl('.cookies-banner[style*="block"] button[ng-click*="accept"]');
		case 'kurzurlaub.de': return _sl('.modal[style*="block"] .accept-gdpr');
		case 'wearetennis.bnpparibas': return _sl('.modal-wat-cookie .js-confirm-cookie');
		case 'weople.space': return _sl('.fix > form .btn[name="accept"]');
		case 'theheinekencompany.com': return _sl('.cookies[state="active"] button');
		case 'boohoo.com': return _sl('.privacy-policy.visible .js-accept-all-button');
		case 'readly.com': return _sl('.cookie-consent #cookie-accept-all, .cookie-option-large ~ div > button');
		case 'computerbase.de': return _sl('.consent[open] .js-consent-accept-button');
		case 'dish.co': return _sl('.modal[style*="block"] .cookie-info__accept');
		case 'particify.de': return 'app-cookies button';
		case 'ose.gov.pl': return _sl('.cookies-modal[style*="block"] .btn.secondary');
		case 'monespaceclient.immo': return _sl('.modal[style*="block"] .close[onclick*="CloseCookie"]');
		case 'teamaretuza.com': return _sl('.modal[style*="block"] #giveCookieConsentButton');
		case 'friedrich-maik.com': return _sl('#incms-dpbanner .dp_accept');
		case '99app.com': return _sl('.cookies-license .license-allow');
		case 'stadtenergie.de': return _sl('button[data-cypress-id="acceptCookies"]');
		case 'hemnet.se': return _sl('.ReactModal__Overlay--after-open [class*="ConsentNotification__Buttons"] > button');
		case 'veygo.com': return _sl('#cookie-banner .confirm');
		case 'sherwin-williams.com.br': return _sl('.mensagem-cookie .fechar');
		case 'eon-highspeed.com': return _sl('.dmc-cc-overlay--open .dmc-cc-btns > a');
		case 'faberkabel.de': return _sl('.fancybox-opened #modalCookie .button-red, #ModalUmCookiehandling[style*="block"] .btn');
		case 'matthys.net': return _sl('.modal-popup._show .btn-cookie-allow');
		case 'swatch.com': return _sl('.m-show .btn[data-event-click="acceptCookies"]');
		case 'fotopuzzle.de': return _sl('.cookie-policy-widget #cookies-consent-save');
		case 'argutus.de': return _sl('#ag-consentmanager-wrapper[style*="block"] #btn-consent-save');
		case 'sport2000.fr': return _sl('.modal[style*="block"] #customer-consent-modal-confirm');
		case 'ihtsdotools.org': return _sl('.modal[style*="block"] #accept-license-button-modal');
		case 'humboldtforum.org': return _sl('#cookieConsent.loaded .naked');
		case 'jobruf.de': return _sl('.open ~ .cookie-consent-settings .btn[data-action="save"]');
		case 'senmotic-shoes.eu': return _sl('.swal2-popup[class*="optin"] .swal2-cancel');
		case 'abconcerts.be': return '.cookie-consent button[value="no"]';
		case 'aiways-u5.nl': return _sl('#overlay-cookie[style*="block"] .button');
		case 'ponal.de': return _sl('.epp-overflow .epp-modal .epp-secondary');
		case 'parkster.com': return _sl('.modal[style*="block"] .js-cookie-dismiss');
		case 'lemonade.com': return _sl('#root div[class*="PrivacyBanner"] button');
		case 'change.org': return _sl('button[data-testid="cookie-wall-accept"]');
		case 'nickles.de': return _id('consent_ok');
		case 'islandfreund.de': return _sl('.becc-ol[style*="block"] .becc-ok');
		case 'aral.de': return _sl('.ap-cookies--open #ap-cookie-wall .ap-btn');
		case 'tele2.de': return _sl('#esssential_cookie_popup[style*="block"] .setCookies');
		case 'crew-united.com': return _sl('#colorbox[style*="block"] form[data-handler-url*="CookieSettings"] .icon-save');
		case 'viennahouse.com': return _sl('#cookie-box.open #cookies-close-notification');
		case 'puratos.pl': return _sl('.modal[style*="block"] #cookieAcceptBtn');
		case 'tantris.de': return _sl('#--cg-modal-overlay[style*="block"] #--cg-button-cookie-confirm');
		case 'carrefour.it': return _sl('.consent-tracking-modal.active .btn-primary');
		case 'norres.com': return _sl('#cookieWelcomeModal[style*="block"] #acceptOnlyEssential');
		case 'aquaristic.net': return _sl('.modal[style*="block"] #rs_cookie_manager_accept');
		case 'aptoide.com': return _sl('.no-scroll div[class*="cookie-notice__Options"] > div:last-child');
		case 'bhw.de': return _sl('.cookie-disclaimer[style*="block"] .js-notification-agree');
		case 'native-instruments.com': return _sl('#ni-cookie-consent[style*="block"] [data-cookie-consent-accept]');
		case 'bike-components.de': return _sl('.has-cookie-banner .cookie-banner button');
		case 'lindenberg-bringts.de': return _sl('.modal[style*="block"] .btn[ng-click*="ok"]');
		case 'iq.com': return _sl('.accept-all[data-pb*="cookie_ask"]');
		case 'stockmann.com': return _sl('.cookie-dialog-screen.open .cookie-consent-accept');
		case 'oxinst.com': return _id('mcc-button-accept');
		case 'wienenergie.at': return _sl('.__reakit-portal [class*="CookieConsent-module__actions"] button');
		case 'amzpecty.com': return _sl('#gpdrConsentModal[style*="block"] button');
		case 'anhinternational.org': return _sl('.in #consent-options .btn');
		case 'fil-luge.org': return _sl('.cookieBar-Overlay-open .CookieBar__Button-accept');
		case 'arteradio.com': return _sl('.cookies-modal button + button');
		case 'lemonde.fr': return _sl('.article__video-deny button');
		case 'merrell.pl': return _sl('#gdpr-cookie-block #btn-cookie-allow');
		case 'fass.se': return _sl('#cookie-dialog-sidebar .acceptButton');
		case 'ruegenwalder.de': return _sl('.ytcs:not([style*="none"]) .btn[id*="youtubeconsent"]');
		case 'romshub.com': return _sl('#kuk.modal[style*="block"] .btn');
		case 'oventrop.com': return _sl('.modal[style*="block"] #ConsentModalControl_lbtnSaveSelection');
		case 'thincast.com': return _sl('.uk-open #AcceptCookies');
		case 'truste.com': return _sl('.pdynamicbutton .call, #gwt-debug-close_id');
		case 'pronovabkk.de': return _sl('.reveal[style*="block"] button[data-accept-cookie-disclaimer]');
		case 'osehero.pl': return _sl('.ReactModal__Overlay--after-open button[accept]');
		case 'regione.lombardia.it': return _sl('#cookiePrl:not(.hidden) .accetta');
		case 'invk.nl': return _sl('.modal[style*="block"] .cookieConsentOK');
		case 'norddeutsch-gesund.de': return _sl('#consent_manager:not([style*="none"]) #consent_settings_save_button');
		case 'mitgas.de': return _sl('.modal--CLB #CLB_level_2');
		case 'duvel.com': return _sl('#cookiebanner[style*="block"] .js-cookie-accept');
		case 'pitstop.de': return _sl('.modal[style*="block"] #btn-cookie-terms-selection');
		case 'lifepointspanel.com': return _sl('.modal[style*="block"] #accept_only_website_cookies');
		case 'mathem.se': return _sl('.cookie-details[style*="block"] .btn');
		case 'resultsbase.net': return _sl('.bootbox.modal[style*="block"] #btnCookiesAcceptSelected');
		case 'hot.si': return _sl('.bootbox.modal[style*="block"] .btn[data-bb-handler="allow"]');
		case 'ogladajanime.pl': return _sl('.bootbox.modal[style*="block"] .bootbox-accept');
		case 'computerprofi.com': return _sl('.button[value*="akzeptieren"][onclick*="redirect"]');
		case 'stwbs.de': return _sl('.cookie-advice[style*="block"] input[value="needed"]');
		case 'geolive.org': return _sl('.rispondi-commento-link[href*="accetta-cookies"]');
		case 'wanted.law': return _sl('.cdk-overlay-container .dtx-cookie-voorkeuren-modal-buttons .btn');
		case 'tipser.com': return _sl('.submit-consent-button');
		case 'die-medienanstalten.de': return _sl('.modal[style*="block"] .matomo-btn-agree');
		case 'france24.com': return _sl('.m-em-video__cmp__disclaimer p:first-child + button');
		case 'wwz.ch': return _sl('.cookie--open .cookie__accept-all');
		case 'yoko.de': return _sl('.modal[style*="block"] .btn[data-rel="cookies-accept-all"]');
		case 'cheapenergy24.de': return _sl('.btn[cookie-consent-dialog--accept-selection]');
		case 'chargemyhyundai.com': return _sl('.privacy-information-modal.show button[onclick*="accept"]');
		case 'brightstar.com': return _sl('.modal[style*="block"] .btn[id*="cookieAccept"]');
		case 'freeyou.ag': return _sl('.cookies .btn-primary');
		case 'la7.it': return _sl('#_evh-ric #AcceptButton');
		case 'schullv.de': return _sl('.MuiDialog-root button[class*="CookieBar__Accept"]');
		case 'natuurmonumenten.nl': return _sl('#modal .cookies-button-optimal');
		case 'second-hand-ikea.com': return _sl('#cookie_melding .link_button2');
		case 'foursquare.com': return _sl('.cookieBannerClose');
		case 'leirovins.be': return _id('cookie-accept');
		case 'psiquiatria.com': return _sl('.modal[style*="block"] .btn[onclick*="acept"]');
		case 'innsbruck-airport.com': return _id('header-notification-toggle-decline');
		case 'germany.travel': return _sl('.consent:not([style*="none"]) .button-save');
		case 'basenio.de': return _sl('#cookie_consent .btn');
		case 'job-impulse.com': return _sl('.cookie-alert.checkedClass .btn[ng-click*="agree"]');
		case 'solcom.de': return _sl('.cookie-consent-banner.notaccepted .acceptall');
		case 'bausep.de': return _sl('.notice-cookie-block .button[onclick*="save"]');
		case 'uelzener.de': return _sl('.mfp-ready #acceptAllButton');
		case 'feuertrutz-katalog.de': return _sl('.ngn-cookie-consent.ngn-modal--active .ngn-primary-button');
		case 'breitbandmessung.de': return _sl('.dsvo-overlay[style*="block"] #dsvooverlay-close');
		case 'celeraone.com': return _sl('#cis-gdpr-footer[style*="display"] #cis-gdpr-footer-accept');
		case 'dresdner-fachanwaelte.de': return _sl('.mfp-ready .btn-consent-allow');
		case 'keb.de': return _sl('#privacy-statement[style*="block"] #close-statement-save');
		case 'dangenentertainment.com': return _sl('.gdpr-confirm-button');
		case 'shadowofwar.com': return _id('consent-close');
		case 'ankerbrot.at': return _sl('.anker2020cd__speichern');
		case 'radio886.at': return _sl('.r886cd__speichern');
		case 'telesec.de': return _sl('#cookie-consent[style*="block"] .btn-primary');
		case 'bremerhaven.de': return _sl('.cookie-banner.in .btn[data-dismiss]');
		case 'promondo.de': return _sl('.modal[style*="block"] .btn[onclick*="agreementcookies_set"]');
		case 'konzerthaus-dortmund.de': return _sl('.modal[style*="block"] #cookieClose');
		case 'kissnofrog.com': return _sl('.mdl-cookie-disclaimer-layer .yes-button');
		case 'schellenberg.de': return _sl('.modal.show #c1x1_gdprcookie-modal-btnsave');
		case '112groningen.nl': return _sl('.modal button[value*="cookies"]');
		case 'actionsport-rainbowdivers.de': return _sl('#CookieModal.in .btn[type="submit"]');
		case 'o2.fr': return _sl('#cookie-consent .modal[style*="block"] .btn-secondary');
		case 'hotelsbarriere.com': return _sl('#cookie-banner.show .JS_accept_cookies');
		case 'ing.jobs': return _sl('.fancybox-opened label[for="cl_basic_com"] a');
		case 'mega.be': return _sl('.modal[style*="block"] #cookieAcceptationButton');
		case 'hidrive.com': return _sl('button[data-qa="privacy_consent_approve_all"]');
		case 'ktr.com': return _sl('.modal[style*="block"] .btn[onclick*="setCookieBannerAccepted"]');
		case 'itaa.be': return _sl('#cookieConsent .accept-policy');
		case 'sheego.de': return _sl('.modal[style*="block"] .btn.privacy-settings__ok-cta');
		case 'nobilia.de': return _sl('#cookieLayer[style*="block"] #btn-DSGVO-saveselected');
		case 'etsy.com': return _sl('#gdpr-single-choice-overlay.wt-overlay--will-animate button[data-gdpr-single-choice-accept]');
		case 'buchcopenhagen.dk': return _id('dataprotection-form-submit');
		case 'makeproaudio.com': return _sl('.modal.is-open .js-set-all-cookies');
		case 'ffr.fr': return _sl('.modal.visible .cookie .btn:first-child');
		case 'kwyk.fr': return _sl('#youtube-video .btn');
		case 'bonami.pl': return _sl('body > .rcic > div > div > p:first-child + a:last-child');
		case 'gamingonlinux.com': return _sl('.hidden_video_content .accept_video');
		case 'haus-des-meeres.at': return _sl('.fxCookieWindowAllLink');
		case 'sharewise.com': return _sl('.modal[style*="block"] .btn[onclick*="cookiesAgreed"]');
		case 'cognex.com': return '#GDPRModal[style*="block"] .agree';
		case 'getraenke-news.de': return _sl('.modal[style*="block"] .btn[onclick*="requestAccessToSite"]');
		case 'keltican-forte.de': return _sl('.layerActive #cookie-form #confirmChoices');
		case 'dehn.at': return _sl('#cookieConsent[style*="block"] .button.hollow');
		case 'gamestar.de': return _sl('.modal[style*="block"] .cmp-accept, .modal[style*="block"] .btn[href*="acceptCmp"]');
		case 'neuseeland-haus.de': return _sl('#notice-cookie-block[style*="block"] #btn-cookie-allow');
		case 'manpowergroup.at': return _sl('.c-modal.is-visible .js-cookie-consent__accept-all');
		case 'samengezond.nl': return _sl('#modal-cookiemodal[style*="visible"] button');
		case 'gv.at': return _sl('#cookieman-modal[style*="block"] [data-cookieman-save], .bemCookieOverlay__btn--save');
		case 'plein.nl': return _sl('.modal[style*="block"] .btn[href*="cookies/approve"]');
		case 'juitnow.com': return _sl('.modal[style*="block"] .btn[data-cy="cookies-save-settings"]');
		case 'passport.service.gov.uk': return _id('cookie-banner-accept');
		case 'mcrent.de': return _sl('.cookieAcceptance.active .acceptAll');
		case 'freiwald.com': return _sl('.right_content .but[onclick*="Continue"]');
		case 'onlinedepartment.nl': return _sl('.has-ccwindow .cookie-banner .cc-allow');
		case 'foto-lambertin.de': return _sl('.modal[style*="block"] #btnCCTSaveB');
		case 'jsitor.com': return _sl('.cookie-consent .primary');
		case 'mag.dbna.com': return _sl('.cookieconsent.visible .positive');
		case 'celonis.com': return _sl('div[data-cookie="gdpr"] [data-cookie-set="accept"]');
		case 'autohaus24.de': return _sl('.coo__button[data-button="setAllCookies"]');
		case 'swrag.de': return _sl('#cookie-layer[style*="block"] .btn-secondary');
		case 'ab-m.de': return _sl('.wd-consent .buttonFrontend');
		case 'real.de': return _id('consentSubmit');
		case 'nibcdirect.de': return _sl('.dbh-cookie-consent-visible .dbh-cookie-consent-save');
		case 'tarnobrzeg.info': return _sl('.modal[style*="block"] .btn[href*="closeRodo"]');
		case 'mazury24.eu': return _sl('#privModal[style*="block"] .privacybtn');
		case 'begroting-2021.nl': return _sl('.ls-cookie_bar .ls-cookie_button');
		case 'combi.de': return _sl('.modal--cookie-notice.open #accept-consent');
		case 'proman-emploi.fr': return _sl('#root button[class*="cookieNotice-accept"]');
		case 'bang-olufsen.com': return _sl('#ppms-modal[style*="block"] #reject-all');
		case 'foxtons.co.uk': return _sl('.fancybox-overlay[style*="block"] .cookie_option[data-choice*="Yes"]');
		case 'ilmarinen.fi': return _sl('.modal[style*="block"] #ilmGdprCooModOk');
		case 'qwic.de': return _sl('#cookie-consent[style*="block"] .js-cookie-accept');
		case 'qinetiq.com': return _sl('#cookiePolicyBanner .button');
		case 'otpbanka.hr': return _sl('#perpetuum-cookie-bar.visible .perpetuum-button-allow a');
		case 'aarsfjv.dk': return _sl('dff-cookie-consent-dialog button[data-cookiescanner*="accept"]');
		case 'langeland.nl': return _sl('#cookieWallOverlay[style*="block"] .ok-cookies');
		case 'magentagaming.com': return _sl('button[data-test="cookie-accept"]');
		case 'vu.nl': return _sl('#cookie-consent:not([hidden]) button[data-all]');
		case 'bestdrive.fr': return _sl('.m-cookie:not(.m-cookie--hidden) .m-cookie__button-accept');
		case 'elekta.com': return _sl('#cookie-banner[style*="block"] #cookie-accept');
		case 'c24.de': return _sl('app-cookie app-button');
		case 'vitalsource.com': return _sl('div[id^="dialog"] [data-testid*="CookiesDialog"] + div + div button');
		case 'wohnen-im-alter.de': return _sl('.modal[style*="block"] .btn[onclick*="CookieConsent.apply"]');
		case 'wohnmobilforum.de': return _sl('#consentbox input.knopf');
		case 'diebayerische.de': return _sl('#cookie-consent-layer[style*="block"] .js_cc-accept-all');
		case 'blocket.se': return _sl('aside[aria-label*="cookie"] #close-modal');
		case 'healthinsight.ca': return _sl('.modal[style*="block"] .vicky-cookie-yes');
		case 'studiobookr.com': return _sl('#cookie-hint-display:not([style*="none"]) .sb-primary');
		case 'boehringer.net': return _sl('.cookie-consent .submit-selected');
		case 'wegedetektiv.de': return _sl('.modal[style*="block"] #cookieok');
		case 'engelvoelkers.com': return _sl('.ev-disable-scrolling .cookie-consent-dialog-container button[onclick*="accept"], .cookie-consent-dialog-container:not([style*="none"]) button[onclick*="accept"], #cookieConsentDialog.in button[onclick*="accept"]');
		case 'reviewmeta.com': return _sl('.modal[style*="block"] #terms_accepted');
		case 'justjoin.it': return _sl('#root > div > a[href*="privacy"] ~ button');
		case 'ferienchecker.at': return _sl('.el-dialog__wrapper:not([style*="none"]) .cookie__button');
		case 'truepartnercapital.com': return _sl('.mfp-ready #close-cookie-disclaimer-btn');
		case 'envoituresimone.com': return _sl('.modal[style*="block"] #accept_cookies');
		case 'abo24.de': return _sl('.featherlight[style*="block"] #consent-all');
		case 'edeka-foodservice.de': return _sl('.dialog button[onclick*="accept"]');
		case 'nacex.es': return _sl('.ui-dialog[style*="block"] #accept');
		case 'targoversicherung.de': return _sl('.modal[style*="block"] .dsgvo.accept');
		case 'unedtenerife.es': return _sl('#uploadedImagePopup[style*="block"] .close');
		case 'quiziniere.com': return _sl('.modal[style*="block"] .qz-alert-cookie button');
		case 'itis.swiss': return _sl('#cookie_blocker:not([style*="none"]) #cookie_ok');
		case 'prosa.dk': return _sl('.t3cms-cookies-overlay:not([style*="none"]) .t3cms-cookies-select-all');
		case 'adventurespiele.net': return _sl('.data-protection-info[style*="block"] .ok');
		case 'fastforwardscience.de': return _sl('#coookieOverlay.open #coookieOverlayButtonSave');
		case 'mantel.com': return _sl('#modal-ck[style*="block"] .btn-primary');
		case 'svenskakyrkan.se': return _sl('.cookies__bar.is-active .js-cookies-accept-all');
		case 'k15t.com': return _sl('.reveal[style*="block"] .cookiesAccepted');
		case 'tieranwalt.at': return _sl('.fxCookiesWindowsBodyClass .fxCookieWindowAllLink');
		case 'monese.com': return _sl('.cookie-banner__wrapper button[data-testid*="accept"]');
		case 'secondsol.com': return _sl('.modal[style*="block"] .btn-success-cookie');
		case 'kasuwa.de': return _sl('#ccModal[style*="block"] .btn-primary');
		case 'ihreapotheken.de': return _sl('.modal[style*="block"] #AcceptCookies');
		case 'ns.nl': return _sl('.cookie-notice button + button');
		case 'adler-farbenmeister.com': return _sl('.page-wrap--cookie-permission:not(.is--hidden) .cookie-permission--accept-button');
		case 'notaris.be': return _sl('.c-bar[style*="block"] .c-btn');
		case 'legia.com': return _sl('#main ~ div .button[href*="cookies"] ~ button');
		case 'schwaebisch-hall.de': return _sl('.cookie-note[style*="block"] .js-cookie-accept-ok');
		case 'ls-tc.de': return _sl('.modal[style*="block"] .accept');
		case 'spielexikon.de': return _sl('input[name="edit-property-cookie-accept"]');
		case 'etepetete-bio.de': return _sl('.modal[style*="block"] .accept-all-button');
		case 'neliosoftware.com': return _sl('.nelio-cookie-modal:not([style*="none"]) button');
		case 'uvex-safety.com': return _sl('.modal-cookie .btn + .btn');
		case 'cocktaildatenbank.de': return _sl('.show #d-cc--confirm');
		case 'bo.de': return _sl('#footer-consent[style*="block"] #reiff-consent-accept');
		case 'rittal.com': return _sl('.swal-overlay--show-modal .--primary');
		case 'idoc.eu': return _sl('.is--active .cookie-permission--accept-button');
		case 'ufz.de': return _sl('#cookie-banner[style*="block"] .btn-success');
		case 'imoradar24.ro': return _sl('#modal-cookies[style*="block"] .accept');
		case 'uniqa.at': return _sl('.tingle-modal--visible .cc_buttons-accept_all_cookies');
		case 'handy-deutschland.de': return _sl('#privacy-settings .button-primary');
		case 'police-auction.org.uk': return _sl('.modal[style*="block"] .btn[onclick*="cookie_agree"]');
		case 'hemdenbox.de': return _sl('#s-cookie-consent[style*="block"] #s-cookie-consent-accept-all');
		case 'sendgb.com': return _sl('.cookie_checker[style*="block"] ~ .sendgb_cookiewarning .cookiebutton');
		case 'realm667.com': return _id('cookiehintsubmit');
		case 'gezond.nl': return _sl('#cookie-dialog[style*="block"] #cookie-submit');
		case 'nmhh.hu': return _sl('#cookie-dialog[style*="block"] button[type="submit"]');
		case 'montanacolors.com': return _sl('.mfp-ready .cookies .bot');
		case 'lbbw.de': return _sl('.component-data-protection-consent.show .action-save-settings');
		case 'deka.de': return _sl('.mfp-ready .js-accept-selected-cookies');
		case 'litebit.eu': return _sl('.cookie-consent button');
		case 'aboalarm.de': return _sl('.c-cmp--modal-show .gdpr-accept-custom');
		case 'shpock.com': return _sl('#__next ~ div[id*="modal"] div[class*="PrivacyConsent"] button');
		case 'indiearenabooth.com': return _sl('#cookie-consent:not([style*="none"]) #btn-cookie-consent-positive');
		case 'besteproduct.nl': return _sl('.modals.active .cookieWall-btn');
		case 'wetter.com': return _sl('.cmp-prevent-scroll #cmp-btn-save');
		case 'stabila.com': return _sl('.mod_cms_accept_tags.block #cms_close_button');
		case 'pibank.es': return _sl('#cookies-block:not([style*="none"]) .aceptar');
		case 'verksamhetslokaler.se': return _sl('.modal-wrapper.shown #cookies_agreement_panel .green');
		case 'interfriendship.de': return _sl('#cookies-dlg:not([style*="none"]) .cdlg-accept-all');
		case 'heinz.st': return _sl('#cookiebar[style*="block"] .accept');
		case 'aptekagemini.pl': return _sl('.vue-privacy-policy__button[style*="none"], .modal[style*="block"] .privacy-policy-advanced-settings-save');
		case 'alternate.de': return _sl('.cookie-acceptance-media-consent-accept');
		case 'betway.se': return _sl('.fixed-body .bwCookiePolicy .bwButton');
		case 'dark.netflix.io': return _sl('.abs-fill[class*="cookie-policy"] button');
		case 'mycare.de': return _sl('#cookie-settings-content[style*="block"] #btn-cookie-accept');
		case 'erdbeerprofi.de': return _sl('#gdpr-cookie-container #btn-cookie-allow');
		case 'pharmazeutische-zeitung.de': return _sl('#ccm .ccm_button_green');
		case 'dotomi.com': return _sl('.btn-continue[onclick^="cjil"]');
		case 'komplettbank.se': return _sl('.kb-cc[style*="block"] .kb-cc-btn_main');
		case 'novado.de': return _sl('#cookie-block[style*="block"] #btn-allow');
		case 'onwebchange.com': return _sl('.cookie_banner .btn-primary');
		case 'vodafone.nl': return _sl('.cookiewall___wrapper:not([style*="none"]) .cookiewall__accept');
		case 'strato.de': return _sl('body > .consent:not(.hidden) #consentSubmit, #cookie_overlay:not(.hidden) .consent:not(.hidden) #consentAgree');
		case 'texels.nl': return _sl('.show-cookie-notice .cookie-closer');
		case 'coperion.com': return _sl('.is-visible .button[data-cookie-close="accept"]');
		case 'lotto.pl': return _sl('.privacy-popup.active .orange-btn, #baseModal[style*="block"] #modalButtonAccept');
		case 'mehilainen.fi': return _sl('.MuiDialog-root[class*="Consent"] button + button');
		case 'llamaya.com': return _sl('.MuiDialog-root.cookies-modal .set-all');
		case 'tre.se': return _sl('.MuiDialog-root .MuiButton-containedPrimary, #react-aria-modal-dialog[aria-label*="Cookie"] button:first-child');
		case 'openx.com': return _sl('.ox-localization.active .ox-confirm');
		case 'evileg.com': return _sl('#privacy_policy_dialog[style*="block"] .btn[data-dismiss]');
		case 'testzentrale.de': return _sl('.cookie-settings[style*="block"] .secondary');
		case 'medis.pt': return _sl('#cookiedismiss .btn');
		case 'gramatica-alemana.es': return _id('cookiewarning_a');
		case 'ageas.co.uk': return _sl('#cookie[style*="block"] .cookie__btn');
		case 'audemarspiguet.com': return _sl('.odo-dialog--visible .js_cookie-policy-popup__accept-all');
		case 'vejdirektoratet.dk': return _sl('.ng-scope[ng-show="cookieDialogActive"]:not(.ng-hide) .cookie_button[ng-click*="accept"]');
		case 'norwegian.com': return _sl('.nas-element-cookie-consent__accept-all-button');
		case 'wapex.pl': return _sl('.modal[style*="block"] .btn[onclick*="CookieAccept"]');
		case 'sunny.co.uk': return _sl('.cookie-acceptance-modal button[name="accept-cookies-button"]');
		case 'pacma.es': return _id('panel_cookies_todas');
		case 'impulse.de': return _sl('.button[data-cc-accept]');
		case 'dailyfx.com': return _sl('.dfx-cookiesNotification--visible .jsdfx-cookiesNotification__close');
		case 'cinkciarz.pl': return _sl('#cookies-modal[style*="block"] .btn-primary');
		case 'joingoodcompany.nl': return _sl('#cookie-accept:not(.hide) .cookie-btn');
		case 'fanfiktion.de': return _sl('#colorbox[style*="block"] #ff-consent-close');
		case 'flex-tools.com': return _sl('.cookieBar--active .js-accept-cookie-bar');
		case 'taschen.com': return _sl('#ConsentManagerModal[style*="block"] #cookie_accept_all');
		case 'stationsdeski.net': return _id('accept_rgpd');
		case 'laboratoire-cellmade.fr': return _sl('#cookies:not([style*="none"]) #btnAcceptCookie');
		case 'stiftung-managerohnegrenzen.de': return _sl('.v--modal-overlay[data-modal="cookie-modal"] .btn');
		case 'v.calameo.com': return _sl('.consent.cookies .btn');
		case 'blasmusik-burgenland.at': return _sl('#appendto:not([style*="none"]) #showCookieserlauben');
		case 'ooma.com': return _sl('.gdpr_cookie_overlay:not(.d-none) #accept_cookie');
		case 'takko.com': return _sl('.cookie-policy-box .set-all-cookies');
		case 'singaporeair.com': return _sl('.modal-mask:not([style*="none"]) .confirm .popup__explicit__cookie, .popup--cookie-handling:not(.hidden) .btn-full');
		case 'hundeschmuck.store': return _sl('#myModal[style*="block"] form[action*="analytics"] .btn');
		case '118.lt': return _sl('#privacy-page-body #modal-btn-accept');
		case 'mini.de': return _sl('.md-if-frame:not([style*="none"]) .md-iframe-consent-message--fallback-teaser .btn');
		case 'one-insurance.com': return _sl('one-cookies-dialog one-theme-button');
		case 'yoyogames.com': return _sl('#cookie.is-showing #yoyo-cookie-accept');
		case 'cancercentrum.se': return _sl('#cookie-modal[style*="block"] .cookie-modal-consent-btn');
		case 'zlm.nl': return _sl('#cookie-modal.in .btn-primary');
		case 'wienholding.at': return _sl('#modalCookieGeneral[style*="block"] .btn-accept-all');
		case 'niko.eu': return _sl('.c-cookie.is-active .c-cookie__accept button');
		case 'billiger-aufladen.de': return _sl('#dsModal[style*="block"] .btn');
		case 'lebara.com': return _sl('#cookiesConsentModal[style*="block"] .btn[onclick*="accept"]');
		case 'malcoded.com': return _sl('.MuiDialog-root button');
		case 'polska6.pl': return _sl('.modal[style*="block"] .btn[data-pole="akceptuje"]');
		case 'warsztat.pl': return _sl('.modal[style*="block"] #akceptuje');
		case 'freenet-energy.de': return _sl('.modal[style*="block"] #cookie_ok');
		case 'norwegian.no': return _sl('nas-element-cookie-consent[style*="block"] .nas-button[class*="accept"]');
		case 'amewi.com': return _sl('.ck-hinweis[style*="block"] .save-cookie-options');
		case 'fysikoaerioellados.gr': return _sl('.cookies-consent-overlay:not(.hidden) .btn-cookies-accepted');
		case 'dubplate.be': return _sl('#gdpr-banner[style*="block"] .js-gdpr-accept');
		case 'sportiva.com': return _sl('#popup-privacy-policy:not([style*="none"]) .btn-cookie');
		case 'tk.de': return _sl('.is-display-consentmanager .g-consentmanager__confirm-selection');
		case 'redbook.com.au': return _sl('.csn-gdpr-modal button');
		case 't-mobile.nl': return _sl('#cookiePopup.show .button-primary');
		case 'tele2.nl': return _sl('#cookiePopup.show .button-green');
		case 'altomdinhelse.no': return _sl('.modal[style*="block"] .vicky-cookie-yes');
		case 'westfalen.igbce.de': return _sl('#first_confirmation_button.eupopup-button');
		case 'axa-im.fr': return _sl('.gh-accept-cookie-disclaimer');
		case 'gruener-punkt.de': return _sl('#cookie-modal[style*="block"] input[data-cookie="all"]');
		case 'coolmath.com': return _sl('.gdpr-overlay-container[style*="visible"] .accept-all-cookies');
		case 'hosteurope.de': return _sl('.ReactModal__Overlay--after-open .UPM__PrivacyModal span + span button');
		case 'zeit.de': return _sl('#main[data-ct-area="decision-main"] .box__accbtn button');
		case 'm.bancopopular.com': return _sl('#popup-cookieinfo:not(.hide) #btn-dmp-continue');
		case 'stat.si': return _sl('.surs-cookies-wrapper[style*="block"] .surs-cookie-button-yes');
		case 'faidatehobby.it': return _sl('#cl_modal .btn_main_yes');
		case 'smplayer.info': return _sl('.well .lead.text-center > .btn.active[href*="forum"]');
		case 'ipaddress.com': return _sl('#cc-wrapper[style*="block"] #cc-accept-btn');
		case 'ugenr.dk': return _sl('#gdpr-consent:not([style*="none"]) .accept');
		case 'ipc.be': return _sl('.cookiebox.show .btn-primary');
		case 'gezondeideetjes.nl': return _sl('.cookie-modal[style*="block"] button[onclick*="doCookie"]');
		case 'hagerzplan.de': return _sl('#modalCookies.in .btn-hager');
		case 'sunday.dk': return _sl('button[data-test-id="CookieBanner-CloseButton-Button"]');
		case 'freo.nl': return _sl('.popover-frame--visible #CookieAcceptMain');
		case 'saperesalute.it': return _sl('#cookieban .cookie');
		case 'archimag.com': return _sl('.eupopup-button_1');
		case 'rotterdammersvoorelkaar.nl': return _sl('.cookie-notice-wrapper.mfp-ready .button-confirm');
		case 'bcc.nl': return _sl('#cookiewallmodal.in .btn-primary');
		case 'wuestenrot.cz': return _sl('#cookie-modal.is-active .js-cookie-law-aggre');
		case 'fabrykacukiernika.pl': return _sl('.rodo-popup[style*="block"] button');
		case 'ostrzegamy.online': return _sl('.rodo-popup[style*="block"] button[data-cookie-name]');
		case 'bauder.de': return _sl('#cookieWarningText .privacy ~ a');
		case 'beamtic.com': return _sl('#_data_consent button');
		case 'dclaw.co.uk': return _sl('#dialog-cookies .btn-primary');
		case 'cookiewall.vice.com': return _id('i-agree');
		case 'fr12.nl': return _id('cookies');
		case 'latagliatellayyo.es': return _sl('#AcceptCookies ~ #Buttonholder > input');
		case 'mdsrl.it': return _sl('.cookie-modal .ui-button');
		case 'medtronic.nl': return _sl('.acceptcookies');
		case 'online-store.mercedes-benz.de': return _sl('.cookie-layer__close');
		case 'toc.mercedes-benz.com': return _sl('.modal-cookie-warning [data-modal-close="accept"]');
		case 'sogeti.nl': return _sl('input[name="cookiewall_answer"] + .button');
		case 'blog.daimler.de': return _sl('.modal-close[title*="Akzeptieren"]');
		case 'zomoto.nl': return _sl('#lnkAccept span');
		case 'runtervomgas.de': return _sl('#cookie-bar a');
		case 'teesbusinesscompass.co.uk': return _sl('#cookiepanel + .ui-dialog-buttonpane button');
		case 'qlstats.net': return _sl('#accept button[onclick*="acceptCookiePolicy"]');
		case 'openlibra.com': return _sl('#ol-cookie-policy button');
		case 'zilverenkruis.nl': return _id('cookiedrie');
		case 'weeronline.nl': return _sl('img[src*="storage.weeronline.cloud/cookies"] ~ .btn-accept, button[class*="wol-cookies-module__btn_acceptAll"]');
		case 'wampirki.com': return _sl('#NavigationBar1 a');
		case 'tradukka.com': return _sl('#cookies_consent button');
		case 'radioveronica.nl': return _sl('.button[onclick*="allowCookies"]');
		case 'zorgverzekeringhema.nl': return _sl('#cookiemelder button');
		case 'meandermc.nl': return _sl('#meanderCookieDialog button');
		case 'longines.it': return _sl('.widget-cookie .allow');
		case 'alternativa.fr': return _id('sub_cookie');
		case 'groepsaccomodaties.org': return _sl('input[name="cookie_answer"] + .button_yes');
		case 'paskoluklubas.lt': return _sl('.cookies-buttons .button');
		case 'etransport.pl': return _sl('.NovemediaCookiePolicy .approve');
		case 'skyradio.nl': return _sl('.cookie-wall .button');
		case 'payback.it': return _sl('#modal_CookieConsentOverlay .pb-button[data-dismiss]');
		case 'privacy.sbs.nl': return _sl('#settings-form .submit-button-small');
		case 'telegraafvandaag.nl': return _sl('.ott-bottom #button-agree');
		case 'outlet.mediamarkt.nl': return _id('cookie-consent');
		case 'monnikenwerk.pzc.wegenerwordpress.nl': return _sl('.pronamic_accept_button');
		case 'rd.nl': return _sl('#myModal.in input[onclick="cookieInfo.setLevel(1)"]');
		case 'fashionlab.nl': return _sl('#cookiewarning button[onclick*="close_cookie_agreement"]');
		case 'opencaching.de': return _sl('.cookie-notice--body #js--cookie-notice--close-button');
		case 'tube.nl': return _sl('button.js-cookie-consent');
		case 'rechtopgeld.nl': return _sl('#cookiewet .btn-success');
		case 'reindicium.com': return _sl('#myModal .btn[onclick*="setCookie"]');
		case 'm.leroymerlin.pl': return _sl('.popup-close-button');
		case 'fristadskansas.com': return _sl('label[for="UserAcceptedCookies2"]');
		case 'ikgastarten.nl': return _sl('.cookie-processed .agree-button a');
		case 'cookiesv2.publiekeomroep.nl': return _sl('.btn[onclick*="submit"]');
		case 'tripplite.com': return _sl('#cookieMsg a[onclick="tl.setEUcookie();"]');
		case 'relaischateaux.com': return _sl('.cnil-isvisible .close-cnil');
		case 'tournamentsoftware.com': return _sl('#cookies__modal .btn--secondary');
		case 'polskifrontend.pl': return _ev("a[contains(., 'Rozumiem')]");
		case 'matspar.se': return _ev("button[contains(., 'Jag godkänner')]");
		case 'fnatic.com': return _ev("button[contains(., 'Accept Essential Cookies Only')]");
		case 'granice.pl': return _ev("button[contains(., 'Akceptuję')]");
		case 'beautywelt.de': return _ev("button[contains(., 'Alle akzeptieren')]");
		case '24kitchen.nl': return _sl('.cookie-container .submit-button');
		case 'henkel-reiniger.de': return _sl('.js-close-cookielayer');
		case 'gerritveldman.nl': return _sl('.gvca_ok_link');
		case 'hampshire.spydus.co.uk': return _sl('form[action*="ALLOWCOOKIES"] input[name="ACSUBMIT"]');
		case 'dulcogas.it': return _sl('.standalonelink[title="chiudere"]');
		case 'weather-gb.com': return _sl('#privacy_consent_Modal[style*="block"] .btn[onclick*="Save"]');
		case 'bjuvsbostader.se': return _sl('#cookiecheck .btn');
		case 'zwangerschapspagina.nl': return _sl('.accept[href*="setcookie"]');
		case 'subaru.de': return _sl('.CookieLayer__button');
		case 'autovisie.nl': return _id('akkoord_text');
		case 'tradeplace.com': return _id('UIAcceptCookies_UIHyperLinkAccept');
		case 'team-rauscher.at': return _sl('.cookie.header .enable');
		case 'muddymatches.co.uk': return _id('cookie_permission_submit');
		case 'nebulacodex.com': return _sl('#capa .verde');
		case 'parliamentlive.tv': return _id('cookiesAccept');
		case 'ragepluginhook.net': return _sl('form[action*="CookieGate.aspx"] #acceptButton');
		case 'ravenblack.net': return _sl('input[type="submit"][value="I consent to this use of cookies"], input[onclick="eu_consent();"]');
		case 'scorito.com': return _sl('.cookieWallPreviewShutter + div #btnReturn');
		case 'sep.gr': return _id('apodoxiBtnCookies');
		case 'withgoogle.com': return _sl('a[href="http://www.cookiechoices.org"] + button');
		case 'suchdichgruen.de': return _sl('.important-notice .close-it');
		case 'smgcookies.nl': return _sl('.accept_box a.iaccept');
		case 'ratebeer.com': return _sl('input[type="button"][value="OK"]:not([id]):not([class])');
		case 'livep2000.nl': return _sl('.messagediv > a[href*="cookies"] ~ button[name="ok"]'); // livep2000.nl/monitor/cookieChoice.html
		case 'secureworks.co.uk': return _sl('.dsw-cookie-disclaimer .dsw-button');
		case 'my.moneypolo.com': return _sl('#cookie-strip .close-cookie');
		case 'choice.npr.org': return _sl('.user-actions #accept');
		case 'imhd.sk': return _sl('#cookieNotice a[href="#"]');
		case 'euroclix.nl': return _sl('#cookiesPreferencesForm button.press');
		case '9gag.com': return _sl('.gdpr.modal .blue');
		case 'mendrulandia.es': return _sl('#ventana #v_btAceptar');
		case 'cookiewall.finnik.nl': return _sl('.box form button[name="button"][type="submit"]');
		case 'hm.com': return _sl('#gdpr-modal .js-read-gdpr');
		case 'dokterdokter.nl': return _sl('.reveal-overlay[style*="block"] .button[name="acceptAllCookies"]');
		case 'motodesguacehnosgonzalez.com': return _sl('#cookies_policy.fade.in .btn-primary');
		case 'i-say.com': return _sl('.critical-modal.in .btn-primary');
		case 'purevpn.com': return _id('CTA_gdbrcontinue_analytic');
		case 'ivoox.com': return _sl('#gdpr-modal .btn-default');
		case 'discordbots.org': return _sl('.button[onclick*="HasSeenAnnoyingPopup"]');
		case 'slate.com': return _sl('.gdpr-form__consent');
		case 'wizaserwis.pl': return _sl('#promoinfo.open .modal-close');
		case 'mtc-it4.be': return _sl('.modal.fade.in .panel-warning .btn-warning');
		case 'time.com': return _sl('.gdpr-form .btn');
		case 'playtv.fr': return _sl('.grdp-button');
		case 'vanpartner.com': return _sl('.cookieslaw .closeBtn');
		case 'guce.oath.com': return _sl('.consent-form .agree-button-group .btn, .consent-container .btn[name="agree"]');
		case 'pathe.nl': return _sl('.btn[onclick*="CookieNotification.Accept"]');
		case 'allyouneedfresh.de': return _sl('#frmNoCookiesModal > a');
		case 'shmoop.com': return _sl('.btn.eu-opt-in, .privacy-notice .privacy-agree');
		case 'theforestmap.com': return _sl('.modal.fade.in #acceptcookies');
		case 'commentreparer.com': return _sl('.modal[style*="block"] #rgpd .btn.btn-danger');
		case 'societe.com': return _sl('#cookiesmodale .Button[name="cookiesall-oui"]');
		case 'gnkdinamo.hr': return _sl('#privacyPolicyModal.in .btn-confirm');
		case 'voyageforum.com': return _id('consent_button');
		case 'windguru.cz': return _id('butt_consent_psads_ok');
		case 'jobbird.com': return _id('gdpraccept');
		case 'toestemming.ndcmediagroep.nl': return _sl('form[action*="consent"] .buttons input');
		case 'alarmeringen.nl': return _sl('#modal #msg #accept');
		case 'ticketea.com': return _sl('#cookies-acceptance');
		case 'aoib.dk': return _id('consent-module-text-button');
		case 'hajduk.hr': return _sl('.cookie-popup__close');
		case 'overdrive.com': return _sl('.featherlight[style*="block"] .set-cookie__form input[type="submit"], #gdpr-modal[style*="block"] .cookie-popup__save, .cookieSettingsModal.open .confirm.button');
		case 'tappedout.net': return _sl('#gdpr-modal.in #tos-accept');
		case 'soccerstats.com': return _sl('.button[onclick*="cookiesok"]');
		case 'hanos.nl': return _sl('.banner_message[data-hanos-cookie-disclaimer][style*="block"] .btn[data-hanos-cookie-disclaimer-agree]');
		case 'brooksrunning.com': return _sl('.consent-form .consent-form__button.a-btn--primary');
		case 'hindustantimes.com': return _sl('.cookieswindow #agree');
		case 'avid.com': return _id('siteAlertAccept');
		case 'shop.avid.com': return _ev("button[contains(., 'Accept')]");
		case 'logicsupply.com': return _sl('.primary-button[href*="opt-in/?response=agree"]');
		case 'maa.nl': return _sl('.btn.accept-cookies');
		case 'chomikuj.pl': return _sl('#AcceptChomikujTermsForm .greenButtonCSS');
		case 'immobilien.net': return _sl('#root > div > div > section > p + .button.button--primary');
		case 'monsterhunterworld.com': return _sl('#gdpr.active #accept a');
		case 'imvu.com': return _sl('.privacy-policy-adult-dialog .accept-cookies');
		case 'postimees.ee': return _sl('.cookie-paywall__button');
		case 'livvin.com': return _sl('#welcome-message button[class*="Button__StyledButton"]');
		case 'werksite.nl': return _sl('.modal.show .btn[href*="allow"]');
		case 'allbinos.com': return _sl('.w3-modal[style*="block"] .w3-button[onclick*="polityka"]');
		case 'max.se': return _sl('.infoBanner .button');
		case 'newstalk.com': return _sl('#consent_modal.in .btn:not(.show-manage-settings)');
		case 'online.no': return _sl('.close-disclaimer .autofocus-el');
		case 'openpli.org': return _sl('div[onclick^="euCreateCookie"]');
		case 'privacy.vakmedianet.nl': return _sl('.general-cta-btn');
		case 'evaair.com': return _sl('.modal-box .cookie-close');
		case 'bluelagoon.com': return _sl('#app > div > p ~ button');
		case 'zekur.nl': return _sl('.modal[style*="block"] .tmakkoord');
		case 'elevensports.it': return _sl('#elevensports-privacy .close');
		case 'findaphd.com': return _sl('.cookieNoticeA .closeTab');
		case 'akamai.com': return _sl('.accept[data-module^="cookies"]');
		case 'mtmad.es': return _sl('button[class*="cookiesAlert__accept_button"]');
		case 'deondernemer.nl': return _sl('.cookiewall #cookiewall .button, button[name="acceptCookies"]');
		case 'todopvr.com': return _sl('#Button1[onclick*="cookiesOK"]');
		case 'clusterr.io': return _sl('cl-cookies-message .cl-btn');
		case 'schneider-umformen.de': return _sl('.cookie .button');
		case 'diabeter.nl': return _sl('#cookies button[name="cookies"]');
		case 'logistik-express.com': return _sl('#dsgvo[style*="block"] #cookies.lebutton-farbe');
		case 'kramp.com': return _sl('.cookie-message .button');
		case 'oskolaf.pl': return _sl('#modal-info.in .btn-podstawowy');
		case 'prvikvadrat.hr': return _sl('.modal.in .button--brand');
		case 'carglass.it': return _sl('#gdpr_compliance .button');
		case 'mapy.geoportal.gov.pl': return _sl('.appWelcome:not(.hide) .tos-button[onclick*="yes"]');
		case 'mkidn.gov.pl': return _sl('#myModal.in .btn-default');
		case 'gdansk.wios.gov.pl': return _sl('.sbox-content-adopt[style$="1;"] + #sbox-btn-close');
		case 'purepla.net': return _sl('.gdpr-cookies .agree-btn');
		case 'paypal-community.com': return _sl('.ui-dialog[style*="block"] #disclaimer #firstvisitbtn');
		case 'malmo.se': return _sl('#gdprConsent[style*="block"] .gdprConsent__btn');
		case 'wavesplatform.com': return _ev("span[contains(., 'ALLOW ALL')]");
		case 'ad.win.nl': return _sl('#cookieConsentBox[style*="block"] #cookieConsent');
		case 'kiplinger.com': return _sl('.kip-gdpr button');
		case 'rabobank.com': return _id('allowcookies');
		case 'robens-dn.de': return _sl('.grpelem > .Button');
		case 'retailtrends.nl': return _sl('.alert #accept');
		case 'nytimes.com': return _sl('.js-cookie-banner-link-optin, .shown.expanded button:first-child, #modal_gdpr[style*="block"] .accept_btn, .GDPRcta-btn, #cta-link-expanded-small.anchor_accept_cta, #accept_cta[class*="banner"]');
		case 'rofl-nerd.net': return _sl('input[name="consent"] + .btn');
		case 'jordans3d.planningwiz.com': return _sl('#policyModule .button');
		case 'chess24.com': return _sl('.dataConsentPopup[style*="block"] #data-consent-opt-in-all');
		case 'ing.com': return _sl('.cookie_consent[style*="block"] .btn, #cookiesDialog paper-button.ing-orange-tpp-cookies-dialog, .fancybox-wrap[style*="block"] #bcpm-altnotification-ok'); // think, developer ...
		case 'n26.com': return _sl('#gdpr-notice > div > div > div > button:first-child');
		case 'boligsiden.dk': return _sl('.modal.in .cookie-modal .o-btn');
		case 'royalenfield.com': return _sl('.re-cookie[style*="block"] .re-cookie-rht a');
		case 'teenmegaworld.net': return _sl('.cookie button');
		case 'belsat.eu': return _sl('.pum-active[data-popmake*="polityka"] .pum-close, .pum-active[data-popmake*="politika"] .pum-close, .pum-active[data-popmake*="policy"] .pum-close, .pum-active[data-popmake*="palityka"] .pum-close');
		case 'gazetabilgoraj.pl': return _sl('.pum-active[data-popmake*="komunikat"] .pum-close');
		case 'wschowa.info': return _sl('.pum-active[data-popmake*="uwaga"] .pum-close');
		case 'paks-bayern.weebly.com': return _sl('.banner .wsite-button[href*="willkommen"]');
		case 'hey.car': return _sl('#app button[data-testid*="cookieBanner-accept"], #app button[data-test-id*="cookieBannerAccept"]');
		case 'orliman.pl': return _sl('.policy .button--accept');
		case 'iradio.ie': return _sl('#myPrivacy.in .consentt');
		case 'chordify.net': return _sl('.consent-accept-all');
		case 'dnb.no': return _sl('#consent-modal[style*="block"] .consent-accept');
		case 'beardbrand.com': return _sl('.fancybox-opened .js-cookie-accept');
		case 'atal.pl': return _sl('.fancybox-opened .button-goInvest');
		case 'jointcommission.org': return _sl('.ui-dialog[style*="block"][aria-labelledby*="Cookies"] .ui-state-default:first-child');
		case 'pharmindex-online.hu': return _sl('#cookie_modal.in .btn[onclick*="cookieHide"]');
		case 'autotrader.nl': return _sl('button[aria-label="cookie-agreement"]');
		case 'aurubis.com': return _sl('.cookiepopup-close:not([style*="none"])');
		case 'tvasta.pl': return _sl('#infoModal.in .btn[data-dismiss]');
		case 'powiatslubicki.pl': return _sl('#myModal.in .btn[data-dismiss]');
		case 'agar.io': return _sl('#cc-notification[style*="block"] .cc-approve-button-thissite-ads');
		case 'f1racing.pl': return _sl('#box > #text + ul a[href*="x-set-cookie"]');
		case 'vivaldi.com': return _sl('#comments a[onclick*="AcceptCookies"]');
		case 'infosecurity.nl': return _sl('.btn[value="Akkoord"][onclick^="Send"]');
		case 'zurzeit.eu': return _sl('body > p > strong > a[href*="boxen/zur-zeit-aktuell"]');
		case 'webstaurantstore.com': return _sl('#user-data-policy-modal.show .btn[data-dismiss]');
		case 'stockhouse.com': return _sl('input[name="privacy-acceptance"] + .button');
		case 'meldpuntwegen.be': return _sl('.step-page.visible .cookie-melding.volledig + .button');
		case 'crowdestate.eu': return _sl('.modal.in .btn[ng-click*="gdprSave"]');
		case 'fctwente.nl': return _sl('.js-modal-cookie.is-visible .js-modal-accept');
		case 'ipla.tv': return _sl('app-rodo-rules-modal button + button');
		case 'tcroomburg.nl': return _sl('.cookiewall .btn-primary');
		case 'hepster.com': return _sl('.tingle-modal--visible .btn-cookie-primary');
		case 'okpal.com': return _sl('#js-hook-cookie .btn');
		case 'martinus.cz': return _sl('#gdpr.is-active .mj-gdpr-accept');
		case 'vox.pl': return _sl('#pgwModal #rodo_accept');
		case 'consent.talpanetwork.com': return _sl('meer-accept-cookie-policy meer-button, .package-choice-page button');
		case 'donneespersonnelles.rdvconso.org': return _sl('.ui-cookies .accept');
		case 'tipsyelves.com': return _id('cookie-consent-accept');
		case 'codra.net': return _sl('.cookie-consent.cookie--visible .btn');
		case 'kidioui.fr': return _sl('.blockingCookieAck .cookieACK .btn'); // voiture
		case 'milliman.com': return _sl('#cookieSection[style=""] .fillBtn');
		case 'goldenline.pl': return _sl('.gl-modal--visible .cookie-modal__form button');
		case 'ben.nl': return _sl('.cookie-wall-container .button--green');
		case 'wylecz.to': return _id('accept-targeting-disclaimer-button');
		case 'morrisonsislistening.co.uk': return _sl('#AcceptCookies ~ #Buttonholder #NextButton');
		case 'replika.ai': return _sl('a[href*="privacy"] + button');
		case 'e-sochaczew.pl': return _sl('#RODOCOOKIE.in .btn[onclick]');
		case 'norgips.pl': return _sl('#cookiemodal.in #accept-cookies-checkbox');
		case 'shoppable.com': return _sl('#cookiesModal.in .btn[data-dismiss]');
		case 'kaliber.pl': return _sl('#cookieModal.in .btn[onclick]');
		case 'travelchannel.co.uk': return _sl('#cppd .accept');
		case 'sites.google.com': return _sl('a[href^="https://www.google.com/policies/technologies/cookies/"] + div');
		case 'totalcasino.pl': return _sl('.popup-container[style*="block"] .gdpr-popup .accept_gdpr');
		case 'trubendorffer.nl': return _sl('#cookie_notice_popup.show .cta_button.primary');
		case 'jobserve.com': return _sl('#CookiePolicyPanel #PolicyOptInLink');
		case 'unive.nl': return _sl('#consent-wrapper .close-modal');
		case 'guce.yahoo.com': return _sl('#gucRefreshPage .loader-text a[href*="guccounter=2"]');
		case 'consent.yahoo.com': return _sl('.consent-wizard .btn.agree, .consent-form .btn[name="agree"], .error-wizard .btn.try-again-link');
		case 'eneco.nl': return _sl('.ReactModal__Overlay--after-open #AcceptCookiesButton');
		case 'pieseauto.ro': return _sl('.cookie-wall .js-submit');
		case 'dhbbank.nl': return _sl('#cookieModalCenter.show #cookieModalAcceptButtonFunctionaly');
		case 'wurth.es': return _sl('.lity-opened #grpd-fancy #cookie-success');
		case 'midas.co.za': return _sl('.cookiemodal.in .btn[data-dismiss]');
		case 'asnbank.nl': return _sl('.cookie-preference-modal .modal-visible .cookie-accept'); // hypotheken
		case 'voidu.com': return _id('eu-cookie-ok');
		case 'lavalleedestortues.fr': return _sl('.reveal-overlay[style*="block"] #modalCookies .button[href*="accept"]');
		case 'smartshop.hu': return _sl('.c-gdpr button');
		case 'fimfiction.net': return _sl('.cookie-consent-popup button[type="submit"]');
		case 'keepersecurity.com': return _sl('.cookie-consent-popup[style*="block"] .cookie_accept');
		case 'bakken.nl': return _sl('.cookie-info__button button');
		case 'quizme.pl': return _sl('#modal-consent[style*="block"] #give-consent-btn');
		case 'k-mag.pl': return _sl('.v--modal-rodo .btn-agree');
		case 'doka.com': return _sl('#cookie-modal--info.uk-open .uk-modal-close');
		case 'nieuwspoort.nl': return _sl('.reveal-overlay[style*="block"] #cookie-consent .button[href*="accept"]');
		case 'flybe.com': return _sl('#cookie-policy-modal.in #accept-cookies');
		case 'cookies-accept-nl.weeronline.cloud': return _sl('.content > .btn-accept');
		case 'cashconverters.be': return _sl('#dialogRGPD.in .btn[onclick*="accept"]');
		case 'buzz.ie': return _sl('#gdpr-consent-notice[style=""] .gdpr-button-consent');
		case 'rjwatches.com': return _sl('app-gdpr-modal .agree-wrapper button');
		case 'contractix.de': return _sl('.b7cConsent .b7cButton button');
		case 'startsmarthome.de': return _sl('#dws01-modal:not(.hidden) .close-modal'); // service
		case 'hech.be': return _sl('.bootbox-alert.in .btn-primary');
		case 'forever21.com': return _sl('#cookiesPopup[style*="block"] button[onclick*="AcceptCookie"]');
		case 'hondanews.eu': return _sl('#cookiesPolicyBanner[style*="block"] .caption-anchor[onclick*="createCookieConsent"]');
		case 'cameo.com': return _id('cookie-policy-banner-close-btn');
		case 'vandebron.nl': return _sl('.cookiebar-container .cookiebar-button');
		case 'zorgdirect.nl': return _sl('.c-modal.is-cookie.is-active #submitCookie');
		case 'bosch-mobility-solutions.com': return _sl('.disableCookieScroll .btn-coockie');
		case 'studio-eight.com': return _id('cookieAgreementSubmit');
		case 'tmdn.org': return _sl('#content #buttonBox ._button');
		case 'rituals.com': return _sl('.js-accept-cookies');
		case 'mysuzuki.hu': return _sl('.reveal-overlay[style*="block"] .js-accept-cookies');
		case 'gosh.no': return _sl('.modal.in #agreed_privacy_policy');
		case 'bokadirekt.se': return _sl('#cookie-modal .cookie-modal-button.primary');
		case 'hrblock.com': return _sl('.show-cookie-banner-eu #cookie-banner-eu .cbe__yes');
		case 'analog.com': return _sl('#cookie-consent-container.in .btn-success');
		case 'aldi-blumen.de': return _sl('.message_overlay[style*="block"] .button.center');
		case 'giz.berlin': return _id('privacyInformationClose');
		case 'msn.com': return _sl('#cacpageoverlay .accept, .optanon-allow-all-button, #onetrust-banner-sdk:not([style*="none"]) #onetrust-accept-btn-handler');
		case 'bk.com': return _sl('#cookie-popup[style*="block"] .btn-primary');
		case 'paravol.org': return _sl('.cookie-modal.in .btn[onclick*="agreeAndContinue"]');
		case 'lyricstraining.com': return _sl('#privacy-update-dialog[style*="block"] .accept');
		case 'kiddle.co': return _sl('.warning_message .cookie_btn');
		case 'mcdonalds.be': return _sl('.c-languages-page__button[href*="languages-page-accepted"]');
		case 'zorg-en-ict.nl': return _sl('.cookiewall-body .btn');
		case 'taimweser.com': return _chain('.modal[style*="block"] #verAjustesCookies', '#cookiesFuncionalesNo', '#cookiesPersonalizacionNo', '#guardarAjustesCookies');
		case 'hanos.be': return _sl('.banner_message[data-hanos-cookie-disclaimer][style*="block"] .btn[data-hanos-cookie-disclaimer-agree]');
		case 'surplus-lemarsouin.com': return _sl('#modal.show .btn[onclick*="Accept"]');
		case 'worldarchitecture.org': return _sl('#prvcsetModal.in #aggr');
		case 'bynco.com': return _sl('.cookie-accept-button .btn');
		case 'walmart.ca': return _sl('.privacy-open #accept-privacy-policies');
		case 'holmesplace.com': return _sl('.disableScroll .cookie-footer button');
		case 'klickmal.at': return _sl('#cookiemodal[style*="block"] .btn');
		case 'thewirecutter.com': return _sl('span[data-gtm-trigger="cookie_banner_dismiss"]'); // e
		case 'zemskidki.ru': return _sl('.warning-top--cookies:not([style*="none"])');
		case 'audi.co.uk': return _sl('.welcome-modal-content_after-open[aria-label*="Cookie"] .welcome-modal-content__close-button');
		case 'mtglotusvalley.com': return _sl('.v-dialog--active.v-dialog--persistent button + button');
		case 'canyon.com': return _sl('.modal.is-open #js-data-privacy-save-button');
		case 'talparadio.nl': return _sl('div[class*="CookieDialog__cookies__button"] > a');
		case 'bigbigchannel.com.hk': return _sl('.cookie_banner_padding #accept_cookie_policy');
		case 'brugge.be': return _sl('.cookie-preferences.in .js-btn-accept-all');
		case 'ps.be': return _sl('#CookieAlert.in .btn-primary');
		case 'soesterberg.nu': return _sl('.c-accept .wdpu-close');
		case 'sportmaniac.ro': return _sl('#gdprModal:not([style*="hidden"]) #accept-all-2');
		case 'fluidui.com': return _sl('#gdprModal.in .gdprModalBtn');
		case 'fotowien.at': return _sl('.js-cookie-consent.overlay--visible .js-cookie-consent-ok');
		case 'usefyi.com': return _sl('.marketing__modalContainer .GDPR-saveButton');
		case 'saxion.edu': return _sl('.cookie-wall-open .js-allow-cookies');
		case 'patient.info': return _sl('#cookie-policy-overlay[style*="block"] .alert__close');
		case 'imobiliare.ro': return _sl('#modalCookies.in .btn-actiune');
		case 'azoresgetaways.com': return _sl('#cookie-alert-popup.in #cookie-ok');
		case 'muzyczneradio.pl': return _sl('#modal-rodo.in .btn-success');
		case 'rynek-turystyczny.pl': return _sl('#modal-rodo[style*="block"] #saveCookiesAccept');
		case 'axa-corporatesolutions.com': return _sl('.js-root > div > div > div > div > div > div > div > a:first-child + a');
		case 'gofundme.com': return _sl('.hd_alert a[href*="privacy"] ~ a.js-close-button');
		case 'drjacobs-shop.de': return _sl('.cookieModal #acceptCookies');
		case 'tixr.com': return _sl('.overlay-active #overlay .button[action="confirm"]');
		case 'puydufou.com': return _sl('#rgpd-cookie-block.cookiergpd-actif .accept-cookie');
		case 'kokoroe.fr': return _sl('#rgpdmodal.in #closeRgpd');
		case 'vijfhart.nl': return _sl('.cookie-alert[style*="display"] .cookie__accept');
		case 'tapperuse.nl': return _sl('.cookie-notice-popup__close.btn');
		case 'fideliti.co.uk': return _sl('.ui-dialog[style*="block"] #ctl00_CookieControl1_AcceptCookieButton');
		case 'dellmont.com': return _sl('#privacyModal.in .btn-success');
		case 'gelmar.co.za': return _ev("button[contains(., 'I consent')]");
		case 'godbolt.org': return _sl('#alert.modal.show .close');
		case 'gefran.com': return _sl('.fancybox-opened #cookie-policy .btn-primary');
		case 'weforum.org': return _ev("button[contains(., 'I accept')]"); // intelligence
		case 'instock.nl': return _sl(".has-consent-popup .b-consent-popup .js-close-consent-popup");
		case 'aia.gr': return _sl("#pcmsCookieDialog .agreeCookie");
		case 'converse.com': return _sl("#modal-cookiePolicy.modal-active .accept-button");
		case 'tnt-click.it': return _sl(".mfp-ready .mfp-close");
		case 'tiger.nl': return _sl('.reveal-overlay[style*="block"] #cookieMessage .ConsentButton');
		case 'cookieservice.aginsurance.be': return _sl('.ag-CookieConsentWrapper button[ng-click*="allowAllCookies"]');
		case 'vietnamairlines.com': return _sl('.cookie-accept-box:not([style*="none"]) #cookie-agree');
		case 'bauermedia.co.uk': return '#cookies-modal[style*="block"] .c-btn[data-dismiss]';
		case 'inrs.fr': return '#GDPRCookiesConsentBannerV2 .buttons:last-child a';
		case 'veloenfrance.fr': return _sl('#conditions.in #oui');
		case 'xn--nringslivnorge-0ib.no': return _sl('#vicky-cookiebox[style*="block"] .vicky-cookie-yes'); // næringslivnorge.no
		case 'flikflak.com': return _sl('.reveal-overlay[style*="block"] .js-modal-cookie-accept');
		case 'rpgrealm.nl': return _sl('.button[href*="cookies/accept"]');
		case 'renaultfinanciacion.es': return _sl('.active .cssnk_modal__button--accept_and_continue');
		case 'meurthe-et-moselle.fr': return _sl('.modal.in .btn[onclick*="CookiesOk"]'); // rando
		case 'e3expo.com': return _sl('body > div > div[class^="view__Background"] button[class^="view__SubmitButton"]'); // live
		case 'saudia.com': return _sl('.ui--popup[style*="block"] .approve-website-cookies #travelContinue');
		case 'binance.je': return _sl('#__next > .layout > main ~ div a[href*="support.binance.je"] + div');
		case 'casadellibro.com': return _sl('.header ~ div > button');
		case 'hirado.hu': return _sl('#cookie:not([style]) .hms_cookeBbc_activate');
		case 'gulbenkian.pt': return _sl('.cookie-modal.display-block .btn-primary');
		case 'saa.nl': return _sl('.GDPR-popup.show .btn[ng-click*="savePrivacy"]');
		case 'mltracker.co.uk': return _sl('#cookieModal.show .close');
		case 'otpportalok.hu': return _sl('.pop_up_bg .cookie_button_col_btn button');
		case 'arte.tv': return _sl('.popup_cookies.active .button.active, .modal[style*="block"] #acceptAllCookiesBtn');
		case 'cip.nl': return _sl('.container > .justify-content-center #accept');
		case 'jm.se': return _sl('.cookie-accept-modal .button--main-cta');
		case 'motofaktor.pl': return _sl('.rodo[style*="flex"] .rodo-accept');
		case 'pactcoffee.com': return _sl('#app > div > div > a[href*="cookies"] + button');
		case 'danishfamilysearch.com': return _sl('.cookie-notice #btn_cookieok');
		case 'medicijnnodig.nu': return _sl('.ui-dialog[style*="block"] #cw_message_ok');
		case 'rodoviariadooeste.pt': return _sl('.pea_cook_wrapper #pea_cook_btn');
		case 'elsate.com': return _sl('#cookies_types + div > .button[onclick*="setCookie"]');
		case 'noriel.ro': return _sl('.agreementMessage[style*="table"] .daAgree');
		case 'vinbanken.se': return _sl('.fancybox-overlay[style*="block"] .cookie-takeover-inner > a');
		case 'mobilevikings.be': return _sl('.cookieWall.isVisible #btn-accept-cookies, .cookieWall.isVisible .button[data-jest-id="accept"]');
		case 'qioz.fr': return _sl('#cookies-popup[style*="block"] #acceptCookies');
		case 'union.nl': return _sl('.c-cookie-bar[data-redirect] .cookie-bar__button[js-hook-cookies-accept]');
		case 'melcloud.com': return _sl('#divCookie[style*="block"] .cookie-link a + a');
		case 'dane.gov.pl': return _sl('.modal.show #footer-close');
		case 'vakantieveilingen.nl': return _sl('.tingle-modal--visible .btn[data-click="cookies/accept"]');
		case 'ivolta.pl': return '.modal[style*="block"] #cookiebar-accept-btn';
		case 'krefting.de': return _sl('#cookieNote.in .close');
		case 'usercontrol.co.uk': return _sl('#cookieconfirm:not([style*="none"]) button'); // e
		case 'viberate.io': return _sl('#modal-cookies[style*="block"] #btn-cookies-accept');
		case 'spatiicomerciale.ro': return _sl('#modalCookies[style*="block"] .btn-actiune--principal');
		case 'snyk.io': return _sl('#cookie-disclaimer #cookie-link');
		case 'resources.techcommunity.microsoft.com': return _sl('.has-cookie-bar #catapultCookie');
		case 'tikkio.com': return _sl('.mfp-ready #gdpr-accept');
		case 'materialdistrict.com': return _sl('.md-modal-cookie #accept');
		case 'alan.com': return _sl('#root > div > button');
		case 'elsevier.com': return _sl('#cookie-modal[style*="block"] #accept-cookies'); // journalinsights
		case 'viva.gr': return '.cc-bar .cc-btn--reject';
		case 'corbby.com.pl': return _sl('.termspopupcontainer .termsagree');
		case 'songsterr.com': return _sl('header ~ section #accept');
		case 'cfos.de': return _sl('.modal[style*="block"] .btn[onclick*="accept_cookies"]');
		case 'live.globalplayer.com': return _sl('.gdpr-modal .gp-btn');
		case 'webmd.com': return _sl('.eugdpr-consent-button');
		case 'conseil-national.medecin.fr': return _sl('#rgpd-popin:not(.hide) .save-preference');
		case 'bunq.com': return _sl('.cookie-consent-modal-displayed .button-action-save-cookie-settings');
		case 'eon.de': return _sl('.cookie.in[style*="block"] #cookieLayerAcceptButton');
		case 'cloudvps.com': return _sl('.js-generic-module[action*="cookie-consent"] button');
		case 'kitsound.co.uk': return _sl('#cookie_consent_container .accept');
		case 'skip-me.top': return _sl('.sweet-alert[style*="block"] .got-cookie');
		case 'paradoxplaza.com': return _sl('#cookies-info:not(.cookie-info-disabled) .accept-cookie-policy');
		case 'yello.de': return _sl('#cookieconsent[open] .js-cookie-consent-action, .modal-stage--open .js_cookie-accept');
		case 'rambus.com': return _sl('.consent-modal[style*="block"] #consent_agree');
		case 'kayak.pl': return _sl('.cdk-overlay-container .ok-button');
		case 'fenb.be': return _sl('.cdk-overlay-container #acceptBtn');
		case 'bien-zenker.de': return _sl('.cookie-settings-submitall');
		case 'enbw.com': return _sl('.dialog.opt-in-dialog .eventelement-trackingOptIn, #cookie-overlay-modal.modal-stage--open .js_cookie-accept, .overlay-agreement .button--primary, .modal .cookie-agreement__confirm button');
		case 'soliver.de': return _sl('.jsPrivacyBarSubmit');
		case 'otwarteklatki.pl': return _sl('#popup-gdpr.visible .button-gdpr-agree');
		case 'erdinger.de': return _sl('.overlay.s-is-open .cp-confirmSelected');
		case 'luxortheater.nl': return _sl('.cookiewallBox #acceptCookies');
		case 'stadt-kuehlungsborn.de': return _sl('#cookieModal[style*="block"] .fixed-cookie-button');
		case 'sklep.regmot.com.pl': return _sl('.mfp-ready #RodoPopup .mfp-close');
		case 'engie-energie.nl': return _sl('#cookieModal[style*="block"] .button.close-modal');
		case 'adac-shop.de': return _sl('.has--cookiebot .cookiebot--close + button');
		case 'resume.se': return _sl('#__next > header ~ div > p ~ a[color]');
		case 'signatur.frontlab.com': return _id('ctl00_cookieDisclaimerAcceptedBtn');
		case 'mymuesli.com': return _sl('.popup-instance.show[data-identifier="cookies-consent"] .tm-cookies-consent-accept');
		case 'springlane.de': return _sl('#cookieLayer:not(.hidden) .js-btn-cookie-allow');
		case 'trans-missions.eu': return _sl('.cookie-modal.show a[onclick*="agreeAndContinue"]');
		case 'chainethermale.fr': return _sl('.modal__overlay--opened .cookie-notice__actions .primary');
		case 'lunii.fr': return _sl('.cookies-main-container .submit-button');
		case 'blitzhangar.com': return _sl('.cookie-consent-banner__accept');
		case 'cinemaxx.de': return _chain('.modalCookies.active .modalCookies_button-chosen', '.modalCookies.active .modalCookies_button-chosen');
		case 'amministrazionicomunali.it': return _sl('#cp-container:not([style*="none"]) #cookie-policy-agree-onlynecessary a');
		case 'healthsoul.com': return _sl('#GDPRModal[style*="block"] #GDPR-button');
		case 'telekom.com': return _sl('.cookie-optin-layer .btn-brand');
		case 'iberiaexpress.com': return _sl('#cookiesTermsModal[style*="block"] #acceptCookiesTerms');
		case 'kieskeurig.nl': return _sl('.js-consent-accept');
		case 'hogrefe.de': return _sl('.fancybox-is-open #fancybox-cookie-consent-settings .set-setting');
		case 'colors-effects.eu': return _sl('.ce-cookieSettings .ce-btn-light');
		case 'piw.pl': return _sl('.fancybox-is-open #rodo-modal .btn');
		case 'bbcchildreninneed.co.uk': return _sl('#modal-cookieConsent.is-active #cincpt_cookie_accept');
		case 'mulders-opel.nl': return _sl('.modal[style*="block"] #legal-cookie-accept');
		case 'parfuemerie.de': return _sl('.fancy-box-containerCookiemanager.fancybox-opened #accept-cookies-all');
		case 'filmboxlive.com': return _sl('.mobox-wrapper[style*="block"] #cookiePolicyOK');
		case 'olimerca.com': return _sl('#modalCookies.in .btn[onclick*="Accept"]');
		case 'howardrecords.com': return _sl('#root > div > div > button');
		case 'global.commerce-connector.com': return _sl('.cookie-notice > a');
		case 'fitx.de': return _sl('.cookie_overlay--shown .cookie_overlay__button--all');
		case 'nerim.com': return _sl('#cookies-box[style*="block"] .accept-cookies');
		case 'energyavenue.com': return _sl('.fancybox-overlay[style*="block"] .green-btn[href*="acceptcookies"]');
		case 'contasconnosco.pt': return _sl('.modal-mask--cookies button');
		case 'stoffenshop.eu': return _sl('#cookiePoppup[style*="block"] .btn-success');
		case 'vodafonetvonline.es': return _sl('.ngdialog .link[ng-click*="cookies.accept"]');
		case 'win2day.at': return _sl('.cookie-notification[style*="block"] .commitSelection');
		case 'careers.yardi.com': return _sl('#cmw-confirm-cookies[style*="block"] #cookieCheckAcceptAll');
		case 'hardware.info': return _sl('.cookie-wall__body .cookie-wall__cookie-container #decision[name="accept"]');
		case 'swindi.de': return _sl('#privacy-modal[style*="block"] .btn-success');
		case 'raiffeisen-immobilien.at': return _sl('#privacy-modal[style*="block"] .btn-primary');
		case 'lifecell.net': return _sl('#cookie-modal[style*="block"] #cookie-agree');
		case 'infineon.com': return _sl('#cookie-modal[style*="block"] .btn-submit');
		case 'philasearch.com': return _sl('#cookie-modal[style*="block"] .button.primary');
		case 'devdocs.io': return _sl('._notif._in ._notif-link[data-behavior="accept-analytics"]');
		case 'naekranie.pl': return _sl('#modal-rodo-info[style*="block"] .accept-rodo');
		case 'we-worldwide.com': return _sl('#cookieNotification[style*="block"] .js-cookie-allow');
		case 'iriedaily.de': return _sl('#cc-modal[style*="block"] .cc-save');
		case 'apartmenttherapy.com': return _sl('.jw-popup-cookies .jw-button');
		case 'ganinex.com.pl': return _sl('body > div[id^="sil-global-vue"] .popup .footer a');
		case 'konbini.com': return _sl('.modal .cookies-consent-content .button.primary');
		case 'lescommis.com': return _sl('.modal.in[aria-labelledby="confirm-modal-label"] .btn-default');
		case 'hasura.io': return _sl('#content > div > div > div > a[href*="privacy"] ~ img[alt*="Close"]');
		case 'tirerack.com': return _sl('.modalContainer[style*="block"] button[onclick*="acceptTerms"]');
		case 'itsnicethat.com': return _sl('.fixed > .bg-mineshaft button.bg-sun');
		case 'pewdiepie.store': return _sl('#gatsby-focus-wrapper div[class*="CookiesNotification"] button');
		case 'blackboard.com': return _sl('.CookieConsent #agree_button');
		case 'ae.com': return '.qa-modal-ccpa.ember-view .qa-reject-cookie-modal-ccpa, .qa-modal-gdpr.ember-view .qa-block-cookie-modal-gdpr';
		case 'bytbil.com': return _sl('.uk-modal[style*="block"] #privacyModalAcceptBtn');
		case 'inshared.nl': return _sl('.modal[style*="block"] .cookie-settings__button-left');
		case 'pointblankmusicschool.com': return _sl('.fancybox-overlay[style*="block"] .accept[onclick*="cookieControl"]');
		case 'werkenbijpathe.nl': return _sl('.cookie-notification__button:last-child');
		case 'kempen.com': return _sl('.cookie-bar--is-visible .button[data-js-hook="accept-button"]:not([disabled])');
		case 'wuestenrot.at': return _sl('.fancybox-overlay[style*="block"] .cookiePopup .button');
		case 'officiallondontheatre.com': return _sl('#cookie-consent > .open .mt3 > div:last-child a');
		case 'ferienwohnungen-ferienhaeuser-weltweit.de': return _sl('#Modal_Cookie_Hinweis[style*="block"] .btn[data-dismiss]');

		case 'technischesmuseum.at': return _sl('.modal[style*="block"] .btnAcceptAll');
		case 'atlasobscura.com': return '.modal[style*="block"] .js-cookie-consent-accept';
		case 'klett.de': return _sl('.modal[style*="block"] footer[id*="cookie-consent"] .btn-primary');
		case 'elearningindustry.com': return '.modal[style*="block"] form[action*="cookie-preferences"] .btn-success';

		case 'tvplayer.com': return _sl('.modal.show #cookie-consent-modal .btn, #cookie-consent-modal.in .btn'); // e
		case 'zolecka.pl': return _sl('#fancybox-wrap[style*="block"] #cookiePrivacyButton');
		case 'telekom-dienste.de': return _sl('.cookie-conf ~ .btn-primary');
		case 'mcdonalds.at': return '.cc-bg .cc-deny';
		case 'jobnet.dk': return _sl('#StatCookieConsentDialog[style*="block"] #AcceptStatCookie');
		case 'allround-pc.com': return _sl('.open [trigger-id="apcTrackingSavePreferences"]');
		case 'netze-bw.de': return _sl('#ndCookieConsent[style*="block"] #btnAcceptAllCookies');
		case 'meteo-parapente.com': return _sl('.rules-acceptation .prefered');
		case 'marktomarket.io': return _sl('#js-privacy-consent:not([style*="none"]) .btn--accept');
		case 'vvebelang.nl': return _sl('#cookieModal[style*="block"] #cookie-approve');
		case 'eboo.lu': return _id('cookie-authorize-btn');
		case 'opngo.com': return _sl('.cookie-banner-modal[style*="block"] .cookie-accept-all > div');
		case 'moteurnature.com': return _sl('.consentcontainer[style*="block"] #dw_accept_all');
		case 'nuxeo.com': return _sl('#cookie-inform-message:not([style*="none"]) .button');
		case 'campagne.krant.nl': return _sl('#CookieWall .wall .ButtonCta');
		case 'zappi.io': return _sl('.legal-wrapper .btn');
		case 'econt.com': return _sl('.gdpr-modal .btn[ng-click*="accept"]');
		case 'thomas-krenn.com': return _sl('#xtxNavigationOffCookiePolicy[aria-hidden="false"] [data-cookie-overlay-save]');
		case 'jostchemical.com': return _sl('.privacy-banner button');
		case 'falter.at': return _sl('#cookieconsent:not(.hidden) .btn-default');
		case 'mcdirect.com': return _sl('#privacy-policy-root[style*="block"] .btn');
		case 'blackstonefootwear.com': return _sl('#cookiewall.is-open .cookiewall__accept');
		case 'eko-motorwear.com': return _sl('.featherlight[style*="block"] #accept_all_cookies');
		case 'smartloop.be': return _sl('#cookie_modal[style*="block"] .btn');
		case 'fleetyards.net': return _sl('.modal.show .panel-btn[data-test="accept-cookies"]');
		case 'ing.lu': return _sl('.cookieBar .btn-primary');
		case '180grader.dk': return _sl('.modal.show modal-cookie .btn-success');
		case 'mysimpleshow.com': return _sl('#overlay:not([style*="none"]) .slug-cookie-consent .ok');
		case 'credit-suisse.com': return _sl('.m-consent-manager-open .consent-cookie-accept-all');
		case 'the12volt.com': return _sl('#consent_form input[type="submit"][name="Accept"]');
		case 'universiteitleiden.nl': return _sl('.cookies-overlay ~ .cookies .accept');
		case 'icould.com': return _sl('#cookie-blackout-curtain:not(.hide) .gdpr-submit');
		case 'stryker.com': return _sl('.modal[style*="block"] .btn-yes-hcp-modal');
		case 'kivra.se': return _sl('#___gatsby div[class*="CookieSplash"] button[class*="accept"]');
		case 'skb.si': return _sl('.cookiesSplash.open .cookiesSplashSaveAll');
		case '1blu.de': return _sl('.glightbox-open .mycookie-ok-btn');
		case 'refoweb.nl': return _sl('#cookieconsent button');
		case 'studienstiftung.de': return _sl('.modal[style*="block"] #CookieForm .btn-primary');
		case 'bol.com': return _sl('.modal[open] .consent-modal .js-confirm-button, #__next button[class*="CookieModal"]:first-child, div[data-componentid*="cookie-popup"] button:first-child');
		case 'lektury.gov.pl': return _sl('.modal[style*="block"] .cookies-accept-btn');
		case 'hawle.de': return _sl('#cookie-notice[style*="block"] .btn[data-dismiss]');
		case 'pruadviser.co.uk': return _sl('#cookie-notice[style*="block"] .cookie--accept');
		case 'omictools.com': return _sl('#cookie-policy-intro-dialog[style*="block"] .js-accept-all-intro');
		case 'vier-pfoten.de': return _sl('.modal[style*="block"] .module-privacy__accept');
		case 'mcl.de': return _sl('.js--mcl-accept-all-cookies');
		case 'etos.nl': return _sl('#cookie-modal.modal--is-showing .c-button--primary');
		case 'aucoffre.com': return _sl('.cookiesModal .btn-primary');
		case 'bazzar.hr': return _sl('.modal[style*="block"] .js-cookies-eu-ok');
		case 'player.fm': return _sl('.top-promo.legal-disclaimer .promo-accept');
		case 'hettalentenhuis.nl': return _sl('#cookie_bar .cookie-buttons button + button');
		case 'future-x.de': return _sl('#cookieBar[style*="block"] .buttonFTX');
		case 'cottonon.com': return _sl('#gdpr-policy-container #accept-cookies');
		case 'vodafone.de': return _sl('#dip-consent[style*="block"] .red-btn');
		case 'fega-schmitt.de': return _sl('.cookieWarning-container[style*="block"] .btn-accept');
		case 'astro.hr': return _sl('#privacy a[href*="gdpr_consent=accept"]');
		case 'audioboom.com': return _sl('div[id^="cookie-modal"] .modal[style*="block"] .btn.mrs');
		case 'wins.pl': return _sl('#cookies-modal[style*="block"] .close');
		case 'revistainforetail.com': return _sl('.modalCookies.in .btn');
		case 'arbeiterkammer.at': return _sl('.modal[style*="block"] .btn-accept-cookies');
		case 'swietawdomu.pl': return _sl('#cf-root.cookiefirst-root button[data-cookiefirst-button="primary"]');
		case 'hanover.com': return _sl('#cookieSettingsModal[style*="block"] .btnAccept');
		case 'xsports.lv': return _sl('.notice-cookie #cookie_allow_button');
		case 'pvcvoordeel.nl': return _sl('.js-cookie-popup.visible .js-popup-close');
		case '511tactical.com': return _sl('#cookieModal[style*="block"] .accept-settings');
		case 'certideal.com': return _sl('.cookie-preferences-on #cookie-go');
		case 'patronite.pl': return _sl('.modal--container .modal__action > div');
		case 'weblager.dk': return _sl('.modal[style*="block"] .btn');
		case 'billomat.com': return _sl('.remodal-is-opened #privacy-save');
		case 'pazarluk.com': return _sl('.remodal-is-opened .cookies-consent-btn');
		case 'antiquite-neuvillefranck.fr': return _id('sdgdpr_modal_buttons-agree');
		case 'thewinecellarinsider.com': return _sl('#tzPrivacyPolicyModal[style*="block"] #popup-close');
		case 'sparkassen-direkt.de': return _sl('#consent #sConsent');
		case 'zst-tarnow.pl': return _sl('#modal:not([style*="none"]) #agree');
		case 'kognitio.com': return _sl('.cookie-popup:not([style*="none"]) .cookie-close');
		case 'test-achats.be': return _sl('.mfp-ready #acceptAllCookiesTop');
		case 'der-farang.com': return _sl('.consent_accept');
		case 'norwegianreward.com': return _sl('#modalDataConsent[style*="block"] .re-button--success');
		case 'superdrug.com': return _sl('#privacy[style*="block"] .privacy-policy-popup__ok-btn');
		case 'doleasingu.com': return _sl('.modal[style*="block"] .btn[onclick*="WHClosePrivacyWindow"]');
		case 'yoump3.app': return _sl('.notice-container[style*="block"] .accept');
		case 'zeoob.com': return _sl('#cookies_modal[style*="block"] .btn-success');
		case 'pocztapolska24.pl': return _sl('#terms-drop[style*="block"] #close-me');
		case 'budapestbank.hu': return _sl('#gdpr-consent-modal .btn--primary');
		case 'werkenbijcalco.nl': return _sl('#cookie-modal-container .modal[style*="block"] .btn-submit');
		case 'cupsell.pl': return _sl('.tingle-enabled .tingle-modal-box__footer .btn');
		case 'cloudhealthtech.com': return _sl('.gdpr-container .btn');
		case 'puressentiel.com': return _sl('.mfp-ready .popup-form-rgpd #btn-accepter');
		case 'roms-download.com': return _sl('.modal[style*="block"] .btn[onclick*="kuk"]');
		case 'sg-zertifikate.de': return _sl('.cookie-preferences .button-focus');
		case 'bienwaldfitness.de': return _sl('#cookie_banner_modal[style*="block"] .btn-success');
		case 'store.leica-camera.com': return _sl('.js--modal.cookie--permission[style*="block"] .cc-dismiss');
		case 'matines.com': return _sl('.modal[style*="block"] .cookies .okbtn');
		case 'premiumkino.de': return _sl('.in .cookie-alert-modal-component .btn.center');
		case 'reidl.de': return _sl('.reveal-overlay[style*="block"] .bookies-zustimmen');
		case 'ocs.fr': return _sl('#rgpd-notice[style*="block"] #rgpd-notice-accept');
		case 'lm.be': return _sl('#cookiesmodal[style*="block"] #cookies-submit-all');
		case 'swipbox.com': return _sl('.modal[style*="block"] #coi-banner-wrapper #acceptAll');
		case '4gamers.be': return _sl('.popup #accept');
		case 'themisbar.com': return _sl('.modal[style*="block"] .btn[onclick*="cookieConsent"]');
		case 'acerta.be': return _sl('#modal-cookie.active .btn[data-modal-all]');
		case 'contofacto.it': return _sl('.privacypp.open .confirm');
		case 'kawasaki.de': return _id('LinkButton_Agree');
		case 'halebop.se': return _sl('.cookie-banner-modal:not([style*="none"]) #btncookieconsent');
		case 'packback.co': return _sl('.cdk-overlay-container .cta-large-button');
		case 'markets.com': return _sl('.cookie-modal:not(.d-none) .cookies-accept-all');
		case 'bstbk.de': return _sl('#privacy.fx_layer-visible button[onclick*="confirm"]');
		case 'unikrn.com': return _sl('.cookie-notice-visible #cookie-notice button');
		case 'technikmuseum.berlin': return _sl('.close-cookiebanner');
		case 'telekom.hu': return _sl('#cookie_consent:not([style*="none"]) #accept_all_cookies');
		case 'rku-it.de': return _sl('#cookienotice:not([style*="none"]) #accept-cookie');
		case 'nouvelobs.com': return _sl('.video-wall__button');
		case 'surveytandem.com': return _sl('.popup[ng-show="consentPopup"] .btn');
		case 'stapler.de': return _sl('.modal-dialog[style*="block"] #cookies-accept-all');


		// BEGIN These rules have a duplicate

		case 'bever.nl':
		case 'runnersneed.com':
		case 'snowandrock.com':
			return _chain('div[data-hypernova-key="AEMScenes_CookieMessage"] .as-t-box + .as-a-btn--link', '.as-m-popover .as-m-group button');

		case 'thebackmarket.nl': return _if('div[aria-modal="true"] a[href*="/terms/cookies"]', 'div[aria-modal="true"] button.underline, div[aria-modal="true"] button:first-child:not(.underline) + button[data-qa="accept-cta"]');

		// END
	}

	if (host.parts.length > 2)
	{
		host.parts.shift();
		host.full = host.parts.join('.');
		return getSelector(host);
	}

	return false;
}


// Search loop function

var timeoutDuration = 500;

function searchLoop(counter, host) {
	setTimeout(function() {
		var response = getSelector(host);

		if (response) {
			var clickCounter = 0, clickLoop = setInterval(function() {
				var e = typeof response == 'string' ? _sl(response) : response;

				if (e && e.click && !e.classList.contains(classname)) {
					e.classList.add(classname);

					// Give some more time for the DOM to setup properly
					setTimeout(function() {e.click();}, 500);

					clearInterval(clickLoop);
				}
				else {
					clickCounter++;

					if (clickCounter > 50)
						clearInterval(clickLoop);
				}
			}, 200);
		} else if (counter < 200)
			searchLoop(counter+1, host);
	}, timeoutDuration);

	timeoutDuration += 20;
}


// Initial timeout

(function() {
	var start = setInterval(function() {
		var html = document.querySelector('html');

		if (!html || html.className.indexOf(classname) !== -1)
			return;

		html.className += ' ' + classname;

		let host = {full: document.location.hostname.replace(/^w{2,3}\d*\./i, '')};
		host.parts = host.full.split('.');

		if (host.parts.length > 1)
		{
			// Network domain parts - minimal length can be decreased if needed
			host.long = host.parts.filter(function(value) {return value.length >= 4});

			host.top = host.parts[host.parts.length - 1];
			searchLoop(0, host);
		}

		clearInterval(start);
	}, 500);
})();`,
	6: `function getE(h)
{
	switch (h)
	{
		case 'ordina.nl':
		case 'ordina.com':
		case 'werkenbijordina.nl':
			return ['AllowCookies=yes'];

		case 'letssingit.com':
		case 'lyricsbox.com':
			return ['cookieconsent=1111'];

		case 'proximustv.be':
		case 'tmz.com':
		case 'sap.com':
			return ['notice_preferences=2:', 'notice_gdpr_prefs=0,1,2:'];

		case 'kontaktbazar.at':
		case 'hoernews.de':
			return ['cookieconsent_status=dismiss'];

		case 'newegg.com':
		case 'newegg.ca':
			return ['NV%5FGDPR=001'];

		case 'pee.place':
		case 'nearest.place':
		case 'postboxmap.com':
			return ['gdprconsent=1'];

		case 'limango.de':
		case 'limango.pl':
			return ['lil_cb=18170'];

		case 'dlmirror.eu':
		case 'radioaustria.at':
		case 'kronehit.at':
			return ['consent=1'];

		case 'binumi.com':
		case 'ravi.pl':
			return ['idcac=1'];

		case 'fotoc.dk':
		case 'fjshop.dk':
			return ['cookiedough=1'];

		case 'esea.net':
		case 'advodan.dk':
			return ['cookie_consent=1'];

		case 'betterhelp.com':
		case 'regain.us':
			return ['gdpr_cookie_consent_given=yes'];

		case 'compteur.fr':
		case 'lebens.guru':
			return ['cookies_accepted=1'];

		case 'indonesia-publisher.id':
		case 'ciustekno.me':
			return ['cookieLaw=got_it'];

		case 'livejasmin.com':
		case 'livesexasian.com':
			return ['is_personalized_content_consent_given=1'];

		case 'milkywire.com':
		case 'freeletics.com':
			return ['cookie_consent=true'];

		case 'prodyna.com':
		case 'prodyna.ch':
		case 'prodyna.at':
		case 'prodyna.co.uk':
			return ['prodyna-cookies=ALL'];

		case 'euroleague.net':
		case 'eurocupbasketball.com':
			return ['modalNotSeenEV=1', 'cookieBanner=true'];

		case 'reimageplus.com':
		case 'xn---43-9cdulgg0aog6b.xn--p1ai':
			return ['cookie_accepted=1'];

		case 'pruefungshelden.de':
		case 'elopage.com':
			return ['p_consent_accepted_shop=1%2C2'];

		case 'g2a.com':
		case 'g2a.co':
			return ['gdpr_cookie=%5B%5D'];

		case 'elvenar.com':
		case 'forgeofempires.com':
			return ['CookieNotification=1'];

		case 'finantia.com': return ['finantia_cookie=active'];
		case 'finantia.es': return ['strictly_necessary=active'];
		case 'domhouse.pl': return ['rodo=1'];
		case 'onmsft.com': return ['euconsent=1'];
		case 'snapchat.com': return ['sc-cookies-popup-dismissed=true'];
		case 'region-villach.at': return ['app_accept_cookies=true'];
		case 'assocarabinieri.it': return ['cookieLaw=1'];
		case 'squawka.com': return ['squawkacookie=accept'];
		case 'jisc-collections.ac.uk': return ['cookies_accepted=true'];
		case 'indiegala.com': return ['policy-popup=true'];
		case 'archiveofourown.org': return ['accepted_tos=20180523'];
		case 'tiles-studio.cz': return ['showCookieBox=1'];
		case 'datanyze.com': return ['CookieUsage=true'];
		case 'technics.com': return ['cookie_opt=in'];
		case 'duolingo.com': return ['gdpr_cookie=true'];
		case 'shop.sailboatowners.com': return ['consent=00'];
		case 'picmonkey.com': return ['pm_cookie_consent=1', 'termsOfUse=0'];
		case 'cjponyparts.com': return ['privacypopup=stop'];
		case 'radio.juke.nl': return ['talpa-radio_cookie-consent=true'];
		case 'aceandtate.com': return ['cookieconsent_status=allow'];
		case 'magazine.campingtrend.nl': return ['allowCookie=%7B%22allow%22%3A%22y%22%7D'];
		case 'favre-leuba.com': return ['seenCookieBar=true'];
		case 'iper.it': return ['eu_cookie_consent=1'];
		case 'ulule.com': return ['ul_tarteaucitron=true'];
		case 'modelle-hamburg.de': return ['privacypolicy1=1'];
		case 'lubimyczytac.pl': return ['rodoInfo_v_11=1'];
		case 'twitter.com': return ['eu_cn=1'];
		case 'lendo.se': return ['seenCookieBanner=true'];
		case 'vuecinemas.nl': return ['cookie_consent=3'];
		case 'fightful.com': return ['gdpr_popup_hide=checked'];
		case 'tropicana.fr': return ['tropcookie=true'];
		case 'foodetective.co': return ['cookiesAgreement=accepted'];
		case 'hrkgame.com': return ['gdpralert=done'];
		case 'quandoo.at': return ['quandoo_cookie_policy=accepted'];
		case 'grouperf.com': return ['cookie_rgpd=1']; // subdomains
		case 'insidebruegel.net': return ['InsideBruegel=init'];
		case 'szukajwarchiwach.pl': return ['info_closed=1'];
		case 'jow.fr': return ['CNIL=OK'];
		case 'dwell.com': return ['gdpr=1'];
		case 'global.brother': return ['popup-cookie-disabled=yes'];
		case 'telecinco.es': return ['ms_cookies_alert_accepted=true'];
		case 'klassikradio.de': return ['CookiePolicyAccepted=true'];
		case 'euroclear.com': return ['cc_necessary=true', 'cc_functional=true', 'cc_analytics=true'];
		case 'sfendocrino.org': return ['name1=the_cookie'];
		case 'appi.org': return ['apa_gdpr_accepted=True'];
		case 'agroneo.com': return ['consent=yes'];
		case 'doc.fr': return ['cookieAgreement=True'];
		case 'payscale.com': return ['accept-cookie=yes'];
		case 'royaldesign.no': return ['cookiesAccepted=1'];
		case 'tkmaxx.com': return ['tjxUser=true'];
		case 'yourstory.com': return ['alreadyVisited=true'];
		case 'pekao.com.pl': return ['gdprAgreed=true'];
		case 'zattoo.com': return ['cookie_policy_agreement=1'];
		case 'hetzner.com': return ['cookies_allowed=1']; // accounts
		case 'ing.nl': return ['cookiepref=1'];
		case 'ing.be': return ['cookiesOptin=true'];
		case 'wallpaperup.com': return ['wup_jwt=1'];
		case 'antyweb.pl': return ['aw-privacy-approval=true']; // zeropln
		case 'archief.amsterdam': return ['verklaring=1'];
		case 'enviam.de': return ['dws01-level=2', 'dws02-level=2'];
		case 'quick.be': return ['cookie-policy-version=2', 'cookie-policy-accepted=1'];
		case 'virustotal.com': return ['euConsent=1', 'tosChangedAccepted=1'];
		case 'cmore.se': return ['cookieBannerDismissed=true'];
		case 'choosist.com': return ['accept_cookie=1'];
		case 'kufar.by': return ['ck=1'];
		case 'ezys.lt': return ['cookie-consent=3'];
		case 'kalenderwoche.de': return ['cookiepolicy=0'];
		case 'poolia.se': return ['cookiePolicyAccepted=1']; // jobb
		case 'researchgate.net': return ['cc=1', 'cookieconsent_dismissed=true'];
		case 'cindicator.com': return ['accepted_cookie=true'];
		case 'kitchenplanner.ikea.com': return ['EnableGlobalLicenseAgreement=2015-04-01', 'HideCookieAgreementBanner=true'];
		case 'atro-provita.de': return ['cookieconsent=true'];
		case 'unicheck.com': return ['unicheck-accepted-cookies=true'];
		case 'meteoblue.com': return ['privacysettings=["required"]'];
		case 'gberardi.com': return ['cookie_notify=true'];
		case 'choiceandmedication.org': return ['rgwp_acceptedCookie=1'];
		case 'fiaworldrallycross.com': return ['privacyupdate=1'];
		case 'pansci.asia': return ['panNotiBarCookie=1'];
		case 'business.google.com': return ['isCookieWarningAccepted=true']; // e
		case 'aktion.mercedes-benz.de': return ['cookiePolicy=accepted'];
		case 'willitclassic.com': return ['GDPR:accepted=true'];
		case 'byggshop.se': return ['showCookieWarning=false'];
		case 'blockstack.org': return ['cookiesBanner=ACCEPTED'];
		case 'mypolacy.de': return ['rCoo=1'];
		case 'cruise.jobs': return ['cookie_consent=full'];
		case 'bilety.mazowieckie.com.pl': return ['HideRodoInfo=y'];
		case 'kink.nl': return ['cookieConsent-1.0=%5B%7B%22id%22%3A%22analytics%22%2C%22active%22%3Atrue%7D%2C%7B%22id%22%3A%22advertisement%22%2C%22active%22%3Atrue%7D%2C%7B%22id%22%3A%22social%22%2C%22active%22%3Atrue%7D%5D'];
		case 'epapern.present-perfect.de': return ['cookie_epapern_05_2018_accept=1'];
		case 'multikino.pl': return ['PPC=true'];
		case 'portugalforum.org': return ['xf_eucookie=1']; // e
		case 'slovenia.info': return ['cnotice=1'];
		case 'aktionsfinder.at': return ['cksntc=true'];
		case 'bosch-climate.be': return ['BoschTTBECookieConsent=%7B%22comfort%22%3Atrue%2C%22marketing%22%3Afalse%7D']; // webbooking
		case 'gyakorikerdesek.hu': return ['cookieok=1']; // e
		case 'cruisebare.com': return ['crb_popup_disable=1'];
		case 'vaneesterenmuseum.nl': return ['eesterenpopupv2=cookie-set'];
		case 'e-horyzont.pl': return ['user_allowed_save_cookie_m2=%7B%221%22%3A1%7D'];
		case 'lonewolfonline.net': return ['visited=yes'];
		case 'bookchoice.com': return ['cookie-policy-accepted=true'];
		case 'codementor.io': return ['cm-general_cookie-consent=true'];
		case 'e-syntagografisi.gr': return ['cookieconsent_status=1']; // /p-rv/p
		case 'werkenbijhanos.nl': return ['cd=1'];
		case 'mondo-tech.it': return ['accettacookie=ok'];
		case 'decrypt.co': return ['GDPR_Settings=%7B%22doNotTrack%22%3Afalse%7D'];
		case 'wetter.team': return ['DSVGO=true'];
		case 'coffeecollective.dk': return ['CC_WEB_COOKIE_CONSENT=true'];
		case 'distrokid.com': return ['DK_COOKIE_ACCEPT=true'];
		case 'bakkt.com': return ['iceBanner=PrivacyBakkt0101'];
		case 'hartfordbusiness.com': return ['Drupal.visitor.WEBSITECOOKIEALLOWED=YES'];
		case 'vostron.com': return ['vostronCookieAcceptance=true'];
		case 'flens.de': return ['flens-cookie=1'];
		case 'my.dhlparcel.nl': return ['cookie-agreed=2'];
		case 'waitrose.com': return ['wtr_cookie_consent=1'];
		case 'wearebo.co.uk': return ['hasUserAgreed=true'];
		case 'lucky7bonus.com': return ['messageClosed=1'];
		case 'otomoto.pl': return ['cookieBarSeen=true'];
		case 'heineken.hr': return ['gaOptOut=false'];
		case 'cimri.com': return ['CimriCookiePolicy=1'];
		case 'globalplayer.com': return ['consentUUID=382584da-af8a-469e-aedf-11ac420ec96d'];
		case 'dehn.de': return ['cookie-agreed=1', 'cookie-processed-02=ck_1:true%2Cck_2:true'];
		case 'minecraft.net': var d = Math.round(Date.now()/1000); return ['MSCC=' + (d - d % 86400)];
		case 'crtm.es': return ['crtmcookiesCAnaliticas=1', 'crtmcookiesProtDatos=1'];
		case 'computertotaal.nl': return ['SITE_COOKIE_CONSENT=True'];
		case 'vodafoneziggo.nl': return ['cookies-accepted=true'];
		case 'frankfurt.de': return ['cookieAccepted=needed---piwik'];
		case 'hackerrank.com': return ['show_cookie_banner=false'];
		case 'kfc.ru': return ['cookieAccess=1'];
		case 'radiodienste.de': return ['cookieinfo=1'];
		case 'creditkarma.co.uk': return ['cc_cookie_accept=cc_cookie_accept'];
		case 'dofsimulator.net': return ['cookieSettings=cookie'];
		case 'magyarorszag.hu': return ['cookies_ok=1'];
		case 'dfds.com': return ['GDPR=true'];
		case 'tarnkappe.info': return ['CM_cookieConsent=1'];
		case 'celo.org': return ['__responded_to_consent__=true'];
		case 'eduelo.pl': return ['cookies=1'];
		case 'plex.tv': return ['plex_tv_cookie_consent=2'];
		case 'forumactif.org': return ['dntfa_banner=1'];
		case 'vitra.com': return ['vitra_constent=performance'];
		case 'usi.it': return ['priv=ok', 'approvecockie1=ok'];
		case 'xercise4less.co.uk': return ['X4LCookiesAccepted=true'];
		case 'inyourarea.co.uk': return ['cookie_seen=true'];
		case 'carrefour.pl': return ['ec4CookiesSettings=false'];
		case 'welovedevs.com': return ['userDismissedCookiesWarning=true'];
		case 'tureckisklep.pl': return ['condition_1=1'];
		case 'regus.com': return ['cpa=accepted'];
		case 'devias.io': return ['devias_consent=c1:1|c2:1', 'consent=true'];
		case 'neuefische.de': return ['cookiesAccepted=true'];
		case 'waldlandwelt.de': return ['c=j'];
		case 'pluto.tv': return ['tos_acceptance_date=1596261209788'];
		case 'thecycleverse.com': return ['AMPLCONS_internal=true'];
		case 'pagetiger.com': return ['cookie-preferences={%22acceptedAnalyticsCookie%22:true}'];
		case 'tv-trwam.pl': return ['HAS_COOKIES_FORM_SHOWED=true', 'ARE_REQUIRED_COOKIES_ACCEPTED=true'];
		case 'phish-test.de': return ['gtag=true'];
		case 'sea-seek.com': return ['OK_Cook=OK'];
		case 'dajar.cz': return ['cookieNoticeAccept=true'];
		case 'jobalert.ie': return ['hasAcceptedCookies=true'];
		case 'netztest.at': return ['RMBTTermsV6=true'];
		case 'gaana.com': return ['gdprv1=1'];
		case 'cleanairgm.com': return ['cleanair=%7B%22cookiesEssential%22%3Atrue%7D'];
		case 'e-fundresearch.com': return ['cookieinfo={%22functional%22:true}'];
		case 'systembolaget.se': return ['cookieConsent=[%22statistical%22%2C%22profiling%22%2C%22useful%22]'];
		case 'elkem.com': return ['ConsentClosed=1'];
		case 'tonershop.at': return ['cc_granted=true'];
		case 'verce.me': return ['verceCookieApproved=true'];
		case 'kjell.com': return ['ccValues=1|2'];
		case 'aimotive.com': return ['data-protection=true'];
		case 'parcel2go.com': return ['COOKIE_PROMPT=1'];
		case 'steigmiller.bio': return ['fvw_privacy=enabled'];
		case 'kinoheld.de': return ['KHCONSENT=accept'];
		case 'calm.com': return ['has-agreed-to-cookies=true'];
		case 'resursbank.se': return ['cookie_consent=necessary%3A1%2Cstatistics%3A0%2Cmarketing%3A0'];
		case 'airmates.eu': return ['privacy-dialog-shown=true'];
		case 'mentimeter.com': return ['has_approved_cookie_policy=1'];
		case 'baukobox.de': return ['bb_dsgvo=true'];
		case 'delta.app': return ['cookie-consent-given=true'];
		case 'kayak.fr': return ['DATA_CONSENT=false'];
		case 'x-kom.pl': return ['cookieAccept=true'];
		case 'theathletic.com': return ['cookie-policy-accept=0', 'cookie-policy-optout=analyticaltracking'];
		case 'kayak.co.uk': return ['DATA_CONSENT=true'];
		case 'mymoria.de': return ['gatsbyConsentMandatory=true'];
		case 'peticie.com': return ['num_times_cookie_consent_banner_shown=1'];
		case 'tgz-ol.de': return ['cookies_consent=1'];
		case 'dunhamssports.com': return ['dw_cookies_accepted=0'];
		case 'evangelisch.de': return ['bigfoot_cookie-consent=true'];
		case 'ubi2.wit.edu.pl': return ['GPRD=128'];
		case 'outandaboutlive.co.uk': return ['cookie-control=true'];
		case 'tesa.com': return ['cookies_informed=true'];
		case 'turboimagehost.com': return ['cookiewarn=1'];
		case 'mubi.com': return ['mubi-cookie-consent=allow'];
		case 'ersatzteilshop.de': return ['cookie-preference=1'];
		case 'svenskaspel.se': return ['cookie_consent={\"ad\":false,\"personalized\":false,\"analytics\":false,\"provision\":false,\"version\":2}'];
		case 'restegourmet.de': return ['consent_accepted=1'];
		case 'cire.pl': return ['APP_COOKIES_POLICY=true', 'APP_COOKIES_TERMS_AND_CONDITIONS=true'];
	}


	var parts = h.split('.');

	if (parts.length > 2)
	{
		parts.shift();
		return getE(parts.join('.'));
	}

	return false;
}


var h = document.location.hostname.replace(/^w{2,3}\d*\./i, ''),
	cookies = getE(h);

if (cookies)
{
	var counter = 0;

	cookies.forEach(function(cookie){
		cookie = cookie.split('=');
		var parts = ('; ' + document.cookie).split('; ' + cookie[0] + '=');

		if (parts.length < 2 || parts[1].split(';')[0] != cookie[1])
		{
			// First try to delete the cookie

			if (parts.length > 1) {
				var domain_parts = h.split('.');

				while (domain_parts.length > 1) {
					document.cookie = cookie[0] + '=; domain=' + domain_parts.join('.') + '; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
					domain_parts.shift();
				}
			}

			document.cookie = cookie[0] + '=' + cookie[1];
			counter++;
		}
	});

	// Reload if cookies are enabled
	if (counter > 0 && document.cookie.length > 0)
		document.location.reload();
}`,
	7: `var a = document.getElementById('ctl00_ctl01_ucCookieCheck_btnConfirm');

if (a)
{
	document.getElementById('ctl00_ctl01_ucCookieCheck_rblAllowCookies_0').click();
	a.click();
}`,
8: `function _sl(s, c) {
	return (c || document).querySelector(s);
}

function _id(s) {
	return document.getElementById(s);
}


var _i = setInterval(function() {
	var html = _sl('html');
	
	if (!html || /idc8_335/.test(html.className))
		return;
	
	clearInterval(_i);
	
	html.className += ' idc8_335';
	
	var c = 0, l = document.location, i = setInterval(function() {
		
		var e;
		
		if (l.hostname.split('.')[0] == 'consent') {
			if (l.pathname == '/m') {
				e = _sl('form[action*="//consent."][action$="/s"] button');
				
				if (e)
					e.click();
			}
			
			
			// Being displayed occasionally. A/B testing?
			// https://wap.google.com/search?q=test&gl=nl&hl=nl&gbv=2&ucbcb=1&ei=RGMPYdWdL_-F9u8Pg5a3mAI
			
			else if (l.pathname == '/ml') {
				e = _sl('form[action*="//consent."][action$="/s"] .button');
				
				if (e)
					e.click();
			}
		}
		else {
			// The latest cookie popup, desktop and mobile
			
			var container = _sl('div[aria-modal="true"][style*="block"]');
			
			if (container && _sl('a[href*="policies.google.com/technologies/cookies"]', container)) {
				_sl('button + button', container).click();
				
				// Autofocus on the search field
				e = _sl('form[role="search"][action="/search"]:not([id]) input[aria-autocomplete="both"]');
				if (e) e.focus();
			}
			
			// General privacy reminder
			e = _sl('form[action^="/signin/privacyreminder"] > div > span > div:not([role]) > div:not([tabindex]) span + div');
			if (e) e.click();
			
			// #cns=1
			if (l.hash == '#cns=1')
				l.hash = '#cns=0';
		}
		
		c++;
		
		if (c == 300)
			clearInterval(i);
	
	}, 500);
}, 500);`
}

var log = function (...data) {
    console.log("[I don't care about cookies]:", ...data);
}

var scriptFun = function () {

    // injectStyle injects the css text at the end of the body
    function injectStyle(cssStyle) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = cssStyle;
        document.getElementsByTagName('body')[0].appendChild(style);
    }

	function injectScript(jsScript) {
		var script = document.createElement('script');
		script.type = 'application/javascript';
		script.innerHTML = jsScript;
        document.getElementsByTagName('body')[0].appendChild(script);
	}

    // findRule finds a matching rule for this host
    function findRule(host) {
        // Try to find rules for this host. E.g. 
        // if the domain is "sub.domain.com" it will first try
        // "sub.domain.com", then "domain.com"

        var domainSplit = host.split(".");

        for (let i = 2; i < domainSplit.length + 1; i++) {
            var domain = domainSplit.slice(domainSplit.length - i, domainSplit.length).join(".").toLowerCase();

            var rule = rules[domain];
            if (rule) {
                log("First rule found for domain", domain);
                return rule;
            }
        }
        return null;
    }

    // styleForRule returns
    function styleForRule(rule) {
        var style = "";
        if (rule["s"]) {
            // Specialized style
            style += rule["s"];
        }

        if (rule["c"]) {
            style += "\n" + commons[rule["c"]] || "";
        }

        return style;
    }

	function scriptForRule(rule) {
		if (rule["j"]) {
			log("Rule requests script", rule["j"]);
			return javascriptFixes[rule["j"]];
		}
		return null;
	}

    var r = findRule(location.host);
	if (!r) {
		return;
	}

    log("Rule:", r);

    var css = styleForRule(r);

    if (css) {
        injectStyle(css);
        log("Computed style:", css);
    } else {
        log("No style to inject")
    }

	var js = scriptForRule(r);
	if (js) {
		injectScript(r);
		log("Injected script");
	}
}

if (document.readyState == 'complete') {
    scriptFun();
    log("Ran on completed document");
} else {
    window.addEventListener('load', scriptFun);
    log("Registered as 'load' event listener");
}

