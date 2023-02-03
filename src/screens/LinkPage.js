import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
const LinkPage = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin: 20, alignItems: "center" }}>
          <View>
            <Text> Reached on the Linked Page.</Text>
            <Text> Navigation is a success</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigate("Default Page");
              }}
            >
              <Text>click for MAIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LinkPage;
