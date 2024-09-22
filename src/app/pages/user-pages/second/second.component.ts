import { Component } from '@angular/core';
import { PostService, Post } from '../../../services/post/post.service';
import { ClrConditionalModule, ClrDataModule } from '@clr/angular';
import { NgIf } from '@angular/common';
import { forkJoin } from 'rxjs';
import { User, UserService } from '../../../services/user/user.service';
import { AlertComponent } from '../../../components/alert/alert.component';

interface PostViewModel extends Post {
  author: string;
}

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [NgIf, ClrDataModule, ClrConditionalModule, AlertComponent],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
})
export class SecondComponent {
  // posts: Post[] = [];
  // users: User[] = [];

  viewPosts: PostViewModel[] = [];

  constructor(
    private postervice: PostService,
    private userService: UserService
  ) {}

  ngOnInit() {
    forkJoin([this.getUsers(), this.getPosts()]).subscribe(([users, posts]) => {
      // console.log('users ', users);
      // console.log('posts ', posts);
      // this.users = users;
      // this.posts = posts;
      this.viewPosts = posts.map((post) => {
        const user = users.find((u) => u.id === post.id);

        return { ...post, author: user?.name ?? 'NA' };
      });
    });
  }

  getPosts() {
    return this.postervice.getPosts();
  }

  getUsers() {
    return this.userService.getUsers();
  }

  handleClose($event: boolean) {
    console.log($event);
  }
}
