import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {

	const [burgerStatus, setburgerStatus] = useState(false);
	const cars = useSelector(selectCars);
	console.log(cars);

	return (
		<Container>
			<a href="#">
				<img src="./images/logo.svg" />
			</a>
			<MenuGroup>
				{ cars && cars.map((car, index) => (
					<a key={index} href="#">{car}</a>
				)) }
			</MenuGroup>
			<RightMenu>
				<a href="#">Shop</a>
				<a href="#">Tesla Account</a>
				<MenuIconContainer onClick={() => setburgerStatus(true)}>
					<MenuIcon />
				</MenuIconContainer>
			</RightMenu>
			<BurgerNav show={burgerStatus}>
				<CloseContainer>
					<Close onClick={() => setburgerStatus(false)}/>
				</CloseContainer>
				{ cars && cars.map((car, index) => (
					<li key={index}><a href="#">{car}</a></li>
				)) }
				<li><a href="#">Existing inventory</a></li>
				<li><a href="#">Used inventory</a></li>
				<li><a href="#">Trade-in</a></li>
				<li><a href="#">Cybertruck</a></li>
				<li><a href="#">Roadster</a></li>
				<li><a href="#">Semi</a></li>
				<li><a href="#">Charging</a></li>
			</BurgerNav>
		</Container>
	)
}

export default Header;

const Container = styled.div`
	display: flex;
	min-height: 60px;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
`;

const MenuGroup = styled.div`
	display: flex;
	text-transform: uppercase;
	a {
		font-weight: 600;
		padding: 0 10px;
		cursor: pointer;
	}

	@media(max-width: 768px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;
	a {
		font-weight: 600;
		text-transform: uppercase;
		padding-right: 10px;
	}
`;

const MenuIconContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

const BurgerNav = styled.div`
	position: fixed;
	width: 300px;
	background-color: white;
	top:0;
	right: 0;
	bottom: 0;
	padding: 20px;
	list-style: none;
	transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
	transition: transform 0.2s ease-in;
	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, .2);
		a {
			font-weight: 600;
		}
	}
`;

const CloseContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Close = styled(CloseIcon)`
	cursor: pointer;
`;