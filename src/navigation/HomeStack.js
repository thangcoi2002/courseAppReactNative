import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailCourse from '~/screens/DetailCourse';
import HomeScreen from '~/screens/HomeScreen';
import PaymentResult from '~/screens/PaymentResult';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Trở về',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailCourse"
        component={DetailCourse}
      />
      <Stack.Screen name="PaymentResult" component={PaymentResult} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default HomeStack;
