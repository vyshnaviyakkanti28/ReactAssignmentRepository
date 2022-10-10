import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// const axios = require('axios');
import axios from 'axios'

class ArticleComponent extends React.Component{
    state = {
        articles: []
    }
    componentDidMount(){
        axios.get('http://localhost:5000/movies')
            .then((res) => {
                this.setState({articles: res.data})
            })
    }

    render(){
        return (
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Article</th>
                    <th scope="col">News Site</th>
                    <th scope="col">Date Published</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.articles
                    .map((article, index) =>
                        <tr>
                            <th key={article.id}>{index+1}</th>
                            <td><a href={article.url}>{article.title}</a></td>
                            <td>{article.newsSite}</td>
                            <td>{article.publishedAt}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}

export default ArticleComponent