import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProvider';
import { GiSpinningBlades } from 'react-icons/gi';

const PaymentForm = ({ price, selectedClass }) => {
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
			console.log(paymentMethod);
			setCardErr('');
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
		if (paymentIntent.status === 'succeeded') {
			toast.success('Payment successful. Enjoy your class!');
			// add the paid class to the enrolled collection and remove it from the selected collection
			const { _id, ...enrolledClassRest } = selectedClass;

			const enrolledClassInfo = {
				...enrolledClassRest,
				date: new Date()
			};
			axiosSecure.post('/enrolled-classes', enrolledClassInfo).then((res) => {
				if (res.data.insertedId) {
					axiosSecure.delete(`/selected-class/${selectedClass._id}`).then((data) => {
						if (data.data.deletedCount > 0) {
							console.log('Class deleted successfully!');
						}
					});
				}
			});
			const paymentInfo = {
				studentEmail: user?.email,
				className: selectedClass?.className,
				image: selectedClass?.image,
				instructor: selectedClass?.instructor,
				instructorEmail: selectedClass?.instructorEmail,
				transactionId: paymentIntent?.id,
				amount: selectedClass?.price,
				date: new Date()
			};
			// add payment information to the database
			axiosSecure.post('/payments', paymentInfo).then((res) => {
				console.log(res.data);
			});

			axiosSecure.get(`/classes/${selectedClass?.classId}`).then((getResponse) => {
				const enrolledClass = getResponse.data;
				const updatedInfo = {
					availableSlots: enrolledClass?.availableSlots - 1,
					enrolledStudents: enrolledClass?.enrolledStudents + 1
				};
				console.log(enrolledClass);
				if (enrolledClass) {
					axiosSecure.patch(`/classes/${selectedClass?.classId}`, updatedInfo).then((patchResponse) => {
						console.log(patchResponse.data);
					});
				}
			});
		}
	};

	return (
		<div className='flex flex-col justify-center items-center w-full min-h-[50vh]'>
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

				{processing ? (
					<button
						type='button'
						className='btn btn-block bg-[#8de4af] hover:bg-[#54cc82] flex justify-center items-center mt-5'>
						<GiSpinningBlades size={25} className='animate-spin text-slate-900' />
					</button>
				) : (
					<button
						className='btn mx-auto bg-[#8de4af] hover:bg-[#2bd06a] btn-block block mt-5'
						type='submit'
						disabled={!stripe || !clientSecret || processing}>
						Pay
					</button>
				)}
			</form>
		</div>
	);
};

export default PaymentForm;
