import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cloudera-github-app';
  searchValue = '';
  database = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.searchValue = event.target.value;
  }

  getGithubRepos() {
    if(this.searchValue != ''){
      console.log('get repos!')
      this.httpClient.get('https://api.github.com/search/repositories?q=' + this.searchValue).subscribe((res)=>{
        console.log(res)
        this.database = []
        for(let i = 0; i < res['items'].length; i++){
          let json_data = {}
          console.log(res['items'][i])
          json_data['name'] = res['items'][i].name
          json_data['html_url'] = res['items'][i].html_url
          json_data['description'] = res['items'][i].description
          json_data['forks_count'] = res['items'][i].forks_count
          json_data['stargazers_count'] = res['items'][i].stargazers_count
          json_data['open_issues_count'] = res['items'][i].open_issues_count
          this.database.push(json_data)
        }
        console.log(this.database)
      });
    }else{
      console.log('search value empty')
      this.database = []
    }

  }
}
