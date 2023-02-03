import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

const MainPage = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin: 20, alignItems: "center" }}>
          <View>
            <Text> This is thde Default page</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigate("Link Page");
              }}
            >
              <Text>Click for Link Page</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainPage;
