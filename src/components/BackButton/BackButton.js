import React from "react";
import { TouchableHighlight, Image } from "react-native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import styles from "./styles";

export default function BackButton(props) {
  const navigation = useNavigation(); // Access navigation object

  return (
    <TouchableHighlight onPress={() => navigation.goBack()} style={styles.btnContainer}>
      <Image source={require("../../../assets/icons/backArrow.png")} style={styles.btnIcon} />
    </TouchableHighlight>
  );
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
