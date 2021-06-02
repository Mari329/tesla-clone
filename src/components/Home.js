import React from 'react';
import Section from './Section';
import styled from 'styled-components'

function Home() {
	return (
		<Container>
			<Section 
				title="Model S"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-s.jpg"
				leftButtonText="Custom order"
				rightButtonText="Existing inventory"
			/>
			<Section 
				title="Model Y"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-y.jpg"
				leftButtonText="Custom order"
				rightButtonText="Existing inventory"
			/>
			<Section 
				title="Model 3"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-3.jpg"
				leftButtonText="Custom order"
				rightButtonText="Existing inventory"
			/>
			<Section 
				title="Model X"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-x.jpg"
				leftButtonText="Custom order"
				rightButtonText="Existing inventory"
			/>
			<Section 
				title="Lowest Cost Solar Panels in America"
				description="Money-back gurantee"
				backgroundImg="solar-panel.jpg"
				leftButtonText="Order now"
				rightButtonText="Learn more"
			/>
			<Section 
				title="Solar for New Roofs"
				description="Solar Roof Costs Less Than a new Roofs"
				backgroundImg="solar-roof.jpg"
				leftButtonText="Order now"
				rightButtonText="Learn more"
			/>
			<Section 
				title="Accessories"
				description=""
				backgroundImg="accessories.jpg"
				leftButtonText="Shop now"
			/>
		</Container>
	)
}

export default Home;


const Container = styled.div`
	height: 100vh;
`;
