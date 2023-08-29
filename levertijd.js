function calculateDeliveryDay() {
		const currentDate = new Date();
		const orderDate = currentDate.toISOString().slice(0, 10); // Formaat: 'YYYY-MM-DD' //huidige datum
		const orderTime = currentDate.toTimeString().slice(0, 8); // Formaat: 'HH:MM:SS' //huidige tijd

		const cutoffTime = 13; // Bestellingen voor 13:00 worden dezelfde dag nog verzonden
		const shippingDays = [1, 3, 5]; // Maandag, woensdag en vrijdag zijn de dagen dat er verstuurd word. 

		const now = new Date();
		const orderDateTime = new Date(orderDate + ' ' + orderTime);

		// Voeg een dag toe als de bestelling na de cutoff is geplaatst
		if (orderDateTime.getHours() >= cutoffTime) {
				orderDateTime.setDate(orderDateTime.getDate() + 1);
		}

		while (!shippingDays.includes(orderDateTime.getDay())) {
				orderDateTime.setDate(orderDateTime.getDate() + 1);
		}
    //haal de naam van de weekdag op weer te geven
		const deliveryDay = orderDateTime.toLocaleDateString(undefined, {
				weekday: 'long',
				//year: 'numeric',
				//month: 'long',
				//day: 'numeric'
		});

		return deliveryDay;
}


// Voorbeeldgebruik
const deliveryDay = calculateDeliveryDay();
deliverytime = `Nu besteld, ${deliveryDay} verzonden`; //dit is de regel tekst die wordt weergeven


document.getElementsByClassName("delivery-time")[0].innerHTML = deliverytime;
