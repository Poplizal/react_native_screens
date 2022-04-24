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

//Navigation for online learning
<NavigationContainer>
  <NativeStack.Navigator screenOptions={{headerShown: false}}>
    <NativeStack.Screen name="welcome" component={Welcome} />
    <NativeStack.Screen name="main" component={Main} />
    <NativeStack.Screen
      name="details"
      component={Details}
      options={{
        headerShown: true,
        header: () => {
          return <CustomHeader />;
        },
      }}
    />
  </NativeStack.Navigator>
</NavigationContainer>;

<ScrollView
  contentContainerStyle={styles.container}
  showsVerticalScrollIndicator={true}>
  <View style={styles.cart_item}>
    <View style={styles.image_container}>
      <Image
        style={styles.img}
        source={require('./assests/strawberry.png')}
        resizeMode="contain"
      />
    </View>
    <View style={styles.cart_item_des}>
      <Text style={styles.title}>Strawberry</Text>
      <Text style={styles.weight}>3kg</Text>
      <Text style={styles.price}>$26.34</Text>
    </View>
    <View style={styles.counter}>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="plus" color="#8c0700" size={20} />
      </TouchableOpacity>
      <Text style={styles.count}>3</Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="minus" color="#8c0700" size={20} />
      </TouchableOpacity>
    </View>
  </View>
  <View style={styles.cart_item}>
    <View style={styles.image_container}>
      <Image
        style={styles.img}
        source={require('./assests/strawberry.png')}
        resizeMode="contain"
      />
    </View>
    <View style={styles.cart_item_des}>
      <Text style={styles.title}>Strawberry</Text>
      <Text style={styles.weight}>3kg</Text>
      <Text style={styles.price}>$26.34</Text>
    </View>
    <View style={styles.counter}>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="plus" color="#8c0700" size={20} />
      </TouchableOpacity>
      <Text style={styles.count}>3</Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="minus" color="#8c0700" size={20} />
      </TouchableOpacity>
    </View>
  </View>
  <View style={styles.cart_item}>
    <View style={styles.image_container}>
      <Image
        style={styles.img}
        source={require('./assests/banana.png')}
        resizeMode="contain"
      />
    </View>
    <View style={styles.cart_item_des}>
      <Text style={styles.title}>Strawberry</Text>
      <Text style={styles.weight}>3kg</Text>
      <Text style={styles.price}>$26.34</Text>
    </View>
    <View style={styles.counter}>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="plus" color="#8c0700" size={20} />
      </TouchableOpacity>
      <Text style={styles.count}>3</Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="minus" color="#8c0700" size={20} />
      </TouchableOpacity>
    </View>
  </View>
  <View style={styles.cart_item}>
    <View style={styles.image_container}>
      <Image
        style={styles.img}
        source={require('./assests/strawberry.png')}
        resizeMode="contain"
      />
    </View>
    <View style={styles.cart_item_des}>
      <Text style={styles.title}>Strawberry</Text>
      <Text style={styles.weight}>3kg</Text>
      <Text style={styles.price}>$26.34</Text>
    </View>
    <View style={styles.counter}>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="plus" color="#8c0700" size={20} />
      </TouchableOpacity>
      <Text style={styles.count}>3</Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="minus" color="#8c0700" size={20} />
      </TouchableOpacity>
    </View>
  </View>
  <View style={styles.cart_item}>
    <View style={styles.image_container}>
      <Image
        style={styles.img}
        source={require('./assests/strawberry.png')}
        resizeMode="contain"
      />
    </View>
    <View style={styles.cart_item_des}>
      <Text style={styles.title}>Strawberry</Text>
      <Text style={styles.weight}>3kg</Text>
      <Text style={styles.price}>$26.34</Text>
    </View>
    <View style={styles.counter}>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="plus" color="#8c0700" size={20} />
      </TouchableOpacity>
      <Text style={styles.count}>3</Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="minus" color="#8c0700" size={20} />
      </TouchableOpacity>
    </View>
  </View>
  <View style={styles.cart_item}>
    <View style={styles.image_container}>
      <Image
        style={styles.img}
        source={require('./assests/strawberry.png')}
        resizeMode="contain"
      />
    </View>
    <View style={styles.cart_item_des}>
      <Text style={styles.title}>Strawberry</Text>
      <Text style={styles.weight}>3kg</Text>
      <Text style={styles.price}>$26.34</Text>
    </View>
    <View style={styles.counter}>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="plus" color="#8c0700" size={20} />
      </TouchableOpacity>
      <Text style={styles.count}>3</Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="minus" color="#8c0700" size={20} />
      </TouchableOpacity>
    </View>
  </View>
  <View style={styles.cart_item}>
    <View style={styles.image_container}>
      <Image
        style={styles.img}
        source={require('./assests/strawberry.png')}
        resizeMode="contain"
      />
    </View>
    <View style={styles.cart_item_des}>
      <Text style={styles.title}>Strawberry</Text>
      <Text style={styles.weight}>3kg</Text>
      <Text style={styles.price}>$26.34</Text>
    </View>
    <View style={styles.counter}>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="plus" color="#8c0700" size={20} />
      </TouchableOpacity>
      <Text style={styles.count}>3</Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="minus" color="#8c0700" size={20} />
      </TouchableOpacity>
    </View>
  </View>
  <View style={styles.cart_item}>
    <View style={styles.image_container}>
      <Image
        style={styles.img}
        source={require('./assests/strawberry.png')}
        resizeMode="contain"
      />
    </View>
    <View style={styles.cart_item_des}>
      <Text style={styles.title}>Strawberry</Text>
      <Text style={styles.weight}>3kg</Text>
      <Text style={styles.price}>$26.34</Text>
    </View>
    <View style={styles.counter}>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="plus" color="#8c0700" size={20} />
      </TouchableOpacity>
      <Text style={styles.count}>3</Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="minus" color="#8c0700" size={20} />
      </TouchableOpacity>
    </View>
  </View>
  <View style={styles.cart_item}>
    <View style={styles.image_container}>
      <Image
        style={styles.img}
        source={require('./assests/strawberry.png')}
        resizeMode="contain"
      />
    </View>
    <View style={styles.cart_item_des}>
      <Text style={styles.title}>Strawberry</Text>
      <Text style={styles.weight}>3kg</Text>
      <Text style={styles.price}>$26.34</Text>
    </View>
    <View style={styles.counter}>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="plus" color="#8c0700" size={20} />
      </TouchableOpacity>
      <Text style={styles.count}>3</Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.count_btn}>
        <Icon name="minus" color="#8c0700" size={20} />
      </TouchableOpacity>
    </View>
  </View>
</ScrollView>;
