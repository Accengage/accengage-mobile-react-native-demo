import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  accbuttoncontainer: {
    margin: 5,
    padding: 10,
    width: 300,
    height: 45,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#0000ff',
  },
  blueButton: {
    margin: 5,
    padding: 10,
    height: 45,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#0000ff',
   },
   redButton: {
    margin: 5,
    padding: 10,
    height: 45,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#a70505',
  },
  accbutton: {
    fontSize: 20,
    color: 'white',
  },
  text: {
        marginRight: 10,
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    input: {
        alignSelf: 'stretch',
        marginBottom: 20,
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    sector: {
    	marginRight: 20,
    	marginLeft: 20,
    	marginBottom: 20,
    	marginTop: 5,
    	padding: 10,
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
    },
     picker: {
    	width: 200,
    	height: 80,
    },
    pickerItem: {
    	height: 44,
    	color: 'black'
    },
    switch: {
        marginLeft: 20,
	},
});