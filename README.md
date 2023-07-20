# libraries


1) Navigation -- stack

npm install @react-navigation/native

npx expo install react-native-screens react-native-safe-area-context

npm install @react-navigation/native-stack

2) Expo LocalAuthentication

npx expo install expo-local-authentication

app.json
{
  "expo": {
    "plugins": [
      [
        "expo-local-authentication",
        {
          "faceIDPermission": "Allow $(PRODUCT_NAME) to use Face ID."
        }
      ]
    ]
  }
}