import { Text, View ,StyleSheet} from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Link href='/(auth)'>Login Page</Link>
      <Link href='/(auth)/signup'>Sign up Page</Link>
    </View>
 
  );
}
const styles = StyleSheet.create({

})
