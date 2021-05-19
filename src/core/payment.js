import React  from 'react'
import { Link} from 'react-router-dom';
import '../login page/hom1/style.css'
import '../login page/hom1/Dry-Fruit.css'

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {    resolve(true)    }
        script.onerror = () => {    resolve(false)    }
        document.body.appendChild(script)
    })
}
const __DEV__ = document.domain === 'localhost'

const Payment = () => {
    
    async function displayRazorpay(){
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_SAbbfU7VlOFCBN' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name: 'sahil',
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}
    
    return(
        // <button className="wbtn123 wbtn1123 wishlistb "><Link to={{ pathname:"https://rzp.io/l/VmjWhGd"}} target="_blank">PAYMENT</Link></button> 
        <button className="wbtn123 wbtn1123 wishlistb " onClick={displayRazorpay} target="_blank" >
			Donate $5</button>
        
        )
}
export default Payment;