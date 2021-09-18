import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <CommentDetail
      author="Mole"
      date="Today at 10 :43AM"
      text="Hello"
      pic={faker.image.avatar()}
      />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail
      author="Chubby"
      date="Today at 10 :43AM"
      text="Bonjour"
      pic={faker.image.avatar()}
      />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail
      author="Snugry"
      date="Today at 10 :43AM"
      text="Asalami"
      pic={faker.image.avatar()}
      />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
