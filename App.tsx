/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from './src/components/Button'
import Display from './src/components/Display'

function App(): JSX.Element {
  state = {
    displayValue: '0'
  }

  addDigit = n => {
    this.setState({ displayValue: n })
  }

  clearMemory = () => {
    this.setState({ displayValue: '0'})
  }

  setOperation = operation => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <Display value={this.state.displayValue} />
      <View style={styles.buttons}>
          <Button label="AC" triple onClick={this.clearMemory} />
          <Button label="/" operation onClick={() => this.setOperation('/')} />
          <Button label="7" onClick={this.addDigit} />
          <Button label="8" onClick={this.addDigit} />
          <Button label="9" onClick={this.addDigit} />
          <Button label="*" operation onClick={() => this.setOperation('*')}/>
          <Button label="4" onClick={this.addDigit}/>
          <Button label="5" onClick={this.addDigit}/>
          <Button label="6" onClick={this.addDigit}/>
          <Button label="-" operation onClick={() => this.setOperation('-')}/>
          <Button label="1" onClick={this.addDigit}/>
          <Button label="2" onClick={this.addDigit}/>
          <Button label="3" onClick={this.addDigit}/>
          <Button label="+" operation onClick={() => this.setOperation('+')}/>
          <Button label="0" double onClick={this.addDigit}/>
          <Button label="." onClick={this.addDigit}/>
          <Button label="=" operation onClick={() => this.setOperation('=')}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default App;
