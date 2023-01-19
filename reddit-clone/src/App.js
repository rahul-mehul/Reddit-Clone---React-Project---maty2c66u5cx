import './App.css';
import { Homepage } from './components/Homepage';
import Post from './components/Post';

const App = () => {
  // const posts = [
  //   {
  //     postedBy: "Kunal",
  //     postText:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     upVotes: 3,
  //     downVotes: 1
  //   },
  //   {
  //     postedBy: "Rahul",
  //     postText:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     upVotes: 3,
  //     downVotes: 1
  //   },
  //   {
  //     postedBy: "Surya",
  //     postText:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     upVotes: 3,
  //     downVotes: 1
  //   },
  // ]

  return (
    <div>
      <Homepage />
      <Post />
      <Post />
      <Post />

    </div>
  );
}

export default App;
