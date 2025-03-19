import {useState} from "react";
import "./Pagina.css";


const images = [
     {
        url: "/images/Intrerupator touch alb.jpeg", 
        name: "Sonoff T1EU1C-TX - Intrerupator touch, 1 buton, WiFi si RF 433Mhz", 
        category: "Intrerupatoare Smart",
        link: "https://www.casasmart.ro/intrerupatoare/sonoff-t1eu1c-tx-intrerupator-touch-1-buton-wifi-si-rf-433mhz.html" 
    },
    {
        url: "/images/Intrerupator touch alb cu 3 butoane.jpeg",
        name: "Sonoff T2EU3C-RF - Intrerupator touch alb, 3 butoane, RF 433Mhz", 
        category: "Intrerupatoare Smart",
        link: "https://www.casasmart.ro/intrerupatoare/sonoff-t2eu3c-rf-intrerupator-touch-alb-3-butoane-rf-433mhz.html"
    },
    {
        url: "/images/Intrerupator touch alb cu 2 butoane.jpeg",
        name:  "Sonoff T0EU2C-TX - Intrerupator touch, 2 butoane, WiFi", 
        category: "Intrerupatoare Smart",
        link: "https://www.casasmart.ro/intrerupatoare/sonoff-t0eu2c-tx-intrerupator-touch-2-butoane-wifi.html"
    },
    {
        url: "/images/Intrerupator touch negru.jpeg",
        name: "Sonoff T3EU1C-TX - Intrerupator touch negru, 1 buton, WiFi si RF 433Mhz", 
        category: "Intrerupatoare Smart",
        link: "https://www.casasmart.ro/intrerupatoare/sonoff-t3eu1c-tx-intrerupator-touch-negru-1-buton-wifi-si-rf-433mhz.html"
    },
    {
        url: "/images/Intrerupator touch negru cu 3 butoane.jpeg",
        name: "Sonoff T3EU3C-TX - Intrerupator touch negru, 3 butoane, WiFi si RF 433Mhz", 
        category: "Intrerupatoare Smart",
        link:  "https://www.casasmart.ro/intrerupatoare/sonoff-t3eu3c-tx-intrerupator-touch-negru-3-butoane-wifi-si-rf-433mhz.html"
    },
    {
        url: "/images/Intrerupator touch negru cu 2 butoane.jpeg",
        name:  "Sonoff T3EU2C-TX - Intrerupator touch negru, 2 butoane, WiFi si RF 433Mhz", 
        category: "Intrerupatoare Smart",
        link:  "https://www.casasmart.ro/intrerupatoare/sonoff-t3eu2c-tx-intrerupator-touch-negru-2-butoane-wifi-si-rf-433mhz.html"
    },
    {
        url: "/images/Bec LED smart vintage.webp",
        name: "Sonoff B02-F-ST64 - Bec LED smart vintage, putere 7W, Dimmer, WiFi", 
        category: "Iluminat Smart",
        link:  "https://www.casasmart.ro/iluminat/sonoff-b02-f-st64-bec-inteligent-led-7w-dimmer-wifi.html",
    },
    {
        url: "/images/Bec inteligent alb.webp",
        name:  "Sonoff B02-B-A60 - Bec inteligent, ALB, 9W, comenzi vocale, WiFi", 
        category: "Iluminat Smart",
        link: "https://www.casasmart.ro/iluminat/sonoff-b02-b-a60-bec-led-rgb-wifi.html"
    },
    {
        url: "/images/Set 4 becuri smart.webp",
        name: "BroadLink LB1 - Set 4 becuri Smart, Wireless, intensitate reglabila E27, 6.5W", 
        category: "Iluminat Smart",
        link: "https://www.casasmart.ro/iluminat/broadlink-lb1-set-4-becuri-smart-wireless-intensitate-reglabila-e27-6-5w.html",
    },
    {
        url: "/images/Lampa inteligenta.webp",
        name: "Lampă de podea inteligentă Meross MSL610 (HomeKit)", 
        category: "Iluminat Smart",
        link:  "https://www.casasmart.ro/iluminat/lamp%C4%83-de-podea-inteligent%C4%83-meross-msl610-homekit.html"
    },
    {
        url: "/images/Bec smart led Wifi.webp",
        name: "Sonoff B02-F-A60 - Bec smart LED WiFI, vintage, 7W", 
        category: "Iluminat Smart",
        link:  "https://www.casasmart.ro/iluminat/sonoff-b02-f-a60-bec-smart-led-wifi-vintage-7w.html"
    },
    {
        url: "/images/Bec vintage.webp",
        name: "Bec Shelly Vintage G125",
        category: "Iluminat Smart",
        link: "https://www.casasmart.ro/iluminat/bec-shelly-vintage-g125.html",
    },
    {
        url: "/images/Priza smart ZigBee.webp",
        name: "Sonoff S26 R2ZB - Priza smart ZigBee, 16A/4000W",
        category: "Prize wifi", 
        link:  "https://www.casasmart.ro/prize/sonoff-s26-r2zb-priza-smart-zigbee-16a-4000w.html"
    },
    {
        url: "/images/Priza inteligenta Gosund.webp",
        name: "Priză inteligentă WiFi Gosund SP111, 3680W 16A, Tuya",
        category: "Prize wifi",  
        link: "https://www.casasmart.ro/prize/priz%C4%83-inteligent%C4%83-wifi-gosund-sp111-3680w-16a-tuya.html"
    },
    {
        url: "/images/Priza inteligenta dubla.webp",
        name: "Priza inteligenta dubla Gosund SP211, Wi-Fi, monitorizare consum, protectie copii, timer, 16A",
        category: "Prize wifi",  
        link: "https://www.casasmart.ro/prize/priza-inteligenta-dubla-gosund-sp211-wi-fi-monitorizare-consum-protectie-copii-timer-16a.html"
    },
    {
        url: "/images/Priza perete smart.webp",
        name:  "Priza de perete Smart WiFi, Avatto N-WOT10-EU-B, Tuya, neagra",
        category: "Prize wifi",  
        link: "https://www.casasmart.ro/prize/priza-de-perete-smart-wifi-avatto-n-wot10-eu-b-tuya-neagra.html"
    },
    {
        url: "/images/Priza inteligenta Shelly.webp",
        name: "Priză inteligentă WiFi Shelly Plug",
        category: "Prize wifi",  
        link: "https://www.casasmart.ro/prize/priz%C4%83-inteligent%C4%83-wifi-shelly-plug.html"
    },
    {
        url:  "/images/Priza inteligenta pentru exterior.webp",
        name:  "Priză inteligentă pentru exterior WiFi Meross MSS620HK (HomeKit)",
        category: "Prize wifi",  
        link:  "https://www.casasmart.ro/prize/priz%C4%83-inteligent%C4%83-pentru-exterior-wifi-meross-mss620hk-homekit.html"
    },
    {
        url:  "/images/Senzor inteligent de temperatură și umiditate.webp",
        name: "Senzor inteligent de temperatură și umiditate Wi-Fi Gosund S6 (ecran LCD, iluminare din spate)",
        category: "Senzori",
        link:  "https://www.casasmart.ro/senzori/senzor-inteligent-de-temperatur%C4%83-%C8%99i-umiditate-wi-fi-gosund-s6-ecran-lcd-iluminare-din-spate.html"
    },
    {
        url: "/images/Senzor de miscare inteligent.webp",
        name:  "Gosund ST20 ZigBee - Senzor de miscare inteligent, Tuya",
        category: "Senzori",
        link:  "https://www.casasmart.ro/senzori/gosund-st20-zigbee-senzor-de-miscare-inteligent-tuya.html"
    },
    {
        url: "/images/Senzor inteligent pentru fum.webp",
        name: "Senzor inteligent pentru fum Tuya ZigBee-SS01, Alarma 80dB, notificari pe telefon",
        category: "Senzori",
        link: "https://www.casasmart.ro/senzori/senzor-inteligent-pentru-fum-tuya-zigbee-ss01-alarma-80db-notificari-pe-telefon.html"
    },
    {
        url: "/images/Senzor Smart detectie scurgeri de apa.webp",
        name: "Senzor Smart detectie scurgeri de apa NOUS E4, ZigBee",
        category: "Senzori",
        link:  "https://www.casasmart.ro/senzori/senzor-smart-detectie-scurgeri-de-apa-nous-e4-zigbee.html"
    },
    {
        url: "/images/Adaptor USB pentru senzorul de temperatură.webp",
        name:  "Adaptor USB pentru senzorul de temperatură Shelly H&T (negru)",
        category: "Senzori",
        link:  "https://www.casasmart.ro/senzori/adaptor-usb-pentru-senzorul-de-temperatur%C4%83-shelly-h-amp-t-negru.html"
    },
    {
        url: "/images/Senzor de temperatură, umiditate și mișcare.webp",
        name:  "Senzor de temperatură, umiditate și mișcare Sensibo Room Sensor",
        category: "Termostate Smart",
        link: "https://www.casasmart.ro/senzori/senzor-de-temperatur%C4%83-umiditate-%C8%99i-mi%C8%99care-sensibo-room-sensor.html"
    },
    {
        url: "/images/Cap termostat smart pentru calorifer.webp",
        name: "Cap termostat smart pentru calorifer Avatto TRV06 Zigbee 3.0, TUYA",
        category: "Termostate Smart", 
        link:   "https://www.casasmart.ro/termostate-smart/cap-termostat-smart-pentru-calorifer-avatto-trv06-zigbee-3-0-tuya.html"
    },
    {
        url:  "/images/Termostat smart pentru incalzire electrica.webp",
        name:  "Termostat smart pentru incalzire electrica in pardoseala, Avatto WT200, 16A, Wi-Fi, Tuya",
        category: "Termostate Smart", 
        link:  "https://www.casasmart.ro/termostate-smart/termostat-smart-pentru-incalzire-electrica-in-pardoseala-avatto-wt200-16a-wi-fi-tuya.html"
    },
    {
        url: "/images/Cap termostatic inteligent pentru calorifer.webp",
        name:   "Cap termostatic inteligent pentru calorifer, Meross MTS150HK (HomeKit)",
        category: "Termostate Smart", 
        link: "https://www.casasmart.ro/termostate-smart/cap-termostatic-inteligent-pentru-calorifer-meross-mts150hk-homekit.html"
    },
    {
        url:  "/images/Termostat inteligent pentru boiler.webp",
        name: "Termostat inteligent pentru boiler Avatto WT50 3A Wi-Fi Tuya",
        category: "Termostate Smart",
        link: "https://www.casasmart.ro/termostate-smart/termostat-inteligent-pentru-boiler-avatto-wt50-3a-wi-fi-tuya.html"
    },
    {
        url: "/images/Camera IP Smart.webp",
        name: "Sonoff GK-200MP2-B - Camera IP Smart, Wireless, FullHD 360°",
        category: "Supraveghere video", 
        link: "https://www.casasmart.ro/supraveghere-video/sonoff-gk-200mp2-b-camera-ip-smart-wireless-fullhd-360.html"
    },
    {
        url: "/images/Slim CAM WiFi.webp",
        name: "SONOFF Slim CAM WiFi",
        category: "Supraveghere video", 
        link: "https://www.casasmart.ro/supraveghere-video/sonoff-cam-slim-wifi.html"
    },
    {
        url: "/images/Sonerie inteligenta Avatto.webp",
        name: "Sonerie inteligenta Avatto SVD01 - 1080P Full HD, WiFi, Senzor miscare",
        category: "Supraveghere video", 
        link: "https://www.casasmart.ro/supraveghere-video/sonerie-inteligenta-avatto-svd01-1080p-full-hd-wifi-senzor-miscare.html"
    },
    {
        url: "/images/Cameră Wi-Fi IMOU.webp",
        name: "Cameră Wi-Fi IMOU Cruiser 2 cu Vizualizare de 360° - Rezoluție 5MP pentru Monitorizare Exterioară de Înaltă Calitate",
        category: "Supraveghere video",
        link: "https://www.casasmart.ro/supraveghere-video/camer%C4%83-wi-fi-imou-cruiser-2-cu-vizualizare-de-360-rezolu%C8%9Bie-5mp-pentru-monitorizare-exterioar%C4%83-de-%C3%AEnalt%C4%83-calitate.html"
    }, 
    {
        url: "/images/Panou solar IMOU.webp",
        name: "Panou solar IMOU FSP12 pentru celula 2, celula Go",
        category: "Supraveghere video",
        link: "https://www.casasmart.ro/supraveghere-video/panou-solar-imou-fsp12-pentru-celula-2-celula-go.html"
    },
    {
        url: "/images/Cameră IP pentru exterior.webp",
        name: "Cameră IP pentru exterior Arenti Power1 2K",
        category: "Supraveghere video", 
        link: "https://www.casasmart.ro/supraveghere-video/camer%C4%83-ip-pentru-exterior-arenti-power1-2k.html"
    },
    {
        url: "/images/Yala inteligenta Avatto.webp",
        name: "Yala inteligenta Avatto SDL-A270-S -5572, amprenta, cod pin, Wi-Fi, Argintie",
        category: "Securitate Inteligenta", 
        link:  "https://www.casasmart.ro/securitate-inteligenta/yala-inteligenta-avatto-sdl-a270-s-5572-amprenta-cod-pin-wi-fi-argintie.html"
    },
    {
        url: "/images/Alarmă inteligentă Sirenă.webp",
        name: "Alarmă inteligentă Sirenă ZigBee NEO NAS-AB02B TUYA",
        category: "Securitate Inteligenta", 
        link: "https://www.casasmart.ro/securitate-inteligenta/alarm%C4%83-inteligent%C4%83-siren%C4%83-zigbee-neo-nas-ab02b-tuya.html"
    },
    {
        url: "/images/Butuc smart pentru usa.webp",
        name: "Butuc smart pentru usa, Avatto SDL-S1-S60 - 100 mm, Bluetooth, Argintiu",
        category: "Securitate Inteligenta", 
        link: "https://www.casasmart.ro/securitate-inteligenta/butuc-smart-pentru-usa-avatto-sdl-s1-s60-100-mm-bluetooth-argintiu.html"
    },
    {
        url: "/images/Tastatură SwitchBot.webp",
        name: "Tastatură SwitchBot - buton tactil",
        category: "Securitate Inteligenta", 
        link: "https://www.casasmart.ro/securitate-inteligenta/tastatur%C4%83-switchbot-buton-tactil.html"
    },
    {
        url: "/images/Alarmă de exterior Sirene.webp",
        name: "Alarmă de exterior Sirene ZigBee NEO NAS-AB06B TUYA",
        category: "Securitate Inteligenta", 
        link: "https://www.casasmart.ro/securitate-inteligenta/alarm%C4%83-de-exterior-sirene-zigbee-neo-nas-ab06b-tuya.html" 
    },
    {
        url: "/images/Încuietoare inteligentă.webp",
        name: "Încuietoare inteligentă SwitchBot Lock Pro",
        category: "Securitate Inteligenta",
        link: "https://www.casasmart.ro/securitate-inteligenta/%C3%AEncuietoare-inteligent%C4%83-switchbot-lock-pro.html"
    },
    {
        url: "/images/Aspirator Deerma.webp",
        name: "Aspirator Deerma DX900",
        category: "Aspiratoare smart",
        link: "https://www.casasmart.ro/aspiratoare-smart/aspirator-deerma-dx900.html"
    },
    {
        url: "/images/Robot aspirator Imou.webp",
        name: "Robot aspirator Imou RV1C",
        category: "Aspiratoare smart",
        link: "https://www.casasmart.ro/aspiratoare-smart/robot-aspirator-imou-rv1c.html"
    },
    {
        url: "/images/Aspirator robot AIRROBO.webp",
        name: "Aspirator robot AIRROBO P30, functii de maturare si mop, Negru",
        category: "Aspiratoare smart",
        link: "https://www.casasmart.ro/aspiratoare-smart/aspirator-robot-airrobo-p30-functii-de-maturare-si-mop-negru.html"
    },
    {
        url: "/images/Sac de praf pentru Airrobo.webp",
        name: "Sac de praf pentru Airrobo T20+ (6 bucăți)",
        category: "Aspiratoare smart",
        link: "https://www.casasmart.ro/aspiratoare-smart/sac-de-praf-pentru-airrobo-t20-6-buc%C4%83%C8%9Bi.html"
    },
    {
        url: "/images/Tampoane pentru mop pentru Airrobo.jpg",
        name: "Tampoane pentru mop pentru Airrobo T20+ (3 buc.)",
        category: "Aspiratoare smart",
        link: "https://www.casasmart.ro/aspiratoare-smart/tampoane-pentru-mop-pentru-airrobo-t20-3-buc.html"
    },
    {
        url: "/images/Perie laterală pentru Airrobo.webp",
        name: "Perie laterală pentru Airrobo T20+ (3 buc.)",
        category: "Aspiratoare smart",
        link: "https://www.casasmart.ro/aspiratoare-smart/perie-lateral%C4%83-pentru-airrobo-t20-3-buc.html"
    },
    {
        url: "/images/Aspirator acarieni Deerma.webp",
        name: "Aspirator acarieni Deerma CM800",
        category:"Aspiratoare smart",
        link:  "https://www.casasmart.ro/aspiratoare-smart/aspirator-acarieni-deerma-cm800.html"
    },
    
]


const HomeProduct = () =>{
    const [activeCategory, setActiveCategory] = useState("Toate Produsele");
 
    const categories = [
        "Toate Produsele", 
        "Intrerupatoare Smart", 
        "Iluminat Smart", 
        "Prize wifi", 
        "Senzori", 
        "Termostate Smart", 
        "Supraveghere video", 
        "Securitate Inteligenta", 
        "Aspiratoare smart"
    ];

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const filterImages = () => {
        if (activeCategory === "Toate Produsele") return images;
        return images.filter((image) => image.category === activeCategory);
    };

    return (
        <div className="main-container">
            <div className="image-container">
                {filterImages().map((image, index) => (
                    <div key={index} className="image-item">
                        <img src={image.url} alt={image.name} className="icone" />
                        <p>{image.name}</p>
                        <a href={image.link} target="_blank" rel="noopener noreferrer">
                            Către magazin
                        </a>
                    </div>
                ))}
            </div>
            <div className="filter-container">
                <h3>Filtrare</h3>
                <div className="category-list">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`category-button ${activeCategory === category ? "active" : ""}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;