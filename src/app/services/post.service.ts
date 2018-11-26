import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostsData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts");
  }

  addPost(title: string, content: string, category: string): Observable<any> {

    const post: Post = { title: title, content: content, category: category };
    return this.http.post("http://localhost:8081/api/posts/", post);
  }

  deletePost(id: String): Observable<any> {
    console.log("Deleting post " + id);
    return this.http.delete("http://localhost:8081/api/posts/" + id);
  }
  getPost(id: String): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/" + id);
  }
  editPost(id: String, title: string, content: string, category: string) {
    //id is undefined
    const post: Post = { title: title, content: content, category: category };
    console.log("EDITING POST IN POST SERVICE " + post.title + " " + id + " " + post.content);
    return this.http.put("http://localhost:8081/api/posts/" + id, post);
  }
}
