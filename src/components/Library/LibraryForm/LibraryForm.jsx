import { Container, Section } from 'components/Common/Common.styled';
import { ReactComponent as BackArrow } from 'Assets/svg/backArrow.svg';
import { useDispatch } from 'react-redux';
import {
	AddBtn,
	AuthorLabel,
	BackBtn,
	NewBookForm,
	Input,
	Label,
	Lower,
	NameLabel,
	Upper,
	Wrapper,
	Error,
} from './LibraryForm.styled';
import { addUserBookThunk } from 'Redux/Books/booksOperations';
import { Formik, ErrorMessage } from 'formik';
import { booksFormSchema } from 'Utils/validSchema';

const LibraryForm = ({ handleFormOpen = null }) => {
	const dispatch = useDispatch();

	const handleFormSubmit = (
		{ title, author, publishYear, pagesTotal },
		{ resetForm }
	) => {
		dispatch(addUserBookThunk({ title, author, publishYear, pagesTotal }));
		resetForm();
	};

	return (
		<Section>
			<Container>
				<Wrapper>
					<BackBtn type="button" onClick={handleFormOpen}>
						<BackArrow width="24" height="24" />
					</BackBtn>
					<Formik
						onSubmit={handleFormSubmit}
						initialValues={{
							title: '',
							author: '',
							publishYear: '',
							pagesTotal: '',
						}}
						validationSchema={booksFormSchema}
					>
						<NewBookForm>
							<Upper>
								<NameLabel>
									Book title
									<Input placeholder="..." type="text" name="title" />
									<ErrorMessage
										name="title"
										render={message => <Error>{message}</Error>}
									/>
								</NameLabel>
							</Upper>
							<Lower>
								<AuthorLabel>
									Author
									<Input placeholder="..." type="text" name="author" />
									<ErrorMessage
										name="author"
										render={message => <Error>{message}</Error>}
									/>
								</AuthorLabel>
								<Label>
									Publication date
									<Input placeholder="..." type="text" name="publishYear" />
									<ErrorMessage
										name="publishYear"
										render={() => <Error>Are you sure?</Error>}
									/>
								</Label>
								<Label>
									Amount of pages
									<Input placeholder="..." type="text" name="pagesTotal" />
									<ErrorMessage
										name="pagesTotal"
										render={() => <Error>Are you sure?</Error>}
									/>
								</Label>
							</Lower>
							<AddBtn type="submit">Add</AddBtn>
						</NewBookForm>
					</Formik>
				</Wrapper>
			</Container>
		</Section>
	);
};
export default LibraryForm;
