import BOOK_CATEGORY from 'components/Constants/bookCategories';
import { useState } from 'react';
import EmptyLibraryInfo from '../EmptyLibraryInfo/EmptyLibraryInfo';
import LibraryForm from 'components/Library/LibraryForm/LibraryForm';
import LibraryList from 'components/Library/LibraryList/LibraryList';
import { PlusBtn } from './MobileLibrary.styled';

const MobileLibrary = ({ isLibraryEmpty }) => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const toggleFormOpen = () => {
		setIsFormOpen(prevState => !prevState);
	};
	return (
		<>
			{isFormOpen ? (
				<LibraryForm isMobile={true} handleFormOpen={toggleFormOpen} />
			) : isLibraryEmpty ? (
				<EmptyLibraryInfo openFormHandler={toggleFormOpen} />
			) : (
				<>
					<LibraryList category={BOOK_CATEGORY.finishedReading} />
					<LibraryList category={BOOK_CATEGORY.currentlyReading} />
					<LibraryList category={BOOK_CATEGORY.goingToRead} />
					<PlusBtn
						type="button"
						onClick={toggleFormOpen}
						aria-label="Add new book"
					>
						+
					</PlusBtn>
				</>
			)}
		</>
	);
};
export default MobileLibrary;
