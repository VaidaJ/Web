import React, {Component} from 'react';

import index from "../frontend/src/index.js";
import _ from 'lodash';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			titles: [],
			genres: [],
			picture: [],
			language: [],
			status: [],
			summary: [],
		}
	}


	//const url = 'http://api.tvmaze.com/shows?page=1';

	componentDidMount()
	{
		const api = fetch('http://api.tvmaze.com/singlesearch/shows?q=girls').
		then(Response => Response.json()).
		then(findresponse => 
			{
				console.log(findresponse);		
				this.setState({
					titles: findresponse.name,
					genres: findresponse.genres,
					picture: findresponse.image.medium,
					language: findresponse.language,
					status: findresponse.status,
					summary: findresponse.summary,
				});
				console.log(this.state.titles);
			})
		const data = api;


		console.log(api.name);
	}
	render()
	{
		return(
			<div>
				<img src={this.state.picture}></img>
                <ul>Title: {this.state.titles}</ul>
				<ul>Genre: {this.state.genres}</ul>	
				<ul>Language: {this.state.language}</ul>
				<ul>Status: {this.state.status}</ul>	
				<ul>Description: {this.state.summary}</ul>				
			</div>
		);
	}
}

export default App;