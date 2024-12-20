import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} animated={true} /> : null;
};

export default FocusedStatusBar;
