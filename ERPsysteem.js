const infoData = {
    info1: {
        title: "Maximaal inzicht in uw inkoopvoorraad en uitstaande verplichtingen",
        text: "Voor het uitvoeren van uw core business is de tijdige inkoop van uitgangsmaterialen, maar ook ‘niet-vers’ producten, zoals hoezen en stickers, cruciaal. In Match Online heeft u actueel inzicht in uw beschikbare voorraden (ook op locaties), uitstaande bestellingen en leveranciersafspraken. Daarnaast kunt  u ook uw inkoopbehoefte berekenen, anticiperend in de tijd. Match Online helpt u zo om uw inkoopproces naadloos aan te sluiten op uw productie en verkoopproces.",
        image: "images/ERP-systeem-img/bloemen.png"
    },
    info2: {
        title: "Verkoop met meer rendement",
        text: "Verkoop is het belangrijkste commerciële proces in uw organisatie. In Match Online wordt dit proces efficiënt ondersteund. Vanuit Match Online kunt u eenvoudig algemeen en klantspecifieke aanbodregels en aanbiedingen versturen. Op alle denkbare manieren en op ieder denkbaar moment. Uw standaard assortimentsgegevens (zowel mono als samengestelde producten) zijn samen met de klantspecifieke afspraken die u eenmalig vastlegt in Match Online de basis voor iedere aanbodregel of aanbieding. Daarnaast kunt u realtime voorraad delen met uw klanten en via hun webshops rechtstreeks verkopen aan groothandelaren en bloemisten. Als u uw verkoop wilt ondersteunen met een eigen webshop is dat ook mogelijk in Match Online. Uiteraard ondersteunt Match-Online de ketenstandaarden van Floricode en is het mogelijk om middels de digitale connectors van SRC snel en efficiënt digitaal communiceren met uw handelspartners buiten de sierteeltketen.",
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

    $('.card').click(function() {
        const infoKey = $(this).data('info');
        console.log('Card clicked:', infoKey); // Controleer de waarde van infoKey
        
// Verwijder de actieve klasse van alle iconen
$('.erp-icon').removeClass('active-icon');

// Voeg de actieve klasse toe aan het icoon van de aangeklikte kaart
$(this).find('.erp-icon').addClass('active-icon');

        // Controleer of infoKey bestaat in infoData
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
        } else {
            console.error('Key not found in infoData:', infoKey);
        }
    });
});
