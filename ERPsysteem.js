const infoData = {
    info1: {
        title: "Maximaal inzicht in uw inkoopvoorraad en uitstaande verplichtingen",
        text: "Voor het uitvoeren van uw core business is de tijdige inkoop van uitgangsmaterialen, maar ook ‘niet-vers’ producten, zoals hoezen en stickers, cruciaal. In Match Online heeft u actueel inzicht in uw beschikbare voorraden (ook op locaties), uitstaande bestellingen en leveranciersafspraken. Daarnaast kunt  u ook uw inkoopbehoefte berekenen, anticiperend in de tijd. Match Online helpt u zo om uw inkoopproces naadloos aan te sluiten op uw productie en verkoopproces.",
        image: "images/ERP-systeem-img/bloemen.png"
    },
    info2: {
        title: "Verkoop met meer rendement",
        text: "Verkoop is het belangrijkste commerciële proces in uw organisatie, en Match Online ondersteunt dit efficiënt. U kunt eenvoudig algemene en klantspecifieke aanbodregels en aanbiedingen versturen, op elk moment en op elke manier. Standaard assortimentsgegevens en klantspecifieke afspraken vormen de basis voor elke aanbodregel. Daarnaast kunt u realtime voorraad delen en rechtstreeks verkopen via webshops aan groothandelaren en bloemisten. Ook een eigen webshop is mogelijk in Match Online. Match Online ondersteunt Floricode-standaarden en biedt via SRC digitale connectors snelle en efficiënte communicatie met handelspartners buiten de sierteeltketen.",
        image: "images/ERP-systeem-img/iStock-531687508_vierkant.jpg"
    },
    info3: {
        title: "Maximaal grip op uw logistieke processen",
        text: "Op basis van de geboekte orders en klantspecifieke afspraken kunt u in Match Online alle logistieke handelingen, zoals goederenontvangst, kar opbouwen en order picken, inplannen, aansturen en middels scanmomenten volgen. Match Online maakt daarbij gebruik van overzichtelijke documenten, zoals pakbonnen inclusief een locatieaanduiding en looproute. Match Online wordt geleverd met een warehouse managementsysteem waarin u de voorraad van uw hardware, hoezen, elastieken, chrysal en dergelijke kunt beheren.",
        image: "images/ERP-systeem-img/Willem-Hoogendoorn-Fotografie469_vierkant.jpg"
    },
    info4: {
        title: "Maximaal inzicht en grip op uw administratieve processen",
        text: "Uw administratie moet waterdicht zijn en u op ieder gewenst moment inzicht verschaffen in uw financiële stand van zaken. Of het nu gaat om uw fust- en karrenregistratie of om de uitstaande EAB’s en facturen. Match Online ondersteunt u hierin optimaal en neemt de daadwerkelijk orders en bestellingen als uitgangspunt voor alle controles en registraties. Match Online is geïntegreerd met de veiling en is ook te koppelen aan Avalanche en uw eigen boekhoudsysteem.",
        image: "images/ERP-systeem-img/Willem-Hoogendoorn-Fotografie193_vierkant.jpg"
    },
    info5: {
        title:"Up-to-date en maximaal inzicht in uw commerciële en logistieke processen",
        text: "In Match Online kunt u omzetoverzichten maken en exporteren naar PDF of Excel, geheel naar eigen wens vormgegeven. U kunt inzicht krijgen in opbrengsten van geveilde producten, omzet per artikel, verkooprelatie, verkoopkanaal en verpakking. Met uitgebreide filtermogelijkheden kunt u informatie specificeren, bijvoorbeeld per klok of veilgroep. De ODATA webservice maakt het mogelijk om data veilig over te nemen in externe programma’s zoals Microsoft Excel, Power BI en QlikView. Hiermee kunt u data analyseren, rapporteren en distribueren, real-time via een dashboard of op vastgestelde tijden. Match Online biedt zo een flexibel systeem voor inzicht in uw commerciële en logistieke processen.",
        image: "images/ERP-systeem-img/iStock-512115792_vierkant.jpg"
    },
    info6: {
        title:"Integratie met uw teeltautomatisering",
        text: "Match Online is zo ontwikkeld dat de software gekoppeld kan worden aan uw teeltautomatisering, ongeacht welke software u daarvoor gebruikt. U hoeft daarvoor niet te investeren in nieuwe teeltsoftware. Het koppelen met uw bestaande teeltautomatisering biedt veel voordelen. U kunt bijvoorbeeld de verwachte productieaantallen importeren in Match Online zodat uw verkopers exact hoeveel en welke producten nog verkocht kunnen worden en kunt productieprognoses en -analyses eenvoudig vergelijken met de verkoopprognoses en -analyses. Geïnteresseerd in de mogelijkheden voor uw bedrijf? Neem dan vrijblijvend contact met ons op.",
        image: "images/ERP-systeem-img/Willem-Hoogendoorn-Fotografie388_vierkant.jpg"
    }
};

$(document).ready(function() {
    console.log("Document is ready");

    // Functie om informatie weer te geven en iconen groen te maken
    function showInfo(infoKey) {
        if (infoData.hasOwnProperty(infoKey)) {
            const infoTitle = infoData[infoKey].title;
            const infoText = infoData[infoKey].text;
            const infoImage = infoData[infoKey].image;

            console.log('Info title:', infoTitle); // Controleer de waarde van infoTitle
            console.log('Info text:', infoText); // Controleer de waarde van infoText
            console.log('Info image:', infoImage); // Controleer de waarde van infoImage

            $('#infoBlock .card-title').text(infoTitle);
            $('#infoBlock .card-text').text(infoText);
            $('#infoImage').attr('src', infoImage);

            // Verwijder de actieve klasse van alle iconen
            $('.erp-icon').removeClass('active-icon');
            // Voeg de actieve klasse toe aan het huidige icoon
            $(`.card[data-info="${infoKey}"] .erp-icon`).addClass('active-icon');
        } else {
            console.error('Key not found in infoData:', infoKey);
        }
    }

    // Toon info1 bij het laden van de pagina
    showInfo('info1');

    $('.card[data-info="info1"] .erp-icon').addClass('active-icon');


    $('.card').click(function() {
        const infoKey = $(this).data('info');
        console.log('Card clicked:', infoKey); // Controleer de waarde van infoKey
        showInfo(infoKey);
    });
});
