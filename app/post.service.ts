import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class PostService {
    private _url = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private _http: Http) {

    }
    getPosts(): Observable<Post> {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    createPost(post: Post) {
        this._http.post(this._url, JSON.stringify(post))
            .map(res =>
                res.json()
            );
    }
}
export interface Post {
    userId: number;
    id?: number;
    title: string;
    body: string;
}
