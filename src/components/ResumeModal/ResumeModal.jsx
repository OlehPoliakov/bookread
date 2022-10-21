import React, { useState } from 'react';
import RatingStars from './RatingStars';
import {
	Form,
	RatingTextS,
	ResumeTextS,
	TextAreaS,
	ButtonContainerS,
	ButtonBackS,
	ButtonSaveS,
} from './Resume.styled';

export const ResumeModal = ({ onClose }) => {
	const [feedback, setFeedback] = useState('');
	// const [rating, setRating] = useState(0);
	const [resume, setResume] = useState('');
	// const changeRating = e => {
	// 	setRating(Math.ceil(e));
	// };
	// Неконтрольована форма - запис при сабміті
	const handleSubmit = event => {
		event.preventDefault();
		setResume(event.currentTarget.elements.resume.value);
		setFeedback(event.currentTarget.elements.resume.value);
		event.currentTarget.reset();
		onClose();
	};

	// контрольована форма - для відслідковування введенного
	const handleInputChange = event => {
		setResume(event.target.value);
		setFeedback(event.target.value);
	};
	console.log('feedback', feedback);

	return (
		<Form onSubmit={handleSubmit} autoComplete="off">
			<label>
				<RatingTextS>Choose book rating</RatingTextS>
				<RatingStars />
				<ResumeTextS>Resume</ResumeTextS>
				<TextAreaS
					name="resume"
					rows="5"
					cols="33"
					placeholder="Start your comment here."
					value={resume}
					onChange={handleInputChange}
				/>
				<ButtonContainerS>
					<ButtonBackS type="button" onClick={onClose}>
						Back
					</ButtonBackS>
					<ButtonSaveS type="submit">Save</ButtonSaveS>
				</ButtonContainerS>
			</label>
		</Form>
	);
};

// disabled Save button?
// Save input for reload page & close Modal...

// Для підключення:
// import { useState } from 'react';
// import Modal from '../components/Modal/Modal';
// import { ResumeModal } from '../components/ResumeModal/ResumeModal';

// const HomePage = () => {
// 	const [modalOpen, setModalOpen] = useState(false);

// 	const openModal = () => {
// 		setModalOpen(true);
// 	};

// 	const closeModal = () => {
// 		setModalOpen(false);
// 	};

// 	return (
// 		<>
// 			<div>qwe</div>
// 			<button type="button" onClick={openModal}>
// 				RESUME
// 			</button>
// 			{modalOpen && (
// 				<Modal onClose={closeModal}>
// 					<ResumeModal onClose={closeModal} />
// 				</Modal>
// 			)}
// 		</>
// 	);
// };

// export default HomePage;