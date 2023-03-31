import React, { Component,useState } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

 articles = [
        
    {
        
        "source": {
            "id": null,
            "name": "9to5Mac"
        },
        "author": "Derek Wise",
        "title": "40+ macOS keyboard shortcuts you should know [Video]",
        "description": "You probably use your computer every day without giving it a second thought, but there are lots of shortcuts that you could be using to get the most out of your time. Here are over 40 keyboard shortcuts you should be using in macOS.\n more…\nThe post 40+ macOS …",
        "url": "https://9to5mac.com/2023/03/30/40-macos-keyboard-shortcuts/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/03/keyboard-shortcuts.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-03-30T19:10:00Z",
        "content": "You probably use your computer every day without giving it a second thought, but there are lots of shortcuts that you could be using to get the most out of your time. Here are over 40 keyboard shortc… [+12965 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Android Police"
        },
        "author": "Dallas Thomas",
        "title": "Google Fi 5G finally works on iPhones, and here's how to enable it",
        "description": "Google’s MVNO just flipped the switch on faster coverage for Apple phones",
        "url": "https://www.androidpolice.com/google-fi-iphone-5g/",
        "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/03/ap-carrier-google-fi-hero.png",
        "publishedAt": "2023-03-30T19:08:45Z",
        "content": "Google Fi used to be a complicated amalgamation of cellular networks, but that's all changed now that T-Mobile and Sprint merged, combining two of the three main service providers for Google's MVNO. … [+1947 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Genbeta.com"
        },
        "author": "Bárbara Bécares",
        "title": "Google ingresa millones por publicidad y no reparte nada con la prensa, que crea los contenidos. Esto se va a investigar en España",
        "description": "Google cuenta con el motor de búsqueda más utilizado del mundo y con uno de los principales agregadores de noticias de la actualidad que Google News. Este enorme control de este mercado nos obliga a medios de comunicación, grandes y pequeños, a tener muy pres…",
        "url": "https://www.genbeta.com/actualidad/google-ingresa-millones-publicidad-no-reparte-nada-prensa-que-crea-contenidos-esto-se-va-a-investigar-espana",
        "urlToImage": "https://i.blogs.es/5ff8be/firmbee-com-31odwleq-78-unsplash/840_560.jpeg",
        "publishedAt": "2023-03-30T09:36:38Z",
        "content": "Google cuenta con el motor de búsqueda más utilizado del mundo y con uno de los principales agregadores de noticias de la actualidad que Google News. Este enorme control de este mercado nos obliga a … [+3879 chars]"
    },
    
    {
        
        "source": {
            "id": "vice-news",
            "name": "Vice News"
        },
        "author": "Ricardo Contreras, Rob Zacny",
        "title": "Playing to the Crowd and Playing for Power in 'King of the Castle'",
        "description": "Crusader Kings meets '1 vs. 100' proves to be a better crossover than the IOC meets video games.",
        "url": "https://www.vice.com/en/article/ak3ddk/playing-to-the-crowd-and-playing-for-power-in-king-of-the-castle",
        "urlToImage": "https://video-images.vice.com/articles/6424600bf675703c28d53ab5/lede/1680113020737-couch-1.png?image-resize-opts=Y3JvcD0xeHc6MXhoO2NlbnRlcixjZW50ZXImcmVzaXplPTEyMDA6KiZyZXNpemU9MTIwMDoq",
        "publishedAt": "2023-03-30T12:00:00Z",
        "content": "With Rob still out, Patrick and Ren discuss the latest episode of The Last of Us, and whether the level-like structure of the adaptation, nearing its finale, is causing problems. Elsewhere, Cado's pl… [+1189 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Autoblog"
        },
        "author": "Yahoo Finance",
        "title": "Polestar 3 gets ready for release, with cheaper, U.S. built, tax-credit-eligible version coming",
        "description": "Continue reading Polestar 3 gets ready for release, with cheaper, U.S. built, tax-credit-eligible version coming\nPolestar 3 gets ready for release, with cheaper, U.S. built, tax-credit-eligible version coming originally appeared on Autoblog on Thu, 30 Mar 202…",
        "url": "https://www.autoblog.com/2023/03/30/polestar-3-ev-production-beginning-cheaper-us-version-7500-tax-credit/",
        "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/crop/2361x1328+3+177/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2022/10/17113641/rg-2024-polestar-3-1.jpg",
        "publishedAt": "2023-03-30T20:50:00Z",
        "content": "Swedish EV-maker Polestar (PSNY) is inching ever closer towards its big release of the Polestar 3 SUV.\r\nThe company kicked off its roadshow for the electric SUV with the North American debut of the P… [+3404 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Autoblog"
        },
        "author": "James Riswick",
        "title": "2023 VW Taos Review: Surprisingly family-friendly little SUV",
        "description": "Filed under:\n Volkswagen,Buying Guide,New Car Reviews,Crossover,SUV\n Continue reading 2023 VW Taos Review: Surprisingly family-friendly little SUV\n2023 VW Taos Review: Surprisingly family-friendly little SUV originally appeared on Autoblog on Thu, 30 Mar 2023…",
        "url": "https://www.autoblog.com/article/2023-vw-taos-review/",
        "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2021/05/25105817/IMG_70522.jpg",
        "publishedAt": "2023-03-30T10:00:00Z",
        "content": "Pros: Huge back seat and cargo area for the segment; strong fuel economy; quality interior; functional roof rails\r\nCons: Bland to drive with numb steering and mushy throttle response; so-so safety sc… [+10119 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Wikihow.com"
        },
        "author": "wikiHow",
        "title": "How to Pause Airpods",
        "description": "Quickly pause and resume your media with your Apple AirPods\nWith your AirPods, AirPods Pro, AirPods Max, you can easily pause your music or audio without needing to tap your connected device. By default, most generations of AirPods will let you pause music by…",
        "url": "https://www.wikihow.com/Pause-Airpods",
        "urlToImage": "https://www.wikihow.com/images/d/d4/Pause-Airpods-Step-20.jpg",
        "publishedAt": "2023-03-30T16:00:00Z",
        "content": "Download Article\r\nDownload Article\r\nWith your AirPods, AirPods Pro, AirPods Max, you can easily pause your music or audio without needing to tap your connected device. By default, most generations of… [+284 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Forbes"
        },
        "author": "Ashoka, Contributor, \n Ashoka, Contributor\n https://www.forbes.com/sites/ashoka/people/ashoka/",
        "title": "Building Tech That Lasts — Learning From France's Reparability Index",
        "description": "Electronics are now the fastest growing source of waste in the world. To reverse this trend, Laetitia Vasseur's team at HOP is activating a movement of 70,000 people and 30 companies to normalize reparability and durability across France. Here's how we can bu…",
        "url": "https://www.forbes.com/sites/ashoka/2023/03/30/building-tech-that-lasts---learning-from-frances-reparability-index/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/642551dd991e71bda866de23/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2023-03-30T14:57:14Z",
        "content": "Have you heard about planned obsolescence? Its an industry practice of designing products with limited lifespans (thus driving sales). It explains why electronics are now the fastest growing source o… [+6840 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Andrew Orr)",
        "title": "Apple's iWork apps now support Apple Pencil Hover",
        "description": "Apple has updated Pages, Numbers, and Keynote to support Apple Pencil's recent hover mode and other improvements.Apple updates iWork appsApple is currently issuing upgrades to its collection of iWork apps after updating its operating systems with iOS 16.4, ma…",
        "url": "https://appleinsider.com/articles/23/03/30/apples-iwork-apps-now-support-apple-pencil-hover",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53734-108038-iwork-xl.jpg",
        "publishedAt": "2023-03-30T16:27:13Z",
        "content": "Apple updates iWork apps\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nApple has updated Pages, Numbers, and Keynote to support Apple Pencil's recent ho… [+1936 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Andrew Orr)",
        "title": "Netflix's cheapest plan is now available on Apple TV",
        "description": "Months after its launch, Netflix's ad-supported plan has finally made it to the Apple TV with limited quality and streaming.Find Netflix Basic on Apple TVThe company launched the streaming tier in November for consoles, Chromecast, iOS, Amazon Fire, and vario…",
        "url": "https://appleinsider.com/articles/23/03/30/netflixs-cheapest-plan-is-now-available-on-apple-tv",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53730-108031-netflix-logo-xl.jpg",
        "publishedAt": "2023-03-30T13:50:08Z",
        "content": "Find Netflix Basic on Apple TV\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nMonths after its launch, Netflix's ad-supported plan has finally made it to… [+1985 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Andrew Orr)",
        "title": "Apple wins VirnetX patent appeal -- but one verdict awaits",
        "description": "Apple has been battling VirnetX in court for over a decade over patents, and on Thursday, the US Court of Appeals handed Apple a victory in the latest skirmish.VirnetX trialIn 2010, VirnetX launched a legal dispute by alleging numerous instances of patent inf…",
        "url": "https://appleinsider.com/articles/23/03/30/apple-wins-virnetx-patent-appeal----but-one-verdict-awaits",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53736-108040-virnetx-xl.jpg",
        "publishedAt": "2023-03-30T18:44:58Z",
        "content": "VirnetX trial\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nApple has been battling VirnetX in court for over a decade over patents, and on Thursday, th… [+1259 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (William Gallagher)",
        "title": "Apple AR headset debut at WWDC in doubt",
        "description": "Analyst Ming-Chi Kuo says Apple is not \"optimistic\" about launching its AR/VR headset and has pushed back mass production to, meaning it may not get an announcement at WWDC.A render of a potential Apple headset [AppleInsider]Apple has long been expected to la…",
        "url": "https://appleinsider.com/articles/23/03/30/apple-ar-headset-debut-at-wwdc-in-doubt",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53431-107217-46189-96988-Apple-VR-desk-crop-xl-xl.jpg",
        "publishedAt": "2023-03-30T12:21:09Z",
        "content": "A render of a potential Apple headset [AppleInsider]\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nAnalyst Ming-Chi Kuo says Apple is not \"optimistic\" a… [+1558 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Mike Wuerthele)",
        "title": "Clearer pictures of rumored Apple AR headet cable emerge",
        "description": "A closer look at a cable said to be from Apple's AR headset has popped up from a well-known leaker, showing serialization and part numbers for the assembly.A render of a potential Apple headset [AppleInsider]The image shows a previously leaked cable, but this…",
        "url": "https://appleinsider.com/articles/23/03/30/clearer-pictures-of-rumored-apple-ar-headet-cable-emerge",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53452-107294-53201-106609-52339-104274-49777-97523-apple-ar-headset-xl-xl-xl-xl.jpg",
        "publishedAt": "2023-03-30T11:18:39Z",
        "content": "A render of a potential Apple headset [AppleInsider]\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nA closer look at a cable said to be from Apple's AR h… [+2198 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (William Gallagher)",
        "title": "Apple unveils 'Big Beasts' nature series for Earth Day",
        "description": "Ahead of Earth Day on April 22, 2023, Apple TV+ has announced a new series featuring \"nature's most captivating giants,\" and narrated by Tom Hiddleston.In 2022, Apple marked Earth Day with a slew of apps, podcasts, and walks in the Fitness app. For 2023, it's…",
        "url": "https://appleinsider.com/articles/23/03/30/apple-unveils-big-beasts-nature-series-for-earth-day",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53735-108039-000-lead-Big-Beasts-xl.jpg",
        "publishedAt": "2023-03-30T16:48:31Z",
        "content": "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nAhead of Earth Day on April 22, 2023, Apple TV+ has announced a new series featuring \"nature's most captiva… [+1071 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Wesley Hilliard)",
        "title": "Netflix Games may come to TVs, use iPhone as a controller",
        "description": "A report suggests Netflix is working on a feature that will bring its games to smart TV platforms and could enable players to use their iPhones as a controller.Netflix GamesNetflix Games launched in 2021 with little fanfare since. The selection offers a varie…",
        "url": "https://appleinsider.com/articles/23/03/30/netflix-games-may-come-to-tvs-use-iphone-as-a-controller",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53725-108024-Netflix-Games-xl.jpg",
        "publishedAt": "2023-03-30T01:35:41Z",
        "content": "Netflix Games\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nA report suggests Netflix is working on a feature that will bring its games to smart TV plat… [+1116 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (William Gallagher)",
        "title": "Apple wants to track every user movement for health, AR, and more",
        "description": "Apple wants to know every time you move a muscle in any part of your body, so it can more accurately build a picture of your fitness, and also possibly map your location in a room better.Apple already has technology such as accelerometers in the Apple Watch t…",
        "url": "https://appleinsider.com/articles/23/03/30/apple-wants-to-track-every-user-movement-for-health-ar-and-more",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53726-108028-000-lead-Fitness-xl.jpg",
        "publishedAt": "2023-03-30T12:38:09Z",
        "content": "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nApple wants to know every time you move a muscle in any part of your body, so it can more accurately build … [+6576 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Jess Pingrey)",
        "title": "Deals: AirPods Max $479, iMacs from $899, $150 off M2 MacBook Pro & more",
        "description": "Today's top deals include an EyeVac home touchless stationary vacuum for $90, an LG 50\" Class 4K webOS Smart TV for $318, 65% off a Seagate Expansion 16TB external hard drive, and 74% off a 2-pack of mophie car chargers.Get an Self Emptying Robot Vac for $98T…",
        "url": "https://appleinsider.com/articles/23/03/30/deals-airpods-max-479-imacs-from-899-150-off-m2-macbook-pro-more",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53722-108029-Daily-Deals-March-30-xl.jpg",
        "publishedAt": "2023-03-30T13:49:25Z",
        "content": "Get an Self Emptying Robot Vac for $98\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nToday's top deals include an EyeVac home touchless stationary vacuu… [+3377 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Mike Wuerthele)",
        "title": "MacBook Air refresh in 2024 or 2025 rumored to get OLED screen",
        "description": "If a new rumor is correct, the MacBook Air will get a high-tech OLED screen at some point after a migration to the technology in the MacBook Pro and iPad.M2 MacBook Air (left) and M1 MacBook Air (right)A supply chain report from Korean publication The Elec di…",
        "url": "https://appleinsider.com/articles/23/03/30/macbook-air-refresh-in-2024-or-2025-rumored-to-get-oled-screen",
        "urlToImage": "https://photos5.appleinsider.com/gallery/47320-96659-M1-and-M2-MacBook-Airs-Screens-xl.jpg",
        "publishedAt": "2023-03-30T11:48:28Z",
        "content": "M2 MacBook Air (left) and M1 MacBook Air (right)\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nIf a new rumor is correct, the MacBook Air will get a hig… [+2606 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Andrew Orr)",
        "title": "iPad is a beacon of light in India's contracting PC market",
        "description": "Rapidly declining laptop sales are a grave portent for India's overall PC market, but Apple's dominance of the tablet portion of that market with the iPad remains a bright spot.iPad shipments dominated in Q4 2022The PC market in India, which comprises desktop…",
        "url": "https://appleinsider.com/articles/23/03/30/ipad-is-a-beacon-of-light-in-indias-contracting-pc-market",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53732-108034-iPad-Pro-2020-xl.jpg",
        "publishedAt": "2023-03-30T14:55:19Z",
        "content": "iPad shipments dominated in Q4 2022\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nRapidly declining laptop sales are a grave portent for India's overall… [+2111 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Andrew Orr)",
        "title": "Unique 'Lucky you' sealed original iPhone is up for auction",
        "description": "A factory-sealed original iPhone with a unique sticker is up for auction that is expected to end at as much as $60,000.The \"Lucky You\" iPhoneComing from Wright auction house, a factory-sealed, first-generation iPhone has arrived from Donald Gajadhar of Fox-Wh…",
        "url": "https://appleinsider.com/articles/23/03/30/unique-lucky-you-sealed-original-iphone-is-up-for-auction",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53733-108035-lucky-you-iphone-xl.jpg",
        "publishedAt": "2023-03-30T15:19:34Z",
        "content": "The \"Lucky You\" iPhone\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nA factory-sealed original iPhone with a unique sticker is up for auction that is ex… [+1231 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Tyler Hayes)",
        "title": "Emotn N1 review: A projector built for Netflix",
        "description": "The Emotn N1 projector, with its officially licensed Netflix app onboard, is a simple-to-use product that just works.N1 projectorThe Emotn N1 is a portable projector officially licensed with Netflix, meaning the app is on the projector and ready to start stre…",
        "url": "https://appleinsider.com/articles/23/03/30/emotn-n1-review-a-projector-built-for-netflix",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53681-107946-A1279DD6-95EB-4915-8A2B-0B7D78135CC3-xl.jpg",
        "publishedAt": "2023-03-30T18:04:16Z",
        "content": "N1 projector\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nThe Emotn N1 projector, with its officially licensed Netflix app onboard, is a simple-to-use … [+4881 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Elespanol.com"
        },
        "author": "Manuel Ramírez",
        "title": "Android 14 hará que sea más fácil ocultar tu PIN de las miradas ajenas con un sencillo truco",
        "description": "Android se ha quitado de encima ese momento en el que alguien pueda ver cómo introduces el PIN y así conocer la clave maestra con la que acceder a tu smartphone.",
        "url": "https://www.elespanol.com/elandroidelibre/noticias-y-novedades/20230330/android-facil-ocultar-pin-miradas-ajenas-sencillo/752424895_0.html",
        "urlToImage": "https://s1.eestatic.com/2023/03/30/elandroidelibre/noticias-y-novedades/752435241_232064881_1200x630.jpg",
        "publishedAt": "2023-03-30T12:11:00Z",
        "content": "Con Android 14 siendo desplegado con sus versiones para desarrolladores, hay una novedad bastante interesante para ocultar de la vista del curioso ese momento en el que se introduce el PIN en el telé… [+2099 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Gizmodo.jp"
        },
        "author": "はらいさん",
        "title": "日本でもついにiPhoneの整備済製品が買えるようになりました",
        "description": "Image:Appleかなりお得に購入できます。MacやiPad、AppleWatchなど一部の製品が販売されているAppleの整備済製品ですが、ようやく日本でもiPhoneの取り扱いが始まりました。ほぼ新品のiPhoneが最大15%オフで購入できるAppleの認定整備済製品とは、Apple認定の整備プロセスを経て品質が保証されている再生品で、通常に比べてお得に購入することが可能です。ただ、在庫に",
        "url": "https://www.gizmodo.jp/2023/03/refurbished-iphone-in-japan-finally.html",
        "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/03/30/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%882023-03-2816.41.17.png?w=1280&h=630&f=jpg",
        "publishedAt": "2023-03-30T07:00:00Z",
        "content": "MaciPadApple WatchAppleiPhone\r\nAppleApple\r\n1Apple\r\nApple StoreiPhoneiPhone 12iPhone 132\r\nImage: Apple\r\niPhone 13512GB152,800129,80015%\r\nImage: Apple\r\niPhone 12/13Pro Max\r\nSource:Apple"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "CNET"
        },
        "author": "Meara Isenberg",
        "title": "Will Apple Show AR/VR Headset at WWDC? Delays Add 'Uncertainty,' Analyst Says - CNET",
        "description": "Apple's rumored mixed-reality headset is apparently facing more delays.",
        "url": "https://www.cnet.com/tech/computing/will-apple-show-arvr-headset-at-wwdc-delays-add-uncertainty-analyst-says/",
        "urlToImage": "https://www.cnet.com/a/img/resize/32ed8fce64ee0f129b58c726f911198e6beb50e2/hub/2022/12/07/7db5cee3-920d-4468-92a7-1d31c85f3e5c/apple-ar-vr-headset-virtual-reality-1551.jpg?auto=webp&fit=crop&height=630&width=1200",
        "publishedAt": "2023-03-30T17:42:00Z",
        "content": "Apple's long-awaited augmented reality and virtual reality headset is rumored to be shown off at the company's Worldwide Developers Conference in June. However, a noted Apple analyst on Thursday cast… [+1772 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Yanko Design"
        },
        "author": "Sarang Sheth",
        "title": "Modern iPhone 4 concept shows what the iconic Apple smartphone would look like if it were released today",
        "description": "Modern iPhone 4 concept shows what the iconic Apple smartphone would look like if it were released todayDesigned by Nathan Basset who goes by Reddit username G8M8N8, this beautiful handset merges nostalgia and innovation into one delightful package. “iPhone 4…",
        "url": "https://www.yankodesign.com/2023/03/30/modern-iphone-4-concept-shows-what-the-iconic-apple-smartphone-would-look-like-if-it-were-released-today/",
        "urlToImage": "https://www.yankodesign.com/images/design_news/2023/03/modern-iphone-4-concept-shows-what-the-iconic-smartphone-would-look-like-if-it-were-released-today/modern_iphone_4_1.jpg",
        "publishedAt": "2023-03-30T22:30:10Z",
        "content": "Designed by Nathan Basset who goes by Reddit username G8M8N8, this beautiful handset merges nostalgia and innovation into one delightful package. “iPhone 4 is objectively the best-looking iPhone,” sa… [+2676 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yanko Design"
        },
        "author": "Srishti Mitra",
        "title": "Top 10 innovative watches to inspire you from the YD x KeyShot Inspiration Hub",
        "description": "Top 10 innovative watches to inspire you from the YD x KeyShot Inspiration HubAt Yanko Design, we believe in constantly innovating, creating, and evolving. It’s a philosophy that serves as a lifeline for us, and one of the...",
        "url": "https://www.yankodesign.com/2023/03/29/top-10-innovative-watches-to-inspire-you-from-the-yd-x-keyshot-inspiration-hub/",
        "urlToImage": "https://www.yankodesign.com/images/design_news/2023/03/watches/top_10_watches_inspiration_hub_keyshot_yanko_design_01.jpg",
        "publishedAt": "2023-03-30T00:45:39Z",
        "content": "At Yanko Design, we believe in constantly innovating, creating, and evolving. Its a philosophy that serves as a lifeline for us, and one of the results of this lifeline is the YD x KeyShot Inspiratio… [+6682 chars]"
    }
  ]

    constructor(){
        super();
        console.log("this is news page");
        this.state = {
          articles:this.articles,
          loading: false
      }

    }
    // async componentDidMount()
    // {
    //   let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=138a3c0828834517ae0c46b32e15e792";
    //   let data = await fetch(url);
    //   let parseData = await data.json();
    //   this.setState({
    //   articles : parseData.articles,
    //   loading : true
    // });
    // console.log(parseData);
    // }
  render() {
    return (
      <div className='newsitem'>
        <h1 className='headlines'>Top Headlines</h1>
        <div className='row'>
             {
              this.articles.map((element)=>(
                <div className='col-md-3' key={element.url}>
                  <NewsItem title = {element.title?element.title.slice(0,40):""} description = {element.description?element.description.slice(0,50):""} imageUrl= {element.urlToImage?element.urlToImage:""} newsUrl= {element.url?element.url:""}/>
                </div>
             ))}
        </div>
      </div>
    )
  }
}

export default News
