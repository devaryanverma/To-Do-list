import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Text
} from 'react-native';

import GoalItem from './Component/GoalItem';
import GoalInput from './Component/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };
  const aaa = () =>
  {
        setIsAddMode(false);
  };


  return (
    <View style={styles.screen}>
      <View style={styles.topic}><Text>To-Do list</Text></View>
      <View style={styles.gap}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancle={aaa} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  topic:{
    fontSize : 10,
    height: 50,
    backgroundColor: 'red',
    padding: 10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 20
  },
  gap:{
        padding: 10
  }
});
