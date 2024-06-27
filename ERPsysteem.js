const infoData = {
    info1: {
        text: "Dit is de gedetailleerde informatie voor item 1.",
        image: "images/bloemen.png"
    },
    info2: {
        text: "Dit is de gedetailleerde informatie voor item 2.",
        image: "images/andere-afbeelding.png"
    },
    info3: {
        text: "Dit is de gedetailleerde informatie voor item 3.",
        image: "images/nog-een-afbeelding.png"
    },
    info4: {
        text: "Dit is de gedetailleerde informatie voor item 4.",
        image: "images/nog-een-andere-afbeelding.png"
    },
    info5: {
        text: "Dit is de gedetailleerde informatie voor item 5.",
        image: "images/nog-een-andere-afbeelding.png"
    },
    info6: {
        text: "Dit is de gedetailleerde informatie voor item 6.",
        image: "images/nog-een-andere-afbeelding.png"
    }
};

$(document).ready(function() {
    console.log("Document is ready");

    $('.card').click(function() {
        const infoKey = $(this).data('info');
        console.log('Card clicked:', infoKey); // Controleer de waarde van infoKey
        
        // Controleer of infoKey bestaat in infoData
        if (infoData.hasOwnProperty(infoKey)) {
            const infoText = infoData[infoKey].text;
            const infoImage = infoData[infoKey].image;
            
            console.log('Info text:', infoText); // Controleer de waarde van infoText
            console.log('Info image:', infoImage); // Controleer de waarde van infoImage
            
            $('#infoBlock .card-text').text(infoText);
            $('#infoImage').attr('src', infoImage);
        } else {
            console.error('Key not found in infoData:', infoKey);
        }
    });
});
