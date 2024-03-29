
 import * as React from 'react';
 import {
   StatusBar,
   Image,
   FlatList,
   Dimensions,
   Animated,
   Text,
   View,
   StyleSheet,
   SafeAreaView,
   ImageBackground,
   Button,
 } from 'react-native';
 import {
   State,
   FlingGestureHandler,
   Directions,
 } from 'react-native-gesture-handler';

 import Header from '../Home/header';

 

 
    
 const { width } = Dimensions.get('screen');
 import { EvilIcons } from '@expo/vector-icons';
 
 const DATA = [
 
   
     
   {
     title: 'Árvores',
     location:'Campus PUCRS',
     
     
     poster:
     'https://cdn.discordapp.com/attachments/757716647627849898/857699754007986236/unknown.png', //Arvore
     
   },
   {
     title: 'Plantas',
     location: 'Campus PUCRS',
     
     poster:
     'https://cdn.discordapp.com/attachments/757716647627849898/857700055913988157/unknown.png', //Planta
   },
   {
     title: 'Animais',
     location: 'Campus PUCRS',
     
     
     poster:
     'https://cdn.discordapp.com/attachments/757716647627849898/857699803633811456/unknown.png' , //Pássaro
   },
   {
     title: 'Monumentos',
     location: 'Campus PUCRS',
     
     poster:
     'https://cdn.discordapp.com/attachments/757716647627849898/857702060999966730/unknown.png',
     
   },
   
 ];
 
 const OVERFLOW_HEIGHT = 120;
 const SPACING = 40;
 const VISIBLE_ITEMS = 2;
 const ITEM_WIDTH = width * 0.6;
 const ITEM_HEIGHT = ITEM_WIDTH * 1.5;
 
 const OverflowItems = ({ scrollX, data }) => {
   const translateY = scrollX.interpolate({
     inputRange: [-1, 0, 1],
     outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
   });
   return (
    
     <View style={{ height: OVERFLOW_HEIGHT, overflow: 'hidden' }}>
       <Animated.View style={{ transform: [{ translateY }] }}>
         {data.map((item, index) => {
           return (
             <Animated.View key={index} style={styles.itemContainer}>
               <Text style={[styles.title]} numberOfLines={1}>
                 {item.title}
               </Text>
               <View style={styles.itemContainerRow}>
                 <Text style={[styles.location]}>
                   <EvilIcons
                     name='location'
                     size={16}
                     color='black'
                     style={{ marginRight: 5 }}
                   />
                   {item.location}
                 </Text>
                 <Text style={[styles.date]}>{item.date}</Text>
               </View>
             </Animated.View>
           );
         })}
       </Animated.View>
     </View>
    
   );
 };
 
 export default function List() {
   const scrollX = React.useRef(new Animated.Value(0)).current;
   const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
   const [index, setIndex] = React.useState(0);
   const [data, setData] = React.useState(DATA);
 
   const setAnimatedIndex = React.useCallback((i) => {
     setIndex(i);
     scrollX.setValue(i);
   }, []);
 
   // interconnected animations aka reactive animations :D
   React.useEffect(() => {
     Animated.spring(scrollXAnimated, {
       toValue: scrollX,
       useNativeDriver: true,
     }).start();
   });
 
   // React.useEffect(() => {
   //   if (index === data.length - VISIBLE_ITEMS - 2) {
   //     console.log('fetch more')
   //     const newData = [...data, ...data];
 
   //     setData(newData);
   //   }
   // }, [index]);
 
   return (
     
    <View style={styles.viewback}>
<ImageBackground source={ image } style={styles.background}>

     <FlingGestureHandler
       direction={Directions.LEFT}
       onHandlerStateChange={(e) => {
         if (e.nativeEvent.state === State.END) {
           if (index === data.length - 1) {
             // setAnimatedIndex(0)
             return;
           }
           setAnimatedIndex(index + 1);
         }
       }}
     >
       <FlingGestureHandler
         direction={Directions.RIGHT}
         onHandlerStateChange={(e) => {
           if (e.nativeEvent.state === State.END) {
             if (index === 0) {
               // setAnimatedIndex(data.length - 1)
               return;
             }
             setAnimatedIndex(index - 1);
           }
         }}
       >
         <SafeAreaView style={styles.container}>
           <StatusBar hidden />
           <OverflowItems scrollX={scrollXAnimated} data={data} />
           <FlatList
                                     
             data={data}
             keyExtractor={(_, index) => String(index)}
             scrollEnabled={false}
             inverted
             renderToHardwareTextureAndroid
             removeClippedSubviews={false}
             contentContainerStyle={{
               flex: 1,
               justifyContent: 'center',
               padding: SPACING * 2,
             }}
             CellRendererComponent={({ children, index, style, ...props }) => {
               const cellStyle = [
                 style,
 
                 // I want each item to have a higher zIndex than the previous one,
                 // in reversed order due to the FlatList being inverted
                 { zIndex: data.length - index },
               ];
 
               // OverflowableView for Android...
               return (
                 <View style={cellStyle} index={index} {...props}>
                   {children}
                 </View>
               );
             }}
             renderItem={({ item, index }) => {
               const inputRange = [index - 1, index, index + 1];
               const translateX = scrollXAnimated.interpolate({
                 inputRange,
                 outputRange: [50, 0, -100],
               });
               const opacity = scrollXAnimated.interpolate({
                 inputRange,
                 outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
               });
               const scale = scrollXAnimated.interpolate({
                 inputRange,
                 outputRange: [0.8, 1, 1.3],
               });
               return (
                 <Animated.View
                   style={{
                     position: 'absolute',
                     width: ITEM_WIDTH,
                     top: -ITEM_HEIGHT / 2,
                     borderRadius: 10,
                     overflow: 'hidden',
                     transform: [{ translateX }, { scale }],
                     opacity,
                   }}
                 >
                   
                   <Image
                     source={{ uri: item.poster }}
                     style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}
                                       
                   />
                   
                 </Animated.View>
               );
             }}
           />
         </SafeAreaView>
       </FlingGestureHandler>
     </FlingGestureHandler>
     
     </ImageBackground>
     </View>
     
   );
 }
 
 const image = require('../Home/Homepage.png')

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
    marginTop: 70,
   },
   title: {
     fontSize: 28,
     fontWeight: '900',
     textTransform: 'uppercase',
     letterSpacing: -1,
     
   },
   location: {
     fontSize: 16,
    

   },
   date: {
     fontSize: 12,
   },
   itemContainer: {
     height: OVERFLOW_HEIGHT,
     padding: SPACING,
   },
   itemContainerRow: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
   },

   viewback:{

    flex: 1,
    flexDirection: "column",
    marginBottom: 1


},

background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    
    

},

 });
 