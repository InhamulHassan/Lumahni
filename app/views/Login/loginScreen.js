import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavigationScreenProps, NavigationEvents } from "react-navigation";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { userLogin, resetUserLogin } from "../../redux/actions/userDbAction";
import LinearGradient from "react-native-linear-gradient";
import InputText from "../../components/InputText";
import styles from "./styles";

const { width, height } = Dimensions.get("window");

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.secondTextInputRef = React.createRef();

    // // debouncing navigating to home function
    // this.navigateToHomeThrottled = debounce(
    //   1500,
    //   this.props.navigation.navigate
    // );

    this.state = {
      username: "",
      password: "",
      showPass: true,
      press: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.authToken !== this.props.authToken && !this.props.loading) {
      this.props.navigation.navigate("HomeScreen");
    }
  }

  componentWillUnmount() {
    // To persist the user auth details
    this.props.resetUserLogin();
  }

  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    header: null
  });

  // navigateToHome = () => {
  //   this.setState({ loading: true }, () => {
  //     this.navigateToHomeThrottled("HomeScreen");
  //   });
  // };

  showPass = () => {
    this.state.press === false
      ? this.setState({ showPass: false, press: true })
      : this.setState({ showPass: true, press: false });
  };

  render() {
    const { showPass } = this.state;
    const { loading, error } = this.props;

    return (
      <View style={styles.rootView}>
        <View style={styles.logoContainerView}>
          <View style={styles.logoImageWrapper}>
            <Image
              source={require("../../assets/logos/lumahni_logo.png")}
              style={styles.logoImage}
            />
          </View>
          <Text style={styles.logoText}>Modern OPAC</Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.formContainerView}
          keyboardVerticalOffset={-600}
        >
          <InputText
            color="#1498d5"
            iconLeft={<Icon name="person" size={24} color="#1498d5" />}
            placeholder="Username"
            returnKeyType={"next"}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.secondTextInputRef.current.focus();
            }} // to focus the next input on submitting (i.e. clicking next)
          />
          <InputText
            inputRef={this.secondTextInputRef}
            color="#1498d5"
            iconLeft={<Icon name="lock" size={24} color="#1498d5" />}
            iconRight={
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.iconVisibilityButton}
                onPress={this.showPass}
              >
                <Icon
                  name={showPass ? "visibility" : "visibility-off"}
                  size={24}
                  color="#1498d5"
                  style={styles.iconVisibility}
                />
              </TouchableOpacity>
            }
            secureTextEntry={this.state.showPass}
            placeholder="Password"
            returnKeyType={"done"}
            autoCapitalize={"none"}
            autoCorrect={false}
            containerStyle={styles.textContainer}
            inputContainerStyle={styles.textInputContainer}
            inputStyle={styles.input}
            underlineColorAndroid="transparent"
          />
          <View style={styles.errorView}>
            <Text style={styles.errorText}>{error || ""}</Text>
          </View>
          <Button
            title="Login"
            type="solid"
            raisedrr
            loading={loading}
            loadingProps={{ size: "large" }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#6979F8", "#1498D5"],
              start: { x: 0, y: 1 },
              end: { x: 1, y: 0 }
            }}
            titleStyle={styles.loginButtonTitle}
            buttonStyle={styles.loginButton}
            onPress={() => this.navigateToHome()}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  authToken: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string
};

LoginScreen.defaultProps = {
  authToken: "",
  loading: false,
  error: ""
};

const mapStateToProps = state => {
  return {
    authToken: state.user.authToken,
    loading: state.user.dataLoading,
    error: state.user.error
  };
};

const mapDispatchToProps = {
  userLogin,
  resetUserLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
