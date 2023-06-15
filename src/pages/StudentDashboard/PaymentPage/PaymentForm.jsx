import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProvider';

const PaymentForm = ({ price }) => {
	const { user } = useContext(AuthContext);
	const stripe = useStripe();
	const elements = useElements();
	const [cardErr, setCardErr] = useState('');
	const [axiosSecure] = useAxiosSecure();
	const [clientSecret, setClientSecret] = useState('');
	const [processing, setProcessing] = useState(false);

	useEffect(() => {
		axiosSecure.post('/create-payment-intent', { price }).then((res) => {
			setClientSecret(res.data.clientSecret);
		});
	}, [axiosSecure, price]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card == null) {
			toast.warning('Provide card information!');
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card
		});

		if (error) {
			console.log('[error]', error);
			setCardErr(error.message);
		} else {
			setCardErr('');
			console.log('[PaymentMethod]', paymentMethod);
		}
		setProcessing(true);
		const { paymentIntent, error: confirmErr } = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card,
				billing_details: {
					name: user?.displayName || 'anonymous',
					email: user?.email || 'unknown'
				}
			}
		});

		if (confirmErr) {
			console.log(confirmErr.message);
			setCardErr(confirmErr.message);
		}
		setProcessing(false);
		console.log(paymentIntent);
	};
	return (
		<div className='flex flex-col justify-center items-center w-full min-h-[90vh]'>
			<form onSubmit={handleSubmit} className='max-w-md mx-auto w-full px-6'>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4'
								}
							},
							invalid: {
								color: '#9e2146'
							}
						}
					}}
				/>
				{cardErr && (
					<p className='text-red-500 mt-4 text-sm flex items-center gap-2'>
						<BsFillExclamationCircleFill size={16} /> {cardErr}
					</p>
				)}
				<button
					className='btn mx-auto bg-[#8de4af] hover:bg-[#2bd06a] btn-block block mt-5'
					type='submit'
					disabled={!stripe || !clientSecret || processing}>
					Pay
				</button>
			</form>
		</div>
	);
};

export default PaymentForm;
