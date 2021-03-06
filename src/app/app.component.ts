import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchValue = '';
  database = [];
  issues = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.searchValue = event.target.value;
  }

  getGithubRepos() {
    if(this.searchValue != ''){
      this.httpClient.get('https://api.github.com/search/repositories?q=' + this.searchValue).subscribe((res)=>{
        console.log(res)
        this.database = [];
        for(let i = 0; i < res['items'].length; i++){
          let json_data = {};
          json_data['name'] = res['items'][i].name;
          json_data['full_name'] = res['items'][i].full_name;
          json_data['html_url'] = res['items'][i].html_url;
          json_data['description'] = res['items'][i].description;
          json_data['forks_count'] = res['items'][i].forks_count;
          json_data['stargazers_count'] = res['items'][i].stargazers_count;
          json_data['open_issues_count'] = res['items'][i].open_issues_count;
          this.database.push(json_data);
        }
      });
    }else{
      this.database = [];
    }
  }
  showIssues(i: number) {
    this.issues = [];
    console.log("Displaying " + i.toString() + " repo issue")
    this.httpClient.get('https://api.github.com/search/issues?q=repo:' + this.database[i].full_name + '+state:open').subscribe((res)=>{
        for(let i = 0; i < res['items'].length; i++){
          let json_data = {};
          console.log(res['items'][i])
          json_data['number'] = res['items'][i].number;
          json_data['title'] = res['items'][i].title;
          json_data['updated_at'] = res['items'][i].updated_at;
          json_data['state'] = res['items'][i].state;
          json_data['url'] = res['items'][i].html_url;
          this.issues.push(json_data);
        }
      });
  }
}
