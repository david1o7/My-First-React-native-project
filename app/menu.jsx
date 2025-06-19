import { Appearance, StyleSheet , Platform , SafeAreaView , FlatList , View ,Text , Image} from "react-native";

import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";
import { ScrollView } from 'react-native';


export default function MenuScreen(){
    const colorScheme = Appearance.getColorScheme()

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme)

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const seperatorComponent = <View style={styles.seperator}/>

    const headerComponent = <Text>TOP OF THE CATEGORY</Text>

    const footerComponent = <Text style = {{ color : theme.text }}>END OF THE CATEGORY</Text>
    return(
        <Container>
            <FlatList
             data={MENU_ITEMS}
             keyExtractor={(item) => item.id.toString()}
             showsVerticalScrollIndicator = {false}
             contentContainerStyle = {styles.contentContainer}
             ItemSeparatorComponent={seperatorComponent}
             ListHeaderComponent={headerComponent}
             ListFooterComponent={footerComponent}
             ListHeaderComponentStyle = {styles.headerComponent}
             ListFooterComponentStyle = {styles.footerComponent}
             ListEmptyComponent={<Text>No Items Available</Text>}
            renderItem={({item}) => (
               <View style = {styles.Row}>
                    <View style = {styles.menuTextRow}>
                        <Text style={[styles.menuItemTitle , styles.menuItemText]}>{item.title}</Text>
                        <Text style={styles.menuItemText}>{item.description}</Text>
                    </View>
                    <Image source={MENU_IMAGES[item.id - 1]}
                            style = {styles.menuImage}
                            />
               </View>
            )} />
        </Container>
    )
}

function createStyles(theme, colorScheme){
    return StyleSheet.create({
        contentContainer : {
            paddingTop : 10,
            paddingBottom : 20,
            paddingHorizontal : 12,
            backgroundColor : theme.background,
        },
        seperator : {
            height : 1,
            backgroundColor : colorScheme === 'dark' ? 'papayawhip' : "#000",
            width : '50%',
            maxWidth : 300,
            marginHorizontal : 'auto',
            marginBottom : 10,
        },
        footerComponent :{
            marginHorizontal : 'auto',

        },
        headerComponent : {
            marginHorizontal : 'auto',

        },
        Row : {
            flexDirection : "row",
            width : "100%",
            maxWidth : 600,
            height : 100,
            marginBottom: 10,
            borderStyle : 'solid',
            borderColor : colorScheme === 'dark' ? 'papayawhip' : "#000",
            borderWidth : 2,
            borderRadius : 20,
            overflow : "hidden",
            marginHorizontal : "auto",

        },
        menuTextRow : {
            width : "65%",
            paddingTop : 10,
            paddingLeft : 10,
            paddingRight : 5,
            flexGrow : 1,

        },
        menuItemTitle:{
            fontSize : 18,
            textDecorationLine : 'underline',

        },
        menuItemText : {
            color : theme.text,
        },
        menuImage : {
            width: 100,
            height:100,
        }


    })
}