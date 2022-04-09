//Navigation for surfSignup
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

//Navigation for beach
<NavigationContainer>
  <BottomTab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      // color: 'coral',
    }}>
    <BottomTab.Screen
      name="home"
      component={Home}
      options={{
        tabBarIcon: ({size, color}) => {
          return (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          );
        },
      }}
    />
    <BottomTab.Screen
      name="details"
      component={Details}
      options={{
        tabBarIcon: ({size, color}) => {
          return (
            <MaterialCommunityIcons
              name="rhombus-split"
              size={size}
              color={color}
            />
          );
        },
      }}
    />
  </BottomTab.Navigator>
</NavigationContainer>;
