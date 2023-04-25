import { useState, useRef, useEffect } from 'react';

export default function HomePage() {

    function TypeWriter() {

        const [placeholder, setplaceholder] = useState('');

        const string = '  A computer science portal for geeks', index = useRef(0);
        useEffect(() => {
            function tick() {
                setplaceholder(prev => prev + string[index.current]);
                index.current++;
            }
            function clear() {
                setplaceholder(prev => '');
                index.current = 0;
            }

            if (index.current < (string.length) - 1) {
                let addChar = setInterval(tick, 150);
                return () => clearInterval(addChar);
            } else {
                let addChar = setInterval(clear, 150);
                return () => clearInterval(addChar);
            }
        }, [placeholder]);

        return (
            <div>
                {placeholder}
            </div>
        )
    };

    function loadInfo() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            document.getElementById("post").innerHTML +=
                this.responseText;
            btn = document.getElementById("btnAdd");
            btn.remove();
        }
        xhttp.open("GET", "/data.jsx");
        xhttp.send();
    }

    return (
        <>
            <title>GeeksforGeeks</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="/style.css" />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
            />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="blog-title">
                            <a href="" title="GeeksforGeeks">
                                GeeksforGeeks
                            </a>
                        </h1>
                        <div className="blog-description" id="description">
                            <TypeWriter />
                        </div>
                    </div>
                </div>
                <nav>
                    <div className="nav navbar-nav navbar-right">
                        <a href="" title="Register">
                            Register
                        </a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <a href="" title="Login">
                            Login
                        </a>
                    </div>
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Courses</a>
                            </li>
                            <li>
                                <a href="">Q&amp;A</a>
                            </li>
                            <li>
                                <a href="">Jobs</a>
                            </li>
                            <li>
                                <a href="">Contests</a>
                            </li>
                        </ul>
                    </div>
                    <form className="navbar-form navbar-right" action="/action_page.php">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <i className="glyphicon glyphicon-search" />
                                </button>
                            </div>
                        </div>
                    </form>
                </nav>
                <nav>
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="">Arrays</a>
                            </li>
                            <li>
                                <a href="">Data Structures</a>
                            </li>
                            <li>
                                <a href="">Interview Preparation</a>
                            </li>
                            <li>
                                <a href="">Data Science</a>
                            </li>
                            <li>
                                <a href="">C</a>
                            </li>
                            <li>
                                <a href="">Python</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div id="content" className="col-lg-10">
                        <div id="post" className="post">
                            <div className="post-main">
                                <div className="post-info">
                                    <div className="post-title-info">
                                        <h2>
                                            <a href="">Adapt HTML code responsively with Bootstrap</a>
                                        </h2>
                                        <a href="">Leave a comment</a>
                                    </div>
                                    <div className="post-date">February 25, 2003</div>
                                </div>
                                <div className="post-content">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Dolore, quia ex labore commodi consectetur delectus voluptatem
                                        repellat quae aspernatur laborum rem beatae aperiam repellendus
                                        earum animi autem quibusdam. Saepe, itaque!
                                    </p>
                                </div>
                            </div>
                            <div className="post-main">
                                <div className="post-info">
                                    <div className="post-title-info">
                                        <h2>
                                            <a href="">Detect Cycle in a Graph</a>
                                        </h2>
                                        <a href="">Leave a comment</a>
                                    </div>
                                    <div className="post-date">February 25, 2003</div>
                                </div>
                                <div className="post-content">
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                        quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                        voluptas sit aspernatur aut odit aut fugit
                                    </p>
                                </div>
                            </div>
                            <div className="post-main">
                                <div className="post-info">
                                    <div className="post-title-info">
                                        <h2>
                                            <a href="">Add data to your website with Ajax</a>
                                        </h2>
                                        <a href="">Leave a comment</a>
                                    </div>
                                    <div className="post-date">April 28, 2003</div>
                                </div>
                                <div className="post-content">
                                    <p>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate
                                        non provident, similique sunt in culpa qui officia deserunt
                                        mollitia animi, id est laborum et dolorum fuga
                                    </p>
                                </div>
                            </div>
                            <div className="post-main">
                                <div className="post-info">
                                    <div className="post-title-info">
                                        <h2>
                                            <a href="">Et harum quidem rerum facilis</a>
                                        </h2>
                                        <a href="">Leave a comment</a>
                                    </div>
                                    <div className="post-date">April 28, 2003</div>
                                </div>
                                <div className="post-content">
                                    <p>
                                        Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                        nihil impedit quo minus id quod maxime placeat facere possimus,
                                        omnis voluptas assumenda est.
                                    </p>
                                </div>
                            </div>
                            <div id="btnAdd" className="page-navi">
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={loadInfo}
                                >
                                    - Older Posts -
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <ul id="sidebar">
                            <img src="/ads/ad1.gif" />
                            <img src="/ads/ad3.gif" />
                            <img src="/ads/ad5.gif" />
                            <li>
                                <h2>Our Forum (Latest posts)</h2>
                                <ul>
                                    <li>
                                        <a href="">Algorithm 13</a>
                                        <small>
                                            <br />
                                            Comment: "ChatGPT is gonna take our jobs..."
                                            <br />
                                            Last Post By: Velgor
                                            <br />
                                            Date: 28/03/2001
                                        </small>
                                    </li>
                                    <li>
                                        <a href="">Web 32</a>
                                        <small>
                                            <br />
                                            Comment: "I don't like web programming 'cause..."
                                            <br />
                                            Last Post By: User494943
                                            <br />
                                            Date: 28/03/2001
                                        </small>
                                    </li>
                                    <li>
                                        <a href="">Algorithm 1123</a>
                                        <small>
                                            <br />
                                            Comment: "I've been awake since 5am without solve this..."
                                            <br />
                                            Last Post By: superhero3942
                                            <br />
                                            Date: 28/03/2001
                                        </small>
                                    </li>
                                    <li>
                                        <a href="">Forum 12</a>
                                        <small>
                                            <br />
                                            Comment: "Idk what to write or..."
                                            <br />
                                            Last Post By: yourbro32
                                            <br />
                                            Date: 28/03/2001
                                        </small>
                                    </li>
                                    <li>
                                        <a href="">Forum 21</a>
                                        <small>
                                            <br />
                                            Comment: "I'll be the best browser..."
                                            <br />
                                            Last Post By: internetexplorer01
                                            <br />
                                            Date: 28/03/2001
                                        </small>
                                    </li>
                                </ul>
                            </li>
                            <img src="ads/ad1.gif" />
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="images">
                            <img src="/ads/ad6.gif" />
                            <img src="/ads/ad4.gif" />
                            <img src="/ads/ad2.gif" />
                        </div>
                    </div>
                </div>
            </div>
            <footer className="container">
                <div id="footer" className="col-lg-12">
                    <div>
                        <p>
                            Rights reserved for <a href="">Guillermo Esquivel </a>{" "}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

