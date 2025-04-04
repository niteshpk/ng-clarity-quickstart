import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ClrConditionalModule, ClrDataModule } from '@clr/angular';
import { forkJoin } from 'rxjs';
import { Post, PostService } from '../../../services/post/post.service';
import { UserService } from '../../../services/user/user.service';

interface PostViewModel extends Post {
  author: string;
}

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [NgIf, ClrDataModule, ClrConditionalModule],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.scss',
})
export class SecondPageComponent {
  articles: PostViewModel[] = [];

  constructor(
    private postervice: PostService,
    private userService: UserService
  ) {}

  ngOnInit() {
    forkJoin([this.getUsers(), this.getPosts()]).subscribe(([users, posts]) => {
      const userMap = new Map(users.map((user) => [user.id, user.name]));

      this.articles = posts.map((post) => {
        const author = userMap.get(post.id) ?? 'NA';
        return { ...post, author };
      });
    });
  }

  getPosts() {
    return this.postervice.getPosts();
  }

  getUsers() {
    return this.userService.getUsers();
  }
}
