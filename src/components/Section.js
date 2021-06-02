import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section(props) {
	console.log(props);
	return (
		<Container bgImage={props.backgroundImg}>
			<Fade bottom>
				<ItemText>
					<h1>{ props.title }</h1>
					<p>{ props.description }</p>
				</ItemText>
			</Fade>
			<Buttons>
				<Fade bottom>
					<ButtonGroup>
						<LeftButton>{ props.leftButtonText }</LeftButton>
						{
							props.rightButtonText && <RightButton>{ props.rightButtonText }</RightButton>
						}
					</ButtonGroup>
				</Fade>
				<DownArrow src="/images/down-arrow.svg" />
			</Buttons>
			
		</Container>
	)
}

export default Section;

const Container = styled.div`
	background-color: blue;
	width: 100%;
	height: 100vh;
	background-image: ${props => `url('./images/${props.bgImage}')`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`;

const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 30px;
	@media(max-width: 768px) {
		flex-direction: column;
	}
`;

const LeftButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	border-radius: 100px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	font-size: 12px;
	opacity: 0.85;
	margin: 8px;
	cursor: pointer;
`;

const RightButton = styled(LeftButton)`
	background-color: white;
	color: black;
	opacity: 0.65;
`;

const DownArrow = styled.img`
	height: 40px;
	animation: animateDown infinite 1.5s;
	margin-bottom: 50px;
`;

const Buttons = styled.div`
	text-align: center;
`;