// function ValidateEmail(mail) {
// 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
// 		return (true)
// 	}
// 	return (false)
// }

const handlePay = async (element) => {
	let fee = parseInt(element.fee.match(/\d/g).join(""));
	if (fee > 999999) {
		return alert('Fees value should not be more then 999,999')
	}
	// if (ValidateEmail(element.mail) == false) {
	// 	return alert("You have entered an invalid email address!")
	// }
	let country = '';
	// const stripe = await loadStripe(stripePublicKey);
	await fetch('https://extreme-ip-lookup.com/json/?key=fzIZwrnyEfKNb4N4WSRE')
		.then(res => res.json())
		.then(response => {
			country = response.country
		})
		.catch((data, status) => {
			console.log('Request failed', data, status);
		});

	await fetch(`/api/create-checkout-session?category=${element.category}&country=${country}&amount=${fee}`, {
		method: "POST",
	}).then((res) => res.json()).then((res) => {
		if (res.url) {
			window.location.href = res.url
		}
	}).catch((error) => {
		console.log(error)
	});
};

const handleOther = () => {
	const mainDiv = document.querySelector(".backdrop")
	mainDiv.classList.remove("hidden")
	mainDiv.addEventListener("click", function (e) {
		if (e.target.classList.contains("backdrop")) {
			mainDiv.classList.add("hidden")
		}
		if (e.target.classList.contains("submitspmem")) {
			const inpval = document.getElementById("spmem").value
			if (typeof parseInt(inpval) == 'number') {
				handlePay({ category: 'SAARC Special Membership', fee: `${parseInt(inpval)}`, mail: '' })
			} else {
				alert('Enter a valid number')
			}
			mainDiv.classList.add("hidden")
		}
	})
}

document.querySelectorAll('.registeration_fee').forEach((ele, ind) => {
	ele.addEventListener("click", () => {
		switch (ind) {
			case 0: handlePay({ category: 'Research Scholar/Student', fee: '24900', mail: '' });
				break;
			case 1: handlePay({ category: 'Academician', fee: '29000', mail: '' });
				break;
			case 2: handlePay({ category: 'Industrial Participant', fee: '33200', mail:'' });
				break;
			case 3: handleOther();
				break;
			case 4: handlePay({ category: 'Research Scholar/Student', fee: '24900', mail: '' });
				break;
			case 5: handlePay({ category: 'Academician', fee: '29000', mail: '' });
				break;
			case 6: handlePay({ category: 'Industrial Participant', fee: '33200', mail: '' });
				break;
			case 7: handleOther();
				break;
			case 8: handlePay({ category: 'SAARC Research Scholar/Student', fee: '20750', mail: '' });
				break;
			case 9: handlePay({ category: 'SAARC Academician', fee: '24900', mail: '' });
				break;
			case 10: handlePay({ category: 'SAARC Industrial Participant', fee: '29000', mail: '' });
				break;
			case 11: handleOther();
				break;
			case 12: handlePay({ category: 'SAARC Research Scholar/Student', fee: '20750', mail: '' });
				break;
			case 13: handlePay({ category: 'SAARC Academician', fee: '24900', mail: '' });
				break;
			case 14: handlePay({ category: 'SAARC Industrial Participant', fee: '29000', mail: '' });
				break;
			case 15: handleOther();
				break;	
		}
	})
})

