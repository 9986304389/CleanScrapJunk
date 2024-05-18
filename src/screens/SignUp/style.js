const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center",


  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "500",
    marginTop: 30,
    marginBottom: 30,
    textAlign: "left",
    color: "black",
    fontWeight: "800"
  },
  loginFormView: {
    flex: 1,


  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 10,

  },
  loginButton: {
    backgroundColor: "#347855",
    borderRadius: 10,
    height: 45,
    marginTop: 10,
    marginBottom: '5%',
    width: 320,
    alignItems: "center"
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  label_text: {
    fontSize: 18,
    paddingLeft: 10,
    paddingTop: 4
  },
  eyeIconContainer1: {
    position: 'absolute',
    top: 500,
    right: 20,
  },
  eyeIconContainer2: {
    position: 'absolute',
    top: 595,
    right: 20,
  },

  touchableHighlight: {
    height: 43,
    fontSize: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  selectedValueText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 250,
    maxHeight: 300,
  },
  optionItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
  },
  errorText:{
    paddingLeft: 10,
    color:'red',
    fontWeight:'100'
 },
 spinnerContainer: {
  ...StyleSheet.absoluteFillObject, // Position the spinner absolute to cover the entire parent container
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
},
});
export default styles;
