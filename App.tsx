import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const App = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(`${newValue}`);
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(`${newValue}`);
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const percentage = () => {
    const value = parseFloat(display) / 100;
    setDisplay(`${value}`);
  };

  const toggleSign = () => {
    if (display.charAt(0) === '-') {
      setDisplay(display.substr(1));
    } else {
      setDisplay('-' + display);
    }
  };

  const Button = ({ onPress, title, style, textStyle }: any) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      
      <View style={styles.displayContainer}>
        <Text style={styles.display} adjustsFontSizeToFit numberOfLines={1}>
          {display}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Button onPress={clear} title="C" style={styles.functionButton} />
          <Button onPress={toggleSign} title="±" style={styles.functionButton} />
          <Button onPress={percentage} title="%" style={styles.functionButton} />
          <Button onPress={() => inputOperation('÷')} title="÷" style={styles.operatorButton} />
        </View>

        <View style={styles.row}>
          <Button onPress={() => inputNumber('7')} title="7" />
          <Button onPress={() => inputNumber('8')} title="8" />
          <Button onPress={() => inputNumber('9')} title="9" />
          <Button onPress={() => inputOperation('×')} title="×" style={styles.operatorButton} />
        </View>

        <View style={styles.row}>
          <Button onPress={() => inputNumber('4')} title="4" />
          <Button onPress={() => inputNumber('5')} title="5" />
          <Button onPress={() => inputNumber('6')} title="6" />
          <Button onPress={() => inputOperation('-')} title="-" style={styles.operatorButton} />
        </View>

        <View style={styles.row}>
          <Button onPress={() => inputNumber('1')} title="1" />
          <Button onPress={() => inputNumber('2')} title="2" />
          <Button onPress={() => inputNumber('3')} title="3" />
          <Button onPress={() => inputOperation('+')} title="+" style={styles.operatorButton} />
        </View>

        <View style={styles.row}>
          <Button onPress={() => inputNumber('0')} title="0" style={styles.zeroButton} />
          <Button onPress={inputDecimal} title="." />
          <Button onPress={performCalculation} title="=" style={styles.operatorButton} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  display: {
    fontSize: 70,
    fontWeight: '300',
    color: '#ffffff',
    textAlign: 'right',
  },
  buttonsContainer: {
    flex: 3,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    height: 80,
    backgroundColor: '#333333',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '400',
    color: '#ffffff',
  },
  functionButton: {
    backgroundColor: '#a6a6a6',
  },
  operatorButton: {
    backgroundColor: '#ff9500',
  },
  zeroButton: {
    flex: 2,
    marginRight: 15,
  },
});

export default App; 