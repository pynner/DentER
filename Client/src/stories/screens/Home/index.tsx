import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  H1,
  H3,
  Card,
  CardItem
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent>
							<Icon
								active
								name="menu"
								onPress={() => this.props.navigation.navigate("DrawerOpen")}
							/>
					</Button>
					</Left>
					<Body>
						<Title>Home</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<Card>
						<CardItem header>
							<Body>
								<H1>
									Welcome to DentER!
								</H1>
							</Body>
						</CardItem>
						<CardItem>
							<Body>
								<Text>
									The best way to connect with on-call dentists.
								</Text>
							</Body>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

export default Home;
