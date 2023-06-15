import { useLoaderData } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);

const PaymentPage = () => {
	const { data } = useLoaderData();

	return (
		<div>
			<h1 className='text-2xl md:text-4xl text-gray-700 font-bold text-center my-12'>Pay for {data?.className}</h1>
			<Elements stripe={stripePromise}>
				<PaymentForm price={data.price} selectedClass={data} />
			</Elements>
		</div>
	);
};

export default PaymentPage;
