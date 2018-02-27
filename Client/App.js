import boot from "./artifacts/boot/index";
import Amplify from 'aws-amplify';
import aws_exports from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(aws_exports)

const app = boot();

export default withAuthenticator(app);
