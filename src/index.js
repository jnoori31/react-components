import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
      author="Mole"
      date="Today at 10 :43AM"
      text="Hello"
      pic={faker.image.avatar()}
      />
      <CommentDetail
      author="Chubby"
      date="Today at 10 :43AM"
      text="Bonjour"
      pic={faker.image.avatar()}
      />
      <CommentDetail
      author="Snugry"
      date="Today at 10 :43AM"
      text="Asalami"
      pic={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
