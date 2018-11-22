'use strict';

import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';
import moment from "moment";
import {
	Switch,
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    date,
    Picker
} from 'react-native';
import Button from 'react-native-button';
import Acc from 'react-native-acc';
import styles from './../../../Styles';
import {DeviceTag} from 'react-native-acc';

export default class DeviceTagScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Device Tag",
  });

  constructor(props) {
        super(props);
        this.state = {
        	categorie : null,
        	identifier : null,
        	key : null,
        	value : null,
        	type : null,
        	date : null,
        	dataDict : {}
        };
  }
  render() {
    const { navigate } = this.props.navigation;
        return (  
     
        <View style={styles.container}>
        
        	<ScrollView  contentContainerStyle={styles.scrollcontainer}
  						 scrollEnabled={true}>
  			
          	<View style={styles.flowRight}>
                    <Text style={styles.text}>
                        Categorie
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.categorie}
                        onChange={this._onKeyCategorieChanged}
                        ref={input => { this.textCategorieInput = input }}
                        clearButtonMode="always"
                        placeholder='Categorie'/>
            </View>
            
            <View style={styles.flowRight}>
                	<Text style={styles.text}>
                    	Identifier
                	</Text>
                	<TextInput
                    	style={styles.input}
                    	value={this.state.identifier}
                    	onChange={this._onValueIdentifierChanged}
                    	ref={input => { this.textIdentifierInput = input }}
                    	clearButtonMode="always"
                    	placeholder='Identifier'/>
            </View>
            
         <View style={styles.sector}>
         	<Text style={styles.text}>
                    Add data
            </Text>
            
            <View style={styles.flowRight}>
                    <Text style={styles.text}>
                        Key : 
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.key}
                        onChange={this._onKeyChanged}
                        ref={input => { this.textKeyInput = input}}
                        clearButtonMode="always"
                        placeholder='Key'/>
            </View>
            
                        
            <View style={styles.flowRight}>
            	<Picker style={styles.picker} itemStyle={styles.pickerItem}
            		selectedValue={this.state.type}
 				    onValueChange={(itemValue) => this.setState({type: itemValue})}>
 		   		<Picker.Item label="Text" value="Text" />
  		   		<Picker.Item label="Number" value="Number" />
  		   		<Picker.Item label="Date" value="Date" />
		   		</Picker>
		   </View>
		   
		   <View style={styles.flowRight}>
                    <Text style={styles.text}>
                        Value  : 
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.value}
                        onChange={this._onValueChanged}
                        ref={input => { this.textValueInput = input }}
                        clearButtonMode="always"
                        keyboardType={(this.state.type === "Number") ? 'numeric' : 'default'}
                        placeholder='Value'/>
                      
                <View hide={true}>
                	{(this.state.type === "Date") ? 
                	<DatePicker
  						style={{ width: 30 }}
  						date={this.state.date}
  						mode="date"
  						placeholder="select date"
  						format="YYYY-MM-DD"
  						confirmBtnText="Confirm"
  						cancelBtnText="Cancel"
  						customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 30
                            }
                        }}
                        onDateChange={(date) => {
                            this.setState({date:moment(date)});
                            this.setState({value:moment(date).format("YYYY-MM-DD")});
                        }}
					/>
                	: null} 
				</View>
            </View>
                        
            <Button
            		disabled={((this.state.key === null) || (this.state.value === null) || (this.state.key === "") || (this.state.value === "")) ? true : false}
                	onPress={this._sendAddDataAction}>
                	Add data
           	</Button>
        </View>
             
        
        <View style={{flexDirection: 'row'}}>
            <Button style={styles.blueButton}
                	styleDisabled={styles.disabledButton}
                	disabled={((this.state.categorie === null) || (this.state.identifier === null) || (this.state.categorie === "") || (this.state.identifier === "")) ? true : false}
                	onPress={this._sendSetDeviceTagAction}>
                			Add device tag
           	</Button>
            
            <Button style={styles.redButton}
            		styleDisabled={styles.disabledButton}
                	disabled={((this.state.categorie === null) || (this.state.identifier === null) || (this.state.categorie === "") || (this.state.identifier === "")) ? true : false}
                	onPress={this._sendDelelteDeviceTagAction}>
                			Delete device tag
            </Button> 
       </View> 
	</ScrollView>   
</View>
  
        );
    }
    
	 _onKeyCategorieChanged = (event) => {
    	this.setState({categorie: event.nativeEvent.text});
    };

    _onValueIdentifierChanged = (event) => {
        this.setState({identifier: event.nativeEvent.text});
    };
    
    _onKeyChanged = (event) => {
        this.setState({key: event.nativeEvent.text});
    };
    
    _onValueChanged = (event) => {
        this.setState({value: event.nativeEvent.text});
    };
    
    _sendSetDeviceTagAction = () => {
		this._setDeviceTag(this.state.categorie, this.state.identifier)
    }
    
    _sendDelelteDeviceTagAction = () => {
    	this._deleteDeviceTag(this.state.categorie, this.state.identifier)
    }
    
	_sendAddDataAction = () => {
		//Adding Items To data dictionary.
		if (this.state.type === "Date") {
			this.state.dataDict[this.state.key]	= this.state.date;
		} else if (this.state.type === "Number") {
			this.state.dataDict[this.state.key]	= parseInt(this.state.value, 10);
		} else {
			this.state.dataDict[this.state.key]	= this.state.value;
		}
      	
      	//Clear key and value input texts
		this._initializeDataSection();
	}
	
    _setDeviceTag(categorie, identifier) {
      Acc.analytics.deviceTag.setDeviceTag(categorie, identifier, this.state.dataDict);
      this._initializeAll();
    }
    
    _deleteDeviceTag(categorie, identifier) {
      Acc.analytics.deviceTag.deleteDeviceTag(categorie, identifier);
      this._initializeAll();
    }
    
    _initializeDataSection = () => {
    	this.textKeyInput.clear();
    	this.textValueInput.clear();
    	this.setState({date:null});
    	this.setState({key:null});
    	this.setState({value:null});
    }
    
    _initializeAll = () => {
    	this.textCategorieInput.clear();
    	this.textIdentifierInput.clear();
    	this.textKeyInput.clear();
    	this.textValueInput.clear();
    	this.setState({categorie:null});
    	this.setState({identifier:null});
    	this.setState({dataDict:{}});
    	this.setState({sendButtonDisabled:true});
    	this.setState({deleteButtonDisabled:true});
    }
}
