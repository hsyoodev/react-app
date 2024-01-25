import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  return (
    <div class="p-5 bg-primary text-white text-center">
      <h1>
        <Link to="/signin" class="link-dark">
          로그인 후 사용해주세요.
        </Link>
      </h1>
    </div>
  );
};

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/board/list">
              게시판
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/map">
              지도
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">
              이메일
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Index = () => {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-4">
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <div class="fakeimg">Fake Image</div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3 class="mt-4">Some Links</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Active
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <hr class="d-sm-none" />
        </div>
        <div class="col-sm-8">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2020</h5>
          <div class="fakeimg">Fake Image</div>
          <p>Some text..</p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>

          <h2 class="mt-5">TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2020</h5>
          <div class="fakeimg">Fake Image</div>
          <p>Some text..</p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div class="mt-5 p-4 bg-dark text-white text-center">
      <p>Footer</p>
    </div>
  );
};

const BoardList = () => {
  return (
    <div class="container mt-5">
      <div class="row">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <a>[[ ]] ( 0 )</a>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>

          <li class="page-item">
            <a class="page-link">[[ ]]</a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>

        <button type="button" class="btn btn-primary btn-block" id="write-btn">
          글쓰기
        </button>
      </div>
    </div>
  );
};
const Board = () => {
  return <Outlet></Outlet>;
};

const BoardWrite = () => {
  return (
    <div class="container mt-5">
      <div class="row">
        <form method="post" action="/board/write" enctype="multipart/form-data">
          <div class="mb-3">
            <label for="title">Title:</label>
            <input
              type="text"
              class="form-control"
              id="title"
              name="title"
              required
            />
          </div>
          <div class="mb-3">
            <label for="content">Content:</label>
            <textarea
              class="form-control"
              rows="5"
              name="content"
              id="content"
              required
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="file">파일첨부:</label>
            <input
              class="form-control"
              name="file"
              id="file"
              type="file"
              accept="image/*"
            />
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" id="complete">
              글쓰기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const BoardView = () => {
  const { boardId } = useParams();
  alert(boardId);
  return (
    <>
      <div class="container mt-5">
        <div class="card">
          <div class="card-body">
            <span class="badge bg-primary rounded-pill"></span>
            <h5 class="card-title"></h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
            <p class="card-text"></p>
          </div>
          <img />
        </div>
      </div>
      <div class="container mt-5">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" href="#" id="list">
              목록
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">수정</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="delete">
              삭제
            </a>
          </li>
        </ul>
      </div>

      <form action="/board/comment/add" method="post">
        <input type="hidden" name="boardId" />
        <input type="text" name="comment" />
        <button>댓글 작성</button>
      </form>
      <hr />
      <ul>
        <li>
          댓글 / 이름
          <button>삭제</button>
        </li>
      </ul>
    </>
  );
};

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  return (
    <div class="container mt-5">
      <div class="row">
        <form method="post" action="/signup">
          <div class="mb-3">
            <label for="email">Email:</label>
            <input
              type="text"
              class="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                const value = e.target.value;
                setEmail(value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="pwd">Password:</label>
            <input
              type="password"
              class="form-control"
              id="pwd"
              name="pwd"
              value={password}
              onChange={(e) => {
                const value = e.target.value;
                setPassword(value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="name">Name:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e) => {
                const value = e.target.value;
                setName(value);
              }}
            />
          </div>
          <div class="d-grid gap-2">
            <button
              class="btn btn-primary"
              id="signup"
              onClick={async (e) => {
                e.preventDefault();

                // post 방식으로 파라미터를 전달하기 위한 객체
                const formData = new FormData();
                formData.append('email', email);
                formData.append('pwd', password);
                formData.append('name', name);
                const data = await fetch('http://localhost:8080/api/signup', {
                  method: 'post',
                  body: formData,
                  // body: JSON.stringify({email, password, name})
                });
                const res = await data.json();
                alert(res.msg);
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Signin = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  return (
    <div class="container mt-5">
      <div class="row">
        <form method="post" action="/signin">
          <div class="mb-3 input-group flex-nowrap">
            <span class="input-group-text">💻</span>
            <input
              type="text"
              class="form-control"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => {
                const value = e.target.value;
                setEmail(value);
              }}
            />
          </div>
          <div class="mb-3 input-group flex-nowrap">
            <span class="input-group-text">🔒</span>
            <input
              type="password"
              class="form-control"
              name="pwd"
              placeholder="password"
              value={pwd}
              onChange={(e) => {
                const value = e.target.value;
                setPwd(value);
              }}
            />
          </div>
          <div class="d-grid gap-2">
            <button
              class="btn btn-primary"
              id="signin"
              onClick={async (e) => {
                e.preventDefault();
                const formData = new FormData();
                formData.append('email', email);
                formData.append('pwd', pwd);

                const data = await fetch('http://localhost:8080/api/signin', {
                  method: 'post',
                  body: formData,
                });
                const res = await data.json();
                alert(res.msg);
                if (res.code == 200) {
                  sessionStorage.setItem('login_user', res.login_user);
                }
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <>
        {' '}
        {/* Fragment */}
        <Header />
        <Nav />
        <Routes>
          <Route index element={<Index />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="board" element={<Board />}>
            <Route path="list" element={<BoardList />}></Route>
            <Route path="write" element={<BoardWrite />}></Route>
            <Route path=":boardId" element={<BoardView />}></Route>
          </Route>
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
