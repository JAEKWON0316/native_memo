import React from 'react'
import { StyleSheet, View, Image, Text, Modal, TouchableOpacity } from 'react-native'; //TouchableOpacity는 버튼이랑 똑같다 손가락으로 눌렀을 때 반응이 보여지게 하는것!
import { useMemos } from '../context/MemoProvider';
import MemoWrite from './MemoWrite';

const MemoBlank = () => {
  const { handleWritePress, isWriting, handleClose} = useMemos();
  return (
    <View style={styles.container}>
      <Text style={styles.desc}>메모가 없습니다!</Text>
      <Image
        source={require('../assets/0002.png')}
        style={styles.image}
        resizeMode='contain'
        />
        <TouchableOpacity style={styles.button} onPress={handleWritePress}>
          <Text style={styles.buttonText}>글쓰기</Text>  
        </TouchableOpacity>
        <Modal visible={isWriting} animationType='slide'
                onRequestClose={handleClose}>
                <MemoWrite onClose = {handleClose} />
        </Modal>
    </View>
  )
}

export default MemoBlank
const styles = StyleSheet.create({
  container: {
    flex: 1,  //react-native에서 style 줄 때 flex:1을 꼭 해주는게 좋다.
    alignItems: 'center',
    justifyContent: 'center'
  },
  image:{
    width:'80%',
    marginTop: 20
  },
  desc:{
    fontSize:30,
    color:'#E91E63',
    fontWeight: 'bold'
  },
  button: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#3F51B5',
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
})