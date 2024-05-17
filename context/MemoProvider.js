import React, {createContext, useState, useContext} from 'react' //createcontext로 만들고 usecontext로 쓴다. 두 개는 한쌍
const MemoContext = createContext();
export const useMemos = () => useContext(MemoContext);

export const MemoProvider = ({children}) => {
  const [memos, setMemos] = useState([]);
  const [isWriting, setIsWriting] = useState(false);
  const handleWritePress = () => {
    setIsWriting(true);
  }
  const handleClose = () => {
    setIsWriting(false);
  }
  return (
    <MemoContext.Provider value={{
        memos,
        setMemos,
        isWriting,
        setIsWriting,
        handleWritePress,
        handleClose
    }}>
        {children}
    </MemoContext.Provider>
  );
};

