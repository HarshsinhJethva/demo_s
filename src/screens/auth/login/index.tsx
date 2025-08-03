import { StyleSheet, View } from 'react-native';
import React from 'react';
import {
  Button,
  Container,
  Image,
  List,
  SvgIcon,
  Text,
  TextInput,
  Touchable,
} from '@components';
import useLogin from './useLogin';
import { responsive } from '@utils';
import { useTheme } from '@react-navigation/native';
import images from '@assets/images';
import useStyles from './styles';

const Login = () => {
  const { state ,onPressLogin} = useLogin();
  const styles = useStyles();

  return (
    <Container form containerStyle={{}}>
      <Image source={images.plie} />
      <Text value={'plie'} style={styles.plie} bold />
      <View style={styles.conatainer}>
        <TextInput
          title="Email"
          value={state.email}
          onChangeText={state.setEmail}
          error={state.emailError}
          setError={state.setEmailError}
        />
        <TextInput
          title="Password"
          value={state.password}
          onChangeText={state.setPassword}
          error={state.passwordError}
          setError={state.setPasswordError}
          secure
        />
        <Text value={'Forgot Password?'} style={styles.forgotText} />

        <Button
          // labelStyle={}
          label="Sign In"
          wrapperStyles={styles.wrapperStyles}
          onPress={onPressLogin}
        />
        <View style={styles.signUpVIew}>
          <Text value={'Not a member?'} />
          <Touchable>
            <Text value={'Sign Up Here'} style={{ borderBottomWidth: 1 }} />
          </Touchable>
        </View>

        <View style={styles.orSingUpView}>
          <View style={styles.saperator} />
          <Text value={'or Sign In with:'} />
          <View style={styles.saperator} />
        </View>

        <View style={styles.svgView}>
          <Touchable>
            <SvgIcon name="Google" style={styles.svgStyle} />
          </Touchable>
          <Touchable>
            <SvgIcon name="Apple" style={styles.svgStyle} />
          </Touchable>
          <Touchable>
            <SvgIcon name="Fb" style={styles.svgStyle} />
          </Touchable>
        </View>
        <Touchable>
          <Text
            value={'Enter as Guest'}
            style={[
              styles.forgotText,
              { marginVertical: responsive.height(5) },
            ]}
          />
        </Touchable>
      </View>
    </Container>
  );
};

export default Login;
