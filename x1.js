import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

export default class X1 extends React.Component {

//   eventLogger = (e: MouseEvent, data: Object) => {
//     console.log('Event: ', e);
//     console.log('Data: ', data);
//   };

  render() {
    return (
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{x: 100, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        
        >
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    );
  }
}