const FeedbackModal = ({ feedback }) => {
	return (
		<dialog id='my_modal_3' className='modal'>
			<form method='dialog' className='modal-box'>
				<button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
				<h3 className='font-bold text-lg'>Feedback</h3>
				<p className='py-4'>{feedback}</p>
			</form>
		</dialog>
	);
};

export default FeedbackModal;
