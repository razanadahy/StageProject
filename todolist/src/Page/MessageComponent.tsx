import React from 'react';

interface MessageComponentProps {
  message: string;
}

class MessageComponent extends React.Component<MessageComponentProps> {
  render() {
    return <div>{this.props.message}</div>;
  }
}

export default MessageComponent;