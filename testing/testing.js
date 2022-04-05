<NavigationContainer style={styles.container}>
  <NativeStack.Navigator
    initialRouteName="welcome"
    screenOptions={{
      animation: 'none',
    }}>
    <NativeStack.Screen
      name="welcome"
      component={Welcome}
      options={{headerShown: false}}
    />
    <NativeStack.Screen
      name="signup"
      component={SignUp}
      options={{
        header: () => <Header title="SIGN UP" />,
      }}
    />

    <NativeStack.Screen
      name="signin"
      component={Login}
      options={{
        header: () => <Header title="SIGN IN" />,
      }}
    />
  </NativeStack.Navigator>
  {/* <SignUp /> */}
  {/* <Login /> */}
</NavigationContainer>;
