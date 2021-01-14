import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
    };
   const addGoalInput = () =>{
          props.onAddGoal(enteredGoal);
          setEnteredGoal(" ");
   
  };
  const sss =() =>{
        props.onCancle();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.top}>
    <View style={styles.topic}><Text>To-Do list</Text></View></View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Task TO-DO"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={ styles.buttoninput}>
           <View style={ styles.button}>
                <Button title="CANCLE" color="red" onPress={sss} />
            </View>
            <View style={ styles.button}>
                <Button title="ADD" onPress={addGoalInput} />
            </View>
        </View>
       </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10 
  },
  buttoninput:
  {
    padding : 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  button :
  {
       padding: 10,
       width : "50%"
  },
  topic:{
    fontSize : 0,
    height: 50,
    backgroundColor: 'red',
    padding: 10,
    marginLeft: 40,
    width: '80%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 20
  },
  top:{
        padding: 10
  }
});

export default GoalInput;
