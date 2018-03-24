import * as React from "react";
import { Image, Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
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
				<Content padder>
					<Body>
						<Image
							source={require("../../../../assets/DentER_logo.png")}
							style={{ width: 650 / 4, height: 650 / 4 }}
						/>
					</Body>
					<Card>
						<CardItem header>
							<Body>
								<H3>Welcome to DentER!</H3>
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
					<Body>
						<Text>   </Text>
						<Text>
							Swipe right to get started.
						</Text>
					</Body>
				</Content>
			</Container>
		);
	}
}

export default Home;
