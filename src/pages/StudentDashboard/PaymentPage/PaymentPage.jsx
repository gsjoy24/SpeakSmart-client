import { useLoaderData, useParams } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);

const PaymentPage = () => {
	const { id } = useParams();
	const { data } = useLoaderData();
	

	return (
		<div>
			<Elements stripe={stripePromise}>
            <PaymentForm price={data.price } />
			</Elements>
		</div>
	);
};

export default PaymentPage;
