import './code/styles/main.scss';
import './icons.css';

import { Resizable } from 'react-resizable';

import LeftPanel from "./code/views/LeftPanel";
import RightPanel from "./code/views/RightPanel";

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { fetchAuth } from './store/features/userInfoSlice';

function App() {
  const dispatch = useDispatch();

  let startBlockWidth = localStorage.getItem("selectBlockWidth") ? Number(localStorage.getItem("selectBlockWidth")) : 300;

  const [selectBlockWidth, setSelectBlockWidth] = useState(startBlockWidth);


  useEffect(() => {
      dispatch(fetchAuth());
  }, [dispatch]);

  const handleResize = (e, { size, handle, edge }) => {
      const _selectBlockWidth = size.width;
      const chatBlockWidth = window.innerWidth - _selectBlockWidth;
      setSelectBlockWidth(size.width);
      localStorage.setItem("selectBlockWidth", String(_selectBlockWidth));
      document.querySelector('.right-panel').style.width = chatBlockWidth + 'px';
      document.querySelector('.left-panel').style.width = _selectBlockWidth + 'px'; 
  };

  return (
      <div className="main">
              <LeftPanel width={{selectBlockWidth}}></LeftPanel>
              <Resizable
                  height={0}
                  onResize={handleResize}
                  minConstraints={[300, 0]}
                  maxConstraints={[800, 0]}
                  resizeHandles={['e']}
                  width={selectBlockWidth}
                  style={{"width": String(startBlockWidth) + "px"}}
              > 
                <></>
              </Resizable>
              <RightPanel width={{selectBlockWidth}}></RightPanel>
      </div>
  );
}

export default App;
